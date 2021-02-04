const mongoose = require('mongoose');
const Article = mongoose.model('Article');

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().select(
      'type _id title description date photo'
    );

    return res.status(200).json({
      status: 'OK',
      data: articles.map((data) => {
        return {
          type: data.type,
          id: data._id,
          attributes: {
            title: data.title,
            description: data.description,
            date: data.date,
            photo: data.photo,
            _request: {
              type: 'GET',
              url: '/articles/' + data._id,
            },
          },
        };
      }),
      error: null,
    });
  } catch (error) {
    res.status(404).json({
      status: 'Not Found',
      data: null,
      error: error.message,
    });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const id = req.params.id;
    const articles = await Article.findById(id)
      .select('type _id title description date link photo author')
      .populate('author', '_id name');

    if (articles) {
      res.status(200).json({
        status: 'OK',
        data: {
          type: articles.type,
          id: articles._id,
          attributes: {
            title: articles.title,
            description: articles.description,
            date: articles.date,
            link: articles.link,
            photo: articles.photo,
          },
          relationships: {
            author: articles.author,
          },
        },
        error: null,
      });
    }

    return res.status(204).json({
      status: 'No Content',
      data: null,
      error: 'No valid entry found for provided ID',
    });
  } catch (error) {
    res.status(404).json({
      status: 'Not Found',
      data: null,
      error: error.message,
    });
  }
};

exports.addNewArticle = async (req, res) => {
  try {
    req.user.password = undefined;
    req.user.__v = undefined;

    const article = new Article({
      _id: new mongoose.Types.ObjectId(),
      type: req.body.type,
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      link: req.body.link,
      photo: req.body.photo,
      author: req.user,
    });

    const data = await article.save();

    if (data) {
      return res.status(201).json({
        status: 'Created',
        data: {
          type: data.type,
          id: data._id,
          attributes: {
            title: data.title,
            description: data.description,
            date: data.date,
            link: data.link,
            photo: data.photo,
            _request: {
              type: 'GET',
              url: '/articles/' + data._id,
            },
          },
          relationships: {
            author: data.author,
          },
        },
        error: null,
      });
    }

    return res.status(204).json({
      status: 'No Content',
      data: null,
      error: 'No valid entry found for provided ID',
    });
  } catch (error) {
    res.status(404).json({
      status: 'Not Found',
      data: null,
      error: error.message,
    });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const id = req.params.id;
    const updateOps = {};

    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }

    const articles = await Article.findByIdAndUpdate(id, {
      $set: updateOps,
    }).exec();

    if (articles) {
      return res.status(200).json({
        status: 'OK',
        data: {
          type: articles.type,
          id: articles._id,
          attributes: {
            title: articles.title,
            description: articles.description,
            date: articles.date,
            link: articles.link,
            photo: articles.photo,
            _request: {
              type: 'GET',
              url: '/articles/' + articles._id,
            },
          },
          relationships: {
            author: articles.author,
          },
        },
        error: null,
      });
    }

    return res.status(204).json({
      status: 'No Content',
      data: null,
      error: 'No valid entry found for provided ID',
    });
  } catch (error) {
    res.status(404).json({
      status: 'Not Found',
      data: null,
      error: error.message,
    });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const id = req.params.id;

    const articles = await Article.findByIdAndRemove(id).exec();

    if (articles) {
      return res.status(200).json({
        status: 'OK',
        data: {
          type: articles.type,
          id: articles._id,
          attributes: {
            title: articles.title,
            description: articles.description,
            date: articles.date,
            photo: articles.photo,
            _request: {
              type: 'GET',
              url: '/articles/' + articles._id,
            },
          },
        },
        error: null,
      });
    }

    return res.status(204).json({
      status: 'No Content',
      data: null,
      error: 'No valid entry found for provided ID',
    });
  } catch (error) {
    res.status(404).json({
      status: 'Not Found',
      data: null,
      error: error.message,
    });
  }
};

const mongoose = require('mongoose');
const Project = mongoose.model('Project');

exports.getAllprojects = async (req, res) => {
  try {
    const projects = await Project.find().select(
      '_id title description date photo'
    );

    res.status(200).json({
      status: 'OK',
      data: projects.map((data) => {
        return {
          type: 'projects',
          id: data._id,
          attributes: {
            title: data.title,
            description: data.description,
            date: data.date,
            photo: data.photo,
            _request: {
              type: 'GET',
              url: '/projects/' + data._id,
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

exports.getProjectById = async (req, res) => {
  try {
    const id = req.params.id;
    const projects = await Project.findById(id)
      .select('_id title description date link photo technology author')
      .populate('author', '_id name');

    if (projects) {
      res.status(200).json({
        status: 'OK',
        data: {
          type: 'projects',
          id: projects._id,
          attributes: {
            title: projects.title,
            description: projects.description,
            date: projects.date,
            link: projects.link,
            photo: projects.photo,
            technology: projects.technology,
          },
          relationships: {
            author: projects.author,
          },
        },
        error: null,
      });
    } else {
      res.status(204).json({
        status: 'No Content',
        data: null,
        error: 'No valid entry found for provided ID',
      });
    }
  } catch (error) {
    res.status(404).json({
      status: 'Not Found',
      data: null,
      error: error.message,
    });
  }
};

exports.addNewProject = async (req, res) => {
  try {
    req.user.password = undefined;
    req.user.__v = undefined;

    const project = new Project({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      link: req.body.link,
      photo: req.body.photo,
      technology: req.body.technology,
      author: req.user,
    });

    const data = await project.save();

    if (data) {
      res.status(201).json({
        status: 'Created',
        data: {
          type: 'projects',
          id: data._id,
          attributes: {
            title: data.title,
            description: data.description,
            date: data.date,
            link: data.link,
            photo: data.photo,
            technology: data.technology,
            _request: {
              type: 'GET',
              url: '/projects/' + data._id,
            },
          },
          relationships: {
            author: data.author,
          },
        },
        error: null,
      });
    } else {
      res.status(204).json({
        status: 'No Content',
        data: null,
        error: 'No valid entry found for provided ID',
      });
    }
  } catch (error) {
    res.status(404).json({
      status: 'Not Found',
      data: null,
      error: error.message,
    });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const id = req.params.id;
    const updateOps = {};

    for (const ops of req.body) {
      console.log(ops.propName);
      updateOps[ops.propName] = ops.value;
      console.log(updateOps);
    }

    const projects = await Project.findByIdAndUpdate(id, {
      $set: updateOps,
    }).exec();

    if (projects) {
      return res.status(200).json({
        status: 'OK',
        data: {
          type: 'projects',
          id: projects._id,
          attributes: {
            title: projects.title,
            description: projects.description,
            date: projects.date,
            photo: projects.photo,
            technology: projects.technology,
            _request: {
              type: 'GET',
              url: '/projects/' + projects._id,
            },
          },
          relationships: {
            author: projects.author,
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

exports.deleteProject = async (req, res) => {
  try {
    const id = req.params.id;

    const projects = await Project.findByIdAndRemove(id).exec();

    if (projects) {
      res.status(200).json({
        status: 'OK',
        data: {
          type: 'projects',
          id: projects._id,
          attributes: {
            title: projects.title,
            description: projects.description,
            date: projects.date,
            photo: projects.photo,
            _request: {
              type: 'GET',
              url: '/projects/' + projects._id,
            },
          },
        },
        error: null,
      });
    } else {
      res.status(204).json({
        status: 'No Content',
        data: null,
        error: 'No valid entry found for provided ID',
      });
    }
  } catch (error) {
    res.status(404).json({
      status: 'Not Found',
      data: null,
      error: error.message,
    });
  }
};

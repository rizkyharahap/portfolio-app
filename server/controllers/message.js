const mongoose = require('mongoose');
const Message = mongoose.model('Message');

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().select('_id email name message read');

    return res.status(200).json({
      status: 'OK',
      data: messages.map((data) => {
        return {
          type: data.type,
          id: data._id,
          attributes: {
            email: data.email,
            name: data.name,
            message: data.message,
            read: data.read,
            _request: {
              type: 'GET',
              url: '/messages/' + data._id,
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

exports.getMessageById = async (req, res) => {
  try {
    const id = req.params.id;
    const messages = await Message.findById(id).select(
      '_id email name message read'
    );

    if (messages) {
      res.status(200).json({
        status: 'OK',
        data: {
          type: messages.type,
          id: messages._id,
          attributes: {
            email: messages.email,
            name: messages.name,
            message: messages.message,
            read: messages.read,
          },
        },
        error: null,
      });

      if (messages.read === false) {
        await Message.findByIdAndUpdate(id, {
          read: true,
        }).exec();
      }
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

exports.addNewMessage = async (req, res) => {
  try {
    const message = new Message({
      _id: new mongoose.Types.ObjectId(),
      email: req.body.email,
      name: req.body.name,
      message: req.body.message,
    });

    const data = await message.save();

    if (data) {
      return res.status(201).json({
        status: 'Created',
        data: {
          type: data.type,
          id: data._id,
          attributes: {
            email: req.body.email,
            name: req.body.name,
            message: req.body.message,
            read: req.body.read,
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

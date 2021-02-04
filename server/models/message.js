const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
  read: {
    type: Boolean,
    default: false
  },
});

mongoose.model('Message', messageSchema);

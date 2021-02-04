const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const projectSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
  photo: {
    type: [String],
    required: true,
  },
  technology: {
    type: [String],
    required: true,
  },
  author: {
    type: ObjectId,
    ref: 'User',
  },
});

mongoose.model('Project', projectSchema);

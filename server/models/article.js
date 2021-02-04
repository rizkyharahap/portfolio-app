const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const TYPE = ['article', 'video'];

const articleSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: {
    type: String,
    enum: TYPE,
  },
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
    type: String,
    require: true,
  },
  author: {
    type: ObjectId,
    ref: 'User',
  },
});

mongoose.model('Article', articleSchema);

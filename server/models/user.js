const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  placeOfBirth: {
    type: String,
    require: true,
  },
  dateOfBirth: {
    type: Date,
    require: true,
  },
  photoUrl: {
    type: String,
    default:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
  },
  bio: {
    type: String,
    require: true,
  },
  skills: [
    {
      name: {
        type: String,
        require: true,
      },
      rate: {
        type: Number,
        require: true,
      },
    },
  ],
  experiences: [
    {
      name: {
        type: String,
        require: true,
      },
      dateStart: {
        type: Date,
        require: true,
      },
      dateEnd: {
        type: String,
        default: 'Now',
      },
    },
  ],
});

mongoose.model('User', userSchema);

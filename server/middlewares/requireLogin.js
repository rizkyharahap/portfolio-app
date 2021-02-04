const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../configs/key');
const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const token = authorization.replace('Bearer ', '');

    jwt.verify(token, JWT_SECRET, (err, payload) => {
      const { userId } = payload;

      User.findById(userId).then((userdata) => {
        req.user = userdata;
        next();
      });
    });
  } catch (error) {
    return res.status(401).json({
      status: 'Unauthorized',
      data: null,
      message: 'You must be logged in',
    });
  }
};

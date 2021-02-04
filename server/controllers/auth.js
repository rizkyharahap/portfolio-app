const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../configs/key.js');

exports.loginUser = async (req, res) => {
  try {
    const users = await User.find({ email: req.body.email }).exec();

    if (users.length === 0) {
      return res.status(401).json({
        status: 'Unauthorized',
        data: null,
        error: "Mail not found, user doesn't exist",
      });
    }

    bcrypt.compare(req.body.password, users[0].password).then((doMatch) => {
      if (doMatch) {
        const token = jwt.sign(
          {
            userId: users[0]._id,
            email: users[0].email,
            name: users[0].name,
          },
          JWT_SECRET,
          {
            expiresIn: '30 days',
          }
        );

        return res.status(200).json({
          status: 'OK',
          token: token,
          message: 'Auth Successful',
        });
      }

      return res.status(401).json({
        status: 'Unauthorized',
        data: null,
        error: 'Wrong password, is not you ?',
      });
    });
  } catch (error) {
    res.status(401).json({
      status: 'Unauthorized',
      data: null,
      error: error.message,
    });
  }
};

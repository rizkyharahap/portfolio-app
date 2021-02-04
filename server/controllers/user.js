const mongoose = require('mongoose');
const User = mongoose.model('User');

const ID_ADMIN = '5f6229d0feaabe1ee8ba6541';

exports.getUser = async (req, res) => {
  try {
    const id = ID_ADMIN;
    const users = await User.findById(id).select(
      '_id name email address placeOfBirth dateOfBirth bio skills experiences'
    );

    if (users) {
      return res.status(200).json({
        status: 'OK',
        data: {
          type: 'users',
          id: users._id,
          attributes: {
            name: users.name,
            email: users.email,
            address: users.address,
            placeOfBirth: users.placeOfBirth,
            dateOfBirth: users.dateOfBirth,
            photoUrl: users.photoUrl,
            bio: users.bio,
            skills: users.skills,
            experiences: users.experiences,
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
    res.status(401).json({
      status: 'Unauthorized',
      data: null,
      error: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updateOps = {};

    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }

    const users = await User.findByIdAndUpdate(id, {
      $set: updateOps,
    }).exec();

    if (users) {
      return res.status(200).json({
        status: 'OK',
        data: {
          type: 'users',
          id: users._id,
          attributes: {
            name: users.name,
            email: users.email,
            address: users.address,
            placeOfBirth: users.placeOfBirth,
            dateOfBirth: users.dateOfBirth,
            photoUrl: users.photoUrl,
            bio: users.bio,
            skills: users.skills,
            experiences: users.experiences,
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
    res.status(401).json({
      status: 'Unauthorized',
      data: null,
      error: error.message,
    });
  }
};

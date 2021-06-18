const mongoose = require("mongoose"),
  userSchema = require("../models/user.model"),
  bcrypt = require("bcrypt");

class UsersController {
  constructor() {}
}

UsersController.prototype.createUser = async (req, res, next) => {
  try {
    const user = new userSchema({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10),
    });
    user
      .save()
      .then((result) => {
        res.status(200).json({
          message: result.name + " successfully added.",
          object: result,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: error,
        });
      });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

module.exports = new UsersController();

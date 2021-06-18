const mongoose = require("mongoose"),
  schema = mongoose.Schema;

const userSchema = new schema(
  {
    _id: schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);

const mongoose = require("mongoose"),
  schema = mongoose.Schema;

const AuthorSchema = new schema(
  {
    _id: schema.Types.ObjectId,
    description: String,
    name: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("authors", AuthorSchema);

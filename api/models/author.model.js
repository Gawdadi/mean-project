const mongoose = require("mongoose"),
  schema = mongoose.Schema;

const AuthorSchema = new schema(
  {
    _id: schema.Types.ObjectId,
    createdBy: String,
    description: String,
    createdById: String,
    name: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("authors", AuthorSchema);

const mongoose = require("mongoose"),
  schema = mongoose.Schema;

const BookSchema = new schema(
  {
    _id: schema.Types.ObjectId,
    createdBy: String,
    createdById: String,
    name: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
    author_id: {
      required: true,
      type: schema.Types.ObjectId,
    },
    author_name: String,
  },
  { timestamps: true }
);

// Module name decides collection name in mongoDb.
// Collection name will be 'books'.
module.exports = mongoose.model("books", BookSchema);

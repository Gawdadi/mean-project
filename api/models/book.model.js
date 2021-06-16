const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const BookSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
});

// Module name decides collection name in mongoDb.
// Collection name will be 'books'.
module.exports = mongoose.model("books", BookSchema);

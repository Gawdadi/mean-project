const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const bookSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Book", bookSchema);

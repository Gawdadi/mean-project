const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  author_id: {
    type: String,
  },
  author_name: {
    type: String,
  },
  date_of_publish: { type: Date },
});

module.exports = mongoose.model("Books", bookSchema);

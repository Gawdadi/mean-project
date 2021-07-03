const mongoose = require("mongoose"),
  schema = mongoose.Schema,
  Enum = require("../../lib/enums/enums");

const issueBookSchema = new schema(
  {
    _id: schema.Types.ObjectId,
    notes: String,
    createdBy: String,
    createdById: String,
    bookId: {
      type: String,
      required: true,
    },
    studentId: {
      type: String,
      required: true,
    },
    issueDate: {
      type: String,
      required: true,
    },
    returnDate: Date,
    status: {
      type: String,
      enum: Enum.BookIssueStatus,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("issueBook", issueBookSchema);

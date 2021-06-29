const mongoose = require("mongoose"),
  schema = mongoose.Schema;

const studentSchema = new schema(
  {
    _id: schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
    createdBy: String,
    createdById: String,
    class: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    rno: {
      type: Number,
      required: true,
    },
    uniqueId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("students", studentSchema);

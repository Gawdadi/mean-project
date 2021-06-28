const express = require("express"),
  router = express.Router(),
  pageable = require("../middleware/pageable"),
  studentsController = require("../controllers/students.controller"),
  studentSchema = require("../models/student.model");

router.get(
  "/getAll",
  pageable.pagination(studentSchema),
  studentsController.getAll
);

router.post("/", studentsController.createStudent);

router.put("/", studentsController.updateStudent);

router.get("/getById/:studentId", studentsController.findById);

router.delete("/:studentId", studentsController.deleteStudent);

module.exports = router;

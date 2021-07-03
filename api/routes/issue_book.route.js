const express = require("express"),
  router = express.Router(),
  pageable = require("../middleware/pageable"),
  issueBookController = require("../controllers/issue_book.controller"),
  IssueBookSchema = require("../models/issue_book.model");

router.get(
  "/getAll",
  pageable.pagination(IssueBookSchema),
  issueBookController.getAll
);

router.post("/", issueBookController.create);

router.put("/", issueBookController.update);

router.put("/returnBook", issueBookController.return);

router.get("/getById/:issueBookId", issueBookController.findById);

router.get("/getWithDetails", issueBookController.getWithDetails);

router.get("/search", issueBookController.search);

router.delete("/:issueBookId", issueBookController.delete);

module.exports = router;

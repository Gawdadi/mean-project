const express = require("express"),
  router = express.Router(),
  issueBookController = require("../controllers/issue_book.controller");

router.get("/getAll", issueBookController.getAll);

router.post("/", issueBookController.create);

router.put("/", issueBookController.update);

router.get("/getById/:issueBookId", issueBookController.findById);

router.get("/search", issueBookController.search);

router.delete("/:issueBookId", issueBookController.delete);

module.exports = router;

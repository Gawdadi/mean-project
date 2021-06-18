const express = require("express"),
  router = express.Router(),
  pageable = require("../middleware/pageable"),
  authorsController = require("../controllers/authors.controller"),
  authorSchema = require("../models/author.model");

router.get(
  "/getAll",
  pageable.pagination(authorSchema),
  authorsController.getAll
);

router.post("/", authorsController.createAuthor);

router.put("/", authorsController.updateAuthor);

router.get("/getById/:authorId", authorsController.findById);

router.delete("/:authorId", authorsController.deleteAuthor);

module.exports = router;

const express = require("express"),
  router = express.Router(),
  usersController = require("../controllers/users.controller");

router.post("/", usersController.createUser);

module.exports = router;

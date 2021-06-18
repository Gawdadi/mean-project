const express = require("express"),
  router = express.Router(),
  loginController = require("../controllers/login.controller");

router.post("/", loginController.login);

module.exports = router;

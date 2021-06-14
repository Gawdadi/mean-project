"use stirct";
const express = require("express"),
  router = express.Router();

router.get("/", function (req, res) {
  res.send("In books get api.");
  console.log("its worikisdsdf");
});

module.exports = router;

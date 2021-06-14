"use stirct";
const express = require("express"),
  router = express.Router();

router.get("/", function (req, res) {
  res.status(200).json({
    message: "Success.In books get api.",
  });
});

router.get("/:id", function (req, res) {
  res.status(200).json({
    message: "Success.In books get api.",
  });
});

router.post("/", function (req, res) {
  res.send("In books get api.");
  console.log("its worikisdsdf");
});

router.put("/", function (req, res) {
  res.status(200).json({
    message: "Success.In books get api.",
  });
});

router.delete("/:id", function (req, res) {
  res.send("In books get api.");
  console.log("its worikisdsdf");
});

module.exports = router;

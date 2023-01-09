const express = require("express");
const router = express.Router();

const studentController = require("../controllers/students");

router.get("/students", function (req, res) {
  studentController.test();
});

module.exports = router;

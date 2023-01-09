const express = require("express");
const router = express.Router();

const studentController = require("../controllers/students.controller");

router.get("/students", function (req, res) {
  studentController.test();
});

module.exports = router;

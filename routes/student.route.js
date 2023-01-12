const express = require("express");
const router = express.Router();

const studentController = require("../controllers/students.controller");

router.post("/students", function(req, res) {
    studentController.createNewStudents(req, res);
});

router.get("/students", (req, res) => {
    studentController.getAllStudent(req, res);

});

router.get("/students/:studentId", (req, res) => {
    studentController.getByStudentId(req, res);
});

module.exports = router;
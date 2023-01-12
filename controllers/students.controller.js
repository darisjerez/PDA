const randomId = require("../helpers/generateId");
const studentModel = require("../models/student.model");

const studentController = {
    createNewStudents: async(req, res) => {
        const newStudent = new studentModel(req.body);
        newStudent.studentId = randomId;
        await newStudent.save();

        res.status(201).send({
            message: "Students Created",
            student: newStudent,
        });
    },
    getAllStudent: async(req, res) => {
        const student = await studentModel.find().exec();
        res.send(student);
    },
    getByStudentId: async(req, res) => {
        const studentId = req.params.studentId;
        const foundStudent = await studentModel.findOne({ studentId });
        if (!foundStudent) {
            res.status(404).send(`Students with ID: ${studentId} not found.`);
        } else {
            res.status(302).send(foundStudent);
        }
    },

};

module.exports = studentController;
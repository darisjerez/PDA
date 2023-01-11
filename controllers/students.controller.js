const randomId = require("../helpers/generateId");
const studentModel = require("../models/student.model");

const studentController = {
    createNewStudents: async(req, res) => {
        const newStudent = new studentModel(req.body);
        newStudent.randomId = randomId;
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
};

module.exports = studentController;
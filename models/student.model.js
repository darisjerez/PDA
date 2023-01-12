const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    title: "string",
    studentId: "string",


    username: "string",
    password: "string",
    email: "string",

    info: {
        name: "string",
        DOB: "string",
        gender: "string"
    },
    contact: {
        address: "string",
        phone: "number",
    },

    interactions: {
        type: []
    },


});

module.exports = mongoose.model("students", studentSchema);
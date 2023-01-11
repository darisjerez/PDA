const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    title: "string",
    studentId: "string",
    type: {
        type: String,
        teachers: ['Daris', '']
    },

    user: "string",
    password: "string",

    inf_person: {
        name: "string",
        Date_of_birth: "number",
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
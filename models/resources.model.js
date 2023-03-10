const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  title: "string",
  resourceId: "string",
  type: {
    type: String,
    enum: ["Book", "Course", "Project"],
  },
  url: {
    type: String,
  },
  platform: {
    type: String,
  },
  credentials: {
    username: "String",
    password: "String",
  },
  activeStudents: {
    type: Number,
  },
  currentEnrolledStudents: {
    type: [],
  },
  maxAllowedActiveStudents: {
    type: Number,
  },
  studentCompleted: {
    type: [],
  },
  availability: {
    type: String,
    enum: ["available", "full", "disabled", "not available"],
  },
  category: {
    type: [],
  },
});

module.exports = mongoose.model("resources", resourceSchema);

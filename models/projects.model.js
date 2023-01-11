const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  languages: {
    type: [],
  },
  description: {
    type: String,
  },
  instructions: {
    type: [],
  },
  complexity: {
    type: String,
    enum: ["easy", "mid", "hard"],
  },
  projectId: {
    type: String,
  },
  currentStudents: {
    type: [],
  },
  completedStudents: {
    type: [],
  },
});

module.exports = mongoose.model("projects", projectSchema);

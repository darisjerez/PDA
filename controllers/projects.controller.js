const randomId = require("../helpers/generateId");
const projectModel = require("../models/projects.model");

const projectsController = {
  createNewProject: async (req, res) => {
    const newProject = new projectModel(req.body);
    newProject.projectId = randomId;
    await newProject.save();

    res.status(201).send({
      message: "Added new Project",
      newProject,
    });
  },
  getAllProjects: async (req, res) => {
    const allProjects = await projectModel.find().exec();
    res.status(200).send(allProjects);
  },
  getbyProjectId: async (req, res) => {
    const projectId = req.params.projectId;

    const foundProject = await projectModel.findOne({ projectId });

    if (!foundProject) {
      res.status(404).send(`Resource with ID: ${projectId} not found.`);
    } else {
      res.status(302).send(foundProject);
    }
  },
};

module.exports = projectsController;

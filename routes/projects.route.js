const express = require("express");
const projectsController = require("../controllers/projects.controller");

const router = express.Router();

router.post("/projects", (req, res) => {
  projectsController.createNewProject(req, res);
});
router.get("/projects", (req, res) => {
  projectsController.getAllProjects(req, res);
});
router.get("/projects/:projectId", (req, res) => {
  projectsController.getbyProjectId(req, res);
});
module.exports = router;

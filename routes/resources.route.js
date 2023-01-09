const express = require("express");
const router = express.Router();

const resourcesController = require("../controllers/resources.controller");

router.post("/resources", function (req, res) {
  resourcesController.createNewResources(req, res);
});

module.exports = router;

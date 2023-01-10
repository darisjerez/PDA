const express = require("express");
const router = express.Router();

const resourcesController = require("../controllers/resources.controller");

router.post("/resources", function (req, res) {
  resourcesController.createNewResources(req, res);
});
router.get("/resources", (req, res) => {
  resourcesController.getAllResources(req, res);
});
router.get("/resources/:resourceId", (req, res) => {
  resourcesController.getByResourceId(req, res);
});
router.patch("/resources/:resourceId", (req, res) => {
  resourcesController.updateWithResourceId(req, res);
});


module.exports = router;

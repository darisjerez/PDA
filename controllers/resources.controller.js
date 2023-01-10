const randomId = require("../helpers/generateId");
const resourcesModel = require("../models/resources.model");

const resourcesController = {
  createNewResources: async (req, res) => {
    const newResource = new resourcesModel(req.body);
    newResource.resourceId = randomId;
    await newResource.save();

    res.status(201).send({
      message: "Resource created",
      resource: newResource,
    });
  },
  getAllResources: async (req, res) => {
    const resources = await resourcesModel.find().exec();
    res.send(resources);
  },

  getByResourceId: async (req, res) => {
    const resourceId = req.params.resourceId;
    const foundResource = await resourcesModel.findOne({ resourceId });
    if (!foundResource) {
      res.status(404).send(`Resource with ID: ${resourceId} not found.`);
    } else {
      res.status(302).send(foundResource);
    }
  },
  updateWithResourceId: async (req, res) => {
    const resourceId = req.params.resourceId;
    const newResource = await resourcesModel.findOneAndUpdate(
      { resourceId },
      req.body,
      { new: true }
    );
    if (!newResource || newResource === null) {
      res.status(404).send(`Resource with ID: ${resourceId} not found.`);
    } else {
      res.status(200).send({
        message: `Resource with ID: ${resourceId} updated successfully.`,
        newResource,
      });
    }
  },
};

module.exports = resourcesController;

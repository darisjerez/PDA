const resourcesModel = require("../models/resources.model");

const resourcesController = {
  createNewResources: async (req, res) => {
    const newResources = new resourcesModel(req.body);
    await newResources.save();

    res.send({
      message: "Resource created",
    });
  },
};

module.exports = resourcesController;

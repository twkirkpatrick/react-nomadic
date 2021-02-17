const express = require("express");
const router = express.Router();
const locationController = require("../controllers/locationController");

router
  .route("/")
  .get(locationController.getLocations)
  .post(locationController.addLocation);

module.exports = router;

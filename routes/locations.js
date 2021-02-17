const router = require("express").Router();
const locationController = require("../controllers/locationController");

//*    @route:    GET /api/locations
//*    @descr:    Get all locations to plot on map
router.route("/").get(locationController.getLocations);

const Location = require("../models/Location");
const Visit = require("../models/Visit");
const NodeGeocoder = require("node-geocoder");
require("dotenv").config();

//

module.exports = {
  // get all locations
  getLocations: async (req, res) => {
    try {
      const locations = await Location.find({}).populate("visits");
      res.json(locations);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },

  // get a single location by id
  getLocation: async (req, res) => {
    try {
      const location = await Location.findById(req.params.id).populate(
        "visits"
      );
      // if the location does not exist, then send an error message in the response
      if (!location) {
        return res.json({ msg: "Location does not exist" });
      }
      // else, send the location data
      res.status(200).json({ success: true, data: location });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },

  // add a location
  addLocation: async (req, res) => {
    const { city, state } = req.body;

    const geocoder = NodeGeocoder({
      provider: "google",
      apiKey: process.env.REACT_APP_GEO_API_KEY
    });

    const result = await geocoder.geocode(`${city},${state}`);

    try {
      const newLocation = new Location({
        city,
        state,
        latitude: result[0].latitude,
        longitude: result[0].longitude
      });

      const location = await newLocation.save();
      res.json(location);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },

  // update a single location
  updateLocation: async (req, res) => {
    try {
      let location = await Location.findById(req.params.id);

      // if the location does not exist, then send an error message in the response
      if (!location) {
        return res.json({ msg: "Location does not exist" });
      }

      location = await Location.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ success: true, data: location });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },

  // delete a single location
  deleteLocation: async (req, res) => {
    try {
      let location = await Location.findById(req.params.id);

      // if the location does not exist, then send an error message in the response
      if (!location) {
        return res.json({ msg: "Location does not exist" });
      }

      // delete it from the database
      location.remove();
      // return a message in the response
      res.status(200).json({
        success: true,
        msg: `Location with id of ${req.params.id} deleted from the database`
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  }
};

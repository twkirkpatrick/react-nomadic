const db = require("../models");

module.exports = {
  getLocations: async (req, res) => {
    try {
      const locations = await db.Location.findAll({});
      res.json(locations);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Servor Error");
    }
  },

  addLocation: async (req, res) => {
    const { city, state, visits } = req.body;

    try {
      const newLocation = new Location({
        city,
        state,
        visits
      });

      const location = await newLocation.save();
      res.json(location);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
};

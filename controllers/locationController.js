const Location = require("../models/Location");

module.exports = {
  getLocations: async (req, res) => {
    try {
      const locations = await db.Location.find({}).populate("visits");
      res.json(locations);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Servor Error");
    }
  },

  addLocation: async (req, res) => {
    const { city, state } = req.body;

    try {
      const newLocation = new Location({
        city,
        state
      });

      const location = await newLocation.save();
      res.json(location);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
};

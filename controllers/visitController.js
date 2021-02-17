const Location = require("../models/Location");
const Visit = require("../models/Visit");

module.exports = {
  addVisit: async (req, res) => {
    const { title, visitDate, activities, summits, summary, nomads } = req.body;

    try {
      const newVisit = new Visit({
        title,
        visitDate,
        activities,
        summits,
        summary,
        nomads
      });

      const visit = await newVisit.save();

      console.log(visit);

      const { _id } = visit;

      await Location.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { visits: _id } },
        { new: true }
      );
      res.json(visit);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
};

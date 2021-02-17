const mongoose = require("mongoose");

const VisitSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  visitDate: {
    type: Date,
    required: true
  },
  activities: [],
  summits: [
    {
      name: String,
      elevation: String,
      difficulty: String
    }
  ],
  summary: String,

  nomads: String
});

module.exports = mongoose.model("Visit", VisitSchema);

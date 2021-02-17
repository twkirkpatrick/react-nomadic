const mongoose = require("mongoose");

const VisitSchema = mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
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

module.exports = mongoose.model("visit", VisitSchema);

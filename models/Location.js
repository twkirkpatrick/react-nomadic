const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  visits: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Visit"
    }
  ]
});

module.exports = mongoose.model("Location", LocationSchema);

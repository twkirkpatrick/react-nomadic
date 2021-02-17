const express = require('express');
const router = express.Router();

const {
  getLocations,
  getLocation,
  addLocation,
  updateLocation,
  deleteLocation
} = require('../controllers/locationController');

router.route('/').get(getLocations).post(addLocation);

router
  .route('/:id')
  .get(getLocation)
  .delete(deleteLocation)
  .put(updateLocation);

module.exports = router;

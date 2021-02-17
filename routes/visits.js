const express = require("express");
const router = express.Router();
const visitController = require("../controllers/visitController");

router.route("/:id").post(visitController.addVisit);

module.exports = router;

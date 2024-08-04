const express = require("express");
const tourController = require("../controllers/tourController");
const router = express.Router();

// router
//   .route("/")
//   .get(tourController.getAllTours)
//   .post(tourController.renderCreateTourForm);
// .post(tourController.createTour);

// router.route("/:id").get(tourController.getTourById);

module.exports = router;

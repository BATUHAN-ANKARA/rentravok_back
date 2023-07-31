const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.post("/createReservation", controller.reservationController.createReservation);
router.post("/cancelReservation", controller.reservationController.cancelReservation);

module.exports = {
  reservation: router
};

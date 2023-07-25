const userService = require("./user.service");
const carService = require("./car.service");
const reservationService = require("./reservation.service");
 
module.exports = {
  user: userService,
  car: carService,
  reservation: reservationService,
};
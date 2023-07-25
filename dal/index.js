const userDal = require('./user.dal')
const carDal = require('./car.dal')
const reservationDal = require('./reservation.dal')

module.exports = {
  user: userDal,
  car: carDal,
  reservation: reservationDal,
};
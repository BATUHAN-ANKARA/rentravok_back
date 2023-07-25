const userDal = require('./user.dal')
const carDal = require('./car.dal')

module.exports = {
  user: userDal,
  car: carDal
};
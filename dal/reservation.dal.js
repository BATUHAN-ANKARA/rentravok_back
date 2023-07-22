const Reservation = require("../models/reservation.model");

const ReservationDataAccess = {
  async create(reservationModel) {
    return await reservationModel.save();
  },
  async updateById(id, body) {
    return await Reservation.findByIdAndUpdate({ _id: id }, body);
  },
  async findOne(where) {
    return await Reservation.findOne(where);
  },
  async findById(id) {
    return await Reservation.findById({ _id: id });
  },
  async findOnePopulate(where, populate) {
    return await Reservation.findOne(where).populate(populate);
  }
};

module.exports = ReservationDataAccess;

const Car = require("../models/car.model");

const CarDataAccess = {
  async create(carModel) {
    return await carModel.save();
  },
  async updateById(id, body) {
    return await Car.findByIdAndUpdate({ _id: id }, body);
  },
  async findOne(where) {
    return await Car.findOne(where);
  },
  async find(where) {
    return await Car.find(where);
  },
  async findById(id) {
    return await Car.findById({ _id: id });
  },
  async findOnePopulate(where, populate) {
    return await Car.findOne(where).populate(populate);
  }
};

module.exports = CarDataAccess;

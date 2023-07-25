const Car = require("../models/car.model");
const carDal = require("../dal/index");
const utils = require("../utils/index");
const fileService = require("./file.service");

exports.createCar = async (req) => {
  try {
    let { brand, model, year, color, fuelType, transmission, pricePerDay } =
      req.body;
    const car = new Car({
      brand,
      model,
      year,
      color,
      fuelType,
      transmission,
      pricePerDay,
    });
    const json = await carDal.car.create(car);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCarById = async (req) => {
  try {
    const { id } = req.params;
    const json = await carDal.car.findById(id);
    if (json) {
      return json;
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCarByBrand = async (req) => {
  try {
    const { brand } = req.params;
    const json = await carDal.car.find({brand: brand});
    if (json) {
      return json;
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCarByModel = async (req) => {
  try {
    const { model } = req.params;
    const json = await carDal.car.find({model: model});
    if (json) {
      return json;
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCarByColor = async (req) => {
  try {
    const { color } = req.params;
    const json = await carDal.car.find({color: color});
    if (json) {
      return json;
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCarByTransmission = async (req) => {
  try {
    const { transmission } = req.params;
    const json = await carDal.car.find({transmission: transmission});
    if (json) {
      return json;
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateCarPrice = async (req) => {
  try {
    const { pricePerDay } = req.body;
    const { id } = req.params;
    const json = await carDal.car.updateById(id, {
      pricePerDay,
    });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

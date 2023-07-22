const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    brand: {
      type: Schema.Types.String,
      required: true
    },
    model: {
      type: Schema.Types.String,
      required: true
    },
    year: {
      type: Schema.Types.Number,
      required: true
    },
    color: {
      type: Schema.Types.String,
      required: true
    },
    fuelType: {
      type: Schema.Types.String,
      required: true
    },
    transmission: {
      type: Schema.Types.String,
      enum: ["automatic", "manual"],
      required: true
    },
    pricePerDay: {
      type: Schema.Types.Number,
      required: true
    },
    isReserved: {
      type: Schema.Types.Boolean,
      default: false
    },
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const Car = mongoose.model("Car", carSchema, "car");
module.exports = Car;

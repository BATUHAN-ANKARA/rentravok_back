const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reservationSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: "Car",
      required: true
    },
    startDate: {
      type: Schema.Types.Date,
      required: true
    },
    endDate: {
      type: Schema.Types.Date,
      required: true
    },
    totalPrice: {
      type: Schema.Types.Number,
      required: true
    },
    isReserved: {
      type: Schema.Types.Boolean,
      default: true
    },
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const Reservation = mongoose.model("Reservation", reservationSchema, "reservation");
module.exports = Reservation;

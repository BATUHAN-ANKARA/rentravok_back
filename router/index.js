const authRouter = require("./auth.router").auth;
const userRouter = require("./user.router").user;
const carRouter = require("./car.router").car;
const reservationRouter = require("./reservation.router").reservation;

module.exports = {
  authRouter,
  userRouter,
  carRouter,
  reservationRouter
};
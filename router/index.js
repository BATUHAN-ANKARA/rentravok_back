const authRouter = require("./auth.router").auth;
const userRouter = require("./user.router").user;

module.exports = {
  authRouter,
  userRouter
};
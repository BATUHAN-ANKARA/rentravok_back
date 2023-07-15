const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
const userValidator = require('../validations/index');

router.post("/signUp", controller.authController.signUp);
router.post("/signIn", controller.authController.signIn);

module.exports = {
  auth: router
};

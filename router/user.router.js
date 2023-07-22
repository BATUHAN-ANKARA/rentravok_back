const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
const userValidator = require("../validations/index");

// router.put('/update/:id', [userValidator.userValidator.validateUpdateUser()], controller.userController.updateUser);
router.put("/updateAvatar", [userValidator.userValidator.validateUpdateAvatar()], controller.userController.updateAvatar);
router.put("/createPassword/:id", [userValidator.userValidator.validateCreatePassword()], controller.userController.createPassword);
router.get("/getUser/:id", controller.userController.getUser);

module.exports = {
  user: router
};

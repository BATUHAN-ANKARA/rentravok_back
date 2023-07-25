const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.post("/createCar", controller.carController.createCar);
router.get("/getCarById/:id", controller.carController.getCarById);
router.get("/getCarByBrand/:brand", controller.carController.getCarByBrand);//id params
router.get("/getCarByModel/:model", controller.carController.getCarByModel);
router.get("/getCarByColor/:color", controller.carController.getCarByColor);
router.get("/getCarByTransmission/:transmission", controller.carController.getCarByTransmission);
router.put("/updateCarPrice/:id", controller.carController.updateCarPrice);

module.exports = {
  user: router
};

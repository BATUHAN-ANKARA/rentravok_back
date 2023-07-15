const { body, query, param } = require("express-validator");
const utils = require("../utils/index");

const UserValidator = {
  validateCreateUser() {
    return [body("birthDate").not().isEmpty().isDate()];
  },
  validateUpdateUser() {
    return [
      body("email").isEmail(),
    ];
  },
  validateSignInWithPassword() {
    return [body("password").not().isEmpty().isLength({ min: 4, max: 10 })];
  },
  validateSignIn() {
    return [body("userId").not().isEmpty()];
  },
  validateUpdateAvatar() {
    return [query("id").isMongoId()];
  },
  validateGetUser() {
    return [body("userId").not().isEmpty()];
  },
  validateCreatePassword() {
    return [body("password").not().isEmpty().isLength({ min: 4, max: 10 })];
  }
};

module.exports = UserValidator;

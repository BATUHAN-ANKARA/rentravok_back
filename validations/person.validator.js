const { body, query, param } = require("express-validator");
const utils = require("../utils/index");

const PersonValidator = {
  validateCreatePerson() {
    return [
      body("name").not().isEmpty(),
      body("surname").not().isEmpty(),
      body("birthDate").isNumeric().not().equals(0),
      body("gender").not().isEmpty(),
      body("salary").isNumeric(),
      body("identityNumber")
        .isNumeric()
        .isLength({ min: 11, max: 11 })
        .custom(async (value, { req }) => {
          if (utils.helpers.validateIdentityNumber(value) === false) {
            throw new Error("Geçersiz Kimlik Numarası");
          }
          return true;
        }),
      body("email").not().isEmpty().isEmail(),
      body("password").not().isEmpty().isLength({ min: 4, max: 10 }),
      body("country").not().isEmpty(),
      body("city").not().isEmpty(),
      body("company").isMongoId(),
      body("title").isMongoId()
    ];
  },
  validateUploadAvatar() {
    return [query("id").isMongoId()];
  },
  validateUploadCv() {
    return [query("id").isMongoId()];
  },
  validateGetCompany() {
    return [param("id").isMongoId()];
  },
  validateGetTitle() {
    return [param("id").isMongoId()];
  },
  validateGetPersonById() {
    return [param("id").isMongoId()];
  },
  validateListWithPagination() {
    return [
      query("perPage").isNumeric(),
      query("page").isNumeric(),
      query("sortBy").not().isNumeric().not().isEmpty(),
      query("sortDirection").not().isEmpty()
    ];
  },
  validateUpdatePerson() {
    return [
      body("name").not().isEmpty(),
      body("surname").not().isEmpty(),
      body("birthDate").isNumeric().not().equals(0),
      body("gender").not().isEmpty(),
      body("salary").isNumeric(),
      body("identityNumber")
        .isNumeric()
        .isLength({ min: 11, max: 11 })
        .custom(async (value, { req }) => {
          if (utils.helpers.validateIdentityNumber(value) === false) {
            throw new Error("Geçersiz Kimlik Numarası");
          }
          return true;
        }),
      body("email").not().isEmpty().isEmail(),
      body("password").not().isEmpty().isLength({ min: 4, max: 10 }),
      body("country").not().isEmpty(),
      body("city").not().isEmpty(),
      body("company").isMongoId(),
      body("title").isMongoId()
    ];
  },
  validateDeleteById() {
    return [query("id").isMongoId()];
  },
  validateUpdateCv() {
    return [query("id").isMongoId()];
  },
  validateUpdateAvatar() {
    return [query("id").isMongoId()];
  },
  validateSignIn() {
    return [
      body("email").not().isEmpty().isEmail(),
      body("password").not().isEmpty().isLength({ min: 4, max: 10 }),
    ];
  }
};

module.exports = PersonValidator;

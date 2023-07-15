const { param, body, query } = require("express-validator");

const generalValidator = {
  validateHoroscopeById() {
    return [
      param("horoscopeName")
        .isLength({ min: 4, max: 12 })
        .withMessage("Geçersiz Id Biçimi")
    ];
  },
  validateHoroscopeRelationship() {
    return [
      query("horoscope1").not().isEmpty(),
      query("horoscope2").not().isEmpty()
    ];
  },
};

module.exports = generalValidator;

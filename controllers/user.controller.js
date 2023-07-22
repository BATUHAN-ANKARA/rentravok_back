const utils = require("../utils/index");
const baseResponse = require("../dto/baseresponse.dto");
const { StatusCodes } = require("http-status-codes");
const userService = require("../services/index");

// exports.updateUser = async (req, res) => {
//   try {
//     const isInvalid = utils.helpers.handleValidation(req);
//     if (isInvalid) {
//       res
//         .status(StatusCodes.BAD_REQUEST)
//         .json({ ...baseResponse, ...isInvalid });
//     }

//     const json = await userService.user.updateUser(req);
//     if (json === false) {
//       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
//         ...baseResponse,
//         data: "Bu mail kullanımda",
//         success: false,
//         timestamp: Date.now(),
//         code: StatusCodes.INTERNAL_SERVER_ERROR,
//         error: true
//       });
//     } else {
//       res.status(StatusCodes.OK).json({
//         ...baseResponse,
//         data: json,
//         success: true,
//         timestamp: Date.now(),
//         code: StatusCodes.OK
//       });
//     }
//   } catch (error) {
//     utils.helpers.logToError(error, req);
//     res.status(StatusCodes.INTERNAL_SERVER_ERROR)
//   }
// };

exports.updateAvatar = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await userService.user.updateAvatar(req);
    res.status(StatusCodes.OK).json(json);
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await userService.user.getUser(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK
    });
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR
    });
  }
};

exports.createPassword = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await userService.user.createPassword(req);
    res.status(StatusCodes.OK).json(json);
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
};
const utils = require("../utils/index");
const baseResponse = require("../dto/baseresponse.dto");
const { StatusCodes } = require("http-status-codes");
const reservationService = require("../services/index");

exports.createReservation = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await reservationService.reservation.createReservation(req);
    res.status(StatusCodes.OK).json(json);
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

exports.cancelReservation = async (req, res) => {
    try {
      const isInvalid = utils.helpers.handleValidation(req);
      if (isInvalid) {
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ ...baseResponse, ...isInvalid });
        return;
      }
      const json = await reservationService.reservation.cancelReservation(req);
      res.status(StatusCodes.OK).json(json);
    } catch (error) {
      utils.helpers.logToError(error, req);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        ...baseResponse,
        success: false,
        error: true,
        timestamp: Date.now(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  };
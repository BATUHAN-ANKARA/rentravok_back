const authMiddleware = require('./auth.middleware')
const loggerMiddleware = require('./logger.middleware')
const singleImageUploadMiddleware = require('./singleimageupload.middleware')

module.exports = {
  authMiddleware,
  loggerMiddleware,
  singleImageUploadMiddleware
};
const mongoose = require('mongoose')
const logger = require('../utils/index')

exports.connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      dbName: process.env.MONGODB_COOLECTION,
      autoIndex: true,
      minPoolSize: process.env.MONGODB_MIN_POOL_SIZE,
      maxPoolSize: process.env.MONGODB_MAX_POOL_SIZE,
      connectTimeoutMS: process.env.MONGODB_CONNECTION_TIMEOUT,
    });
    logger.logger.info('Veritabanına başarıyla bağlanıldı')
  } catch (error) {
    logger.logger.info(`Error ${error.message}`);
    throw new Error(error.message)
  }
};
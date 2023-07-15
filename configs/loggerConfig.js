const winston = require('winston')
const dailyRotateFile = require("winston-daily-rotate-file");

const { timestamp, json, prettyPrint, colorize, label, combine } =
  winston.format;

const logConfig = winston.createLogger({
  defaultMeta: {
    api: "NODE SERVER"
  },
  level: "verbose",
  transports: [
    new dailyRotateFile({
      datePattern: "DD.MM.YYYY",
      filename: "myapp-%DATE%.log",
      dirname: './logs/'
    })
  ],
  format: combine(
    label({ label: "Uygulama V1" }),
    timestamp(),
    prettyPrint(),
    colorize(),
    json()
  )
});

module.exports = logConfig;

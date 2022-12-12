const { createLogger, transports, format } = require("winston");

const { Console, File } = transports;
const { combine, colorize, prettyPrint, timestamp, printf } = format;

const customFormat = combine(
  timestamp({
    format: "DD/MM/YY hh:mm:ss A",
  }),
  prettyPrint(),
  printf(
    ({ timestamp, level, message }) => `[${timestamp}][${level}] ${message}`
  )
);

module.exports = createLogger({
  format: customFormat,
  transports: [
    new Console({
      level: "debug",
      format: combine(colorize(), customFormat),
    }),
    new File({
      filename: "combined.log",
      level: "info",
    }),
    new File({
      filename: "error.log",
      level: "error",
    }),
  ],
});

import { createLogger, format, transports } from "winston";

const { combine, timestamp, printf, colorize, errors } = format;

// Define a custom format
const customFormat = printf(
  ({ level, message, timestamp, stack, correlationId }) => {
    return `${timestamp} [${level}] ${
      correlationId ? `[${correlationId}] ` : ""
    }${stack || message}`;
  }
);

// Create the main logger
export const logger = createLogger({
  level: process.env.LOG_LEVEL || "debug",
  format: combine(
    colorize(),
    timestamp({
      format: () =>
        new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" }),
    }),
    errors({ stack: true }),
    customFormat
  ),
  transports: [new transports.Console()],
});

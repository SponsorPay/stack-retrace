import { transports, createLogger } from "winston"
import { errorLogger } from "../src/errorLogger"
import { error } from "./error"

const logger = createLogger({
  transports: [new transports.Console()]
})

const logError = errorLogger(error => logger.error(error.name, error))

logError(error)

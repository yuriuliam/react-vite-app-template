import { LOGGER_DELIMITER } from '../config/logger'

const composeLoggerNamespace = (...namespaces: string[]) =>
  namespaces.join(LOGGER_DELIMITER)

export { composeLoggerNamespace }

import debug from 'debug'

import { LoggerName } from '@/config/logger'

import { composeLoggerNames } from '../utils/composeLoggerNames'

const createDebugger = (
  namespace: string,
  ...subNamespaces: string[]
): App.Modules.Logger.AppOutput => {
  const appOutput = debug(LoggerName.Base).extend(namespace)

  const subNamespace = subNamespaces.length
    ? composeLoggerNames(...subNamespaces)
    : ''

  return subNamespace ? appOutput.extend(subNamespace) : appOutput
}

export { createDebugger }

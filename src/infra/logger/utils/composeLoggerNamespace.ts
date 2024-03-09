const composeLoggerNamespace = (delimiter: string, ...namespaces: string[]) =>
  namespaces.join(delimiter)

export { composeLoggerNamespace }

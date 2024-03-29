/**
 * Map call sites to JSON format
 */
const callSitesToJSON = (callSite: NodeJS.CallSite) => ({
  columnNumber: callSite.getColumnNumber(),
  evalOrigin: callSite.getEvalOrigin(),
  fileName: callSite.getFileName(),
  function: callSite.getFunction(),
  functionName: callSite.getFunctionName(),
  lineNumber: callSite.getLineNumber(),
  methodName: callSite.getMethodName(),
  self: callSite.getThis(),
  typeName: callSite.getTypeName(),
  isConstructor: callSite.isConstructor(),
  isEval: callSite.isEval(),
  isNative: callSite.isNative(),
  isTopLevel: callSite.isToplevel(),
})

/**
 * Retrieves the current call site from where it's been called.
 */
const getCallSites = () => {
  const originalPrepareStackTrace = Error.prepareStackTrace

  try {
    const result: NodeJS.CallSite[] = []

    Error.prepareStackTrace = (_, callSites) =>
      result.push(...callSites.slice(1))

    void new Error().stack // Requires to access stack to fill results

    return result
  } finally {
    Error.prepareStackTrace = originalPrepareStackTrace
  }
}

const getMappedCallSites = () => getCallSites().slice(1).map(callSitesToJSON)

export { getCallSites, getMappedCallSites }

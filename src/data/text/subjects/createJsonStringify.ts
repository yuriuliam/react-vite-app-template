const createJsonStringify = (replacer: App.JsonReplacerFn, indentSize = 0) => {
  return (value: any) => JSON.stringify(value, replacer, indentSize)
}

export { createJsonStringify }

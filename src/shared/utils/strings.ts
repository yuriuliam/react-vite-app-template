const capitalize = <T extends string>(value: T) =>
  (value.charAt(0).toUpperCase() + value.slice(1)) as Capitalize<T>

export { capitalize }

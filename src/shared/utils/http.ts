const tokenWithScheme = (token: string, scheme = 'Bearer') =>
  `${scheme} ${token}`

export { tokenWithScheme }

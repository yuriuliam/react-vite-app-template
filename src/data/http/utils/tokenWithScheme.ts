const tokenWithScheme = (token: string | null, clientScheme = 'Bearer') =>
  token ? `${clientScheme} ${token}` : ''

export { tokenWithScheme }

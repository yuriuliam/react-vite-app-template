import jsCookie from 'js-cookie'

const createCookieParser = () => ({
  get: jsCookie.get.bind(jsCookie),
  set: jsCookie.set.bind(jsCookie),
  remove: jsCookie.remove.bind(jsCookie),
})

export { createCookieParser }

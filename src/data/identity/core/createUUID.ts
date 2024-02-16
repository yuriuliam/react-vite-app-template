import { v4 } from 'uuid'

const createUUID = v4.bind(null, undefined)

export { createUUID }

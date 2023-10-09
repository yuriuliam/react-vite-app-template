import { faker } from '@faker-js/faker'

const createFakeAuthResponse = () => {
  return {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    token: faker.string.nanoid(64),
  } satisfies AppModels.AuthResponse
}

const createFakeAuthUser = () => {
  return {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
  } satisfies AppModels.AuthUser
}

export { createFakeAuthResponse, createFakeAuthUser }

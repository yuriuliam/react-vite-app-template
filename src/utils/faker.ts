import { faker } from '@faker-js/faker'

import { FEATURES } from './constants'

const createFakeAuthResponse = () =>
  ({
    id: faker.string.uuid(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    token: faker.string.nanoid(64),
  }) satisfies AppModels.AuthResponse

const createFakeAuthUser = () =>
  ({
    id: faker.string.uuid(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
  }) satisfies AppModels.AuthUser

const createFakeFeaturesResponse = () =>
  [FEATURES.HELLO_WORLD] satisfies AppModels.FeaturesResponse

export {
  createFakeAuthResponse,
  createFakeAuthUser,
  createFakeFeaturesResponse,
}

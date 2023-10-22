import { faker } from '@faker-js/faker'

import { FEATURES } from './constants'

const createFakeEmail = () => faker.internet.email()

const createFakeAuthUser = () =>
  ({
    id: faker.string.uuid(),
    email: createFakeEmail(),
    name: faker.person.fullName(),
  }) satisfies AppModels.AuthUser

const createFakeToken = () => faker.string.nanoid({ min: 64, max: 128 })

const createFakeAuthResponse = () =>
  ({
    ...createFakeAuthUser(),
    token: createFakeToken(),
  }) satisfies AppModels.AuthResponse

const createFakeFeaturesResponse = () =>
  [FEATURES.HELLO_WORLD] satisfies AppModels.FeaturesResponse

export {
  createFakeAuthResponse,
  createFakeAuthUser,
  createFakeEmail,
  createFakeFeaturesResponse,
  createFakeToken,
}

import { APP } from './constants/app'

import type { Faker } from '@faker-js/faker'

const createFakeAuthResponse = (faker: Faker) => {
  faker.seed(APP.FAKER_SEED)
  return {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    token: faker.string.nanoid(64),
  } satisfies AppModels.AuthResponse
}

export { createFakeAuthResponse }

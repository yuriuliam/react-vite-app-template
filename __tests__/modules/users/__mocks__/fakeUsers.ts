import { faker } from '@faker-js/faker'

import { UserResponseModel } from '@/modules/users/domain/models/UserResponse'

import { FAKE_DATA_LENGTH, STATIC_SEED } from '#/config/faker'

const createFakerUserResponses = (shouldBeDeterministic = false) => {
  if (shouldBeDeterministic) faker.seed(STATIC_SEED)

  return new Array(FAKE_DATA_LENGTH).fill(0).map(() => {
    const id = faker.string.uuid()
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    const name = faker.person.fullName({ firstName, lastName })
    const username = faker.internet.userName({ firstName, lastName })
    const email = faker.internet.email({ firstName, lastName })
    const token = faker.string.nanoid({ min: 64, max: 64 })

    return UserResponseModel.parse({
      id,
      name,
      username,
      email,
      token,
    })
  })
}

export { createFakerUserResponses }

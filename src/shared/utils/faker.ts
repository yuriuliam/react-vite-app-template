import { FAKE_DATA_LENGTH, STATIC_SEED } from '@/config/faker'

/**
 * Creates a set of 100 fake feature flags.
 */
const createFakeFeatureFlags = async (shouldBeDeterministic = false) => {
  const { faker } = await import('@faker-js/faker')

  if (shouldBeDeterministic) faker.seed(STATIC_SEED)

  return new Array<string>(FAKE_DATA_LENGTH)
    .fill('FF')
    .map(featureFlagPrefix =>
      [featureFlagPrefix, faker.word.sample(), faker.word.verb()].join('_'),
    )
}

/**
 * Creates a set of 100 fake user responses.
 */
const createFakerUserResponses = async (shouldBeDeterministic = false) => {
  const { faker } = await import('@faker-js/faker')

  if (shouldBeDeterministic) faker.seed(STATIC_SEED)

  return new Array(FAKE_DATA_LENGTH).fill(0).map(() => {
    const id = faker.string.uuid()
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const password = faker.internet.password({ length: 8, memorable: true })

    const name = faker.person.fullName({ firstName, lastName })
    const username = faker.internet.userName({ firstName, lastName })
    const email = faker.internet.email({ firstName, lastName })
    const token = faker.string.nanoid({ min: 64, max: 64 })

    return {
      id,
      name,
      username,
      email,
      password,
      token,
    } satisfies App.Modules.User.UserResponseModel
  })
}

export { createFakeFeatureFlags, createFakerUserResponses }

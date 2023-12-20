const FAKE_DATA_LENGTH = 100

const STATIC_SEED = [
  0x0b9354bc99ef, 0x783cb743542f, 0x85eaf8d1116e, 0xfdeb17f3416f,
  0xaf6b029aab06, 0xac1d62621103, 0xa4211bec8cc5, 0x2b752d3743bf,
  0xa133a5e970ee, 0xbe27cb82e883, 0xfbbb002f2b15, 0xc8904fed6579,
  0x37236bdc9d1c, 0xc5146e515ada, 0x97a176750b9d, 0x7e6b2d8c6b3b,
  0x47c776e6bce0, 0x0802140f41ee, 0x2a230bc7e641, 0x7f70affd6e2a,
  0xea2059f94f22, 0x7f549be6f996, 0x7b55005d1a92, 0x83d956c938e5,
  0xb3a4834a22e1, 0xa78a9df4f1eb, 0x7c5897881b4e, 0x8d72606dd53a,
  0x8cc296eb8615, 0x2d8ebbf3c226, 0x6a4d8c42a9cf, 0x2b3876a57c48,
  0x3826dc1c3dec, 0x99bfdfbb8bb3, 0xf6036b1abb77, 0xa83303e3a855,
  0xea40f8e1e13b, 0xe827bd40b888, 0xfa31d83bfc7f, 0xfd1b6ecfac71,
  0x497c3451bb2b, 0x7557b7bcde05, 0x5c6d9daa04f9, 0xb7c749948a86,
  0x5fedce0d9a7b, 0x0dc03f209c8d, 0x4b35e4a33973, 0x76de26507823,
  0x701cf4f0a8b3, 0x0c1ffb83bd9e, 0x6f58108f359b, 0xd7a1a5c2971c,
  0x4039b0106fec, 0xa0d6fdf171fb, 0xa12c449fac69, 0x59d963f6dee3,
  0x48ba6b5203a2, 0x55d3ec34ab12, 0xae0ce5ce9298, 0x509e836d81f7,
  0x560051e51d46, 0x394674eae905, 0x232c736ba215, 0x0ec1b2c76810,
  0x50e12d07e279, 0x1fdac0e54f98, 0xeca79127fcd1, 0xaf9f2bf8c0f0,
  0x3ca03d37565c, 0xf1005712ddbc, 0x0bf7c86b61ec, 0xfd2ee8011609,
  0xfc0479d1f872, 0x14a9cf03dab0, 0xf9fa8930c9e0, 0xbb544f4c2344,
  0x7ba9997b645d, 0xb1eadd511f6e, 0xc5e4023fabb3, 0x8ed2d62a4caf,
  0x6383c870b6ca, 0xb01d169fe461, 0x99b73bc638d6, 0x78128b7172ab,
  0x6e3baef4c5d9, 0x8675ba0f675b, 0x4d2d8d7d9230, 0x329470db49ea,
  0x03e11bf87128, 0x77ec8fec0e4a, 0x5f65a051f608, 0x2e7d486a8b97,
  0x39569beb3159, 0x5ec490a3c9db, 0x3207e6cf30f2, 0x7f848e2fa9da,
  0x7125520e0f20, 0xeba5c0a5f5c7, 0x3fe4716e3e17, 0xfa4f08fcd20b,
]

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

import { faker } from '@faker-js/faker'

import { STATIC_SEED, FAKE_DATA_LENGTH } from '#/config/faker'

const createFakeFeatures = (shouldBeDeterministic = false) => {
  if (shouldBeDeterministic) faker.seed(STATIC_SEED)

  return new Array(FAKE_DATA_LENGTH)
    .fill('feature')
    .map(featureFlagPrefix =>
      [featureFlagPrefix, faker.word.sample(), faker.word.verb()].join('_'),
    )
}

export { createFakeFeatures }

import { faker } from '@faker-js/faker'

import { FAKE_DATA_LENGTH, STATIC_SEED } from '#/config/faker'

const createFakeFeatures = (shouldBeDeterministic = false) => {
  if (shouldBeDeterministic) faker.seed(STATIC_SEED)

  return new Array(FAKE_DATA_LENGTH)
    .fill('FF')
    .map(featureFlagPrefix =>
      [featureFlagPrefix, faker.word.sample(), faker.word.verb()].join('_'),
    )
}

export { createFakeFeatures }

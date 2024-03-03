import { faker } from '@faker-js/faker'

import { FeatureFlagModel } from '@/modules/features/domain/models/FeatureFlag'

import { STATIC_SEED, FAKE_DATA_LENGTH } from '#/config/faker'

const createFakeFeatures = (shouldBeDeterministic = false) => {
  if (shouldBeDeterministic) faker.seed(STATIC_SEED)

  const values = new Array(FAKE_DATA_LENGTH)
    .fill('feature')
    .map(featureFlagPrefix =>
      [featureFlagPrefix, faker.word.sample(), faker.word.verb()].join('_'),
    )

  values.forEach(value => FeatureFlagModel.parse(value))

  return values
}

export { createFakeFeatures }

import { bench, describe } from 'vitest'

import { chunkEvery } from '@/shared/utils/objects'

describe('chunkEvery for array', () => {
  bench('Array [200k / 8]', () => {
    chunkEvery(new Array(200000).fill(0), 8)
  })
})

describe('chunkEvery for array-like structures', () => {
  bench('Set [200k / 8]', () => {
    chunkEvery(new Set(new Array(200000).fill(0)), 8)
  })
})

describe('chunkEvery for string', () => {
  bench('Literal [200k / 8]', () => {
    chunkEvery('0'.repeat(200000), 8)
  })
})

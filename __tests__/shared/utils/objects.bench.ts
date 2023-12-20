import { bench, describe } from 'vitest'

import { chunkEvery } from '@/shared/utils/objects'

describe('chunkEvery for Array', () => {
  bench('[200k / 8]', () => {
    chunkEvery(new Array(200_000).fill(0), 8)
  })
})

describe('chunkEvery for Set', () => {
  bench('[200k / 8]', () => {
    chunkEvery(new Set(new Array(200_000).fill(0)), 8)
  })
})

describe('chunkEvery for String', () => {
  bench('[200k / 8]', () => {
    chunkEvery('0'.repeat(200_000), 8)
  })
})

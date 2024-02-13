import { describe, expect, it } from 'vitest'

import { jsonStringify } from '@/shared/utils/json'

describe('jsonStringify', () => {
  describe('parse', () => {
    it('should be able to format JSON-like values', () => {
      const myRecord = { foo: 'bar' }
      const myArray = ['hello', 'world']

      const recordResult = jsonStringify.parse(myRecord)
      const arrayResult = jsonStringify.parse(myArray)

      expect(recordResult).toBe('{"foo":"bar"}')
      expect(arrayResult).toBe('["hello","world"]')
    })

    it("should be able to format values from it's replacer", () => {
      const myMap = new Map([['foo', 'bar']])
      const mySet = new Set(['hello', 'world'])

      const mapResult = jsonStringify.parse(myMap)
      const setResult = jsonStringify.parse(mySet)

      expect(mapResult).toBe('{"foo":"bar"}')
      expect(setResult).toBe('["hello","world"]')
    })
  })

  describe('template', () => {
    it('should be able to template JSON-like values', () => {
      const myRecord = { hello: 'world' }
      const myArray = ['foo', 'bar']

      const recordResult = jsonStringify.template`This is the shape of my record: ${myRecord}`
      const arrayResult = jsonStringify.template`This is the shape of my array: ${myArray}`

      expect(recordResult).toBe(
        'This is the shape of my record: {"hello":"world"}',
      )

      expect(arrayResult).toBe('This is the shape of my array: ["foo","bar"]')
    })

    it('should be able to template JSON-like values', () => {
      const myMap = new Map([['hello', 'world']])
      const mySet = new Set(['foo', 'bar'])

      const mapResult = jsonStringify.template`This is the shape of my record: ${myMap}`
      const setResult = jsonStringify.template`This is the shape of my array: ${mySet}`

      expect(mapResult).toBe(
        'This is the shape of my record: {"hello":"world"}',
      )

      expect(setResult).toBe('This is the shape of my array: ["foo","bar"]')
    })
  })
})

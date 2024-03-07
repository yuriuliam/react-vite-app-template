import { describe, it, expect } from 'vitest'

import { areObjectsEqual, isObject, isRecord } from '@/shared/utils/objects'

describe('areObjectsEqual', () => {
  it('should equalize different records with same props and values', () => {
    const objA = { foo: 'bar' }
    const objB = { foo: 'bar' }

    const result = areObjectsEqual(objA, objB)

    expect(result).toBe(true)
  })

  it('should equalize different arrays with same props and values', () => {
    const objA = ['hello', 'world!']
    const objB = ['hello', 'world!']

    const result = areObjectsEqual(objA, objB)

    expect(result).toBe(true)
  })

  it('should return true for same objects', () => {
    const objA = {}
    const objB = objA

    const result = areObjectsEqual(objA, objB)

    expect(result).toBe(true)
  })

  it('should return false for different object formats', () => {
    const objA = ['hello']
    const objB = { '0': 'hello' }

    const result = areObjectsEqual(objA, objB)

    expect(result).toBe(false)
  })
})

describe('isObject', () => {
  it('should return true once a value is an object', () => {
    const obj1 = {}
    const obj2 = [] as any[]
    const obj3 = new Map()
    const obj4 = new Set()

    expect(isObject(obj1)).toBeTruthy()
    expect(isObject(obj2)).toBeTruthy()
    expect(isObject(obj3)).toBeTruthy()
    expect(isObject(obj4)).toBeTruthy()
  })

  it('should return false once a value is not an object', () => {
    const value1 = Symbol.for('foo')
    const value2 = 'bar'
    const value3 = true
    const value4 = 32871

    expect(isObject(value1)).toBeFalsy()
    expect(isObject(value2)).toBeFalsy()
    expect(isObject(value3)).toBeFalsy()
    expect(isObject(value4)).toBeFalsy()
  })
})

describe('isRecord', () => {
  it('should return true once a value is an record', () => {
    const obj = {}

    expect(isRecord(obj)).toBeTruthy()
  })

  it('should return false once a value is not an record', () => {
    const value1 = [] as any[]
    const value2 = new Map()
    const value3 = new Set()
    const value4 = 'foo'

    expect(isRecord(value1)).toBeFalsy()
    expect(isRecord(value2)).toBeFalsy()
    expect(isRecord(value3)).toBeFalsy()
    expect(isRecord(value4)).toBeFalsy()
  })
})

import { describe, it, expect } from 'vitest'

import {
  argb32,
  cmyk,
  hex,
  // hsla,
  // hsv,
  // rgba,
  // rgba32,
} from '@/shared/utils/colors'

const COLOR_VALUES = Object.freeze({
  red: Object.freeze({
    argb32: 0xff_cc_36_10 & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 0, magenta: 74, yellow: 92, key: 20 }),
    hex: '#cc3610ff',
    hsla: Object.freeze({ hue: 12, saturation: 85, luminance: 43, alpha: 100 }),
    hsv: Object.freeze({ hue: 12, saturation: 92, vibrance: 80 }),
    rgba: Object.freeze({ red: 204, green: 54, blue: 16, alpha: 255 }),
    rgba32: 0xcc_36_10_ff,
  }),
  orange: Object.freeze({
    argb32: 0xff_d9_90_1a & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 0, magenta: 34, yellow: 88, key: 15 }),
    hex: '#d9901aff',
    hsla: Object.freeze({ hue: 37, saturation: 79, luminance: 48, alpha: 100 }),
    hsv: Object.freeze({ hue: 37, saturation: 88, vibrance: 85 }),
    rgba: Object.freeze({ red: 217, green: 144, blue: 26, alpha: 255 }),
    rgba32: 0xd9_90_1a_ff,
  }),
  yellow: Object.freeze({
    argb32: 0xff_d6_bd_18 & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 0, magenta: 12, yellow: 89, key: 16 }),
    hex: '#d6bd18ff',
    hsla: Object.freeze({ hue: 52, saturation: 80, luminance: 47, alpha: 100 }),
    hsv: Object.freeze({ hue: 52, saturation: 89, vibrance: 84 }),
    rgba: Object.freeze({ red: 214, green: 189, blue: 24, alpha: 255 }),
    rgba32: 0xd6_bd_18_ff,
  }),
  green: Object.freeze({
    argb32: 0xff_5d_d6_3c & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 57, magenta: 0, yellow: 72, key: 16 }),
    hex: '#5dd63cff',
    hsla: Object.freeze({
      hue: 107,
      saturation: 65,
      luminance: 54,
      alpha: 100,
    }),
    hsv: Object.freeze({ hue: 107, saturation: 72, vibrance: 84 }),
    rgba: Object.freeze({ red: 93, green: 214, blue: 60, alpha: 255 }),
    rgba32: 0x5d_d6_3c_ff,
  }),
  blue: Object.freeze({
    argb32: 0xff_21_74_b8 & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 82, magenta: 37, yellow: 0, key: 28 }),
    hex: '#2174b8ff',
    hsla: Object.freeze({
      hue: 207,
      saturation: 70,
      luminance: 43,
      alpha: 100,
    }),
    hsv: Object.freeze({ hue: 207, saturation: 82, vibrance: 72 }),
    rgba: Object.freeze({ red: 33, green: 116, blue: 184, alpha: 255 }),
    rgba32: 0x21_74_b8_ff,
  }),
  purple: Object.freeze({
    argb32: 0xff_74_32_b3 & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 35, magenta: 72, yellow: 0, key: 30 }),
    hex: '#7432b3ff',
    hsla: Object.freeze({
      hue: 271,
      saturation: 56,
      luminance: 45,
      alpha: 100,
    }),
    hsv: Object.freeze({ hue: 271, saturation: 72, vibrance: 70 }),
    rgba: Object.freeze({ red: 116, green: 50, blue: 179, alpha: 255 }),
    rgba32: 0x74_32_b3_ff,
  }),
  magenta: Object.freeze({
    argb32: 0xff_db_1d_c8 & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 0, magenta: 87, yellow: 9, key: 14 }),
    hex: '#db1dc8ff',
    hsla: Object.freeze({
      hue: 306,
      saturation: 77,
      luminance: 49,
      alpha: 100,
    }),
    hsv: Object.freeze({ hue: 306, saturation: 87, vibrance: 86 }),
    rgba: Object.freeze({ red: 219, green: 29, blue: 200, alpha: 255 }),
    rgba32: 0xdb_1d_c8_ff,
  }),
})

describe('argb32', () => {
  it('should create a color object out of a valid argb value', () => {
    const color = COLOR_VALUES.magenta

    const colorObj = argb32(color.argb32)

    expect(colorObj.toArgb32()).toBe(color.argb32)
    expect(colorObj.toCmyk()).toEqual(color.cmyk)
    expect(colorObj.toHex()).toEqual(color.hex)
    expect(colorObj.toHsla()).toEqual(color.hsla)
    expect(colorObj.toHsv()).toEqual(color.hsv)
    expect(colorObj.toRgba()).toEqual(color.rgba)
  })

  it('should create a color object out of a given number', () => {
    // Color Def. ==== __AA_RR_GG_BB
    const color = COLOR_VALUES.blue

    const colorObj = argb32(color.argb32)

    expect(colorObj.toArgb32()).toBe(color.argb32)
    expect(colorObj.toRgba()).toEqual(color.rgba)
  })

  it('should throw an error when provided with NaN-like values', () => {
    const value = 'not a number'
    // @ts-expect-error for test purposes
    expect(() => argb32(value)).toThrowError()
  })
})

describe('cmyk', () => {
  it('should create a color object out of a valid cmyk value', () => {
    const color = COLOR_VALUES.purple

    const colorObj = cmyk(color.cmyk)

    expect(colorObj.toArgb32()).toBe(color.argb32)
    expect(colorObj.toCmyk()).toEqual(color.cmyk)
    expect(colorObj.toHex()).toEqual(color.hex)
    expect(colorObj.toHsla()).toEqual(color.hsla)
    expect(colorObj.toHsv()).toEqual(color.hsv)
    expect(colorObj.toRgba()).toEqual(color.rgba)
  })

  it('should throw an error when provided out-of-range values', () => {
    const color = COLOR_VALUES.purple
    const colorCmykCyanOOR = { ...color.cmyk, cyan: 101 }
    const colorCmykMagentaOOR = { ...color.cmyk, magenta: -1 }
    const colorCmykYellowOOR = { ...color.cmyk, yellow: -238 }
    const colorCmykKeyOOR = { ...color.cmyk, key: 200 }

    expect(() => cmyk(colorCmykCyanOOR)).toThrowError()
    expect(() => cmyk(colorCmykMagentaOOR)).toThrowError()
    expect(() => cmyk(colorCmykYellowOOR)).toThrowError()
    expect(() => cmyk(colorCmykKeyOOR)).toThrowError()
  })
})

describe('hex', () => {
  it('should create a color object out of a valid hex value', () => {
    const color = COLOR_VALUES.green

    const colorObj = hex(color.hex)

    expect(colorObj.toArgb32()).toBe(color.argb32)
    expect(colorObj.toCmyk()).toEqual(color.cmyk)
    expect(colorObj.toHex()).toEqual(color.hex)
    expect(colorObj.toHsla()).toEqual(color.hsla)
    expect(colorObj.toHsv()).toEqual(color.hsv)
    expect(colorObj.toRgba()).toEqual(color.rgba)
  })

  it('should consider rgb hex values', () => {
    const color = COLOR_VALUES.green
    const hexValue = color.hex.slice(0, 7) // #rrggbb

    const colorObj = hex(hexValue)

    expect(colorObj.toArgb32()).toBe(color.argb32)
    expect(colorObj.toCmyk()).toEqual(color.cmyk)
    expect(colorObj.toHex()).toEqual(color.hex)
    expect(colorObj.toHsla()).toEqual(color.hsla)
    expect(colorObj.toHsv()).toEqual(color.hsv)
    expect(colorObj.toRgba()).toEqual(color.rgba)
  })

  it('should consider hex values without "#"', () => {
    const color = COLOR_VALUES.green
    const hexValue = color.hex.replace('#', '')

    console.log('hexValue', hexValue)

    const colorObj = hex(hexValue)

    expect(colorObj.toArgb32()).toBe(color.argb32)
    expect(colorObj.toCmyk()).toEqual(color.cmyk)
    expect(colorObj.toHex()).toEqual(color.hex)
    expect(colorObj.toHsla()).toEqual(color.hsla)
    expect(colorObj.toHsv()).toEqual(color.hsv)
    expect(colorObj.toRgba()).toEqual(color.rgba)
  })

  it('should throw an error when provided with invalid hex values', () => {
    const value = 'not-a-hex'

    expect(() => hex(value)).toThrowError()
  })
})

// describe('Color', () => {
//   it('can be instantiated', () => {
//     const colorObj = new Color()

//     expect(colorObj).toBeTypeOf('object')
//     expect(colorObj).toHaveProperty('value', -1)
//   })

//   it('can be instantiated from Hexadecimal values', () => {
//     const colorHex = 'fafafa'
//     const colorObj = Color.fromHex(colorHex)

//     expect(colorObj.toHex()).toBe(colorHex)
//   })

//   it('can be instantiated from RGB(A) values', () => {
//     const colorRgba = {
//       red: 32,
//       green: 238,
//       blue: 124,
//       alpha: 80,
//     }

//     const colorObj = Color.fromRgba(colorRgba)

//     expect(colorObj.toRgba()).toEqual(colorRgba)
//   })

//   it('can be instantiated from HSL(A) values', () => {
//     const colorHsla = {
//       hue: 293,
//       saturation: 50,
//       lightness: 89,
//       alpha: 38,
//     }

//     const colorObj = Color.fromHsla(colorHsla)

//     const { hue, saturation, lightness, alpha } = colorObj.toHsla()

//     // HSL and RGB requires a lot of calcs, which can result into a difference
//     // between values, therefore, we check if this difference is between `1`
//     expect(diff(colorHsla.hue, hue)).toBeLessThanOrEqual(1)
//     expect(diff(colorHsla.saturation, saturation)).toBeLessThanOrEqual(1)
//     expect(diff(colorHsla.lightness, lightness)).toBeLessThanOrEqual(1)
//     expect(diff(colorHsla.alpha, alpha)).toBeLessThanOrEqual(1)
//   })

//   it('can be used to convert RGB(A) to HSL(A)', () => {
//     const colorHex = 'FF5733'
//     const colorRgba = { red: 255, green: 87, blue: 51, alpha: 255 }
//     const colorHsla = { hue: 11, saturation: 100, lightness: 60, alpha: 100 }

//     const colorObj = Color.fromHex(colorHex)
//     const resultRgba = colorObj.toRgba()
//     const resultHsla = colorObj.toHsla()

//     expect(resultRgba).toEqual(colorRgba)
//     expect(resultHsla).toEqual(colorHsla)
//   })

//   it('can output different color string formats', () => {
//     const colorHex = '4287f5'
//     const colorHsl = { hue: 217, saturation: 90, lightness: 61 }
//     const colorRgb = { red: 66, green: 135, blue: 245 }
//     const colorA32 = 0xff4287f5

//     const hslString = `hsl(${colorHsl.hue}, ${colorHsl.saturation}%, ${colorHsl.lightness}%)`
//     const hslaString = `hsla(${colorHsl.hue}, ${colorHsl.saturation}%, ${colorHsl.lightness}%, 1)`
//     const rgbString = `rgb(${colorRgb.red}, ${colorRgb.green}, ${colorRgb.blue})`
//     const rgbaString = `rgba(${colorRgb.red}, ${colorRgb.green}, ${colorRgb.blue}, 1)`
//     const parsedA32 = colorA32 & 0xffffffff

//     const colorObj = new Color(colorA32)

//     expect(colorObj.toString()).toEqual(parsedA32.toString())
//     expect(colorObj.toString('bits')).toEqual(parsedA32.toString())
//     expect(colorObj.toString('hex')).toEqual(`#${colorHex}`)
//     expect(colorObj.toString('hexa')).toEqual(`#${colorHex}ff`)
//     expect(colorObj.toString('hsl')).toEqual(hslString)
//     expect(colorObj.toString('hsla')).toEqual(hslaString)
//     expect(colorObj.toString('rgb')).toEqual(rgbString)
//     expect(colorObj.toString('rgba')).toEqual(rgbaString)
//   })

//   it('should not accept unsupported formats when converting', () => {
//     const colorHex = '9fe2bf'

//     const colorObj = Color.fromHex(colorHex)

//     // @ts-expect-error meant to be a test
//     expect(() => colorObj.toString('lab')).toThrowError()
//   })

//   it('should throw an error for invalid Hexadecimal values', () => {
//     // Based on '9fe2bf'
//     const colorHexInvalidA = '9fe2gf'
//     const colorHexInvalidB = '9fe2bffff'
//     const colorHexInvalidC = '##9fe2bfff'

//     expect(() => Color.fromHex(colorHexInvalidA)).toThrowError()
//     expect(() => Color.fromHex(colorHexInvalidB)).toThrowError()
//     expect(() => Color.fromHex(colorHexInvalidC)).toThrowError()
//   })

//   it('should throw an error for invalid RGB(A) values', () => {
//     const base = { red: 127, green: 127, blue: 127, alpha: 127 }
//     const invalidRed = { ...base, red: -327 }
//     const invalidGreen = { ...base, green: -1 }
//     const invalidBlue = { ...base, green: 37281 }
//     const invalidAlpha = { ...base, green: 256 }

//     expect(() => Color.fromRgba(invalidRed)).toThrowError()
//     expect(() => Color.fromRgba(invalidGreen)).toThrowError()
//     expect(() => Color.fromRgba(invalidBlue)).toThrowError()
//     expect(() => Color.fromRgba(invalidAlpha)).toThrowError()
//   })

//   it('should throw an error for invalid HSL(A) values', () => {
//     const base = { hue: 136, saturation: 54, lightness: 43, alpha: 100 }
//     const invalidHue = { ...base, hue: -478 }
//     const invalidSaturation = { ...base, saturation: -1 }
//     const invalidLightness = { ...base, lightness: 129 }
//     const invalidAlpha = { ...base, alpha: 101 }

//     expect(() => Color.fromHsla(invalidHue)).toThrowError()
//     expect(() => Color.fromHsla(invalidSaturation)).toThrowError()
//     expect(() => Color.fromHsla(invalidLightness)).toThrowError()
//     expect(() => Color.fromHsla(invalidAlpha)).toThrowError()
//   })
// })

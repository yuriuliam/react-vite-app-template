import { describe, it, expect } from 'vitest'

import {
  argb32,
  cmyk,
  hex,
  hsla,
  hsv,
  rgba,
  rgba32,
} from '@/shared/utils/colors'

/** Color values - Based on HSLA conversions */
const COLOR_VALUES_HSLA_BASED = Object.freeze({
  red: Object.freeze({
    argb32: 0xff_cb_36_10 & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 0, magenta: 73, yellow: 92, key: 20 }),
    hex: '#cb3610ff',
    hsla: Object.freeze({ hue: 12, saturation: 85, luminance: 43, alpha: 100 }),
    hsv: Object.freeze({ hue: 12, saturation: 92, vibrance: 80 }),
    rgba: Object.freeze({ red: 203, green: 54, blue: 16, alpha: 255 }),
    rgba32: 0xcb_36_10_ff,
  }),
  orange: Object.freeze({
    argb32: 0xff_db_91_1a & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 0, magenta: 34, yellow: 88, key: 14 }),
    hex: '#db911aff',
    hsla: Object.freeze({ hue: 37, saturation: 79, luminance: 48, alpha: 100 }),
    hsv: Object.freeze({ hue: 37, saturation: 88, vibrance: 86 }),
    rgba: Object.freeze({ red: 219, green: 145, blue: 26, alpha: 255 }),
    rgba32: 0xdb_91_1a_ff,
  }),
  yellow: Object.freeze({
    argb32: 0xff_d8_be_18 & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 0, magenta: 12, yellow: 89, key: 15 }),
    hex: '#d8be18ff',
    hsla: Object.freeze({ hue: 52, saturation: 80, luminance: 47, alpha: 100 }),
    hsv: Object.freeze({ hue: 52, saturation: 89, vibrance: 85 }),
    rgba: Object.freeze({ red: 216, green: 190, blue: 24, alpha: 255 }),
    rgba32: 0xd8_be_18_ff,
  }),
  green: Object.freeze({
    argb32: 0xff_5e_d6_3d & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 56, magenta: 0, yellow: 71, key: 16 }),
    hex: '#5ed63dff',
    hsla: Object.freeze({
      hue: 107,
      saturation: 65,
      luminance: 54,
      alpha: 100,
    }),
    hsv: Object.freeze({ hue: 107, saturation: 71, vibrance: 84 }),
    rgba: Object.freeze({ red: 94, green: 214, blue: 61, alpha: 255 }),
    rgba32: 0x5e_d6_3d_ff,
  }),
  blue: Object.freeze({
    argb32: 0xff_21_75_ba & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 82, magenta: 37, yellow: 0, key: 27 }),
    hex: '#2175baff',
    hsla: Object.freeze({
      hue: 207,
      saturation: 70,
      luminance: 43,
      alpha: 100,
    }),
    hsv: Object.freeze({ hue: 207, saturation: 82, vibrance: 73 }),
    rgba: Object.freeze({ red: 33, green: 117, blue: 186, alpha: 255 }),
    rgba32: 0x21_75_ba_ff,
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
    argb32: 0xff_dd_1d_ca & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 0, magenta: 87, yellow: 9, key: 13 }),
    hex: '#dd1dcaff',
    hsla: Object.freeze({
      hue: 306,
      saturation: 77,
      luminance: 49,
      alpha: 100,
    }),
    hsv: Object.freeze({ hue: 306, saturation: 87, vibrance: 87 }),
    rgba: Object.freeze({ red: 221, green: 29, blue: 202, alpha: 255 }),
    rgba32: 0xdd_1d_ca_ff,
  }),
})

/** Color values - Based on HSV conversions */
const COLOR_VALUES_HSV_BASED = Object.freeze({
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
    argb32: 0xff_db_91_1a & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 0, magenta: 34, yellow: 88, key: 14 }),
    hex: '#db911aff',
    hsla: Object.freeze({ hue: 37, saturation: 79, luminance: 48, alpha: 100 }),
    hsv: Object.freeze({ hue: 37, saturation: 88, vibrance: 86 }),
    rgba: Object.freeze({ red: 219, green: 145, blue: 26, alpha: 255 }),
    rgba32: 0xdb_91_1a_ff,
  }),
  yellow: Object.freeze({
    argb32: 0xff_d9_bf_18 & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 0, magenta: 12, yellow: 89, key: 15 }),
    hex: '#d9bf18ff',
    hsla: Object.freeze({ hue: 52, saturation: 80, luminance: 47, alpha: 100 }),
    hsv: Object.freeze({ hue: 52, saturation: 89, vibrance: 85 }),
    rgba: Object.freeze({ red: 217, green: 191, blue: 24, alpha: 255 }),
    rgba32: 0xd9_bf_18_ff,
  }),
  green: Object.freeze({
    argb32: 0xff_5f_d6_3e & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 56, magenta: 0, yellow: 71, key: 16 }),
    hex: '#5fd63eff',
    hsla: Object.freeze({
      hue: 107,
      saturation: 65,
      luminance: 54,
      alpha: 100,
    }),
    hsv: Object.freeze({ hue: 107, saturation: 71, vibrance: 84 }),
    rgba: Object.freeze({ red: 95, green: 214, blue: 61, alpha: 255 }),
    rgba32: 0x5f_d6_3e_ff,
  }),
  blue: Object.freeze({
    argb32: 0xff_22_75_ba & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 82, magenta: 37, yellow: 0, key: 27 }),
    hex: '#2275baff',
    hsla: Object.freeze({
      hue: 207,
      saturation: 69,
      luminance: 43,
      alpha: 100,
    }),
    hsv: Object.freeze({ hue: 207, saturation: 82, vibrance: 73 }),
    rgba: Object.freeze({ red: 34, green: 117, blue: 186, alpha: 255 }),
    rgba32: 0x22_75_ba_ff,
  }),
  purple: Object.freeze({
    argb32: 0xff_75_32_b3 & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 35, magenta: 72, yellow: 0, key: 30 }),
    hex: '#7532b3ff',
    hsla: Object.freeze({
      hue: 271,
      saturation: 56,
      luminance: 45,
      alpha: 100,
    }),
    hsv: Object.freeze({ hue: 271, saturation: 72, vibrance: 70 }),
    rgba: Object.freeze({ red: 117, green: 50, blue: 179, alpha: 255 }),
    rgba32: 0x75_32_b3_ff,
  }),
  magenta: Object.freeze({
    argb32: 0xff_de_1d_cb & 0xff_ff_ff_ff,
    cmyk: Object.freeze({ cyan: 0, magenta: 87, yellow: 9, key: 13 }),
    hex: '#de1dcbff',
    hsla: Object.freeze({
      hue: 306,
      saturation: 77,
      luminance: 49,
      alpha: 100,
    }),
    hsv: Object.freeze({ hue: 306, saturation: 87, vibrance: 87 }),
    rgba: Object.freeze({ red: 222, green: 29, blue: 203, alpha: 255 }),
    rgba32: 0xde_1d_cb_ff,
  }),
})

describe('argb32', () => {
  it('should create a color object out of a valid argb value', () => {
    const color = COLOR_VALUES_HSLA_BASED.magenta

    const colorObj = argb32(color.argb32)

    expect(colorObj.toArgb32()).toBe(color.argb32)
    expect(colorObj.toCmyk()).toEqual(color.cmyk)
    expect(colorObj.toHex()).toEqual(color.hex)
    expect(colorObj.toHsla()).toEqual(color.hsla)
    expect(colorObj.toHsv()).toEqual(color.hsv)
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
    const color = COLOR_VALUES_HSLA_BASED.purple

    const colorObj = cmyk(color.cmyk)

    expect(colorObj.toArgb32()).toBe(color.argb32)
    expect(colorObj.toCmyk()).toEqual(color.cmyk)
    expect(colorObj.toHex()).toEqual(color.hex)
    expect(colorObj.toHsla()).toEqual(color.hsla)
    expect(colorObj.toHsv()).toEqual(color.hsv)
    expect(colorObj.toRgba()).toEqual(color.rgba)
  })

  it('should throw an error when provided out-of-range values', () => {
    const color = COLOR_VALUES_HSLA_BASED.purple
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
    const color = COLOR_VALUES_HSLA_BASED.green

    const colorObj = hex(color.hex)

    expect(colorObj.toArgb32()).toBe(color.argb32)
    expect(colorObj.toCmyk()).toEqual(color.cmyk)
    expect(colorObj.toHex()).toEqual(color.hex)
    expect(colorObj.toHsla()).toEqual(color.hsla)
    expect(colorObj.toHsv()).toEqual(color.hsv)
    expect(colorObj.toRgba()).toEqual(color.rgba)
  })

  it('should consider rgb hex values', () => {
    const color = COLOR_VALUES_HSLA_BASED.green
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
    const color = COLOR_VALUES_HSLA_BASED.green
    const hexValue = color.hex.replace('#', '')

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

describe('hsla', () => {
  it('should create a color object out of a valid hsla value', () => {
    const color = COLOR_VALUES_HSLA_BASED.orange

    const colorObj = hsla(color.hsla)

    expect(colorObj.toArgb32()).toBe(color.argb32)
    expect(colorObj.toCmyk()).toEqual(color.cmyk)
    expect(colorObj.toHex()).toEqual(color.hex)
    expect(colorObj.toHsla()).toEqual(color.hsla)
    expect(colorObj.toHsv()).toEqual(color.hsv)
    expect(colorObj.toRgba()).toEqual(color.rgba)
  })

  it('should throw an error when provided out-of-range values', () => {
    const color = COLOR_VALUES_HSLA_BASED.red
    const colorHslaHueOOR = { ...color.hsla, hue: 361 }
    const colorHslaSaturationOOR = { ...color.hsla, saturation: -1 }
    const colorHslaLuminanceOOR = { ...color.hsla, luminance: -50 }
    const colorHslaAlphaOOR = { ...color.hsla, alpha: 101 }

    expect(() => hsla(colorHslaHueOOR)).toThrowError()
    expect(() => hsla(colorHslaSaturationOOR)).toThrowError()
    expect(() => hsla(colorHslaLuminanceOOR)).toThrowError()
    expect(() => hsla(colorHslaAlphaOOR)).toThrowError()
  })
})

describe('hsv', () => {
  it('should create a color object out of a valid hsv value', () => {
    const color = COLOR_VALUES_HSV_BASED.blue

    const colorObj = hsv(color.hsv)

    expect(colorObj.toArgb32()).toBe(color.argb32)
    expect(colorObj.toCmyk()).toEqual(color.cmyk)
    expect(colorObj.toHex()).toEqual(color.hex)
    expect(colorObj.toHsla()).toEqual(color.hsla)
    expect(colorObj.toHsv()).toEqual(color.hsv)
    expect(colorObj.toRgba()).toEqual(color.rgba)
  })

  it('should throw an error when provided out-of-range values', () => {
    const color = COLOR_VALUES_HSV_BASED.magenta
    const colorHsvHueOOR = { ...color.hsv, hue: 361 }
    const colorHsvSaturationOOR = { ...color.hsv, saturation: -1 }
    const colorHsvVibranceOOR = { ...color.hsv, vibrance: -50 }

    expect(() => hsv(colorHsvHueOOR)).toThrowError()
    expect(() => hsv(colorHsvSaturationOOR)).toThrowError()
    expect(() => hsv(colorHsvVibranceOOR)).toThrowError()
  })
})

describe('rgba', () => {
  it('should create a color object out of a valid rgba value', () => {
    const color = COLOR_VALUES_HSLA_BASED.magenta

    const colorObj = rgba(color.rgba)

    expect(colorObj.toArgb32()).toBe(color.argb32)
    expect(colorObj.toCmyk()).toEqual(color.cmyk)
    expect(colorObj.toHex()).toEqual(color.hex)
    expect(colorObj.toHsla()).toEqual(color.hsla)
    expect(colorObj.toHsv()).toEqual(color.hsv)
    expect(colorObj.toRgba()).toEqual(color.rgba)
  })

  it('should throw an error when provided out-of-range values', () => {
    const color = COLOR_VALUES_HSLA_BASED.yellow
    const colorRgbaRedOOR = { ...color.rgba, red: 256 }
    const colorRgbaBlueOOR = { ...color.rgba, green: 38291 }
    const colorRgbaGreenOOR = { ...color.rgba, blue: -50 }
    const colorRgbaAlphaOOR = { ...color.rgba, alpha: -1 }

    expect(() => rgba(colorRgbaRedOOR)).toThrowError()
    expect(() => rgba(colorRgbaBlueOOR)).toThrowError()
    expect(() => rgba(colorRgbaGreenOOR)).toThrowError()
    expect(() => rgba(colorRgbaAlphaOOR)).toThrowError()
  })
})

describe('rgba32', () => {
  it('should create a color object out of a valid argb value', () => {
    const color = COLOR_VALUES_HSLA_BASED.purple

    const colorObj = rgba32(color.rgba32)

    expect(colorObj.toArgb32()).toBe(color.argb32)
    expect(colorObj.toCmyk()).toEqual(color.cmyk)
    expect(colorObj.toHex()).toEqual(color.hex)
    expect(colorObj.toHsla()).toEqual(color.hsla)
    expect(colorObj.toHsv()).toEqual(color.hsv)
    expect(colorObj.toRgba()).toEqual(color.rgba)
  })

  it('should throw an error when provided with NaN-like values', () => {
    const value = 'not a number'
    // @ts-expect-error for test purposes
    expect(() => argb32(value)).toThrowError()
  })
})

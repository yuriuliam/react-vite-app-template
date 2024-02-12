import {
  ARGB32_SIGNATURE,
  CMYK_SIGNATURE,
  HEX_SIGNATURE,
  HEX_VALUE_REGEXP,
  HSLA_SIGNATURE,
  HSL_SIGNATURE,
  HSV_SIGNATURE,
  RGBA32_SIGNATURE,
  RGBA_SIGNATURE,
  RGB_SIGNATURE,
} from '@/config/colors'

import { isNumber, isBetween } from './numbers'

type ARGB32 = number
/**
 * Represents a red-green-blue key-value object.
 * all values are limited from 0 to 255 when used internally.
 */
type RGB = { red: number; green: number; blue: number }
type RGBA = RGB & { alpha: number }
type RGBA32 = number
type Hex = string
type HSL = { hue: number; saturation: number; luminance: number }
type HSLA = HSL & { alpha: number }
type HSV = { hue: number; saturation: number; vibrance: number }
type CMYK = { cyan: number; magenta: number; yellow: number; key: number }

type ColorParams<TParams, TParamsSuperset> = TParams &
  Partial<Omit<TParamsSuperset, keyof TParams>>

type RGBAParams = ColorParams<RGB, RGBA>
type HSLAParams = ColorParams<HSL, HSLA>

type SupportedColorFormats =
  | 'argb32'
  | 'cmyk'
  | 'hex'
  | 'hsl'
  | 'hsla'
  | 'hsv'
  | 'rgb'
  | 'rgba'
  | 'rgba32'

type MutateFn<T> = (params: T) => T
type StringifyFn = () => string

const COLOR_SIGNATURES = Object.freeze<Record<SupportedColorFormats, symbol>>({
  argb32: ARGB32_SIGNATURE,
  cmyk: CMYK_SIGNATURE,
  hex: HEX_SIGNATURE,
  hsl: HSL_SIGNATURE,
  hsla: HSLA_SIGNATURE,
  hsv: HSV_SIGNATURE,
  rgb: RGB_SIGNATURE,
  rgba: RGBA_SIGNATURE,
  rgba32: RGBA32_SIGNATURE,
})

class Color {
  private readonly value: number
  private readonly signature: symbol

  private constructor(value: number, signature: symbol) {
    this.value = value & 0xffffffff
    this.signature = signature
  }

  public static argb32(value: number) {
    if (!isNumber(value)) throw Error('Given ARGB32 value is not a number')

    return new Color(value, ARGB32_SIGNATURE)
  }

  public static cmyk({ cyan, magenta, yellow, key }: CMYK) {
    if (!Color.isCmykValid({ cyan, magenta, yellow, key })) {
      throw new Error(
        `Invalid CMYK value(s): (${cyan}, ${magenta}, ${yellow}, ${key})`,
      )
    }

    const rgbValue = this.cmykToRgb({ cyan, magenta, yellow, key })
    const argbValue = this.rgbaToArgb32({ ...rgbValue, alpha: 255 })

    return new Color(argbValue, CMYK_SIGNATURE)
  }

  public static hex(value: string) {
    if (!Color.isHexValid(value)) throw Error(`Invalid Hex Format: ${value}`)

    const rgba32Value = Color.hexToRgba32(value)
    const rgbaValue = Color.rgba32ToRgba(rgba32Value)
    const argbValue = Color.rgbaToArgb32(rgbaValue)

    return new Color(argbValue, HEX_SIGNATURE)
  }

  public static hsla({ hue, saturation, luminance, alpha = 100 }: HSLAParams) {
    if (!Color.isHslaValid({ hue, saturation, luminance, alpha })) {
      throw new Error(
        `Invalid HSLA value(s): (${hue}, ${saturation}, ${luminance}, ${alpha})`,
      )
    }

    const rgbaValue = Color.hslaToRgba({ hue, saturation, luminance, alpha })
    const argbValue = Color.rgbaToArgb32(rgbaValue)

    return new Color(argbValue, HSLA_SIGNATURE)
  }

  public static hsv({ hue, saturation, vibrance }: HSV) {
    if (!Color.isHsvValid({ hue, saturation, vibrance })) {
      throw new Error(
        `Invalid HSV value(s): (${hue}, ${saturation}, ${vibrance})`,
      )
    }

    const rgbValue = Color.hsvToRgb({ hue, saturation, vibrance })

    const argbValue = Color.rgbaToArgb32({ ...rgbValue, alpha: 255 })

    return new Color(argbValue, HSV_SIGNATURE)
  }

  public static rgba({ red, green, blue, alpha = 255 }: RGBAParams) {
    if (!Color.isRgbaValid({ red, green, blue, alpha })) {
      throw new Error(
        `Invalid RGB(A) value(s): (${red}, ${green}, ${blue}, ${alpha})`,
      )
    }

    const argbValue = Color.rgbaToArgb32({ red, green, blue, alpha })

    return new Color(argbValue, RGBA_SIGNATURE)
  }

  public static rgba32(value: number) {
    if (!isNumber(value)) throw Error('Given RGBA32 value is not a number')

    const rgbaValue = Color.rgba32ToRgba(value)
    const argbValue = Color.rgbaToArgb32(rgbaValue)

    return new Color(argbValue, RGBA32_SIGNATURE)
  }

  private static argb32ToRgba(value: number) {
    const argbValue = value & 0xffffffff

    const alpha = (argbValue >> 24) & 0xff
    const red = (argbValue >> 16) & 0xff
    const green = (argbValue >> 8) & 0xff
    const blue = argbValue & 0xff

    return { red, green, blue, alpha } satisfies RGBA
  }

  private static cmykToRgb({ cyan, magenta, yellow, key }: CMYK) {
    const f = (n: number) => Math.round(255 * (1 - n / 100) * (1 - key / 100))

    const red = f(cyan)
    const green = f(magenta)
    const blue = f(yellow)

    return { red, green, blue } satisfies RGB
  }

  private static hexToRgba32(value: string) {
    return parseInt(value.replace('#', '').padEnd(8, 'f'), 16) & 0xffffffff
  }

  /** @see https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative */
  private static hslaToRgba(hslaValue: HSLA) {
    const { hue, saturation, luminance, alpha } = {
      ...hslaValue,
      saturation: hslaValue.saturation / 100,
      luminance: hslaValue.luminance / 100,
      alpha: hslaValue.alpha / 100,
    }

    const k = (n: number) => (n + hue / 30) % 12
    const a = saturation * Math.min(luminance, 1 - luminance)
    const f = (n: number) =>
      luminance - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))

    const red = Math.round(f(0) * 255)
    const green = Math.round(f(8) * 255)
    const blue = Math.round(f(4) * 255)
    const rgbAlpha = Math.round(alpha * 255)

    return { red, green, blue, alpha: rgbAlpha } satisfies RGBA
  }

  /** @see https://en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_RGB_alternative */
  private static hsvToRgb(hsvValue: HSV) {
    const { hue, saturation, vibrance } = {
      ...hsvValue,
      saturation: hsvValue.saturation / 100,
      vibrance: hsvValue.vibrance / 100,
    }

    const k = (n: number) => (n + hue / 60) % 6
    const f = (n: number) =>
      vibrance -
      vibrance * saturation * Math.max(0, Math.min(k(n), 4 - k(n), 1))

    const red = Math.round(f(5) * 255)
    const green = Math.round(f(3) * 255)
    const blue = Math.round(f(1) * 255)

    return { red, green, blue } satisfies RGB
  }

  private static rgbToHsv({ red, green, blue }: RGB) {
    const r = red / 255
    const g = green / 255
    const b = blue / 255

    const rgbMax = Math.max(r, g, b)
    const rgbMin = Math.min(r, g, b)
    const rgbDelta = rgbMax - rgbMin

    const h =
      (rgbDelta !== 0
        ? rgbMax === r
          ? ((g - b) / rgbDelta) % 6
          : rgbMax === g
            ? (b - r) / rgbDelta + 2
            : (r - g) / rgbDelta + 4
        : 0) * 60

    const hue = Math.round(h < 0 ? h + 360 : h)
    const saturation = Math.round((rgbDelta / rgbMax) * 100)
    const vibrance = Math.round(rgbMax * 100)

    return { hue, saturation, vibrance } satisfies HSV
  }

  private static rgbaToArgb32({ red, green, blue, alpha }: RGBA) {
    const argbValue = (alpha << 24) | (red << 16) | (green << 8) | blue

    return argbValue satisfies ARGB32
  }

  private static rgbaToHex({ red, green, blue, alpha }: RGBA) {
    const r16 = red.toString(16)
    const g16 = green.toString(16)
    const b16 = blue.toString(16)
    const a16 = alpha.toString(16)

    return `#${r16}${g16}${b16}${a16}` satisfies Hex
  }

  private static rgbaToRgba32({ red, green, blue, alpha }: RGBA) {
    const rgba32Value = (red << 24) | (green << 16) | (blue << 8) | alpha

    return rgba32Value satisfies RGBA32
  }

  private static rgbaToCmyk({ red, green, blue }: RGB) {
    const keyDelta = 1 - Math.max(red, green, blue) / 255

    const f = (n: number) =>
      Math.round(((1 - n / 255 - keyDelta) / (1 - keyDelta)) * 100)

    const cyan = f(red)
    const magenta = f(green)
    const yellow = f(blue)
    const key = Math.round(keyDelta * 100)

    return { cyan, magenta, yellow, key } satisfies CMYK
  }

  private static rgbaToHsla({ red, green, blue, alpha }: RGBA) {
    const r = red / 255
    const g = green / 255
    const b = blue / 255

    const rgbMax = Math.max(r, g, b)
    const rgbMin = Math.min(r, g, b)
    const rgbDelta = rgbMax - rgbMin

    const l = (rgbMax + rgbMin) / 2
    const s = rgbDelta ? rgbDelta / (1 - Math.abs(2 * l - 1)) : 0
    const h =
      (rgbDelta !== 0
        ? rgbMax === r
          ? ((g - b) / rgbDelta) % 6
          : rgbMax === g
            ? (b - r) / rgbDelta + 2
            : (r - g) / rgbDelta + 4
        : 0) * 60

    const luminance = Math.round(l * 100)
    const saturation = Math.round(s * 100)
    const hue = Math.round(h < 0 ? h + 360 : h)
    const hslAlpha = Math.round((alpha / 255) * 100)

    return { hue, saturation, luminance, alpha: hslAlpha } satisfies HSLA
  }

  private static rgbaToRgb({ red, green, blue, alpha }: RGBA) {
    const base = { red: 255, green: 255, blue: 255 } satisfies RGB

    const alphaValue = alpha / 255
    // Source as S
    // Base as B
    // f(redS, redB) = ((1 - redS) * redB) + (alphaS * redS)
    // f(greenS, greenB) = ((1 - greenS) * greenB) + (alphaS * greenS)
    // f(blueS, blueB) = ((1 - blueS) * blueB) + (alphaS * blueS)
    const f = (source: number, base: number) =>
      Math.round(((1 - alphaValue) * base + alphaValue * (source / 255)) * 255)

    const rgbRed = f(red, base.red)
    const rgbGreen = f(green, base.green)
    const rgbBlue = f(blue, base.blue)

    return { red: rgbRed, green: rgbGreen, blue: rgbBlue } satisfies RGB
  }

  private static rgba32ToRgba(value: number) {
    const red = (value >> 24) & 0xff
    const green = (value >> 16) & 0xff
    const blue = (value >> 8) & 0xff
    const alpha = value & 0xff

    return { red, green, blue, alpha } satisfies RGBA
  }

  private static isCmykValid({ cyan, magenta, yellow, key }: CMYK) {
    return (
      isBetween(cyan, 0, 100) &&
      isBetween(magenta, 0, 100) &&
      isBetween(yellow, 0, 100) &&
      isBetween(key, 0, 100)
    )
  }

  private static isHexValid(value: string) {
    return HEX_VALUE_REGEXP.test(value)
  }

  private static isHslaValid({
    hue,
    saturation,
    luminance,
    alpha = 100,
  }: HSLAParams) {
    return (
      isBetween(hue, 0, 360) &&
      isBetween(saturation, 0, 100) &&
      isBetween(luminance, 0, 100) &&
      isBetween(alpha, 0, 100)
    )
  }

  private static isHsvValid({ hue, saturation, vibrance }: HSV) {
    return (
      isBetween(hue, 0, 360) &&
      isBetween(saturation, 0, 100) &&
      isBetween(vibrance, 0, 100)
    )
  }

  private static isRgbaValid({ red, green, blue, alpha = 255 }: RGBAParams) {
    return (
      isBetween(red, 0, 255) &&
      isBetween(green, 0, 255) &&
      isBetween(blue, 0, 255) &&
      isBetween(alpha, 0, 255)
    )
  }

  private static filterColorParams<T extends Record<any, any>>(params: T) {
    const paramsClone: Record<any, any> = {}

    for (const key in paramsClone) {
      if (params[key] === undefined) continue

      paramsClone[key] = params[key]
    }

    return paramsClone as T
  }

  public cmyk(cmykParams: Partial<CMYK> | MutateFn<Partial<CMYK>>) {
    const cmykValue = this.toCmyk()

    const params = Color.filterColorParams(
      typeof cmykParams === 'function' ? cmykParams(cmykValue) : cmykParams,
    )

    return Color.cmyk({ ...cmykValue, ...params })
  }

  public hsla(hslaParams: Partial<HSLA> | MutateFn<Partial<HSLA>>) {
    const hslaValue = this.toHsla()

    const params = Color.filterColorParams(
      typeof hslaParams === 'function' ? hslaParams(hslaValue) : hslaParams,
    )

    return Color.hsla({ ...hslaValue, ...params })
  }

  public hsv(hsvParams: Partial<HSV> | MutateFn<Partial<HSV>>) {
    const hsvValue = this.toHsv()

    const params = Color.filterColorParams(
      typeof hsvParams === 'function' ? hsvParams(hsvValue) : hsvParams,
    )

    return Color.hsv({ ...hsvValue, ...params })
  }

  public rgba(rgbaParams: Partial<RGBA> | MutateFn<Partial<RGBA>>) {
    const rgbaValue = this.toRgba()

    const params = Color.filterColorParams(
      typeof rgbaParams === 'function' ? rgbaParams(rgbaValue) : rgbaParams,
    )

    return Color.rgba({ ...rgbaValue, ...params })
  }

  public toArgb32() {
    return this.value
  }

  public toCmyk() {
    const argb = this.toArgb32()
    const rgba = Color.argb32ToRgba(argb)
    const rgb = Color.rgbaToRgb(rgba)

    return Color.rgbaToCmyk(rgb)
  }

  public toHex() {
    const argb = this.toArgb32()
    const rgbaValue = Color.argb32ToRgba(argb)

    return Color.rgbaToHex(rgbaValue)
  }

  public toHsl() {
    const argb = this.toArgb32()
    const rgba = Color.argb32ToRgba(argb)
    const rgb = Color.rgbaToRgb(rgba)
    const { alpha, ...hslValue } = Color.rgbaToHsla({ ...rgb, alpha: 255 })

    return hslValue
  }

  public toHsla() {
    const argb = this.toArgb32()
    const rgbaValue = Color.argb32ToRgba(argb)

    return Color.rgbaToHsla(rgbaValue)
  }

  public toHsv() {
    const argb = this.toArgb32()
    const rgbaValue = Color.argb32ToRgba(argb)
    const rgbValue = Color.rgbaToRgb(rgbaValue)

    return Color.rgbToHsv(rgbValue)
  }

  public toRgb() {
    const argb = this.toArgb32()
    const rgba = Color.argb32ToRgba(argb)

    return Color.rgbaToRgb(rgba)
  }

  public toRgba() {
    const argb = this.toArgb32()
    return Color.argb32ToRgba(argb)
  }

  public toRgba32() {
    const argb = this.toArgb32()
    const rgbaValue = Color.argb32ToRgba(argb)

    return Color.rgbaToRgba32(rgbaValue)
  }

  toString(format?: SupportedColorFormats | undefined) {
    if (format && !(format in COLOR_SIGNATURES)) {
      throw TypeError(`Invalid format: ${format}`)
    }

    const formatSignature =
      format && format in COLOR_SIGNATURES
        ? COLOR_SIGNATURES[format]
        : this.signature

    const stringify = Reflect.get(this, formatSignature) as StringifyFn

    return stringify()
  }

  public valueOf() {
    return this.toArgb32()
  }

  public *[Symbol.iterator]() {
    yield this.toArgb32()
  }

  public [Symbol.toPrimitive]() {
    return this.toArgb32()
  }

  protected [ARGB32_SIGNATURE]() {
    return this.toArgb32().toString()
  }

  protected [CMYK_SIGNATURE]() {
    const { cyan, magenta, yellow, key } = this.toCmyk()

    return `cmyk(${cyan}, ${magenta}, ${yellow}, ${key})`
  }

  protected [HEX_SIGNATURE]() {
    return this.toHex()
  }

  protected [HSL_SIGNATURE]() {
    const { hue, saturation, luminance } = this.toHsl()

    return `hsl(${hue}, ${saturation}, ${luminance})`
  }

  protected [HSLA_SIGNATURE]() {
    const { hue, saturation, luminance, alpha } = this.toHsla()

    return `hsla(${hue}, ${saturation}, ${luminance}, ${alpha})`
  }

  protected [HSV_SIGNATURE]() {
    const { hue, saturation, vibrance } = this.toHsv()

    return `hsv(${hue}, ${saturation}, ${vibrance})`
  }

  protected [RGB_SIGNATURE]() {
    const { red, green, blue } = this.toRgb()

    return `rgb(${red}, ${green}, ${blue})`
  }

  protected [RGBA_SIGNATURE]() {
    const { red, green, blue, alpha } = this.toRgba()

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
  }

  protected [RGBA32_SIGNATURE]() {
    return this.toRgba32().toString()
  }
}

const argb32 = Color.argb32.bind(Color)
const cmyk = Color.cmyk.bind(Color)
const hex = Color.hex.bind(Color)
const hsla = Color.hsla.bind(Color)
const hsv = Color.hsv.bind(Color)
const rgba = Color.rgba.bind(Color)
const rgba32 = Color.rgba32.bind(Color)

export { argb32, cmyk, hex, hsla, hsv, rgba, rgba32 }
export type { Color }

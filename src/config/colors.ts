const HEX_VALUE_REGEXP = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{8})$/

const ARGB32_SIGNATURE = Symbol.for('__ARGB_32BITS__')
const CMYK_SIGNATURE = Symbol.for('__CMYK__')
const HEX_SIGNATURE = Symbol.for('__HEX__')
const HSL_SIGNATURE = Symbol.for('__HSL__')
const HSLA_SIGNATURE = Symbol.for('__HSLA__')
const HSV_SIGNATURE = Symbol.for('__HSV__')
const RGB_SIGNATURE = Symbol.for('__RGB__')
const RGBA_SIGNATURE = Symbol.for('__RGBA__')
const RGBA32_SIGNATURE = Symbol.for('__RGBA_32BITS__')

export {
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
}

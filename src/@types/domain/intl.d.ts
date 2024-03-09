declare global {
  declare namespace App.Domain.Intl {
    type DateLike = number | Date

    type RelativeTimeFormatter = (
      value: number,
      unit: globalThis.Intl.RelativeTimeFormatUnit,
    ) => string

    type TimeDifferenceFormatter = (
      value: DateLike,
      now?: DateLike | undefined,
    ) => string

    type DateFormatter = (value?: DateLike | undefined) => string
    type PercentageFormatter = (value: number | bigint) => string
    type PriceFormatter = (value: number | bigint) => string
  }
}

export = global

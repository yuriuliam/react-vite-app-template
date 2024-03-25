type DateTimeFormatterOptions = Intl.DateTimeFormatOptions
type PercentageFormatterOptions = Omit<
  Intl.NumberFormatOptions,
  | 'currency'
  | 'currencyDisplay'
  | 'currencySign'
  | 'unit'
  | 'unitDisplay'
  | 'style'
>
type PriceFormatterOptions = Omit<
  Intl.NumberFormatOptions,
  'style' | 'currency' | 'unit' | 'unitDisplay' | 'style'
>
type RelativeTimeFormatterOptions = Intl.RelativeTimeFormatOptions
type TimeDifferenceFormatterOptions = Intl.RelativeTimeFormatOptions

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

    type CreateDateTimeFormatterFn<TLocale> = (
      locale?: TLocale | undefined,
      options?: DateTimeFormatterOptions | undefined,
    ) => DateFormatter

    type CreatePercentageFormatterFn<TLocale> = (
      locale?: TLocale | undefined,
      options?: PercentageFormatterOptions | undefined,
    ) => PercentageFormatter

    type CreatePriceFormatterFn<TLocale, TCurrency> = (
      locale?: TLocale | undefined,
      currency?: TCurrency | undefined,
      options?: PriceFormatterOptions | undefined,
    ) => PriceFormatter

    type CreateRelativeTimeFormatterFn<TLocale> = (
      locale?: TLocale | undefined,
      options?: RelativeTimeFormatterOptions | undefined,
    ) => RelativeTimeFormatter

    type CreateTimeDifferenceFormatterFn<TLocale> = (
      locale?: TLocale | undefined,
      options?: TimeDifferenceFormatterOptions | undefined,
    ) => TimeDifferenceFormatter
  }
}

export = global

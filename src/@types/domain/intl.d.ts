declare global {
  declare namespace App.Domain.Intl {
    type DateFormatter = (value?: number | Date | undefined) => string

    type PercentageFormatter = (value: number | bigint) => string
    type PriceFormatter = (value: number | bigint) => string
  }
}

export = global

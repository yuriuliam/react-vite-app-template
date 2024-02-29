import { Currency } from '@/domain/intl/enums/Currency'

import { DEFAULT_APP_LOCALE } from '@/infra/intl/config/locale'
import { createPriceFormatter } from '@/infra/intl/use-cases/createPriceFormatter'

const formatToAmericanDollar = createPriceFormatter(
  DEFAULT_APP_LOCALE,
  Currency.AmericanDollar,
)

export { formatToAmericanDollar }

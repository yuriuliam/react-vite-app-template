import {
  RELATIVE_TIME_FORMAT_UNITS,
  TIME_IN_MS_BY_DESC_ORDER,
} from '@/shared/config/time'

const getRelativeTimeByTimestamp = (
  timestamp: App.Domain.Intl.DateLike,
  now: App.Domain.Intl.DateLike | undefined = Date.now(),
) => {
  const timeDiff = timestamp.valueOf() - now.valueOf()

  const timeCalcs = TIME_IN_MS_BY_DESC_ORDER.map(time =>
    Math.floor(Math.abs(timeDiff) / time),
  )

  const idx = timeCalcs.findIndex(time => time > 0)

  const timeAmountByUnit = timeCalcs.at(idx)! * Math.sign(timeDiff)
  const timeUnit = RELATIVE_TIME_FORMAT_UNITS.at(idx)!

  return [timeAmountByUnit, timeUnit] as const
}

export { getRelativeTimeByTimestamp }

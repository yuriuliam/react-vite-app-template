import {
  DAY_IN_MS,
  HOUR_IN_MS,
  MINUTE_IN_MS,
  MONTH_IN_MS,
  SECOND_IN_MS,
  WEEK_IN_MS,
  YEAR_IN_MS,
} from '@/shared/config/time'

type TimeUnit = App.ArrayValue<typeof DISPLAY_TIME_FORMAT_UNITS>

const DISPLAY_TIME_FORMAT_UNITS = Object.freeze([
  'years',
  'months',
  'weeks',
  'days',
  'hours',
  'minutes',
  'seconds',
] satisfies Intl.RelativeTimeFormatUnit[])

const TIME_IN_MS_BY_DESC_ORDER = [
  YEAR_IN_MS,
  MONTH_IN_MS,
  WEEK_IN_MS,
  DAY_IN_MS,
  HOUR_IN_MS,
  MINUTE_IN_MS,
  SECOND_IN_MS,
]

const padTime = (value: number) => value.toString().padStart(2, '0')

const convertTime = (value: number, time: number, per?: number | undefined) =>
  per ? Math.floor((value / time) % per) : Math.floor(value / time)

const suffixedTime = (value: number, suffix: string) =>
  `${padTime(value)}${suffix}`

const createTimeDisplay = (timeUnit: TimeUnit) => {
  const timeUnitIdx = DISPLAY_TIME_FORMAT_UNITS.indexOf(timeUnit)

  if (timeUnitIdx < 0) throw new Error('Invalid given timeUnit')

  const timeBase = TIME_IN_MS_BY_DESC_ORDER.at(timeUnitIdx)!

  return (value: number) => {
    const baseValue = value * timeBase

    const times = [
      convertTime(baseValue, WEEK_IN_MS),
      convertTime(baseValue, DAY_IN_MS, 7),
      convertTime(baseValue, HOUR_IN_MS, 24),
      convertTime(baseValue, MINUTE_IN_MS, 60),
      convertTime(baseValue, SECOND_IN_MS, 60),
      convertTime(baseValue, 1, 1000),
    ]

    const suffixes = ['w', 'd', 'h', 'm', 's', 'ms']

    const baseIdx = times.map(value => !!value).indexOf(true)

    const timeValues = times.slice(baseIdx)
    const timeSuffixes = suffixes.slice(baseIdx)

    if (timeValues.length < 2) {
      const [valueInMs] = timeValues
      const [msSuffix] = timeSuffixes

      return suffixedTime(valueInMs, msSuffix)
    }

    const [majorSuffix, minorSuffix] = timeSuffixes
    const [majorTime, minorTime] = timeValues

    return `${suffixedTime(majorTime, majorSuffix)} ${suffixedTime(minorTime, minorSuffix)}`
  }
}

export { createTimeDisplay }

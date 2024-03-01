import { TimeInMilliseconds } from '@/domain/app/enums/TimeInMilliseconds'
import { type TimeUnit } from '@/domain/text/enums/TimeUnit'

const padTime = (value: number) => value.toString().padStart(2, '0')

const convertTime = (value: number, time: number, per?: number | undefined) =>
  per ? Math.floor((value / time) % per) : Math.floor(value / time)

const createTimeDisplay = (timeUnit: TimeUnit) => {
  return (value: number) => {
    const baseValue = value * TimeInMilliseconds[timeUnit]

    const weeks = convertTime(baseValue, TimeInMilliseconds.Weeks)
    const days = convertTime(baseValue, TimeInMilliseconds.Days, 7)
    const hours = convertTime(baseValue, TimeInMilliseconds.Hours, 24)
    const minutes = convertTime(baseValue, TimeInMilliseconds.Minutes, 60)
    const seconds = convertTime(baseValue, TimeInMilliseconds.Seconds, 60)
    const milliseconds = convertTime(
      baseValue,
      TimeInMilliseconds.Milliseconds,
      1000,
    )

    if (weeks) return `${padTime(weeks)}w ${padTime(days)}d`
    if (days) return `${padTime(days)}d ${padTime(hours)}h`
    if (hours) return `${padTime(hours)}h ${padTime(minutes)}m`
    if (minutes) return `${padTime(minutes)}m ${padTime(seconds)}m`
    if (seconds) return `${padTime(seconds)}s ${padTime(milliseconds)}ms`

    return `${padTime(milliseconds)}ms`
  }
}

export { createTimeDisplay }

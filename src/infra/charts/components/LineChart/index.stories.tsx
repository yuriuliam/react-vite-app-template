import { type Meta, type StoryObj } from '@storybook/react'

import { withDataChartProps } from '@/data/charts/subjects/withDataChartProps'

import { random } from '@/shared/utils/numbers'

import { LineChart } from '.'

type LineChartMeta = Meta<typeof LineChart>
type LineChartStory = StoryObj<typeof LineChart>

const meta = {
  component: LineChart,
  title: 'Infra/Charts/Components/LineChart',
} satisfies LineChartMeta

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const baseArgs = withDataChartProps()
  .colors(['#008FFB', '#00E396'])
  .labels(labels)
  .yAxis({ min: 0, max: 400 })
  .series([
    {
      name: 'Incomes',
      data: labels.map(() => random(10, 390)),
    },
    {
      name: 'Outcomes',
      data: labels.map(() => random(10, 390)),
    },
  ])
  .build()

export const Default = {
  args: {
    ...baseArgs,
  },
} satisfies LineChartStory

export default meta

import { type Meta, type StoryObj } from '@storybook/react'

import { withDataChartProps } from '@/data/charts/subjects/withDataChartProps'

import { random } from '@/shared/utils/numbers'

import { DonutChart } from '.'

type DonutChartMeta = Meta<typeof DonutChart>
type DonutChartStory = StoryObj<typeof DonutChart>

const meta = {
  component: DonutChart,
  title: 'Infra/Charts/Components/DonutChart',
} satisfies DonutChartMeta

const labels = ['Apple', 'Mango', 'Orange', 'Watermelon']

const baseArgs = withDataChartProps()
  .labels(labels)
  .series(labels.map(() => random(10, 200)))
  .build()

export const Default = {
  args: { ...baseArgs },
} satisfies DonutChartStory

export default meta

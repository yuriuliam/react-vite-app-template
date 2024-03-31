import Chart from 'react-apexcharts'

import { withProps } from '@/shared/hocs/withProps'

const createChartComponent: App.Domain.Charts.CreateChartComponentFn = type => {
  const ChartComponent = withProps<App.Domain.Charts.BaseChartProps>(Chart, {
    type,
    options: { chart: { type } },
  })
  ChartComponent.displayName = `ChartComponent(${type})`

  return ChartComponent
}

export { createChartComponent }

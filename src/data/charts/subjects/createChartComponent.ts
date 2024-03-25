import Chart from 'react-apexcharts'

import { withProps } from '@/data/shared/hocs/withProps'

const createChartComponent: App.Domain.Charts.CreateChartComponentFn = type => {
  const ChartComponent = withProps(Chart, { type })
  ChartComponent.displayName = `ChartComponent(${type})`

  return ChartComponent
}

export { createChartComponent }

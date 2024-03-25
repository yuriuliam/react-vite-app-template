import Chart, { type Props as BaseChartProps } from 'react-apexcharts'

import { withProps } from '@/data/shared/hocs/withProps'

type ExpectedPropKeys = 'type' | 'series' | 'width' | 'height' | 'options'
type NamedChartProps = { [P in ExpectedPropKeys]?: BaseChartProps[P] }

type ChartProps = Omit<NamedChartProps, 'type'>
type ChartTypes = Exclude<NamedChartProps['type'], undefined>

const createChartComponent = <T extends ChartTypes>(type: T) => {
  const ChartComponent = withProps(Chart, { type })
  ChartComponent.displayName = `ChartComponent(${type})`

  return ChartComponent as React.FC<ChartProps>
}

export { createChartComponent }

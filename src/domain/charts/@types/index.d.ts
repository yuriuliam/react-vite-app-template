import Chart, { type Props as BaseChartProps } from 'react-apexcharts'

type ExpectedPropKeys = 'type' | 'series' | 'width' | 'height' | 'options'
type NamedChartProps = { [P in ExpectedPropKeys]?: BaseChartProps[P] }

declare global {
  declare namespace App.Domain.Charts {
    type ChartProps = Omit<NamedChartProps, 'type'>
    type ChartTypes = Exclude<NamedChartProps['type'], undefined>

    type CreateChartComponentFn = <T extends ChartTypes>(
      type: T,
    ) => React.FC<ChartProps>

    type BaseChartOptions = Exclude<BaseChartProps['options'], undefined>
  }
}

export = global

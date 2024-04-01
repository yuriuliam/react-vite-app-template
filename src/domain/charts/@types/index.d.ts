import Chart, { type Props as ApexChartProps } from 'react-apexcharts'

type ExpectedPropKeys = 'type' | 'series' | 'width' | 'height' | 'options'

declare global {
  declare namespace App.Domain.Charts {
    type BaseChartProps = { [P in ExpectedPropKeys]?: ApexChartProps[P] }
    type ChartProps = Omit<BaseChartProps, 'type'>
    type ChartTypes = Exclude<BaseChartProps['type'], undefined>

    type CreateChartComponentFn = <T extends ChartTypes>(
      type: T,
    ) => React.FC<ChartProps>

    type ChartOptions = ApexCharts.ApexOptions
  }
}

export = global

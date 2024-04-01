import { ChartDataPropsBuilder } from '@/domain/charts/builders/ChartDataPropsBuilder'

const withDataChartProps = ChartDataPropsBuilder.create.bind(
  ChartDataPropsBuilder,
)

export { withDataChartProps }

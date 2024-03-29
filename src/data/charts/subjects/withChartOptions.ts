import { ChartOptionsBuilder } from '@/domain/charts/entities/ChartOptionsBuilder'

const withChartOptions = ChartOptionsBuilder.create.bind(ChartOptionsBuilder)

export { withChartOptions }

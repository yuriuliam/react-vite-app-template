import Chart from 'react-apexcharts'

import { withProps } from '@/infra/react/hocs/withProps'

const DONUT_CHART_NAME = 'Data.Charts.DonutChart'

const DonutChart = withProps(Chart, { type: 'donut' })
DonutChart.displayName = DONUT_CHART_NAME

export { DonutChart }

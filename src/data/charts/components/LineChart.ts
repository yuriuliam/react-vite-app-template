import Chart from 'react-apexcharts'

import { withProps } from '@/infra/react/hocs/withProps'

const LINE_CHART_NAME = 'Data.Charts.LineChart'

const LineChart = withProps(Chart, { type: 'line' })
LineChart.displayName = LINE_CHART_NAME

export { LineChart }

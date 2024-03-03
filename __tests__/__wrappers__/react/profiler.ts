import { Profiler } from 'react'

import { withProps } from '@/infra/react/hocs/withProps'

type ProfilerProps = React.ComponentProps<typeof Profiler>

const createProfilerWrapper = (props: ProfilerProps) =>
  withProps(Profiler, props)

export { createProfilerWrapper }

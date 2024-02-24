import { Profiler } from 'react'

import { StoreProvider } from '@/infra/cache/contexts/store'
import { withProps } from '@/infra/react/hocs/withProps'

import { AuthProvider } from '@/modules/auth/data/contexts/auth'
import { FeaturesProvider } from '@/modules/features/data/contexts/features'

type ProfilerProps = React.ComponentProps<typeof Profiler>

const authWrapper = withProps(AuthProvider, {})

const featuresWrapper = withProps(FeaturesProvider, {})

const profilerWrapper = (props: ProfilerProps) => withProps(Profiler, props)

const storeWrapper = withProps(StoreProvider, {})

export { authWrapper, featuresWrapper, profilerWrapper, storeWrapper }

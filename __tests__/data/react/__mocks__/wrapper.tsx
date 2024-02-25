/* eslint-disable react-refresh/only-export-components */
import { Profiler } from 'react'

import { StoreProvider } from '@/infra/cache/contexts/store'
import { withProps } from '@/infra/react/hocs/withProps'

import { AuthProvider } from '@/modules/auth/data/contexts/auth'
import { FeaturesProvider } from '@/modules/features/data/contexts/features'

type ProfilerProps = React.ComponentProps<typeof Profiler>
type ProfilerType = React.ComponentType<ProfilerProps>

const AuthWrapper = withProps(AuthProvider, {})

const FeaturesWrapper = withProps(FeaturesProvider, {})

const profilerWrapperWith = withProps.bind<
  null,
  [Component: ProfilerType],
  [propsToBound: ProfilerProps],
  React.ForwardRefExoticComponent<
    Omit<ProfilerProps, keyof ProfilerProps> &
      Partial<ProfilerProps> &
      React.RefAttributes<unknown>
  >
>(null, Profiler)

const StoreWrapper = withProps(StoreProvider, {})

export { AuthWrapper, FeaturesWrapper, profilerWrapperWith, StoreWrapper }

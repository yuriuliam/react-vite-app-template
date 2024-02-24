import { Profiler } from 'react'

import { StoreProvider } from '@/infra/cache/contexts/store'
import { withProps } from '@/infra/react/hocs/withProps'

import { AuthProvider } from '@/modules/auth/data/contexts/auth'
import { FeaturesProvider } from '@/modules/features/data/contexts/features'

const createWrapper = (Component: React.PFC) => {
  const Wrapper: React.PFC = ({ children }) => <Component>{children}</Component>

  return Wrapper
}

const createAuthWrapper = createWrapper.bind(null, AuthProvider)

const createFeaturesWrapper = createWrapper.bind(null, FeaturesProvider)

const createProfilerWrapper = (
  id: string,
  onRender: React.ProfilerOnRenderCallback,
) => createWrapper(withProps(Profiler, { id, onRender }))

const createStoreWrapper = createWrapper.bind(null, StoreProvider)

export {
  createWrapper,
  createAuthWrapper,
  createFeaturesWrapper,
  createProfilerWrapper,
  createStoreWrapper,
}

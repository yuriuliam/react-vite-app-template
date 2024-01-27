import { Profiler } from 'react'

import { StoreProvider } from '@/infra/cache/contexts/store'

import { AuthProvider } from '@/modules/auth/infra/contexts/auth'
import { FeaturesProvider } from '@/modules/features/infra/contexts/features'

const createWrapper = (Component: React.PFC) => {
  const Wrapper: React.PFC = ({ children }) => <Component>{children}</Component>

  return Wrapper
}

const createAuthWrapper = createWrapper.bind(null, AuthProvider)

const createFeaturesWrapper = createWrapper.bind(null, FeaturesProvider)

const createProfilerWrapper = (
  id: string,
  onRender: React.ProfilerOnRenderCallback,
) => createWrapper(props => <Profiler {...props} id={id} onRender={onRender} />)

const createStoreWrapper = createWrapper.bind(null, StoreProvider)

export {
  createWrapper,
  createAuthWrapper,
  createFeaturesWrapper,
  createProfilerWrapper,
  createStoreWrapper,
}

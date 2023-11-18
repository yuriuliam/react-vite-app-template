import { Profiler } from 'react'

import { AuthProvider } from '@/containers/shared/contexts/auth'
import { FeaturesProvider } from '@/containers/shared/contexts/features'
import { StoreProvider } from '@/containers/shared/contexts/store'

const createWrapper = (Component: React.PFC) => {
  const ProviderWrapper: React.PFC = ({ children }) => (
    <Component>{children}</Component>
  )

  return ProviderWrapper
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

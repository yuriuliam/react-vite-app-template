import { Profiler } from 'react'

import { AuthProvider } from '@/contexts/auth'
import { FeaturesProvider } from '@/contexts/features'
import { StoreProvider } from '@/contexts/store'

const createAuthWrapper = () => {
  const AuthWrapper: React.PFC = ({ children }) => (
    <AuthProvider>{children}</AuthProvider>
  )

  return AuthWrapper
}

const createFeaturesWrapper = () => {
  const FeaturesWrapper: React.PFC = ({ children }) => (
    <FeaturesProvider>{children}</FeaturesProvider>
  )

  return FeaturesWrapper
}

const createProfilerWrapper = (id: string, onRender: AppUtils.CallbackFn) => {
  const ProfilerWrapper: React.PFC = ({ children }) => (
    <Profiler id={id} onRender={onRender}>
      {children}
    </Profiler>
  )

  return ProfilerWrapper
}

const createStoreWrapper = () => {
  const StoreWrapper: React.PFC = ({ children }) => (
    <StoreProvider>{children}</StoreProvider>
  )

  return StoreWrapper
}

export {
  createAuthWrapper,
  createFeaturesWrapper,
  createProfilerWrapper,
  createStoreWrapper,
}

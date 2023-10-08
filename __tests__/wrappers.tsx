import { StoreProvider } from '@/contexts/store'

const createStoreWrapper = () => {
  const Wrapper: React.PFC = ({ children }) => (
    <StoreProvider>{children}</StoreProvider>
  )

  return Wrapper
}

export { createStoreWrapper }

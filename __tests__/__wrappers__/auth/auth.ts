import { withProps } from '@/infra/react/hocs/withProps'

import { AuthProvider } from '@/modules/auth/data/contexts/auth'

const AuthWrapper = withProps(AuthProvider, {})

export { AuthWrapper }

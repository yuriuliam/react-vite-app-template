import { AuthProvider } from '@/modules/auth/infra/contexts/auth'

import { withProps } from '@/shared/hocs/withProps'

const AuthWrapper = withProps(AuthProvider, {})

export { AuthWrapper }

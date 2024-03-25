import { withProps } from '@/data/shared/hocs/withProps'

import { AuthProvider } from '@/modules/auth/infra/contexts/auth'

const AuthWrapper = withProps(AuthProvider, {})

export { AuthWrapper }

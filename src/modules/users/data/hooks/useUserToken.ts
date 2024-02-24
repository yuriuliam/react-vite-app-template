import { useAppAtom } from '@/infra/cache/hooks/useAppAtom'

import { userToken } from '../../infra/atoms/userToken'

/** An user token state in hook format. */
const useUserToken = () => useAppAtom(userToken)

export { useUserToken }

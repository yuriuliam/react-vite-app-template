import { useAppAtom } from '@/infra/cache/hooks/useAppAtom'

import { userMe } from '../../infra/atoms/userMe'

/** An user information state in hook format. */
const useUserMe = () => useAppAtom(userMe)

export { useUserMe }

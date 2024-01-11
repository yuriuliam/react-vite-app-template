import { useAtom } from 'jotai'

import { userToken } from '../../data/atoms/userToken'

/** An user token state in hook format. */
const useUserToken = () => useAtom(userToken)

export { useUserToken }

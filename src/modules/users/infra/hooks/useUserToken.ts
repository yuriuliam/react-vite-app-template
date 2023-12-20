import { useAtom } from 'jotai'

import { userToken } from '../../data/atoms/userToken'

const useUserToken = () => useAtom(userToken)

export { useUserToken }

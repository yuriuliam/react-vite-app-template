import { useAtom } from 'jotai'

import { userMe } from '../../data/atoms/userMe'

const useUserMe = () => useAtom(userMe)

export { useUserMe }

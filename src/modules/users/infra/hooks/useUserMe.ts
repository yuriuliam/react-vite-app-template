import { useAtom } from 'jotai'

import { userMe } from '../../data/atoms/userMe'

/** An user information state in hook format. */
const useUserMe = () => useAtom(userMe)

export { useUserMe }

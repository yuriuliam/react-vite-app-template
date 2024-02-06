import { useAtom } from 'jotai'

import { themeIsDark } from '../../data/atoms/themeIsDark'

/** An theme state in hook format. */
const useThemeIsDark = () => useAtom(themeIsDark)

export { useThemeIsDark }

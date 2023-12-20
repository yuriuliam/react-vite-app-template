import { useAtom } from 'jotai'

import { themeIsDark } from '../../data/atoms/themeIsDark'

const useThemeIsDark = () => useAtom(themeIsDark)

export { useThemeIsDark }

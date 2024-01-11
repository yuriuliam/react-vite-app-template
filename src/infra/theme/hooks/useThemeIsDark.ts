import { useAtom } from 'jotai'

import { themeIsDark } from '@/data/theme/atoms/themeIsDark'

/** An theme state in hook format. */
const useThemeIsDark = () => useAtom(themeIsDark)

export { useThemeIsDark }

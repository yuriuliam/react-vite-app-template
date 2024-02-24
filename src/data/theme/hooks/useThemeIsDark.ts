import { useAppAtom } from '@/infra/cache/hooks/useAppAtom'
import { themeIsDark } from '@/infra/theme/atoms/themeIsDark'

/** An theme state in hook format. */
const useThemeIsDark = () => useAppAtom(themeIsDark)

export { useThemeIsDark }

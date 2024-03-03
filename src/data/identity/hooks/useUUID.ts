import { createUUID } from '@/infra/identity/use-cases/createUUID'
import { useConst } from '@/infra/react/hooks/useConst'

const useUUID = () => useConst(createUUID())

export { useUUID }

import { z } from 'zod'

const FileModel = z.instanceof(File)

export { FileModel }

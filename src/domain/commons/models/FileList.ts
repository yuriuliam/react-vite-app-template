import { z } from 'zod'

const FileListModel = z
  .instanceof(FileList)
  .transform(value => Array.from(value))

export { FileListModel }

import { type z } from 'zod'

import { type EmailModel } from '../models/Email'
import { type FileModel } from '../models/File'
import { type FileListModel } from '../models/FileList'
import { type TokenModel } from '../models/Token'

declare global {
  declare namespace App.Domain.Commons {
    type Email = z.infer<typeof EmailModel>
    type File = z.infer<typeof FileModel>
    type FileList = z.infer<typeof FileListModel>
    type Token = z.infer<typeof TokenModel>
  }
}

export = global

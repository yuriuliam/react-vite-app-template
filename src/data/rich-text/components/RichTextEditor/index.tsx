import { createRichTextEditor } from '@/infra/rich-text/use-cases/createRichTextEditor'

import { RichTextEditorComposer } from '../RichTextEditorComposer'

const RichTextEditor = createRichTextEditor(RichTextEditorComposer)

export { RichTextEditor }

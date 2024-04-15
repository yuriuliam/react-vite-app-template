import { createRichTextEditorComposer } from '@/data/rich-text/subjects/createRichTextEditorComposer'

import { RichTextError } from '@/domain/rich-text/errors/RichTextError'

const onError = (error: Error, editor: App.Domain.RichText.RTEditor) => {
  throw new RichTextError(error, editor)
}

const SRTComposer = createRichTextEditorComposer({
  namespace: 'rte',
  onError,
})

export { SRTComposer }

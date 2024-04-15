import { AppError } from '@/domain/shared/errors/AppError'

class RichTextError extends AppError {
  public constructor(
    error: unknown,
    public editor: App.Domain.RichText.RTEditor,
  ) {
    super(`Something went wrong with the Rich Text Editor`, error)
  }
}

export { RichTextError }

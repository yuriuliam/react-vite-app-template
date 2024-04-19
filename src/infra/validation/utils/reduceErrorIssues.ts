import { type ZodIssue } from 'zod'

type ReduceErrorIssuesFn = (
  issues: ZodIssue[],
  validationMessages: App.Domain.Validation.ValidationMessages,
) => App.Domain.Validation.ValidationMessages

const reduceErrorIssues: ReduceErrorIssuesFn = (issues, validationMessages) => {
  const allIssues = [...issues]
  const allValidationMessages = {
    ...validationMessages,
  }

  for (; allIssues.length; ) {
    const issue = allIssues[0]

    if ('unionErrors' in issue) {
      issue.unionErrors.forEach(unionError => {
        unionError.issues.forEach(unionIssue => allIssues.push(unionIssue))
      })
    }

    const path = issue.path.join('.') || '_zod'

    const errorMessages =
      path in allValidationMessages
        ? [...allValidationMessages[path], issue.message]
        : [issue.message]

    Reflect.set(allValidationMessages, path, errorMessages)

    allIssues.shift()
  }

  return allValidationMessages
}

export { reduceErrorIssues }

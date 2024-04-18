import { type TextField } from '@radix-ui/themes'
import { type z } from 'zod'

import type React from 'react'
import type {
  type FieldPath as HookFormFieldPath,
  type RegisterOptions as HookFormRegisterOptions,
  type UseFormProps,
  type UseFormReturn,
  type SubmitHandler,
  type SubmitErrorHandler,
  type FieldValues,
} from 'react-hook-form'

type BaseFormContextData = Omit<UseFormReturn<any, any, any>, 'handleSubmit'>

type FieldsSchema<TFields extends FieldValues> = z.Schema<TFields, any>

type FormOptions<TFields extends FieldValues, TContext> = Omit<
  UseFormProps<TFields, TContext>,
  'resolver'
> & {
  schema: FieldsSchema<TFields>
}

type FormInputRegistryOptions<TFields extends FieldValues> = Omit<
  HookFormRegisterOptions<TFields, HookFormFieldPath<TFields>>,
  'pattern' | 'valueAsNumber' | 'valueAsDate'
>

type HTMLFormProps = React.ComponentProps<'form'>
type HTMLInputProps = React.ComponentProps<typeof TextField.Root>

type ControlledHTMLFormProps = Omit<HTMLFormProps, 'onSubmit'>
type ControlledHTMLInputProps = Omit<
  HTMLInputProps,
  'name' | keyof FormInputRegistryOptions<any>
> & {
  label?: string | undefined
}

type FormRootProps<TFields extends FieldValues> = ControlledHTMLFormProps & {
  onValidSubmit: SubmitHandler<TFields>
  onInvalidSubmit?: SubmitErrorHandler<TFields>
}

type FormInputProps<TFields extends FieldValues> = ControlledHTMLInputProps & {
  name: HookFormFieldPath<TFields>
} & FormInputRegistryOptions<TFields>

declare global {
  declare namespace App.Domain.Forms {
    interface IFormContextData extends BaseFormContextData {}

    type FormRootFC<TFields extends FieldValues = FieldValues> =
      globalThis.React.FC<FormRootProps<TFields>>

    type FormInputFC<TFields extends FieldValues = FieldValues> =
      globalThis.React.FC<FormInputProps<TFields>>

    type FormComposer<TFields extends FieldValues = FieldValues> = {
      Root: FormRootFC<TFields>
      Input: FormInputFC<TFields>
    }

    type UseFormHook<
      TFields extends FieldValues = FieldValues,
      TContext = any,
    > = (consumer: string) => UseFormReturn<TFields, TContext, undefined>

    type CreateFormFn = <TFields extends FieldValues, TContext>(
      formOptions: FormOptions<TFields, TContext>,
      componentName: string,
    ) => [Form: FormComposer<TFields>, useForm: UseFormHook<TFields, TContext>]
  }
}

export = global

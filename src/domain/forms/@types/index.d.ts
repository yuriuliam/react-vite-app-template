import {
  type FieldPath as HookFormFieldPath,
  type RegisterOptions as HookFormRegisterOptions,
  type UseFormProps,
  type UseFormReturn,
  type SubmitHandler,
  type SubmitErrorHandler,
  type FieldValues,
  type DefaultValues,
} from 'react-hook-form'

import { type TextField } from '@radix-ui/themes'
import { type z } from 'zod'

type BaseFormContextData = UseFormReturn<any, any, any>

type FormOptions<TFields extends FieldValues, TContext> = Omit<
  UseFormProps<TFields, TContext>,
  'resolver'
> & {
  schema: z.Schema<TFields>
}

type FormInputRegistryOptions<TFields extends FieldValues> = Omit<
  HookFormRegisterOptions<TFields, HookFormFieldPath<TFields>>,
  'pattern' | 'valueAsNumber' | 'valueAsDate'
>

type HTMLFormProps = React.ComponentProps<'form'>
type HTMLInputProps = TextField.RootProps

type ControlledHTMLFormProps = Omit<
  HTMLFormProps,
  'onSubmit' | 'defaultValue' | keyof UseFormProps<any, any>
>
type ControlledHTMLInputProps = Omit<
  HTMLInputProps,
  'name' | keyof FormInputRegistryOptions<any>
> & {
  label?: string | undefined
}

type FormRootProps<TFields extends FieldValues> = ControlledHTMLFormProps & {
  defaultValues?: DefaultValues<TFields>
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

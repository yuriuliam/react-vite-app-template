import { type TextField } from '@radix-ui/themes'
import { type z } from 'zod'

import type ReactHookForm from 'react-hook-form'

type IteratorPathScoped<T> = T extends `${infer Prefix}.${number}`
  ? Prefix
  : never

type BaseFormContextData = ReactHookForm.UseFormReturn<any, any, any>

type FormOptions<TFields extends ReactHookForm.FieldValues, TContext> = Omit<
  ReactHookForm.UseFormProps<TFields, TContext>,
  'resolver'
> & {
  schema: z.Schema<TFields>
}

type FormInputRegistryOptions<TFields extends ReactHookForm.FieldValues> = Omit<
  ReactHookForm.RegisterOptions<TFields, ReactHookForm.FieldPath<TFields>>,
  'pattern' | 'valueAsNumber' | 'valueAsDate'
>

type HTMLFormProps = React.ComponentProps<'form'>
type HTMLInputProps = React.ComponentProps<'input'>
type RadixTextFieldProps = TextField.RootProps

type ControlledHTMLFormProps = Omit<
  HTMLFormProps,
  'onSubmit' | 'defaultValue' | keyof ReactHookForm.UseFormProps<any, any>
>
type ControlledRadixTextFieldProps = Omit<
  RadixTextFieldProps,
  'name' | keyof FormInputRegistryOptions<any>
> & {
  label?: string | undefined
}

type ControlledHTMLInputProps = Omit<
  HTMLInputProps,
  'name' | keyof FormInputRegistryOptions<any>
> & {
  label?: string | undefined
}

type FormRootProps<TFields extends ReactHookForm.FieldValues> =
  ControlledHTMLFormProps & {
    defaultValues?: ReactHookForm.DefaultValues<TFields>
    onValidSubmit: ReactHookForm.SubmitHandler<TFields>
    onInvalidSubmit?: ReactHookForm.SubmitErrorHandler<TFields>
  }

type FormInputProps<TFields extends ReactHookForm.FieldValues> =
  ControlledHTMLInputProps & {
    name: ReactHookForm.FieldPath<TFields>
  } & FormInputRegistryOptions<TFields>

type FormRadixTextFieldProps<TFields extends ReactHookForm.FieldValues> =
  ControlledRadixTextFieldProps & {
    name: ReactHookForm.FieldPath<TFields>
  } & FormInputRegistryOptions<TFields>

type FormIteratorScopeProps<
  TFields extends ReactHookForm.FieldValues = ReactHookForm.FieldValues,
  Path extends string = ReactHookForm.FieldPath<TFields>,
> = {
  path: IteratorPathScoped<Path>
  min?: number | undefined
  max?: number | undefined
} & {
  children?:
    | App.IndexedPredicateFn<
        `${IteratorPathScoped<Path>}.${number}`,
        React.ReactNode
      >
    | undefined
}

declare global {
  declare namespace App.Domain.Forms {
    interface IFormContextData extends BaseFormContextData {}

    type FormRootFC<
      TFields extends ReactHookForm.FieldValues = ReactHookForm.FieldValues,
    > = globalThis.React.FC<FormRootProps<TFields>>

    type FormTextFieldFC<
      TFields extends ReactHookForm.FieldValues = ReactHookForm.FieldValues,
    > = globalThis.React.FC<FormRadixTextFieldProps<TFields>>

    type FormInputFC<
      TFields extends ReactHookForm.FieldValues = ReactHookForm.FieldValues,
    > = globalThis.React.FC<FormInputProps<TFields>>

    type FormIteratorScopeFC<
      TFields extends ReactHookForm.FieldValues = ReactHookForm.FieldValues,
    > = globalThis.React.FC<FormIteratorScopeProps<TFields>>

    type FormComposer<
      TFields extends ReactHookForm.FieldValues = ReactHookForm.FieldValues,
    > = {
      Root: FormRootFC<TFields>
      TextField: FormTextFieldFC<TFields>
      Input: FormInputFC<TFields>
      IteratorScope: FormIteratorScopeFC<TFields>
    }

    type UseFormHook<
      TFields extends ReactHookForm.FieldValues = ReactHookForm.FieldValues,
    > = (
      consumer: string,
    ) => ReactHookForm.UseFormReturn<TFields, any, undefined>

    type CreateFormFn = <TFields extends ReactHookForm.FieldValues>(
      formOptions: FormOptions<TFields, any>,
      componentName: string,
    ) => [Form: FormComposer<TFields>, useForm: UseFormHook<TFields, any>]
  }
}

export = global

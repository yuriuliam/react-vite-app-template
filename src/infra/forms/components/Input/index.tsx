import React from 'react'

import { TextField } from '@radix-ui/themes'

import { useComposedRef } from '@/shared/hooks/useComposedRef'

import { useFormField } from '../../hooks/useFormField'

type TextFieldInputProps = React.ComponentProps<typeof TextField.Root> & {
  name: string
  label?: string | undefined
  persistent?: boolean | undefined
}

const INPUT_NAME = 'Data.Forms.Input'

const Input = React.forwardRef<HTMLInputElement, TextFieldInputProps>(
  ({ name, label, ...rest }, ref) => {
    const internalRef = React.useRef<HTMLInputElement>(null)
    const inputRef = useComposedRef(internalRef, ref)

    const { defaultValue, fieldName, registerField } = useFormField(
      INPUT_NAME,
      name,
    )

    React.useEffect(() => {
      registerField({
        name: fieldName,
        ref: internalRef,
        getValue: ref => ref.current.value,
        setValue: (ref, value) => void (ref.current.value = value),
        clearValue: ref => void (ref.current.value = ''),
      })
    }, [fieldName, registerField])

    return (
      <TextField.Root
        {...rest}
        mt="2"
        id={fieldName}
        name={name}
        defaultValue={defaultValue}
        ref={inputRef}
      >
        {label && (
          <TextField.Slot>
            <label htmlFor={fieldName}>{label}</label>
          </TextField.Slot>
        )}
      </TextField.Root>
    )
  },
)
Input.displayName = INPUT_NAME

export { Input }

import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends ComponentProps<'div'> {
  error?: boolean
}
export function InputRoot({ error = false, ...props }: InputProps) {
  return (
    <div
      data-error={error}
      className="group flex items-center gap-2 bg-gray-800 h-12  border border-gray-600 rounded-xl px-4 focus-within:border-gray-100 data-[error=true]:border-danger"
      {...props}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {}
export function InputIcon({ className, ...props }: InputIconProps) {
  return (
    <span
      className={twMerge(
        'text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger',
        className
      )}
      {...props}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {}
export function InputField(props: InputFieldProps) {
  return (
    <input
      className="flex-auto outline-none placeholder:text-gray-400 "
      placeholder="E-mail"
      {...props}
    />
  )
}

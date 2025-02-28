import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface StatusProps extends ComponentProps<'div'> {
  icon: ReactNode
  numero: number
  information: string
}
export function Status({
  icon,
  className,
  numero,
  information,
  ...props
}: StatusProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'w-full bg-gray-700 relative text-center border border-gray-600 rounded-xl',
        className
      )}
    >
      <span className="absolute top-3 left-3 size-5 text-purple">{icon}</span>
      <div className="pt-7 pb-5 space-y-2">
        <h3 className="font-heading font-semibold text-2xl text-gray-200 leading-none">
          {numero}
        </h3>
        <p className="text-gray-300 text-sm leading-none">{information}</p>
      </div>
    </div>
  )
}

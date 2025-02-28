import Image from 'next/image'
import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import gold from '../assets/Medal_1.svg'

interface RankingProps extends ComponentProps<'div'> {
  nome?: string
  valor?: number
  icon?: ReactNode
}
export function RankingItem({ className, ...porps }: RankingProps) {
  return (
    <div
      className={twMerge(
        'relative rounded-xl bg-gray-700 border border-gray-700 flex flex-col justify-center p-6 gap-3',
        className
      )}
      {...porps}
    >
      <h3 className="text-sm text-gray-300 leading-none ">
        <span>1º | </span>
        Edson Gaspar
      </h3>
      <h2 className="text-2xl text-gray-200 font-heading leading-none font-semibold">
        1030
      </h2>
      <Image
        src={gold}
        alt="Medalha de Ouro"
        className="absolute top-0 right-8"
      />
    </div>
  )
}

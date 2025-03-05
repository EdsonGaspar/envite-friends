'use client'
import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'

export function SubscriptionForm() {
  const { register, handleSubmit } = useForm()

  function onSubscribe(data: any) {
    // const values = Object.fromEntries(data.entries())
    console.log(data)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="flex flex-col bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full maxw-w-[440px] "
    >
      <h2 className="font-heading text-xl font-medium text-gray-200">
        Inscrição
      </h2>
      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField
            type="text"
            placeholder="Nome completo"
            {...register('name')}
          />
        </InputRoot>
        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField
            type="email"
            placeholder="Insira seu e-mail"
            {...register('email')}
          />
        </InputRoot>
      </div>
      <IconButton type="submit">
        Confirmar <ArrowRight />
      </IconButton>
    </form>
  )
}

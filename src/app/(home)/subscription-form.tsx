'use client'
import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { subscribeToEvent } from '@/http/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptioSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um email valido'),
})

type SubscriptioSchema = z.infer<typeof subscriptioSchema>

export function SubscriptionForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptioSchema>({
    resolver: zodResolver(subscriptioSchema),
  })

  async function onSubscribe({ name, email }: SubscriptioSchema) {
    const { subscriberId } = await subscribeToEvent({ name, email })

    router.push(`/convite/${subscriberId}`)
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
        <div className="space-y-2">
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
          {errors.name && (
            <p className="text-danger text-xs font-semibold px-3">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
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
          {errors.email && (
            <p className="text-danger text-xs font-semibold px-3">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <IconButton type="submit">
        Confirmar <ArrowRight />
      </IconButton>
    </form>
  )
}

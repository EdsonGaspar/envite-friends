import { InputField, InputIcon, InputRoot } from '@/components/input'
import { RankingItem } from '@/components/rankingItem'
import { Status } from '@/components/status'
import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from 'lucide-react'
import Image from 'next/image'
import logo from '../../assets/Logo.svg'
import { EnviarLink } from './invite-link'

export default function ConvitePage() {
  const inviteLink = 'devstage.com/codecraft-summit-2025/1281'
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-16 px-4 py-8 lg:px-0 lg:py-0 md:flex-row">
      <div className="flex flex-col  w-full max-w-[550px] gap-10">
        <Image src={logo} alt="logo" width={108.5} height={30} />

        <div className="space-y-2">
          <h2 className="font-heading text-4xl font-semibold text-gray-100 leading-none">
            Inscrição Confirmada
          </h2>
          <p className="text-sm text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-gray-200 leading-none">
              Indique e Ganhe
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <EnviarLink enviteLink={inviteLink} />

          <div className="grid md:grid-cols-3 gap-3 ">
            <Status
              icon={<MousePointerClick />}
              numero={942}
              information="Acessos ao link"
            />
            <Status
              icon={<BadgeCheck />}
              numero={835}
              information="Inscrições feitas"
            />
            <Status
              icon={<Medal />}
              information="Posição no ranking"
              numero={3}
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[440px] space-y-5">
        <h2 className="text-gray-200 text-xl font-heading leading-none font-semibold">
          Ranking de inscrições
        </h2>
        <div className="space-y-4 ">
          <RankingItem />
          <RankingItem />
          <RankingItem />
        </div>
      </div>
    </div>
  )
}

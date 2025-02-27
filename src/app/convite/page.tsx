import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'
import Image from 'next/image'
import logo from '../../assets/Logo.svg'

export default function ConvitePage() {
  return (
    <div className="h-dvh flex flex-col items-center justify-between gap-16 px-4 py-8 lg:px-0 lg:py-0">
      <div className="space-y-10 ">
        <Image
          src={logo}
          alt="logo"
          width={108.5}
          height={30}
          className="mx-auto"
        />

        <div className="space-y-7">
          <div className="space-y-2">
            <h2 className="font-heading text-2xl font-semibold text-gray-100">
              Inscrição Confirmada
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Para entrar no evento, acesse o link enviado para seu e-mail.
            </p>
          </div>
          <div className="space-y-5">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-gray-100">
                Indique e Ganhe
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Convide mais pessoas para o evento e concorra a prêmios
                exclusivos! É só compartilhar o link abaixo e acompanhar as
                inscrições:
              </p>
            </div>
            <div>
              <InputRoot>
                <InputIcon>
                  <Link />
                </InputIcon>
                <InputField
                  type="text"
                  placeholder="Link do convite"
                  value={'devstage.com/codecraft-summit-2025/1289'}
                />
                <InputIcon className="bg-gray-500 p-1.5 rounded-md -mr-2">
                  <Copy />
                </InputIcon>
              </InputRoot>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

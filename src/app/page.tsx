import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { ArrowRight, Mail, Radio, User } from 'lucide-react'
import Image from 'next/image'
import logo from '../assets/Logo.svg'
export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto ">
      <div className="min-h-dvh flex flex-col md:justify-center gap-16">
        <div className="flex flex-col gap-8 items-center md:items-start">
          <Image
            src={logo}
            alt="Envite Friends logo"
            width={108.5}
            height={30}
          />
          <h1 className="text-4xl text-center font-heading font-medium flex flex-col md:text-7xl md:text-left">
            <span className="text-blue">CodeCraft</span>
            Summit 2025
          </h1>
        </div>

        <div className="flex flex-col gap-5  items-stretch md:flex-row">
          <div className="flex-auto bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 ">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-xl font-semibold text-gray-200">
                Sobre o evento
              </h2>
              <span className="text-purple uppercase font-semibold flex items-center gap-2 text-xs">
                <Radio className="size-5" /> AO VIVO{' '}
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed md:text-base">
              Um evento feito por e para pessoas desenvolvedoras apaixonadas por
              criar soluções inovadoras e compartilhar conhecimento. Vamos
              mergulhar nas tendências mais recentes em desenvolvimento de
              software, arquitetura de sistemas e tecnologias emergentes, com
              palestras, workshops e hackathons.
              <br />
              <br />
              Dias 15 a 17 de março | Das 18h às 21h
            </p>
          </div>
          <form className="flex flex-col bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full maxw-w-[440px] ">
            <h2 className="font-heading text-xl font-medium text-gray-200">
              Inscrição
            </h2>
            <div className="space-y-3">
              <InputRoot>
                <InputIcon>
                  <User />
                </InputIcon>
                <InputField type="text" placeholder="Nome completo" />
              </InputRoot>
              <InputRoot>
                <InputIcon>
                  <Mail />
                </InputIcon>
                <InputField type="email" placeholder="Insira seu e-mail" />
              </InputRoot>
            </div>
            <IconButton type="submit">
              Confirmar <ArrowRight />
            </IconButton>
          </form>
        </div>
      </div>
    </main>
  )
}

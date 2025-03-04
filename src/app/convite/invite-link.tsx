'use client'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'
interface EnviarLinkProps {
  enviteLink: string
}
export function EnviarLink(props: EnviarLinkProps) {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField
        readOnly
        type="text"
        placeholder="Link do convite"
        defaultValue={props.enviteLink}
      />
      <InputIcon
        className="bg-gray-500 p-1.5 rounded-md -mr-2"
        onClick={() => {
          console.log('Link copiado')
        }}
      >
        <Copy className="size-5 cursor-pointer" />
      </InputIcon>
    </InputRoot>
  )
}

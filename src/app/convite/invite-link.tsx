'use client'
import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'
interface EnviarLinkProps {
  enviteLink: string
}
export function EnviarLink({ enviteLink }: EnviarLinkProps) {
  async function handleCopy() {
    await navigator.clipboard.writeText(enviteLink)
  }
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField
        readOnly
        type="text"
        placeholder="Link do convite"
        defaultValue={enviteLink}
      />
      <IconButton
        className="bg-gray-500 p-1.5 rounded-md -mr-2"
        onClick={handleCopy}
      >
        <Copy className="size-5 cursor-pointer" />
      </IconButton>
    </InputRoot>
  )
}

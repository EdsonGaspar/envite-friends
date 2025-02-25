import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
  text?: string;
}
export function Button({ ...props }: ButtonProps) {
  return (
    <button className="border p-2 bg-amber-300 text-white">
      {props.text || "Enviar"}
    </button>
  );
}

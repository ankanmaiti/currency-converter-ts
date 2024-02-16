import { ComponentPropsWithoutRef } from "react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { titleCase } from "@/lib/utils"

interface InputWithLabelProps extends ComponentPropsWithoutRef<'input'> {
  label: string,
  className?: string,
}

export function InputWithLabel({ label, id, className, ...props}: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        className={className}
        placeholder={titleCase(label)}
        {...props}
      />
    </div>
  )
}


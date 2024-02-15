import { ComponentPropsWithoutRef } from "react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

interface InputWithLabelProps extends ComponentPropsWithoutRef<'input'> {
  label: string,
  className?: string,
}

function titleCase(str: string) :string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export function InputWithLabel({ label, id, type, className, ...props}: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={titleCase(label)}>{label}</Label>
      <Input
        type={type}
        id={id}
        className={className}
        placeholder={titleCase(label)}
        {...props}
      />
    </div>
  )
}


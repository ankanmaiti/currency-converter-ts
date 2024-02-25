import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CurrencySelectorProps {
  options: string[];
  className?: string;
  value?: string;
  onChange: (value: string) => void;
}

export default function CurrencySelector({
  value,
  onChange,
  options,
  className,
}: CurrencySelectorProps) {
  return (
    <>
      <Select
        value={value}
        onValueChange={onChange}
      >
        <SelectTrigger className={className}>
          <SelectValue placeholder="Select Currency" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>Currencies</SelectLabel>
            {options?.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

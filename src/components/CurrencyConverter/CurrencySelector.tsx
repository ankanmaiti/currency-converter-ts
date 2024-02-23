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
}

export default function CurrencySelector({ options, className }: CurrencySelectorProps) {
  return (
    <>
      <Select>
        <SelectTrigger className={className}>
          <SelectValue placeholder="Select Currency" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>Currencies</SelectLabel>
            {options.map((option) => (
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

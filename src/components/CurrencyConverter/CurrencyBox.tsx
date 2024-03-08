import { Input } from "@/components/ui/input";
import CurrencySelector from "./CurrencySelector";

interface CurrencyBoxProps {
  options: string[];
  value: string,
  onChange: (value:string) => void,
  disbled?: boolean
}

export default function CurrencyBox({ options, value, onChange, disbled = false }: CurrencyBoxProps) {
  return (
    <div className="flex">
      <CurrencySelector
        value={value}
        onChange={onChange}
        options={options}
        className="rounded-e-none focus:ring-0"
      />
      <Input type="number" className="rounded-s-none focus-visible:ring-0" disabled={disbled} />
    </div>
  );
}

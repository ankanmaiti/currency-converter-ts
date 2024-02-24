import { Input } from "@/components/ui/input";
import CurrencySelector from "./CurrencySelector";
import { useEffect, useState } from "react";
import useCurrencyList from "@/contexts/currencyListProvider";

interface CurrencyBoxProps {
  options: string[];
  defaultValue: string;
  index: number;
}

export default function CurrencyBox({ options, defaultValue, index }: CurrencyBoxProps) {
  const [value, setValue] = useState(defaultValue)
  const {reArrangeList} = useCurrencyList()

  useEffect(() => {
    reArrangeList(index, value)
  }, [value])

  return (
    <div className="flex">
      <CurrencySelector
        value={value}
        onChange={v => setValue(v)}
        options={options}
        defaultValue={defaultValue}
        className="rounded-e-none focus:ring-0"
      />
      <Input type="number" className="rounded-s-none focus-visible:ring-0" />
    </div>
  );
}

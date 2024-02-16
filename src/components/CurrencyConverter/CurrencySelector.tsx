import useLocalStorage from "@/hooks/useLocalStorage";
import { WidthIcon } from "@radix-ui/react-icons";

import Combobox from "@/components/elements/Combobox";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

type Currency = string;

async function fetchCurrencyNames<T>(): Promise<T> {
  const URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";
  const res = await fetch(URL);
  const data = await res.json();
  return data && Object.keys(data);
}

export default function CurrencySelector() {
  const [currencies, setCurrencies] = useLocalStorage<Currency[]>(
    "curencies",
    [],
  );

  useEffect(() => {
    fetchCurrencyNames<Currency[]>().then(setCurrencies);
  }, []);

  return (
    <div className="flex gap-1">
      <Combobox
        options={currencies}
        label="From Currency"
        className="min-w-40"
      />
      <Button variant="ghost" className="w-fit justify-centre">
        <WidthIcon />
      </Button>
      <Combobox options={currencies} label="To Currency" className="min-w-40" />
    </div>
  );
}

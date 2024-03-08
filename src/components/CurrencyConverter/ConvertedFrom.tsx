import useCurrencyStore from "@/store/currencyStore";
import CurrencyBox from "./CurrencyBox";

export default function ConvertedFrom() {
  const currencies = useCurrencyStore((state) => state.currencies);
  const swapCurrencies = useCurrencyStore((state) => state.swap);

  if (currencies?.length < 1) return;
  const fromCurrency = currencies[0];

  return (
    <>
      <h5>Converted From</h5>
      <CurrencyBox
        options={currencies}
        value={fromCurrency}
        onChange={(newValue: string) => swapCurrencies(fromCurrency, newValue)}
      />
    </>
  );
}

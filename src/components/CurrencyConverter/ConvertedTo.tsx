import useCurrencyStore from "@/store/currencyStore"
import CurrencyBox from "./CurrencyBox"


export default function ConvertedTo() {
  const currencies = useCurrencyStore(state => state.currencies)
  const swapCurrencies = useCurrencyStore((state) => state.swap);

  if (currencies?.length < 2) return

  return (
  <>
      <h5>Converted To</h5>
      { currencies?.slice(1).map(( currency) => <CurrencyBox
        key={currency}
        options={currencies}
        value={currency}
        onChange={(newValue: string) => swapCurrencies(currency, newValue)}
        disbled
      />)}
  </>
  )
}


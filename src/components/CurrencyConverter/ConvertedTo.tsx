import useCurrencyList from "@/contexts/currencyListProvider"
import CurrencyBox from "./CurrencyBox"


export default function ConvertedTo() {
  const { list: currencyList } = useCurrencyList()

  return (
  <>
      <h5>Converted To</h5>
      { currencyList?.slice(1).map(( currency, index ) => <CurrencyBox
        key={currency}
        index={index + 1}
        options={currencyList}
        defaultValue={currency}
      />)}
  </>
  )
}


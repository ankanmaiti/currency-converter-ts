import useCurrencyList from "@/contexts/currencyListProvider"
import CurrencyBox from "./CurrencyBox"


export default function ConvertedTo() {
  const { list: currencyList, reArrangeList } = useCurrencyList()

  return (
  <>
      <h5>Converted To</h5>
      { currencyList?.slice(1).map(( currency, index ) => <CurrencyBox
        key={currency}
        options={currencyList}
        value={currency}
        onChange={(newSelection) => {reArrangeList(index+1, newSelection)}}
      />)}
  </>
  )
}


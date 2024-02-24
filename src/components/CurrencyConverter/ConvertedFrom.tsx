import useCurrencyList from "@/contexts/currencyListProvider"
import CurrencyBox from "./CurrencyBox"

export default function ConvertedFrom() {
  const { list: currencyList } = useCurrencyList()

  return (
  <>
      <h5>Converted From</h5>
      <CurrencyBox options={currencyList} index={0} defaultValue={currencyList?.at(0) || ''}/>
  </>
  )
}

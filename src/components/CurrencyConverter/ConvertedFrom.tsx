import useCurrencyList from "@/contexts/currencyListProvider"
import CurrencyBox from "./CurrencyBox"

export default function ConvertedFrom() {
  const { list: currencyList, reArrangeList } = useCurrencyList()

  return (
  <>
      <h5>Converted From</h5>
      <CurrencyBox
        options={currencyList}
        value={currencyList?.at(0) || ''}
        onChange={(newSelection)=>{reArrangeList(0, newSelection)}}
      />
  </>
  )
}

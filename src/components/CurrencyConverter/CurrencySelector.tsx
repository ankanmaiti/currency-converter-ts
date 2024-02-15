import Combobox from "../elements/Combobox";
import { Button } from "../ui/button";
import { WidthIcon } from '@radix-ui/react-icons'

const options = [
  {
    value: "inr",
    label: "INR",
  },
  {
    value: "usd",
    label: "USD",
  },
  {
    value: "eur",
    label: "EUR",
  },
  {
    value: "yen",
    label: "YEN",
  },
  {
    value: "taka",
    label: "TAKA",
  },
]

export default function CurrencySelector() {
  return (
    <div className="flex gap-1">
      <Combobox options={options} label="From Currency" />
      <Button variant="ghost" className="w-fit justify-centre">
        <WidthIcon/>
      </Button>
      <Combobox options={options} label="To Currency" />
    </div>
  )
}

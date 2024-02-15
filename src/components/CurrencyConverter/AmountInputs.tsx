import { InputWithLabel } from "../elements/InputWithLable";

export default function AmountInputs() {
  return (
    <div className="w-full flex flex-col gap-4">
      <InputWithLabel type="number" label="Amount" id="amount" />
      <InputWithLabel
        type="number"
        label="Converted"
        id="converted"
        className="disabled:opacity-80"
        disabled
      />
    </div>
  )
}

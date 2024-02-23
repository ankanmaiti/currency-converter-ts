import { Input } from "@/components/ui/input";
import CurrencySelector from "./CurrencySelector";

export default function CurrencyBox() {

  return (
    <div className="flex">
        <CurrencySelector
          options={['ankan']}
          className="rounded-e-none focus:ring-0"
        />
        <Input
          type="number"
          className="rounded-s-none focus-visible:ring-0"
        />
    </div>
  );
}

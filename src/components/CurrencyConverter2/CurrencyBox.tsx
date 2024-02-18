import { Input } from "@/components/ui/input";
import useBrowserStorage from "@/hooks/useBrowserStorage";
import CurrencySelector from "./CurrencySelector";

export default function CurrencyBox() {
  const [converges] = useBrowserStorage("sessionStorage", "basicConverges", {});

  return (
    <div className="flex">
        <CurrencySelector
          options={Object.keys(converges)}
          className="rounded-e-none focus:ring-0"
        />
        <Input
          type="number"
          className="rounded-s-none focus-visible:ring-0"
        />
    </div>
  );
}

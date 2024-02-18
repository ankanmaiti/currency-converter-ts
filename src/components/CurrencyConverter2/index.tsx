import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CurrencyBox from "./CurrencyBox";
import { Button } from "../ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import useBrowserStorage from "@/hooks/useBrowserStorage";
import { useEffect } from "react";
import currencyapi from "@/services/currencyapi";


interface CurrencyConverterProps{
  className?: string
}

export default function CurrencyConverter({ className }: CurrencyConverterProps) {
  const [converges, setConverges] = useBrowserStorage("sessionStorage", "basicConverges");

  useEffect(() => {
    converges ?? currencyapi
      .getLatestExchangeRate()
      .then((data) => setConverges(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <Card className={className}>
        <CardHeader>
          <CardTitle>Currency Converter</CardTitle>
          <CardDescription>convert currency in real time</CardDescription>
        </CardHeader>

        <CardContent className="grid gap-6">
          <section className="grid gap-2">
            <h4>Converted From</h4>
            <CurrencyBox />
          </section>

          <section className="grid gap-2">
            <div className="flex justify-between items-center">
              <h5>Converted to</h5>
              <Button variant="ghost">
                <PlusIcon />
              </Button>
            </div>
            <CurrencyBox />
            <CurrencyBox />
            <CurrencyBox />
            <CurrencyBox />
          </section>
        </CardContent>
      </Card>
    </>
  );
}

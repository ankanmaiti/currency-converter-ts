import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import CurrencyBox from "./CurrencyBox";


interface CurrencyConverterProps {
  className?: string;
}

export default function CurrencyConverter({
  className,
}: CurrencyConverterProps) {
  return (
    <>
      <Card className={className}>
        <CardHeader className="items-center">
            <CardTitle className="text-2xl">Currency Converter</CardTitle>
            <CardDescription>convert currency in real time</CardDescription>
        </CardHeader>

        <CardContent className="grid gap-6">
          <section className="grid gap-2">
            <h5>Converted From</h5>
            <CurrencyBox />
          </section>

          <section className="grid gap-2">
            <h5>Converted To</h5>
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

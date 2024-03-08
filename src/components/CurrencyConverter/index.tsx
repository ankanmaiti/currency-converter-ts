import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ConvertedFrom from "./ConvertedFrom";
import ConvertedTo from "./ConvertedTo";
import InputTags from "@/components/InputTags";

interface CurrencyConverterProps {
  className?: string;
}

export default function CurrencyConverter({ className }: CurrencyConverterProps) {
  return (
    <>
      <Card className={className}>
        <CardHeader className="items-center">
          <CardTitle className="text-2xl">Currency Converter</CardTitle>
          <CardDescription>convert currency in real time</CardDescription>
        </CardHeader>

        <CardContent className="grid gap-6">
          <section>
            <InputTags />
          </section>

          <section className="grid gap-2">
            <ConvertedFrom />
          </section>

          <section className="grid gap-2">
            <ConvertedTo />
          </section>
        </CardContent>
      </Card>
    </>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import AmountInputs from "./AmountInputs";
import CurrencySelector from "./CurrencySelector";

export default function CurrencyConverter() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Currency Converter</CardTitle>
          <CardDescription>convert currency in real time</CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
          <CurrencySelector/>
          <AmountInputs />
        </CardContent>

        <CardFooter>
        </CardFooter>
      </Card>
    </>
  );
}

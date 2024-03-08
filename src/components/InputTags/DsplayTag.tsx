import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useCurrencyStore from "@/store/currencyStore";
import { Cross1Icon } from "@radix-ui/react-icons";

interface InputTagProps {
  tag: string;
  className?: string;
}

export default function DisplayTag({ tag, className }: InputTagProps) {
  const remove = useCurrencyStore((state) => state.remove);

  return (
    <div
      className={cn(
        "bg-secondary flex whitespace-nowrap gap-1 justify-between items-center rounded  h-fit px-2 py-1",
        className,
      )}
    >
      <span className="text-sm uppercase ">{tag}</span>
      <Button
        onClick={() => remove(tag)}
        role="button"
        variant="ghost"
        className="h-fit p-0 ps-1"
      >
        <Cross1Icon width={12} />
      </Button>
    </div>
  );
}

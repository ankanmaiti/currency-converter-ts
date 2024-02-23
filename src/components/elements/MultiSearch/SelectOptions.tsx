import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SelectOptionsProps<T> {
  onSelect: (option: T) => void;
  options: T[];
  match?: string;
  max?: number;
  className?: string,
}

function SearchList<T>(list: T[], match: string, maxLength = 10): T[] | null {
  return list
    .filter((item) => String(item).toLowerCase().includes(match.toLowerCase()))
    .slice(0, maxLength);
}

export default function SelectOptions<T>({
  onSelect,
  options,
  className,
  match = "",
  max = 10,
}: SelectOptionsProps<T>) {
  const searchList = SearchList(options, match, max);
  return (
    <>
      <div className={cn('rounded overflow-x-hidden overflow-y-auto mt-1', className)}>
        {!!searchList?.length || (
          <Button variant='outline' className="w-full text-sm p-6 text-center">Not Found ...</Button>
        )}

        {searchList?.map((option) => (
          <Button
            key={String(option)}
            variant="outline"
            role="button"
            onClick={() => onSelect(option)}
            className="w-full justify-start rounded-none"
          >
            {option as ReactNode}
          </Button>
        ))}
      </div>
    </>
  );
}

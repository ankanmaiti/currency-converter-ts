import { CaretSortIcon } from "@radix-ui/react-icons";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import SearchInOptions from "./SearchInOptions";

type Option = string;

type ComboboxProps = {
  options: Option[];
  label: string;
  className?: string;
};

export default function Combobox({ options, label, className }: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  function handleSelect(option: Option) {
    setValue(option)
    setOpen(false)
  }


  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between", className)}
        >
          {value ? value : label}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        <SearchInOptions
          options={options}
          onSelect={handleSelect}
        />
      </PopoverContent>
    </Popover>
  );
}

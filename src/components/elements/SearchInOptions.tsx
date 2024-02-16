import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Option = string;

interface SearchInOptionsProps {
  onSelect: (option: Option) => void;
  options: Option[];
}

export default function SearchInOptions({
  onSelect,
  options,
}: SearchInOptionsProps) {
  const [input, setInput] = useState("");
  const optionsList = options
    .filter((option) => option.toLowerCase().includes(input.toLowerCase()))
    .slice(0, 10);

  return (
    <>
      <Input
        type="text"
        placeholder="Search Here"
        spellCheck={false}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-l-0 border-t-0 border-r-0 rounded-none focus-visible:ring-0"
      />
      <ul>
        {!!optionsList.length || (
          <li className="text-sm p-6 text-center">Not Found ...</li>
        )}

        {optionsList.map((option) => (
          <li key={option}>
            <Button
              variant="ghost"
              role="button"
              onClick={() => onSelect(option)}
              className="w-full justify-start rounded-none"
            >
              {option}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}

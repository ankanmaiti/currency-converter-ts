import { Input } from "@/components/ui/input";
import useInputTags from "@/contexts/inputTagsProvider";

import { useState } from "react";
import type { ChangeEvent, KeyboardEvent, ReactNode } from "react";
import SelectOptions from "./SelectOptions";

interface SearchBoxProps {
  children?: ReactNode;
}

export default function SearchBox({ children }: SearchBoxProps) {
  const [value, setValue] = useState("");
  const { addTag, deleteLastTag } = useInputTags();

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    let input = e.target.value;

    if (input.endsWith(",")) {
      addTag(value?.trim());
      input = "";
    }
    setValue(input);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Backspace") {
      // stop delete last char
      e.preventDefault();

      const lastValue = deleteLastTag();
      setValue(lastValue ?? "");
    }

    else if (e.key == 'Enter' ) {
    }
  }

  return (
    <>
      <Input
        placeholder="Search"
        className="text-lg"
        value={value}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      {children}
      <SelectOptions
        options={["inr", "usd", "eur", "yen", "taka", "ind", "inn"]}
        onSelect={(option) => addTag(String(option))}
        match={value}
      />
    </>
  );
}

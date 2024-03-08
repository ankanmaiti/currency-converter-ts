import { Input } from "@/components/ui/input";
import type { KeyboardEvent } from "react";

import useCurrencyStore from "@/store/currencyStore";
import type { ChangeEvent } from "react";
import { useState } from "react";

export default function InputTagField() {
  const [value, setValue] = useState("");
  const addTag = useCurrencyStore((state) => state.add);

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    let input = e.target.value;

    if (input.endsWith(",")) {
      addTag(value?.trim());
      input = "";
    }
    setValue(input);
  }

  // use Enter to add tag
  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (value && e.key == "Enter") {
      addTag(value);
      setValue("");
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
    </>
  );
}

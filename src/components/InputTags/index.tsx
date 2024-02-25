import { Input } from "@/components/ui/input";
import useInputTags from "@/contexts/inputTagsProvider";

import type { ChangeEvent, KeyboardEvent } from "react";
import { useState } from "react";
import DisplayTag from "./DsplayTag";

export default function InputTags() {
  const [value, setValue] = useState("");

  const { tags, addTag, deleteLastTag } = useInputTags();

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    let input = e.target.value;

    if (input.endsWith(",")) {
      addTag(value?.trim());
      input = "";
    }
    setValue(input);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Backspace" && !value) {
      // stop delete last char
      e.preventDefault();

      const lastValue = deleteLastTag();
      setValue(lastValue ?? "");
    } else if (e.key == "Enter") {
      addTag(value?.trim());
      setValue("");
    }
  }

  return (
    <div className="grid gap-2 p-2 bg-secondary/30 rounded">
      <Input
        placeholder="Search"
        className="text-lg"
        value={value}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <div className="flex gap-1 w-full overflow-x-auto scrollbar-hidden ">
        {tags.map((tag) => <DisplayTag key={tag} tag={tag} />)}
      </div>
    </div>
  );
}

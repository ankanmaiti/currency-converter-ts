import DisplayTags from "./DisplayTags";
import InputTagField from "./InputTagField";

export default function InputTags() {
  return (
    <div className="grid gap-2 p-2 bg-secondary/30 rounded">
      <InputTagField />
      <DisplayTags />
    </div>
  );
}

import useCurrencyStore from "@/store/currencyStore";
import DisplayTag from "./DsplayTag";

export default function DisplayTags() {
  const tags = useCurrencyStore((state) => state.currencies);
  return (
    <div className="flex gap-1 w-full overflow-x-auto scrollbar-hidden ">
      {tags.map((tag) => (
        <DisplayTag key={tag} tag={tag} />
      ))}
    </div>
  );
}

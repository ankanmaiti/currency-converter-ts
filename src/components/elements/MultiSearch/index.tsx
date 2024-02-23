import DisplayInputTags from "./DisplayInputTags";
import SearchBox from "./SearchBox";

const options = ["inr", "usd", "eur", "yen", "taka", "ind", "inn"]

export default function MultiSearch() {
  return (
    <>
      <SearchBox options={options}>
        <DisplayInputTags className="my-1" />
      </SearchBox>
    </>
  );
}

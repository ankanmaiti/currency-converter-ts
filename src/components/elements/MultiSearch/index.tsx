import DisplayInputTags from "./DisplayInputTags";
import SearchBox from "./SearchBox";

export default function MultiSearch() {
  return (
    <>
      <SearchBox>
        <DisplayInputTags className="my-1" />
      </SearchBox>
    </>
  );
}

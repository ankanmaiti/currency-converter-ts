import { Button } from "@/components/ui/button";
import useInputTags from "@/contexts/inputTagsProvider";
import { Cross1Icon } from "@radix-ui/react-icons";

interface InputTagProps {
  tag: string;
}

export default function DisplayTag({ tag }: InputTagProps) {
  const { deleteTag } = useInputTags()

  return (
    <div className="bg-secondary flex gap-1 justify-between items-center rounded  h-fit px-2 py-1">
      <span className="text-sm uppercase ">{tag}</span>
      <Button onClick={()=>deleteTag(tag)} role="button" variant="ghost" className="h-fit p-0 ps-1">
        <Cross1Icon width={12} />
      </Button>
    </div>
  );
}

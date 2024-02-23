import useInputTags from "@/contexts/inputTagsProvider"
import { cn } from "@/lib/utils"
import DisplayTag from "./DsplayTag"

interface DisplayInputTagsProps {
  className?: string,
}

export default function DisplayInputTags({ className }:DisplayInputTagsProps) {
  const { tags } = useInputTags()

  return (
  <>
      <div className={ cn( "flex gap-1", className ) }>
        {tags.map((tag) => <DisplayTag key={tag} tag={tag} />)}
      </div>
  </>
  )
}

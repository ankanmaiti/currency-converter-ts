import useLocalStorage from "@/hooks/useLocalStorage";
import { ReactNode, createContext, useContext } from "react";


type Tag = string

interface InputTagsContextState {
  tags: Tag[];
  addTag: (tag: Tag) => void;
  deleteLastTag: () => Tag | undefined;
  deleteTag: (tag:Tag) => void
}

const InputTagsContext = createContext<InputTagsContextState>({
  tags: [""],
  addTag: (tag: Tag) => { tag },
  deleteLastTag: () => undefined,
  deleteTag: (tag: Tag) => { tag },
});

interface InputTagsProviderProps {
  children: ReactNode;
}

export function InputTagsProvider({ children }: InputTagsProviderProps) {
  const [tags, setTags] = useLocalStorage<Tag[]>("searchTags", []);

  function addTag(tag: Tag) {
    if (!tag) return
    
    // store unique tags
    const uniqueTags = new Set([...tags, tag])
    setTags([...uniqueTags])
  }

  function deleteLastTag() {
    const lastTag = tags.at(-1)
    setTags(prevTags => prevTags.slice(0, -1))
    return lastTag
  }

  function deleteTag(tag: Tag) {
    if (!tag) return

    setTags(prevTags => prevTags.filter(prevTag => prevTag != tag))
  }

  return (
    <InputTagsContext.Provider value={{ tags, addTag, deleteTag, deleteLastTag }}>
      {children}
    </InputTagsContext.Provider>
  );
}

const useInputTags = () => useContext(InputTagsContext)
export default useInputTags

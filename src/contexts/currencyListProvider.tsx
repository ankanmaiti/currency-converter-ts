import useLocalStorage from "@/hooks/useLocalStorage";
import { ReactNode, createContext, useContext } from "react";

interface currencyListProviderProps {
  children: ReactNode;
}

type CurrencyListContextType = {
  list: string[];
  setList: React.Dispatch<React.SetStateAction<string[]>>;
  reArrangeList: (index:number, value:string)=>void,
};

const initialValue = ["USD", "INR", 'EUR'];

const currencyListContext = createContext<CurrencyListContextType>({
  list: initialValue,
  setList: () => null,
  reArrangeList: (index:number, value:string)=>{index;value;}
});

export function CurrencyListProvider({ children }: currencyListProviderProps) {
  const [list, setList] = useLocalStorage<string[]>("currencies", initialValue);

  function reArrangeList(index: number, value: string) {
    const t = list.at(index)

    const newList = list.slice()
    newList[index] = value 
    newList[list.indexOf(value)] = t as string

    setList(newList)
  }

  return (
    <currencyListContext.Provider value={{ list, setList, reArrangeList }}>
      {children}
    </currencyListContext.Provider>
  );
}

const useCurrencyList = () => useContext(currencyListContext);
export default useCurrencyList;

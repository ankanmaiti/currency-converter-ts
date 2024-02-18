import useBrowserStorage from "@/hooks/useBrowserStorage";
import { ReactNode, createContext, useContext } from "react";

interface currencyListProviderProps {
  children: ReactNode;
}

type CurrencyListContextType = {
  list: string[];
  setList: React.Dispatch<React.SetStateAction<string[]>>;
};

const initialValue = ["USD", "INR"];

const currencyListContext = createContext<CurrencyListContextType>({
  list: initialValue,
  setList: () => null,
});

export function CurrencyListProvider({ children }: currencyListProviderProps) {
  const [list, setList] = useBrowserStorage<string[]>(
    "localStorage",
    "currencyList",
    initialValue,
  );

  return (
    <currencyListContext.Provider value={{ list, setList }}>
      {children}
    </currencyListContext.Provider>
  );
}

const useCurrencyList = ()=> useContext(currencyListContext);
export default useCurrencyList;

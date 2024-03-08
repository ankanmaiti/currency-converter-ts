import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface CurrencyStoreState {
  currencies: string[];
  add: (currency: string) => void;
  remove: (currency?: string) => void;
  swap: (currency1: string, currency2: string) => void;
}

const MAX_LIST_LENGTH = 10;

function addCurrency(state: CurrencyStoreState, currency: string) {
  if (
    currency.length > 9 ||
    state.currencies.length >= MAX_LIST_LENGTH ||
    state.currencies.includes(currency)
  ) {
    return state;
  }

  return { currencies: [...state.currencies, currency.trim()] };
}

function removeCurrency(state: CurrencyStoreState, currency?: string) {
  if (!currency) {
    return {
      currencies: state.currencies.slice(0, -1),
    };
  }

  return {
    currencies: state.currencies.filter((cur) => cur != currency),
  };
}

function swapCurrencies(
  state: CurrencyStoreState,
  currency1: string,
  currency2: string,
) {
  if (!currency1 || !currency2) {
    return state;
  }

  let list: string[] = [...state.currencies];
  const index1 = list.indexOf(currency1);
  const index2 = list.indexOf(currency2);

  if (index1 !== -1 && index2 !== -1) {
    [list[index1], list[index2]] = [list[index2], list[index1]];
  }

  return {
    currencies: list,
  };
}

const useCurrencyStore = create<CurrencyStoreState>()(
  devtools(
    persist(
      (set) => ({
        currencies: [],
        add: (currency: string) => set((state) => addCurrency(state, currency)),
        remove: (currency?: string) =>
          set((state) => removeCurrency(state, currency)),
        swap: (currency1: string, currency2: string) =>
          set((state) => swapCurrencies(state, currency1, currency2)),
      }),
      { name: "currencies" },
    ),
  ),
);

export default useCurrencyStore;

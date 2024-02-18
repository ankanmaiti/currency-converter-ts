import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function titleCase(str: string) :string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export async function fetchCurrencyNames<T>(): Promise<T> {
  const URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";
  const res = await fetch(URL);
  const data = await res.json();
  return data && Object.keys(data);
}

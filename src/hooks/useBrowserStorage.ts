import { useEffect, useState } from "react";

export default function useBrowserStorage<T>(
  type: "localStorage" | "sessionStorage",
  key: string,
  initialValue?: T,
) {
  const storage = type === "localStorage" ? localStorage : sessionStorage;

  const [value, setValue] = useState<T>(() => {
    const storedValue = storage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    storage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue] as const;
}

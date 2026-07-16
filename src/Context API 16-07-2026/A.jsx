import { createContext, useState } from "react";

export const A = createContext();
export function AProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <A.Provider value={{ count, setCount }}>
      {children}
    </A.Provider>
  );
}
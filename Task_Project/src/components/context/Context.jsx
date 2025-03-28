import { createContext, useContext, useState } from "react";

export const context = createContext();

export function provvider({ children }) {
  const [user, setUser] = useState(null);
  const [logStatus, setLogStatus] = useState(null);
}

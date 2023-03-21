import { createContext, useState } from "react";

const TokenContext = createContext();
export default TokenContext

const tokenStorage = JSON.parse(localStorage.getItem('token'));

export function TokenProvider({ children }) {
  const [token, setToken] = useState(tokenStorage)

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      { children }
    </TokenContext.Provider>
  )
}
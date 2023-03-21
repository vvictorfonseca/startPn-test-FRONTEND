import { createContext, useState } from "react";

const UserContext = createContext()
export default UserContext

const userIdStorage = JSON.parse(localStorage.getItem('userId'))
const userName = JSON.parse(localStorage.getItem('userName'))

export function UserProvider({ children }) {
  const [userInfos, setUserInfos] = useState({ id: userIdStorage, fullName: userName, profilePhoto: "", phoneNumber: "", email: "", password: "" })

  return (
    <UserContext.Provider value={{ userInfos, setUserInfos }}>
      { children }
    </UserContext.Provider>
  )
}
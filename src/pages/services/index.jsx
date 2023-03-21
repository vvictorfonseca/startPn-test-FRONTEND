import { useContext } from "react"

import UserContext from "../../context/userContext"
import TokenContext from "../../context/token"

const Services = () => {
  const userIdStorage = JSON.parse(localStorage.getItem('userId'))
  const userName = JSON.parse(localStorage.getItem('userName'))

  console.log("userName", userName)
  console.log("userId", userIdStorage)
  
  return (
    <p>tamo aqui papai</p>
  )
}

export default Services
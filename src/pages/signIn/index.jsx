import { useState } from "react"

import AuthLayout from "../../layouts/Auth"

import logoImg from "../../images/png/logo.png"

import Logo from "../../components/Logo"
import AuthName from "../../components/AuthName"
import InputsBox from "./inputsBox"
import LoginColumn from "./loginColumn"
import AuthNavigation from "../../components/AuthNavigation"

const SignIn = () => {
  const [emailLogin, setEmailLogin] = useState("")
  const [passwordLogin, setPasswordLogin] = useState("")

  const signInBody = {
    email: emailLogin,
    password: passwordLogin
  }

  console.log(signInBody)
  
  const logoinfos = {
    width: "190px",
    height: "47.7px",
    marginLeft: "170px",
    marginTop: "40px",
    src: logoImg
  }

  const authNameinfos = {
    marginLeft: "170px",
    marginTop: "35px",
    name: "Dados de acesso"
  }

  const inputBoxInfos = {
    width: "75%",
    margin: "27px auto 0px auto",
    maxHeight: "29%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    emailLogin: emailLogin,
    setEmailLogin: setEmailLogin,
    passwordLogin: passwordLogin,
    setPasswordLogin: setPasswordLogin
  }

  const loginColumnInfos = {
    containerWidth: "55.5%",
    height: "48px",
    display: "flex",
    containerJustifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    width: "185px",
    content: "Entrar",
    border: "0px",
    borderRadius: "60px",
    cursor: "pointer",
    backgroundColor: "#476EE6",
    pContent: "Esqueceu a senha?",
    margin: "48px auto 0px auto"
  }

  const authNavigationInfos = {
    containerWidth: "30%",
    display: "flex",
    justifyContent: "space-between",
    margin: "40px auto 0px auto",
    h1Content: "Não possui conta?",
    pContent: "Cadastrar",
    cursor: "pointer",
    navigate: "/signup"
  }
  
  return (
    <AuthLayout>
      <Logo infos={logoinfos} />
      <AuthName infos={authNameinfos} />
      <InputsBox infos={inputBoxInfos} />
      <LoginColumn infos={loginColumnInfos} />
      <AuthNavigation infos={authNavigationInfos} />
    </AuthLayout>
  )
}

export default SignIn
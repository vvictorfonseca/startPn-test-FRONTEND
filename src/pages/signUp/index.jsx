import { useState } from "react"
import { useNavigate } from "react-router-dom"

import AuthLayout from "../../layouts/Auth"

import Logo from "../../components/Logo"
import AuthName from "../../components/AuthName"
import InputsBox from "./inputsBox"
import PrivaceTermsBox from "./privaceTermsBox"
import Button from "../../components/Button"
import AuthNavigation from "../../components/AuthNavigation"

import logoImg from "../../images/png/logo.png"

import postSignUp from "../../services/api"

const SignUp = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()

  const signUpBody = {
    fullName: fullName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    navigate: navigate
  }

  const logoinfos = {
    width: "190px",
    height: "47.7px",
    marginLeft: "49px",
    marginTop: "40px",
    src: logoImg
  }

  const authNameinfos = {
    marginLeft: "49px",
    marginTop: "35px",
    name: "Cadastro"
  }

  const inputBoxInfos = {
    width: "87%",
    margin: "27px auto 0px auto",
    maxHeight: "29%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    fullName: fullName,
    setFullName: setFullName,
    email: email,
    setEmail: setEmail,
    password: password,
    setPassword: setPassword,
    confirmPassword: confirmPassword,
    setConfirmPassword: setConfirmPassword
  }

  const privaceTermsInfos = {
    h2Content: "Termos de uso e privacidade",
    confirmBottomContent: "Ao clicar neste botão, eu concordo com os  termos de uso e privacidade da nossa empresa.",
    linkContent: "Termos de uso e privacidade",
    containerWidth: "87%",
    containerHeight: "102px",
    containerMargin: "0px auto",
    inputType: "checkbox",
    inputWidth: "18px",
    inputHeight: "18px",
    inputBorderRadius: "50px",
    inputBorder: "border: 2px solid #476EE6",
    marginTop: "21px",
    marginBottom: "6px",
    display: "flex",
    alignItems: "center",
    marginLeftLink: "35px",
    marginLeftCheckBox: "10px"
  }

  const buttonInfos = {
    content: "Cadastrar",
    width: "267px",
    height: "45px",
    margin: "auto",
    border: "0px",
    borderRadius: "60px",
    marginTop: "15px",
    cursor: "pointer",
    backgroundColor: "#476EE6",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    onclick: () => postSignUp(signUpBody)
  }

  const authNavigationInfos = {
    containerWidth: "30%",
    display: "flex",
    justifyContent: "space-between",
    margin: "40px auto 0px auto",
    h1Content: "Já tem uma conta?",
    pContent: "Login",
    cursor: "pointer",
    navigate: "/"
  }

  return (
    <AuthLayout background={"#ffffff"}>
      <Logo infos={logoinfos} />
      <AuthName infos={authNameinfos} />
      <InputsBox infos={inputBoxInfos} />
      <PrivaceTermsBox infos={privaceTermsInfos} />
      <Button infos={buttonInfos} />
      <AuthNavigation infos={authNavigationInfos} />
    </AuthLayout>
  )
}

export default SignUp
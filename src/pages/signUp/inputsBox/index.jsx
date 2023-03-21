import { Box } from "./style"

import AuthInput from "../../../components/authInput"

const InputsBox = () => {

  const generalInputInfo = {
    width: "290px",
    height: "45px",
    borderRadius: "10px",
    border: "1px solid #D7D7D7",
    paddingLeft: "10.32px",
  }

  const input1 = {
    name: "Nome",
    placeholder: "Insira seu Nome"
  }

  const input2 = {
    name: "E-mail",
    placeholder: "Insira seu e-mail"
  }

  const input3 = {
    name: "Senha",
    placeholder: "Insira sua senha",
    type: "password"
  }

  const input4 = {
    name: "Confirme sua Senha",
    placeholder: "Confirma senha",
    type: "password"
  }
  
  return (
    <Box>
      <AuthInput inputInfos={input1} styleInfos={generalInputInfo}  />
      <AuthInput inputInfos={input2} styleInfos={generalInputInfo}  />
      <AuthInput inputInfos={input3} styleInfos={generalInputInfo}  />
      <AuthInput inputInfos={input4} styleInfos={generalInputInfo}  />
    </Box>
  )
}

export default InputsBox
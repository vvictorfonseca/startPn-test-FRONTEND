import AuthInput from "../../../components/AuthInput"

const InputsBox = ( { infos } ) => {
  const { width, margin, maxHeight, display, justifyContent, flexWrap, fullName, setFullName,
          email, setEmail} = infos
  
  const styleContainer = {
    width,
    margin,
    maxHeight,
    display,
    justifyContent,
    flexWrap
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

  const generalInputInfo = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    containerHeight: "70px",
    marginBottom: "20px",
    width: "290px",
    inputHeight: "45px",
    borderRadius: "10px",
    border: "1px solid #D7D7D7",
    paddingLeft: "10.32px",
  }

  const input1 = {
    name: "Nome",
    placeholder: "Insira seu Nome",
    value: fullName,
    setValue: setFullName
  }

  const input2 = {
    name: "E-mail",
    placeholder: "Insira seu e-mail",
    value: email,
    setValue: setEmail
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
    <div style={styleContainer}>
      <AuthInput inputInfos={input1} styleInfos={generalInputInfo}  />
      <AuthInput inputInfos={input2} styleInfos={generalInputInfo}  />
      <AuthInput inputInfos={input3} styleInfos={generalInputInfo}  />
      <AuthInput inputInfos={input4} styleInfos={generalInputInfo}  />
    </div>
  )
}

export default InputsBox
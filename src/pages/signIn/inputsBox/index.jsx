import AuthInput from "../../../components/AuthInput"

const InputsBox = ({ infos }) => {
  const { width, margin, maxHeight, display, justifyContent, flexWrap } = infos

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
    containerHeight: "78px",
    marginBottom: "24px",
    width: "418px",
    inputHeight: "50px",
    borderRadius: "10px",
    border: "1px solid #D7D7D7",
    paddingLeft: "10.32px",
  }

  const input1 = {
    name: "E-mail",
    placeholder: "Insira seu e-mail"
  }

  const input2 = {
    name: "Senha",
    placeholder: "Insira sua senha",
    type: "password"
  }

  return (
    <div style={styleContainer}>
      <AuthInput inputInfos={input1} styleInfos={generalInputInfo} />
      <AuthInput inputInfos={input2} styleInfos={generalInputInfo} />
    </div>
  )
}

export default InputsBox
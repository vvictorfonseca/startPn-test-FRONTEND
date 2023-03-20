import { BoxInput, Name, Input } from "./style"

const AuthInput = ( infos ) => {
  console.log(infos)
  const { width, height, paddingLeft, borderRadius, border } = infos.styleInfos
  const { name, placeholder, type } = infos.inputInfos

  const styleInput = {
    width: width,
    height: height,
    borderRadius: borderRadius,
    border: border,
    paddingLeft: paddingLeft,
  }
  
  return (
    <BoxInput>
      <Name className="textNameInput">{name}</Name>
      <Input style={styleInput} placeholder={placeholder} type={type}></Input>
    </BoxInput>
  )
}

export default AuthInput
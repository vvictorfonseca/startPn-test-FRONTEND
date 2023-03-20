import { BoxInput } from "./style"

const AuthInput = ( infos ) => {
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
      <p className="textNameInput">{name}</p>
      <input style={styleInput} placeholder={placeholder} type={type}></input>
    </BoxInput>
  )
}

export default AuthInput
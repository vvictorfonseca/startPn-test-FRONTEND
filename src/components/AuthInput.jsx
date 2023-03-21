const AuthInput = ( infos ) => {
  const { width, inputHeight, paddingLeft, borderRadius, border, display, flexDirection, 
          containerHeight, marginBottom, justifyContent  } = infos.styleInfos
  const { name, placeholder, type, setValue, value} = infos.inputInfos

  const styleContainer = {
    display,
    justifyContent,
    flexDirection,
    marginBottom,
    width,
    height: containerHeight
  }

  const styleInput = {
    width: width,
    height: inputHeight,
    borderRadius: borderRadius,
    border: border,
    paddingLeft: paddingLeft,
  }
  
  return (
    <div style={styleContainer}>
      <p className="textNameInput">{name}</p>
      <input style={styleInput} placeholder={placeholder} type={type} value={value} onChange={(e) => setValue(e.target.value)} ></input>
    </div>
  )
}

export default AuthInput
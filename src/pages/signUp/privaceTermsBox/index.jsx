const PrivaceTermsBox = ({ infos }) => {
  const { h2Content, confirmBottomContent, linkContent, containerWidth, containerHeight,
          inputType, inputWidth, inputHeight, marginTop, marginBottom, display, containerMargin,
          alignItems, marginLeftLink, marginLeftCheckBox, inputBorderRadius, inputBorder } = infos

  const styleContainer = {
    width: containerWidth,
    height: containerHeight,
    margin: containerMargin
  }

  const styleCheckBocContainer = {
    display,
    alignItems,
    marginTop,
    marginBottom
  }

  const styleInput = {
    width: inputWidth,
    height: inputHeight,
    borderRadius: inputBorderRadius,
    border: inputBorder
  }
  
  return (
    <div style={styleContainer}>
      
      <h2 className="textPrivaceTerms">{h2Content}</h2>
      
      <div style={styleCheckBocContainer}>
        <input style={styleInput} type={inputType}></input>
        <p style={{marginLeft: marginLeftCheckBox}} className="textConfirmPrivaceTerms">{confirmBottomContent}</p>
      </div>
      
      <p style={{marginLeft: marginLeftLink}} className="textLinkPrivaceTerms">{linkContent}</p>
    
    </div>
  )
}

export default PrivaceTermsBox
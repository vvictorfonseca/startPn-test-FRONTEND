import Button from "../../../components/Button"

const LoginColumn = ({ infos }) => {
  const { containerWidth, height, display, justifyContent, containerJustifyContent, 
          alignItems, width, content, border, borderRadius, cursor,
          backgroundColor, pContent, margin} = infos

  const styleContainer = {
    width: containerWidth,
    height,
    display,
    justifyContent: containerJustifyContent,
    alignItems,
    margin
  }

  const buttonInfos = {
    width,
    height,
    display,
    justifyContent,
    alignItems,
    content, 
    border,
    borderRadius, 
    cursor,
    backgroundColor
  }
  
  return (
    <div style={styleContainer}>
      <Button infos={buttonInfos} />
      <p className="textLinkPrivaceTerms">{pContent}</p>
    </div>
  )
}

export  default LoginColumn
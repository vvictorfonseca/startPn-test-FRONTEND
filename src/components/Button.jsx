const Button = ({ infos }) => {
  const { margin, width, height, backgroundColor, borderRadius, cursor, content, border, display, 
          alignItems, marginTop, justifyContent, onclick } = infos

  const styleButton = {
    display,
    alignItems,
    justifyContent,
    width,
    height,
    margin,
    marginTop,
    backgroundColor,
    borderRadius,
    border,
    cursor,
  }

  return (
    <button onClick={onclick} className="textButton" style={styleButton}>{content}</button>
  )
}

export default Button
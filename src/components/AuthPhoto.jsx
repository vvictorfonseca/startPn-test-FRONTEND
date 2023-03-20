const AuthPhoto = ({ info }) => {
  const { containerWidth, containerHeight, backgroundImage, backgroundColor, display, positionRelative, boxShadow, 
          borderTopRightRadius, src, positionAbsolute, bottom, imageWidth, imageHeight} = info
  
  const componentStyle = {
    width: containerWidth,
    height: containerHeight,
    backgroundImage,
    backgroundColor,
    display,
    position: positionRelative,
    boxShadow,
    borderTopRightRadius,
  }

  const imgStyle = {
    display,
    position: positionAbsolute,
    bottom,
    width: imageWidth,
    height: imageHeight
  }
  
  return (
    <div style={componentStyle}>
      <img src={src} style={imgStyle}></img>
    </div>
  )
}

export default AuthPhoto
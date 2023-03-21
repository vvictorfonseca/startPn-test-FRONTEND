const Logo = ({ infos }) => {
  const { width, height, src, marginTop, marginLeft } = infos

  const styleLogo = {
    width,
    height,
    marginTop,
    marginLeft
  }
  
  return (
    <img src={src} style={styleLogo}></img>
  )
}

export default Logo
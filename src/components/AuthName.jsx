const AuthName = ({ infos }) => {
  const { marginTop, marginLeft, name } = infos

  const authNameStyle = {
    marginLeft,
    marginTop
  }

  return (
    <h1 className="textAuthName" style={authNameStyle}>{name}</h1>
  )
}

export default AuthName
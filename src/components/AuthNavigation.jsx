import { Link } from "react-router-dom"

const AuthNavigation = ({ infos }) => {
  const { containerWidth, display, justifyContent, margin, h1Content, pContent, cursor,
          navigate } = infos

  const styleContainer = {
    width: containerWidth,
    display,
    justifyContent,
    margin,
  }
  
  return (
    <div style={styleContainer}>
      <h1 className="textAuthQuestion">{h1Content}</h1>
      <Link to={navigate}><p className="textAuthNavigate" style={{cursor: cursor}}>{pContent}</p></Link>
    </div>
  )
}

export default AuthNavigation
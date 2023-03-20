import backgroundImage from "../images/png/steve.png"
import steve from '../images/png/stevejobs.png'
import logo from '../images/png/logo.png'

import AuthPhoto from "../components/AuthPhoto"

export default function AuthLayout({ children }) {

  const container_auth = {
    display: 'grid',
    gridTemplateColumns: '1fr 1.25fr',
    gridTemplateRows: "100vh",
    backgroundColor: "#fff"
  }

  const column1 = {
    gridColumnStart: "1",
    gridColumnEnd: "2",
    gridRowStart: "1",
    gridRowEnd: "1",
  }

  const column2 = {
    gridColumnStart: "2",
    gridColumnEnd: "3",
    gridRowStart: "1",
    gridRowEnd: "1",
  }

  const authPhotoInfos = {
    containerWidth: "100%",
    containerHeight: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#fff",
    display: 'flex',
    positionRelative: 'relative',
    boxShadow: "4px 4px 10px 5px rgba(0, 0, 0, .2)",
    borderTopRightRadius: "20px",
    src: steve,
    positionAbsolute: 'absolute',
    bottom: '0',
    imageWidth: '606px',
    imageHeight: '606px'
  }
  
  return (
    <div style={container_auth}>
      <aside style={column1}>
        <AuthPhoto info={authPhotoInfos} />
      </aside>
      <main style={column2}>
        { children }
      </main>
    </div>
  )
}
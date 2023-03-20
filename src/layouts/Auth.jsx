import Page from "../components/Page";
import { StyledContainerPhoto, StyledContainerAuth, Image } from "../components/Auth";

import img from '../images/png/stevejobs.png'

export default function AuthLayout({ background, children }) {
  
  return (
    <Page background={background}>
      <StyledContainerPhoto>
        <Image src={img}></Image>
      </StyledContainerPhoto>
      
      <StyledContainerAuth>
        { children }
      </StyledContainerAuth>
    </Page>
  )
}
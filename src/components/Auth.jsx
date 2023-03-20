import styled from "styled-components";

import img from '../images/png/steve.png'

export const StyledContainerPhoto = styled.div`
  height: 100vh;
  width: 43%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #fff;
  box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, .2);
  display: flex;
  overflow: hidden;
  background-image: url(${img});
  position: relative
`
export const StyledContainerAuth = styled.div`
  height: 100vh;
  width: 57%;
  display: flex;
`
export const Image = styled.img`
  width: 590px;
  height: 590px;
  display: flex;
  position: absolute;
  bottom: 0;
`
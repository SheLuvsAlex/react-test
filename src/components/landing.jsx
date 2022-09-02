import styled from 'styled-components';
import React from 'react'
import {VscChevronLeft,VscChevronRight} from 'react-icons/vsc';

function Landing() {

  return(

     <Container>
     <Wraper>
      <ImageBG src={'Flag.jpg'}/>


       <ArrowGroup>
         <ArrowBox><VscChevronLeft /></ArrowBox>
         <ArrowBox><VscChevronRight /></ArrowBox>
       </ArrowGroup>
     
     
     </Wraper>
     </Container>
  );

}

export default Landing;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  
  
`
const Wraper = styled.div`
   height: 100%;
  width: 100%;
`
const ImageBG = styled.img`
 
  
  object-fit: cover;
  width:100vw;
  height: 100vh;
  
  

`
const ArrowGroup = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translate(0,-50%);
  display: flex;
  justify-content: space-between;
/*   background-color: yellow; */
`
const ArrowBox = styled.div`
  margin: 0 1rem;
  color: white;
   background-color: rgba(250,250,250,.5); 
/*    opacity: 0.5; */
padding: 1.5%;
&:hover{
  cursor: pointer;
}
  
`
import styled from 'styled-components';
import React from 'react'



function Services() {

  return(
    <Container>
      <Wrapper>
        
       <Titlewrap>
        <Title><span style={{color: '#5f6f7e'}}>Our</span> Services</Title>
        <span style = {{
      width: '73px',
      borderBottom: '2px solid #b7bbbf'
        }}></span>
       </Titlewrap>
       

        
        <Infowrap>
         <Info>Has your organization hit a rut? Are you looking for a set of tools to hone your competitive edge? At DDS we have both the tools and the processes to help you establish a healthy discipline and approach to competition. We will design a program and follow up to position your company for success.</Info>
          
        </Infowrap>

        <Servicewrap>
          <Infobox>
         <Infoicon></Infoicon>
          <Infotext></Infotext> 
            <Infotitle></Infotitle>
          </Infobox>
          
          
        </Servicewrap>


        
      </Wrapper>
    </Container>
  );

}

export default Services;



function CircleComp({title,color,position,icon}){
  return (
    <Circle color = {color} position = {position}>


      
    <Iconwrap>
      {title == 'Analytics' && <GoGraph/> }
      {title == 'Development' && <BsCodeSlash/> }
      {title == 'Operations' && <GoGear/> }
    </Iconwrap>
      <CircleText>
        {title}
      </CircleText>
    </Circle>
  )
  
} 




const Container = styled.div`
/* height: 700px; */
  width: 100%;
  margin: 0 auto;
  min-width: 600px;
  background-color: rgb(246,246,246);
  `
const Wrapper = styled.div`
margin: auto 10px;
   max-width: 1100px;
  `

const Titlewrap = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  overflow-x: visable;
  padding-top:50px;
  `
const Title = styled.h1`
  margin: 7px auto;
  text-transform: uppercase;
  color: #64AED9;
  font-family: 'PT Sans Narrow';
  letter-spacing: 3px;
  word-spacing:0px;
  font-size: 37px;
/*   background-color: blue; */
  
  `
const Infowrap = styled.div`
 margin: 30px auto;
  `

const Info = styled.p`
 text-align: center;
  font-size: 20px;
  font-family: "Open Sans", 'Arial';
/*   font-color: # */
  
  `
const Imgwrap = styled.div`
  padding-top: 105px;
 width:100%;
  position: relative;
/* hieght: 100px; */
/*   background-color: red; */
`



const Iconwrap = styled.div`
font-size: 43px;

  `     // 

const Infoicon = styled.div`
  `
const Servicewrap = styled.div`
`
const Infobox = styled.div`
`
const Infotext = styled.div`
`
const Infotitle = styled.div`
`
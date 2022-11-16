import styled from 'styled-components';
import React from 'react'
import {BsCodeSlash} from 'react-icons/bs';
import {GoGraph} from 'react-icons/go';
import {GoGear} from 'react-icons/go';



function About() {

  return(
    <Container>
      <Wrapper>
        
       <Titlewrap>
        <Title><span style={{color: '#64AED9'}}>DDS</span> Inspires</Title>
        <span style = {{
      width: '73px',
      borderBottom: '2px solid #b7bbbf'
        }}></span>
       </Titlewrap>
       

        
        <Infowrap>
         <Info>Has your organization hit a rut? Are you looking for a set of tools to hone your competitive edge? At DDS we have both the tools and the processes to help you establish a healthy discipline and approach to competition. We will design a program and follow up to position your company for success.</Info>
        </Infowrap>

        <Imgwrap>
          <Img src={'trio.png'} />

          
          <CircleComp 
            title={'Development'} 
            color = {'#e85425'} 
            position = {[0,'','',37]}/>
         <CircleComp 
           title={'Analytics'} 
           color = {'#5BAFE1'} 
           position = {['','',2,4]}/>
         <CircleComp
           title={'Operations'} 
           color = {'#A4d93A'} 
           position = {['','',25,78]}/>
          

          

          
        </Imgwrap>
        
      </Wrapper>
    </Container>
  );

}

export default About;



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
  width: 80%;
  margin: 0 auto;
  min-width: 600px;
  max-width: 1100px;
margin-top: 50px;
/*   background-color: red; */
  `
const Wrapper = styled.div`
  width:100%;
  `

const Titlewrap = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  overflow-x: visable;
  `
const Title = styled.h1`
  margin: 7px auto;
  text-transform: uppercase;
  color: #5f6f7e;
  font-family: 'PT Sans Narrow';
  letter-spacing: 3px;
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
/*   background-color: blue; */
`


const Img = styled.img`
  width: 100%;
   object-fit: contain;
  
   
  `
const Circle = styled.div`
  position: absolute;
  top: ${({position})=> (`${position[0]}%`)};
  left: ${({position})=> (`${position[3]}%`)};
  right: ${({position})=> (`${position[1]}%`)};
  bottom: ${({position})=> (`${position[2]}%`)};
  
  border-radius: 100%;
  background-color: ${({color})=> (color)};
  height: 135px;
   width: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: -5;
  
@media screen and (max-width:576px){
width: 105px;
  height:105px;
  
}
  


`

const CircleText = styled.strong`

  font-family: 'PT Sans Narrow';

`

const Iconwrap = styled.div`
font-size: 43px;

  `

     // 
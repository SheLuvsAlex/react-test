import styled from 'styled-components';
import React from 'react'
import {BsCodeSlash} from 'react-icons/bs'

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
          <Circle>
           
            <Icon/>
            <Circletext>
                Development
            </Circletext>
          </Circle>
        </Imgwrap>
        
      </Wrapper>
    </Container>
  );

}

export default About;

const Container = styled.div`
height: 700px;
  width: 80%;
  margin: 0 auto;
  min-width: 600px;
  max-width: 1100px;
margin-top: 50px;
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
/*   background-color: blue; */
  
  `
const Infowrap = styled.div`
 margin: 30px auto;
  `

const Info = styled.div`
 text-align: center;
  font-size: 20px;
  `
const Imgwrap = styled.div`
 width:100%;
/* hieght: 100px; */
/*   background-color: red; */
`


const Img = styled.img`
  width: 100%;
   object-fit: contain;
   
  `
const Circle = styled.div`
  border-radius: 100%;
  background-color:#e85425;
    height: 100px;
   width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;


`

const Circletext = styled.strong`


`

const Icon = styled(BsCodeSlash)`

  background-color: blue;
  `
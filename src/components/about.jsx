import styled from 'styled-components';
import React from 'react'

function About() {

  return(
    <Container>
      <Wrapper>
        
       <Titlewrap>
        <Title>DDS Inspires</Title>
       </Titlewrap>

        
        <Infowrap>
         <Info>Has your organization hit a rut? Are you looking for a set of tools to hone your competitive edge? At DDS we have both the tools and the processes to help you establish a healthy discipline and approach to competition. We will design a program and follow up to position your company for success.</Info>
        </Infowrap>

        <Imgwrap>
          <Img src={'trio.png'} />
        </Imgwrap>
        
      </Wrapper>
    </Container>
  );

}

export default About;

const Container = styled.div`
height: 700px;
  width: 60%;
  margin: 0 auto;

  `
const Wrapper = styled.div`
 
  `

const Titlewrap = styled.div`
 
  `
const Title = styled.h1`
 
  `
const Infowrap = styled.div`
 
  `

const Info = styled.div`
 
  `
const Imgwrap = styled.div`
 width:100%;
  `


const Img = styled.img`
 object-cover: fit
   
  `
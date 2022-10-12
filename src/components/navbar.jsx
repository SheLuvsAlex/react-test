import styled from 'styled-components';
import React from 'react'

function Navbar() {

  return(
    <NavContainer>
      <Imgwrap>
        <Img src = {'ddslogo.png'}/>
      </Imgwrap>

      
      <Linkcontainer>
           <Navlink href="#home">Home</Navlink>
          <Navlink href="#news">About</Navlink>
          <Navlink href="#contact">Services</Navlink>
          <Navlink href="#contact">Careers</Navlink>
          <Navlink href="#contact">Contact</Navlink>
      
      </Linkcontainer>
 
    </NavContainer>
  );

}

export default Navbar;

const NavContainer = styled.div`
overflow: hidden;
  background-color: White;
  display: flex;
  justify-content: space-between;
   align-items:center;
  height: 60px;
  
  `

const Navlink = styled.a`
  float: left;
  display: block;
  color: #78828c;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'PT Sans Narrow';
  font-size: 18px;
  &: hover{
    color: #64AED9
  }
   `



const Linkcontainer = styled.div`

  
`
  
const Imgwrap = styled.div`
  height:75%;
  margin: 0 40px;
  
  
`
const Img = styled.img`
 object-fit: cover;
    height: 100%;

    &: hover{
    cursor: pointer;
  }
`

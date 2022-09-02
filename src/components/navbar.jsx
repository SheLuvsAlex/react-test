import styled from 'styled-components';
import React from 'react'

function Navbar() {

  return(
    <NavContainer>
      <Navlink href="#home">Home</Navlink>
  <Navlink href="#news">About</Navlink>
  <Navlink href="#contact">Services</Navlink>
      <Navlink href="#contact">Careers</Navlink>
      <Navlink href="#contact">Contact</Navlink>
    </NavContainer>
  );

}

export default Navbar;

const NavContainer = styled.div`
overflow: hidden;
  background-color: White;

 
  `

const Navlink = styled.a`
  float: left;
  display: block;
  color: #78828c;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  text-transform: uppercase;
  &: hover{
    color: #64AED9
  }
  
  
`
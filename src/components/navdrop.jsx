import styled from 'styled-components';
import React from 'react'

function Navdrop() {
  return(
 <Navdrop>
   <Navlink href="#home">Home</Navlink>
  <Navlink href="#news">About</Navlink>
  <Navlink href="#contact">Services</Navlink>
      <Navlink href="#contact">Careers</Navlink>
      <Navlink href="#contact">Contact</Navlink>
 </Navdrop>

  );

}
export default Navdrop;

const Navdrop = styled.div`



`

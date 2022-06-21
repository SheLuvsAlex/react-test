import styled from 'styled-components';
import React from 'react'

function Test({name,color}) {

  return(
    <Container style = {{backgroundColor:color}}>
      <Wrapper>
        <Content>
        bye {name}
        </Content>
      </Wrapper>
    </Container>
  );

}

export default Test;

const Container = styled.div`
  width: 90%;
  height:200px;
/*   background-color: ; */
  margin: 5px auto;

  `
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display:grid;
  place-items: center;
  
  
  `

const Content = styled.h1`
  color: blue;
  text-transform:uppercase;

  `

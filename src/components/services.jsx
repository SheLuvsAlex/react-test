import styled from 'styled-components';
import React from 'react'
import {FaCube} from 'react-icons/fa';
import {AiOutlineDashboard} from 'react-icons/ai';
import {GrTerminal} from 'react-icons/gr';
import {TbPuzzle} from 'react-icons/tb';

var serviceslist = [
  {
    title: 'Decision Support',
    body: 'It is not enough to develop Business Intelligence capability, visualization software or hire data scientists to perform predictive analysis against large data sets, to solve your most challenging questions and generate business advantage you will need solutions that are as efficient as they are effective. We develop the full practice of decision support systems, operations and lifecycle to ensure your solution is sustainable and delivers the value your business needs to be competitive! Click Here!',
    icon: <FaCube/>
  },
  {
    title: 'Systems Engineering',
    body: "Leveraging technology is critical in today's business. We can help modernize,     efficiently operate, perform cloud migration or plan capability necessary for your business to grow. Many small and medium size companies find that outsourcing administration of thier IT capability can save costs. We can help generate options for both soultions and management. Click Here!",
    icon: <AiOutlineDashboard/>
  },
  {
    title: 'Software Development',
    body: 'Managing a professional software engineering department can be difficult and expensive. DDS has an experienced team of developers that can quickly help you implement solutions to your toughest problems.',
    icon: <GrTerminal/>
  },
  {
    title: 'Special  Solutions',
    body: "Our team members have experiance in some of the toughest operational environemnts supporting Special Operations and other units where failure is not an option. We specialize in working with our clients in developing those special projects that are critical to mission success, in any environment, anywhere in the world!. Click Here!",
    icon: <TbPuzzle/>
  },
]




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


          {serviceslist.map((item,index)=>{
            return (<Infobox>
             <Infoicon></Infoicon>
            <Infotitle>{item.title}</Infotitle>
            <Infotext>{item.body}</Infotext> 
                   
          </Infobox>);
      
          })}
          
          
          
          
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
justify-content: center;
  display: flex;
 
`
const Infobox = styled.div`
  margin: 0 10px;
  width: 24%;
  max-width: 300px;
`

const Infotitle = styled.h3`
   font-size: 18px;
  margin: 15px auto;
  font-family: "Open Sans", 'Arial';
  color: rgb(95,111,126);
  font-weight: bold;
  text-align: center;
  
`
const Infotext = styled.p`
   font-size: 14px;
  margin: 15px auto;
  font-family: "Open Sans", 'Arial';
  color: rgb(95,111,126);
  text-align: center;
  font-weight:300;
`













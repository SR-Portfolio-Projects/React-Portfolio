import React from 'react';
import styled from "styled-components";
import Nymph from '../assets/trenyph2.png';


const HomeDiv = styled.div` 
   position: relative;
`

const BgImage = styled.div`
   width: 100%;
   height: 50vh;
   /* border: 2px solid red; */
   background-image: url(${Nymph});
   background-repeat: no-repeat;
   background-size: 30rem 30rem;
   position: absolute;
   margin: 6rem 0 0 0;
`


const Text = styled.div`
   padding: 10rem 0 0 2rem;
   margin-top: 22rem;
`

const HomeHeader = styled.h2`
   font-size: 4rem;
   color: #FECD1A;
   margin: 0 0 2rem 0;
   span {
      color: #6031CA;
   }
`

const MyDescription = styled.div` 
   font-size: 2rem;
   color: #FECD1A;
   p{
      margin: 0 0 1rem 0;
   }
   span {
      color: #6031CA;
   }
   
`

function Home() {
     return (
        <HomeDiv>
           <BgImage>

</BgImage>
           <Text>
         <HomeHeader>Hey, <br/>I'm <span>Shannon</span></HomeHeader>
         <MyDescription>
        <p>Full Stack Web Developer
           <br/>learning, building and teaching
           <br/>from San Diego, Califonia.I turn ideas into applications and websites.
        </p>
        <p><span>Come on in and take a look around, dont forget to connect with me while you are here!!!</span></p>
        </MyDescription>
         </Text>
         
        </HomeDiv>
     )
  }
export default Home;
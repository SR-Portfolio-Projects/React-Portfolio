import React from 'react';
import styled from "styled-components";
import Nymph from '../assets/trenyph2.png';


const HomeDiv = styled.div`
   margin: 0 auto;
   max-width: 90%;
   position: relative;
`

const BgImage = styled.div`
   width: 100%;
   height: 50vh;
   background-image: url(${Nymph});
   background-repeat: no-repeat;
   background-size: 28rem 28rem;
   position: absolute;
   margin: 6rem 0 0 0;
   @media(min-width: 400px) {
      background-size: 33rem 33rem;
   }
   @media(min-width: 500px) {
      background-size: 39rem 39rem;
   }
   @media(min-width: 600px) {
      background-size: 46rem 46rem;
      height: 60vh;
   }
   @media(min-width: 700px) {
      background-size: 50rem 50rem;
   }
   @media(min-width: 800px) {
      background-size: 40rem 40rem;
      margin: 2rem 0 0 3rem;

      
   }
`


const Text = styled.div`
   max-width: 95%;
   margin-top: 32rem;
   @media(min-width: 400px) {
      margin-top: 38rem;
   }
   @media(min-width: 500px) {
      margin-top: 42rem;
   }
   @media(min-width: 600px) {
      margin-top: 48rem;
   }
   @media(min-width: 700px) {
      margin-top: 52rem;
   }
   @media(min-width: 700px) {
      max-width: 85%;
      margin: 40rem 0 0 5rem;
   }
`

const HomeHeader = styled.h2`
   font-size: 4rem;
   color: #FECD1A;
   margin: 0 0 2rem 0;
   line-height: 50%;
   span {
      color: #6031CA;
   }
   @media(min-width: 500px) {
      font-size: 6rem;
   }
`

const MyDescription = styled.div` 
   font-size: 2rem;
   color: #FECD1A;
   max-width: 90%;
   p{
      margin-bottom: 2rem;
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
               <HomeHeader>Hey,</HomeHeader>
               <HomeHeader>I'm <span>Shannon</span></HomeHeader>
         <MyDescription>
        <p>Full Stack Web Developer
           learning, building and teaching
           from San Diego, Califonia.I turn
            ideas into applications and websites.
        </p>
        <p><span>Come on in and take a look
         around, dont forget to connect
          with me while you are here!!!</span></p>
        </MyDescription>
         </Text>
         
        </HomeDiv>
     )
  }
export default Home;
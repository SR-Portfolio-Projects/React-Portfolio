import React from 'react';
import styled from "styled-components";
import Codebg from '../assets/codebg.png'
import Nymph from '../assets/trenyph2.png';


const HomeDiv = styled.div` 
   /* display: flex; */
   position: relative;
    `

const Text = styled.div`
    padding: 10rem 0 0 5rem;
    margin-top: 40rem;
    
    

    h2 {
       font-size: 5rem;
       color: #FECD1A;
    }
    p {
       font-size: 2rem;
       color: #FECD1A;
    }
    `

const BgImage = styled.div`
   width: 50%;
   height: 100vh;
   border: 2px solid red;
   background-image: url(${Nymph});
   background-repeat: no-repeat;
   background-size: 40rem 40rem;
   position: absolute;
   margin: 0 0 0 5rem;
  `
function Home() {
     return (
        <HomeDiv>
           <BgImage>

</BgImage>
           <Text>
         <h2>Hey, I'm Shannon.</h2>
        <p>Full Stack Web Developer learning, building and teaching <br/>from San Diego, Califonia. I turn ideas into applications and websites</p>
        <p>Come on in and take a look around, dont forget to connect with me while you are here!!!</p>
         </Text>
         
        </HomeDiv>
     )
  }
export default Home;
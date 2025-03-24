import React from 'react';
// import {Card} from "../components";
import selfPortrait from "../assets/self-portrait.jpeg";
import {Hero} from "../components"

const Home = () => {



  return (
    <div className="container mx-auto" style={{marginTop: 70}}>
      <Hero
        title="Welcome to my Portfolio"
        body="I am a Year 2 Computer Science student from Nanyang Technological University. I enjoy creating applications."
        imageSrc={selfPortrait}
      />
    </div> 
  )
}

export default Home
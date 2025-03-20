import React from 'react';
import {Card} from "../components"
const About = () => {


  return (
    <div className="container mx-auto" style={{marginTop: 70}}>
      <div className="grid grid-cols-3 gap-4" >
        <Card />
        <Card />
        <Card />
      </div>
      <div className="grid grid-cols-3 gap-4" style={{marginTop: 70}}>
        <Card />
        <Card />
        <Card />
      </div>
      <div className="grid grid-cols-3 gap-4" style={{marginTop: 70}}>
        <Card />
        <Card />
        <Card />
      </div>
    </div> 
    
  )
}

export default About
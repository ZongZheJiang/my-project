import React from 'react';
import {Card} from "../components";
import hacxPic from "../assets/hacx-pic.jpg";
import thrivePic from "../assets/thrive-pic.jpeg";

const Projects = () => {



  return (
    <div className="container mx-auto" style={{marginTop: 70}}>
      <div className="grid grid-cols-3 gap-4" >
        <Card 
          title="First Runner-Up in HacX: Hack for Public Safety"
          body="Created Prototypes for SCDF DART Team's use during Rescue Missions from height to minimise property damage"
          imageSrc={hacxPic}
        />
        <Card 
          title=""
          body=""
          imageSrc={thrivePic}
        />
        <Card           
          title=""
          body=""
          imageSrc=""
        />
      </div>
    </div> 
  )
}

export default Projects
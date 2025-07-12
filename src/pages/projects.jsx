import React from 'react';
import {Card} from "../components";
import hacxPic from "../assets/hacx-pic.jpg";
import thrivePic from "../assets/thrive-pic2.jpeg";
import icebreakerPic from "../assets/icebreaker-pic.png"; 

const Projects = () => {



  return (
    <div className="container mx-auto px-4" style={{marginTop: 70}}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card 
          title="First Runner-Up in HacX: Hack for Public Safety"
          projectType="Engineering"
          body="Created Prototypes for SCDF DART Team's use during Rescue Missions from height to minimise property damage"
          imageSrc={hacxPic}
          link="/projects"
        />
        <Card 
          title="Thrive Project with Unlocking ADHD"
          projectType="Consultancy"
          body="Deputy Project Lead for a team of 6, conducted market research and developed recommendations for improving Unlocking ADHD's beneficiary engagement over 6"
          imageSrc={thrivePic}
          link="/projects"
        />
        <Card           
          title="Mock Icebreaker Application"
          projectType="Web Development"
          body="Demonstrated connecting Supabase Database to Next.js application, and implementing User Authentication using Middleware"
          imageSrc={icebreakerPic}
          link="https://icebreaker-tan.vercel.app/"
        />
      </div>
    </div> 
  )
}

export default Projects
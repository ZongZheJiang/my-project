import React from 'react';
import { NavBar, Blogs, Footer } from "../components"

const Home = ({blogs}) => {



  return (
    <div>
      <NavBar />
      {/* <Blogs blogs={blogs} />       
      <Footer /> */}
    </div>
  )
}

export default Home
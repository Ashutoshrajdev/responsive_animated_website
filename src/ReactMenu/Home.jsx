import React from 'react';
import Common from './Common';
import img from "../image/front.jpg"


const Home = () => {
  return (
    <>
    <div style={{marginTop: "100px"}}>
    <Common  name="Let's get Started with " imgsrc={img} visit="/service" btnName="Get Started" />
    </div>
    </>

  )
}

export default Home;
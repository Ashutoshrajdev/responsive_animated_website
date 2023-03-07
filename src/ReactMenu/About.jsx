import React from 'react'; 
import Common from './Common';
import img from "../image/rockett.png"


const About = () => {
  return (
    <>
    <Common name="This is an About page " imgsrc={img} visit="/contact" btnName="Contact Now"/>
    </>
  )
}

export default About;
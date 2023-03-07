import React from 'react'

const Footer = () => {
    let year = new Date().getFullYear();
   
  return (
    <>
    <footer className="w-100 bg-light  text-center">
        <p style={{fontSize:'20px' ,marginTop:"115px"}}>© {year}  All Rights Reserved || Terms and Condition Applied.</p>
    </footer>
    </>
  )
}

export default Footer
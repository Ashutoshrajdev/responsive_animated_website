import React from 'react'
import Card from './Card'
import imgData from './ImgData'

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className=" text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
             
                {imgData.map((event)=>{
                  return <Card key={event.id} image={event.imgsrc} title={event.title}/>
                })}
           
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
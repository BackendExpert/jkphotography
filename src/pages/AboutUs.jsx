import React from 'react'
import myImg from '../assets/MyImg.jpg'

const AboutUs = () => {
  return (
    <div className='pt-44 text-center'>
        <center><img src={myImg} alt="" className='h-60 w-auto rounded-full shadow-xl'/></center>

        <div className="mt-8">
            <h1 className="">Jehan Weerasuriya</h1>
            <p className="">Owner at JehanKandy Photography</p>
            <p className="">South Asian First CSS Framework and GitPlatform</p>
        </div>
    </div>
  )
}

export default AboutUs
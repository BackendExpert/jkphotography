import React from 'react'
import myImg from '../assets/MyImg.jpg'

const AboutUs = () => {
  return (
    <div className='pt-44 text-center mx-32'>
        <center><img src={myImg} alt="" className='h-60 w-auto rounded-full shadow-xl'/></center>

        <div className="mt-8">
            <h1 className="text-2xl font-semibold text-gray-800">Jehan Weerasuriya</h1>

            <p className="py-4 -rotate-6 sign-font text-2xl font-bold">Jehan Weerasuriya</p>

            <p className="">Owner at JehanKandy Photography</p>
            <p className="">Founder and CEO at South Asian First CSS Framework and GitPlatform</p>
            <p className="">Fullstack, NPM, VsCode Extension Developer</p>
        </div>


        <div className="my-8">
          <h1 className="uppercase font-semibold py-4 text-xl">About Me</h1>
          <p className="">
            Hi there! I’m Jehan Weerasuriya, a street photographer with a passion for uncovering the unseen stories hidden within the urban landscapes. My journey into photography began years ago when I first picked up a camera and started capturing my surroundings. Over time, I found my true calling in the vibrant and raw world of street photography. My mission is simple: to capture moments that often go unnoticed and to showcase the beauty, grit, and spirit of everyday life.
          </p>
        </div>
    </div>
  )
}

export default AboutUs
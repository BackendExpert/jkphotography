import React from 'react'
import myImg from '../assets/MyImg.jpg'

const AboutUs = () => {
  return (
    <div className='pt-44 text-center md:mx-32 mx-4'>
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

        <div className="my-8">
          <h1 className="uppercase font-semibold py-4 text-xl">My Philosophy</h1>
          <p className="">
            Photography, to me, is more than just an art form—it’s a way of connecting with the world. I believe that every street has a story, every face holds a lifetime of experiences, and every shadow and beam of light is part of a larger narrative. Through my lens, I aim to reveal these hidden layers of our shared urban spaces. I want my images to invite viewers to pause, reflect, and perhaps see something familiar from an entirely new perspective.
          </p>
        </div>


        <div className="my-8">
          <h1 className="uppercase font-semibold py-4 text-xl">The Streets as My Canvas</h1>
          <p className="">
            The city streets are alive with characters, textures, and moments of spontaneity. I’m constantly inspired by the dynamic interplay of light and shadows, the bold and subtle interactions of strangers, and the small, often overlooked details that make each neighborhood unique. My approach is to blend into the background, observe quietly, and capture scenes that are authentic, unscripted, and bursting with life.
          </p>
        </div>

        <div className="my-8">
          <h1 className="uppercase font-semibold py-4 text-xl">What I Hope to Share with You</h1>
          <p className="">
          In my work, you’ll find a blend of mystery, emotion, and the unpredictable energy that defines street photography. My images often explore themes of solitude and connection, individuality and community, humor and honesty. I want my photographs to be more than just pictures—I want them to be windows into the human experience. I hope they inspire you to look at your own surroundings with fresh eyes and to see the beauty in the ordinary.
          </p>
        </div>


        <div className="my-8">
          <h1 className="uppercase font-semibold py-4 text-xl">Behind the Camera</h1>
          <p className="">
          When I’m not roaming the streets with my camera, I’m constantly working on honing my skills, studying the greats, and learning new techniques to bring my work to life. Photography has introduced me to incredible people and unforgettable moments, and it continues to be an endless journey of discovery. I’m grateful to be able to share this journey with you, and I hope my work speaks to you in a meaningful way.
          </p>
        </div>

        <div className="my-8">
          <h1 className="uppercase font-semibold py-4 text-xl">Get in Touch</h1>
          <p className="">
          Whether you’re interested in collaborating, have a project in mind, or simply want to chat about street photography, I’d love to hear from you. Let’s connect and create something memorable together.
          </p>
        </div>

    </div>
  )
}

export default AboutUs
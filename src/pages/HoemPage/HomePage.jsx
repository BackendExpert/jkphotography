import React from 'react'
import HomeImg from '../../assets/HomeHero.jpg'

const HomePage = () => {

  return (
    <div className="relative bg-cover bg-center min-h-screen p-8" style={{ backgroundImage: `url(${HomeImg})` }}>
      <div className="absolute inset-0 bg-black opacity-70"></div> 
      <div className="relative z-10 text-white my-8"> 
        <div className="text-center md:pt-[15%] pt-[30%]">
          <h1 className="logo-font font-semibold text-3xl tracking-[1rem]">JehanKandy</h1>
          <p className="uppercase py-2 font-semibold tracking-[1rem]">Photography</p>
          <center><hr className='w-1/2 my-4'/></center>
          <p className="md:mx-44">
            Dive into the raw beauty of everyday life through my street photography. Every image captures real, unfiltered moments—the people, the places, the stories that make each city unique.
          </p>

          <button className='bg-transparent border-2 boder-white py-4 my-4 rounded-full px-8 duration-500 hover:bg-white hover:text-gray-900'>
            Explore the Streets
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
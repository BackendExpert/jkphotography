import React from 'react'
import HomeImg from '../../assets/HomeHero.jpg'

const HomePage = () => {

  return (
    <div className="relative bg-cover bg-center min-h-screen p-8 rounded-md shadow-md" style={{ backgroundImage: `url(${HomeImg})` }}>
      <div className="absolute inset-0 bg-black opacity-80 rounded-md"></div> 
      <div className="relative z-10 text-white my-8"> 
          <h1 className="md:text-5xl text-3xl">Welcome to</h1>
          <p className="">Our Site</p>

          <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem possimus aspernatur facere minus, at distinctio officia natus aut, voluptatum error itaque impedit amet! Obcaecati fuga temporibus voluptatibus soluta porro.
          </p>
      </div>
    </div>
  )
}

export default HomePage
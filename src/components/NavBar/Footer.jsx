import React from 'react'
import FooterImg from '../../assets/FooterImg.jpg'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="">
        <div className="relative bg-cover bg-center h-auto p-8" style={{ backgroundImage: `url(${FooterImg})` }}>
          <div className="absolute inset-0 bg-black opacity-80"></div> 
          <div className="relative z-10 text-white mt-8"> 
              <div className="md:grid grid-cols-3 gap-4">
                  <div className="text-center ">
                    <h1 className="text-2xl">
                      <span className='logo-font'>JehanKandy</span>
                      <span className='uppercase font-semibold'> photography</span>
                    </h1>

                    <p className="py-4 -rotate-6 sign-font text-2xl font-bold">Jehan Weerasuriya</p>
                  </div>

                  <div className="text-center md:my-0 my-8">
                    <h1 className="">
                    My photography is a celebration of everyday life through authentic, unscripted moments captured on the streets. I seek to uncover the beauty, character, and stories often hidden within urban landscapes. Each shot invites viewers to pause, reflect, and see the familiar in a new light. My work explores themes of connection, solitude, and the raw energy of city life. Through my lens, I aim to reveal the extraordinary within the ordinary.
                    </h1>
                  </div>

                  <div className="mx-16">
                    <div className="">
                      <h1 className="py-2">jehankandy@gmail.com</h1>
                      <h1 className="py-2">+94 711758851</h1>
                    </div>
                  </div>
              </div>

              <div className="md:mx-32 mx-2 mt-24">
                <div className="md:flex justify-between">
                  <p className="">
                    &copy; {currentYear} | JehanKandyPhotography | Developed and Maintained by <a href="https://www.linkedin.com/in/jehanweerasuriya/" target='_blank' className='text-blue-500'>JehanKandy</a> | Allrights reserved
                  </p>

                  <p className=""><a href="TermsPrivacyPolicy">Privacy Policy | Terms of Service</a></p>
                </div>
              </div>

          </div>
        </div>
    </div>
    
  )
}

export default Footer
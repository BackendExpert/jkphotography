import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navData = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About Us', link: '/AboutUs' },
        { id: 3, name: 'Album', link: 'Album' },
        { id: 4, name: 'Contact Us', link: 'ContactUs' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const HomePageNavBar = location.pathname === '/';

    return (
        <div className={`h-auto py-8 px-6 ${HomePageNavBar ? 'bg-transparent text-white' : 'bg-white shadow-md text-gray-900'} `}>
            <div className="flex justify-between items-center">
                <div className="">
                    <h1 className=""><span className='logo-font'>JehanKandy</span> <span className='uppercase text-sm font-semibold'>Photography</span></h1>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMobileMenu}>
                        <BsList size={24} />
                    </button>
                </div>

                <div className="hidden md:flex space-x-6">
                    {navData.map((data) => (
                        <a href={data.link} key={data.id} className="block duration-500 hover:underline font-bold">
                            {data.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-0 left-0 w-full h-screen  mt-24 backdrop-blur-lg bg-white/30 shadow-md transition-transform duration-300 ease-in-out transform ${
                    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } md:hidden`}
            >
                <div className="py-4">
                    {navData.map((data) => (
                        <a href={data.link} key={data.id} className="block py-2 px-4 ">
                            {data.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
import { Plus, Tally3Icon } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

function Navbar() {
  const navbar = [
    { name: "Home", to: "/" },
    {
      name: "Menu", to: "/menu/pizza", dropdown: [
        { name: "pizza", to: "/menu/pizza" },
        { name: "burger", to: "/menu/burger" },
        { name: "sandwich", to: "/menu/sandwich" },
        { name: "pasta", to: "/menu/pasta" },
        { name: "shakes", to: "/menu/shakes" },
        { name: "fries & side's", to: "/menu/fries-sides" },
        { name: "bread", to: "/menu/bread" },
        { name: "wraps", to: "/menu/wraps" },
        { name: "mini range", to: "/menu/mini-range" },
      ]
    },
    { name: "Partner with us", to: "/partner-with-us" },
    { name: "Job Vacancy", to: "/job-vacancy" },
    { name: "Contact Us", to: "/contact-us" },
    { name: "Blog", to: "/blog" },
  ];

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className='w-full flex items-center justify-center py-4 sticky top-0 z-10 bg-[url("https://hungrypoint.in/img/bc.webp")]'>
      <div className='w-4/5 grid grid-cols-3 container mx-auto'>
        {/* Logo */}
        <Link to={'/'} className='w-40 flex items-center justify-start col-span-2 xl:col-span-1'>
          <img
            src='https://hungrypoint.in/img/HPLOGO.png'
            alt='Hungry Point Logo'
            className='object-cover max-w-40 w-24'
            loading='lazy'
          />
        </Link>

        {/* Desktop Navbar */}
        <div className='hidden xl:flex xl:items-center xl:justify-center col-span-2'>
          <nav className='w-full flex items-center justify-center'>
            <ul className='w-full flex gap-2 items-center justify-evenly'>
              {navbar.map((elem, index) => (
                <li key={index} className='relative group'>
                  <a
                    href={elem.to}
                    className='uppercase text-white text-base font-semibold hover:border-b hover:transition hover:duration-300 hover:ease-in-out hover:text-yellow-400 hover:border-amber-500'
                  >
                    {elem.name}
                  </a>

                  {/* Dropdown for Menu */}
                  {elem.dropdown && (
                    <div className="absolute left-0 w-48 mt-2 bg-gray-800 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ul className="py-2">
                        {elem.dropdown.map((dropdownItem) => (
                          <li key={dropdownItem.name} className="uppercase">
                            <a
                              href={dropdownItem.to}
                              className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-500"
                            >
                              {dropdownItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Hamburger Button */}
        <div className='relative flex items-center justify-end xl:hidden'>
          <div
            className="absolute h-[60px] w-[60px] top-0 right-[3%] z-[999999] cursor-pointer rounded-[50%] transition-all duration-200 ease-in-out bg-[rgba(255,255,255,0.2)] transform scale(1.2) shadow"
            id="icon"
            onClick={handleToggle}
          >
            {/* Icon parts */}
            <div
              className={`absolute left-1/4 top-1/2 h-[3px] w-8 bg-black transition-all duration-500 transform -translate-y-2 delay-100 ${toggle ? 'rotate-45 translate-y-2' : ''}`}
              id="a"
            ></div>
            <div
              className={`absolute left-1/4 top-1/2 h-[3px] w-8 bg-black transition-all duration-500 ${toggle ? 'opacity-0' : ''}`}
              id="b"
            ></div>
            <div
              className={`absolute left-1/4 top-1/2 h-[3px] w-8 bg-black transition-all duration-500 transform translate-y-2 delay-300 ${toggle ? '-rotate-45 translate-y-2' : ''}`}
              id="c"
            ></div>
            <div className="clear-both"></div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {toggle && (
          <nav
            className={`absolute top-26 left-0 z-10 transition-all duration-300 ${toggle ? 'w-2/5 opacity-100' : 'w-0 opacity-0'}`}
            id="nav"
          >
            <ul className={`w-full flex-col items-center justify-center space-y-5 ${toggle ? 'flex' : 'hidden'}`}>
              {navbar.map((elem, index) => (
                <li key={index} className="text-white">
                  <a href={elem.to} className="block px-4 py-2">
                    {elem.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/*  background that covers screen width */}
        <div
          className={`absolute top-24 left-0 bg-[url("https://hungrypoint.in/img/bc.webp")] h-screen transition-all duration-700 z-[5] ${toggle ? 'w-3/5' : 'w-0'}`}
          id="blue"
        ></div>
      </div>
    </header>
  );
}

export default Navbar;

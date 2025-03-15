import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

function Footer() {

  const navcontent = [
    { name: "Job Vacancy", to: "/job-vacancy" },
    { name: "Partner with us", to: "/partner-with-us" },
    { name: "Refund Policy", to: "/refund-policy" },
    { name: "Privacy Policy", to: "/privacy-policy" },
    { name: "Terms & Conditions", to: "/terms-and-conditions" },
    { name: "Blog", to: "/blog" },
  ];

  const icons = [
    { icon: <FacebookIcon />, to: "/", fallback: "fb" },
    { icon: <InstagramIcon />, to: "/", fallback: "instagram" },
    { icon: <YoutubeIcon />, to: "/", fallback: "youtube" },
    { icon: <TwitterIcon />, to: "/", fallback: "twitter" },
  ];

  return (
    <LazyLoadComponent>
      <section className='w-full flex items-center justify-center bg-[url("https://hungrypoint.in/img/bc.webp")] py-5'>
        <footer className='w-4/5 flex items-center justify-center mx-auto container'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <img src='https://hungrypoint.in/img/HPLOGO.png'
                alt='https://hungrypoint.in/img/HPLOGO.png'
                loading='lazy'
                className='object-center'
              />
              <div className='w-full flex flex-col items-start justify-center'>
                <h2 className='text-white text-xs'>Copyright © 2023 The Hungry Point . All rights reserved</h2>
                <p className='text-white text-xs'>Made with 💖 by <span className='underline'>Suraj Kumar</span></p>
              </div>
            </div>

            <div className='flex items-center justify-center'>
              <nav className='w-full flex items-center justify-center'>
                <ul className='w-full flex flex-col lg:items-end items-center justify-center space-y-3'>
                  {navcontent && navcontent.length > 0 && navcontent.map((elem, index) => (
                    <Link
                      key={index}
                      to={elem.to}
                    >
                      <li className='text-white uppercase text-base transition-all transform ease-in duration-150 hover:text-red-500 hover:scale-110'>{elem.name}</li>
                    </Link>
                  ))}
                </ul>
              </nav>
            </div>

            <div className='w-full flex items-center lg:justify-end justify-center'>
              <img
                src='https://hungrypoint.in/img/Offer_Dish-2.webp'
                alt='https://hungrypoint.in/img/Offer_Dish-2.webp'
                loading='lazy'
                className='object-cover w-[150px] h-[150px] absolute z-10'
              />
              <img
                src='https://hungrypoint.in/img/Footer_Vert_Patch.webp'
                className=' object-cover top-0 h-[300px] w-[150px] rotate-90 lg:rotate-0'
              />
            </div>

            <div className='w-full flex flex-row lg:flex-col lg:items-end items-center justify-center gap-5'>
              {icons && icons.length > 0 && icons.map((elem, index) => (
                <div
                  key={index}
                  className='flex items-center justify-center rounded-full text-white bg-red-500 p-1 transition transform ease-in-out duration-200 hover:scale-150'>
                  <div className='flex items-center justify-center'>{elem.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </section>
    </LazyLoadComponent>
  )
}

export default Footer
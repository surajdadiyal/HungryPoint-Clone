import React from 'react'
import { menuitems } from '../db/menuitems';
import { Separator } from '../components/ui/separator';
import { Card } from '../components/ui/card';
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';

function mini() {
    return (
        <LazyLoadComponent>
            <section className='w-full flex items-center justify-center bg-[#fde7c4]'>
                <div className='w-4/5 flex flex-col items-center justify-center py-5 mx-auto container'>

                    <div
                        data-aos="fade-down"
                        data-aos-duration="700"
                        className='w-full flex items-center justify-center border bg-[#fbb03b] p-5 rounded-md'
                    >
                        <div className='w-full flex flex-col items-center justify-center space-y-5'>
                            <h2 className='text-xl md:text-4xl font-medium text-center'>Download The App For <br /> Seamless Experience</h2>
                            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5'>
                                <LazyLoadImage
                                    src='https://hungrypoint.in/img/google-play-img.webp'
                                    alt='https://hungrypoint.in/img/google-play-img.webp'
                                    loading='lazy'
                                    className='object-cover w-40'
                                    effect="blur"
                                    wrapperProps={{
                                        style: { transitionDelay: "1s" },
                                    }}
                                />
                                <LazyLoadImage
                                    src='https://hungrypoint.in/img/app-store-img.webp'
                                    alt='https://hungrypoint.in/img/app-store-img.webp'
                                    loading='lazy'
                                    className='object-cover w-40'
                                    effect="blur"
                                    wrapperProps={{
                                        style: { transitionDelay: "1s" },
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex items-center justify-center py-5'>
                        <ul className='w-full flex flex-col items-center justify-center'>
                            {menuitems && menuitems.length > 0 && menuitems.map(({ heading, data, type }, index) => {
                                const category = type === "mini";
                                return category && (
                                    <li key={index} className='space-y-5'>
                                        <h2
                                            data-aos="fade-up"
                                            data-aos-duration="700"
                                            className='text-3xl'
                                        >
                                            {heading}
                                        </h2>
                                        <Separator className="border border-yellow-700" />
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5'>

                                            {data.map(({ name, price, image, description }, index) => (
                                                <Card
                                                    key={index}
                                                    className='py-2 shadow-xl hover:scale-105 hover:border-2 hover:border-t-orange-400 hover:border-r-yellow-400 hover:border-b-amber-400 hover:border-l-red-400 transition-all transform ease-in duration-300'
                                                    data-aos="zoom-in-up"
                                                    data-aos-duration="1000"
                                                >
                                                    <div className='w-full flex items-center justify-center gap-5'>
                                                        <div className='w-1/4 flex flex-col items-center justify-center'>
                                                            <div className='rounded-full border border-red-400 p-2'>
                                                                <LazyLoadImage
                                                                    src={image}
                                                                    alt={image}
                                                                    className='aspect-square rounded-full'
                                                                    loading='lazy'
                                                                    effect="blur"
                                                                    wrapperProps={{
                                                                        style: { transitionDelay: "1s" },
                                                                    }}
                                                                />
                                                            </div>
                                                            <span className='text-xl font-semibold mt-5'>{price}</span>
                                                        </div>
                                                        <div className='w-3/5 flex flex-col items-center justify-center'>
                                                            <div className='flex flex-col items-start justify-center space-y-2.5'>
                                                                <h2 className='text-xl font-semibold'>{name}</h2>
                                                                <p className='text-xs'>{description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card>
                                            ))}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </section>
        </LazyLoadComponent>
    )
}

export default mini
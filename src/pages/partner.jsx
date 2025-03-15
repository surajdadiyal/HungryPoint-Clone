import React from 'react'
import { Button } from '../components/ui/button'
import { Textarea } from '../components/ui/textarea'
import { Input } from '../components/ui/input'
import { partner } from '../db/partner'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

function PartnerWithUs() {
    return (
        <LazyLoadComponent>
            <section className='bg-[#fde7c4] w-full flex items-center justify-center'>
                <div className='w-4/5 flex flex-col items-center justify-center py-14 relative mx-auto container'>
                    <div className='w-full flex flex-col items-start justify-center space-y-5 pb-5'>
                        <h2
                            data-aos="fade-up"
                            data-aos-duration="700"
                            className='text-5xl font-semibold'
                        >
                            Partner With Us : Join the Hungry Point Family
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="200"
                            className='text-base font-medium'
                        >
                            At Hungry Point, we believe that great success is achieved through strong partnerships and collaborations. We invite like-minded individuals and businesses to join us on our culinary journey and become a part of the Hungry Point family. Whether you're an aspiring entrepreneur, an existing food outlet owner, or a seasoned investor looking to venture into the food industry, partnering with us offers a host of exciting opportunities.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div className='flex items-center justify-center'>
                            <ul className='flex flex-col items-start justify-center'>
                                {partner && partner.length > 0 && partner.map(({ id, heading, desc }, index) => (
                                    <li
                                        key={index}
                                        className='space-y-3'
                                    >
                                        <h2
                                            className='text-xl font-semibold'
                                            data-aos="fade-up"
                                            data-aos-duration="700"
                                        >
                                            {id}.{" "}{heading}
                                        </h2>
                                        {" "}
                                        <p
                                            data-aos="fade-up"
                                            data-aos-duration="700"
                                            data-aos-delay="200"
                                            className='text-base font-normal pb-3'
                                        >
                                            {desc}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='w-full flex items-start justify-center py-5'>
                            <form
                                data-aos="fade-up"
                                data-aos-duration="700"
                                className='w-full grid md:grid-cols-1 lg:grid-cols-2 gap-5'
                            >
                                <Input
                                    className="w-full bg-white col-span-2 lg:col-span-1"
                                    type="text"
                                    placeholder="FIRST NAME"
                                />
                                <Input
                                    className="w-full bg-white col-span-2 lg:col-span-1"
                                    type="text"
                                    placeholder="LAST NAME"
                                />
                                <Input
                                    className="w-full bg-white col-span-2 lg:col-span-1"
                                    type="number"
                                    placeholder="+01-23456789"
                                />
                                <Input
                                    className="w-full bg-white col-span-2 lg:col-span-1"
                                    type="email"
                                    placeholder="example@gmail.com"
                                />
                                <Input
                                    className="w-full bg-white col-span-2 lg:col-span-1"
                                    type="text"
                                    placeholder="YOUR CITY NAME"
                                />
                                <Input
                                    className="w-full bg-white col-span-2 lg:col-span-1"
                                    type="text"
                                    placeholder="YOUR STATE NAME"
                                />
                                <Textarea
                                    className="bg-white w-full col-span-2 shadow-md"
                                    placeholder="TYPE YOUR MESSAGE"
                                />
                                <Button className="col-span-2">SUBMIT</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </LazyLoadComponent>
    )
}

export default PartnerWithUs
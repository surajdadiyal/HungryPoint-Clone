import React from 'react'
import { refund } from '../db/refund'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

function RefundPolicy() {
    return (
        <LazyLoadComponent>
            <section className='bg-[#fde7c4] w-full flex items-center justify-center'>
                <div className='w-4/5 flex flex-col items-center justify-center py-14 relative mx-auto container'>
                    <div className='w-full flex items-center justify-start'>
                        <h2
                            data-aos="fade-up"
                            data-aos-duration="700"
                            className='text-5xl font-semibold'
                        >
                            Hungry Point - Refund Policy
                        </h2>
                    </div>
                    <div className='flex items-center justify-center'>
                        <ul className='flex flex-col items-center justify-center py-5'>
                            {refund && refund.length > 0 && refund.map((elem, index) => (
                                <li
                                    key={index}
                                    className='w-full space-y-5'
                                >
                                    <h2
                                        data-aos="fade-right"
                                        data-aos-duration="700"
                                        className='text-xl font-medium uppercase'
                                    >
                                        {elem.heading}
                                    </h2>
                                    <h5
                                        data-aos="zoom-out"
                                        data-aos-duration="1000"
                                        data-delay-aos="300"
                                        className='text-base pb-5'
                                    >
                                        {elem.name}
                                    </h5>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </LazyLoadComponent>
    )
}

export default RefundPolicy
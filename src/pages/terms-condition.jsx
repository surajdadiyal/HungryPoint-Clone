import React from 'react'
import { terms } from '../db/terms'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

function TermsConditions() {
    return (
        <LazyLoadComponent>
            <section className='w-full flex items-center justify-center bg-[#fde7c4]'>
                <div className='w-4/5 flex flex-col items-center justify-center py-5 mx-auto container'>
                    <div className='w-full flex items-center justify-start'>
                        <h2
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="1000"
                            className='text-5xl font-semibold'
                        >
                            Terms and Conditions
                        </h2>
                    </div>

                    <div className='flex items-center justify-center py-5'>
                        <ul className='flex flex-col items-center justify-center'>
                            {terms && terms.length > 0 && terms.map(({ name, description, heading }, index) => (
                                <div
                                    key={index}
                                    className='w-full space-y-3'
                                >
                                    <h2
                                        data-aos="fade-up"
                                        data-aos-duration="700"
                                        className='text-xl font-medium uppercase'
                                    >
                                        {heading}
                                    </h2>
                                    <h5
                                        data-aos="fade-up"
                                        data-aos-duration="700"
                                        className='text-base'
                                    >
                                        {name}
                                    </h5>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="700"
                                        className='text-base pb-5'
                                    >
                                        {description}
                                    </p>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </LazyLoadComponent>
    )
}

export default TermsConditions
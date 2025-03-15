import React from 'react'
import { privacy } from '../db/privacy'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

function PrivacyPolicy() {
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
                            Privacy Policy
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="1000"
                            className='text-base font-medium'
                        >
                            At Hungry Point, we value your privacy. This Privacy Policy outlines how we handle your information and governs your use of our services.
                        </p>
                    </div>

                    <div>
                        <ul>
                            {privacy && privacy.length > 0 && privacy.map(({ title, description, list, quote }, index) => (
                                <li key={index} className='space-y-3'>
                                    <h2
                                        data-aos="fade-up"
                                        data-aos-duration="700"
                                        data-aos-delay="1000"
                                        className='text-xl font-medium'
                                    >
                                        {title}
                                    </h2>
                                    <h4
                                        data-aos="fade-up"
                                        data-aos-duration="700"
                                        data-aos-delay="1000"
                                        className='text-base'
                                    >
                                        {description}
                                    </h4>
                                    <ul className='flex flex-col items-start justify-center px-5'>
                                        {list && list.length > 0 && list.map((elem, index) => (
                                            <li
                                                key={index}
                                                className='list-disc'
                                                data-aos="fade-up"
                                                data-aos-duration="1000"
                                                data-aos-delay="2000"
                                            >
                                                {elem}
                                            </li>
                                        ))}
                                    </ul>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay="1000"
                                        className='text-base pb-3'>{quote}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </LazyLoadComponent>
    )
}

export default PrivacyPolicy
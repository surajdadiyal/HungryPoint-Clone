import React from 'react'
import { FaPhoneVolume } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'
import { TfiEmail } from 'react-icons/tfi'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'

function Contact() {
    return (
        <LazyLoadComponent>
            <section className='bg-[#fde7c4] w-full flex items-center justify-center'>
                <div className='w-4/5 flex flex-col items-center justify-center py-14 relative mx-auto container'>
                    <div className='w-full flex items-center justify-center'>
                        <h2
                            data-aos="fade-up"
                            data-aos-duration="700"
                            className='text-blue-900 text-xl md:text-4xl lg:text-5xl font-bold md:font-semibold'
                        >
                            We Would Love To Hear From You
                        </h2>
                    </div>

                    <div className='w-full flex items-center justify-center py-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            <Card
                                data-aos="zoom-in"
                                data-aos-duration="700"
                                className="bg-orange-400/60 flex items-center justify-center"
                            >
                                <IoLocationOutline className='w-10 h-10' />
                                <CardHeader>
                                    <CardTitle>
                                        <h2 className='text-2xl font-medium uppercase'>
                                            Address
                                        </h2>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className='text-center text-base font-medium text-muted-foreground'>
                                        Hungry Point
                                        Shop No. 41, Ground Floor, City center
                                        Near bus stand, Hoshiarpur
                                        Punjab, India
                                    </p>
                                </CardContent>
                            </Card>

                            <Card
                                data-aos="zoom-in"
                                data-aos-duration="700"
                                className="bg-orange-400/60 flex items-center justify-center"
                            >
                                <TfiEmail className='w-10 h-10' />
                                <CardHeader>
                                    <CardTitle>
                                        <h2 className='text-2xl font-medium uppercase'>
                                            Email
                                        </h2>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className='text-center text-base font-medium text-muted-foreground'>
                                        contact@hungrypoint.in
                                    </p>
                                </CardContent>
                            </Card>

                            <Card
                                data-aos="zoom-in"
                                data-aos-duration="700"
                                className="bg-orange-400/60 flex items-center justify-center md:col-span-2 lg:col-auto"
                            >
                                <FaPhoneVolume className='w-10 h-10' />
                                <CardHeader>
                                    <CardTitle>
                                        <h2 className='text-2xl font-medium uppercase'>
                                            Phone
                                        </h2>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className='text-center text-base font-medium text-muted-foreground'>
                                        +91 77101 07713
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className='w-full flex items-center justify-center relative'>
                        <img
                            src='https://hungrypoint.in/img/Leaf-1.webp'
                            alt='https://hungrypoint.in/img/Leaf-1.webp'
                            className='object-cover w-16 xl:w-20 absolute right-10 md:right-48 lg:right-80 xl:right-[500px] mushroom'
                            loading='lazy'
                        />
                        <div className='flex items-center justify-center'>
                            <h2
                                data-aos="fade-up"
                                data-aos-duration="700"
                                className='text-4xl font-semibold text-center'>Contact</h2>
                        </div>
                    </div>

                    <div
                        className='w-full'
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-delay="500"
                    >
                        <form className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-8 place-content-center'>
                            <Input
                                type="text"
                                className="bg-white"
                                placeholder="FIRST NAME"
                            />
                            <Input
                                type="text"
                                className="bg-white"
                                placeholder="LAST NAME"
                            />
                            <Input
                                type="number"
                                className="bg-white"
                                placeholder="CONTACT NUMBER"
                            />
                            <Input
                                type="email"
                                className="bg-white"
                                placeholder="EMAIL ID"
                            />
                            <Textarea
                                className="bg-white col-span-2"
                                placeholder="ENTER YOUR MESSAGE"
                            />
                            <Button className="w-full">SUBMIT</Button>
                        </form>
                    </div>
                </div>
            </section>
        </LazyLoadComponent>
    )
}

export default Contact
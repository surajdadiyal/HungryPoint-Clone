import { ArrowBigRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import homedata from '../db/homedata'
import { Skeleton } from '../components/ui/skeleton'
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component'

function Home() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer)
    }, []);

    return (
        <LazyLoadComponent>
            <section className='w-full flex items-center justify-center'>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-full relative'>
                        <LazyLoadImage
                            src='https://hungrypoint.in/img/Main-Banner-New1.webp'
                            alt='https://hungrypoint.in/img/Main-Banner-New1.webp'
                            className='object-cover w-full h-[450px] md:h-auto'
                            fetchPriority='high'
                            effect='blur'
                            wrapperProps={{
                                style: { transitionDelay: "1s" }
                            }}
                        />
                    </div>
                    <div className='absolute w-4/5 mx-auto container'>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="1000"
                            className='flex flex-col items-start justify-center space-y-7'
                        >
                            <h2 className='text-4xl font-extrabold text-[#404041]'>HUNGRY POINT</h2>
                            <span className='text-lg text-[#404041]'>Pizza, Burger & Snack's..</span>
                            <Button
                                className={'rounded-full bg-white text-center text-base font-semibold w-64 md:w-md'}
                                variant={'link'}
                                to='/find-us'
                            >
                                Search Outlets
                            </Button>
                            <h3 className='text-lg font-semibold'>Download the app for seamless experience</h3>
                            <Button
                                variant={'ghost'}
                                className={'rounded-full bg-blue-900 text-white w-52 hover:transition hover:duration-500 hover:ease-in'}
                            >
                                Download Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full flex items-center justify-center py-5'>
                <div className='w-4/5 flex items-center justify-between relative mx-auto container'>
                    <img
                        src='https://hungrypoint.in/img/Leaf-1.webp'
                        alt='https://hungrypoint.in/img/Leaf-1.webp'
                        className='object-cover w-20 leaf overflow-hidden absolute'
                        loading='lazy'
                    />
                    <img
                        src='https://hungrypoint.in/img/Tomato-1.webp'
                        alt='https://hungrypoint.in/img/Tomato-1.webp'
                        className='object-cover w-20 leaf overflow-hidden absolute right-0'
                        loading='lazy'
                    />
                </div>
            </section>

            <section className='w-full flex items-center justify-center py-5'>
                <div className='w-4/5 flex flex-col items-center justify-center xl:flex-row gap-5 mx-auto container'>
                    <div className='w-full flex items-center justify-center'>
                        <div
                            className='w-full flex items-center justify-center bg-[url("https://hungrypoint.in/img/bc.webp")] bg-cover rounded-md mx-auto'
                            data-aos="fade-up"
                            data-aos-duration="700"
                        >
                            <div className='w-full flex flex-col md:flex-row space-x-5 px-5 py-8'>
                                <div className='w-full md:w-1/2'>
                                    <LazyLoadImage
                                        src='https://hungrypoint.in/img/HPLOGO.png'
                                        alt='https://hungrypoint.in/img/HPLOGO.png'
                                        className='object-cover'
                                        loading='lazy'
                                        effect='blur'
                                        wrapperProps={{
                                            style: { transitionDelay: "1s" }
                                        }}
                                    />
                                </div>
                                <div className='w-full md:w-1/2 flex flex-col items-center justify-center bg-[url("https://hungrypoint.in/img/Confetti.webp")] bg-cover space-y-3'>
                                    <span className='text-5xl font-bold text-yellow-400'>200+</span>
                                    <span className='text-5xl font-bold text-yellow-400'>Outlets</span>
                                    <Button
                                        variant={'link'}
                                        className={'w-4/5 rounded-full bg-yellow-400'}
                                    >
                                        PARTNER WITH US <ArrowBigRight />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex items-center justify-center'>
                        <div
                            className='w-full flex items-center justify-center bg-[url("https://hungrypoint.in/img/bc.webp")] bg-cover rounded-md mx-auto'
                            data-aos="fade-up"
                            data-aos-duration="700"
                        >
                            <div className='w-full flex flex-col md:flex-row space-x-5 px-5 py-8'>
                                <div className='w-full md:w-1/2'>
                                    <LazyLoadImage
                                        src='https://hungrypoint.in/img/HPLOGO.png'
                                        alt='https://hungrypoint.in/img/HPLOGO.png'
                                        className='object-cover'
                                        loading='lazy'
                                        effect='blur'
                                        wrapperProps={{
                                            style: { transitionDelay: "1s" }
                                        }}
                                    />
                                </div>
                                <div className='w-full md:w-1/2 flex flex-col items-center justify-center bg-[url("https://hungrypoint.in/img/Confetti.webp")] bg-cover space-y-3'>
                                    <span className='text-5xl font-bold text-yellow-400'>200+</span>
                                    <span className='text-5xl font-bold text-yellow-400'>Outlets</span>
                                    <Button
                                        variant={'link'}
                                        className={'w-4/5 rounded-full bg-yellow-400'}
                                    >
                                        PARTNER WITH US <ArrowBigRight />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full flex items-center justify-center py-5'>
                <div className='w-4/5 flex flex-col items-center justify-center relative mx-auto container'>
                    <div className='w-full flex items-center justify-center'>
                        <img
                            src='https://hungrypoint.in/img/Leaf-1.webp'
                            alt='https://hungrypoint.in/img/Leaf-1.webp'
                            className='object-cover w-16 xl:w-20 absolute overflow-hidden top-0 md:right-48 xl:right-96 leaf'
                            loading='lazy'
                        />
                        <img
                            src='https://hungrypoint.in/img/Mashroom-1.webp'
                            alt='https://hungrypoint.in/img/Mashroom-1.webp'
                            className='object-cover w-16 xl:w-20 absolute overflow-hidden top-0 right-0 mushroom'
                            loading='lazy'
                        />
                        <div className='w-full flex items-center justify-center'>
                            <h2
                                data-aos="fade-up"
                                data-aos-duration="700"
                                className='text-4xl font-semibold text-blue-900 text-center'>Our Story</h2>
                        </div>
                    </div>

                    <div className='w-full grid xl:grid-cols-2 py-10'>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="700"
                            className='w-full flex relative items-center justify-center'
                        >
                            <LazyLoadImage
                                src='https://hungrypoint.in/img/Our_Story-Icons.webp'
                                alt='https://hungrypoint.in/img/Our_Story-Icons.webp'
                                className='object-fit w-full max-w-[560px]'
                                loading='lazy'
                                effect='blur'
                                wrapperProps={{
                                    style: { transitionDelay: "1s" }
                                }}
                            />
                            <div className='max-w-[400px] absolute w-[70%] aspect-square top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                                <img
                                    src='https://hungrypoint.in/img/Circular_Border.webp'
                                    alt='https://hungrypoint.in/img/Circular_Border.webp'
                                    className='object-cover aspect-square absolute top-0 left-0 w-full bg-[url("https://hungrypoint.in/img/Circular_Border.webp")] bg-no-repeat bg-cover'
                                    loading='lazy'
                                />
                                <LazyLoadImage
                                    src='https://hungrypoint.in/img/Our_Story_Dummy.webp'
                                    alt='https://hungrypoint.in/img/Our_Story_Dummy.webp'
                                    className='object-cover relative w-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                                    loading='lazy'
                                    effect='blur'
                                    wrapperProps={{
                                        style: { transitionDelay: "1s" }
                                    }}
                                />
                            </div>
                        </div>
                        <div className='w-full relative flex items-center justify-center'>
                            <div className='w-full flex items-center justify-center'>
                                <div className='w-full flex flex-col space-y-5'>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="700"
                                        className='text-base font-medium'
                                    >
                                        Welcome to Hungry Point, where our passion for delectable food and exceptional service has been the driving force behind our journey from humble beginnings to becoming a renowned food outlet brand across India. Our story began in June 2016 when two ambitious souls, Mr. Harpreet Singh and Mr. Hanish Vij, joined forces to create something extraordinary in the heart of Hoshiarpur.
                                    </p>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="700"
                                        className='text-base font-medium'
                                    >
                                        With over six years of collective experience in the multinational food industry, Mr. Harpreet Singh and Mr. Hanish Vij envisioned a place where food would not just satiate hunger but would also ignite a symphony of flavors in every bite. They dreamt of creating a culinary haven where people could indulge in scrumptious meals prepared with love, care, and the finest ingredients.
                                    </p>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="700"
                                        className='text-base font-medium'
                                    >
                                        The first Hungry Point outlet in Hoshiarpur quickly became a local favorite, captivating taste buds and hearts alike. As we expanded our offerings, the menu became a delightful tapestry of flavors, featuring a wide array of cuisines and some of the most famous food items in the world, ...
                                        <a href='#' className='text-blue-500 hover:underline'>Read More</a>
                                    </p>
                                </div>
                            </div>
                            <img
                                src="https://hungrypoint.in/img/Pizza_Construct.webp"
                                alt="https://hungrypoint.in/img/Pizza_Construct.webp"
                                className='object-cover absolute bottom-0 w-56 -z-10 opacity-50'
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full flex items-center justify-center py-5'>
                <div className='w-4/5 flex flex-col items-center justify-center mx-auto container'>
                    <div className='w-full flex items-center justify-center relative'>
                        <img
                            src='https://hungrypoint.in/img/Leaf-1.webp'
                            alt='https://hungrypoint.in/img/Leaf-1.webp'
                            className='object-cover w-16 xl:w-20 absolute top-0 right-0 md:left-36 lg:left-24 leaf'
                            loading='lazy'
                        />
                        <img
                            src='https://hungrypoint.in/img/Mashroom-1.webp'
                            alt='https://hungrypoint.in/img/Mashroom-1.webp'
                            className='object-cover w-16 xl:w-20 absolute top-0 left-0 mushroom'
                            loading='lazy'
                        />
                        <div className='w-full flex items-center justify-center'>
                            <h2
                                data-aos="fade-up"
                                data-aos-duration="700"
                                className='text-4xl font-semibold text-blue-900 text-center uppercase'
                            >
                                Trending Items
                            </h2>
                        </div>
                    </div>

                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-16'>
                        {loading ? (
                            Array.from({ length: homedata.length }).map((_, index) => (
                                <div
                                    key={index}
                                    className="shadow-xl"
                                >
                                    <div className='w-full flex items-center justify-center gap-5 p-12 bg-gray-200 rounded-lg'>
                                        <div className='w-1/3 flex flex-col items-center justify-between space-y-5 h-full'>
                                            <Skeleton className='rounded-full w-24 h-24 mx-auto' />
                                        </div>
                                        <div className='w-3/5 flex flex-col items-center justify-center'>
                                            <div className='flex flex-col items-start justify-center space-y-2.5'>
                                                <Skeleton className='w-32 h-6 mx-auto' />
                                                <Skeleton className='w-48 h-4 mx-auto' />
                                                <Skeleton className='w-24 h-6 mx-auto' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            homedata && homedata.length > 0 && homedata.map(({ name, image, description, price }, index) => {
                                return (
                                    <Card
                                        key={index}
                                        className='py-2 shadow-xl hover:scale-105 hover:border-2 hover:border-t-orange-400 hover:border-r-yellow-400 hover:border-b-amber-400 hover:border-l-red-400 transition-all transform ease-in duration-300'
                                        data-aos="zoom-in"
                                        data-aos-duration="700"
                                    >
                                        <div className='w-full flex items-center justify-center gap-5'>
                                            <div className='w-1/4 flex flex-col items-center justify-center'>
                                                <div className='w-full rounded-full border border-red-400 p-2'>
                                                    <LazyLoadImage
                                                        src={image}
                                                        alt={image}
                                                        className='aspect-square rounded-full'
                                                        loading='lazy'
                                                        effect='blur'
                                                        wrapperProps={{
                                                            style: { transitionDelay: "1s" }
                                                        }}
                                                    />
                                                </div>
                                                <span className='text-xl font-semibold mt-5'>{price}</span>
                                            </div>
                                            <div className='w-3/5 flex flex-col items-center justify-center'>
                                                <div className='w-full flex flex-col items-start justify-center space-y-2.5'>
                                                    <h2 className='text-xl font-semibold'>{name}</h2>
                                                    <p className='text-xs'>{description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                )
                            })
                        )}
                    </div>
                </div>
            </section>

            <section className='w-full flex items-center justify-center py-5'>
                <div className='w-4/5 flex flex-col items-center justify-center mx-auto container'>
                    <div className='w-full flex items-center justify-center relative'>
                        <img
                            src='https://hungrypoint.in/img/Leaf-1.webp'
                            alt='https://hungrypoint.in/img/Leaf-1.webp'
                            className='object-cover w-16 xl:w-20 absolute top-0 right-0 md:left-36 lg:left-24 leaf'
                            loading='lazy'
                        />
                        <img
                            src='https://hungrypoint.in/img/Mashroom-1.webp'
                            alt='https://hungrypoint.in/img/Mashroom-1.webp'
                            className='object-cover w-16 xl:w-20 absolute top-0 left-0 mushroom'
                            loading='lazy'
                        />
                        <div className='w-full flex items-center justify-center'>
                            <h2
                                data-aos="fade-up"
                                data-aos-duration="700"
                                className='text-4xl font-semibold text-blue-900 text-center uppercase'
                            >
                                Our Specialities
                            </h2>
                        </div>
                    </div>

                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5 py-16'>
                        <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3'>
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="700"
                                className='flex items-center justify-center'
                            >
                                <img
                                    src='https://hungrypoint.in/img/3.webp'
                                    alt='https://hungrypoint.in/img/3.webp'
                                    loading='lazy'
                                    className='object-cover'
                                />
                            </div>
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="700"
                                className='w-full flex items-center justify-center'
                            >
                                <img
                                    src='https://hungrypoint.in/img/2.webp'
                                    alt='https://hungrypoint.in/img/2.webp'
                                    loading='lazy'
                                    className='object-cover'
                                />
                            </div>
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="700"
                                className='w-full flex items-center justify-center'
                            >
                                <img
                                    src='https://hungrypoint.in/img/4.webp'
                                    alt='https://hungrypoint.in/img/4.webp'
                                    loading='lazy'
                                    className='object-cover'
                                />
                            </div>
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="700"
                                className='w-full flex items-center justify-center md:col-auto lg:col-start-2 col-end-3'
                            >
                                <img
                                    src='https://hungrypoint.in/img/1.webp'
                                    alt='https://hungrypoint.in/img/1.webp'
                                    loading='lazy'
                                    className='object-cover'
                                />
                            </div>
                        </div>
                        <div className='w-full flex flex-col items-center justify-center relative'>
                            <div className='w-full flex flex-col items-start justify-center '>
                                <h2
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                    className='text-xl font-medium mb-2'
                                >
                                    Savor the Extraordinary at Affordable Prices:-
                                </h2>
                                <p
                                    data-aos="zoom-out"
                                    data-aos-duration="700"
                                    className='text-sm font-medium mb-4'
                                >
                                    At Hungry Point, we believe that exceptional food doesn't have to come with a hefty price tag. Our speciality lies in offering awesome, mouthwatering dishes that delight your taste buds without breaking the bank. We take pride in curating a diverse menu of delectable treats that combine remarkable flavors with reasonable prices, ensuring that everyone can experience a culinary journey like no other.</p>

                                <h2
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                    className='text-xl font-medium mb-2'
                                >
                                    Pizza and Burgers Elevated to Perfection:-
                                </h2>
                                <p
                                    data-aos="zoom-out"
                                    data-aos-duration="700"
                                    className='text-sm font-medium mb-4'
                                >
                                    We've elevated the classic favorites, pizza, and burgers, to an art form. Our speciality is crafting these iconic dishes with an unwavering commitment to taste and quality. Each bite of our pizza boasts a symphony of flavors, from the perfect crust to the harmonious blend of toppings. Our burgers, meanwhile, are a masterpiece of juicy perfection, with every layer thoughtfully composed for a taste that's simply unforgettable.</p>

                                <h2
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                    className='text-xl font-medium mb-2'
                                >
                                    Global Flavors, Street Food Vibes:-
                                </h2>
                                <p
                                    data-aos="zoom-out"
                                    data-aos-duration="700"
                                    className='text-sm font-medium mb-4'
                                >
                                    Our culinary expertise transcends borders, bringing you the best of both worlds. Experience the vibrant energy of street food, priced just right, while savoring flavors that meet international standards. Our commitment to excellence extends beyond the taste to the very ambiance you dine in. Immerse yourself in an international setting that complements our delectable offerings, ensuring a dining experience that leaves an indelible mark</p>
                            </div>

                            <img
                                src="https://hungrypoint.in/img/Pizza_Construct.webp"
                                alt="https://hungrypoint.in/img/Pizza_Construct.webp"
                                className='object-cover absolute bottom-0 w-56 -z-10 opacity-50 flex items-center justify-center'
                                loading='lazy'
                            />

                            <img
                                src='https://hungrypoint.in/img/Leaf-1.webp'
                                alt='https://hungrypoint.in/img/Leaf-1.webp'
                                className='object-cover w-16 xl:w-20 absolute leaf'
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>
            </section>

        </LazyLoadComponent>
    )
}

export default Home
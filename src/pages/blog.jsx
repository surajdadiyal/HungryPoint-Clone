import React from 'react'
import { blog } from '../db/blog'
import { Card, CardContent, CardHeader } from '../components/ui/card'
import { Separator } from '../components/ui/separator'
import { Button } from '../components/ui/button'
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component'

function Blog() {
    return (
        <LazyLoadComponent>
            <section className='w-full flex items-center justify-center py-14'>
                <div className='w-4/5 flex flex-col items-center justify-center mx-auto container'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {blog && blog.length > 0 && blog.map(({ title, description, image }, index) => (

                            <Card
                                key={index}
                                className="pt-0"
                            >
                                <LazyLoadImage
                                    src={image}
                                    alt={image}
                                    loading='lazy'
                                    className='w-full object-cover rounded-t-md'
                                    effect='blur'
                                    wrapperProps={{
                                        style: { transitionDelay: "1s" }
                                    }}
                                />
                                <CardHeader>
                                    <h2 className='xl:text-xl font-medium'>
                                        {title}
                                    </h2>
                                </CardHeader>
                                <Separator />
                                <CardContent className='space-y-5'>
                                    <p className='text-base font'>
                                        {description}
                                    </p>
                                    <Button>
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </LazyLoadComponent>
    )
}

export default Blog
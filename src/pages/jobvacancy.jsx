import React from 'react'
import { jobvacancy } from '../db/jobvacancy'
import { Input } from '../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { Button } from '../components/ui/button'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

function JobVacancy() {
    return (
        <LazyLoadComponent>
            <section className='w-full flex items-center justify-center bg-[#fde7c4]'>
                <div className='w-4/5 flex flex-col items-center justify-center py-5 container mx-auto'>
                    <div className='w-full flex flex-col items-start justify-center space-y-5'>
                        <h2
                            data-aos="fade-left"
                            data-aos-duration="700"
                            className='text-5xl font-semibold'
                        >
                            Job Vacancy at Hungry Point: Join Our Flavorful Journey
                        </h2>
                        <p
                            data-aos="fade-right"
                            data-aos-duration="700"
                            data-aos-delay="300"
                            className='text-base font-medium'>Current Job Openings</p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 py-5 gap-5'>
                        <div className='flex items-center justify-center'>
                            <ul className='flex flex-col items-center justify-center'>
                                {jobvacancy && jobvacancy.length > 0 && jobvacancy.map((elem, index) => (
                                    <div key={index}>
                                        <li className='space-y-3'>
                                            <h2
                                                data-aos="fade-left"
                                                data-aos-duration="700"
                                                className='text-xl font-semibold'>
                                                {elem.id}.{" "}{elem.heading}
                                            </h2>
                                            {" "}
                                            <p
                                                data-aos="fade-right"
                                                data-aos-duration="700"
                                                data-aos-delay="300"
                                                className='text-base font-normal'
                                            >
                                                {elem.description}
                                            </p>
                                        </li>
                                        <div className='px-5'>
                                            {elem.list.map((elems, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className='list-disc py-2 my-2'
                                                        data-aos="fade-up"
                                                        data-aos-duration="700"
                                                        data-aos-delay="300"
                                                    >
                                                        {elems}
                                                    </li>
                                                )
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </div>

                        <div className='w-full flex flex-col items-center justify-start'>
                            <div className='flex flex-col items-start justify-center'>
                                <h2
                                    data-aos="fade-left"
                                    data-aos-duration="700"
                                    className='text-3xl font-semibold pb-1'
                                >
                                    How to Apply
                                </h2>
                                <p
                                    data-aos="fade-right"
                                    data-aos-duration="700"
                                    data-aos-delay="300"
                                    className='text-base font-normal'
                                >
                                    To apply for a career at Hungry Point, please submit your resume and cover letter. Be sure to include the position you're applying for in the subject line.Hungry Point is more than just a place to work; it's a place where careers take flight, flavors come to life, and innovation thrives. Join us in shaping the future of food and creating extraordinary culinary experiences. Your journey begins here at Hungry Point.
                                </p>
                            </div>
                            <div className='w-full flex items-center justify-center py-5'>
                                <form
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                    className='w-full grid grid-cols-2 gap-5'
                                >
                                    <Input
                                        className="w-full bg-white col-span-2"
                                        type="text"
                                        placeholder="Applicant Full Name"
                                    />
                                    <Input
                                        className="w-full bg-white"
                                        type="number"
                                        placeholder="+01-23456789"
                                    />
                                    <Input
                                        className="w-full bg-white"
                                        type="email"
                                        placeholder="example@gmail.com"
                                    />
                                    <Select>
                                        <SelectTrigger className="w-full bg-white col-span-2">
                                            <SelectValue placeholder="Choose Job Vacancy" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Receptionist">Receptionist</SelectItem>
                                            <SelectItem value="Interior Designer (CAD)">Interior Designer (CAD)</SelectItem>
                                            <SelectItem value="Social Media Marketing Specialist">Social Media Marketing Specialist</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Label className="bg-white rounded-md flex items-center justify-center text-muted-foreground">Upload your CV :- </Label>
                                    <Input
                                        type="file"
                                        className="bg-white"
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
                </div>
            </section>
        </LazyLoadComponent>
    )
}

export default JobVacancy
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Home } from 'lucide-react'

function PageNotFound() {
  return (
    <div className='w-full flex items-center justify-center relative'>
      <div className='w-full min-h-screen'>
        <img src='https://cdn.dribbble.com/userupload/24316449/file/original-b1e3a4bfa37cc43e7ecd22d2e6811c4d.png?resize=1504x1128&vertical=center' alt='404-page-img' loading='lazy' className='object-contain w-full min-h-screen' />
      </div>
      <div className='absolute top-20 right-20'>
        <Button variant="secondary" className="text-base border-y border-x-2 hover:border-x-amber-400 hover:border-y-purple-700 text-orange-500 duration-300 ease-in transition transform"><Link to={'/'} className='flex items-center justify-center gap-2'><Home className='h-10 w-10'/>Back To Home</Link></Button>
      </div>
    </div>
  )
}

export default PageNotFound
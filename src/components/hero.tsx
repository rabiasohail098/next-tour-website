import React from 'react'
import Container from './container'
import Image from 'next/image'
import Searchform from './search'

const Hero = () => {
  return (
    <Container className='grid lg:grid-cols-2 p-18'>
        <div className='py-10 md:py-20'>
    <p className='text-pink-500 font-semibold ml-1 text-lg'>Book With Us</p>
    <h1 className='text-5xl sm:text-7xl lg:text-8xl font-bold mb-2 text-balance font-heading'>Discover Your Next Adventure</h1>
    <p className='text-lg text-slate-600 mt-4'>Discover amazing places at exclusive deals.Eat, Shop, Visit interesting places around the world</p>
    <div className='md:p-6 p-4 ml-6 rounded-md bg-white mt-8 relative'>
        <Searchform/>
    </div>
        </div>
        <div className='sm-hidden lg:flex justify-center'>
            <Image className="rounded-md w-[80%] h-full max-h-[700px] object-cover" 
            alt='hero' 
            width={500} 
            height={600} 
            src="/images/hero.jpeg"/>
        </div>
    
    </Container>

  )
}

export default Hero
import React from 'react'
import Link from 'next/link'
import Container from './container'

const Footer = () => {
  return (
    <footer className='pt-20 mt-20 bg-slate-700'>
        <Container className='flex flex-col md:flex-row gap-10 justify-between'>
            <div>
                <div className="text-lg text-white">Next-Tour 🏞️</div>
                <p className='text-slate-400 max-w-sm'>
                Discover amazing places at exclusive deals.Eat, Shop, Visit interesting places around the world
                </p>
            </div>
            <div>
                <div className="text-lg lg:text-white">
                    Contact
                </div>
                <p className='text-slate-400'>Mobile No. 1234567890</p>
                <Link className="text-slate-400 underline" 
                href="emailto:nest-tour@mail.com">
                    Email: next-tour@mail.com
                    </Link>
            </div>
        </Container>
        <p className='text-center text-sm text-slate-500 pt-20 pb-4'>Copyright @ 2024 The Brave Coder.All Rights Reserved</p>
    </footer>
  )
}

export default Footer
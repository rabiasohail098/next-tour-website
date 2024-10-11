import { hotels } from '@/app'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Rating from './rating'
import Container from './container'
import { BedDoubleIcon, User2Icon } from 'lucide-react'
const  Hotel= () => {
  return (
     <Container className='py-20'>
        <h1 className='text-4xl font-semibold font-heading text-center'>Ours Hotel Rooms</h1>
    <p className='text-center max-w-4xl mx-auto text-slate-600 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
    <ul className='grid sm:grid-cols-2 gap-10 pt-20'>
        {hotels.map((hotel)=>(
            <Link  href={hotel.id} key={hotel.id} className='group'>
                <div>
                    <div className='aspect-[16/10] rounded-md overflow-hidden'>
                        <Image src={hotel.image}
                        alt={hotel.title}
                        width={420}
                        height={400} 
                        className='w-full h-full object-cover transition-transform group-hover:scale-110 origin-bottom duration-300'
                        />
                    </div>
                    <div className='py-2 space-y-2'>
                    <div className='flex justify-between items-center'>
                        <p className='text-lg font-semibold'>{hotel.title}</p>
                        <Rating rate={hotel.rating}/>                   
                    </div>
                    <div className='flex justify-between gap-4 items-center'>
                        <p className='font-medium gap-3 flex-1'>From ${hotel.price}</p>
                        <p className='text-slate-600 flex gap-2 items-center'>
                            <BedDoubleIcon size={20} className=' text-slate-600'/>
                            {hotel.beds}</p>

                            <p className='text-slate-600 flex gap-1 items-center'>
                            <User2Icon size={20} className=' text-slate-600'/>
                            {hotel.capacity} Guest</p>
                    </div>
                </div>
                </div>
          </Link>
))}
    </ul>
    </Container>
  )
}

export default Hotel
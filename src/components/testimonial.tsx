import React from 'react'
import Container from './container'
import { testmonials } from '@/app'
import Image from 'next/image'
import Rating from './rating'

const Testimonial = () => {
  return (

        <Container className='py-20'>
            <h2 className='text-4xl font-semibold font-heading text-center'>
                What our customers are say
                </h2>

            <div className='flex flex-col lg:rounded-full lg:flex-row md:flex-wrap gap-6 mt-20 justify-center'>
                {testmonials.map((Testimonial)=>(
                    <div key={Testimonial.name} className='bg-white p-6 flex rounded-md  md:w-[calc(50%-24px)]'>
                        <Image 
                        src={Testimonial.image}
                         alt={Testimonial.name}
                         width={100}
                         height={100}
                         className="w-35 h-3/6 lg:object-cover rounded-full mt-[25px] shrink-0"
                         />
                         <div className='p-6'>
                            <div className='flex justify-between '>
                                <div>
                                    <p>{Testimonial.name}</p>
                                    <p className='text-slate-400'>{Testimonial.country}</p>
                                </div>
                                <Rating rate={Testimonial.rating}/>
                            </div>
                            <p>{Testimonial.description}</p>
                         </div>
                    </div>
                   
                ))}
             </div>
        </Container>
    
  )
}

export default Testimonial
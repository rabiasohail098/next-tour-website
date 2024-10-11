import { StarIcon } from 'lucide-react'
import React from 'react'
interface RatingProps{
    rate:number
}
const Rating = ({rate}:RatingProps) => {
  return (
    <div className='flex gap-2'>
        {Array(5)
        .fill(0)
        .map((_,index) => {
            return <StarIcon key={index} size={14} className={`${
                rate>index?"fill-yellow-400 stroke-yellow-500":"stroke-slate-500"}`}/>
        })}
    </div>
  )
}

export default Rating
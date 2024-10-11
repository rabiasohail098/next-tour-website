import { Search } from 'lucide-react'
import React from 'react'

const Searchform = () => {
  return (
    <form className='grid md:grid-cols-4 gap-4'>
        <div className='flex flex-col gap-2'>
            <label htmlFor="search">Search</label>
            <input
            id='search'
             type="text" 
             placeholder='Search' 
             className='py-2 outline-none border-b border-b-slate-100'/>
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="destination">Destination</label>
           <select 
           name="destination"
            id="destination" 
            className='py-2 outline-none border-b border-b-slate-100'>
                <option value="Pakistan">Pakistan</option>
                <option value="Dubai">Dubai</option>
                <option value="America">America</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
            </select>
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="duration">Duration</label>
           <select 
           name="duration"
            id="duration" 
            className='py-2 outline-none border-b border-b-slate-100'>
                <option value="1 Day">1 Day</option>
                <option value="2 Days">2 Days</option>
                <option value="2-4 Days">2-4 Days</option>
            
            </select>
        </div>
        <button className='bg-pink-500 text-white py-4 rounded-md md:-mr-6 md:-my-6 flex justify-center items-center md:flex-col gap-2'>
            <Search size={20}/>
            search</button>
    </form>
  )
}

export default Searchform
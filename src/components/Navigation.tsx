import React from 'react'
import Link from 'next/link'
import Container from "./container"
const navItems = [
    {
        title:"Home",
        href:"/hero",
    },
    {
        title:"Places",
        href:"/tours",
    },
    {
        title:"Hotels",
        href:"/hotel",
    },
    {
        title:"Contact",
        href:"/footer",
    },
    
    

]
const Navigation = () => {
  return (
   <Container>
     <nav className='flex justify-between items-center py-6'>
        <div className='font-bold text-xl -skew-x-6'>Next-Tour 🏞️</div>

        <ul className='hidden lg:flex gap-6'>
            {navItems.map((nav)=>(
                <li key={nav.title}>
                    <Link href={nav.href} className='text-slate-600 hover:text-black hover:underline underline-offset-4 '>{nav.title}</Link>
                </li>
            ))}
        </ul>
        <button className='px-6 py-2.5 bg-pink-500 rounded-md text-white'>login</button>
    </nav>
   </Container>
  )
}
export default Navigation;
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-center gap-10 my-10'>
        <Link href={"/"} className='font-bold'>Home</Link>
        <Link href={"/about"} className='font-bold'>About</Link>
        <Link href={"/blog"} className='font-bold'>Blog</Link>
        <Link href={"/contact"} className='font-bold'>Contact</Link>
    </nav>
  )
}

export default Navbar
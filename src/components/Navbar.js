import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-12 px-4 flex justify-center md:justify-between items-center fixed top-0 left-0 bg-white w-full z-50'>
      {/* Logo img */}
      <Link href="/">
      <div id='logo' className='md:w-9 md:h-9 w-7 h-7'>
        <img src='/img/yetion_logo.jpg' className='object-cover' />
      </div>
      </Link>
      {/* Nav menu */}
      <div className='md:hidden font-semibold ml-2'>
        <Link href="/">이예인의 포트폴리오</Link>
      </div>
      <div id='nav'>
        <ul className='md:flex hidden font-medium text-base'>
          <Link href="#intro"><li className='rounded-lg py-2 px-4 mr-2 hover:bg-slate-100'>Profile</li></Link>
          <Link href="#stack"><li className='rounded-lg py-2 px-4 mr-2 hover:bg-slate-100'>Stack</li></Link>
          <Link href="#career"><li className='rounded-lg py-2 px-4 mr-2 hover:bg-slate-100'>Career</li></Link>
          <Link href="#Intro"><li className='rounded-lg py-2 px-4 mr-2 hover:bg-slate-100'>Project</li></Link>
          <Link href="#keypicture"><li className='rounded-lg py-2 px-4 mr-2 hover:bg-slate-100'>keyPicture</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

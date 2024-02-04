import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-12 px-4 flex justify-between items-center fixed top-0 left-0 bg-white w-full'>
      {/* Logo img */}
      <Link href="/">
      <div id='logo' className='w-9 h-9'>
        <img src='/img/yetion_logo.jpg' className='object-cover' />
      </div>
      </Link>
      {/* Nav menu */}
      <div id='nav'>
        <ul className='flex font-medium text-base'>
          <Link href="#Intro"><li className='rounded-lg py-2 px-4 mr-2 hover:bg-slate-100'>Profile</li></Link>
          <Link href="#Intro"><li className='rounded-lg py-2 px-4 mr-2 hover:bg-slate-100'>Stack</li></Link>
          <Link href="#Intro"><li className='rounded-lg py-2 px-4 mr-2 hover:bg-slate-100'>Carrer</li></Link>
          <Link href="#Intro"><li className='rounded-lg py-2 px-4 mr-2 hover:bg-slate-100'>Project</li></Link>
          <Link href="#Intro"><li className='rounded-lg py-2 px-4 mr-2 hover:bg-slate-100'>keyPicture</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

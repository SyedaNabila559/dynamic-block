import Image from 'next/image'
import React from 'react'
import { assets } from '../../public/Assets/assets'

const Footer = () => {
  return (
    <div className="flex justify-between items-center flex-col gap-6 sm:flex-row bg-slate-50 dark:bg-slate-900 py-12 px-10">
      <h1 className='text-3xl text-black dark:text-white font-bold'>SyedaBlog</h1>
      <p className='text-base text-black dark:text-white text-center'>Copyrights &copy; SyedaBlog | All rights reserved</p>
      <div className='flex'>
        <Image className='hover:scale-105 transition-all duration-300 cursor-pointer' src={assets.facebook_icon} width={50} alt='facebook'/>
        <Image className='hover:scale-105 transition-all duration-300 cursor-pointer' src={assets.googleplus_icon} width={50} alt='email'/>
        <Image className='hover:scale-105 transition-all duration-300 cursor-pointer' src={assets.twitter_icon} width={50} alt='email'/>
      </div>
    </div>
  )
}

export default Footer
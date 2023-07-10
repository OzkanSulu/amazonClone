import React from 'react'
import logo from "../../images/logo.png"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full flex justify-start px-4 gap-4 items-center bg-amazon_light h-20'>
        
        <Image className='w-24 object-contain' src={logo} alt='logo'/>
        <p className='text-gray-300 text-sm'>Copyright © 2023 Ozkan Sulu& Daytail</p>
    </div>
  )
}

export default Footer
import React from 'react'
import {LuMenu} from "react-icons/lu"

const BottomHeader = () => {
  return (
    <div className='bg-amazon_light w-full h-10 flex text-white justify-between items-center px-3'>
        <div className='flex w-auto h-full justify-center items-center gap-3 text-sd'>
        <p className='flex p-1 items-center gap-1 h-8 border border-transparent hover:border-white hover:rounded-sm cursor-pointer'>
          <LuMenu className='text-xl'/>
          <span>All</span>
          </p>
          <p className='hidden md:inline-flex  p-1 items-center gap-1 h-8 border border-transparent hover:border-white hover:rounded-sm cursor-pointer'>{"Today's Deals"}</p>
          <p className='hidden md:inline-flex  p-1 items-center gap-1 h-8 border border-transparent hover:border-white hover:rounded-sm cursor-pointer'>Registry</p>
          <p className='hidden md:inline-flex  p-1 items-center gap-1 h-8 border border-transparent hover:border-white hover:rounded-sm cursor-pointer'>Gift Cards</p>
          <p className='hidden md:inline-flex  p-1 items-center gap-1 h-8 border border-transparent hover:border-white hover:rounded-sm cursor-pointer'>Sell</p>
          <div>
          <p className='hidden md:inline-flex  p-1 items-center gap-1 h-8 border border-transparent text-amazon_yellow hover:border-amazon_yellow hover:rounded-sm cursor-pointer'>Sign Out</p>
        </div>
        </div>
        <div>
          <p className='hidden md:inline-flex  p-1 items-center gap-1 h-8 border border-transparent hover:border-white hover:rounded-sm cursor-pointer'>Shop great deals now</p>
        </div>
        
        
    </div>
  )
}

export default BottomHeader
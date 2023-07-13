import { resetCart } from '@/store/nextSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const ResetCart = () => {

  const dispatch = useDispatch()
  const handleResetCart=()=>{
      const confirmReset=window.confirm("Are you sure you want to reset your items?")
      if(confirmReset){
        dispatch(resetCart())
      }
    }
  return (
    <div>
        <button onClick={handleResetCart} className='w-36 h-12 bg-amazon_blue text-white border-[2px] border-transparent hover:border-amazon_blue hover:text-amazon_blue hover:bg-transparent rounded-lg mt-6 cursor-pointer font-semibold'>Reset Cart</button>
    </div>
  )
}

export default ResetCart
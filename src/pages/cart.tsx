import React from 'react'
import { useSelector } from 'react-redux'
import { StateProps, StoreProduct } from '@/type'
import CartProducts from './components/CartProducts'
import ResetCart from './components/ResetCart'
import Link from 'next/link'



const Cart = () => {
  const {productData,favoriteData} = useSelector((state:StateProps)=>state.next)
  console.log({productData})
  return (
    
    <div className='min-h-[81vh] max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4'>
      {
      productData.length>0?(
       
        <div className='bg-white col-span-4 p-4 rounded-lg w-[100%]'>
          
          <div className='flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1'>
            <div >
              <p className='text-amazon_blue font-semibold text-xl'>Shopping Cart</p>
            
            </div>
            <div>
              <p className='text-lg pr-3 font-semibold text-gray-600'>Subtitle</p>
            </div>
            
          </div>
          <div>
              {productData.map((item:StoreProduct)=>(
                <div key={item._id} className='pt-2 gap-2 flex flex-col'>
                  <CartProducts item={item}/>
                </div>
                
              ))}
              <ResetCart/>
            </div>
        </div>
      ):(<div className='bg-white col-span-5 flex gap-6 flex-col rounded-sm justify-center items-center h-80'>
        Empty Cart!
        <Link className='text-lg text-amazon_yellow px-4 flex justify-center items-center h-12 text-semibold border-[2px] border-amazon_yellow' href="/">Go to shopping</Link>
      </div>)
      }
    </div>
  )
}

export default Cart
import React from 'react'
import Image from 'next/image'
import { HiShoppingCart } from 'react-icons/hi'
import {FaHeart} from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { addCart, addFavorite } from '@/store/nextSlice'

const Product = ({productData}:any) => {
  const dispatch = useDispatch();

  return (
    <div className='w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
      {
        productData.map((item:any)=>{
          return(
            <div key={item.id} className='border border-white-300 rounded-lg group overflow-hidden relative bg-white gap-3'>
              <div className='w-100 h-[360px] relative bg-white'>
                <Image className='w-full h-full scale-90 hover:scale-100 transition-transform duration-200s' src={item.image} width={300} height={300} alt='item'/>
              </div>
              <hr/>
              <div className='w-12 h-24 absolute bottom-40 right-0 border-[2px] flex flex-col justify-center gap-3 items-center  bg-transparent border-amazon_yellow translate-x-20 group-hover:translate-x-0 transition-transform duration-300'>
                <div>
                <span onClick={()=>dispatch(addCart({
                  _id:item._id,
                  brand:item.brand,
                  category:item.category,
                  image:item.image,
                  description:item.description,
                  isNew:item.isNew,
                  oldPrice:item.oldPrice,
                  price:item.price,
                  title:item.title,
                  quantity:1,
                }))}> <HiShoppingCart className='text-amazon_blue cursor-pointer text-lg  hover:text-amazon_yellow'/></span>
                </div>
                
                <div>
                <span onClick={()=>dispatch(addFavorite({
                  _id:item._id,
                  brand:item.brand,
                  category:item.category,
                  image:item.image,
                  description:item.description,
                  isNew:item.isNew,
                  oldPrice:item.oldPrice,
                  price:item.price,
                  title:item.title,
                  quantity:1,
                }))}>  <FaHeart className='text-amazon_blue cursor-pointer text-lg hover:text-amazon_yellow'/></span>
                </div>
              </div>
              <div className='px-4 py-3 flex flex-col gap-1'>
                <p className='text-xs text-amazon_blue tracking-wide'>{item.category}</p>
                <p className='text-base font-medium'>{item.title}</p>
                <div className='flex gap-2'>
                  <span className='line-through text-sm text-gray-400'>${item.oldPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  <span className='text-amazon_blue font-semibold'>${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>

                </div>
                <div>
                  <p className='text-xs text-gray-500 flex text-justify'>{item.description.substring(0,120)}</p>
                </div>
                <button onClick={()=>dispatch(addCart({
                  _id:item._id,
                  brand:item.brand,
                  category:item.category,
                  image:item.image,
                  description:item.description,
                  isNew:item.isNew,
                  oldPrice:item.oldPrice,
                  price:item.price,
                  title:item.title,
                  quantity:1,
                }))} className='h-10 bg-amazon_blue text-white mt-3 rounded-sm hover:bg-amazon_yellow hover:text-white duration-300'>add to cart</button>
              </div>
              <div>
              {item.isNew && (
  <p className='text-sm absolute top-3 right-1 animate-bounce font-semibold text-amazon_blue'>Save ${`${(item.oldPrice - item.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</p>
)}

              </div>
              </div>
          )
            
           
        })
      }
    </div>
  )
}

export default Product
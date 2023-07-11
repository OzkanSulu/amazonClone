import React from 'react'
import { ProductProps } from '@/type'
import Image from 'next/image'

const Product = ({productData}:any) => {
  return (
    <div className='w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
      {
        productData.map((item)=>{
          return(
            <div key={item.id} className='border border-white-300 rounded-lg gap-3'>
              <div >
                <Image src={item.image} width={300} height={300} alt='item'/>
              </div>
              </div>
          )
            
           
        })
      }
    </div>
  )
}

export default Product
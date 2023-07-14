import React from 'react'
import { useSelector } from 'react-redux'
import { StateProps, StoreProduct } from '@/type'
import FavoritesProducts from './components/Header/FavoritesProducts'
import EmptyFav from './components/EmptyFav'


const Favorites = () => {
    const {favoriteData} =useSelector((state:StateProps)=>state.next)
   
  return (
    <div  className='w-full p-4 min-h-[32vw] bg-white relative rounded-lg mx-auto'>
       {
        favoriteData.length>0?(<div>
            <div className='mx-auto grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 relative p-4 gap-5'>
                {favoriteData.map((item)=>(
                    
                        <div key={item.id}>
                            <FavoritesProducts item={item}/>
                        </div>
                    
                ))}

            </div>
        </div>):(<div className='w-[80%] h-[30vw] my-3 p-6 flex justify-center m-auto items-center gap-6 bg-gray-200 rounded-lg'> <EmptyFav /> </div>)
       }
    </div>
  )
}

export default Favorites
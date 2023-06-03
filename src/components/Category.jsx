import React from 'react'
import { categories } from '../data/data'

const Category = () => {
   console.log(categories)
  return (
    <div className=' max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className=' text-orange-600 font-bold text-center text-4xl'>Top Rated Menu Items</h1>
      {/**Categories */}
      <div className=' grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
         {categories.map(item => (
            <div key={item.id} className=' bg-gray-100 flex justify-between items-center rounded-lg p-4'>
               <h2 className=' font-bold sm:text-xl'>{item.name}</h2>
               <img src={item.image} alt={item.name} className=' w-20' />
            </div>
         ))}
      </div>
    </div>
  )
}

export default Category

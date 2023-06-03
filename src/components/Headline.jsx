import React from 'react'

const Headline = () => {
  return (
    <div className=' max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/**Cards */}
      <div className=' rounded-xl relative'>
         {/**Overlay */}
         <div className=' absolute w-full h-full bg-black/50 text-white rounded-xl'>
            <p className=' font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO Out</p>
            <p className=' px-2'>Through 8/26</p>
            <button className=' absolute border-white bg-white text-black mx-2 bottom-4'>Order Now</button>
         </div>
         <img className=' max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover' src="https://images.pexels.com/photos/793765/pexels-photo-793765.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
      </div>
      {/**Cards */}
      <div className=' rounded-xl relative'>
         {/**Overlay */}
         <div className=' absolute w-full h-full bg-black/50 text-white rounded-xl'>
            <p className=' font-bold text-2xl px-2 pt-4'>We Deliver Fruit Cakes</p>
            <p className=' px-2'>Tasty Treat</p>
            <button className=' absolute border-white bg-white text-black mx-2 bottom-4'>Order Now</button>
         </div>
         <img className=' max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover' src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="/" />
      </div>
      {/**Cards */}
      <div className=' rounded-xl relative'>
         {/**Overlay */}
         <div className=' absolute w-full h-full bg-black/50 text-white rounded-xl'>
            <p className=' font-bold text-2xl px-2 pt-4'>New Resaurants</p>
            <p className=' px-2'>Added Daily</p>
            <button className=' absolute border-white bg-white text-black mx-2 bottom-4'>Order Now</button>
         </div>
         <img className=' max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover' src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="/" />
      </div>
    </div>
  )
}

export default Headline

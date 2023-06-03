import React from 'react'

const Hero = () => {
  return (
    <div className=' max-w-[1640px] mx-auto p-4'>
      <div className=' relative max-h-[500px]'>
         {/**overlay */}
         <div className=' absolute h-full w-full text-gray-200 bg-black/60 flex flex-col justify-center'>
            <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className=' text-orange-600'>Best</span></h1>
            <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"><span className=' text-orange-600'>Foods</span> Delivery</h1>
         </div>
         <img className=' w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
      </div>
    </div>
  )
}

export default Hero

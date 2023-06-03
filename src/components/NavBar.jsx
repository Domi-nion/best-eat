import React, { useState } from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaWallet, FaUserFriends} from 'react-icons/fa'

const NavBar = () => {
   const [nav, setNav] = useState(false)

  return (
    <div className=' max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      <div className=' flex items-center'>
         <div onClick={() => setNav(!nav)} className=' cursor-pointer'>
            <AiOutlineMenu size={30} />
         </div>
         <h1 className=' text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className=' font-bold'>Bite</span></h1>
         <div className=' hidden lg:flex items-center justify-center bg-gray-200 rounded-full p1 text-[14px]'>
            <p className=' p-2 bg-black text-white rounded-full'>Delivery</p>
            <p className=' p-2'>PickUp</p>
         </div>
      </div>
      { /** Search Input */ }
      <div className=' bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
         <AiOutlineSearch size={20} />
         <input className=' bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search food' />
      </div>
      {/**Cart button */}
      <button className=' hidden md:flex bg-black text-white items-center py-2 rounded-full'>
         <BsFillCartFill size={20} className=' mr-2' /> Cart
      </button>

      { /**Mobile Menu */ }
         { /**Overlay */ }
      {nav ? <div className=' bg-black/80 w-full h-screen fixed top-0 left-0 z-10'></div> : "" }

         { /**Side drawer menu */ }
      <div className={nav ? ' fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : ' fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
         <AiOutlineClose onClick={() => setNav(!nav)} size={30} className=' absolute top-4 right-4 cursor-pointer' />
         <h2 className=' text-2xl p-4'>Best <span className=' font-bold'>Bite</span></h2>
         <nav>
            <ul className=' text-gray-800 flex flex-col p-4'>
               <li className=' text-xl flex py-4'><TbTruckDelivery size={30} className=' mr-4' /> Orders </li>
               <li className=' text-xl flex py-4'><MdFavorite size={30} className=' mr-4' /> Favorite </li>
               <li className=' text-xl flex py-4'><FaWallet size={30} className=' mr-4' /> Wallet </li>
               <li className=' text-xl flex py-4'><MdHelp size={30} className=' mr-4' /> Help </li>
               <li className=' text-xl flex py-4'><AiFillTag size={30} className=' mr-4' /> Promotions </li>
               <li className=' text-xl flex py-4'><BsFillSaveFill size={30} className=' mr-4' /> Best One </li>
               <li className=' text-xl flex py-4'><FaUserFriends size={30} className=' mr-4' /> Invite Friends </li>
            </ul>
         </nav>
      </div>
    </div>
  )
}

export default NavBar

import React from 'react'

import { BiShoppingBag } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className=' p-4 px-16 w-screen bg-white '>
        <div className='flex justify-between max-w-6xl bg-pink-200 py-2 mx-auto'>
            <img className='w-20' src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo.png" alt="" />
            <BiShoppingBag className='text-2xl text-primary-default' />
        </div>
    </div>
  )
}

export default Navbar
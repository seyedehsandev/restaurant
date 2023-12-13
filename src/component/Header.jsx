import React from 'react'

export default function Header() {
  return (

    <div className="header bg-cover bg-left w-full pt-16 pl-4 lg:pt-40 lg:pl-28">

        <div className='flex items-start justify-start flex-col gap-y-5 w=[75%] lg:w-[60%]'>
        <h1 className='lg:text-7xl text-6xl text-gray-300 font-semibold'>Elevate Your Inner Foodie with Every Bite.</h1>
        <h2 className='text-base text-gray-400 font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et qui, maxime assumenda repellat corrupti officia dolorum delectus labore deleniti?</h2>
        <a href="#" className="flex items-center justify-center border border-orange-600 py-2 px-7 rounded-3xl text-orange-600 hover:text-white hover:bg-orange-600 transition-all">Order Now</a>
        
        </div>
        
    </div>
  )
}

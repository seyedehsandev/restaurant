import React from 'react'
import FooterItem from './FooterItem'

export default function Footer() {
  return (
    <div className='flex items-start justify-between flex-wrap bg-gray-950 rounded-t-2xl pt-10 pb-4 px-16'>

<div className='flex flex-col gap-5 text-gray-200 items-start justify-center py-4 px-3 h-fit w-fit '>
        <h2 className='text-2xl text-white font-semibold '>FoodieWeb</h2>
        <span className='hover:text-orange-600 cursor-pointer'>Indulge in a symphony of flavors, where each plate is a canvas for culinary excellence.</span>
    </div>

        <FooterItem title={'Links'} ItemsProps={["Dishes" , "About" , "Menu" , "Reviews"]} />
        <FooterItem title={'Menu'} ItemsProps={["Our Dishes" , "Premium Menu"]} />
        <FooterItem title={'Contact Us'} ItemsProps={["FoodieWeb@email.com" , "+64 958 248 966" , "Social media"]} />
        
        <p className='text-lg w-full text-white text-center mt-10'>@copyright developed by <span className='text-orange-600'>Ehsan Hosseini</span> | All rights reserved</p>
    </div>
  )
}

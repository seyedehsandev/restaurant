import React from 'react'
import Rating from '@mui/material/Rating';

export default function DishCard({title , price , rating , img}) {
  return (
    <div className="dishCard rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-5 px-4 flex flex-col justify-center items-center gap-4 w-full md:w-1/4">
    <img src={img} alt="" className='rounded-md' />
    <h3 className='text-3xl font-semibold'>{title}</h3>
    <Rating name="size-small" defaultValue={rating} size="small"  readOnly/>
    <div className='flex justify-center items-center gap-x-3'>
        <span className='font-bold text-xl'>{price}$</span>
        <a href="#" className="flex items-center justify-center border border-orange-600 py-1 px-5 font-medium rounded-3xl text-orange-600 hover:text-white hover:bg-orange-600 transition-all">Buy Now</a>
        
    </div>
</div>
  )
}

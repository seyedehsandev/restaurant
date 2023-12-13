import React from 'react'

export default function CommentCard({img , name , comment}) {
  return (
    <div className="dishCard rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-5 px-4 flex flex-col justify-center items-center gap-4 w-full lg:w-1/4 border border-gray-400 ">
    <p className='text-left text-lg text-gray-500'>{comment}</p>
    
   
    
    <div className='flex justify-center items-center gap-x-3'>
    <img src={img} alt="" className='rounded-full w-[70px]' />
    <h3 className='text-xl font-semibold'>{name}</h3>
    </div>
</div>
  )
}

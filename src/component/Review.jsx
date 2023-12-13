import React from 'react'
import CommentCard from './CommentCard'

export default function Review() {
    const commentsData = [
        
        {img: "img/pic1.png", name:"Sophia Azura" , comment :"Lorem ipsum dolor sit amet consectetur adipisicing elit. In consectetur error, dolores quae ipsa quos enim corporis magni obcaecati tempore natus eos, libero ducimus nulla neque eaque maxime nam molestias?"},
        {img: "img/pic2.png", name: "John Deo" , comment :"Lorem ipsum dolor sit amet consectetur adipisicing elit. In consectetur error, dolores quae ipsa quos enim corporis magni obcaecati tempore natus eos, libero ducimus nulla neque eaque maxime nam molestias?"},
        {img: "img/pic3.png", name: "Victoria Zoe" , comment :"Lorem ipsum dolor sit amet consectetur adipisicing elit. In consectetur error, dolores quae ipsa quos enim corporis magni obcaecati tempore natus eos, libero ducimus nulla neque eaque maxime nam molestias?"},

      ]
 

  return (
    <div className='text-center w-full h-fit flex flex-col gap-y-10 px-3 py-20'>

    <h2 className='text-4xl font-bold'>Customer's Review</h2>

   <div className="dishContainer flex flex-wrap justify-center items-center gap-6">
    {commentsData ? commentsData.map(item => <CommentCard key={item.title} {...item}/> ) : "No Food Fetched!!"}
    
   </div>
    </div>
  )
}

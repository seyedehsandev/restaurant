import React from 'react'
import DishCard from './DishCard';
export default function Menu() {
    const dishesData = [
        {img: "img/img1.jpg", price: 17 , rating :3 , title:"Kabab"},
        {img: "img/img2.jpg", price: 16 , rating :1 , title:"Ghorme"},
        {img: "img/img3.jpg", price: 25 , rating :4 , title:"Berenj"},


      ]
  return (
    <div className='text-center w-full h-fit flex flex-col gap-y-10 px-4 py-20'>

    <h2 className='text-4xl font-bold'>Our Dishes</h2>

   <div className="dishContainer flex flex-wrap justify-center items-center gap-10">
    {dishesData ? dishesData.map(food => <DishCard key={food.title} {...food}/> ) : "No Food Fetched!!"}
    

   </div>
    </div>
  )
}

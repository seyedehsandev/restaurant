import React from 'react'
import { useState } from 'react'

export default function FooterItem({title , ItemsProps}) {
    let [items , setItems] = useState(ItemsProps)
  return (
    <div className='flex flex-col gap-5 text-gray-200 items-start justify-center py-4 px-3 h-fit w-fit'>
        <h2 className='text-2xl text-white font-semibold '>{title}</h2>
        <ul className='flex flex-col gap-2 items-start'>
            {items.map(item => <li className='hover:text-orange-600 cursor-pointer font-medium'>{item}</li>)}
        </ul>

    </div>
  )
}

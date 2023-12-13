import React from 'react'

export default function About() {
  return (
    <div className='text-center w-full h-fit flex justify-center items-center flex-wrap gap-x-6 px-4 py-20 '>

        <img src="/img/about.png" alt="" className='w-[350px]'/>
        <div className='flex flex-col items-center lg:items-start gap-3 gap-y-5 w-[95%] lg:w-[50%]'>
          <h2 className='text-4xl font-bold'>Why Choose Us?</h2>
          <p className='text-left text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto quisquam delectus minima perferendis nulla quia nisi laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo molestias omnis reprehenderit quae animi? Explicabo quasi accusamus laboriosam temporibus delectus, aut a? Quasi?</p>
          <p className='text-left text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, suscipit reiciendis accusamus recusandae eum aspernatur pariatur odit veritatis facere. Magnam!</p>
          <a href="#" className="flex items-center justify-center border border-orange-600 py-1 px-5 font-medium rounded-3xl text-orange-600 hover:text-white hover:bg-orange-600 transition-all">Learn More</a>
        
        </div>

        </div>
  )
}

import React, { useState } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { CgMenuLeft } from "react-icons/cg";
import { IoIosLogIn } from "react-icons/io";
import { IoClose } from "react-icons/io5";






export default function Navbar() {
    let [isMenuOpen , setIsMenuOpen] = useState(false)
    let [isDishedOpen , setIsDishedOpen] = useState(false)

    function menuHandler (){
        setIsMenuOpen(!isMenuOpen)
    }
    function dishesHandler (){
        setIsDishedOpen(!isDishedOpen)
    }
    function loginHandler (){

    }
  return (
    <div className="relative flex justify-between items-center w-full h-20 lg:px-14 px-3 text-xl">
        <div className="logo flex justify-center items-center gap-x-2 font-bold cursor-pointer">
            <MdFastfood /><span>ZoodFood</span>
        </div>

        {/* desktop navbar  */}
        <div className="hidden lg:flex items-center justify-center gap-x-10 font-semibold">
            <ul className="flex items-center justify-center gap-x-7  text-gray-700 text-xl">
                <a href="#" className="hover:text-orange-600">
                    <li>Home</li>
                </a>
                <a href="#" className="relative flex justify-center items-end gap-x-1 ">
                    <li className="hover:text-orange-600">Dishes</li>
                    <FaAngleDown />
                    <ul className="absolute top-8 left-0 flex flex-col gap-y-2 border border-gray-300 py-2 px-10 rounded-lg">
                        <li className='hover:text-orange-600'>item</li>
                        <li className='hover:text-orange-600'>item</li>
                        <li className='hover:text-orange-600'>item</li>
                        <li className='hover:text-orange-600'>item</li>
                    </ul>
                </a>
                <a href="#" className="hover:text-orange-600">
                    <li>About</li>
                </a>
                <a href="#" className="hover:text-orange-600">
                    <li>Menu</li>
                </a>
                <a href="#" className="hover:text-orange-600">
                    <li>Reviews</li>
                </a>
            </ul>
            <a href="" className="text-center border border-orange-600 py-2 px-7 rounded-3xl text-orange-600 hover:text-white hover:bg-orange-600 transition-all">Login</a>
        </div>

        {/* mobile navbar  */}
        <div className="lg:hidden flex justify-center items-center gap-x-3"> 
        <IoIosLogIn className="text-3xl lg:hidden" onClick={loginHandler}/>
        {isMenuOpen ? <IoClose className="text-3xl lg:hidden transition-all" onClick={menuHandler}/>    : <CgMenuLeft className="text-3xl lg:hidden transition-all" onClick={menuHandler} />}

        {/* <IoClose className="text-3xl lg:hidden" onClick={menuHandler}/>
        <CgMenuLeft className="text-3xl lg:hidden" onClick={menuHandler} /> */}
        {
            isMenuOpen ? ( <div className="mobile-navbar absolute top-20 -left-4  bg-gray-300 flex flex-col lg:hidden items-center justify-center font-bold text-2xl transition-all">
            <ul className="flex flex-col items-center justify-center text-gray-700 text-xl w-full">
                <a href="#" className="hover:text-orange-600 hover:bg-gray-700  w-full py-4 text-center">
                    <li>Home</li>
                </a>
                <a href="#" className="flex flex-col justify-center items-center gap-y-2 hover:bg-gray-700  w-full pt-4 text-center hover:text-orange-600">
                    
                    <li className="hover:text-orange-600 flex gap-x-1 items-center " onClick={dishesHandler}>Dishes</li>
                    {isDishedOpen ?
                    <ul className="flex flex-col rounded-lg w-full">
                        <li className='hover:text-orange-100 hover:bg-gray-800 w-full bg-gray-400 py-2'>item</li>
                        <li className='hover:text-orange-100 hover:bg-gray-800 w-full bg-gray-400  py-2'>item</li>
                        <li className='hover:text-orange-100 hover:bg-gray-800 w-full bg-gray-400  py-2'>item</li>
                        <li className='hover:text-orange-100 hover:bg-gray-800 w-full bg-gray-400  py-2'>item</li>
                    </ul> : null}
                    
                </a>
                <a href="#" className="hover:text-orange-600 hover:bg-gray-700  w-full py-4 text-center">
                    <li>About</li>
                </a>
                <a href="#" className="hover:text-orange-600 hover:bg-gray-700  w-full py-4 text-center">
                    <li>Menu</li>
                </a>
                <a href="#" className="hover:text-orange-600 hover:bg-gray-700 w-full py-4 text-center">
                    <li>Reviews</li>
                </a>
            </ul>
            {/* <a href="" className="text-center">Login</a> */}
        </div>) : null
        }

        </div>
        
       





    </div>

  )
}

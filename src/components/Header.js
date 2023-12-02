import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearchHeart } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoPlayForwardSharp } from "react-icons/io5";
import youtubelgo from "../../assets/youtube.png";
import namelogo from "../../assets/logo.png"
import { useDispatch } from 'react-redux';
import { togglemneu } from '../utils/Redux/Slices/SideBarSlice';
import { NavLink } from 'react-router-dom';

const Header=()=>
{

          const [searchtext,setsearchtext]=useState("");

          const [hamburger,sethamburger]=useState(false);

         
          const dispatch=useDispatch();


          const showsearch=()=>
          {
                    sethamburger((prev)=>!prev);
          }

         


          const changehandler=(e)=>
          {
                let value=e.target.value;
                setsearchtext(value);
          }
         
          useEffect(()=>
          {
                    const handlesearchbar=()=>
                    {
                             
                              sethamburger(window.innerWidth<300);
                             
                              
                    }
                 
                  

                  window.addEventListener("resize",handlesearchbar)

                  return ()=>window.removeEventListener("resize",handlesearchbar);
          },[])
  return (
          <div className='flex justify-between px-4 items-center border shadow-lg py-2 sm:py-0 mx-auto '>
      <div className={`flex items-center ${hamburger?"hidden":"flex"} `}>
          <GiHamburgerMenu className='text-2xl cursor-pointer' onClick={()=>dispatch(togglemneu())}/>
         <div className='flex justify-center items-center cursor-pointer '>
                    <img src={youtubelgo} alt='' className='w-[100px] max-h-[80px] -mr-8 hidden sm:block ' />
                    <img src={namelogo} alt='' className='max-w-[120px] max-h-[80px] '/>
          </div>
      </div>
      <div className={`relative w-[90%] sm:w-[50%] rounded-lg bg-slate-400 border-2 gap-2 border-slate-400 justify-evenly items-center ${hamburger?"flex":"hidden"} sm:flex `}>

          <input type='text' name='search' value={searchtext} onChange={changehandler} placeholder='Search...' className='border border-slate-600  w-[90%] rounded-lg px-2 py-1 placeholder:font-bold placeholder:text-slate-600 font-semibold '/>
          <div className='  cursor-pointer pr-1 '>
          <BsSearchHeart className='text-2xl '  />
          </div>

      </div>
      <div className='flex gap-1 items-center' >
      <RiAccountPinCircleFill className={`text-2xl cursor-pointer ${hamburger?"hidden":"block"} `} />
      <BsSearchHeart className={`block text-xl  sm:hidden  md:text-2xl' ${hamburger?"hidden":"block"} `} onClick={showsearch}/>
      <IoPlayForwardSharp className={`flex gap-1 items-center text-2xl ${hamburger?"block":"hidden"}`} onClick={showsearch}/>
      
      </div>
          </div>
  )
}
export default Header;
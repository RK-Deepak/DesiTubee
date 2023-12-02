import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdOutlineSubscriptions ,MdTimer,MdOutlineSportsCricket } from "react-icons/md";
import { FaRegUserCircle,FaSearchengin,FaGlobeAsia,FaMusic,FaRegNewspaper,FaYoutube} from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";
import { BiSolidVideos,BiMoviePlay } from "react-icons/bi";
import { SiYoutubeshorts } from "react-icons/si";
import { SiTrendmicro,SiYoutubegaming } from "react-icons/si";
import {RiLiveLine} from "react-icons/ri"
import {PiBooksFill} from "react-icons/pi"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { closemenu } from '../utils/Redux/Slices/SideBarSlice';
import { NavLink } from 'react-router-dom';

const Sidebar=()=>
{
          const sidebar=useSelector((store)=>store.side.isopen);
          const dispatch=useDispatch();

          useEffect(()=>
          {
                    const handlesidebar=()=>
                    {
                             
                              if(window.innerWidth<700)
                              {
                                        dispatch(closemenu());
                              }
                          
                              
                    }
                 
                  

                  window.addEventListener("resize",handlesidebar)

                  return ()=>window.removeEventListener("resize",handlesidebar);
          },[])

          if(!sidebar)
          {
                    return null;
          };
          return (
                    <div className='absolute left-0 top-[50px] bg-white sm:relative sm:top-0 sm:left-0 min-w-[200px] border-2 p-2 flex flex-col gap-1 '>
                     <div className='flex flex-col gap-2 px-2 my-2'>
                            <NavLink to="/"><p  className='flex gap-1 items-center  font-semibold'><FaHome className='text-xl'/>Home</p></NavLink>
                              <p className='flex gap-1 items-center  font-semibold '><SiYoutubeshorts className='text-xl'/>Shorts</p>
                              <p className='flex gap-1 items-center  font-semibold'><MdOutlineSubscriptions className='text-xl' />Subscriptions</p>
                    </div> 
                    <hr></hr>
                    <div className='flex flex-col gap-2 px-2 my-2'>
                              <h1 className='font-bold text-lg'>You ➡️</h1>
                              <div className='flex flex-col gap-2 px-2 my-2'>
                                        <p className='text-md font-semibold  flex gap-2'><FaRegUserCircle  className='text-xl'/>Your Channel</p>
                                        <p className='text-md font-semibold flex gap-2'><FaSearchengin className='text-xl'/>History</p>
                                        <p className='text-md font-semibold flex gap-2'><BiSolidVideos  className='text-xl'/>Your Videos</p>
                                        <p className='text-md font-semibold flex gap-2'><MdTimer className='text-xl' />Watch Later</p>
                                        <p className='text-md font-semibold flex gap-2'><FaScissors  className='text-xl'/>Your Clips</p>

                              </div>
                    </div>
                    <hr></hr>
                  
                 
                    <div className='flex flex-col gap-2 px-2 my-2'>
                              <p className='flex gap-1 items-center  font-semibold'><FaGlobeAsia  className='text-xl'/>Explore</p>
                              <p className='flex gap-1 items-center  font-semibold'><SiTrendmicro  className='text-xl'/>Trending</p>
                              <p className='flex gap-1 items-center  font-semibold'><FaMusic  className='text-xl'/>Music</p>
                              <p className='flex gap-1 items-center  font-semibold'><BiMoviePlay  className='text-xl'/>Movies</p>
                              <p className='flex gap-1 items-center  font-semibold'><RiLiveLine  className='text-xl'/>Live</p>
                              <p className='flex gap-1 items-center  font-semibold'><SiYoutubegaming  className='text-xl'/>Gaming</p>
                              <p className='flex gap-1 items-center  font-semibold'><FaRegNewspaper  className='text-xl'/>News</p>
                              <p className='flex gap-1 items-center  font-semibold'><MdOutlineSportsCricket className='text-xl' />Sports</p>
                              <p className='flex gap-1 items-center  font-semibold'><PiBooksFill  className='text-xl'/>Learning</p>
                    </div>
                    <hr></hr>
                    <div className='flex flex-col gap-2 px-2 my-2'>
                              <h1 className='font-bold text-lg'>More From DesiTube</h1>
                              <div className='flex flex-col gap-2 px-2 my-2'>
                                        <p className='flex gap-1 items-center  font-semibold'><FaYoutube  className='text-xl'/>DesiTube Premium</p>
                                        <p className='flex gap-1 items-center  font-semibold'><FaYoutube  className='text-xl'/>DesiTube Studio</p>
                                        <p className='flex gap-1 items-center  font-semibold'><FaYoutube  className='text-xl'/>DesiTube Music</p>
                              </div>
                    </div>
                    </div>

          )
}
export default Sidebar
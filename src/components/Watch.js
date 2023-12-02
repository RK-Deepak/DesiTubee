import React from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closemenu } from '../utils/Redux/Slices/SideBarSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import Live from './Live';
import formatNumber from '../utils/NoConversion';

const Watch = () => 
{
  const [videodata,setvideodata]=useState([]);

  const dispatch=useDispatch();

  dispatch(closemenu())

  

  const [searchParams] = useSearchParams();

  let value=searchParams.get("v");

  async function fetchvideo()
  {
         const dataobj=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${value}&key=AIzaSyBXfbUiu-FJzPMgMJPXnoj0agAd2tQ1chw`)

         const data=await dataobj.json();

         console.log(data?.items);
         setvideodata(data?.items[0]);
         console.log(data?.items[0])
        
  }
  useEffect(()=>
    {
      fetchvideo();
    },[])

    const {snippet,statistics}=videodata;
    console.log(typeof statistics?.viewCount)
   
   
    
  return (
    <div className='flex gap-1 justify-evenly mx-auto w-[100%] max-w-[1100px]  '>
    <div className='p-2 border-2 border-slate-600 w-[80%] max-w-[900px] h-fit'>
    
     <iframe  src={"https://www.youtube.com/embed/"+value+"?autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share " className='border-2 border-slate-600 max-w-[900px] w-[100%]  max-h-[700px] aspect-video '></iframe>
     
     <div className='flex flex-col gap-1 '> 
     <div className='flex flex-col md:flex-row  md:justify-between my-2 gap-2'>
     <p className='font-bold text-sm sm:text-md w-[80%] '>{snippet?.title.slice(0,80)}...</p>
     <div className='px-2 py-1 bg-slate-600 flex justify-center items-center rounded-lg w-fit'>
     <p className='font-semibold text-sm flex-1 text-white w-[100px] '>{snippet?.channelTitle}</p>
     </div>
     </div>
    
     <div className='flex gap-2 w-[50%] justify-evenly mx-auto sm:mx-0'>
      <div className='px-2 py-1 bg-slate-400 text-black rounded-md shadow-md '>
      <p className='font-bold text-xs md:text-sm flex gap-1'><span className=' text-md '>👀</span>{formatNumber(statistics?.viewCount)}</p>
      </div>
      <div className='px-2 py-1 bg-slate-400 text-black rounded-md shadow-md '>
      <p className='font-bold text-xs md:text-sm flex gap-1'><span className='text-md'>💓</span>{formatNumber(statistics?.likeCount)}</p>
      </div>
      <div className='px-2 py-1 bg-slate-400 text-black rounded-md shadow-md '>
      <p className='font-bold text-xs md:text-sm flex gap-1'><span className='text-md'>👅</span>{formatNumber(statistics?.commentCount)}</p>
      </div>
     </div>
     </div>
     </div>
     <div className='p-2 border-2 border-slate-600 w-[30%] h-fit'>
     <Live/>
     </div>
    
    </div>
  )
  }
  


export default Watch;

import React from 'react'



import formatNumber from '../utils/NoConversion';
import WatchShimmer from './WatchShimmer';
import useWatch from '../hooks/useWatch';
import {useSelector} from "react-redux";

function WatchVideo() {
        
  
 

   

    const videodata=useSelector((store)=>store.videos.watchVideo);
    console.log("hi",videodata)
     
  const {snippet,statistics}=videodata;

            if(videodata.length===0)
            {
                    return <WatchShimmer/>
            }
         
  return (
    
           <div className='p-2  w-[100%] max-w-[900px] h-fit border border-slate-500 shadow-lg shadow-slate-700'>
    
    <iframe  src={"https://www.youtube.com/embed/"+videodata?.id+"?autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share " className=' max-w-[900px] w-[100%]  max-h-[700px] aspect-video '></iframe>
    
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
    
  )
}

export default WatchVideo;
import React from 'react'

import { useState,useEffect } from 'react';

import PlaylistCard from './PlaylistCard';
import { useDispatch, useSelector } from 'react-redux';
import { addRelatedMovie } from '../utils/Redux/Slices/videosSlice';
import LiveComments from './LiveComments';







function Live({showfull}) {

 
 // Adjust the delay as needed
 const [showlive,setshowlive]=useState(false);
 const dispatch=useDispatch();
 const videodata=useSelector((store)=>store.videos.watchVideo);

 const relatedvideo=useSelector((store)=>store.videos.popularVideo);
  
 



  




   
    





    

  return (
<div className='flex flex-col gap-2'>
    <div className='flex gap-1 justify-center flex-col sm:flex-row'>
        <button className='  text-xs sm:text-md  px-2 py-1 bg-slate-500 font-bold text-center rounded-md hover:bg-green-500' onClick={()=>setshowlive(false)}>Recommended</button>
        <button className='  text-xs sm:text-md px-2 py-1 font-bold text-center bg-slate-500 rounded-md hover:bg-green-500 ' onClick={()=>setshowlive(true)}>Live</button>
    </div>
    {showlive ?<LiveComments/>
    : <div className={`flex flex-row px-[18px] sm:flex-col gap-[3rem] sm:gap-[1rem] py-[10px] sm:px-[5px] ${showfull?"sm:h-full":"sm:h-[602px]"} overflow-y-scroll buttonscroll shadow-md shadow-slate-600`}>
    
    
    {relatedvideo &&  relatedvideo.map((videox)=>
    
    <PlaylistCard video={videox}/>

    )}
   
    </div>}
    </div>
  )
}

export default Live

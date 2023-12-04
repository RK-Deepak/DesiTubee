import React from 'react'

import { useState,useEffect } from 'react';

import PlaylistCard from './PlaylistCard';
import { useDispatch, useSelector } from 'react-redux';
import { addRelatedMovie } from '../utils/Redux/Slices/videosSlice';







function Live() {

 
 // Adjust the delay as needed
 const dispatch=useDispatch();
 const videodata=useSelector((store)=>store.videos.watchVideo);

 const relatedvideo=useSelector((store)=>store.videos.relatedVideo);
  
 



  




   
    
  
  async function fetchrelatedvideo()
  {
           
         const dataobj=await fetch(` https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${videodata?.snippet?.channelId}&maxResults=15&key=AIzaSyBXfbUiu-FJzPMgMJPXnoj0agAd2tQ1chw`)
       
       

         const data=await dataobj.json();
         console.log(data?.items)

         dispatch(addRelatedMovie(data?.items));
         console.log(relatedvideo)

  }
  useEffect(() => {
     fetchrelatedvideo();
  }, [videodata?.snippet?.channelId]);





    

  return (

    <div className='flex flex-col gap-2 h-full overflow-y-scroll buttonscroll shadow-md shadow-slate-600'>
      <p className='text-xs sm:text-md underline font-bold text-center'>Recommended</p>
    {relatedvideo &&  relatedvideo.map((videox)=>
    
    <PlaylistCard video={videox}/>
     
    )}
   
    </div>
  )
}

export default Live

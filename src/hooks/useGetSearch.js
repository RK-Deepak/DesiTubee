import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPopular } from '../utils/Redux/Slices/videosSlice';

const useGetSearch=(searchvalue)=>
{

   const dispatch=useDispatch();

   async function fetchsearchvideo()
   {
      const dataobj=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchvalue}&key=AIzaSyBXfbUiu-FJzPMgMJPXnoj0agAd2tQ1chw`);
      const data=await dataobj.json();
console.log(data);
      dispatch(addPopular(data?.items))

      
   }

   useEffect(()=>
   {
          fetchsearchvideo();
     
   },[searchvalue])

   
}
export default useGetSearch;
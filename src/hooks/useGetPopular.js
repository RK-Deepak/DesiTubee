import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPopular } from '../utils/Redux/Slices/videosSlice';

const useGetPopular=()=>
{

   const dispatch=useDispatch();
   

   async function fetchpopularvideo()
   {
      const dataobj=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=20&key=AIzaSyBXfbUiu-FJzPMgMJPXnoj0agAd2tQ1chw");
      const data=await dataobj.json();

      

      dispatch(addPopular(data?.items));
   }

   useEffect(()=>
   {
          fetchpopularvideo();
     
   },[])

   return null;
  
}
export default useGetPopular;
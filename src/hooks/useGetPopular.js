import React, { useEffect } from 'react'
import { useState } from 'react';

const useGetPopular=()=>
{

   const [popularvideos,setpopularvideos]=useState([]);

   async function fetchpopularvideo()
   {
      const dataobj=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=20&key=AIzaSyBXfbUiu-FJzPMgMJPXnoj0agAd2tQ1chw");
      const data=await dataobj.json();

      setpopularvideos(data?.items);

      
   }

   useEffect(()=>
   {
          fetchpopularvideo();
     
   },[])

   return {popularvideos};
}
export default useGetPopular;
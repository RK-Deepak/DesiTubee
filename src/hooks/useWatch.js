
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useDispatch,useSelector} from "react-redux";
import { addmovie } from '../utils/Redux/Slices/videosSlice';

const useWatch=(value)=>
{
          const dispatch=useDispatch();
        const watchmovie_one= useSelector((store)=>store.videos.watchVideo);

        
      
        
       
        
          async function fetchvideo()
          {
                 const dataobj=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${value}&key=AIzaSyBXfbUiu-FJzPMgMJPXnoj0agAd2tQ1chw`)
        
                 const data=await dataobj.json();
        
                 console.log(data?.items);
                 dispatch(addmovie(data?.items[0]));
                console.log(watchmovie_one);
          }
          useEffect(()=>
            {
              fetchvideo();
            },[])
        
          
            
}
export default useWatch;
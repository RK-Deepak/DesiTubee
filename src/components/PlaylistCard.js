import React, { useEffect, useState } from 'react'
import { addmovie } from '../utils/Redux/Slices/videosSlice';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';




const PlaylistCard=(props)=>
{
          const {snippet,id}=props.video;
       
          const dispatch=useDispatch();
        

       
          
        
         
          return (
        <div >
                  <NavLink to={"/watch?v="+id}> <div className="flex  border flex-col  gap-[3px] rounded-md hover:scale-105 p-2 w-[200px] sm:w-[230px] max-h-[200px] mx-auto h-fit shadow-md shadow-slate-600 " onClick={()=>  dispatch(addmovie(props.video))}>
                    <img src={snippet?.thumbnails?.medium?.url} alt="" className="w-fit "/>
                    <p className="font-semibold text-[10px] sm:text-sm text-green-500">{snippet?.title.substr(0,20)}...</p>
                    <p className="font-semibold text-red-500 text-[10px] sm:text-sm">{snippet?.channelTitle}</p>
                   
                  
          </div></NavLink>
          </div>

          )

}
export default PlaylistCard;
import React from 'react'
import { NavLink } from 'react-router-dom';
import formatNumber from '../utils/NoConversion';
const VideoCard=(props)=>
{
          const {snippet,statistics,id}=props.video;
   return (
        <NavLink to={"/watch?v="+id}><div className="flex  border-2 flex-col gap-[3px] rounded-md hover:scale-110 p-2 shadow-md max-w-[230px] h-[220px]">
                    <img src={snippet?.thumbnails?.medium?.url} alt="" className="w-fit"/>
                    <p className="font-semibold text-sm text-green-500">{snippet?.title.substr(0,20)}...</p>
                    <p className="font-semibold text-red-500 text-sm">{snippet?.channelTitle}</p>
                   
                    <p className="text-xs"><span className="text-slate-600">Views: 👀 </span>{formatNumber(statistics?.viewCount)
                    
                    }</p>
          </div></NavLink>
   )
}
export default VideoCard;
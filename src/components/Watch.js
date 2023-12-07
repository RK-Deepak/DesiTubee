import React, { useState } from 'react'

// import Live from './Live';

import WatchVideo from './WatchVIdeo';
import { closemenu } from '../utils/Redux/Slices/SideBarSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Live from './Live';
import useWatch from '../hooks/useWatch';

import CommentsList from './CommentsList';
import { CommentsData } from '../utils/constant';
import { removechatdata } from '../utils/Redux/Slices/LiveChatSlice';
const Watch = () => 
{
  const [showcomment,setshowComment]=useState(false
    );
  const dispatch=useDispatch();

  dispatch(closemenu())

  const [searchParams] = useSearchParams();
  let value=searchParams.get("v");
  console.log(value);
  
  useWatch(value);

dispatch(removechatdata());
   
    
  return (
    <div className='flex  flex-col sm:flex-row relative   gap-2  w-[90%] mx-auto -z-10 '>
    <div className='flex flex-col gap-2 justify-evenly mx-auto w-[100%]   h-fit '>
     <WatchVideo />
     <div className='border border-slate-800 shadow-lg shadow-slate-600  p-2 w-[100%] max-w-[900px]  '>
      <div className='flex justify-between px-3 ' onClick={()=>setshowComment((prev)=>!prev)}>
      <h2 className='font-bold underline text-md sm:text-lg  '>Comments</h2>
      {showcomment?"⬆️":"⬇️"}
      </div>
     {showcomment &&  <CommentsList datax={CommentsData}/>}
     </div>
     </div>
     <div className={`p-2 border border-slate-600 w-full sm:w-[40%] shadow-lg shadow-slate-700 sm:${showcomment ? 'h-full' : 'h-[658px]'}  ` }>
     <Live showfull={showcomment} />
     </div>
     
   
   
    </div>
   
  
  )
  }
  


export default Watch;

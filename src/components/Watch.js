import React from 'react'

// import Live from './Live';

import WatchVideo from './WatchVIdeo';
import { closemenu } from '../utils/Redux/Slices/SideBarSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Live from './Live';
import useWatch from '../hooks/useWatch';
const Watch = () => 
{
  const dispatch=useDispatch();

  dispatch(closemenu())

  const [searchParams] = useSearchParams();
  let value=searchParams.get("v");
  console.log(value);
  
  useWatch(value);

   
    
  return (
    <div className='flex gap-2 justify-evenly mx-auto w-[100%] max-w-[1100px]  '>
     <WatchVideo />
     <div className='p-2 border  border-slate-600 w-[30%]  shadow-lg  shadow-slate-700 h-[530px]'>
     <Live  />
     </div>
   
    </div>
  )
  }
  


export default Watch;

import React, { useEffect, useState } from 'react'
import { GiBearFace } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { addchatdata } from '../utils/Redux/Slices/LiveChatSlice';
import { generateRandomIndianName, generateRandomShortMessage } from '../utils/helperfn';
import { IoSend } from 'react-icons/io5';

const LiveComments=()=>
{
          const [enteredvalue,setenteredvalue]=useState("");
          const dispatch=useDispatch();
          useEffect(()=>
          {
                   let timerid=setInterval(()=>
                   {
                         dispatch(addchatdata({name:generateRandomIndianName(),message:generateRandomShortMessage()}));
                   },300)

                    return ()=>
                    {
                              clearInterval(timerid);
                    }
          })

          const sendperosnaltext=(e)=>
          {
                    e.preventDefault();
                    dispatch((addchatdata({name:"RK_Deepak",message:enteredvalue})));
                    setenteredvalue("");
          }

          const chatdatax=useSelector((store)=>store.chat.chatdata);
   return (
          <div>
   <div className="border border-slate-400 w-[100%] h-[540px] overflow-y-scroll p-2 shadow-lg shadow-slate-500 rounded-sm flex flex-col-reverse">

      <div >

          {
                    chatdatax.map((ch,index)=>
                    <div key={index} className='flex flex-col gap-1 my-1 border-b pb-1 border-slate-600'>
                              <div className='flex gap-1 text-sm items-center'>
                                <GiBearFace className='text-blue-500'/>
                                <span className='font-bold text-red-500 text-[10px]  sm:text-xs'>{ch.name}</span>
                                </div>
                               <p className='  border-l pl-1 border-slate-600 text-[9px] sm:text-[11px] text-green-600'> {ch.message}</p>

                    </div>
                              )
          }


      </div>
      
   </div>
    <form className='flex justify-between p-1 relative shadow-lg ' onSubmit={sendperosnaltext} >
    <input type='text' value={enteredvalue} onChange={(e)=>setenteredvalue(e.target.value)} className='border border-slate-500 w-full placeholder:font-semibold placeholder:text-[9px]  sm:placeholder:text-xs placeholder:text-slate-700 p-1 shadow-slate-500 rounded-sm' placeholder='Apka Paigam....'/>
    <button className='absolute right-2 top-3' onClick={sendperosnaltext} ><IoSend className=' text-sm sm:text-md' /></button>
</form>
</div>

   )
} 
export default LiveComments;
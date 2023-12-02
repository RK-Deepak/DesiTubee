import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { buttonArray } from '../utils/constant';
import Videos from './Videos';


const Container=()=>


{ 
        
const sidebar=useSelector((store)=>store.side.isopen);
          return(
                    <div className={`border-2  p-2 ${sidebar?"w-[90%]":"w-full"} mx-auto`}>
                            {/* <div className='flex justify-evenly py-1 overflow-x-scroll  gap-1 px-4 buttonscroll w-[80%] mx-auto'>
                               {
                                buttonArray.map((btn,index)=><button key={index} className='px-2 py-1 bg-slate-500 text-black font-semibold rounded-md flex-none'>{btn}</button>)
                               }
                            </div> */}
                            <div>
                              <Videos/>
                            </div>
                    </div>
          )

}
export default Container
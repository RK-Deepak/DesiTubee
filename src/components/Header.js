import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearchHeart } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoPlayForwardSharp } from "react-icons/io5";
import youtubelgo from "../../assets/youtube.png";
import namelogo from "../../assets/logo.png"
import { useDispatch, useSelector } from 'react-redux';
import { togglemneu } from '../utils/Redux/Slices/SideBarSlice';
import { addPopular } from '../utils/Redux/Slices/videosSlice';

import { addsearchresult } from '../utils/Redux/Slices/SearchCacheSlice';



const Header=()=>
{

          const [searchtext,setsearchtext]=useState("");
          const [hamburger,sethamburger]=useState(false);
          const [suggeston,setsuggestion]=useState([]);
          const cachedata=useSelector((store)=>store.cache); 
          const dispatch=useDispatch();

          const showsearch=()=>
          {
                    sethamburger((prev)=>!prev);
          }

         const changehandler=(e)=>
          {
              
                let value=e.target.value;
                setsearchtext(value);
          }

          const searchingvalue = async (e) => {
            e.preventDefault();
            const searchTextValue = e.target.textContent;
            setsearchtext(searchTextValue);
           
          };

          const fetchSuggestion= async ()=>
          {
             const dataobj= await fetch('https://corsproxy.io/?https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+ searchtext);

             const data= await dataobj.json();

             console.log(data);
             setsuggestion(data[1]);
             dispatch(addsearchresult({ [searchtext]: data[1] }));
             console.log(suggeston);
          }

          useEffect(()=>
          {
            let timerid;
             if(cachedata[searchtext])
            {
              setsuggestion(cachedata[searchtext])
            }
            else 
            {
                timerid= setTimeout(()=>
                {
                    fetchSuggestion();
                },200)
            }
           return ()=>
            {
                clearTimeout(timerid);
            }
            },[searchtext])
         
          useEffect(()=>
          {
                    const handlesearchbar=()=>
                    {
                             
                              sethamburger(window.innerWidth<300);
                    }
                 
                     window.addEventListener("resize",handlesearchbar)

                  return ()=>window.removeEventListener("resize",handlesearchbar);
          },[])

  
       
  return (
          <div className='flex justify-between px-4 items-center border shadow-lg py-2 sm:py-0 mx-auto  w-full '>
      <div className={`flex items-center ${hamburger?"hidden":"flex"} `}>
          <GiHamburgerMenu className='text-2xl cursor-pointer' onClick={()=>dispatch(togglemneu())}/>
         <div className='flex justify-center items-center cursor-pointer '>
                    <img src={youtubelgo} alt='' className='w-[100px] max-h-[80px] -mr-8 hidden sm:block ' />
                    <img src={namelogo} alt='' className='max-w-[120px] max-h-[80px] '/>
          </div>
      </div>
   
      <div className={`relative w-[90%] sm:w-[50%] rounded-lg bg-slate-400 border-2 gap-2 border-slate-400 justify-evenly items-center ${hamburger?"flex":"hidden"} sm:flex p-1 `}>

          <input type='text' name='search' value={searchtext} onChange={changehandler}  placeholder='Search...' className='border border-slate-600  w-[90%] rounded-lg px-2 py-1 placeholder:font-bold placeholder:text-slate-600 font-semibold ' autoComplete='off'/>
          <div className='  cursor-pointer pr-1 '>
          <BsSearchHeart className='text-2xl ' onClick={searchingvalue}/>
          </div>

          {suggeston.length!==0 
           &&
      <div className='text-white absolute  w-[100%] top-14  list-none flex flex-col gap-2 rounded-b-md p-2 z-40 bg-slate-600 font-semibold '>
            {suggeston.map((eachsuggestion)=>
            (
                <li key={eachsuggestion} className=' flex gap-2 hover:bg-blue-100 hover:p-2 hover:text-black rounded-sm text-white ' onClick={searchingvalue}>👀<p>{eachsuggestion}</p></li>
            ))}
      </div>}

          

      </div>
     
     
      


      <div className='flex gap-1 items-center' >
      <RiAccountPinCircleFill className={`text-2xl cursor-pointer ${hamburger?"hidden":"block"} `} />
      <BsSearchHeart className={`block text-xl  sm:hidden  md:text-2xl' ${hamburger?"hidden":"block"} `} onClick={showsearch}/>
      <IoPlayForwardSharp className={`flex gap-1 items-center text-2xl ${hamburger?"block":"hidden"}`} onClick={showsearch}/>
      
      </div>
          </div>
  )
}
export default Header;
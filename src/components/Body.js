import React from 'react'
import Sidebar from './Sidebar';
import Container from './Container';
import { Outlet } from 'react-router';
import useGetPopular from '../hooks/useGetPopular';

const Body=()=>
{
  useGetPopular();
  return (
          <div className='flex gap-1 p-1 '>
         
              <Sidebar/>

              <Outlet/>
          </div>
  )
}
export default Body;
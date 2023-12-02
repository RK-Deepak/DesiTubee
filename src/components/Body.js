import React from 'react'
import Sidebar from './Sidebar';
import Container from './Container';
import { Outlet } from 'react-router';

const Body=()=>
{
  return (
          <div className='flex gap-1 p-1 '>
              <Sidebar/>

              <Outlet/>
          </div>
  )
}
export default Body;
import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./Slices/SideBarSlice";

export const Appstore=configureStore(
          {
                    reducer: {

                              side:SidebarSlice,


                    }
          }
         
       
)

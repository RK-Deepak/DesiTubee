import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./Slices/SideBarSlice";
import VideosSlice from "./Slices/videosSlice";
import SearchCacheSlice from "./Slices/SearchCacheSlice";


export const Appstore=configureStore(
          {
                    reducer: {

                              side:SidebarSlice,
                             videos:VideosSlice,
                             cache:SearchCacheSlice,


                    }
          }
         
       
)

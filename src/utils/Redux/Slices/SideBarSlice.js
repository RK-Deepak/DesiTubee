import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice=createSlice(
          {
                    name:"side",
                    initialState:
                    {
                              isopen:false,
                    },
                    reducers:
                    {
                              togglemneu:(state,action)=>
                              {
                                        state.isopen=!state.isopen;
                              },
                              closemenu:(state,action)=>
                              {
                                   state.isopen=false;
                              }
                    }
          }
)
export const {togglemneu,closemenu}=SidebarSlice.actions;

export default SidebarSlice.reducer;
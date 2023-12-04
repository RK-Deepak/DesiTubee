import { createSlice } from "@reduxjs/toolkit";

const SearchCacheSlice=createSlice(
          {
                    name:"cache",
                    initialState:{},
                    reducers:{
                              addsearchresult:(state,action)=>
                              {
                                        return {...state,...action.payload};
                              }
                    }
          }
)
export const {addsearchresult} =SearchCacheSlice.actions;
export default SearchCacheSlice.reducer;
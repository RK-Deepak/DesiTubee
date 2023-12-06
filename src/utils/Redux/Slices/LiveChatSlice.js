import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice=createSlice(
          {
                    name:"chat",
                    initialState:{
                              chatdata:[],
                    },
                    reducers:{
                        addchatdata:(state,action)=>
                        {
                            if(state.chatdata.length>=12)
                            {
                                state.chatdata.splice(12,1)
                            }
                              state.chatdata.unshift(action.payload);
                              
                        },
                        removechatdata:(state,action)=>
                        {
                            state.chatdata.length=0;
                        }
                    }

          }
)
export const {addchatdata,removechatdata}=LiveChatSlice.actions;
export default LiveChatSlice.reducer;
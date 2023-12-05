import { createSlice } from "@reduxjs/toolkit";

const VideosSlice = createSlice({
  name: "videos",
  initialState: {
    popularVideo:[],
    watchVideo: [],
    relatedVideo: [],
  },
  reducers: {
    addmovie: (state, action) => {
      state.watchVideo = action.payload;
    },
    removeMovie: (state, action) => {
      state.watchVideo.length = 0;
    },
    addRelatedMovie: (state, action) => {
      state.relatedVideo = action.payload;
    },
    addPopular:(state,action)=>
    {
        state.popularVideo=action.payload;
    }
  },
});

export const { addmovie, removeMovie, addRelatedMovie,addPopular } = VideosSlice.actions;
export default VideosSlice.reducer;

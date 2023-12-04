import { createSlice } from "@reduxjs/toolkit";

const VideosSlice = createSlice({
  name: "videos",
  initialState: {
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
  },
});

export const { addmovie, removeMovie, addRelatedMovie } = VideosSlice.actions;
export default VideosSlice.reducer;

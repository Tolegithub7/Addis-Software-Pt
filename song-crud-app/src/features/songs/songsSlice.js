import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  loading: false,
  error: null,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    fetchSongsStart(state) {
      state.loading = true;
    },
    fetchSongsSuccess(state, action) {
      state.loading = false;
      state.songs = action.payload;
    },
    fetchSongsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    createSongStart(state) {
      state.loading = true;
    },
    createSongSuccess(state, action) {
      state.loading = false;
      state.songs.push(action.payload);
    },
    createSongFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    // Add similar reducers for update and delete
  },
});

export const {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongStart,
  createSongSuccess,
  createSongFailure,
} = songsSlice.actions;

export default songsSlice.reducer;

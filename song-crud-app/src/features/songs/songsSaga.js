import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongStart,
  createSongSuccess,
  createSongFailure,
} from "./songsSlice";

function* fetchSongs() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* createSong(action) {
  try {
    const response = yield call(
      axios.post,
      "https://jsonplaceholder.typicode.com/posts",
      action.payload
    );
    yield put(createSongSuccess(response.data));
  } catch (error) {
    yield put(createSongFailure(error.message));
  }
}

// Add similar sagas for update and delete

function* songsSaga() {
  yield takeEvery(fetchSongsStart.type, fetchSongs);
  yield takeEvery(createSongStart.type, createSong);
}

export default songsSaga;

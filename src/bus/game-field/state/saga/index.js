// Core
import { takeLatest } from 'redux-saga/effects';
// Types
import * as types from "../types";
// Workers
import { fetchGameSettingsWorker } from "./workers";

export function* watcher() {
  yield takeLatest(types.FETCH_GAME_SETTINGS_REQUEST, fetchGameSettingsWorker)
}

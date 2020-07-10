// Core
import { takeLatest } from 'redux-saga/effects';
// Types
import * as types from "../types";
// Workers
import { fetchWinnersWorker } from "./workers";

export function* watcher() {
  yield takeLatest(types.FETCH_WINNERS_REQUEST, fetchWinnersWorker)
}

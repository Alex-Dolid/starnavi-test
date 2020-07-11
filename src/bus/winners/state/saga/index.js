// Core
import { takeLatest } from 'redux-saga/effects';
// Types
import * as types from "../types";
// Workers
import { fetchWinnersWorker, sendWinnerWorker } from "./workers";

export function* watcher() {
  yield takeLatest(types.FETCH_WINNERS_REQUEST, fetchWinnersWorker);
  yield takeLatest(types.SEND_WINNER_REQUEST, sendWinnerWorker);
}

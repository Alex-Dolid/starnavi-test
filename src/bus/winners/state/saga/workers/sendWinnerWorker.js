// Core
import { call, put } from "redux-saga/effects"
// Api actions
import {sendWinnerAPI} from "../../api";
// Actions
import {sendWinnerFailed, sendWinnerSuccess} from "../../action";

export function* sendWinnerWorker({payload}) {
  const {winner, date} = payload;
  try {
    const {data} = yield call(sendWinnerAPI, winner, date);
    yield put(sendWinnerSuccess(data))
  } catch (e) {
    yield put(sendWinnerFailed(e));
    alert(e);
  }
}

// Core
import { call, put } from "redux-saga/effects"
import {fetchWinnersAPI} from "../../api";
import {fetchWinnersFailed, fetchWinnersSuccess} from "../../action";
// Actions

export function* fetchWinnersWorker() {
  try {
    const {data} = yield call(fetchWinnersAPI);
    yield put(fetchWinnersSuccess(data))
  } catch (e) {
    yield put(fetchWinnersFailed(e));
  }
}

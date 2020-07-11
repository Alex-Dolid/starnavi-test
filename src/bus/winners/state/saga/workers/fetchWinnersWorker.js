// Core
import { call, put } from "redux-saga/effects"
// Api actions
import {fetchWinnersAPI} from "../../api";
// Actions
import {fetchWinnersFailed, fetchWinnersSuccess} from "../../action";

export function* fetchWinnersWorker() {
  try {
    const {data} = yield call(fetchWinnersAPI);
    yield put(fetchWinnersSuccess(data))
  } catch (e) {
    yield put(fetchWinnersFailed(e));
    alert(e);
  }
}

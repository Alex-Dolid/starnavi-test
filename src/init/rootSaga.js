import {all} from 'redux-saga/effects';
//sagas
import { watcher as winnersWatcher } from "../bus/winners/state/saga";

export default function* rootSaga() {
  yield all([
    winnersWatcher()
  ]);
}

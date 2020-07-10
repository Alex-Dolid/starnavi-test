// Core
import {all} from 'redux-saga/effects';
// Sagas
import { watcher as winnersWatcher } from "../bus/winners/state/saga";
import { watcher as gameFieldWatcher } from "../bus/game-field/state/saga";

export default function* rootSaga() {
  yield all([
    winnersWatcher(),
    gameFieldWatcher()
  ]);
}

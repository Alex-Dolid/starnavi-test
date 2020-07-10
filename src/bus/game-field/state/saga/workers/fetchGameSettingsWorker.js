// Core
import { call, put } from "redux-saga/effects"
// Api Actions
import {fetchGameSettingsAPI} from "../../api";
// Actions
import {fetchGameSettingsFailed, fetchGameSettingsSuccess} from "../../action";

export function* fetchGameSettingsWorker() {
  try {
    const {data} = yield call(fetchGameSettingsAPI);
    yield put(fetchGameSettingsSuccess(data))
  } catch (e) {
    yield put(fetchGameSettingsFailed(e));
  }
}

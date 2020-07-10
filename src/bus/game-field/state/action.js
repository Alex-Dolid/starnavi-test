// Types
import * as types from "./types";

export const fetchGameSettings = () => ({type: types.FETCH_GAME_SETTINGS_REQUEST});
export const fetchGameSettingsSuccess = winners => ({type: types.FETCH_GAME_SETTINGS_SUCCESS, payload: winners});
export const fetchGameSettingsFailed = error => ({type: types.FETCH_GAME_SETTINGS_FAILED, payload: error});

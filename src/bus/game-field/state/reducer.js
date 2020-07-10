// Libs
import produce from "immer";
// Types
import * as types from "./types";

const initState = {
  settings: null,
  isLoading: false,
  error: null
};

export const gameFieldReducer = produce((draft, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_GAME_SETTINGS_REQUEST:
      draft.isLoading = true;
      break;
    case types.FETCH_GAME_SETTINGS_SUCCESS:
      draft.isLoading = false;
      draft.settings = payload;
      break;
    case types.FETCH_GAME_SETTINGS_FAILED:
      draft.isLoading = false;
      draft.error = payload;
      break;
    default:
      return draft;
  }

}, initState);

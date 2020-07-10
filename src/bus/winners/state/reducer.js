// Libs
import produce from "immer";
// Types
import * as types from "./types";

const initState = {
  data: null,
  isLoading: false,
  error: null
};

export const winnersReducer = produce((draft, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_WINNERS_REQUEST:
      draft.isLoading = true;
      break;
    case types.FETCH_WINNERS_SUCCESS:
      draft.isLoading = false;
      draft.data = payload;
      break;
    case types.FETCH_WINNERS_FAILED:
      draft.isLoading = false;
      draft.error = payload;
      break;
    default:
      return draft;
  }

}, initState);

// Libs
import produce from "immer";
// Types
import * as types from "./types";

const initState = {
  data: [],
  isLoading: false,
  error: null
};

export const winnersReducer = produce((draft, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_WINNERS_REQUEST:
    case types.SEND_WINNER_REQUEST:
      draft.isLoading = true;
      break;
    case types.FETCH_WINNERS_SUCCESS:
    case types.SEND_WINNER_SUCCESS:
      draft.isLoading = false;
      draft.data = payload;
      break;
    case types.FETCH_WINNERS_FAILED:
    case types.SEND_WINNER_FAILED:
      draft.isLoading = false;
      draft.error = payload;
      break;
    default:
      return draft;
  }

}, initState);

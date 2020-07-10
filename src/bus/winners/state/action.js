import * as types from "./types";

export const fetchWinners = () => ({type: types.FETCH_WINNERS_REQUEST});
export const fetchWinnersSuccess = winners => ({type: types.FETCH_WINNERS_SUCCESS, payload: winners});
export const fetchWinnersFailed = error => ({type: types.FETCH_WINNERS_FAILED, payload: error});

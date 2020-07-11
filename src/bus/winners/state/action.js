import * as types from "./types";

export const fetchWinners = () => ({type: types.FETCH_WINNERS_REQUEST});
export const fetchWinnersSuccess = winners => ({type: types.FETCH_WINNERS_SUCCESS, payload: winners});
export const fetchWinnersFailed = error => ({type: types.FETCH_WINNERS_FAILED, payload: error});

export const sendWinner = (winner, date) => ({type: types.SEND_WINNER_REQUEST, payload: {winner, date}});
export const sendWinnerSuccess = winners => ({type: types.SEND_WINNER_SUCCESS, payload: winners});
export const sendWinnerFailed = error => ({type: types.SEND_WINNER_FAILED, payload: error});

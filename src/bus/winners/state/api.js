import api from "../../../api";

export const fetchWinnersAPI = () => api.get("winners");
export const sendWinnerAPI = (winner, date) => api.post("winners", {
  winner,
  date
});

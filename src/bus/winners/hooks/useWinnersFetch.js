// Core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions
import { fetchWinners } from "../action";

export const useWinnersFetch = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(state => state.winners);

  useEffect(() => dispatch(fetchWinners()), []);

  return {
    data,
    isLoading
  }

};

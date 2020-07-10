// Core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions
import { fetchWinners } from "../state/action";

export const useWinnersFetch = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(state => state.winners);

  useEffect(() => {
    dispatch(fetchWinners())
  }, [dispatch]);

  return {
    data,
    isLoading,
    error
  }

};

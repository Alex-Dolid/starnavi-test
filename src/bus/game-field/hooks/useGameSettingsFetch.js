// Core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions
import { fetchGameSettings } from "../state/action";

export const useGameSettingsFetch = () => {
  const dispatch = useDispatch();
  const { settings, isLoading, error } = useSelector(state => state.gameField);

  useEffect(() => {
    dispatch(fetchGameSettings())
  }, [dispatch]);

  return {
    settings,
    isLoading,
    error
  }

};

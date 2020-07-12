// Core
import React, {useCallback, useReducer, useState} from "react";
// Libs
import {format} from "date-fns";
// State
import {useDispatch} from "react-redux";
import {sendWinner} from "../winners/state/action";
// Components
import Select from "../../components/Select";
import GameTable from "../../components/GameTable";
// Hooks
import {useGameSettingsFetch} from "./hooks/useGameSettingsFetch";
// Helpers
import {isEmptyObj} from "../../helpers";

const GameField = () => {
  const dispatch = useDispatch();
  const {settings, isLoading, error} = useGameSettingsFetch();

  const [gameControls, setGameControls] = useState({
    isPlaying: false,
    winner: ""
  });
  const [stateInputGroup, setStateInputGroup] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      gameMode: null,
      userName: "",
    }
  );

  const options = [];
  if (!isEmptyObj(settings)) Object.keys(settings).forEach(item => {
    options.push({value: item, label: item})
  });

  // InputGroup handlers
  const handleGameMode = useCallback((gameMode) => {
    !gameControls.isPlaying && setStateInputGroup({gameMode})
  }, [setStateInputGroup, gameControls.isPlaying]);

  const handleUserName = useCallback((e) => {
    !gameControls.isPlaying && setStateInputGroup({userName: e.target.value})
  }, [setStateInputGroup, gameControls.isPlaying]);

  const startGame = useCallback(() => {
    if (
      !gameControls.isPlaying &&
      stateInputGroup.userName &&
      stateInputGroup.gameMode
    ) {
      setGameControls({isPlaying: true});
    }
  }, [stateInputGroup, gameControls]);

  // GameTable helpers
  const getGameSetting = useCallback(() => {
    if (!isEmptyObj(settings) && stateInputGroup.gameMode) return settings[stateInputGroup.gameMode]
  }, [settings, stateInputGroup.gameMode]);

  const finishGame = useCallback((winner) => {
    winner = winner === "user" ? stateInputGroup.userName : "Computer";
    setGameControls({
      ...gameControls,
      winner,
      isPlaying: false
    });

    dispatch(sendWinner(winner, format(new Date(), "HH:mm; dd MMMM yyyy")));
  }, [gameControls, stateInputGroup.userName, dispatch]);

  return (
    <div className="container">
      <div className="game-field">
        <div className="input-group">
          <Select
            options={options}
            placeholder="Pick game mode"
            isLoading={isLoading}
            error={error}
            value={stateInputGroup.gameMode}
            onChange={handleGameMode}
          />
          <input
            type="text"
            className="input"
            placeholder="Enter your name"
            value={stateInputGroup.userName}
            onChange={handleUserName}
          />
          <button type="button" className="button" onClick={startGame}>{gameControls.winner ? "Play again" : "Play"}</button>
        </div>
        <GameTable
          settings={gameControls.isPlaying ? getGameSetting() : undefined}
          isPlaying={gameControls.isPlaying}
          finishGame={gameControls.isPlaying ? finishGame : undefined}
          message={gameControls.winner}
        />
      </div>
    </div>
  )
};

export default GameField;

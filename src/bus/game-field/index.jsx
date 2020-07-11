// Core
import React, {useCallback, useReducer, useState} from "react";
// Components
import Select from "../../components/Select";
import GameTable from "../../components/GameTable";
// Hooks
import {useGameSettingsFetch} from "./hooks/useGameSettingsFetch";
// Helpers
import {isEmptyObj} from "../../helpers";

const GameField = () => {
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
    setGameControls({
      ...gameControls,
      winner: winner === "user" ? stateInputGroup.userName : "Computer",
      isPlaying: false
    });

  }, [gameControls, stateInputGroup.userName]);

  return (
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
        settings={getGameSetting()}
        isPlaying={gameControls.isPlaying}
        finishGame={finishGame}
        message={gameControls.winner}
      />
    </div>
  )
};

export default GameField;

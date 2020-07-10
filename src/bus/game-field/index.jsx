// Core
import React, {useReducer, useCallback} from "react";
// Components
import Select from "../../components/Select";
// Hooks
import {useGameSettingsFetch} from "./hooks/useGameSettingsFetch";
// Helpers
import {isEmptyObj} from "../../helpers";

const GameField = () => {
  const {settings, isLoading, error} = useGameSettingsFetch();
  const [stateInputGroup, setStateInputGroup] = useReducer((state, newState) => ({...state, ...newState}), {
    gameMode: null,
    userName: null,
    isPlayed: false
  });

  const options = [];
  if (!isEmptyObj(settings)) Object.keys(settings).forEach(item => {
    options.push({value: item, label: item})
  });

  // InputGroup handlers
  const handleGameMode = useCallback((gameMode) => setStateInputGroup({gameMode}),[setStateInputGroup]);
  const handleUserName = useCallback((e) => setStateInputGroup({userName: e.target.value}), [setStateInputGroup]);

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
        <button type="button" className="button">Play</button>
      </div>
    </div>
  )
};

export default GameField;

// Core
import React, {memo, useCallback, useEffect, useReducer} from "react";
// Styles
import "./index.scss";
// Helpers
import {getRandomInteger} from "../../helpers";

const GameTable = ({settings = {}, isPlaying = false, finishGame, message = ""}) => {
  const [stateCountersSelectedCells, setStateCountersSelectedCells] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      user: new Set(),
      computer: new Set()
    }
  );

  const field = settings.field ? settings.field : 0;
  let quantityCells = field * field;
  const arrCells = [];
  while (quantityCells) {
    arrCells.push("_");
    quantityCells--;
  }

  const checkForWinnings = useCallback(() => {
    const quantityAllCells = field * field;
    const winningNumber = quantityAllCells / 2;

    if (stateCountersSelectedCells.user.size > winningNumber) {
      return "user";
    } else if (stateCountersSelectedCells.computer.size > winningNumber) {
      return "computer"
    } else {
      return false;
    }
  }, [field, stateCountersSelectedCells]);

  const handleClickUser = useCallback((e) => {
    const targetClassList = e.target.classList;

    if (targetClassList.contains("game-table__cell")) {

      if (targetClassList.contains("game-table__cell_target")) {
        targetClassList.remove("game-table__cell_target");
        targetClassList.add("game-table__cell_user");

        stateCountersSelectedCells.user.add(+e.target.dataset.id);
        setStateCountersSelectedCells({computer: new Set(stateCountersSelectedCells.computer)});
      }
    }
  }, [stateCountersSelectedCells]);

  const handleClickComputer = useCallback(() => {
    const targetClassList = document.querySelector(".game-table__cell_target").classList;

    targetClassList.remove("game-table__cell_target");
    targetClassList.add("game-table__cell_computer");

  }, []);

  const _finishGame = useCallback((winner) => {
    setStateCountersSelectedCells({
      user: new Set(),
      computer: new Set()
    });
    finishGame && finishGame(winner);
  }, [finishGame]);

  const playing = useCallback((prevState) => {

    if (!prevState) {
      const allCellsNode = document.querySelectorAll(".game-table__cell");
      let randomSelectedCell = getRandomInteger(0, allCellsNode.length - 1, [...stateCountersSelectedCells.user, ...stateCountersSelectedCells.computer]);

      const targetNode = allCellsNode[randomSelectedCell];
      targetNode.classList.add("game-table__cell_target");

      setTimeout(() => {
        if (!targetNode.classList.contains("game-table__cell_user")) {
          targetNode.classList.add("game-table__cell_computer");
          stateCountersSelectedCells.computer.add(randomSelectedCell);
          setStateCountersSelectedCells({computer: new Set(stateCountersSelectedCells.computer)});
        }

        const resultCheckForWinnings = checkForWinnings();
        if (!resultCheckForWinnings) {
          playing();
        } else {
          _finishGame(resultCheckForWinnings)
        }

      }, settings.delay)
    }
  }, [checkForWinnings, settings, stateCountersSelectedCells, _finishGame]);

  useEffect(() => {
    if (isPlaying) playing();
  }, [isPlaying]);

  return (
    <div className="game-table">
      <h3 className="game-table__message">{message}</h3>
      <div
        className="game-table__body"
        style={{
          gridTemplate: `repeat(${field}, auto)/repeat(${field}, auto)`
        }}
        onClick={handleClickUser}
      >
        {
          isPlaying ?
            arrCells.map((item, i) => (
              <div
                key={i}
                className="game-table__cell"
                style={{
                  border: "1px solid #d9d9d9",
                }}
                data-id={i}
              />
            ))
            :
            null
        }
      </div>
    </div>
  )
};

export default memo(GameTable);

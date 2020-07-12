// Core
import React, {useCallback, useEffect, useState, memo} from "react";
// Styles
import "./index.scss";
// Components
import LeaderCard from "../LeaderCard";

// Local helpers
const getRemadeArr = arr => [...arr].reverse();


const LeaderBoard = ({arrWinners}) => {
  const [stateArrWinners, setStateArrWinners] = useState(getRemadeArr(arrWinners));

  // animation effect helper
  const setTimeOut = useCallback((cards, i) => {
    if (!cards) cards = document.querySelectorAll(".leader-card");
    setTimeout(() => {
      cards[i].style.display = "flex";
      if (cards[++i]) setTimeOut(cards, i);
    }, 50);
  }, []);

  // effects
  useEffect(() => {
    setStateArrWinners(getRemadeArr(arrWinners));
  }, [arrWinners]);

  useEffect(() => {
    setTimeOut(undefined, 0);
  }, [setTimeOut, stateArrWinners]);

  return (
    <div className="leader-board">
      {
        stateArrWinners.map(winner => <LeaderCard key={winner.id} winner={winner} style={{display: "none"}}/>)
      }
    </div>
  )
};

export default memo(LeaderBoard);

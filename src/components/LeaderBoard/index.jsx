// Core
import React, {useEffect, useCallback, useState} from "react";
// Styles
import "./index.scss";
// Components
import LeaderCard from "../LeaderCard";

// Local helpers
const getRemadeArr = arr => [...arr].reverse();

const LeaderBoard = ({arrWinners, isLoading}) => {
  const [stateArrWinners, setStateArrWinners] = useState(getRemadeArr(arrWinners));

  // animation effect helper
  const setTimeOut = useCallback((cards, i) => {
    setTimeout(() => {
      cards[i].style.display = "flex";
      if (cards[++i]) setTimeOut(cards, i);
    }, 50);
  }, []);

  // effects
  useEffect(() => {
    if (!isLoading) {
      setStateArrWinners(getRemadeArr(arrWinners));
    }
  },[arrWinners, isLoading]);

  useEffect(() => {
    const allCards = document.querySelectorAll(".leader-card");
    setTimeOut(allCards, 0);
  },[setTimeOut]);

  return (
    <div className="leader-board">
      {
        stateArrWinners.map(winner => <LeaderCard key={winner.id} winner={winner} style={{display: "none"}}/>)
      }
    </div>
  )
};

export default LeaderBoard;

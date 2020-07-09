// Core
import React from "react";
// Styles
import "./index.scss";
// Components
import LeaderCard from "../LeaderCard";

const LeaderBoard = ({arrWinners}) => {
  return (
    <div className="leaderBoard">
      {
        arrWinners.map(winner => <LeaderCard winner={winner}/>)
      }
    </div>
  )
};

export default LeaderBoard;

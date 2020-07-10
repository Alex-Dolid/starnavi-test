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
        arrWinners.map(winner => <LeaderCard key={winner.id} winner={winner}/>)
      }
    </div>
  )
};

export default LeaderBoard;

// Core
import React from "react";
// Styles
import "./index.scss";

const LeaderCard = ({winner}) => {
  return (
    <div className="leaderCard">
      <div className="leaderCard__winner">{winner.winner}</div>
      <div className="leaderCard__date">{winner.date}</div>
    </div>
  )
};

export default LeaderCard;

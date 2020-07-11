// Core
import React from "react";
// Styles
import "./index.scss";

const LeaderCard = ({winner, ...props}) => {
  return (
    <div className="leader-card" {...props}>
      <div className="leader-card__winner">{winner.winner}</div>
      <div className="leader-card__date">{winner.date}</div>
    </div>
  )
};

export default LeaderCard;

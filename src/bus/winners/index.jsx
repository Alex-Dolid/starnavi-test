// Core
import React from "react";
// Components
import LeaderBoard from "../../components/LeaderBoard";
// Hooks
import { useWinnersFetch } from "./hooks/useWinnersFetch";
// Helpers
import { isEmptyArray } from "../../helpers";

const Winners = () => {
  const { data, isLoading, error } = useWinnersFetch();

  const errorMessageJSX = error && <p className="error">{error}</p>;
  const loaderJSX = isLoading && <p className="loading">Loading data from API...</p>;

  return (
    <div className="container">
      <div className="container-inner container-inner_with-divider">
        <h1 className="title">Leader Board</h1>
        {errorMessageJSX}
        {loaderJSX}
        {
          !isLoading && !isEmptyArray(data) ?
            <LeaderBoard arrWinners={data} />
            :
            null
        }
      </div>
    </div>
  )
};

export default Winners;

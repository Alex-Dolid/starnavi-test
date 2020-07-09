// Core
import React from "react";
// Components
import LeaderBoard from "../../components/LeaderBoard";
// Hooks
import { useWinnersFetch } from "./hooks/useWinnersFetch";
// Helpers
import { isEmptyArray } from "../../helpers";

const Winners = () => {
  const { data, isLoading } = useWinnersFetch();

  const loaderJSX = isLoading && <p>Loading data from API...</p>;

  return (
    <>
      <h1>Leader Board</h1>
      {loaderJSX}
      {
        !isLoading && !isEmptyArray(data) ?
          <LeaderBoard arrWinners={data} />
          :
          null
      }
    </>
  )
};

export default Winners;

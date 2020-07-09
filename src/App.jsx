// Core
import React from "react"
import { Provider as ReduxProvider } from "react-redux";
// Other
import { configureStore } from "./init/store";
// Domains
import GameFiled from "./bus/game-field";
import Winners from "./bus/winners";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const App = () => (
  <ReduxProvider store={reduxStore}>
    <div className="app-wrapper">
      <GameFiled/>
      <Winners/>
    </div>
  </ReduxProvider>
);

export default App;

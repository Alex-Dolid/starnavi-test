// Core
import {combineReducers} from 'redux';
//reducers
import { winnersReducer as winners } from "../bus/winners/state/reducer";
import { gameFieldReducer as gameField } from "../bus/game-field/state/reducer";


const rootReducer = combineReducers({
  winners,
  gameField
});

export default rootReducer;

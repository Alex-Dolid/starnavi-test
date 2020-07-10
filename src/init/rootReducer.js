import {combineReducers} from 'redux';
//reducers
import { winnersReducer as winners } from "../bus/winners/state/reducer";


const rootReducer = combineReducers({
  winners
});

export default rootReducer;

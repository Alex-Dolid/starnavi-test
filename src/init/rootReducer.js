import {combineReducers} from 'redux';
//reducers
import { winnersReducer as winners } from "../bus/winners/reducer";


const rootReducer = combineReducers({
  winners
});

export default rootReducer;

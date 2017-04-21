import { combineReducers } from 'redux';
import rouletteReducer from './roulette';
import debugReducer from './debug';


// combine って hashmap (mapToPropsするときに state.roulette.hoge とかで参照)だったのか
const rootReducer = combineReducers({
  roulette : rouletteReducer,
  debug : debugReducer
});

export default rootReducer;

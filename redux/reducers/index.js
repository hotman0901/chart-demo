import { combineReducers } from 'redux';
import coinmarketcap from './coinmarketcap';
import pie from './pie';


const rootReducer = combineReducers({
    coinmarketcap,
    pie
});

export default rootReducer;

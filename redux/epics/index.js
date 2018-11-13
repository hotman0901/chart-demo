import { combineEpics } from 'redux-observable';
import coinmarketcapEpics from './coinmarketcap';
import pieEpic from './pie';


const epics = combineEpics(
    ...coinmarketcapEpics,
    ...pieEpic
);

export default epics;

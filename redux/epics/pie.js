import { of } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { get } from 'superagent';
import * as pieActions from '../actions/pie';
import * as types from '../actionTypes';

const fetchPiepic = (action$) => {
    return action$
        .pipe(
            ofType(types.FETCH_PIE_REQ),
            mergeMap((action) => {
                return get(`https://api.coinmarketcap.com/v2/ticker/?limit=${action.query}`);
            }),
            map((res) => {
                return pieActions.fetchPieSuc(
                    res.body.data
                );
            }),
            catchError((err) => {
                return of(
                    pieActions.fetchPieErr(
                        err.response
                    )
                );
            })
        );
};

export default [
    fetchPiepic
];

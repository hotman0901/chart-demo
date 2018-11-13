import * as types from '../actionTypes';

export const fetchPie = ({ query }) => {
    return {
        type: types.FETCH_PIE_REQ,
        query: !query.limit ? 10 : query.limit
    };
};

export const fetchPieSuc = (data) => {
    return {
        type: types.FETCH_PIE_SUC,
        data
    };
};

export const fetchPieErr = () => ({
    type: types.FETCH_PIE_ERR
});

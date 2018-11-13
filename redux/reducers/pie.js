const initialState = [];

export default function pie(state = initialState, action = {})
{
    switch (action.type)
    {
        case 'FETCH_PIE_SUC':
            return {
                ...action.data
            };

        case 'FETCH_PIE_ERR':
            return state;

        default:
            return state;
    }
}

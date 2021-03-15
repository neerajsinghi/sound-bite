import * as ActionTypes from './ActionTypes';

export const SnakeCables = (state = {
    isLoading: true,
    errMess: null,
    snakeCables: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SNAKE_CABLES:
            return { ...state, isLoading: false, errMess: null, snakeCables: action.payload };

        case ActionTypes.SNAKE_CABLES_LOADING:
            return { ...state, isLoading: true, errMess: null, snakeCables: [] }

        case ActionTypes.SNAKE_CABLES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
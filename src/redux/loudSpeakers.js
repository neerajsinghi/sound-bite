import * as ActionTypes from './ActionTypes';

export const LoudSpeakers = (state = {
    isLoading: true,
    errMess: null,
    loudSpeakers: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LOUDSPEAKERS:
            return { ...state, isLoading: false, errMess: null, loudSpeakers: action.payload };

        case ActionTypes.LOUDSPEAKERS_LOADING:
            return { ...state, isLoading: true, errMess: null, loudSpeakers: [] }

        case ActionTypes.LOUDSPEAKERS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
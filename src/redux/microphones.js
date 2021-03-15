import * as ActionTypes from './ActionTypes';

export const Microphones = (state = {
    isLoading: true,
    errMess: null,
    microphones: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MICROPHONES:
            return { ...state, isLoading: false, errMess: null, microphones: action.payload };

        case ActionTypes.MICROPHONES_LOADING:
            return { ...state, isLoading: true, errMess: null, microphones: [] }

        case ActionTypes.MICROPHONES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
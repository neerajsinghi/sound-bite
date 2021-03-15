import * as ActionTypes from './ActionTypes';

export const PowerAmplifiers = (state = {
    isLoading: true,
    errMess: null,
    powerAmplifiers: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_POWER_AMPLIFIERS:
            return { ...state, isLoading: false, errMess: null, powerAmplifiers: action.payload };

        case ActionTypes.POWER_AMPLIFIERS_LOADING:
            return { ...state, isLoading: true, errMess: null, powerAmplifier: [] }

        case ActionTypes.POWER_AMPLIFIERS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
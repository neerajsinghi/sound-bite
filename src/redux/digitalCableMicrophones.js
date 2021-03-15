import * as ActionTypes from './ActionTypes';

export const Connectors = (state = {
    isLoading: true,
    errMess: null,
    connectors: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DIGITAL_CABLE_MICROPHONES:
            return { ...state, isLoading: false, errMess: null, connectors: action.payload };

        case ActionTypes.DIGITAL_CABLE_MICROPHONES_LOADING:
            return { ...state, isLoading: true, errMess: null, connectors: [] }

        case ActionTypes.DIGITAL_CABLE_MICROPHONES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
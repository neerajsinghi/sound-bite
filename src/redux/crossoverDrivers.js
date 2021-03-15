import * as ActionTypes from './ActionTypes';

export const CompressionDrivers = (state = {
    isLoading: true,
    errMess: null,
    compressionDrivers: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CROSSOVER_DRIVERS:
            return { ...state, isLoading: false, errMess: null, compressionDrivers: action.payload };

        case ActionTypes.CROSSOVER_DRIVERS_LOADING:
            return { ...state, isLoading: true, errMess: null, compressionDrivers: [] }

        case ActionTypes.CROSSOVER_DRIVERS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
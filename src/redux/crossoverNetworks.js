import * as ActionTypes from './ActionTypes';

export const CrossoverNetworks = (state = {
    isLoading: true,
    errMess: null,
    crossOverNetworks: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CROSSOVER_NETWORKS:
            return { ...state, isLoading: false, errMess: null, crossOverNetworks: action.payload };

        case ActionTypes.CROSSOVER_NETWORKS_LOADING:
            return { ...state, isLoading: true, errMess: null, crossOverNetworks: [] }

        case ActionTypes.CROSSOVER_NETWORKS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
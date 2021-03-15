import * as ActionTypes from './ActionTypes';

export const LoudSpeakerSystems = (state = {
    isLoading: true,
    errMess: null,
    loudSpeakerSystems: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LOUDSPEAKER_SYSTEMS:
            return { ...state, isLoading: false, errMess: null, loudSpeakerSystems: action.payload };

        case ActionTypes.LOUDSPEAKER_SYSTEMS_LOADING:
            return { ...state, isLoading: true, errMess: null, loudSpeakerSystems: [] }

        case ActionTypes.LOUDSPEAKER_SYSTEMS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
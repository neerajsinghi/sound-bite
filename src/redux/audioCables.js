import * as ActionTypes from './ActionTypes';

export const AudioCables = (state = {
    isLoading: true,
    errMess: null,
    audioCables: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_AUDIO_CABLES:
            return { ...state, isLoading: false, errMess: null, audioCables: action.payload };

        case ActionTypes.AUDIO_CABLES_LOADING:
            return { ...state, isLoading: true, errMess: null, audioCables: [] }

        case ActionTypes.AUDIO_CABLES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
import * as ActionTypes from './ActionTypes';

export const DigitalCableSpeakerLights = (state = {
    isLoading: true,
    errMess: null,
    digitalCableSpeakerLights: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DIGITAL_CABLE_SPEAKER_LIGHTS:
            return { ...state, isLoading: false, errMess: null, digitalCableSpeakerLights: action.payload };

        case ActionTypes.DIGITAL_CABLE_SPEAKER_LIGHTS_LOADING:
            return { ...state, isLoading: true, errMess: null, digitalCableSpeakerLights: [] }

        case ActionTypes.DIGITAL_CABLE_SPEAKER_LIGHTS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
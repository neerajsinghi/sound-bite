import { LOUDSPEAKER } from '../shared/loudspeaker';
import { LOUDSPEAKERSYSTEMS } from '../shared/loudspeakerSystem';

export const initialState = {
    loudSpeakers: LOUDSPEAKER,
    loudSpeakerSystems: LOUDSPEAKERSYSTEMS
};

export const Reducer = (state = initialState, action) => {
    return state;
};
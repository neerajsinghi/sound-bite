import { createStore, combineReducers } from 'redux';
import { Loudspeakers } from './loudspeaker';
import { LoudspeakerSystems } from './loudspeakerSystems';

export const ConfigureState = () => {
    const store = createStore(
        combineReducers({
            loudSpeakers: Loudspeakers,
            loudSpeakerSystems: LoudspeakerSystems
        })
    );
    return store;
}
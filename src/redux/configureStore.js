import { createStore, combineReducers, applyMiddleware } from 'redux';
import { LoudSpeakers } from './loudSpeakers';
import { LoudSpeakerSystems } from './loudSpeakerSystems';
import { createForms } from 'react-redux-form';
import { InitialProduct } from './forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { AudioCables } from './audioCables';
import { CompressionDrivers } from './crossoverDrivers';
import { CrossoverNetworks } from './crossoverNetworks';
import { Connectors } from './digitalCableMicrophones';
import { DigitalCableSpeakerLights } from './digitalCableSpeakerLights';
import { Microphones } from './microphones';
import { PowerAmplifiers } from './powerAmplifiers';
import { SnakeCables } from './snakeCables';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            loudSpeakers: LoudSpeakers,
            loudSpeakerSystems: LoudSpeakerSystems,
            audioCables: AudioCables,
            compressionDrivers: CompressionDrivers,
            crossOverNetworks: CrossoverNetworks,
            connectors: Connectors,
            digitalCableSpeakerLights: DigitalCableSpeakerLights,
            microphones: Microphones,
            powerAmplifiers: PowerAmplifiers,
            snakeCables: SnakeCables,
            ...createForms({
                product: InitialProduct
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
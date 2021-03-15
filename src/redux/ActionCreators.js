import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchLoudSpeakers = () => (dispatch) => {

    dispatch(loudSpeakersLoading(true));

    return fetch(baseUrl + '/getsoundbiteitems?category=LoudSpeakers')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(loudspeakers => {
            var data = loudspeakers['data'];
            console.log(data);
            if (data.length > 0) {
                dispatch(addLoudSpeakers(data));
            }
        })
        .catch(error => dispatch(loudSpeakersFailed(error.message)));
}

export const loudSpeakersLoading = () => ({
    type: ActionTypes.LOUDSPEAKERS_LOADING
});

export const loudSpeakersFailed = (errmess) => ({
    type: ActionTypes.LOUDSPEAKERS_FAILED,
    payload: errmess
});

export const addLoudSpeakers = (loudspeakers) => ({
    type: ActionTypes.ADD_LOUDSPEAKERS,
    payload: loudspeakers
});

export const fetchLoudSpeakerSystems = () => (dispatch) => {

    dispatch(loudSpeakerSystemsLoading(true));

    return fetch(baseUrl + '/getsoundbiteitems?category=LoudSpeakerSystems')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(loudspeakerSystems => dispatch(addLoudSpeakerSystems(loudspeakerSystems['data'])))
        .catch(error => dispatch(loudSpeakerSystemsFailed(error.message)));
}

export const loudSpeakerSystemsLoading = () => ({
    type: ActionTypes.LOUDSPEAKER_SYSTEMS_LOADING
});

export const loudSpeakerSystemsFailed = (errmess) => ({
    type: ActionTypes.LOUDSPEAKER_SYSTEMS_FAILED,
    payload: errmess
});

export const addLoudSpeakerSystems = (loudSpeakerSystems) => ({
    type: ActionTypes.ADD_LOUDSPEAKER_SYSTEMS,
    payload: loudSpeakerSystems
});




export const fetchAudioCables = () => (dispatch) => {

    dispatch(audioCablesLoading(true));

    return fetch(baseUrl + '/getsoundbiteitems?category=AudioCables')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(audioCables => dispatch(addAudioCables(audioCables['data'])))
        .catch(error => dispatch(audioCablesFailed(error.message)));
}

export const audioCablesLoading = () => ({
    type: ActionTypes.AUDIO_CABLES_LOADING
});

export const audioCablesFailed = (errmess) => ({
    type: ActionTypes.AUDIO_CABLES_FAILED,
    payload: errmess
});

export const addAudioCables = (audioCables) => ({
    type: ActionTypes.ADD_AUDIO_CABLES,
    payload: audioCables
});

export const fetchCompressionDrivers = () => (dispatch) => {

    dispatch(compressionDriversLoading(true));

    return fetch(baseUrl + '/getsoundbiteitems?category=CompressionDriver')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(compressionDrivers => dispatch(addCompressionDriver(compressionDrivers['data'])))
        .catch(error => dispatch(compressionDriversFailed(error.message)));
}

export const compressionDriversLoading = () => ({
    type: ActionTypes.CROSSOVER_DRIVERS_LOADING
});

export const compressionDriversFailed = (errmess) => ({
    type: ActionTypes.CROSSOVER_DRIVERS_FAILED,
    payload: errmess
});

export const addCompressionDriver = (compressionDrivers) => ({
    type: ActionTypes.ADD_CROSSOVER_DRIVERS,
    payload: compressionDrivers
});

export const fetchCrossoverNetworks = () => (dispatch) => {

    dispatch(crossoverNetworksLoading(true));

    return fetch(baseUrl + '/getsoundbiteitems?category=CrossOverNetworks')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(crossoverNetworks => dispatch(addCrossoverNetworks(crossoverNetworks['data'])))
        .catch(error => dispatch(crossoverNetworksFailed(error.message)));
}

export const crossoverNetworksLoading = () => ({
    type: ActionTypes.CROSSOVER_NETWORKS_LOADING
});

export const crossoverNetworksFailed = (errmess) => ({
    type: ActionTypes.CROSSOVER_NETWORKS_FAILED,
    payload: errmess
});

export const addCrossoverNetworks = (crossoverNetworks) => ({
    type: ActionTypes.ADD_CROSSOVER_NETWORKS,
    payload: crossoverNetworks
});

export const fetchConnectors = () => (dispatch) => {

    dispatch(connectorsLoading(true));

    return fetch(baseUrl + '/getsoundbiteitems?category=Connectors')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(connectors => dispatch(addConnectors(connectors['data'])))
        .catch(error => dispatch(connectorsFailed(error.message)));
}

export const connectorsLoading = () => ({
    type: ActionTypes.DIGITAL_CABLE_MICROPHONES_LOADING
});

export const connectorsFailed = (errmess) => ({
    type: ActionTypes.DIGITAL_CABLE_MICROPHONES_FAILED,
    payload: errmess
});

export const addConnectors = (connectors) => ({
    type: ActionTypes.ADD_DIGITAL_CABLE_MICROPHONES,
    payload: connectors
});

export const fetchDigitalCableSpeakerLights = () => (dispatch) => {

    dispatch(digitalCableSpeakerLightsLoading(true));

    return fetch(baseUrl + '/getsoundbiteitems?category=DigitalCableSpeakerLights')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(digitalCableSpeakerLights => dispatch(addDigitalCableSpeakerLights(digitalCableSpeakerLights['data'])))
        .catch(error => dispatch(digitalCableSpeakerLightsFailed(error.message)));
}

export const digitalCableSpeakerLightsLoading = () => ({
    type: ActionTypes.DIGITAL_CABLE_SPEAKER_LIGHTS_LOADING
});

export const digitalCableSpeakerLightsFailed = (errmess) => ({
    type: ActionTypes.DIGITAL_CABLE_SPEAKER_LIGHTS_FAILED,
    payload: errmess
});

export const addDigitalCableSpeakerLights = (digitalCableSpeakerLights) => ({
    type: ActionTypes.ADD_DIGITAL_CABLE_SPEAKER_LIGHTS,
    payload: digitalCableSpeakerLights
});

export const fetchMicrophones = () => (dispatch) => {

    dispatch(microphonesLoading(true));

    return fetch(baseUrl + '/getsoundbiteitems?category=Microphones')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(microphones => dispatch(addMicrophones(microphones['data'])))
        .catch(error => dispatch(microphonesFailed(error.message)));
}

export const microphonesLoading = () => ({
    type: ActionTypes.MICROPHONES_LOADING
});

export const microphonesFailed = (errmess) => ({
    type: ActionTypes.MICROPHONES_FAILED,
    payload: errmess
});

export const addMicrophones = (microphones) => ({
    type: ActionTypes.ADD_MICROPHONES,
    payload: microphones
});

export const fetchPowerAmplifiers = () => (dispatch) => {

    dispatch(powerAmplifiersLoading(true));

    return fetch(baseUrl + '/getsoundbiteitems?category=PowerAmplifiers')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(powerAmplifiers => dispatch(addPowerAmplifiers(powerAmplifiers['data'])))
        .catch(error => dispatch(powerAmplifiersFailed(error.message)));
}

export const powerAmplifiersLoading = () => ({
    type: ActionTypes.POWER_AMPLIFIERS_LOADING
});

export const powerAmplifiersFailed = (errmess) => ({
    type: ActionTypes.POWER_AMPLIFIERS_FAILED,
    payload: errmess
});

export const addPowerAmplifiers = (powerAmplifiers) => ({
    type: ActionTypes.ADD_POWER_AMPLIFIERS,
    payload: powerAmplifiers
});




export const fetchSnakeCables = () => (dispatch) => {

    dispatch(snakeCablesLoading(true));

    return fetch(baseUrl + '/getsoundbiteitems?category=SnakeCables')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(snakeCables => dispatch(addSnakeCables(snakeCables['data'])))
        .catch(error => dispatch(snakeCablesFailed(error.message)));
}

export const snakeCablesLoading = () => ({
    type: ActionTypes.SNAKE_CABLES_LOADING
});

export const snakeCablesFailed = (errmess) => ({
    type: ActionTypes.SNAKE_CABLES_FAILED,
    payload: errmess
});

export const addSnakeCables = (snakeCables) => ({
    type: ActionTypes.ADD_SNAKE_CABLES,
    payload: snakeCables
});









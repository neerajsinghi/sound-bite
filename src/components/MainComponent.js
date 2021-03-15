import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import { connect } from 'react-redux';
import About from './AboutComponent';
import Contact from './ContactComponent';
import LoudSpeaker from './LoudSpeakersComponent';
import LoudSpeakerDetail from './LoudSpeakerDetailComponent';
import { Container } from 'reactstrap';
import {
    fetchLoudSpeakers,
    fetchLoudSpeakerSystems,
    fetchAudioCables,
    fetchCompressionDrivers,
    fetchCrossoverNetworks,
    fetchConnectors,
    fetchDigitalCableSpeakerLights,
    fetchMicrophones,
    fetchPowerAmplifiers,
    fetchSnakeCables
} from '../redux/ActionCreators';
import AudioCable from './AudioCablesComponent';
import AudioCableDetail from './AudioCableDetailComponent';
import CompressionDriver from './CompressionDriverComponent';
import CompressionDriverDetail from './CompressionDriverDetailComponent';
import CrossoverNetwork from './CrossoverNetworkComponent';
import CrossoverNetworkDetail from './CrossoverNetworkDetailComponent';
import LoudSpeakerSystem from './LoudSpeakerSystemComponent';
import LoudSpeakerSystemDetail from './LoudSpeakerSystemDetailComponent';
import MicrophoneDetail from './MicrophoneDetailComponent';
import Microphone from './MicrophoneComponent';
import PowerAmplifier from './PowerAmplifierComponent';
import PowerAmplifierDetail from './PoweramplifierDetailComponent';
import SnakeCable from './SnakeCableComponent';
import SnakeCableDetail from './SnakeCableDetailComponent';
import Connector from './ConnectorsComponent';
import ConnectorDetail from './ConnectorDetailComponent';

const mapStateToProps = state => {
    return {
        loudSpeakers: state.loudSpeakers,
        loudSpeakerSystems: state.loudSpeakerSystems,
        audioCables: state.audioCables,
        compressionDrivers: state.compressionDrivers,
        crossOverNetworks: state.crossOverNetworks,
        connectors: state.connectors,
        digitalCableSpeakerLights: state.digitalCableSpeakerLights,
        microphones: state.microphones,
        powerAmplifiers: state.powerAmplifiers,
        snakeCables: state.snakeCables
    }
}
const mapDispatchToProps = dispatch => ({
    fetchLoudSpeakers: () => { dispatch(fetchLoudSpeakers()) },
    fetchLoudSpeakerSystems: () => { dispatch(fetchLoudSpeakerSystems()) },
    fetchAudioCables: () => { dispatch(fetchAudioCables()) },
    fetchCompressionDrivers: () => { dispatch(fetchCompressionDrivers()) },
    fetchCrossoverNetworks: () => { dispatch(fetchCrossoverNetworks()) },
    fetchConnectors: () => { dispatch(fetchConnectors()) },
    fetchDigitalCableSpeakerLights: () => { dispatch(fetchDigitalCableSpeakerLights()) },
    fetchMicrophones: () => { dispatch(fetchMicrophones()) },
    fetchPowerAmplifiers: () => { dispatch(fetchPowerAmplifiers()) },
    fetchSnakeCables: () => { dispatch(fetchSnakeCables()) },
});




class Main extends Component {
    componentDidMount() {
        this.props.fetchLoudSpeakers();
        this.props.fetchLoudSpeakerSystems();
        this.props.fetchAudioCables();
        this.props.fetchCompressionDrivers();
        this.props.fetchCrossoverNetworks();
        this.props.fetchConnectors();
        this.props.fetchDigitalCableSpeakerLights();
        this.props.fetchMicrophones();
        this.props.fetchPowerAmplifiers();
        this.props.fetchSnakeCables();

    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    featuredItems={this.props.featuredItems}
                />
            );
        }

        const AboutPage = () => {
            return (
                <About
                />
            );
        }
        const ContactPage = () => {
            return (
                <Contact
                />
            );
        }
        const LoudSpeakersPage = () => {
            return (
                <LoudSpeaker
                    featuredItems={this.props.loudSpeakers.loudSpeakers}
                />
            );
        }
        const LoudSpeakersWithId = ({ match }) => {
            return (
                <LoudSpeakerDetail loudSpeaker={this.props.loudSpeakers.loudSpeakers.filter((loudSpeaker) => loudSpeaker.id === match.params.loudSpeakerId)[0]}
                />
            );
        };
        const AudioCablePage = () => {
            return (
                <AudioCable
                    audioCables={this.props.audioCables.audioCables}
                />
            );
        };
        const AudioCablesWithId = ({ match }) => {
            return (
                <AudioCableDetail audioCable={this.props.audioCables.audioCables.filter((loudSpeaker) => loudSpeaker.id === match.params.loudSpeakerId)[0]}
                />
            );
        };
        const CompressionDriverPage = () => {
            return (
                <CompressionDriver
                    compressiondrivers={this.props.compressionDrivers.compressionDrivers}
                />
            );
        };
        const CompressionDriversWithId = ({ match }) => {
            return (
                <CompressionDriverDetail compressionDriver={this.props.compressionDrivers.compressionDrivers.filter((loudSpeaker) => loudSpeaker.id === match.params.loudSpeakerId)[0]}
                />
            );
        };
        const ConnectorPage = () => {
            return (
                <Connector
                    connectors={this.props.connectors.connectors}
                />
            );
        };
        const ConnectorWithId = ({ match }) => {
            return (
                <ConnectorDetail connector={this.props.connectors.connectors.filter((loudSpeaker) => loudSpeaker.id === match.params.loudSpeakerId)[0]}
                />
            );
        };
        const CrossoverNetworkPage = () => {
            return (
                <CrossoverNetwork
                    crossoverNetworks={this.props.crossOverNetworks.crossOverNetworks}
                />
            );
        };
        const CrossoverNetworkWithId = ({ match }) => {
            return (
                <CrossoverNetworkDetail crossoverNetwork={this.props.crossOverNetworks.crossOverNetworks.filter((loudSpeaker) => loudSpeaker.id === match.params.loudSpeakerId)[0]}
                />
            );
        };
        const LoudSpeakerSystemPage = () => {
            return (
                <LoudSpeakerSystem
                    loudSpeakerSystems={this.props.loudSpeakerSystems.loudSpeakerSystems}
                />
            );
        };
        const LoudSpeakerSystemWithId = ({ match }) => {
            return (
                <LoudSpeakerSystemDetail loudSpeakerSystem={this.props.loudSpeakerSystems.loudSpeakerSystems.filter((loudSpeakerSystem) => loudSpeakerSystem.id === match.params.loudSpeakerSystemId)[0]}
                />
            );
        };
        const MicrophonePage = () => {
            return (
                <Microphone
                    microphones={this.props.microphones.microphones}
                />
            );
        };
        const MicrophoneWithId = ({ match }) => {
            return (
                <MicrophoneDetail microphones={this.props.microphones.microphones.filter((loudSpeaker) => loudSpeaker.id === match.params.loudSpeakerId)[0]}
                />
            );
        };
        const PowerAmplifierPage = () => {
            return (
                <PowerAmplifier
                    powerAmplifiers={this.props.powerAmplifiers.powerAmplifiers}
                />
            );
        };
        const PowerAmplifierWithId = ({ match }) => {
            return (
                <PowerAmplifierDetail powerAmplifier={this.props.powerAmplifiers.powerAmplifiers.filter((loudSpeaker) => loudSpeaker.id === match.params.loudSpeakerId)[0]}
                />
            );
        };
        const SnakeCablePage = () => {
            return (
                <SnakeCable
                    snakeCables={this.props.snakeCables.snakeCables}
                />
            );
        };
        const SnakeCableWithId = ({ match }) => {
            return (
                <SnakeCableDetail snakeCable={this.props.snakeCables.snakeCables.filter((loudSpeaker) => loudSpeaker.id === match.params.loudSpeakerId)[0]}
                />
            );
        };

        return (
            <Container>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/aboutus' component={AboutPage} />
                    <Route exact path='/contactus' component={ContactPage} />
                    <Route exact path='/loudspeaker' component={LoudSpeakersPage} />
                    <Route path='/loudspeaker/:loudSpeakerId' component={LoudSpeakersWithId} />
                    <Route exact path='/loudSpeakerSystem' component={LoudSpeakerSystemPage} />
                    <Route path='/loudSpeakerSystem/:loudSpeakerSystemId' component={LoudSpeakerSystemWithId} />
                    <Route exact path='/audioCable' component={AudioCablePage} />
                    <Route path='/audioCable/:loudSpeakerId' component={AudioCablesWithId} />
                    <Route exact path='/compressionDriver' component={CompressionDriverPage} />
                    <Route path='/compressionDriver/:loudSpeakerId' component={CompressionDriversWithId} />
                    <Route exact path='/connector' component={ConnectorPage} />
                    <Route path='/connector/:loudSpeakerId' component={ConnectorWithId} />
                    <Route exact path='/crossoverNetwork' component={CrossoverNetworkPage} />
                    <Route path='/crossoverNetwork/:loudSpeakerId' component={CrossoverNetworkWithId} />
                    <Route exact path='/microphone' component={MicrophonePage} />
                    <Route path='/microphone/:loudSpeakerId' component={MicrophoneWithId} />
                    <Route exact path='/snakeCable' component={SnakeCablePage} />
                    <Route path='/snakeCable/:loudSpeakerId' component={SnakeCableWithId} />
                    <Route exact path='/powerAmplifier' component={PowerAmplifierPage} />
                    <Route path='/powerAmplifier/:loudSpeakerId' component={PowerAmplifierWithId} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </Container>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
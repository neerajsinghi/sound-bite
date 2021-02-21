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

const mapStateToProps = state => {
    return {
        loudSpeakers: state.loudSpeakers,
        loudSpeakerSystems: state.loudSpeakerSystems,
        featuredItems: state.loudSpeakers
    }
}



class Main extends Component {


    render() {
        const HomePage = () => {
            return (
                <Home
                    featuredItems={this.props.featuredItems}
                />
            );
        }
        const LoudSpeakersPage = () => {
            return (
                <LoudSpeaker
                    featuredItems={this.props.loudSpeakers}
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
        const LoudSpeakersWithId = ({ match }) => {
            return (
                <LoudSpeakerDetail loudSpeaker={this.props.loudSpeakers.filter((loudSpeaker) => loudSpeaker.id === parseInt(match.params.loudSpeakerId, 10))[0]}
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
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </Container>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
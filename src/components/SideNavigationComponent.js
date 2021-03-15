import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";

export const SideNav = () => {
    return (
        <div className="col-12 col-md-3 side-links">
            <Card alignItems='center' className="side-card">
                <CardBody style={{ backgroundColor: 'white', borderRadius: '.25rem !important' }}>
                    <CardTitle className="header-link" >CATEGORY</CardTitle>
                    <NavLink className="nav-link " activeClassName="active" to='/loudspeaker'> Loudspeakers</NavLink>
                    <NavLink className="nav-link " activeClassName="active" to='/loudSpeakerSystem'> LoudSpeaker System</NavLink>
                    <NavLink className="nav-link " activeClassName="active" to='/microphone'> Microphones</NavLink>
                    <NavLink className="nav-link " activeClassName="active" to='/audioCable'> Audio Cables</NavLink>
                    <NavLink className="nav-link " activeClassName="active" to='/snakeCable'> Snake Cable</NavLink>
                    <NavLink className="nav-link " activeClassName="active" to='/powerAmplifier'> Power Amplifiers</NavLink>
                    <NavLink className="nav-link " activeClassName="active" to='/crossoverNetwork'> Crossover Network</NavLink>
                    <NavLink className="nav-link " activeClassName="active" to='/compressionDriver'> Compression Driver</NavLink>
                    <NavLink className="nav-link " activeClassName="active" to='/connector'> Connectors</NavLink>

                </CardBody>
            </Card>
        </div>

    );
}
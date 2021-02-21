import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardTitle, CardBody, CardImg } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

function RenderLoudSpeaker({ item }) {
    return (
        <Link to={`/loudspeaker/${item.id}`} >
            <Card alignItems="center" style={{ backgroundColor: '#2088e3', alignItems: 'center' }}>
                <CardImg width="100%" src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle bottom alignItems="center" tag="b1" className='home-product-text'>{item.name}</CardTitle>
                </CardBody>

            </Card >
        </Link>
    );

}

const LoudSpeaker = (props) => {
    const featuredItemsMap = props.featuredItems.map((item) => {
        return (<div key={item.id} className="col-6 col-md-3 mb-3">
            <RenderLoudSpeaker item={item} />
        </div>);
    });
    return (
        <div className="products">
            <div className="row">
                <Breadcrumb >
                    <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }}><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }} active>LoudSpeakers</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12 m-3">
                    <h3 className='page-title'>LoudSpeakers</h3>

                </div>
            </div>
            <div className="row  row-content content-text">
                <div className="col-12 col-md-3 side-links">
                    <Card>
                        <CardBody >
                            <CardTitle className="header-link" style={{ fontFamily: "Oswald,sans-serif", fontWeight: "bold" }}>CATEGORY</CardTitle>
                            <NavLink className="nav-link header-link" activeClassName="active" to='/loudspeaker'> Loudspeakers</NavLink>
                            <NavLink className="nav-link header-link" activeClassName="active" to='/loudSpeakerSystem'> LoudSpeaker System</NavLink>
                            <NavLink className="nav-link header-link" activeClassName="active" to='/microphones'> Microphones</NavLink>
                            <NavLink className="nav-link header-link" activeClassName="active" to='/audioCables'> Audio Cables</NavLink>
                            <NavLink className="nav-link header-link" activeClassName="active" to='/powerAmplifiers'> Power Amplifiers</NavLink>
                            <NavLink className="nav-link header-link" activeClassName="active" to='/crossoverNetwork'> Crossover Network</NavLink>
                            <NavLink className="nav-link header-link" activeClassName="active" to='/crossoverDriver'> Crossover Driver</NavLink>
                            <NavLink className="nav-link header-link" activeClassName="active" to='/snakeCables'> Snake Cable</NavLink>
                            <NavLink className="nav-link header-link" activeClassName="active" to='/digitalCableM'> Digital Cable (Microphones)</NavLink>
                            <NavLink className="nav-link header-link" activeClassName="active" to='/digitalCableSL'> Digital Cable (Speaker Light)</NavLink>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-8">

                    <div className="row">
                        {featuredItemsMap}
                    </div>
                </div>
            </div >
        </div >

    );
}

export default LoudSpeaker;
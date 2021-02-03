import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardTitle, CardBody, CardImg } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

function RenderLoudSpeaker({ item }) {
    return (
        <Link to={`/loudspeaker/${item.id}`} >
            <Card alignItems="center" style={{ color: '#333', alignItems: 'center' }}>
                <CardImg width="100%" src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle bottom alignItems="center" tag="h6" style={{ color: '#333', alignItems: 'center' }}>{item.name}</CardTitle>
                </CardBody>

            </Card >
        </Link>
    );

}

const LoudSpeaker = (props) => {
    const featuredItemsMap = props.featuredItems.map((item) => {
        return (<div key={item.id} className="col-12 col-md-3 mb-3">
            <RenderLoudSpeaker item={item} />
        </div>);
    });
    return (
        <div className="products">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>LoudSpeakers</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12 m-3">
                    <h3>LoudSpeakers</h3>
                    <hr />

                </div>
            </div>
            <div className="row  row-content">
                <div className="col-12 col-md-3">
                    <Card>
                        <CardBody >
                            <CardTitle>Categories</CardTitle>
                            <NavLink className="nav-link" activeClassName="active" to='/loudspeaker'>Loudspeakers</NavLink>
                            <NavLink className="nav-link" activeClassName="active" to='/mixer'>Mixers</NavLink>
                            <NavLink className="nav-link" activeClassName="active" to='/crossovernetworks'>Crossover Networks</NavLink>
                            <NavLink className="nav-link" activeClassName="active" to='/paamplifiers'>P.A Amplifiers</NavLink>
                            <NavLink className="nav-link" activeClassName="active" to='/loudspeakersystem'>Loudspeaker System</NavLink>
                            <NavLink className="nav-link" activeClassName="active" to='/amplifiers'>Amplifiers</NavLink>
                            <NavLink className="nav-link" activeClassName="active" to='/wallmountspeakers'>Wallmount Speakers</NavLink>
                            <NavLink className="nav-link" activeClassName="active" to='/microphones'>Microphones</NavLink>
                            <NavLink className="nav-link" activeClassName="active" to='/compressiondrivers'>Compression Drivers</NavLink>
                            <NavLink className="nav-link" activeClassName="active" to='/activecrossover'>Active Crossover</NavLink>





                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-8">

                    <div className="row">
                        {featuredItemsMap}
                    </div>
                </div>
            </div>
        </div >

    );
}

export default LoudSpeaker;
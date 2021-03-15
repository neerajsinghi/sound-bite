import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardTitle, CardBody, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { SideNav } from './SideNavigationComponent';

function RenderLoudSpeaker({ item }) {
    return (
        <Link to={`/loudspeaker/${item.id}`} >
            <Card alignItems="center" className="zoom card-products">
                <CardImg className="card-img-products" src={`/assets/images/${item.image}`} alt={item.name} />
                <CardBody>
                    <CardTitle bottom alignItems="center" tag="b1" className='home-product-text'>{item.name}</CardTitle>
                </CardBody>

            </Card >
        </Link>
    );

}

const LoudSpeaker = (props) => {
    const featuredItemsMap = props.featuredItems.map((item) => {
        return (<div key={item.id} className="col-6 col-md-4 mb-3">
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
                <SideNav />
                <div className="col-12 col-md-9">

                    <div className="row">
                        {featuredItemsMap}
                    </div>
                </div>
            </div >
        </div >

    );
}

export default LoudSpeaker;
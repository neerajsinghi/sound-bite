import React from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import CustomCarousal from './CarouselComponent';
import { Link } from 'react-router-dom';

function RenderProduct({ item }) {
    return (
        <Link to={`/${item.category}/${item.id}`} >

            <Card alignItems="center" style={{ color: '#333', alignItems: 'center' }}>
                <CardImg width="100%" src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle bottom alignItems="center" tag="h6" style={{ color: '#333', alignItems: 'center' }}>{item.name}</CardTitle>
                </CardBody>

            </Card >
        </Link>
    );

}

const Home = (props) => {
    const featuredItemsMap = props.featuredItems.map((item) => {
        return (<div key={item.id} className="col-12 col-md-3 mb-5">
            <RenderProduct item={item} />
        </div>);
    });
    return (
        <div className="home">
            <div className="row">
                <div className="col-12">
                    <CustomCarousal />
                </div>
            </div>
            <div className="row home-content">

                <div className="col-12 m-3">
                    <h3>Featured Products</h3>
                    <hr />

                </div>
            </div>
            <div className="row  row-content">
                <div className="container">

                    <div className="row">
                        {featuredItemsMap}
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Home;
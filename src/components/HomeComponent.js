import React from 'react';
import { Card, CardBody, CardImg } from 'reactstrap';
import CustomCarousal from './CarouselComponent';
import { Link } from 'react-router-dom';
const Home = () => {

    return (
        <div className="home">
            <div className="row">
                <div className="col-12">
                    <CustomCarousal />
                </div>
            </div>
            <div className="row home-content">

                <div className="col-12 m-3">
                    <h2 className='page-title'>OUR PRODUCTS</h2>


                </div>
            </div>
            <div className="row  row-content">
                <div className="container">

                    <div className="row">

                        <div className="col-12 col-md-3 mb-5">

                            <Link to={`/loudspeaker`} >

                                <Card className="zoom card-products" alignItems="center" >
                                    <CardImg className="card-img-products" src={"assets/images/LOUDSPEAKERS.jpg"
                                    } alt={"LoudSpeaker"} />
                                    <CardBody >
                                        <h3 className='home-product-text' >LoudSpeaker</h3>
                                    </CardBody>
                                </Card >
                            </Link>
                        </div>
                        <div className="col-12 col-md-3 mb-5">
                            <Link to={`/loudSpeakerSystem`} >
                                <Card className="zoom card-products" alignItems="center" >
                                    <CardImg className="card-img-products" src={"assets/images/LOUDSPEAKER SYSTEMS.jpg"
                                    } alt={"LOUDSPEAKER SYSTEMS"} />
                                    <CardBody >
                                        <h3 className='home-product-text' >LoudSpeaker System</h3>
                                    </CardBody>
                                </Card>
                            </Link>
                        </div>
                        <div className="col-12 col-md-3 mb-5">
                            <Link to={`/microphones`} >

                                <Card className="zoom card-products" alignItems="center" >
                                    <CardImg className="card-img-products" src={"assets/images/MICROPHONES.jpg"
                                    } alt={"MICROPHONES"} />
                                    <CardBody >
                                        <h3 className='home-product-text' >Microphones</h3>
                                    </CardBody>

                                </Card >
                            </Link>
                        </div>
                        <div className="col-12 col-md-3 mb-5">
                            <Link to={`/audioCable`} >

                                <Card className="zoom card-products" alignItems="center" >
                                    <CardImg className="card-img-products" src={"assets/images/AUDIO CABLES.jpg"
                                    } alt={"AUDIO CABLES"} />
                                    <CardBody >
                                        <h3 className='home-product-text' >Audio Cables</h3>
                                    </CardBody>


                                </Card >
                            </Link>
                        </div>
                        <div className="col-12 col-md-3 mb-5">
                            <Link to={`/powerAmplifier`} >

                                <Card className="zoom card-products" alignItems="center" >
                                    <CardImg className="card-img-products" src={"assets/images/POWER AMPLIFIERs.jpg"
                                    } alt={"POWER AMPLIFIERs"} />
                                    <CardBody >
                                        <h3 className='home-product-text' >Power Amplifiers</h3>
                                    </CardBody>
                                </Card >
                            </Link>
                        </div>
                        <div className="col-12 col-md-3 mb-5">
                            <Link to={`/crossoverNetwork`} >

                                <Card className="zoom card-products" alignItems="center" >
                                    <CardImg className="card-img-products" src={"assets/images/CROSSOVER NETWORKs.jpg"
                                    } alt={"CROSSOVER NETWORKs"} />
                                    <CardBody >
                                        <h3 className='home-product-text' >
                                            CrossOver Networks</h3>
                                    </CardBody>

                                </Card >

                            </Link>
                        </div>
                        <div className="col-12 col-md-3 mb-5">
                            <Link to={`/compressionDriver`} >

                                <Card className="zoom card-products" alignItems="center" >
                                    <CardImg className="card-img-products" src={"assets/images/CROSSOVER DRIVERS.jpg"
                                    } alt={"COMPRESSION DRIVERS"} />
                                    <CardBody >
                                        <h3 className='home-product-text' >Compression Drivers</h3>
                                    </CardBody>
                                </Card >
                            </Link>
                        </div>
                        <div className="col-12 col-md-3 mb-5">
                            <Link to={`/snakeCable`} >

                                <Card className="zoom card-products" alignItems="center" >
                                    <CardImg className="card-img-products" src={"assets/images/SNAKE CABLES.jpg"
                                    } alt={"SNAKE CABLES"} />
                                    <CardBody >
                                        <h3 className='home-product-text' >Snake Cables</h3>

                                    </CardBody>
                                </Card >

                            </Link>
                        </div>
                        <div className="col-12 col-md-3 mb-5">
                            <Link to={`/connectors`} >

                                <Card className="zoom card-products" alignItems="center" >
                                    <CardImg className="card-img-products" src={"assets/images/CONNECTORS.jpg"
                                    } alt={"Connectors"} />
                                    <CardBody >
                                        <h3 className='home-product-text' >Connectors</h3>

                                    </CardBody>
                                </Card >

                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    );
}

export default Home;
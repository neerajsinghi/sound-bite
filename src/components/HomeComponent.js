import React from 'react';
import { Card, CardImg } from 'reactstrap';
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

                        <div className="col-6 col-md-3 mb-5">
                            <Link to={`/loudspeaker`} >

                                <Card alignItems="center" style={{ backgroundColor: '#2088e3', alignItems: 'center' }}>
                                    <CardImg width="100%" src={"assets/images/LOUDSPEAKERS.jpg"
                                    } alt={"LoudSpeaker"} />

                                </Card >
                                <h3 className='home-product-text' style={{ color: '#2088e3', alignItems: 'center', padding: 10 }}>LoudSpeaker</h3>
                            </Link>
                        </div>
                        <div className="col-6 col-md-3 mb-5">
                            <Link to={`/louudSpeakerSystem`} >

                                <Card alignItems="center" style={{ backgroundColor: '#2088e3', alignItems: 'center' }}>
                                    <CardImg width="100%" src={"assets/images/LOUDSPEAKER SYSTEMS.jpg"
                                    } alt={"LOUDSPEAKER SYSTEMS"} />

                                </Card >
                                <h3 className='home-product-text' style={{ color: '#2088e3', alignItems: 'center', padding: 10 }}>LoudSpeaker System</h3>

                            </Link>
                        </div>
                        <div className="col-6 col-md-3 mb-5">
                            <Link to={`/microphones`} >

                                <Card alignItems="center" style={{ backgroundColor: '#2088e3', alignItems: 'center' }}>
                                    <CardImg width="100%" src={"assets/images/MICROPHONES.jpg"
                                    } alt={"MICROPHONES"} />


                                </Card >
                                <h3 className='home-product-text' style={{ color: '#2088e3', alignItems: 'center', padding: 10 }}>Microphones</h3>

                            </Link>
                        </div>
                        <div className="col-6 col-md-3 mb-5">
                            <Link to={`/audioCables`} >

                                <Card alignItems="center" style={{ backgroundColor: '#2088e3', alignItems: 'center' }}>
                                    <CardImg width="100%" src={"assets/images/AUDIO CABLES.jpg"
                                    } alt={"AUDIO CABLES"} />


                                </Card >
                            </Link>
                            <h3 className='home-product-text' style={{ color: '#2088e3', alignItems: 'center', padding: 10 }}>Audio Cables</h3>

                        </div>
                        <div className="col-6 col-md-3 mb-5">
                            <Link to={`/powerAmplifiers`} >

                                <Card alignItems="center" style={{ backgroundColor: '#2088e3', alignItems: 'center' }}>
                                    <CardImg width="100%" src={"assets/images/POWER AMPLIFIERs.jpg"
                                    } alt={"POWER AMPLIFIERs"} />
                                    {/*<CardBody >
                                        <CardTitle bottom alignItems="center" tag="b1"
                                            className='home-product-text'
                                        >Power Amplifiers</CardTitle>
                                    </CardBody>
                                    */}
                                </Card >
                                <h3 className='home-product-text' style={{ color: '#2088e3', alignItems: 'center', padding: 10 }}>Power Amplifiers</h3>

                            </Link>
                        </div>
                        <div className="col-6 col-md-3 mb-5">
                            <Link to={`/crossoverNetwork`} >

                                <Card alignItems="center" style={{ backgroundColor: '#2088e3', alignItems: 'center' }}>
                                    <CardImg width="100%" src={"assets/images/CROSSOVER NETWORKs.jpg"
                                    } alt={"CROSSOVER NETWORKs"} />
                                    {/* <CardBody >
                                        <CardTitle bottom alignItems="center" tag="b1" className='home-product-text'>CrossOver Networks</CardTitle>
                                    </CardBody>
*/}
                                </Card >
                                <h3 className='home-product-text' style={{ color: '#2088e3', alignItems: 'center', padding: 10 }}>CrossOver Networks</h3>

                            </Link>
                        </div>
                        <div className="col-6 col-md-3 mb-5">
                            <Link to={`/crossoverDriver`} >

                                <Card alignItems="center" style={{ backgroundColor: '#2088e3', alignItems: 'center' }}>
                                    <CardImg width="100%" src={"assets/images/CROSSOVER DRIVERS.jpg"
                                    } alt={"CROSSOVER DRIVERS"} />
                                    {/* <CardBody >
                                        <CardTitle bottom alignItems="center" tag="b1" className='home-product-text'>CrossOver Drivers</CardTitle>
                                    </CardBody>
                                */}
                                </Card >
                                <h3 className='home-product-text' style={{ color: '#2088e3', alignItems: 'center', padding: 10 }}>CrossOver Drivers</h3>

                            </Link>
                        </div>
                        <div className="col-6 col-md-3 mb-5">
                            <Link to={`/snakeCables`} >

                                <Card alignItems="center" style={{ backgroundColor: '#2088e3', alignItems: 'center' }}>
                                    <CardImg width="100%" src={"assets/images/SNAKE CABLES.jpg"
                                    } alt={"SNAKE CABLES"} />
                                    {/*     <CardBody >
                                        <CardTitle bottom alignItems="center" tag="b1" className='home-product-text'>Snake Cables</CardTitle>
                                    </CardBody>
*/}
                                </Card >
                                <h3 className='home-product-text' style={{ color: '#2088e3', alignItems: 'center', padding: 10 }}>Snake Cables</h3>

                            </Link>
                        </div>
                        <div className="col-6 col-md-3 mb-5">
                            <Link to={`/digitalCableM`} >

                                <Card alignItems="center" style={{ backgroundColor: '#2088e3', alignItems: 'center' }}>
                                    <CardImg width="100%" src={"assets/images/DIGITAL CABLES MICROPHONES.jpg"
                                    } alt={"DIGITAL CABLES MICROPHONES"} />
                                    {/*<CardBody >
                                        <CardTitle bottom alignItems="center" tag="b1" className='home-product-text'>Digital Cable (Microphones)</CardTitle>
                                    </CardBody>*/}

                                </Card >
                                <h3 className='home-product-text' style={{ color: '#2088e3', alignItems: 'center', padding: 10 }}>Digital Cable (Microphones)</h3>

                            </Link>
                        </div>
                        <div className="col-6 col-md-3 mb-5">
                            <Link to={`/digitalCableSL`} >

                                <Card alignItems="center" style={{ backgroundColor: '#2088e3', alignItems: 'center' }}>
                                    <CardImg width="100%" src={"assets/images/DIGITAL CABLES SPEAKERLIGHT.jpg"
                                    } alt={"DIGITAL CABLES SPEAKERLIGHT"} />
                                    {/* <CardBody >
                                        <CardTitle bottom alignItems="center" tag="b1" className='home-product-text'>Digital Cable (Speaker Light)</CardTitle>
                                    </CardBody>*/}

                                </Card >
                                <h3 className='home-product-text' style={{ color: '#2088e3', alignItems: 'center', padding: 10 }}>Digital Cable (Speaker Light)</h3>

                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    );
}

export default Home;
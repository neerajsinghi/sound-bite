import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';



function About(props) {



    return (
        <div className="aboutus">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <p>Since its launch, Soundbite has emerged as one of leading providers of premium quality pro-audio products.
                    We have a diverse product portfolio comprising loudspeakers, compression drivers, power amplifiers, snake
cables, microphones, connectors, audio cables, and loudspeaker systems.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12">
                    <h3>Why Us?</h3>
                    <hr />

                </div>
                <div className="col-12">
                    <p>We have a dedicated team of professional engineers working on the research and development of our products.
                    The product designs and specifications are finalised after conducting a series of tests, sampling and market
                    feedback. Our products are known for their best-in-class designs and superior raw material quality. We have a
well defined post sales service network and welcome continuous customer feedback to improve our products.</p>
                    <div className="container">

                        <Card style={{ backgroundColor: "#083daf" }} className="col-12 col-md-8 offset-md-2">
                            <CardImg width="100%" src={"/assets/images/work.png"} alt="workers" />
                        </Card>
                    </div>
                </div>


            </div>
        </div >

    );
}

export default About;    
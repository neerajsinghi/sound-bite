import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';



function About(props) {



    return (
        <div className="aboutus">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }}><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }} active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3 className='page-title'>ABOUT</h3>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <p className="content-text">Since its launch, Soundbite has emerged as one of leading providers of premium quality pro-audio products.
                    We have a diverse product portfolio comprising loudspeakers, compression drivers, power amplifiers, snake
cables, microphones, connectors, audio cables, and loudspeaker systems.</p>
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12">
                    <h3 className='page-title'>Why Us?</h3>

                </div>
                <div className="col-12">
                    <p className="content-text">We have a dedicated team of professional engineers working on the research and development of our products.
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
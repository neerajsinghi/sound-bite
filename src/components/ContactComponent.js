/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {
    Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label, Card, CardBody, CardTitle
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const defaultVals = {
    center: {
        lat: 28.658152,
        lng: 77.234757
    },
    zoom: 17
};
const InfoWindow = props => (
    (<div style={{ width: 60, height: 15, backgroundColor: 'blue' }}>{props.show}</div>))

const AnyReactComponent = props => (
    <React.Fragment>
        <div
            style={{
                border: "5px solid red",
                borderRadius: 20,
                height: 20,
                width: 20
            }}
        />
        <InfoWindow
            show={props.text}
        />
    </React.Fragment>
)

class Contact extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);


    }


    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    render() {
        const showInMapClicked = () => {
            window.open("https://maps.google.com?q=28.658152,77.234757");
        };
        return (
            <div className=" contactus">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }}><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }} active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3 className='page-title'>CONTACTS</h3>
                    </div>
                </div>
                <div className="row  ">
                    <div className="col-12  col-md-3 offset-md-1 mb-1">
                        <Card style={{ backgroundColor: '#2088e3' }}>
                            <CardBody className='home-product-text'>
                                <CardTitle>
                                    <i className="fa fa-envelope fa-lg"></i>:
                            </CardTitle>
                                <a href="mailto:purchase.shreeventures@gmail.com" style={{ color: 'white' }}>
                                    purchase.shreeventures@gmail.com</a>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12  col-md-3 mb-1">
                        <Card style={{ backgroundColor: '#2088e3' }}>
                            <CardBody className='home-product-text'>
                                <CardTitle>
                                    <i className="fa fa-map fa-lg"></i>:
                            </CardTitle>

                            1693/33, Seth Faqir Chand Market,<br />
                            Bhagirath Place, Delhi-110006<br />
		                    India<br />

                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12  col-md-3 mb-1">
                        <Card style={{ backgroundColor: '#2088e3' }}>
                            <CardBody className='home-product-text'>
                                <CardTitle>
                                    <i className="fa fa-phone fa-lg"></i>:
                            </CardTitle>
                             011-4986 8550<br />

                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row row-content ">
                    <div className="col-12  map">
                        <GoogleMapReact onClick={showInMapClicked}
                            bootstrapURLKeys={{ key: '' }}
                            defaultCenter={defaultVals.center}
                            defaultZoom={defaultVals.zoom}
                            info
                        >
                            <AnyReactComponent
                                lat={28.658152}
                                lng={77.234757}
                                text="SoundBite"
                            />
                        </GoogleMapReact>

                    </div>

                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3 className='page-title'>Any Enquiry</h3>
                    </div>
                    <div className="col-12 col-md-9 content-text">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group ">
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Inquiry</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div >
        );
    }
}
export default Contact;

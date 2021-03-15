/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {
    Card, CardBody, CardHeader,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';


function RenderMicrophone({ microphone }) {
    if (microphone != null)
        return (
            <ReactImageMagnify style={{
                zIndex: "9999"
            }} {...{
                smallImage: {
                    alt: microphone.name,

                    src: `/assets/images/450${microphone.image}`,
                    isFluidWidth: true
                },
                largeImage: {
                    src: `/assets/images/${microphone.image}`,
                    width: 1200,
                    height: 1800
                }
            }
                } />

        );
    else
        return (
            <div></div>
        );
}
function RenderDetail({ microphones }) {

    return (
        <Card className="m-1">
            <CardHeader style={{ backgroundColor: '#B23850', borderBottom: "solid  5px black", fontFamily: "Oswald" }}>{microphones.name}</CardHeader>
            <CardBody style={{ backgroundColor: "floralwhite", fontFamily: "Oswald" }}>
                <hr style={{ backgroundColor: '#083daf', borderTop: "dashed 1px" }} />
                <CardTitle style={{ color: '#083daf' }}>Description :</CardTitle>
                <hr style={{ backgroundColor: '#083daf' }} />
                <div className="row">
                    <div className="col-12 col-sm-6" style={{ color: '#083daf', fontSize: 14, fontFamily: "Oswald,sans-serif !important" }}>

                        Impedance : <span style={{ color: '#B23850' }}>{microphones.impedance}</span><br></br>
                        Directivity : <span style={{ color: '#B23850' }}>{microphones.directivity}</span><br></br>
                        Frequency Response : <span style={{ color: '#B23850' }}>{microphones.frequency_response}</span><br></br>

                    </div>
                </div>
            </CardBody>
        </Card >
    );

}

const MicrophoneDetail = (props) => {
    if (props.microphones)
        return (

            <div className="products">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }}><Link to="/microphone">Microphone</Link></BreadcrumbItem>
                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }} active>{props.microphones.name}</BreadcrumbItem>
                    </Breadcrumb>

                </div>
                <div className="row  row-content justify-content-center">


                    <RenderMicrophone className="col-12 col-md-4 m-s-1" microphone={props.microphones} />
                    <div body className="col-12 col-md-6 m-s-1">
                        <RenderDetail microphones={props.microphones} />

                    </div>


                </div>

            </div>
        );
    else return (

        <div>

        </div>
    );

}



export default MicrophoneDetail;
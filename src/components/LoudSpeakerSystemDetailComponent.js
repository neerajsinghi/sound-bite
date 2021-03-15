/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {
    Card, CardBody, CardHeader,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';


function RenderLoudSpeakerSystem({ loudSpeakerSystem }) {
    if (loudSpeakerSystem != null)
        return (
            <ReactImageMagnify style={{
                zIndex: "9999"
            }} {...{
                smallImage: {
                    alt: loudSpeakerSystem.name,

                    src: `/assets/images/${loudSpeakerSystem.image}`,
                    width: 300,
                    height: 450
                },
                largeImage: {
                    src: `/assets/images/${loudSpeakerSystem.image}`,
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
function RenderDetail({ loudSpeakerSystem }) {

    return (
        <Card className="m-1">
            <CardHeader style={{ backgroundColor: '#B23850', borderBottom: "solid  5px black", fontFamily: "Oswald" }}>{loudSpeakerSystem.name}</CardHeader>
            <CardBody style={{ backgroundColor: "floralwhite", fontFamily: "Oswald" }}>
                <hr style={{ backgroundColor: '#083daf', borderTop: "dashed 1px" }} />
                <CardTitle style={{ color: '#083daf' }}>Description :</CardTitle>
                <hr style={{ backgroundColor: '#083daf' }} />
                <div className="row">
                    <div className="col-12 col-sm-6" style={{ color: '#083daf', fontSize: 14, fontFamily: "Oswald,sans-serif !important" }}>

                        Rated Impedance : <span style={{ color: '#B23850' }}>{loudSpeakerSystem.rated_impedance}</span><br></br>
                        Sensitivity : <span style={{ color: '#B23850' }}>{loudSpeakerSystem.sensitivity}</span><br></br>
                        Power Rating : <span style={{ color: '#B23850' }}>{loudSpeakerSystem.power_rating}</span><br></br>
                        Frequency Response : <span style={{ color: '#B23850' }}>{loudSpeakerSystem.frequency_response}</span><br></br>

                    </div>
                    <div className="col-12 col-sm-6" style={{ color: '#083daf', fontSize: 14, fontFamily: "Oswald,sans-serif !important" }}>
                        Low Frequency Speaker : <span style={{ color: '#B23850' }}>{loudSpeakerSystem.low_frequency_speaker}</span><br></br>
                        Hi Frequency Driver : <span style={{ color: '#B23850' }}>{loudSpeakerSystem.hi_frequency_driver}</span><br></br>
                    </div>
                </div>
            </CardBody>
        </Card >
    );

}

const LoudSpeakerSystemDetail = (props) => {
    if (props.loudSpeakerSystem)
        return (

            <div className="products">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }}><Link to="/loudSpeakerSystem">LoudSpeakerSystem</Link></BreadcrumbItem>
                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }} active>{props.loudSpeakerSystem.name}</BreadcrumbItem>
                    </Breadcrumb>

                </div>
                <div className="row  row-content justify-content-center">


                    <RenderLoudSpeakerSystem className="col-12 col-md-4 m-s-1" loudSpeakerSystem={props.loudSpeakerSystem} />
                    <div body className="col-12 col-md-6 m-s-1">
                        <RenderDetail loudSpeakerSystem={props.loudSpeakerSystem} />

                    </div>


                </div>

            </div>
        );
    else return (

        <div>

        </div>
    );

}



export default LoudSpeakerSystemDetail;
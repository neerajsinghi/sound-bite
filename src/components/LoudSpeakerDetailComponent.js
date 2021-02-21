/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {
    Card, CardBody, CardHeader,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';


function RenderLoudSpeaker({ loudSpeaker }) {
    if (loudSpeaker != null)
        return (
            <ReactImageMagnify style={{
                zIndex: "9999"
            }} {...{
                smallImage: {
                    alt: loudSpeaker.name,

                    src: loudSpeaker.image,
                    width: 400,
                    height: 360
                },
                largeImage: {
                    src: loudSpeaker.image,
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
function RenderDetail({ loudSpeaker }) {

    return (
        <Card className="m-1">
            <CardHeader style={{ backgroundColor: '#B23850', borderBottom: "solid  5px black", fontFamily: "Oswald" }}>{loudSpeaker.name}</CardHeader>
            <CardBody style={{ backgroundColor: "floralwhite", fontFamily: "Oswald" }}>
                <hr style={{ backgroundColor: '#083daf', borderTop: "dashed 1px" }} />
                <CardTitle style={{ color: '#083daf' }}>Description :</CardTitle>
                <hr style={{ backgroundColor: '#083daf' }} />
                <div className="row">
                    <div className="col-12 col-sm-6" style={{ color: '#083daf', fontFamily: "Oswald,sans-serif !important" }}>

                        Normal Diameter :<span style={{ color: '#B23850' }}> 18 inch</span><br></br>
                        DC Resistance : <span style={{ color: '#B23850' }}>5 ohm</span><br></br>
                        Continuous Power Handling : <span style={{ color: '#B23850' }}>3600W</span><br></br>
                        Frequency Range : <span style={{ color: '#B23850' }}>25-2000Hz</span><br></br>
                        Voice Coil Material : <span style={{ color: '#B23850' }}>Copper i/o</span><br></br>
                        Winding Height : <span style={{ color: '#B23850' }}>3233</span><br></br>
                        Basket : <span style={{ color: '#B23850' }}>Aluminium</span><br></br>

                    </div>
                    <div className="col-12 col-sm-6" style={{ color: '#083daf', fontFamily: "Oswald,sans-serif !important" }}>
                        Nominal Impedance : <span style={{ color: '#B23850' }}>8 ohm</span><br></br>
                        Nominal Power Handling : <span style={{ color: '#B23850' }}>1800W</span><br></br>
                        Sensitivity (1W/1m) : <span style={{ color: '#B23850' }}>96dB</span><br></br>
                        Voice Coil Diameter : <span style={{ color: '#B23850' }}>5in (125.5mm)</span><br></br>
                        Former Material : <span style={{ color: '#B23850' }}>Glass Fiber</span><br></br>
                        Magnet : <span style={{ color: '#B23850' }}>Q280xH25mm</span><br></br>
                        Suspension : <span style={{ color: '#B23850' }}>Double</span>

                    </div>
                </div>
            </CardBody>
        </Card >
    );

}

const LoudSpeakerDetail = (props) => {
    if (props.loudSpeaker)
        return (

            <div className="products">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }}><Link to="/loudspeaker">Loudspeaker</Link></BreadcrumbItem>
                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }} active>{props.loudSpeaker.name}</BreadcrumbItem>
                    </Breadcrumb>

                </div>
                <div className="row  row-content justify-content-center">


                    <RenderLoudSpeaker className="col-12 col-md-4 m-s-1" loudSpeaker={props.loudSpeaker} />
                    <div body className="col-12 col-md-6 m-s-1">
                        <RenderDetail loudSpeaker={props.loudSpeaker} />

                    </div>


                </div>

            </div>
        );
    else return (

        <div>

        </div>
    );

}



export default LoudSpeakerDetail;
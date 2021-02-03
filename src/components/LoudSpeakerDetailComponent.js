/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {
    Card, CardImg, CardBody, CardHeader,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { Link } from 'react-router-dom';


function RenderLoudSpeaker({ loudSpeaker }) {
    if (loudSpeaker != null)
        return (
            <Card >
                <CardImg top src={loudSpeaker.image} alt={loudSpeaker.name} />
            </Card>
        );
    else
        return (
            <div></div>
        );
}
function RenderDetail({ loudSpeaker }) {

    return (
        <Card>
            <CardHeader style={{ backgroundColor: '#B23850', borderBottom: "solid  5px black" }}>{loudSpeaker.name}</CardHeader>
            <CardBody style={{ backgroundColor: '#083daf' }}>
                <hr style={{ backgroundColor: "floralwhite", borderTop: "dashed 1px" }} />
                <CardTitle>Description :</CardTitle>
                <hr style={{ backgroundColor: "floralwhite" }} />
                <div className="row">
                    <div className="col-12 col-sm-6">

                        Normal Diameter :<span style={{ color: '#B23850' }}> 18 inch</span><br></br>
                        DC Resistance : <span style={{ color: '#B23850' }}>5 ohm</span><br></br>
                        Continuous Power Handling : <span style={{ color: '#B23850' }}>3600W</span><br></br>
                        Frequency Range : <span style={{ color: '#B23850' }}>25-2000Hz</span><br></br>
                        Voice Coil Material : <span style={{ color: '#B23850' }}>Copper i/o</span><br></br>
                        Winding Height : <span style={{ color: '#B23850' }}>3233</span><br></br>
                        Basket : <span style={{ color: '#B23850' }}>Aluminium</span><br></br>

                    </div>
                    <div className="col-12 col-sm-6">
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
        </Card>
    );

}

const LoudSpeakerDetail = (props) => {
    if (props.loudSpeaker)
        return (

            <div className="products">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/loudspeaker">Loudspeaker</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.loudSpeaker.name}</BreadcrumbItem>
                    </Breadcrumb>

                </div>
                <div className="container">
                    <div className="row  row-content">
                        <div className="col-12 col-md-4">
                            <RenderLoudSpeaker loudSpeaker={props.loudSpeaker} />
                        </div>
                        <div className="col-12 col-md-8">
                            <RenderDetail loudSpeaker={props.loudSpeaker}
                            />
                        </div>
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
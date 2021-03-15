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

                    src: `/assets/images/450${loudSpeaker.image}`,
                    isFluidWidth: true
                },
                largeImage: {
                    src: `/assets/images/${loudSpeaker.image}`,
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
                    <div className="col-12 col-sm-6" style={{ color: '#083daf', fontSize: 14, fontFamily: "Oswald,sans-serif !important" }}>

                        Normal Diameter :<span style={{ color: '#B23850' }}> {loudSpeaker.nominal_diameter}</span><br></br>
                        Rated Impedance : <span style={{ color: '#B23850' }}>{loudSpeaker.rated_impedance}</span><br></br>
                        Power Handling Capacity : <span style={{ color: '#B23850' }}>{loudSpeaker.power_handing_capacity}</span><br></br>
                        Frequency Range : <span style={{ color: '#B23850' }}>{loudSpeaker.frequency_range}</span><br></br>
                        Voice Coil Material : <span style={{ color: '#B23850' }}>{loudSpeaker.voice_coil_material}</span><br></br>
                        Number of Layer : <span style={{ color: '#B23850' }}>{loudSpeaker.number_of_layer}</span><br></br>
                        Basket : <span style={{ color: '#B23850' }}>{loudSpeaker.basket}</span><br></br>

                    </div>
                    <div className="col-12 col-sm-6" style={{ color: '#083daf', fontSize: 14, fontFamily: "Oswald,sans-serif !important" }}>
                        Peak Power Handling Capacity : <span style={{ color: '#B23850' }}>{loudSpeaker.peak_power_handing_capacity}</span><br></br>
                        Sensitivity (1W/1m) : <span style={{ color: '#B23850' }}>{loudSpeaker.sensitivity}</span><br></br>
                        Voice Coil Diameter : <span style={{ color: '#B23850' }}>{loudSpeaker.voice_coil_diameter}</span><br></br>
                        Magnet : <span style={{ color: '#B23850' }}>{loudSpeaker.magnet}</span><br></br>
                        Kind of Layer : <span style={{ color: '#B23850' }}>{loudSpeaker.kind_of_layer}</span><br></br>
                        Weight : <span style={{ color: '#B23850' }}>{loudSpeaker.weight}</span>

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
/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {
    Card, CardBody, CardHeader,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';


function RenderPowerAmplifier({ powerAmplifier }) {
    if (powerAmplifier != null)
        return (
            <ReactImageMagnify style={{
                zIndex: "9999"
            }} {...{
                smallImage: {
                    alt: powerAmplifier.name,

                    src: `/assets/images/${powerAmplifier.image}`,
                    width: 400,
                    height: 360
                },
                largeImage: {
                    src: `/assets/images/${powerAmplifier.image}`,
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
function RenderDetail({ powerAmplifier }) {

    return (
        <Card className="m-1">
            <CardHeader style={{ backgroundColor: '#B23850', borderBottom: "solid  5px black", fontFamily: "Oswald" }}>{powerAmplifier.name}</CardHeader>
            <CardBody style={{ backgroundColor: "floralwhite", fontFamily: "Oswald" }}>
                <hr style={{ backgroundColor: '#083daf', borderTop: "dashed 1px" }} />
                <CardTitle style={{ color: '#083daf' }}>Description :</CardTitle>
                <hr style={{ backgroundColor: '#083daf' }} />
                <div className="row">
                    <div className="col-12 col-sm-6" style={{ color: '#083daf', fontSize: 14, fontFamily: "Oswald,sans-serif !important" }}>


                        Output Power : <span style={{ color: '#B23850' }}>{powerAmplifier.output_power}</span><br></br>
                        Damping Factor : <span style={{ color: '#B23850' }}>{powerAmplifier.damping_factor}</span><br></br>
                        Circuitry Class : <span style={{ color: '#B23850' }}>{powerAmplifier.circuitry_class}</span><br></br>

                    </div>
                    <div className="col-12 col-sm-6" style={{ color: '#083daf', fontSize: 14, fontFamily: "Oswald,sans-serif !important" }}>
                        Size : <span style={{ color: '#B23850' }}>{powerAmplifier.size}</span><br></br>
                        Weight : <span style={{ color: '#B23850' }}>{powerAmplifier.weight}</span><br></br>
                    </div>
                </div>
            </CardBody>
        </Card >
    );

}

const PowerAmplifierDetail = (props) => {
    if (props.powerAmplifier)
        return (

            <div className="products">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }}><Link to="/powerAmplifier">PowerAmplifier</Link></BreadcrumbItem>
                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }} active>{props.powerAmplifier.name}</BreadcrumbItem>
                    </Breadcrumb>

                </div>
                <div className="row  row-content justify-content-center">


                    <RenderPowerAmplifier className="col-12 col-md-4 m-s-1" powerAmplifier={props.powerAmplifier} />
                    <div body className="col-12 col-md-6 m-s-1">
                        <RenderDetail powerAmplifier={props.powerAmplifier} />

                    </div>


                </div>

            </div>
        );
    else return (

        <div>

        </div>
    );

}



export default PowerAmplifierDetail;
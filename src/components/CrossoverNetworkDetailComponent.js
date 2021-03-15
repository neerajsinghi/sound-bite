/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {
    Card, CardBody, CardHeader,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';


function RenderCrossoverNetwork({ crossoverNetwork }) {
    if (crossoverNetwork != null)
        return (
            <ReactImageMagnify style={{
                zIndex: "9999"
            }} {...{
                smallImage: {
                    alt: crossoverNetwork.name,

                    src: `/assets/images/${crossoverNetwork.image}`,
                    width: 400,
                    height: 360
                },
                largeImage: {
                    src: `/assets/images/${crossoverNetwork.image}`,
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
function RenderDetail({ crossoverNetwork }) {

    return (
        <Card className="m-1">
            <CardHeader style={{ backgroundColor: '#B23850', borderBottom: "solid  5px black", fontFamily: "Oswald" }}>{crossoverNetwork.name}</CardHeader>
            <CardBody style={{ backgroundColor: "floralwhite", fontFamily: "Oswald" }}>
                <hr style={{ backgroundColor: '#083daf', borderTop: "dashed 1px" }} />
                <CardTitle style={{ color: '#083daf' }}>Description :</CardTitle>
                <hr style={{ backgroundColor: '#083daf' }} />
                <div className="row">
                    <div className="col-12 col-sm-6" style={{ color: '#083daf', fontSize: 14, fontFamily: "Oswald,sans-serif !important" }}>
                        Recommended Drivers :<span style={{ color: '#B23850' }}> {crossoverNetwork.recommended_drivers}</span><br></br>
                        Power :<span style={{ color: '#B23850' }}> {crossoverNetwork.power}</span><br></br>
                        Impedance :<span style={{ color: '#B23850' }}> {crossoverNetwork.impedance}</span><br></br>
                        Frequency :<span style={{ color: '#B23850' }}> {crossoverNetwork.frequency}</span><br></br>
                    </div>

                </div>
            </CardBody>
        </Card >
    );

}

const CrossoverNetworkDetail = (props) => {
    if (props.crossoverNetwork)
        return (

            <div className="products">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }}><Link to="/crossoverNetwork">CrossoverNetwork</Link></BreadcrumbItem>
                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }} active>{props.crossoverNetwork.name}</BreadcrumbItem>
                    </Breadcrumb>

                </div>
                <div className="row  row-content justify-content-center">


                    <RenderCrossoverNetwork className="col-12 col-md-4 m-s-1" crossoverNetwork={props.crossoverNetwork} />
                    <div body className="col-12 col-md-6 m-s-1">
                        <RenderDetail crossoverNetwork={props.crossoverNetwork} />

                    </div>


                </div>

            </div>
        );
    else return (

        <div>

        </div>
    );

}



export default CrossoverNetworkDetail;
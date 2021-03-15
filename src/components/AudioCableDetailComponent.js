/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {
    Card, CardBody, CardHeader,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';


function RenderAudioCable({ audioCable }) {
    if (audioCable != null)
        return (
            <ReactImageMagnify style={{
                zIndex: "9999"
            }} {...{
                smallImage: {
                    alt: audioCable.name,

                    src: `/assets/images/${audioCable.image}`,
                    width: 400,
                    height: 360
                },
                largeImage: {
                    src: `/assets/images/${audioCable.image}`,
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
function RenderDetail({ audioCable }) {

    return (
        <Card className="m-1">
            <CardHeader style={{ backgroundColor: '#B23850', borderBottom: "solid  5px black", fontFamily: "Oswald" }}>{audioCable.name}</CardHeader>
            <CardBody style={{ backgroundColor: "floralwhite", fontFamily: "Oswald" }}>
                <hr style={{ backgroundColor: '#083daf', borderTop: "dashed 1px" }} />
                <CardTitle style={{ color: '#083daf' }}>Description :</CardTitle>
                <hr style={{ backgroundColor: '#083daf' }} />
                <div className="row">
                    <div className="col-12 col-sm-6" style={{ color: '#083daf', fontSize: 14, fontFamily: "Oswald,sans-serif !important" }}>

                        Length :<span style={{ color: '#B23850' }}> {audioCable.length}</span><br></br>

                    </div>

                </div>
            </CardBody>
        </Card >
    );

}

const AudioCableDetail = (props) => {
    if (props.audioCable)
        return (

            <div className="products">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }}><Link to="/audioCable">AudioCable</Link></BreadcrumbItem>
                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }} active>{props.audioCable.name}</BreadcrumbItem>
                    </Breadcrumb>

                </div>
                <div className="row  row-content justify-content-center">


                    <RenderAudioCable className="col-12 col-md-4 m-s-1" audioCable={props.audioCable} />
                    <div body className="col-12 col-md-6 m-s-1">
                        <RenderDetail audioCable={props.audioCable} />

                    </div>


                </div>

            </div>
        );
    else return (

        <div>

        </div>
    );

}



export default AudioCableDetail;
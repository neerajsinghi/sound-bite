/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {
    Card, CardBody, CardHeader,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';


function RenderCompressionDriver({ compressionDriver }) {
    if (compressionDriver != null)
        return (
            <ReactImageMagnify style={{
                zIndex: "9999"
            }} {...{
                smallImage: {
                    alt: compressionDriver.name,

                    src: `/assets/images/${compressionDriver.image}`,
                    width: 400,
                    height: 360
                },
                largeImage: {
                    src: `/assets/images/${compressionDriver.image}`,
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
function RenderDetail({ compressionDriver }) {

    return (
        <Card className="m-1">
            <CardHeader style={{ backgroundColor: '#B23850', borderBottom: "solid  5px black", fontFamily: "Oswald" }}>{compressionDriver.name}</CardHeader>
            <CardBody style={{ backgroundColor: "floralwhite", fontFamily: "Oswald" }}>
                <hr style={{ backgroundColor: '#083daf', borderTop: "dashed 1px" }} />
                <CardTitle style={{ color: '#083daf' }}>Description :</CardTitle>
                <hr style={{ backgroundColor: '#083daf' }} />
                <div className="row">
                    <div className="col-12 col-sm-6" style={{ color: '#083daf', fontSize: 14, fontFamily: "Oswald,sans-serif !important" }}>

                        Throat Diameter :<span style={{ color: '#B23850' }}> {compressionDriver.throat_diameter}</span><br></br>
                    Mounting Type :<span style={{ color: '#B23850' }}> {compressionDriver.mounting_type}</span><br></br>
                    Nominal Impedance :<span style={{ color: '#B23850' }}> {compressionDriver.nominal_impedance}</span><br></br>
                    Power handing capacity :<span style={{ color: '#B23850' }}> {compressionDriver.power_handing_capacity}</span><br></br>
                    Sensitivity :<span style={{ color: '#B23850' }}> {compressionDriver.sensitivity}</span><br></br>
                    Frequency Range :<span style={{ color: '#B23850' }}> {compressionDriver.frequency_range}</span><br></br>

                    </div>
                    <div className="col-12 col-sm-6" style={{ color: '#083daf', fontSize: 14, fontFamily: "Oswald,sans-serif !important" }}>
                        Diaphragm Material :<span style={{ color: '#B23850' }}> {compressionDriver.diaphragm_material}</span><br></br>
                    Voice Coil Material :<span style={{ color: '#B23850' }}> {compressionDriver.voce_coil_material}</span><br></br>
                    Voice Coil Diameter :<span style={{ color: '#B23850' }}> {compressionDriver.voice_coil_diameter}</span><br></br>
                    Magnet :<span style={{ color: '#B23850' }}> {compressionDriver.magnet}</span><br></br>
                    Flux Density :<span style={{ color: '#B23850' }}> {compressionDriver.flux_density}</span><br></br>

                    </div>

                </div>
            </CardBody>
        </Card >
    );

}

const CompressionDriverDetail = (props) => {
    if (props.compressionDriver)
        return (

            <div className="products">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }}><Link to="/compressionDriver">CompressionDriver</Link></BreadcrumbItem>
                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }} active>{props.compressionDriver.name}</BreadcrumbItem>
                    </Breadcrumb>

                </div>
                <div className="row  row-content justify-content-center">


                    <RenderCompressionDriver className="col-12 col-md-4 m-s-1" compressionDriver={props.compressionDriver} />
                    <div body className="col-12 col-md-6 m-s-1">
                        <RenderDetail compressionDriver={props.compressionDriver} />

                    </div>


                </div>

            </div>
        );
    else return (

        <div>

        </div>
    );

}



export default CompressionDriverDetail;
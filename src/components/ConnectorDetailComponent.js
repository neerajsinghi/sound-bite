/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {
    Card, CardBody, CardHeader,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';


function RenderConnector({ connector }) {
    if (connector != null)
        return (
            <ReactImageMagnify style={{
                zIndex: "9999"
            }} {...{
                smallImage: {
                    alt: connector.name,

                    src: `/assets/images/450${connector.image}`,
                    isFluidWidth: true
                },
                largeImage: {
                    src: `/assets/images/${connector.image}`,
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
function RenderDetail({ connector }) {

    return (
        <Card className="m-1">
            <CardHeader style={{ backgroundColor: '#B23850', borderBottom: "solid  5px black", fontFamily: "Oswald" }}>{connector.name}</CardHeader>
            <CardBody style={{ backgroundColor: "floralwhite", fontFamily: "Oswald" }}>
                <hr style={{ backgroundColor: '#083daf', borderTop: "dashed 1px" }} />
                <CardTitle style={{ color: '#083daf' }}>Description :</CardTitle>

            </CardBody>
        </Card >
    );

}

const ConnectorDetail = (props) => {
    if (props.connector)
        return (

            <div className="products">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }}><Link to="/connector">Connector</Link></BreadcrumbItem>
                        <BreadcrumbItem style={{ fontFamily: "Oswald,sans-serif !important" }} active>{props.connector.name}</BreadcrumbItem>
                    </Breadcrumb>

                </div>
                <div className="row  row-content justify-content-center">


                    <RenderConnector className="col-12 col-md-4 m-s-1" connector={props.connector} />
                    <div body className="col-12 col-md-6 m-s-1">
                        <RenderDetail connector={props.connector} />

                    </div>


                </div>

            </div>
        );
    else return (

        <div>

        </div>
    );

}



export default ConnectorDetail;
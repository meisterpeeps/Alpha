/// <reference path="../../../dts/react-vis.d.ts"/>
import React from 'react';
import "react-vis/dist/style.css";
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardImageHeader,
    CardText,
    CardTitle,
  } from 'styled-bootstrap-components';

export function FirstPlot() {
    return(
        <Card>
            <CardHeader>
                <XYPlot
                width={300}
                height={300}>
                <HorizontalGridLines />
                <LineSeries
                    data={[
                    {x: 1, y: 10},
                    {x: 2, y: 5},
                    {x: 3, y: 15}
                    ]}/>
            <XAxis />
                <YAxis />
            </XYPlot>
            </CardHeader>
            <CardBody>
                <CardText>
                    Hello Graph
                </CardText>
            </CardBody>
        </Card>
    )
}
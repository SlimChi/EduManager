import React from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import {Container, Row, Col} from "react-bootstrap";

// Données extraites du graphe (points approximatifs)
const data = [
    {time: 0, voltage: 0},
    {time: 0.35, voltage: 2.8},
    {time: 0.7, voltage: 0},
    {time: 1.5, voltage: -2.8},
    {time: 2.0, voltage: 0},
    {time: 2.62, voltage: 2.8},
    {time: 3.0, voltage: 0},
    {time: 3.8, voltage: -2.8},
    {time: 4.4, voltage: 0},
    {time: 5.1, voltage: 2.8},
];

const GraphTensionTemps = () => {
    return (
        <Container className="mt-5" style={{marginLeft: "10%"}}>
            <Row>
                <Col>
                    <ResponsiveContainer width="70%" height={300}>
                        <LineChart data={data} margin={{top: 10, right: 20, left: 10, bottom: 20}}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="time"
                                   label={{value: "Temps (en ms)", position: "insideBottomRight", offset: -8}}/>
                            <YAxis label={{value: "Tension (en V)", angle: -90, position: "insideLeft"}}/>
                            <Tooltip/>
                            <Line type="monotone" dataKey="voltage" stroke="#b22222" dot={{r: 2}} strokeWidth={2}/>
                        </LineChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
};

export default GraphTensionTemps;

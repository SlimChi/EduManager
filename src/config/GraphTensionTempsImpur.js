import React from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import {Container, Row, Col} from "react-bootstrap";

// Génération d'un signal sinusoïdal avec bruit (impur)
const generateNoisyData = () => {
    const data = [];
    const amplitude = 2.5;
    const frequency = 2 * Math.PI / 2.5; // périodicité similaire
    const noiseLevel = 1.0;

    for (let t = 0; t <= 6.5; t += 0.02) {
        const sine = amplitude * Math.sin(frequency * t);
        const noise = (Math.random() - 0.5) * 2 * noiseLevel;
        data.push({time: t, voltage: sine + noise});
    }

    return data;
};

const noisyData = generateNoisyData();

const GraphTensionTempsImpur = () => {
    return (<Container className="mt-5" style={{marginLeft: "13%"}}>
        <Row>
            <Col>
                <ResponsiveContainer width="60%" height={170}>
                    <LineChart data={noisyData} margin={{right: 30}}>
                        <CartesianGrid strokeDasharray="3 3"/>

                        <XAxis dataKey="time"
                               axisLine={true}
                               tickLine={false}
                               tick={false}
                        />
                        <YAxis axisLine={true}
                               tickLine={false}
                               tick={false}
                        />

                        <Tooltip/>
                        <Line type="monotone"
                              dataKey="voltage"
                              stroke="#000"
                              dot={false}
                              strokeWidth={1}
                        />
                    </LineChart>

                </ResponsiveContainer>
            </Col>
        </Row>
    </Container>);
};

export default GraphTensionTempsImpur;

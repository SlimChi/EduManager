import React from 'react';

const GraphRadiateur = ({showCorrection = false}) => {
    const width = 600;
    const height = 400;
    const xLabels = [0, 40, 80, 120, 160, 200, 240];
    const yLabels = [0, 1000, 2000, 3000, 4000, 5000, 6000];
    const marginLeft = 70;
    const marginBottom = 50;
    const gridHeight = height - 2 * marginBottom;
    const gridWidth = width - marginLeft - marginBottom;
    const yMax = 6000;

    const plotParabola = () => {
        const points = [];
        const step = 5;
        for (let x = 0; x <= 240; x += step) {
            const y = 0.1 * x * x;
            const scaledX = marginLeft + (x / 240) * gridWidth;
            const scaledY = height - marginBottom - (y / yMax) * gridHeight;
            points.push(`${scaledX},${scaledY}`);
        }
        return points.join(' ');
    };

    return (
        <svg width={width} height={height} style={{backgroundColor: 'white', fontFamily: 'Arial, sans-serif'}}>
            {/* Grid lines horizontales */}
            {yLabels.map((val, index) => {
                const y = height - marginBottom - (val / yMax) * gridHeight;
                return (
                    <line
                        key={`h-${val}`}
                        x1={marginLeft}
                        y1={y}
                        x2={width - marginBottom / 2}
                        y2={y}
                        stroke="#ccc"
                        strokeWidth="1"
                    />
                );
            })}

            {/* Grid lines verticales */}
            {xLabels.map((val, index) => {
                const x = marginLeft + (gridWidth * val / 240);
                return (
                    <line
                        key={`v-${val}`}
                        x1={x}
                        y1={marginBottom / 2}
                        x2={x}
                        y2={height - marginBottom}
                        stroke="#ccc"
                        strokeWidth="1"
                    />
                );
            })}

            {/* Axes */}
            <line
                x1={marginLeft}
                y1={height - marginBottom}
                x2={marginLeft}
                y2={marginBottom / 2}
                stroke="black"
                strokeWidth="1"
                markerEnd="url(#arrow)"
            />
            <line
                x1={marginLeft}
                y1={height - marginBottom}
                x2={width - marginBottom / 2}
                y2={height - marginBottom}
                stroke="black"
                strokeWidth="1"
                markerEnd="url(#arrow)"
            />

            {/* Flèche de l'axe */}
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto"
                        markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="black"/>
                </marker>
            </defs>

            {/* Labels Y */}
            {yLabels.map((val) => {
                const y = height - marginBottom - (val / yMax) * gridHeight;
                return (
                    <text key={`ylabel-${val}`} x={marginLeft - 10} y={y + 4} fontSize="12" textAnchor="end">
                        {val}
                    </text>
                );
            })}

            {/* Labels X */}
            {xLabels.map((val) => {
                const x = marginLeft + (gridWidth * val / 240);
                return (
                    <text key={`xlabel-${val}`} x={x} y={height - marginBottom + 20} fontSize="12" textAnchor="middle">
                        {val}
                    </text>
                );
            })}

            {/* Le 0 à l'origine */}
            <text x={marginLeft - 10} y={height - marginBottom + 20} fontSize="12" textAnchor="end">0</text>

            {/* La parabole */}
            {showCorrection && (
                <polyline
                    points={plotParabola()}
                    fill="none"
                    stroke="#3498db"
                    strokeWidth="2"
                />
            )}
        </svg>
    );
};

export default GraphRadiateur;

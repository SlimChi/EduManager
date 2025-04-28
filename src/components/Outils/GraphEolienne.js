import React from 'react';

const GraphEolienne = ({showCorrection = false}) => {
    const width = 600;
    const height = 400;
    const xLabels = [-20, -15, -10, -5, 0, 5, 10, 15, 20];
    const yLabels = [20, 40, 60, 80];
    const marginLeft = 70;
    const marginBottom = 50;
    const gridHeight = height - 2 * marginBottom;
    const gridWidth = width - marginLeft - marginBottom;
    const xMin = -20;
    const xMax = 20;
    const yMax = 80;

    const plotParabola = () => {
        const points = [];
        const step = 1;
        for (let x = xMin; x <= xMax; x += step) {
            const y = 0.2 * x * x;
            const scaledX = marginLeft + ((x - xMin) / (xMax - xMin)) * gridWidth;
            const scaledY = height - marginBottom - (y / yMax) * gridHeight;
            points.push(`${scaledX},${scaledY}`);
        }
        return points.join(' ');
    };

    return (
        <svg width={width} height={height} style={{backgroundColor: 'white', fontFamily: 'Arial, sans-serif'}}>
            {/* Grid lines horizontales */}
            {yLabels.map((val) => {
                const y = height - marginBottom - (val / yMax) * gridHeight;
                return (
                    <line
                        key={`h-${val}`}
                        x1={marginLeft}
                        y1={y}
                        x2={width - marginBottom / 2}
                        y2={y}
                        stroke="#ccc"
                        strokeWidth={1}
                    />
                );
            })}

            {/* Grid lines verticales */}
            {xLabels.map((val) => {
                const x = marginLeft + ((val - xMin) / (xMax - xMin)) * gridWidth;
                return (
                    <text key={`xlabel-${val}`} x={x} y={height - marginBottom + 20} fontSize="12" textAnchor="middle">
                        {val}
                    </text>
                );
            })}

            {/* Axes */}
            <line
                x1={marginLeft}
                y1={height - marginBottom}
                x2={marginLeft}
                y2={marginBottom / 2}
                stroke="black"
                strokeWidth={1}
                markerEnd="url(#arrow)"
            />
            <line
                x1={marginLeft}
                y1={height - marginBottom}
                x2={width - marginBottom / 2}
                y2={height - marginBottom}
                stroke="black"
                strokeWidth={1}
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
                const x = marginLeft + ((val - xMin) / (xMax - xMin)) * gridWidth;
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
                    stroke="#2ecc71"
                    strokeWidth={2}
                />
            )}
        </svg>
    );
};

export default GraphEolienne;

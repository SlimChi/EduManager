import React from 'react';

const GraphComponent = ({ showCorrection = false }) => {
    const width = 700;
    const height = 450;
    const xLabels = [0, 20, 40, 60, 80, 100];
    const yLabels = [2000, 4000, 6000, 8000, 10000, 12000];
    const marginLeft = 60;
    const marginBottom = 40;
    const gridHeight = height - 2 * marginBottom;
    const gridWidth = width - marginLeft - marginBottom;
    const yStep = gridHeight / (yLabels.length + 1);

    const plotParabola = () => {
        const points = [];
        const step = 5;
        for (let x = 0; x <= 110; x += step) {
            const y = x * x;
            const scaledX = marginLeft + (x / 110) * gridWidth;
            const scaledY = height - marginBottom - (y / 12000) * gridHeight;
            points.push(`${scaledX},${scaledY}`);
        }
        return points.join(' ');
    };

    return (
        <svg width={width} height={height} style={{ backgroundColor: 'white', fontFamily: 'Arial, sans-serif' }}>
            {/* Grid lines horizontales (sans le zéro) */}
            {yLabels.map((val, index) => {
                const y = height - marginBottom - yStep * (index + 1);
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
                const x = marginLeft + (gridWidth * index / (xLabels.length - 1));
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

            {/* Axe Y avec flèche vers le haut */}
            <line
                x1={marginLeft}
                y1={height - marginBottom}
                x2={marginLeft}
                y2={marginBottom / 2}
                stroke="black"
                strokeWidth="1"
                markerEnd="url(#arrow)"
            />

            {/* Axe X */}
            <line
                x1={marginLeft}
                y1={height - marginBottom}
                x2={width - marginBottom / 2}
                y2={height - marginBottom}
                stroke="black"
                strokeWidth="1"
                markerEnd="url(#arrow)"
            />

            {/* Flèches axes */}
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="black" />
                </marker>
            </defs>

            {/* Labels Y */}
            {yLabels.map((val, index) => {
                const y = height - marginBottom - yStep * (index + 1);
                return (
                    <text key={`ylabel-${val}`} x={marginLeft - 10} y={y + 4} fontSize="12" textAnchor="end">
                        {val.toLocaleString('fr-FR')}
                    </text>
                );
            })}

            {/* Labels X */}
            {xLabels.map((val, index) => {
                const x = marginLeft + (gridWidth * index / (xLabels.length - 1));
                return (
                    <text key={`xlabel-${val}`} x={x} y={height - marginBottom + 20} fontSize="12" textAnchor="middle">
                        {val !== 0 ? val : ''}
                    </text>
                );
            })}

            {/* Le 0 à l'origine */}
            <text x={marginLeft - 10} y={height - marginBottom + 20} fontSize="12" textAnchor="end">0</text>
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

export default GraphComponent;

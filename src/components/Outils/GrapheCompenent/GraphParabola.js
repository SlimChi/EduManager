import React from 'react';

const GraphParabola = ({showCorrection = false}) => {
    const width = 420;
    const height = 250;
    const xLabels = [0, 2, 4, 6, 8, 10]; // Vitesse de 0 à 10 m/s
    const yLabels = [0, 2, 4, 6, 8, 10]; // Distance de 0 à 10 m
    const marginLeft = 70;
    const marginBottom = 40;
    const gridHeight = height - 2 * marginBottom;
    const gridWidth = width - marginLeft - marginBottom;
    const yStep = gridHeight / (yLabels.length - 1);

    const plotParabola = () => {
        const points = [];
        const step = 0.5; // Pas plus petit pour une courbe plus lisse
        for (let x = 0; x <= 10; x += step) {
            const y = 0.1 * x * x;
            const scaledX = marginLeft + (x / 10) * gridWidth;
            const scaledY = height - marginBottom - (y / 10) * gridHeight;
            points.push(`${scaledX},${scaledY}`);
        }
        return points.join(' ');
    };

    return (
        <svg width={width} height={height} style={{backgroundColor: 'white', fontFamily: 'Arial, sans-serif'}}>
            {/* Grid lines horizontales */}
            {yLabels.map((val, index) => {
                const y = height - marginBottom - (val / 10) * gridHeight;
                return (
                    <React.Fragment key={`h-${val}`}>
                        <line
                            x1={marginLeft}
                            y1={y}
                            x2={width - marginBottom / 2}
                            y2={y}
                            stroke="#ccc"
                            strokeWidth="1"
                        />
                        {/* Ligne horizontale pour y=0 (axe X) */}
                        {val === 0 && (
                            <line
                                x1={marginLeft}
                                y1={y}
                                x2={width - marginBottom / 2}
                                y2={y}
                                stroke="black"
                                strokeWidth="1"
                            />
                        )}
                    </React.Fragment>
                );
            })}

            {/* Grid lines verticales */}
            {xLabels.map((val, index) => {
                const x = marginLeft + (val / 10) * gridWidth;
                return (
                    <React.Fragment key={`v-${val}`}>
                        <line
                            x1={x}
                            y1={marginBottom / 2}
                            x2={x}
                            y2={height - marginBottom}
                            stroke="#ccc"
                            strokeWidth="1"
                        />
                        {/* Ligne verticale pour x=0 (axe Y) */}
                        {val === 0 && (
                            <line
                                x1={x}
                                y1={marginBottom / 2}
                                x2={x}
                                y2={height - marginBottom}
                                stroke="black"
                                strokeWidth="1"
                            />
                        )}
                    </React.Fragment>
                );
            })}

            {/* Flèche axe Y */}
            <line
                x1={marginLeft}
                y1={height - marginBottom}
                x2={marginLeft}
                y2={marginBottom / 2}
                stroke="black"
                strokeWidth="1"
                markerEnd="url(#arrow)"
            />

            {/* Flèche axe X */}
            <line
                x1={marginLeft}
                y1={height - marginBottom}
                x2={width - marginBottom / 2}
                y2={height - marginBottom}
                stroke="black"
                strokeWidth="1"
                markerEnd="url(#arrow)"
            />

            {/* Définition de la flèche */}
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto"
                        markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="black"/>
                </marker>
            </defs>

            {/* Labels Y */}
            {yLabels.map((val) => {
                const y = height - marginBottom - (val / 10) * gridHeight;
                return (
                    <text key={`ylabel-${val}`} x={marginLeft - 10} y={y + 4} fontSize="12" textAnchor="end">
                        {val}
                    </text>
                );
            })}

            {/* Labels X */}
            {xLabels.map((val) => {
                const x = marginLeft + (val / 10) * gridWidth;
                return (
                    <text key={`xlabel-${val}`} x={x} y={height - marginBottom + 20} fontSize="12" textAnchor="middle">
                        {val}
                    </text>
                );
            })}

            {/* Labels des axes */}
            <text x={marginLeft - 30} y={marginBottom / 2 + 10} fontSize="12" textAnchor="end">d (m)</text>
            <text x={width - marginBottom / 2} y={height - marginBottom + 30} fontSize="12" textAnchor="end">v (m/s)
            </text>

            {/* Courbe de la fonction */}
            {showCorrection && (
                <>
                    <polyline
                        points={plotParabola()}
                        fill="none"
                        stroke="#3498db"
                        strokeWidth="3"
                    />
                    {/* Point à v=4 m/s (question 2a) */}
                    <circle
                        cx={marginLeft + (4 / 10) * gridWidth}
                        cy={height - marginBottom - (1.6 / 10) * gridHeight}
                        r="5"
                        fill="#e74c3c"
                    />
                    {/* Point à d=8.1 m (question 2c) */}
                    <circle
                        cx={marginLeft + (9 / 10) * gridWidth} // v ≈ 9 m/s pour d=8.1 m
                        cy={height - marginBottom - (8.1 / 10) * gridHeight}
                        r="5"
                        fill="#2ecc71"
                    />
                    {/* Ligne horizontale pour d=4.9 m (question 3d) */}
                    <line
                        x1={marginLeft}
                        y1={height - marginBottom - (4.9 / 10) * gridHeight}
                        x2={width - marginBottom / 2}
                        y2={height - marginBottom - (4.9 / 10) * gridHeight}
                        stroke="#f39c12"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                    />
                    {/* Lignes verticales pour v=7 m/s et v=10 m/s (question 3d) */}
                    <line
                        x1={marginLeft + (7 / 10) * gridWidth}
                        y1={marginBottom / 2}
                        x2={marginLeft + (7 / 10) * gridWidth}
                        y2={height - marginBottom - (4.9 / 10) * gridHeight}
                        stroke="#f39c12"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                    />
                    <line
                        x1={marginLeft + (10 / 10) * gridWidth}
                        y1={marginBottom / 2}
                        x2={marginLeft + (10 / 10) * gridWidth}
                        y2={height - marginBottom - (4.9 / 10) * gridHeight}
                        stroke="#f39c12"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                    />
                </>
            )}
        </svg>
    );
};

export default GraphParabola;
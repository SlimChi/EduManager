import React, { useState } from 'react';
import '../../styles/GeometryCalculator.css';

const GeometryCalculator = () => {
    const [selectedShape, setSelectedShape] = useState('square');
    const [dimensions, setDimensions] = useState({
        length: 5,
        width: 3,
        radius: 4,
        base: 6,
        height: 4,
        side1: 3,
        side2: 4,
        side3: 5
    });
    const [results, setResults] = useState({
        area: null,
        perimeter: null,
        circumference: null
    });

    // Fonction pour afficher les fractions
    const Fraction = ({ numerator, denominator }) => (
        <span className="fraction">
            <span className="numerator">{numerator}</span>
            <span className="denominator">{denominator}</span>
        </span>
    );

    const handleShapeChange = (e) => {
        setSelectedShape(e.target.value);
        setResults({ area: null, perimeter: null, circumference: null });
    };

    const handleDimensionChange = (e) => {
        const { name, value } = e.target;
        const numValue = Math.max(0, parseFloat(value) || 0);
        setDimensions(prev => ({
            ...prev,
            [name]: numValue
        }));
    };

    const calculate = () => {
        if (selectedShape === 'square') {
            const length = dimensions.length;
            const area = length * length;
            const perimeter = 4 * length;
            setResults({ area, perimeter, circumference: null });
        }
        else if (selectedShape === 'rectangle') {
            const length = dimensions.length;
            const width = dimensions.width;
            const area = length * width;
            const perimeter = 2 * (length + width);
            setResults({ area, perimeter, circumference: null });
        }
        else if (selectedShape === 'circle') {
            const radius = dimensions.radius;
            const area = Math.PI * radius * radius;
            const circumference = 2 * Math.PI * radius;
            setResults({ area, perimeter: null, circumference });
        }
        else if (selectedShape === 'triangle') {
            const base = dimensions.base;
            const height = dimensions.height;
            const area = (base * height) / 2;
            setResults({ area, perimeter: null, circumference: null });
        }
        else if (selectedShape === 'triangle-sides') {
            const { side1, side2, side3 } = dimensions;
            // Formule de Héron pour l'aire
            const s = (side1 + side2 + side3) / 2;
            const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
            const perimeter = side1 + side2 + side3;
            setResults({ area, perimeter, circumference: null });
        }
    };

    const resetCalculator = () => {
        setDimensions({
            length: 5,
            width: 3,
            radius: 4,
            base: 6,
            height: 4,
            side1: 3,
            side2: 4,
            side3: 5
        });
        setResults({ area: null, perimeter: null, circumference: null });
    };

    const renderShape = () => {
        const size = 150;
        const center = size / 2;

        switch(selectedShape) {
            case 'square':
                return (
                    <svg width={size} height={size} className="shape-visualization">
                        <rect
                            x="10" y="10"
                            width={dimensions.length * 10}
                            height={dimensions.length * 10}
                            fill="#4CAF50"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        {dimensions.length > 0 && (
                            <text x={10 + (dimensions.length * 10)/2} y={25} textAnchor="middle" fill="white">
                                {dimensions.length}
                            </text>
                        )}
                    </svg>
                );
            case 'rectangle':
                return (
                    <svg width={size} height={size} className="shape-visualization">
                        <rect
                            x="10" y="10"
                            width={dimensions.length * 10}
                            height={dimensions.width * 10}
                            fill="#2196F3"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        {dimensions.length > 0 && (
                            <text x={10 + (dimensions.length * 10)/2} y={25} textAnchor="middle" fill="white">
                                {dimensions.length}
                            </text>
                        )}
                        {dimensions.width > 0 && (
                            <text x={25} y={10 + (dimensions.width * 10)/2} textAnchor="middle" fill="white" transform={`rotate(-90, 25, ${10 + (dimensions.width * 10)/2})`}>
                                {dimensions.width}
                            </text>
                        )}
                    </svg>
                );
            case 'circle':
                return (
                    <svg width={size} height={size} className="shape-visualization">
                        <circle
                            cx={center}
                            cy={center}
                            r={dimensions.radius * 10}
                            fill="#FF9800"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <line
                            x1={center}
                            y1={center}
                            x2={center + dimensions.radius * 10}
                            y2={center}
                            stroke="#333"
                            strokeWidth="1"
                            strokeDasharray="5,5"
                        />
                        {dimensions.radius > 0 && (
                            <text x={center + (dimensions.radius * 10)/2} y={center + 5} textAnchor="middle" fill="#333">
                                {dimensions.radius}
                            </text>
                        )}
                    </svg>
                );
            case 'triangle':
                return (
                    <svg width={size} height={size} className="shape-visualization">
                        <polygon
                            points={`10,${size-10} ${10+dimensions.base*10},${size-10} ${10+(dimensions.base*10)/2},${size-10-dimensions.height*10}`}
                            fill="#9C27B0"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        {dimensions.base > 0 && (
                            <text x={10 + (dimensions.base * 10)/2} y={size-5} textAnchor="middle" fill="#333">
                                {dimensions.base}
                            </text>
                        )}
                        {dimensions.height > 0 && (
                            <text x={10 + (dimensions.base * 10)/2 - 15} y={size-10 - (dimensions.height * 10)/2} textAnchor="middle" fill="#333">
                                {dimensions.height}
                            </text>
                        )}
                    </svg>
                );
            case 'triangle-sides':
                return (
                    <svg width={size} height={size} className="shape-visualization">
                        <polygon
                            points={`10,${size-10} ${10+dimensions.side1*10},${size-10} ${10+dimensions.side1*5},${size-10-dimensions.side3*8}`}
                            fill="#009688"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        {dimensions.side1 > 0 && (
                            <text x={10 + (dimensions.side1 * 10)/2} y={size-5} textAnchor="middle" fill="#333">
                                {dimensions.side1}
                            </text>
                        )}
                        {dimensions.side2 > 0 && (
                            <text x={10 + dimensions.side1*10 - 15} y={size-10 - (dimensions.side3*8)/2} textAnchor="middle" fill="#333">
                                {dimensions.side2}
                            </text>
                        )}
                        {dimensions.side3 > 0 && (
                            <text x={10 + (dimensions.side1 * 10)/2 - 10} y={size-10 - (dimensions.side3*8) + 15} textAnchor="middle" fill="#333">
                                {dimensions.side3}
                            </text>
                        )}
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="geometry-calculator">
            <h2>Calculateur Géométrique Interactif</h2>

            <div className="calculator-container">
                <div className="controls-section">
                    <div className="shape-selector">
                        <label>
                            Forme géométrique:
                            <select value={selectedShape} onChange={handleShapeChange}>
                                <option value="square">Carré</option>
                                <option value="rectangle">Rectangle</option>
                                <option value="circle">Cercle</option>
                                <option value="triangle">Triangle (base/hauteur)</option>
                                <option value="triangle-sides">Triangle (3 côtés)</option>
                            </select>
                        </label>
                    </div>

                    <div className="dimension-inputs">
                        {selectedShape === 'square' && (
                            <div className="input-group">
                                <label>
                                    Longueur du côté:
                                    <div className="input-with-unit">
                                        <input
                                            type="number"
                                            name="length"
                                            value={dimensions.length}
                                            onChange={handleDimensionChange}
                                            min="0"
                                            step="0.1"
                                        />
                                        <span>cm</span>
                                    </div>
                                </label>
                            </div>
                        )}

                        {selectedShape === 'rectangle' && (
                            <>
                                <div className="input-group">
                                    <label>
                                        Longueur:
                                        <div className="input-with-unit">
                                            <input
                                                type="number"
                                                name="length"
                                                value={dimensions.length}
                                                onChange={handleDimensionChange}
                                                min="0"
                                                step="0.1"
                                            />
                                            <span>cm</span>
                                        </div>
                                    </label>
                                </div>
                                <div className="input-group">
                                    <label>
                                        Largeur:
                                        <div className="input-with-unit">
                                            <input
                                                type="number"
                                                name="width"
                                                value={dimensions.width}
                                                onChange={handleDimensionChange}
                                                min="0"
                                                step="0.1"
                                            />
                                            <span>cm</span>
                                        </div>
                                    </label>
                                </div>
                            </>
                        )}

                        {selectedShape === 'circle' && (
                            <div className="input-group">
                                <label>
                                    Rayon:
                                    <div className="input-with-unit">
                                        <input
                                            type="number"
                                            name="radius"
                                            value={dimensions.radius}
                                            onChange={handleDimensionChange}
                                            min="0"
                                            step="0.1"
                                        />
                                        <span>cm</span>
                                    </div>
                                </label>
                            </div>
                        )}

                        {selectedShape === 'triangle' && (
                            <>
                                <div className="input-group">
                                    <label>
                                        Base:
                                        <div className="input-with-unit">
                                            <input
                                                type="number"
                                                name="base"
                                                value={dimensions.base}
                                                onChange={handleDimensionChange}
                                                min="0"
                                                step="0.1"
                                            />
                                            <span>cm</span>
                                        </div>
                                    </label>
                                </div>
                                <div className="input-group">
                                    <label>
                                        Hauteur:
                                        <div className="input-with-unit">
                                            <input
                                                type="number"
                                                name="height"
                                                value={dimensions.height}
                                                onChange={handleDimensionChange}
                                                min="0"
                                                step="0.1"
                                            />
                                            <span>cm</span>
                                        </div>
                                    </label>
                                </div>
                            </>
                        )}

                        {selectedShape === 'triangle-sides' && (
                            <>
                                <div className="input-group">
                                    <label>
                                        Côté 1:
                                        <div className="input-with-unit">
                                            <input
                                                type="number"
                                                name="side1"
                                                value={dimensions.side1}
                                                onChange={handleDimensionChange}
                                                min="0"
                                                step="0.1"
                                            />
                                            <span>cm</span>
                                        </div>
                                    </label>
                                </div>
                                <div className="input-group">
                                    <label>
                                        Côté 2:
                                        <div className="input-with-unit">
                                            <input
                                                type="number"
                                                name="side2"
                                                value={dimensions.side2}
                                                onChange={handleDimensionChange}
                                                min="0"
                                                step="0.1"
                                            />
                                            <span>cm</span>
                                        </div>
                                    </label>
                                </div>
                                <div className="input-group">
                                    <label>
                                        Côté 3:
                                        <div className="input-with-unit">
                                            <input
                                                type="number"
                                                name="side3"
                                                value={dimensions.side3}
                                                onChange={handleDimensionChange}
                                                min="0"
                                                step="0.1"
                                            />
                                            <span>cm</span>
                                        </div>
                                    </label>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="buttons">
                        <button onClick={calculate} className="calculate-btn">
                            Calculer
                        </button>
                        <button onClick={resetCalculator} className="reset-btn">
                            Réinitialiser
                        </button>
                    </div>
                </div>

                <div className="visualization-section">
                    <div className="shape-container">
                        {renderShape()}
                    </div>

                    <div className="results">
                        <h3>Résultats :</h3>
                        {selectedShape === 'square' && results.area !== null && (
                            <>
                                <div className="calculation-detail">
                                    <p><strong>Aire :</strong> {results.area.toFixed(2)} cm²</p>
                                    <p className="formula">Formule: côté × côté = {dimensions.length} × {dimensions.length}</p>
                                </div>
                                <div className="calculation-detail">
                                    <p><strong>Périmètre :</strong> {results.perimeter.toFixed(2)} cm</p>
                                    <p className="formula">Formule: 4 × côté = 4 × {dimensions.length}</p>
                                </div>
                            </>
                        )}

                        {selectedShape === 'rectangle' && results.area !== null && (
                            <>
                                <div className="calculation-detail">
                                    <p><strong>Aire :</strong> {results.area.toFixed(2)} cm²</p>
                                    <p className="formula">Formule: longueur × largeur = {dimensions.length} × {dimensions.width}</p>
                                </div>
                                <div className="calculation-detail">
                                    <p><strong>Périmètre :</strong> {results.perimeter.toFixed(2)} cm</p>
                                    <p className="formula">Formule: 2 × (longueur + largeur) = 2 × ({dimensions.length} + {dimensions.width})</p>
                                </div>
                            </>
                        )}

                        {selectedShape === 'circle' && results.area !== null && (
                            <>
                                <div className="calculation-detail">
                                    <p><strong>Aire :</strong> {results.area.toFixed(2)} cm²</p>
                                    <p className="formula">Formule: π × rayon² = π × {dimensions.radius}² ≈ 3.1416 × {dimensions.radius * dimensions.radius}</p>
                                </div>
                                <div className="calculation-detail">
                                    <p><strong>Circonférence :</strong> {results.circumference.toFixed(2)} cm</p>
                                    <p className="formula">Formule: 2 × π × rayon = 2 × π × {dimensions.radius} ≈ 2 × 3.1416 × {dimensions.radius}</p>
                                </div>
                            </>
                        )}

                        {selectedShape === 'triangle' && results.area !== null && (
                            <div className="calculation-detail">
                                <p><strong>Aire :</strong> {results.area.toFixed(2)} cm²</p>
                                <p className="formula">
                                    Formule: <Fraction numerator="base × hauteur" denominator="2" /> = <Fraction numerator={`${dimensions.base} × ${dimensions.height}`} denominator="2" />
                                </p>
                            </div>
                        )}

                        {selectedShape === 'triangle-sides' && results.area !== null && (
                            <>
                                <div className="calculation-detail">
                                    <p><strong>Aire :</strong> {results.area.toFixed(2)} cm²</p>
                                    <p className="formula">
                                        Formule de Héron: √[s(s-a)(s-b)(s-c)] où s = <Fraction numerator="a+b+c" denominator="2" /><br />
                                        s = ({dimensions.side1} + {dimensions.side2} + {dimensions.side3})/2 = <Fraction numerator={`${dimensions.side1 + dimensions.side2 + dimensions.side3}`} denominator="2" /><br />
                                        Aire = √[{((dimensions.side1 + dimensions.side2 + dimensions.side3)/2).toFixed(1)} × {(((dimensions.side1 + dimensions.side2 + dimensions.side3)/2) - dimensions.side1).toFixed(1)} × {(((dimensions.side1 + dimensions.side2 + dimensions.side3)/2) - dimensions.side2).toFixed(1)} × {(((dimensions.side1 + dimensions.side2 + dimensions.side3)/2) - dimensions.side3).toFixed(1)}]
                                    </p>
                                </div>
                                <div className="calculation-detail">
                                    <p><strong>Périmètre :</strong> {results.perimeter.toFixed(2)} cm</p>
                                    <p className="formula">Formule: côté1 + côté2 + côté3 = {dimensions.side1} + {dimensions.side2} + {dimensions.side3}</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="instructions">
                <h3>Comment utiliser :</h3>
                <ol>
                    <li>Sélectionnez une forme géométrique</li>
                    <li>Ajustez les dimensions avec les champs</li>
                    <li>Cliquez sur "Calculer" pour obtenir les résultats</li>
                    <li>La forme s'ajuste en temps réel selon vos paramètres</li>
                </ol>
            </div>
        </div>
    );
};

export default GeometryCalculator;
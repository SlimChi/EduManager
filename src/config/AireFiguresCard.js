import React from 'react';
import '../../../styles/AireFiguresCard.css';

const AireFiguresCard = () => {
    return (
        <div className="aire-card">
            <div className="aire-card-header">
                <h3>A retenir : <span className="highlight">Aire des figures planes usuelles</span></h3>
            </div>

            <div className="figures-container">
                {/* Carré */}
                <div className="figure">
                    <div className="square-shape">
                        <div className="dimension cote">c</div>
                    </div>
                    <div className="formula">A = c × c = c²</div>
                </div>

                {/* Rectangle */}
                <div className="figure">
                    <div className="rectangle-shape">
                        <div className="dimension largeur">L</div>
                        <div className="dimension longueur">L</div>
                    </div>
                    <div className="formula">A = L × l</div>
                </div>

                {/* Triangle */}
                <div className="figure">
                    <div className="triangle-shape">
                        <div className="dimension base">b</div>
                        <div className="dimension hauteur">h</div>
                    </div>
                    <div className="formula">A = (b × h) / 2</div>
                </div>

                {/* Disque */}
                <div className="figure">
                    <div className="circle-shape">
                        <div className="dimension rayon">R</div>
                        <div className="center-point">O</div>
                    </div>
                    <div className="formula">A = π × R²</div>
                </div>
            </div>
        </div>
    );
};

export default AireFiguresCard;
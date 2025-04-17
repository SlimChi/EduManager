import React, { useState } from 'react';
import '../../../../../styles/CoinFlip.css';
import {GiTwoCoins} from "react-icons/gi";
import {FaCoins, FaRandom} from "react-icons/fa"; // Nous créerons ce fichier CSS ensuite

const CoinFlip = () => {
    const [isFlipping, setIsFlipping] = useState(false);
    const [result, setResult] = useState(null);
    const [flipCount, setFlipCount] = useState(0);
    const [resultsHistory, setResultsHistory] = useState([]);

    const flipCoin = () => {
        if (isFlipping) return;

        setIsFlipping(true);
        setResult(null);

        // Animation pendant 1 seconde
        setTimeout(() => {
            const randomResult = Math.random() < 0.5 ? 'heads' : 'tails';
            setResult(randomResult);
            setIsFlipping(false);
            setFlipCount(prev => prev + 1);
            setResultsHistory(prev => [randomResult, ...prev.slice(0, 39)]);
        }, 1000);
    };


    return (
        <div className="coin-flip-container">
            <div className="coin-header-card">
                <div className="coin-header-content">
                    <div className="coin-header-icon">
                        <GiTwoCoins className="main-icon" />
                        <FaRandom className="floating-icon floating-icon-1" />
                        <FaCoins className="floating-icon floating-icon-2" />

                    </div>
                    <h1 className="coin-header-title">
                        Pile <span className="highlight-word">ou</span> Face <span className="emoji">🎲</span>
                        <br />
                        <span className="subtitle">Simulateur de lancer de pièce</span>
                    </h1>
                </div>
                <div className="coin-header-decoration">
                    <div className="decoration-circle circle-1"></div>
                    <div className="decoration-circle circle-2"></div>
                    <div className="decoration-wave"></div>
                </div>
            </div>

            <div className="coin-wrapper">
                <div
                    className={`coin ${isFlipping ? 'flipping' : ''} ${result === 'heads' ? 'heads' : 'tails'}`}
                    onClick={flipCoin}
                >
                    <div className="side heads">

                    </div>
                    <div className="side tails">

                    </div>
                </div>
            </div>

            <button
                className={`flip-button ${isFlipping ? 'flipping' : ''}`}
                onClick={flipCoin}
                disabled={isFlipping}
            >
                {isFlipping ? 'En cours...' : 'Lancer la pièce'}
            </button>

            {result && (
                <div className="result-display">
                    <h2>Résultat : {result === 'heads' ? 'PILE' : 'FACE'}</h2>
                    <p>Nombre de lancers : {flipCount}</p>
                </div>
            )}

            {resultsHistory.length > 0 && (
                <div className="history">
                    <h3>Historique (40 derniers):</h3>
                    <div className="history-items">
                        {resultsHistory.map((item, index) => (
                            <span key={index} className={`history-item ${item}`}>
                {item === 'heads' ? 'P' : 'F'}
              </span>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default CoinFlip;
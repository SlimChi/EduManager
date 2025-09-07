import React, {useState, useEffect} from 'react';
import {FaRandom, FaCheck, FaSearch} from 'react-icons/fa';
import {AutomatismesDataDB} from './AutomatismesDataDB';
import './Automatismes2.css';

const Automatismes2 = () => {
    // États
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [showAnswers, setShowAnswers] = useState(Array(4).fill(false));
    const [userAnswers, setUserAnswers] = useState(Array(4).fill(''));
    const [sessionSeed, setSessionSeed] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    // Génère un seed aléatoire
    const generateSeed = () => Math.floor(Math.random() * 1000000);

    // Génère des questions de manière reproductible
    const generateQuestions = (seed) => {
        const shuffled = [...AutomatismesDataDB].sort((a, b) => {
            const hashA = String(a.id + seed).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const hashB = String(b.id + seed).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            return hashA - hashB;
        });

        setSelectedQuestions(shuffled.slice(0, 4));
        setShowAnswers(Array(4).fill(false));
        setUserAnswers(Array(4).fill(''));
        setSessionSeed(seed);
    };

    // Nouvelle série de questions
    const handleNewMission = () => {
        const newSeed = generateSeed();
        generateQuestions(newSeed);
    };

    // Recherche une série existante
    const handleSearch = () => {
        if (searchInput) {
            generateQuestions(Number(searchInput));
        }
    };

    // Affiche/masque la réponse
    const toggleAnswer = (index) => {
        const newShowAnswers = [...showAnswers];
        newShowAnswers[index] = !newShowAnswers[index];
        setShowAnswers(newShowAnswers);
    };

    // Gestion des réponses utilisateur
    const handleAnswerChange = (index, value) => {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[index] = value;
        setUserAnswers(newUserAnswers);
    };

    // Initialisation
    useEffect(() => {
        handleNewMission();
    }, []);

    return (
        <div className="automatismes-compact-container">
            <div className="automatismes-compact-header">
                <div className="compact-title-section">
                    <h3><FaRandom/> Automatismes - Défi Math</h3>
                    <button onClick={handleNewMission} className="compact-generate-btn">
                        <FaRandom/> Nouveau
                    </button>
                </div>
            </div>

            <div className="compact-questions-grid">
                {selectedQuestions.map((question, index) => (
                    <div key={index} className="compact-question-card"
                         style={{borderTop: `4px solid ${question.color || '#4A90E2'}`}}>
                        <div className="compact-question-content">
                            <div className="compact-question-header">
                                <span className="compact-question-number">Q{index + 1}</span>
                                <span className="compact-question-title">{question.title}</span>
                            </div>
                            <p className="compact-question-text">{question.question}</p>

                            <div className="compact-answer-section">

                                <button
                                    onClick={() => toggleAnswer(index)}
                                    className="compact-check-btn"
                                >
                                    <FaCheck/>
                                </button>
                            </div>

                            {showAnswers[index] && (
                                <div className="compact-answer-reveal">
                                    <p className="compact-correct-answer">Réponse: {question.answer}</p>
                                    <p className="compact-detailed-answer">{question.detailedAnswer}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="compact-search-box">
                <input
                    type="number"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Code série"
                    className="compact-search-input"
                />
                <button onClick={handleSearch} className="compact-search-btn">
                    <FaSearch/>
                </button>
            </div>

            {sessionSeed && (
                <div className="compact-session-code">
                    Code de série: {sessionSeed}
                </div>
            )}
        </div>
    );
};

export default Automatismes2;
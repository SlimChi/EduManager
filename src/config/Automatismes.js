import React, {useState, useEffect} from 'react';
import {FaRandom, FaSearch, FaLightbulb, FaClock} from 'react-icons/fa';
import {FcOk, FcHighPriority} from "react-icons/fc";
import {AutomatismesDataDB} from "./AutomatismesDataDB";
import './Automatismes.css';
import defaultGif from '../assets/spongebob.gif';

const Automatismes = () => {
    // États
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [showAnswers, setShowAnswers] = useState(Array(4).fill(false));
    const [userAnswers, setUserAnswers] = useState(Array(4).fill(''));
    const [score, setScore] = useState({correct: 0, total: 0});
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(300);
    const [isActive, setIsActive] = useState(true);
    const [currentGif, setCurrentGif] = useState(defaultGif);
    const [sessionSeed, setSessionSeed] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    // Génère un seed aléatoire
    const generateSeed = () => Math.floor(Math.random() * 1000000);

    // Charge un GIF aléatoire
    const loadRandomGif = () => {
        try {
            const randomNum = Math.floor(Math.random() * 14) + 1;
            return require(`../assets/gif/${randomNum}.gif`);
        } catch (e) {
            console.error("Erreur de chargement du GIF", e);
            return defaultGif;
        }
    };

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
        setCurrentGif(loadRandomGif());
        setSessionSeed(seed);
    };

    // Nouvelle série de questions
    const handleNewMission = () => {
        const newSeed = generateSeed();
        setTimeLeft(300);
        setIsActive(true);
        generateQuestions(newSeed);
    };

    // Recherche une série existante
    const handleSearch = () => {
        if (searchInput) {
            generateQuestions(Number(searchInput));
        }
    };

    // Vérifie une réponse
    const checkAnswer = (index) => {
        const correct = String(selectedQuestions[index].answer).trim().toLowerCase();
        const userAnswer = userAnswers[index].trim().toLowerCase();
        const isCorrect = userAnswer === correct;

        setScore(prev => ({
            correct: isCorrect ? prev.correct + 1 : prev.correct,
            total: prev.total + 1
        }));
        setStreak(isCorrect ? prev => prev + 1 : 0);

        return isCorrect;
    };

    // Affiche/masque la réponse
    const toggleAnswer = (index) => {
        const isCorrect = checkAnswer(index);
        const newShowAnswers = [...showAnswers];
        newShowAnswers[index] = !newShowAnswers[index];
        setShowAnswers(newShowAnswers);

        const card = document.getElementById(`card-${index}`);
        if (card) {
            card.classList.add(isCorrect ? 'correct-animation' : 'incorrect-animation');
            setTimeout(() => {
                card.classList.remove(isCorrect ? 'correct-animation' : 'incorrect-animation');
            }, 1000);
        }
    };

    // Gestion du temps
    useEffect(() => {
        let timer;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
        }
        return () => clearInterval(timer);
    }, [isActive, timeLeft]);

    // Initialisation
    useEffect(() => {
        handleNewMission();
    }, []);

    return (
        <div className="automatismes-container">
            <div className="automatismes-header">
                <div className="title-section">
                    <h2><FaRandom/> MATH CHALLENGE</h2>
                    <p>Débloquez vos super-pouvoirs mathématiques !</p>
                </div>
            </div>

            <div className="generate-btn-container">
                <button onClick={handleNewMission} className="generate-btn">
                    <FaRandom/> NOUVELLE MISSION
                </button>


            </div>
            <div className="search-box no-print">
                <input
                    type="number"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Code de série"
                />
                <button onClick={handleSearch} className="search-btn">
                    <FaSearch/> CHARGER
                </button>
            </div>

            <div className="print-only reference-code">
                {sessionSeed && `Code : ${sessionSeed}`}
            </div>

            <div className="questions-grid">
                {selectedQuestions.map((question, index) => (
                    <div
                        id={`card-${index}`}
                        key={`${sessionSeed}-${question.id}`}
                        className="question-card"
                        style={{borderTop: `4px solid ${question.color}`}}
                    >
                        <div className="question-header">
              <span className="question-icon" style={{color: question.color}}>
                {question.icon || <FaLightbulb/>}
              </span>
                            <h3>{question.title}</h3>
                        </div>

                        <div className="question-content">
                            <div className="question-text">{question.question}</div>

                            <textarea
                                value={userAnswers[index]}
                                onChange={(e) => {
                                    const newAnswers = [...userAnswers];
                                    newAnswers[index] = e.target.value;
                                    setUserAnswers(newAnswers);
                                }}
                                className="user-answer-input"
                                rows={7}
                            />

                            <div className="card-footer">
                                <button
                                    onClick={() => toggleAnswer(index)}
                                    className="answer-btn"
                                >
                                    {showAnswers[index] ? (
                                        <FcHighPriority size={20}/>
                                    ) : (
                                        <FcOk size={20}/>
                                    )}
                                    <span>{showAnswers[index] ? "Cacher" : "Vérifier"}</span>
                                </button>
                            </div>

                            {showAnswers[index] && (
                                <div className="answer-display">
                                    <div className="correct-answer">
                                        <span>Réponse :</span> {selectedQuestions[index].answer}
                                    </div>
                                    {userAnswers[index] && (
                                        <div className={`user-feedback ${
                                            userAnswers[index].trim().toLowerCase() ===
                                            String(selectedQuestions[index].answer).trim().toLowerCase()
                                                ? 'correct' : 'incorrect'
                                        }`}>
                                            Votre réponse: {userAnswers[index]}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="countdown-container no-print">
                <div className={`countdown-timer ${timeLeft <= 30 ? 'warning' : ''}`}>
                    <FaClock/> {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
                </div>
            </div>

            <div className="smart-gif-container">
                <img
                    src={currentGif}
                    alt="Animation"
                    className="smart-gif"
                    onError={() => setCurrentGif(defaultGif)}
                />
            </div>
        </div>
    );
};

export default Automatismes;
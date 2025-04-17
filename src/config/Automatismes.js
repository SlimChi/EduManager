import React, {useState, useEffect} from 'react';
import {FaRandom, FaCalculator, FaStar, FaTrophy, FaLightbulb, FaClock} from 'react-icons/fa';
import {FcCheckmark, FcCancel, FcOk, FcHighPriority} from "react-icons/fc";
import {AutomatismesDataDB} from "./AutomatismesDataDB";
import './Automatismes.css';
import smartgif from '../assets/spongebob.gif';

const Automatismes = () => {
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [showAnswers, setShowAnswers] = useState(Array(4).fill(false));
    const [userAnswers, setUserAnswers] = useState(Array(4).fill(''));
    const [score, setScore] = useState({correct: 0, total: 0});
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes en secondes
    const [isActive, setIsActive] = useState(true);
    useEffect(() => {
        const img = new Image();
        img.src = '../assets/smart.gif';
    }, []);
    useEffect(() => {
        generateNewQuestions();
    }, []);

    useEffect(() => {
        let timer;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
        }
        return () => clearInterval(timer);
    }, [isActive, timeLeft]);

    const generateNewQuestions = () => {
        const shuffled = [...AutomatismesDataDB].sort(() => 0.5 - Math.random());
        setSelectedQuestions(shuffled.slice(0, 4));
        setShowAnswers(Array(4).fill(false));
        setUserAnswers(Array(4).fill(''));
        setTimeLeft(300);
        setIsActive(true);
    };

    const checkAnswer = (index) => {
        const correctAnswer = String(selectedQuestions[index].answer).trim().toLowerCase();
        const userAnswer = userAnswers[index].trim().toLowerCase();
        const isCorrect = userAnswer === correctAnswer;

        if (isCorrect) {
            setScore(prev => ({correct: prev.correct + 1, total: prev.total + 1}));
            setStreak(prev => prev + 1);
        } else {
            setScore(prev => ({...prev, total: prev.total + 1}));
            setStreak(0);
        }

        return isCorrect;
    };

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

    const handleAnswerChange = (index, value) => {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[index] = value;
        setUserAnswers(newUserAnswers);
    };

    const getRandomEmoji = () => {
        const emojis = ["🚀", "👾", "🎮", "🔮", "⚡", "🧩", "🤖"];
        return emojis[Math.floor(Math.random() * emojis.length)];
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="automatismes-container">
            <div className="automatismes-header">
                <div className="title-section">
                    <h2><FaRandom/> MATH CHALLENGE {getRandomEmoji()}</h2>
                    <p>Débloquez vos super-pouvoirs mathématiques !</p>
                </div>

            </div>

            <div className="generate-btn-container">
                <button onClick={generateNewQuestions} className="generate-btn">
                    <FaRandom/> NOUVELLE MISSION
                </button>
            </div>

            <div className="questions-grid">
                {selectedQuestions.map((question, index) => (
                    <div
                        id={`card-${index}`}
                        key={question.id}
                        className="question-card"
                        style={{
                            borderTop: `4px solid ${question.color}`,
                            '--order': index
                        }}
                    >
                        <div className="question-header">
                            <span className="question-icon" style={{color: question.color}}>
                                {question.icon || <FaLightbulb/>}
                            </span>
                            <h3>{question.title}</h3>
                        </div>

                        <div className="question-content">
                            <div className="question-text">
                                {question.question}
                            </div>
                            <div className="answer-input-area">
                                <textarea
                                    value={userAnswers[index]}
                                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                                    className="user-answer-input"
                                />
                            </div>

                            <div className="card-footer">
                                <button
                                    onClick={() => toggleAnswer(index)}
                                    className="answer-btn"
                                    aria-label={showAnswers[index] ? "Cacher la réponse" : "Vérifier la réponse"}
                                >
                                    {showAnswers[index] ?
                                        <FcHighPriority size={24}/> :
                                        <FcOk size={24}/>}
                                    <span>{showAnswers[index] ? "Cacher" : "Vérifier"}</span>
                                </button>
                            </div>

                            {showAnswers[index] && (
                                <div className="answer-display">
                                    <span className="answer-label">Réponse :</span>
                                    <div className="math-answer">
                                        {String(selectedQuestions[index].answer)}
                                    </div>

                                    {selectedQuestions[index].detailedAnswer && (
                                        <div className="detailed-answer">
                                            <span className="explanation-label">Explication :</span>
                                            <div className="math-explanation">
                                                {selectedQuestions[index].detailedAnswer}
                                            </div>
                                        </div>
                                    )}

                                    {userAnswers[index] && (
                                        <div className={`user-answer-comparison ${
                                            userAnswers[index].trim().toLowerCase() ===
                                            String(selectedQuestions[index].answer).trim().toLowerCase()
                                                ? 'correct' : 'incorrect'
                                        }`}>
                                            <span>Ta réponse: {userAnswers[index]}</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="countdown-container no-print">
                <div
                    className={`countdown-timer ${timeLeft <= 30 ? 'warning' : ''} ${timeLeft === 0 ? 'time-up' : ''}`}>
                    <FaClock className="clock-icon"/>
                    <span>{formatTime(timeLeft)}</span>
                </div>
                {timeLeft === 0 && (
                    <div className="time-up-message">
                        Temps écoulé ! Génère une nouvelle série pour continuer.
                    </div>
                )}
            </div>
            {/* Ajout du GIF animé */}
            <div className="smart-gif-container">
                <img
                    src={smartgif}  // Utilisez la variable importée
                    alt="Animation intelligente"
                    className="smart-gif"
                    onLoad={() => console.log("GIF chargé")}  // Pour debug
                    onError={(e) => console.error("Erreur de chargement", e)}  // Pour debug
                />
            </div>
        </div>
    );
};

export default Automatismes;
import React, {useRef, useState} from 'react';
import {FaCheck, FaLightbulb, FaEye, FaEyeSlash} from 'react-icons/fa';
import '../../../../styles/act1proba.css';
import '../../../../styles/act1proba-print.css';
import {Card, Col, Row} from 'react-bootstrap';
import PrintManager from '../../../../utils/PrintManager';
import BackButton from '../../../../components/navigation/BackButton';

const QcmOptic2nd = () => {
    const [userAnswers, setUserAnswers] = useState({});
    const [showCorrections, setShowCorrections] = useState(false);

    const questions = [
        // Partie 1 - Couleurs
        {
            id: 'q1',
            question: "Quelles sont les couleurs primaires :",
            options: [
                {id: 'q1a', text: "blanc", correct: false},
                {id: 'q1b', text: "rouge, vert, bleu", correct: true},
                {id: 'q1c', text: "noir et blanc", correct: false},
                {id: 'q1d', text: "cyan, magenta et jaune", correct: false}
            ],
            explanation: "Les couleurs primaires en synthèse additive sont rouge, vert et bleu (RVB).",
            category: "Couleurs"
        },
        {
            id: 'q2',
            question: "Mélange de VERT et BLEU donne :",
            options: [
                {id: 'q2a', text: "Blanc", correct: false},
                {id: 'q2b', text: "Jaune", correct: false},
                {id: 'q2c', text: "Cyan", correct: true},
                {id: 'q2d', text: "Magenta", correct: false}
            ],
            explanation: "Le mélange de vert et bleu donne du cyan en synthèse additive.",
            category: "Couleurs"
        },
        {
            id: 'q3',
            question: "Superposition de R, V, B donne :",
            options: [
                {id: 'q3a', text: "Blanc", correct: true},
                {id: 'q3b', text: "Noir", correct: false},
                {id: 'q3c', text: "Blanc + Noir", correct: false},
                {id: 'q3d', text: "Noir + Blanc", correct: false}
            ],
            explanation: "La superposition des trois couleurs primaires RVB donne du blanc.",
            category: "Couleurs"
        },
        {
            id: 'q4',
            question: "Le magenta s'obtient avec :",
            options: [
                {id: 'q4a', text: "Rouge + Bleu", correct: true},
                {id: 'q4b', text: "Blanc + Noir", correct: false},
                {id: 'q4c', text: "Jaune + Cyan", correct: false},
                {id: 'q4d', text: "Impossible", correct: false}
            ],
            explanation: "Le magenta est obtenu en mélangeant du rouge et du bleu.",
            category: "Couleurs"
        },
        {
            id: 'q5',
            question: "Les écrans utilisent :",
            options: [
                {id: 'q5a', text: "Synthèse additive RVB", correct: true},
                {id: 'q5b', text: "Synthèse soustractive", correct: false},
                {id: 'q5c', text: "Synthèse CMJ", correct: false},
                {id: 'q5d', text: "Synthèse complexe", correct: false}
            ],
            explanation: "Les écrans utilisent la synthèse additive avec les couleurs primaires RVB.",
            category: "Couleurs"
        },

        // Partie 2 - Lumière et spectre
        {
            id: 'q6',
            question: "L'arc-en-ciel montre :",
            options: [
                {id: 'q6a', text: "Décomposition lumière visible", correct: true},
                {id: 'q6b', text: "Décomposition IR", correct: false},
                {id: 'q6c', text: "Décomposition UV", correct: false},
                {id: 'q6d', text: "Décomposition lumière noire", correct: false}
            ],
            explanation: "L'arc-en-ciel montre la décomposition de la lumière blanche en ses différentes couleurs visibles.",
            category: "Spectre"
        },
        {
            id: 'q7',
            question: "Ordre des couleurs avec un prisme :",
            options: [
                {id: 'q7a', text: "Rouge → Violet", correct: false},
                {id: 'q7b', text: "Violet → Rouge", correct: true},
                {id: 'q7c', text: "Aléatoire", correct: false},
                {id: 'q7d', text: "Dépend du prisme", correct: false}
            ],
            explanation: "Ordre: Violet (dévié le plus) → Bleu → Vert → Jaune → Orange → Rouge (dévié le moins).",
            category: "Spectre"
        },
        {
            id: 'q8',
            question: "Les UV :",
            options: [
                {id: 'q8a', text: "Dangereux à petite dose", correct: true},
                {id: 'q8b', text: "Utiles à petite dose", correct: true},
                {id: 'q8c', text: "Inoffensifs", correct: false},
                {id: 'q8d', text: "Dangereux à forte dose", correct: true}
            ],
            explanation: "Les UV sont dangereux à forte dose mais utiles à très petites doses (vitamine D).",
            category: "Spectre"
        },
        {
            id: 'q9',
            question: "Les IR en forte dose :",
            options: [
                {id: 'q9a', text: "Endommagent les yeux", correct: true},
                {id: 'q9b', text: "Brûlures internes", correct: true},
                {id: 'q9c', text: "Inoffensifs", correct: false},
                {id: 'q9d', text: "Nécessaires", correct: false}
            ],
            explanation: "Les IR en forte dose peuvent brûler la rétine et causer des brûlures internes.",
            category: "Spectre"
        },
        {
            id: 'q10',
            question: "Lumière visible :",
            options: [
                {id: 'q10a', text: "400-800 nm", correct: true},
                {id: 'q10b', text: "0.4-0.8 μm", correct: true},
                {id: 'q10c', text: "400-800 km", correct: false},
                {id: 'q10d', text: "0.4-0.8 mm", correct: false}
            ],
            explanation: "Spectre visible: 400 nm (violet) à 800 nm (rouge) soit 0.4-0.8 μm.",
            category: "Spectre"
        },

        // Questions ouvertes
        {
            id: 'q11',
            question: "Protections contre IR/UV forts :",
            type: "text",
            modelAnswer: "UV: crème solaire, lunettes UV, vêtements. IR: lunettes spéciales, écrans thermiques. Parties à risque: yeux (rétine, cornée) et peau.",
            category: "Applications"
        },
        {
            id: 'q12',
            question: "Unités infiniment petit :",
            type: "text",
            modelAnswer: "1) Nanomètre: 1 nm = 10^-9 m\n2) Angström: 1 Å = 10^-10 m",
            category: "Applications"
        }
    ];

    // Séparer les questions en deux colonnes
    const leftColumnQuestions = questions.filter((_, index) => index % 2 === 0);
    const rightColumnQuestions = questions.filter((_, index) => index % 2 !== 0);

    const handleAnswerChange = (questionId, optionId, isChecked) => {
        if (questions.find(q => q.id === questionId)?.multipleAnswers) {
            setUserAnswers(prev => ({
                ...prev,
                [questionId]: isChecked
                    ? [...(prev[questionId] || []), optionId]
                    : (prev[questionId] || []).filter(id => id !== optionId)
            }));
        } else {
            setUserAnswers(prev => ({...prev, [questionId]: [optionId]}));
        }
    };

    const toggleCorrections = () => {
        setShowCorrections(!showCorrections);
    };

    const contentRef = useRef();

    const renderQuestion = (q) => (
        <div key={q.id} className="exercise-box mb-4 p-3">
            <p className="question-text">
                <strong>Q{q.id.substring(1)} :</strong> {q.question}
                {q.multipleAnswers && <span className="multiple-hint"> (plusieurs réponses possibles)</span>}
            </p>

            {q.type === "text" ? (
                <textarea
                    className="answer-textarea form-control"
                    rows={3}
                    value={userAnswers[q.id] || ''}
                    onChange={(e) => setUserAnswers(prev => ({...prev, [q.id]: e.target.value}))}
                />
            ) : (
                <div className="options-container">
                    <Row>
                        <Col md={6}>
                            {q.options.slice(0, 2).map(opt => (
                                <div key={opt.id} className="option-item form-check">
                                    <input
                                        className="form-check-input"
                                        type={q.multipleAnswers ? "checkbox" : "radio"}
                                        id={opt.id}
                                        name={q.id}
                                        checked={(userAnswers[q.id] || []).includes(opt.id)}
                                        onChange={(e) => handleAnswerChange(q.id, opt.id, e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor={opt.id}>
                                        {opt.text}
                                        {showCorrections && (
                                            <span
                                                className={`correction-indicator ${opt.correct ? 'correct' : 'incorrect'}`}>
                                                {opt.correct ? ' ✓' : ' ✗'}
                                            </span>
                                        )}
                                    </label>
                                </div>
                            ))}
                        </Col>
                        <Col md={6}>
                            {q.options.slice(2, 4).map(opt => (
                                <div key={opt.id} className="option-item form-check">
                                    <input
                                        className="form-check-input"
                                        type={q.multipleAnswers ? "checkbox" : "radio"}
                                        id={opt.id}
                                        name={q.id}
                                        checked={(userAnswers[q.id] || []).includes(opt.id)}
                                        onChange={(e) => handleAnswerChange(q.id, opt.id, e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor={opt.id}>
                                        {opt.text}
                                        {showCorrections && (
                                            <span
                                                className={`correction-indicator ${opt.correct ? 'correct' : 'incorrect'}`}>
                                                {opt.correct ? ' ✓' : ' ✗'}
                                            </span>
                                        )}
                                    </label>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </div>
            )}

            {showCorrections && (
                <div className="correction-box mt-3 p-2">
                    <div className="correction-header">
                        <FaCheck className="correction-icon"/>
                        <strong>Correction</strong>
                    </div>
                    {q.type === "text" ? (
                        <div>
                            <p className="model-answer"><strong>Réponse attendue :</strong></p>
                            <pre className="model-answer-text">{q.modelAnswer}</pre>
                        </div>
                    ) : (
                        <div>
                            <p className="correct-answers">
                                <strong>Réponse(s) correcte(s)
                                    :</strong> {q.options.filter(o => o.correct).map(o => o.text).join(', ')}
                            </p>
                            <p className="correction-explanation">{q.explanation}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );

    return (
        <>
            <BackButton/>
            <div className="tp-container act1-container mt-0 qcm-optique" ref={contentRef}>
                <PrintManager
                    contentRef={contentRef}
                    activityName="QCM_Optique_2nde"
                    pageCount={2}
                    quality="hd"
                />

                <div className="print-page">
                    <Card className="main-card p-3">
                        <Row>
                            <Col md={6} className="left-column">
                                {leftColumnQuestions.map(renderQuestion)}
                            </Col>
                            <Col md={6} className="right-column">
                                {rightColumnQuestions.map(renderQuestion)}
                            </Col>
                        </Row>

                        <div className="controls-box no-print">
                            <button
                                className={`toggle-corrections-btn ${showCorrections ? 'active' : ''}`}
                                onClick={toggleCorrections}
                            >
                                {showCorrections ? <><FaEyeSlash/> Masquer corrections</> : <><FaEye/> Afficher
                                    corrections</>}
                            </button>
                        </div>
                    </Card>

                    <footer className="tp-footer">
                        <p>Physique-Chimie 2nde - Chapitre: Lumière et couleurs</p>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default QcmOptic2nd;
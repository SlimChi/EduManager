import React, {useRef, useState} from 'react';
import {FaCheck, FaEquals, FaCalculator} from 'react-icons/fa';
import '../../../../styles/act1proba.css';
import '../../../../styles/act1proba-print.css';
import ModalImage from '../../../../utils/ModalImage';
import AutoEvaluationGrid from '../../../../config/AutoEvaluationGrid';
import {Card, Col, Row} from 'react-bootstrap';
import PrintManager from '../../../../utils/PrintManager';
import BackButton from '../../../../components/navigation/BackButton';

const ExerciceEquationPremierDeg = () => {
    const [showAnswers, setShowAnswers] = useState({});
    const [answers, setAnswers] = useState({});

    const correctAnswers = {
        ex1: 'x = 5',
        ex2: 'x = 8',
        ex3: 'x = 1',
        ex4: 'x = -1',
        ex5: 'x = -8/5',
        ex6: 'x = 5/4',
        ex7: 'x = -5/4',
        ex8: 'x = 3',
        ex9: 'x = -2',
        ex10: 'x = 7',
        ex11: 'x = 4',
        ex12: 'x = 7',
        ex13: 'x = 5',
        ex14: 'x = 12'
    };

    const equations = [
        {key: 'ex1', title: '1. Équation simple', equation: '3x + 4 = 2x + 9', correction: '3x - 2x = 9 - 4 → x = 5'},
        {
            key: 'ex2',
            title: '2. Équation avec termes des deux côtés',
            equation: '2x + 3 = 3x - 5',
            correction: '2x - 3x = -5 - 3 → -x = -8 → x = 8'
        },
        {
            key: 'ex3',
            title: '3. Équation avec coefficients positifs',
            equation: '5x - 1 = 2x + 4',
            correction: '5x - 2x = 4 + 1 → 3x = 3 → x = 1'
        },
        {
            key: 'ex4',
            title: '4. Équation avec solution négative',
            equation: '3x + 1 = 7x + 5',
            correction: '3x - 7x = 5 - 1 → -4x = 4 → x = -1'
        },
        {
            key: 'ex5',
            title: '5. Équation sans terme constant à droite',
            equation: '5x + 8 = 0',
            correction: '5x = -8 → x = -8/5'
        },
        {
            key: 'ex6',
            title: '6. Équation avec constante à gauche',
            equation: '5 - 4x = 0',
            correction: '-4x = -5 → x = 5/4'
        },
        {
            key: 'ex7',
            title: '7. Équation avec termes négatifs',
            equation: '5x + 2 = 9x + 7',
            correction: '5x - 9x = 7 - 2 → -4x = 5 → x = -5/4'
        },
        {
            key: 'ex8',
            title: '8. Équation avec coefficients entiers',
            equation: '4x - 3 = 2x + 3',
            correction: '4x - 2x = 3 + 3 → 2x = 6 → x = 3'
        },
        {
            key: 'ex9',
            title: '9. Équation avec solution négative',
            equation: '2x + 5 = x + 3',
            correction: '2x - x = 3 - 5 → x = -2'
        },
        {
            key: 'ex10',
            title: '10. Équation finale',
            equation: '3(x - 1) = 2x + 4',
            correction: '3x - 3 = 2x + 4 → 3x - 2x = 4 + 3 → x = 7'
        },
        {
            key: 'ex11',
            title: '11. Équation simple',
            equation: 'x + 3 = 7',
            correction: 'x = 7 - 3 → x = 4'
        },
        {
            key: 'ex12',
            title: '12. Équation avec soustraction',
            equation: 'x - 5 = 2',
            correction: 'x = 2 + 5 → x = 7'
        },
        {
            key: 'ex13',
            title: '13. Équation avec coefficient',
            equation: '2x = 10',
            correction: 'x = 10 / 2 → x = 5'
        },
        {
            key: 'ex14',
            title: '14. Équation avec division',
            equation: 'x / 3 = 4',
            correction: 'x = 4 × 3 → x = 12'
        }
    ];

    const toggleAnswer = (key) => {
        setShowAnswers((prev) => ({...prev, [key]: !prev[key]}));
    };

    const handleInputChange = (key, value) => {
        setAnswers((prev) => ({...prev, [key]: value}));
    };

    const contentRef = useRef();

    return (
        <>
            <BackButton/>
            <div className="tp-container act1-container mt-0" ref={contentRef}>
                <PrintManager
                    contentRef={contentRef}
                    activityName="Exercices_Equations_Premier_Degre"
                    pageCount={2}
                    quality="hd"
                />

                <div className="print-page">
                    <div className="math-chapter-box blue mt-0">
                        <FaEquals className="math-chapter-icon"/>
                        <h2 className="math-chapter-title-test">
                            📝 Exercices d'Équations du Premier Degré
                        </h2>
                    </div>

                    <p className="instructions mt-0">
                        Résoudre les équations suivantes dans ℝ.
                        Donner les solutions sous la forme "x = ...".
                    </p>

                    <Card className="p-3">
                        <Row>
                            {equations.map(({key, title, equation, correction}) => (
                                <Col md={6} key={key} className="mb-3">
                                    <div className="exercise-box">
                                        <p className="equation">{equation}</p>
                                        <input
                                            type="text"
                                            className="answer-input3"
                                            value={answers[key] || ''}
                                            onChange={(e) => handleInputChange(key, e.target.value)}

                                        />
                                        <button
                                            className="correction-btnoptic no-print"
                                            onClick={() => toggleAnswer(key)}
                                        >
                                            <FaCheck/> {showAnswers[key] ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showAnswers[key] && (
                                            <div className="correction-box">
                                                <strong>Correction :</strong> {correctAnswers[key]}
                                                <p className="correction-steps">{correction}</p>
                                            </div>
                                        )}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Card>

                </div>

                <footer className="tp-footer">
                    <p>Mathématiques 2nde - Chapitre 3: Équations du premier degré</p>
                </footer>
            </div>
        </>
    );
};

export default ExerciceEquationPremierDeg;
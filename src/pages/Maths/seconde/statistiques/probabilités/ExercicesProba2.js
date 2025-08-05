import React, {useRef, useState} from 'react';
import {FaCheck, FaChartPie, FaPercentage, FaDice, FaTable, FaCalculator} from 'react-icons/fa';
import BackButton from '../../../../../components/navigation/BackButton';
import PrintManager from '../../../../../utils/PrintManager';
import '../../../../../styles/act1proba.css';
import '../../../../../styles/act1proba-print.css';
import ModalImage from '../../../../../utils/ModalImage';
import AutoEvaluationGrid from "../../../../../config/AutoEvaluationGrid";
import {Card, Col, Row} from "react-bootstrap";

const ExercicesProba2 = () => {
    const [showAnswers, setShowAnswers] = useState({
        ex5a: false,
        ex5b: false,
        ex6a: false,
        ex6b: false,
        ex7a: false,
        ex7b: false,
        ex7c: false,
        ex7d: false,
        ex8a: false,
        ex8b: false,
        ex8c: false,
        ex9: false,
        ex10a: false,
        ex10b: false,
        ex10c: false,
        ex11a: false,
        ex11b: false,
        ex11c: false,
        ex11d: false,
        ex12a: false,
        ex12b: false,
        ex12c: false
    });

    const [answers, setAnswers] = useState({
        ex5a: '',
        ex5b: '',
        ex6a0: '',
        ex6a1: '',
        ex6a2: '',
        ex6a3: '',
        ex6b: '',
        ex7a: '',
        ex7b: '',
        ex7c: '',
        ex7d: '',
        ex8a: '',
        ex8b: '',
        ex8c: '',
        ex9: '',
        ex101: '',
        ex102: '',
        ex103: '',
        ex104: '',
        ex105: '',
        ex106: '',
        ex107: '',
        ex108: '',
        ex10c: '',
        ex11a: '',
        ex11b: '',
        ex11c: '',
        ex11d: '',
        ex12a1: '',
        ex12a2: '',
        ex12a3: '',
        ex12a4: '',
        ex12a5: '',
        ex12a6: '',
        ex12b: '',
        ex12c: ''
    });

    const correctAnswers = {
        ex5a: '15%',
        ex5b: '18%',
        ex6a0: '60%',
        ex6a1: '25%',
        ex6a2: '10%',
        ex6a3: '5%',
        ex6b: 'Oui : 60% des élèves ont eu plus de 12',
        ex7a: '47',
        ex7b: '47%',
        ex7c: '53',
        ex7d: '53%',
        ex8a: 'Int(4 × Ran# + 1)',
        ex8b: 'Int(10 × Ran#)',
        ex8c: 'Int(8 × Ran# + 3)',
        ex9: 'Int(20 × Ran# + 1)',
        ex101: '11',
        ex102: '12',
        ex103: '13',
        ex104: '14',
        ex105: '15',
        ex106: '10',
        ex107: '12',
        ex108: '13',
        ex10c: '1/10 = 0,1 ou 10%',
        ex11a: '6 issues possibles',
        ex11b: '1-6, 2-5, 3-4, 4-3, 5-2, 6-1',
        ex11c: '1/6 ≈ 0,1667',
        ex12a1: 'from random import *',
        ex12a2: 'x=randint(1,4)',
        ex12a3: 'if x==4:',
        ex12a4: 'print("gagné 5 €")',
        ex12a5: 'else:',
        ex12a6: 'print("perdu 2 €")',
        ex12b: '-2 -2 -2 5 -2 -2 -2 -2 -2 5',
        ex12c: 'Perte de 1 €'
    };
    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));

        if (!answers[field] && !showCorrections[field] && field.startsWith('question')) {
            setAnswers((prev) => ({...prev, [field]: correctAnswers[field]}));
        }
    };
    const [showCorrections, setShowCorrections] = useState({
        tree1: false,
        tree2: false,
    });
    const [modalState, setModalState] = useState({
        show: false,
        imageUrl: '',
        altText: '',
    });
    const leftColumn = [
        '5714240979', '3412895786', '9350516307', '8453907752', '6729564461'
    ];
    const rightColumn = [
        '8854525930', '6948198904', '3903564071', '5343224130', '7823492491'
    ];
    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState((prev) => ({...prev, show: false}));
    };

    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };

    const toggleAnswer = (field) => {
        setShowAnswers((prev) => ({...prev, [field]: !prev[field]}));
    };

    const contentRef = useRef();

    return (
        <>
            <BackButton/>

            <div
                className="tp-container act1-container mt-0"
                id="proba-content"
                ref={contentRef}
            >
                <PrintManager
                    contentRef={contentRef}
                    activityName="Exercices_Probabilites"
                    pageCount={3}
                    quality="hd"
                />

                {/* Page 1 - Exercices 5 à 10 */}
                <div className="print-page">
                    <div className="math-chapter-box blue mt-0">
                        <FaChartPie className="math-chapter-icon"/>
                        <h2 className="math-chapter-title-test">
                            📊 Exercices de Probabilités
                        </h2>
                    </div>

                    <section className="exercises-section">
                        {/* Exercice 5 */}
                        <div className="exercise-box info-bubble">
                            <h4 className="exercise-title">
                                <FaDice/> 5. Fréquence de sortie du nombre 10
                            </h4>
                            <p>On simule le lancer de deux dés avec 100 nombres aléatoires entre 2 et 12 :</p>
                            <p className="small-text text-center">10 ; 2 ; 7 ; 6 ; 10 ; 5 ; 8 ; 3 ; 11
                                ; 10 ;
                                8 ; 11 ; 6 ; 3 ; 4 ; 11
                                ; 6 ; 6 ; 11 ; 3 ; 2 ; 5 ; 6 ; 9 ; 12 ; 2 ; 2 ; 11 ; 2 ; 6 ; 10 ; 9 ; 5 ; 5 ; 3 ; 2 ; 10
                                ; 6 ; 7 ; 3 ; 11 ; 10 ; 5 ; 10 ; 11 ; 5 ; 12 ; 5 ; 6 ; 3 ; 10 ; 6 ; 7 ; 9 ; 10 ; 8 ; 3 ;
                                3
                                ; 9 ; 10 ; 9 ; 10 ; 7 ; 4 ; 3 ; 9 ; 8 ; 12 ; 4 ; 8 ; 12 ; 9 ; 10 ; 4 ; 8 ; 4 ; 2 ; 10 ;
                                11 ; 7 ; 6 ; 10 ; 11 ; 4 ; 10 ; 2 ; 12 ; 9 ; 3 ; 10 ; 11 ; 10 ; 8 ; 5 ; 5 ; 2 ; 10 ; 11
                                ; 2
                                ; 1.</p>

                            <div className="d-flex flex-wrap" style={{gap: '20px'}}>
                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">a. Fréquence de 10 sur les 20 premiers nombres :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex5a}
                                        onChange={(e) => handleInputChange('ex5a', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex5a')}
                                    >
                                        <FaCheck/> {showAnswers.ex5a ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex5a && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex5a}
                                        </div>
                                    )}
                                </div>

                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">b. Fréquence de 10 sur les 100 nombres :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex5b}
                                        onChange={(e) => handleInputChange('ex5b', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex5b')}
                                    >
                                        <FaCheck/> {showAnswers.ex5b ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex5b && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex5b}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Exercice 6 */}
                        <div className="exercise-box info-bubble">
                            <h4 className="exercise-title">
                                <FaTable/> 6. Résultats d'un contrôle de maths
                            </h4>
                            <div className="d-flex flex-wrap" style={{gap: '20px'}}>
                                <div style={{flex: '1', minWidth: '300px'}}>
                                    <table className="table table-bordered modern-table">
                                        <thead>
                                        <tr>
                                            <th>Note sur 20</th>
                                            <th>8-12</th>
                                            <th>12-14</th>
                                            <th>14-16</th>
                                            <th>16-20</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Nombre d'élèves</td>
                                            <td>60</td>
                                            <td>25</td>
                                            <td>10</td>
                                            <td>5</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="question-card mt-3">
                                        <p className="question-text">a. Calculer les fréquences :</p>
                                        <div className="d-flex flex-wrap" style={{gap: '10px'}}>
                                            <div>
                                                <label>f(8-12) =</label>
                                                <input
                                                    type="text"
                                                    className="answer-input small"
                                                    value={answers.ex6a0}
                                                    onChange={(e) => handleInputChange('ex6a0', e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label>f(12-14) =</label>
                                                <input
                                                    type="text"
                                                    className="answer-input small"
                                                    value={answers.ex6a1}
                                                    onChange={(e) => handleInputChange('ex6a1', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            className="correction-btnoptic no-print"
                                            onClick={() => toggleAnswer('ex6a')}
                                        >
                                            <FaCheck/> {showAnswers.ex6a ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showAnswers.ex6a && (
                                            <div className="correction-box">
                                                <strong>Correction :</strong> f(8-12) = {correctAnswers.ex6a0}, f(12-14)
                                                = {correctAnswers.ex6a1}, f(14-16) = {correctAnswers.ex6a2}, f(16-20)
                                                = {correctAnswers.ex6a3}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div style={{flex: '1', minWidth: '300px'}}>
                                    <div className="question-card">
                                        <p className="question-text">a. Calculer les fréquences :</p>
                                        <div className="d-flex flex-wrap" style={{gap: '10px'}}>
                                            <div>
                                                <label>f(14-16) =</label>
                                                <input
                                                    type="text"
                                                    className="answer-input small"
                                                    value={answers.ex6a2}
                                                    onChange={(e) => handleInputChange('ex6a2', e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label>f(16-20) =</label>
                                                <input
                                                    type="text"
                                                    className="answer-input small"
                                                    value={answers.ex6a3}
                                                    onChange={(e) => handleInputChange('ex6a3', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            className="correction-btnoptic no-print"
                                            onClick={() => toggleAnswer('ex6a')}
                                        >
                                            <FaCheck/> {showAnswers.ex6a ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showAnswers.ex6a && (
                                            <div className="correction-box">
                                                <strong>Correction :</strong> f(8-12) = {correctAnswers.ex6a0}, f(12-14)
                                                = {correctAnswers.ex6a1}, f(14-16) = {correctAnswers.ex6a2}, f(16-20)
                                                = {correctAnswers.ex6a3}
                                            </div>
                                        )}
                                    </div>

                                    <div className="question-card">
                                        <p className="question-text">b. Le professeur dit que plus de la moitié de la
                                            classe a eu plus de 12. Est-ce confirmé ?</p>
                                        <input
                                            type="text"
                                            className="answer-input"
                                            value={answers.ex6b}
                                            onChange={(e) => handleInputChange('ex6b', e.target.value)}
                                        />
                                        <button
                                            className="correction-btnoptic no-print"
                                            onClick={() => toggleAnswer('ex6b')}
                                        >
                                            <FaCheck/> {showAnswers.ex6b ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showAnswers.ex6b && (
                                            <div className="correction-box">
                                                <strong>Correction :</strong> {correctAnswers.ex6b}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exercice 7 */}
                        <div className="exercise-box info-bubble">
                            <h4 className="exercise-title">
                                <FaPercentage/> 7. Simulation de lancers de pièce
                            </h4>
                            <div
                                className="simulation-container d-flex justify-content-between align-items-start gap-4">
                                {/* 📘 Paragraphes à gauche */}
                                <div className="instructions-text flex-grow-1">
                                    <p>La calculatrice fournit 10 nombres au hasard. La liste de ces nombres est
                                        utilisée pour simuler 100 lancers d'une pièce de monnaie.</p>
                                    <p>Le côté <strong>PILE</strong> est associé aux chiffres : 0 ; 1 ; 2 ; 3 et 4.</p>
                                    <p>Le côté <strong>FACE</strong> est associé aux chiffres : 5 ; 6 ; 7 ; 8 et 9.</p>
                                </div>

                                {/* 💳 Carte à droite */}
                                <div className="generated-numbers-card">
                                    <Card className="number-card">
                                        <Card.Body>
                                            <Row>
                                                <Col className="number-col text-end">
                                                    {leftColumn.map((num, i) => (
                                                        <div key={i} className="number-line">{num}</div>
                                                    ))}
                                                </Col>
                                                <Col className="number-col text-start">
                                                    {rightColumn.map((num, i) => (
                                                        <div key={i} className="number-line">{num}</div>
                                                    ))}
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Page 2 - Exercices 8 à 12 */}
                <div className="print-page">
                    <section className="exercises-section">
                        <div className="d-flex flex-wrap" style={{gap: '20px'}}>
                            <div className="question-card" style={{flex: '1', minWidth: '200px'}}>
                                <p className="question-text">a. Nombre de PILE :</p>
                                <input
                                    type="text"
                                    className="answer-input"
                                    value={answers.ex7a}
                                    onChange={(e) => handleInputChange('ex7a', e.target.value)}
                                />
                                <button
                                    className="correction-btnoptic no-print"
                                    onClick={() => toggleAnswer('ex7a')}
                                >
                                    <FaCheck/> {showAnswers.ex7a ? 'Masquer' : 'Correction'}
                                </button>
                                {showAnswers.ex7a && (
                                    <div className="correction-box">
                                        <strong>Correction :</strong> {correctAnswers.ex7a}
                                    </div>
                                )}
                            </div>

                            <div className="question-card" style={{flex: '1', minWidth: '200px'}}>
                                <p className="question-text">b. Fréquence de PILE :</p>
                                <input
                                    type="text"
                                    className="answer-input"
                                    value={answers.ex7b}
                                    onChange={(e) => handleInputChange('ex7b', e.target.value)}
                                />
                                <button
                                    className="correction-btnoptic no-print"
                                    onClick={() => toggleAnswer('ex7b')}
                                >
                                    <FaCheck/> {showAnswers.ex7b ? 'Masquer' : 'Correction'}
                                </button>
                                {showAnswers.ex7b && (
                                    <div className="correction-box">
                                        <strong>Correction :</strong> {correctAnswers.ex7b}
                                    </div>
                                )}
                            </div>

                            <div className="question-card" style={{flex: '1', minWidth: '200px'}}>
                                <p className="question-text">c. Nombre de FACE :</p>
                                <input
                                    type="text"
                                    className="answer-input"
                                    value={answers.ex7c}
                                    onChange={(e) => handleInputChange('ex7c', e.target.value)}
                                />
                                <button
                                    className="correction-btnoptic no-print"
                                    onClick={() => toggleAnswer('ex7c')}
                                >
                                    <FaCheck/> {showAnswers.ex7c ? 'Masquer' : 'Correction'}
                                </button>
                                {showAnswers.ex7c && (
                                    <div className="correction-box">
                                        <strong>Correction :</strong> {correctAnswers.ex7c}
                                    </div>
                                )}
                            </div>

                            <div className="question-card" style={{flex: '1', minWidth: '200px'}}>
                                <p className="question-text">d. Fréquence de FACE :</p>
                                <input
                                    type="text"
                                    className="answer-input"
                                    value={answers.ex7d}
                                    onChange={(e) => handleInputChange('ex7d', e.target.value)}
                                />
                                <button
                                    className="correction-btnoptic no-print"
                                    onClick={() => toggleAnswer('ex7d')}
                                >
                                    <FaCheck/> {showAnswers.ex7d ? 'Masquer' : 'Correction'}
                                </button>
                                {showAnswers.ex7d && (
                                    <div className="correction-box">
                                        <strong>Correction :</strong> {correctAnswers.ex7d}
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Exercice 8 */}
                        <div className="exercise-box info-bubble">
                            <h4 className="exercise-title">
                                <FaCalculator/> 8. Instructions calculatrice
                            </h4>
                            <p>Indiquer l'instruction à taper sur la calculatrice pour obtenir, au hasard, un nombre
                                entier sur l'intervalle :</p>

                            <div className="d-flex flex-wrap" style={{gap: '20px'}}>
                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">a. [1 ; 4] :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex8a}
                                        onChange={(e) => handleInputChange('ex8a', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex8a')}
                                    >
                                        <FaCheck/> {showAnswers.ex8a ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex8a && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex8a}
                                        </div>
                                    )}
                                </div>

                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">b. [0 ; 9] :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex8b}
                                        onChange={(e) => handleInputChange('ex8b', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex8b')}
                                    >
                                        <FaCheck/> {showAnswers.ex8b ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex8b && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex8b}
                                        </div>
                                    )}
                                </div>

                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">c. [3 ; 10] :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex8c}
                                        onChange={(e) => handleInputChange('ex8c', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex8c')}
                                    >
                                        <FaCheck/> {showAnswers.ex8c ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex8c && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex8c}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Exercice 9 */}
                        <div className="exercise-box info-bubble">
                            <h4 className="exercise-title">
                                <FaCalculator/> 9. Simulation de tirage de numéros
                            </h4>
                            <p>Une urne contient 20 boules numérotées de 1 à 20. Une boule est tirée au
                                hasard, son numéro est noté puis elle est remise dans l'urne. Donner l'instruction à la
                                calculatrice
                                pour simuler cette
                                expérience :</p>
                            <input
                                type="text"
                                className="answer-input"
                                value={answers.ex9}
                                onChange={(e) => handleInputChange('ex9', e.target.value)}
                            />
                            <button
                                className="correction-btnoptic no-print"
                                onClick={() => toggleAnswer('ex9')}
                            >
                                <FaCheck/> {showAnswers.ex9 ? 'Masquer' : 'Correction'}
                            </button>
                            {showAnswers.ex9 && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex9}
                                </div>
                            )}
                        </div>
                        {/* Exercice 10 */}
                        <div className="exercise-box info-bubble">
                            <h4 className="exercise-title">
                                <FaTable/> 10. Simulation de tirages de boules
                            </h4>
                            <p>Une urne contient 10 boules numérotées de 1 à 10. Une boule est tirée
                                au hasard, on note son numéro et elle est remise dans l'urne. <br/> À l'aide d'un
                                tableur,
                                simuler 100 tirages d'une boule et afficher la fréquence de chaque numéro.</p>
                            <div className="d-flex flex-wrap" style={{gap: '20px'}}>
                                <div style={{flex: '1', minWidth: '300px'}}>
                                    <div className="answer-area2">
                                        <div className="d-flex flex-wrap align-items-center" style={{gap: '10px'}}>
                                            {[1, 2, 3, 4].map((num) => (
                                                <div key={num} className="function-input-group">
                                                    <span className="function-label me-2">f({num}) =</span>
                                                    <input
                                                        type="text"
                                                        className="answer-input2 small2"
                                                        value={answers[`ex10${num}`]}
                                                        onChange={(e) => handleInputChange(`ex10${num}`, e.target.value)}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex10a')}
                                    >
                                        <FaCheck/> {showAnswers.ex10a ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex10a && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> f(1) = {correctAnswers.ex101}, f(2)
                                            = {correctAnswers.ex102},
                                            f(3) = {correctAnswers.ex103}, f(4) = {correctAnswers.ex104}
                                        </div>
                                    )}
                                </div>

                                <div style={{flex: '1', minWidth: '300px'}}>
                                    <div className="answer-area2">
                                        <div className="d-flex flex-wrap align-items-center" style={{gap: '10px'}}>
                                            {[5, 6, 7, 8].map((num) => (
                                                <div key={num} className="function-input-group">
                                                    <span className="function-label me-2">f({num}) =</span>
                                                    <input
                                                        type="text"
                                                        className="answer-input2 small2"
                                                        value={answers[`ex10${num}`]}
                                                        onChange={(e) => handleInputChange(`ex10${num}`, e.target.value)}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex10b')}
                                    >
                                        <FaCheck/> {showAnswers.ex10b ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex10b && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> f(5) = {correctAnswers.ex105}, f(6)
                                            = {correctAnswers.ex106},
                                            f(7) = {correctAnswers.ex107}, f(8) = {correctAnswers.ex108}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <p className="question-text">Probabilité d'obtenir le chiffre 1 :</p>
                            <input
                                type="text"
                                className="answer-input"
                                value={answers.ex10c}
                                onChange={(e) => handleInputChange('ex10c', e.target.value)}
                            />
                            <button
                                className="correction-btnoptic no-print"
                                onClick={() => toggleAnswer('ex10c')}
                            >
                                <FaCheck/> {showAnswers.ex10c ? 'Masquer' : 'Correction'}
                            </button>
                            {showAnswers.ex10c && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> p(1) = {correctAnswers.ex10c}
                                </div>
                            )}
                        </div>
                    </section>
                </div>

                {/* Page 3 - auto-évaluation */}
                <div className="print-page">
                    {/* Exercice 11 */}
                    <div className="exercise-box info-bubble">
                        <h4 className="exercise-title">
                            <FaDice/> 11. Lancer de deux dés
                        </h4>
                        <p>On lance deux dés à six faces et on s'intéresse à la somme des deux dés.</p>

                        <div className="tree-structure">
                            {showCorrections.tree2 ? (
                                <pre>
                                    {`1er dé     2e dé       Somme
                                        1
                                        ├── 1   → 2
                                        ├── 2   → 3
                                        ├── 3   → 4
                                        ├── 4   → 5
                                        ├── 5   → 6
                                        └── 6   → 7
                                        
                                        2
                                        ├── 1   → 3
                                        ├── 2   → 4
                                        ├── 3   → 5
                                        ├── 4   → 6
                                        ├── 5   → 7
                                        └── 6   → 8
                                        
                                        ... (et ainsi de suite jusqu'à 6)`}
                                </pre>
                            ) : (
                                <pre>
                                    {`1er dé                         2e dé                         Somme    
                                
`}
                                </pre>
                            )}
                        </div>
                        <div
                            style={{
                                width: "100%",
                                height: "250px",
                                margin: "10px auto",
                                background: "white",
                                border: "1px solid #999",
                                borderRadius: "4px",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                            }}
                        >
                        </div>
                        <button
                            className="correction-btnoptic compact no-print"
                            onClick={() => toggleCorrection('tree1')}
                            style={{margin: '5px 0'}}
                        >
                            <FaCheck/> {showCorrections.tree2 ? 'Masquer la correction' : 'Afficher la correction'}
                        </button>
                        <div className="d-flex flex-wrap" style={{gap: '20px'}}>
                            <div style={{flex: '1', minWidth: '300px'}}>
                                <p className="question-text">a. Nombre de façons d'obtenir une somme de 7 :</p>
                                <input
                                    type="text"
                                    className="answer-input"
                                    value={answers.ex11a}
                                    onChange={(e) => handleInputChange('ex11a', e.target.value)}
                                />
                                <button
                                    className="correction-btnoptic no-print"
                                    onClick={() => toggleAnswer('ex11a')}
                                >
                                    <FaCheck/> {showAnswers.ex11a ? 'Masquer' : 'Correction'}
                                </button>
                                {showAnswers.ex11a && (
                                    <div className="correction-box">
                                        <strong>Correction :</strong> {correctAnswers.ex11a}
                                    </div>
                                )}
                            </div>

                            <div style={{flex: '1', minWidth: '300px'}}>
                                <p className="question-text">b. Liste des combinaisons donnant 7 :</p>
                                <input
                                    type="text"
                                    className="answer-input"
                                    value={answers.ex11b}
                                    onChange={(e) => handleInputChange('ex11b', e.target.value)}
                                />
                                <button
                                    className="correction-btnoptic no-print"
                                    onClick={() => toggleAnswer('ex11b')}
                                >
                                    <FaCheck/> {showAnswers.ex11b ? 'Masquer' : 'Correction'}
                                </button>
                                {showAnswers.ex11b && (
                                    <div className="correction-box">
                                        <strong>Correction :</strong> {correctAnswers.ex11b}
                                    </div>
                                )}
                            </div>

                            <div style={{flex: '1', minWidth: '300px'}}>
                                <p className="question-text">c. Probabilité d'obtenir une somme de 7 :</p>
                                <input
                                    type="text"
                                    className="answer-input"
                                    value={answers.ex11c}
                                    onChange={(e) => handleInputChange('ex11c', e.target.value)}
                                />
                                <button
                                    className="correction-btnoptic no-print"
                                    onClick={() => toggleAnswer('ex11c')}
                                >
                                    <FaCheck/> {showAnswers.ex11c ? 'Masquer' : 'Correction'}
                                </button>
                                {showAnswers.ex11c && (
                                    <div className="correction-box">
                                        <strong>Correction :</strong> {correctAnswers.ex11c}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <AutoEvaluationGrid/>
                </div>

                <footer className="tp-footer">
                    <p>Mathématiques 2nde - Chapitre 4: Fréquence d'échantillons – Probabilités</p>
                </footer>
            </div>

            {modalState.show && (
                <ModalImage
                    imageUrl={modalState.imageUrl}
                    altText={modalState.altText}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export default ExercicesProba2;
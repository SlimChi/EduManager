import React, {useRef, useState} from 'react';
import {FaCheck, FaChartPie, FaTree} from 'react-icons/fa';
import BackButton from '../../../../../components/navigation/BackButton';
import PrintManager from '../../../../../utils/PrintManager';
import '../../../../../styles/act1proba.css';
import '../../../../../styles/act1proba-print.css';
import ModalImage from '../../../../../utils/ModalImage';
import AutoEvaluationGrid from "../../../../../config/AutoEvaluationGrid";
import {Card, Col, Row} from "react-bootstrap";
import Automatismes from "../../../../../config/Automatismes";

const ExerciceProba3 = () => {
    const [showAnswers, setShowAnswers] = useState({
        ex1a: false,
        ex1b: false,
        ex1c: false,
        ex2a: false,
        ex2b: false,
        ex2c: false,
        ex3a: false,
        ex3b: false,
        ex3c: false,
        ex4a: false,
        ex4b: false,
        ex4c: false
    });

    const [answers, setAnswers] = useState({
        ex1a: '',
        ex1b: '',
        ex1c: '',
        ex2a: '',
        ex2b: '',
        ex2c: '',
        ex3a: '',
        ex3b: '',
        ex3c: '',
        ex4a: '',
        ex4b: '',
        ex4c: ''
    });

    const correctAnswers = {
        ex1a: '8 issues possibles',
        ex1b: 'PPF, PFP, FPP',
        ex1c: '3/8 = 0,375',
        ex2a: '9 issues possibles',
        ex2b: 'RR, RV, VR, VV, VB, BR, BV, BB',
        ex2c: '1/9 ≈ 0,111',
        ex3a: '12 issues possibles',
        ex3b: 'A1, A2, A3, A4, B1, B2, B3, B4, C1, C2, C3, C4',
        ex3c: '4/12 = 1/3 ≈ 0,333',
        ex4a: '6 issues possibles',
        ex4b: '1-6, 2-5, 3-4, 4-3, 5-2, 6-1',
        ex4c: '1/6 ≈ 0,1667'
    };

    const [showCorrections, setShowCorrections] = useState({
        tree1: false,
        tree2: false,
        tree3: false,
        tree4: false
    });

    const [modalState, setModalState] = useState({
        show: false,
        imageUrl: '',
        altText: '',
    });

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

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));
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
                    activityName="Exercices_Probabilites_Arbres"
                    pageCount={3}
                    quality="hd"
                />
                <div className="print-page">
                    o
                </div>

                {/* Page 1 - Exercices 1 et 2 */}
                <div className="print-page">
                    <div className="math-chapter-box green mt-0">
                        <FaTree className="math-chapter-icon"/>
                        <h2 className="math-chapter-title-test">
                            🌳 Exercices sur les Arbres de Probabilité
                        </h2>
                    </div>

                    <section className="exercises-section">
                        {/* Exercice 1 */}
                        <div className="exercise-box info-bubble">
                            <h4 className="exercise-title">
                                <FaTree/> 1. Lancer de trois pièces
                            </h4>
                            <p>On lance trois fois de suite une pièce de monnaie. On note P pour Pile et F pour
                                Face.</p>

                            <div className="tree-structure mb-3">
                                {showCorrections.tree1 ? (
                                    <pre>
                                        {`1er lancer           2e lancer           3e lancer             Résultat
                                    P
                                    ├── P
                                    │   ├── P   → PPP
                                    │   └── F   → PPF
                                    └── F
                                        ├── P   → PFP
                                        └── F   → PFF
                                    
                                    F
                                    ├── P
                                    │   ├── P   → FPP
                                    │   └── F   → FPF
                                    └── F
                                        ├── P   → FFP
                                        └── F   → FFF`}
                                    </pre>
                                ) : (
                                    <pre>
                                        {`1er lancer     2e lancer      3e lancer       Résultat
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
`}
                                    </pre>
                                )}
                            </div>
                            <button
                                className="correction-btnoptic compact no-print"
                                onClick={() => toggleCorrection('tree1')}
                            >
                                <FaCheck/> {showCorrections.tree1 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>

                            <div className="d-flex flex-wrap mt-3" style={{gap: '20px'}}>
                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">a. Nombre d'issues possibles :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex1a}
                                        onChange={(e) => handleInputChange('ex1a', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex1a')}
                                    >
                                        <FaCheck/> {showAnswers.ex1a ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex1a && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex1a}
                                        </div>
                                    )}
                                </div>

                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">b. Issues avec exactement 1 Face :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex1b}
                                        onChange={(e) => handleInputChange('ex1b', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex1b')}
                                    >
                                        <FaCheck/> {showAnswers.ex1b ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex1b && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex1b}
                                        </div>
                                    )}
                                </div>

                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">c. Probabilité d'avoir exactement 1 Face :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex1c}
                                        onChange={(e) => handleInputChange('ex1c', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex1c')}
                                    >
                                        <FaCheck/> {showAnswers.ex1c ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex1c && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex1c}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Exercice 2 */}
                        <div className="exercise-box info-bubble">
                            <h4 className="exercise-title">
                                <FaTree/> 2. Tirage de boules dans une urne
                            </h4>
                            <p>Une urne contient 3 boules : Rouge (R), Verte (V) et Bleue (B). On tire une boule, on
                                note sa couleur et on la remet dans l'urne. On répète cette opération deux fois.</p>

                            <div className="tree-structure mb-3">
                                {showCorrections.tree2 ? (
                                    <pre>
                                        {`1er tirage     2e tirage       Résultat
                                    R
                                    ├── R   → RR
                                    ├── V   → RV
                                    └── B   → RB
                                    
                                    V
                                    ├── R   → VR
                                    ├── V   → VV
                                    └── B   → VB
                                    
                                    B
                                    ├── R   → BR
                                    ├── V   → BV
                                    └── B   → BB`}
                                    </pre>
                                ) : (
                                    <pre>
                                        {`1er tirage     2e tirage       Résultat
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
`}
                                    </pre>
                                )}
                            </div>
                            <button
                                className="correction-btnoptic compact no-print"
                                onClick={() => toggleCorrection('tree2')}
                            >
                                <FaCheck/> {showCorrections.tree2 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>

                            <div className="d-flex flex-wrap mt-3" style={{gap: '20px'}}>
                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">a. Nombre d'issues possibles :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex2a}
                                        onChange={(e) => handleInputChange('ex2a', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex2a')}
                                    >
                                        <FaCheck/> {showAnswers.ex2a ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex2a && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex2a}
                                        </div>
                                    )}
                                </div>

                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">b. Liste de toutes les issues :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex2b}
                                        onChange={(e) => handleInputChange('ex2b', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex2b')}
                                    >
                                        <FaCheck/> {showAnswers.ex2b ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex2b && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex2b}
                                        </div>
                                    )}
                                </div>

                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">c. Probabilité d'avoir deux boules rouges :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex2c}
                                        onChange={(e) => handleInputChange('ex2c', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex2c')}
                                    >
                                        <FaCheck/> {showAnswers.ex2c ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex2c && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex2c}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Page 2 - Exercices 3 et 4 */}
                <div className="print-page">
                    <section className="exercises-section">
                        {/* Exercice 3 */}
                        <div className="exercise-box info-bubble">
                            <h4 className="exercise-title">
                                <FaTree/> 3. Choix d'un menu
                            </h4>
                            <p>Dans un restaurant, on peut choisir entre 3 entrées (A, B, C) et 4 plats principaux (1,
                                2, 3, 4).</p>

                            <div className="tree-structure mb-3">
                                {showCorrections.tree3 ? (
                                    <pre>
                                        {`Entrée      Plat principal       Menu complet
                                    A
                                    ├── 1   → A1
                                    ├── 2   → A2
                                    ├── 3   → A3
                                    └── 4   → A4
                                    
                                    B
                                    ├── 1   → B1
                                    ├── 2   → B2
                                    ├── 3   → B3
                                    └── 4   → B4
                                    
                                    C
                                    ├── 1   → C1
                                    ├── 2   → C2
                                    ├── 3   → C3
                                    └── 4   → C4`}
                                    </pre>
                                ) : (
                                    <pre>
                                        {`Entrée      Plat principal       Menu complet
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
`}
                                    </pre>
                                )}
                            </div>
                            <button
                                className="correction-btnoptic compact no-print"
                                onClick={() => toggleCorrection('tree3')}
                            >
                                <FaCheck/> {showCorrections.tree3 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>

                            <div className="d-flex flex-wrap mt-3" style={{gap: '20px'}}>
                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">a. Nombre de menus possibles :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex3a}
                                        onChange={(e) => handleInputChange('ex3a', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex3a')}
                                    >
                                        <FaCheck/> {showAnswers.ex3a ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex3a && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex3a}
                                        </div>
                                    )}
                                </div>

                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">b. Liste de tous les menus possibles :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex3b}
                                        onChange={(e) => handleInputChange('ex3b', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex3b')}
                                    >
                                        <FaCheck/> {showAnswers.ex3b ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex3b && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex3b}
                                        </div>
                                    )}
                                </div>

                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">c. Probabilité de choisir l'entrée A :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex3c}
                                        onChange={(e) => handleInputChange('ex3c', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex3c')}
                                    >
                                        <FaCheck/> {showAnswers.ex3c ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex3c && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex3c}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Exercice 4 */}
                        <div className="exercise-box info-bubble">
                            <h4 className="exercise-title">
                                <FaTree/> 4. Lancer de deux dés
                            </h4>
                            <p>On lance deux dés à six faces et on s'intéresse à la somme des deux dés.</p>

                            <div className="tree-structure mb-3">
                                {showCorrections.tree4 ? (
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
                                        {`1er dé     2e dé       Somme
                                    
                                    
                                                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
`}
                                    </pre>
                                )}
                            </div>
                            <button
                                className="correction-btnoptic compact no-print"
                                onClick={() => toggleCorrection('tree4')}
                            >
                                <FaCheck/> {showCorrections.tree4 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>

                            <div className="d-flex flex-wrap mt-3" style={{gap: '20px'}}>
                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">a. Nombre de façons d'obtenir une somme de 7 :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex4a}
                                        onChange={(e) => handleInputChange('ex4a', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex4a')}
                                    >
                                        <FaCheck/> {showAnswers.ex4a ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex4a && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex4a}
                                        </div>
                                    )}
                                </div>

                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">b. Liste des combinaisons donnant 7 :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex4b}
                                        onChange={(e) => handleInputChange('ex4b', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex4b')}
                                    >
                                        <FaCheck/> {showAnswers.ex4b ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex4b && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex4b}
                                        </div>
                                    )}
                                </div>

                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">c. Probabilité d'obtenir une somme de 7 :</p>
                                    <input
                                        type="text"
                                        className="answer-input"
                                        value={answers.ex4c}
                                        onChange={(e) => handleInputChange('ex4c', e.target.value)}
                                    />
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex4c')}
                                    >
                                        <FaCheck/> {showAnswers.ex4c ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex4c && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex4c}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Page 3 - auto-évaluation */}
                <div className="print-page">
                    <AutoEvaluationGrid/>
                </div>

                <footer className="tp-footer">
                    <p>Mathématiques 2nde - Chapitre 4: Arbres de Probabilité</p>
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

export default ExerciceProba3;
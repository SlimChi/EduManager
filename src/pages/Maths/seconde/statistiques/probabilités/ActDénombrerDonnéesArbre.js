import React, {useRef, useState} from 'react';
import {FaPrint, FaCheck, FaUtensils, FaListOl} from 'react-icons/fa';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import {IoMdSchool} from 'react-icons/io';
import '../../../../../styles/act1proba.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../../components/navigation/BackButton';
import ModalImage from '../../../../../utils/ModalImage';
import PrintManager from '../../../../../utils/PrintManager';
import Automatismes from '../../../../../config/Automatismes';
import menuImage from '../../../../../assets/menutable.jpg';
import '../../../../../styles/act1proba-print.css';
import AutoEvaluationGrid from "../../../../../config/AutoEvaluationGrid";
import AutoEvaluationGrid2 from "../../../../../config/AutoEvaluationGrid2";

const ActDénombrerDonnéesArbre = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [showConclusion, setShowConclusion] = useState(false);

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        tree1: false,
        tree2: false,
        frequencyTable: false,
        probabilityMethod: false,
        exercises: false
    });

    // Réponses attendues
    const correctAnswers = {
        question1: '12 menus possibles (3 entrées × 2 plats × 2 desserts)',
        question2: '0 (aucun menu ne vérifie cette condition)',
        question3: 'Non, l\'ordre des branches n\'affecte pas le décompte final',
        question4: 'On retrouve les mêmes 12 combinaisons mais présentées différemment',
    };

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

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));

        if (!answers[field] && !showCorrections[field] && field.startsWith('question')) {
            setAnswers((prev) => ({...prev, [field]: correctAnswers[field]}));
        }
    };

    const [showAnswer, setShowAnswer] = useState(false);
    const contentRef = useRef();

    if (className === 'Seconde-pythagore') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>

            <div
                className="tp-container act1-container"
                id="proba-content"
                ref={contentRef}
            >
                <PrintManager
                    contentRef={contentRef}
                    activityName="Combinatoire_Menu"
                    pageCount={3}
                    quality="hd"
                />
                <div className="print-page">
                    <Automatismes/>
                </div>

                {/* Page 1 - En-tête et introduction */}
                <div className="print-page">
                    <div className="math-chapter-box blue">
                        <FaListOl className="math-chapter-icon"/>
                        <h2 className="math-chapter-title-test">
                            Dénombrer des données par un arbre <br/> Quel menu choisir ?
                        </h2>
                        <span
                            className="emoji"
                            style={{fontSize: '30px', marginLeft: '15px'}}
                        >
                            🍽️
                        </span>
                    </div>

                    <div className="activity-header">
                        <span className="activity-badge">ACTIVITÉ 5</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaUtensils/> {' '}
                                <span className="emoji">
                                    <FaUtensils/>
                                </span>{' '}
                                Combinaisons de menus
                            </span>
                        </div>
                    </div>

                    <div
                        className="d-flex align-items-start flex-wrap"
                        style={{gap: '20px', width: '100%'}}
                    >
                        <div style={{flex: 1}}>
                            <div className="renovation-contexte">
                                <p style={{fontSize: '16px', color: '#2c3e50'}}>
                                    🍴 <strong>Un restaurant</strong> propose :
                                    <br/>- 3 entrées : Salade verte (S), Soupe à l'oignon (O), Terrine de légumes (T)
                                    <br/>- 2 plats : Poulet rôti (P), Saumon grillé (G)
                                    <br/>- 2 desserts : Tarte aux pommes (A), Mousse au chocolat (M)
                                </p>

                                <p style={{fontSize: '16px', color: '#2c3e50'}}>
                                    🤔 <strong>Un client</strong> souhaite composer un menu complet (entrée + plat +
                                    dessert) et veut connaître toutes les combinaisons possibles.
                                </p>
                            </div>
                            <div className="problem-box2 print-optimized" style={{marginTop: '10px'}}>
                                <div className="d-flex align-items-center mb-2">
                                </div>
                                <p className="print-text">
                                    🎯 L'objectif est de dénombrer toutes les combinaisons possibles et d'analyser
                                    certaines probabilités.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex-shrink-0"
                            style={{
                                maxWidth: '210px',
                                cursor: 'pointer',
                            }}
                        >
                            <img
                                src={menuImage}
                                alt="Options de menu"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(menuImage, 'Options de menu')}
                            />
                        </div>
                    </div>

                    {/* Partie A - Arbre des possibilités */}
                    <section className="tp-section compact print-section">
                        <h3 className="compact-title">
                            <FaListOl/> A. Arbre complet des possibilités
                        </h3>

                        <div className="instruction-box1 compact">
                            <h4 className="instruction-title">1. Construction de l'arbre :</h4>
                            <div className="tree-structure">
                                {showCorrections.tree1 ? (
                                    <pre>
                                        {`Entrée                         Plat                     Dessert                     Menu complet
S
├── P
│   ├── A   → S-P-A
│   └── M   → S-P-M
└── G
    ├── A   → S-G-A
    └── M   → S-G-M

O
├── P
│   ├── A   → O-P-A
│   └── M   → O-P-M
└── G
    ├── A   → O-G-A
    └── M   → O-G-M

T
├── P
│   ├── A   → T-P-A
│   └── M   → T-P-M
└── G
    ├── A   → T-G-A
    └── M   → T-G-M`}
                                    </pre>
                                ) : (
                                    <pre>
                                        {`Entrée                         Plat                     Dessert                     Menu complet





















`}
                                    </pre>
                                )}
                            </div>
                            <button
                                className="correction-btnoptic compact no-print"
                                onClick={() => toggleCorrection('tree1')}
                                style={{margin: '5px 0'}}
                            >
                                <FaCheck/> {showCorrections.tree1 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>

                            <Question
                                id="question1"
                                text="2. Combien y a-t-il de menus possibles au total ? Justifiez par un calcul."
                                answer={answers.question1}
                                showCorrection={showCorrections.question1}
                                onChange={handleInputChange}
                                onToggleCorrection={toggleCorrection}
                                textarea
                                className="compact-question mb-0"
                            />
                        </div>
                    </section>
                </div>

                {/* Page 2 - Partie B - Probabilités */}
                <div className="print-page" id="page2-start">
                    <section className="tp-section compact print-section">
                        <h3 className="compact-title">
                            <FaListOl/> B. Analyse des probabilités
                        </h3>

                        <Question
                            id="question2"
                            text="3. Quelle est la probabilité que tous les éléments du menu commencent par la même lettre ?"
                            answer={answers.question2}
                            showCorrection={showCorrections.question2}
                            onChange={handleInputChange}
                            onToggleCorrection={toggleCorrection}
                            textarea
                            className="compact-question"
                        />

                        <div className="instruction-box1 compact">
                            <h4 className="instruction-title">4. Arbre modifié (plats en premier) :</h4>
                            <div className="tree-structure">
                                {showCorrections.tree2 ? (
                                    <pre>
                                        {`Plat                         Entrée                         Dessert                         Menu complet
P
├── S
│   ├── A   → P-S-A
│   └── M   → P-S-M
├── O
│   ├── A   → P-O-A
│   └── M   → P-O-M
└── T
    ├── A   → P-T-A
    └── M   → P-T-M

G
├── S
│   ├── A   → G-S-A
│   └── M   → G-S-M
├── O
│   ├── A   → G-O-A
│   └── M   → G-O-M
└── T
    ├── A   → G-T-A
    └── M   → G-T-M`}
                                    </pre>
                                ) : (
                                    <pre>
                                        {`Plat                         Entrée                         Dessert                         Menu complet



























`}
                                    </pre>
                                )}
                            </div>
                            <button
                                className="correction-btnoptic compact no-print"
                                onClick={() => toggleCorrection('tree2')}
                                style={{margin: '5px 0'}}
                            >
                                <FaCheck/> {showCorrections.tree2 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>

                            <Question
                                id="question3"
                                text="5. Cette modification change-t-elle le nombre de possibilités ? (Oui/Non)"
                                answer={answers.question3}
                                showCorrection={showCorrections.question3}
                                onChange={handleInputChange}
                                onToggleCorrection={toggleCorrection}
                                className="compact-question"
                            />

                            <Question
                                id="question4"
                                text="6. Expliquez pourquoi :"
                                answer={answers.question4}
                                showCorrection={showCorrections.question4}
                                onChange={handleInputChange}
                                onToggleCorrection={toggleCorrection}
                                textarea
                                className="compact-question"
                            />
                        </div>

                        <div className="math-card">
                            {showAnswer ? (
                                <div className="math-formula1">
                                    La représentation par un arbre permet le décompte des événements possibles.
                                </div>
                            ) : (
                                <div className="math-formula1">
                               <span
                                   className="numerator1">...................................................................................................................................................................</span>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => setShowAnswer(!showAnswer)}
                            className="correction-btnoptic compact no-print mt-3"
                        >
                            {showAnswer ? 'Masquer la réponse' : 'Afficher la réponse'}
                        </button>
                    </section>
                    <footer className="tp-footer compact">
                        <p className="compact-text">Mathématiques 2nde - Dénombrement</p>
                        <p className="compact-text">Combinaisons et arbres de probabilités</p>
                    </footer>
                </div>

                {/* Page 3 - Bilan et exercices */}


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

const Question = ({
                      id,
                      text,
                      answer,
                      showCorrection,
                      onChange,
                      onToggleCorrection,
                      textarea = false,
                      className = '',
                  }) => (
    <div className={`question compact ${className}`} style={{marginBottom: '12px'}}>
        {text && <p className="compact-text" style={{marginBottom: '5px'}}>{text}</p>}
        <div className="answer-container compact" style={{margin: '5px 0'}}>
            {textarea ? (
                <textarea
                    className={`answer-input compact ${showCorrection ? 'correction-active' : ''}`}
                    rows={1}
                    value={answer}
                    onChange={(e) => onChange(id, e.target.value)}
                    style={{marginBottom: '5px'}}
                />
            ) : (
                <input
                    type="text"
                    className={`answer-input compact ${showCorrection ? 'correction-active' : ''}`}
                    value={answer}
                    onChange={(e) => onChange(id, e.target.value)}
                    style={{marginBottom: '5px'}}
                />
            )}
        </div>
        <button
            className="correction-btnoptic compact no-print"
            onClick={() => onToggleCorrection(id)}
            style={{margin: '5px 0'}}
        >
            <FaCheck/> {showCorrection ? 'Masquer la correction' : 'Afficher la correction'}
        </button>
    </div>
);

export default ActDénombrerDonnéesArbre;
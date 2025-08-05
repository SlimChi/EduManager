import React, {useRef, useState} from 'react';
import {
    FaPrint,
    FaCheck,
    FaCoins,
    FaChartLine,
    FaHome,
    FaDice,
    FaGamepad,
} from 'react-icons/fa';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import {IoMdSchool} from 'react-icons/io';
import '../../../../../styles/act1proba.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../../components/navigation/BackButton';
import ModalImage from '../../../../../utils/ModalImage';
import PrintManager from '../../../../../utils/PrintManager';
import Automatismes from '../../../../../config/Automatismes';
import {color} from 'framer-motion';
import CoinFlip from './CoinFlip';
import {FcSalesPerformance} from 'react-icons/fc';
import pieceprobact1 from '../../../../../assets/probaAct1.png';
import AutoResizeTextarea from '../../../../../config/AutoResizeTextarea';
import {FaD} from 'react-icons/fa6';
import AutoEvaluationGrid from "../../../../../config/AutoEvaluationGrid";

const Act1Proba = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [showConclusion, setShowConclusion] = useState(false);
    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        question1a: '',
        question1b: '',
        question2a: '',
        question2b: '',
        question2c: '',
        question2d: '',
        question3a: '',
        question3b: '',
        question3c: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        question1a: false,
        question1b: false,
        question2a: false,
        question2b: false,
        question2c: false,
        question2d: false,
        question3a: false,
        question3b: false,
        question3c: false,
    });

    // État pour le modal
    const [modalState, setModalState] = useState({
        show: false,
        imageUrl: '',
        altText: '',
    });
    const [showTableCorrection, setShowTableCorrection] = useState(false);
    // Réponses attendues
    const correctAnswers = {
        question1a:
            "Le lancer d'une pièce est une expérience aléatoire car on ne peut pas prévoir avec certitude le résultat (PILE ou FACE) avant de lancer la pièce.",
        question1b: 'Les deux issues possibles sont PILE et FACE.',
        question2a:
            'En appuyant sur F9, on observe que le nombre de PILE, le nombre de FACE et la fréquence de PILE changent à chaque simulation.',
        question2b:
            'Les fréquences relevées sont: 0,485 | 0,575 | 0,465 | 0,47 | 0,5 | 0,52 | 0,575 | 0,56',
        question2c:
            "Non, la fréquence obtenue n'est pas toujours la même, il y a fluctuation.",
        question2d: "L'étendue des fréquences est 0,11 (0,575 - 0,465).",
        question3a: 'La fréquence de PILE pour la 3ème pièce est 0,535.',
        question3b:
            'Les droites y=0,43 et y=0,57 doivent être tracées sur le graphique.',
        question3c:
            'Oui, le lot contient des pièces mal équilibrées. La 23ème pièce a une fréquence de PILE inférieure à 0,43.',
    };

    // Gestionnaires d'événements
    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));

        if (!answers[field] && !showCorrections[field]) {
            setAnswers((prev) => ({...prev, [field]: correctAnswers[field]}));
        }
    };

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState((prev) => ({...prev, show: false}));
    };

    const contentRef = useRef();
    if (className === 'Seconde-pythagore') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>
            <Automatismes/>
            <CoinFlip/>
            <div className="tp-container" id="proba-content" ref={contentRef}>
                {/* Page 1 */}
                <PrintManager
                    contentRef={contentRef}
                    activityName="Proba_Pieces"
                    pageCount={2}
                    quality="hd"
                />
                <div className="print-page">
                    <header className="tp-header">
                        <FaDice className="header-icon"/>
                        <h1>
                            🎲 Fluctuation des fréquences 📊
                            <br/>
                            <span className="h1-sub">Classe 2nde Mathématiques</span>
                        </h1>
                    </header>
                    <div className="math-chapter-box green">
                        <FaCoins className="math-chapter-icon"/>

                        <h2 className="math-chapter-title-test">
                            Simulation des Lancers : Pièces Équilibrées ?{' '}
                        </h2>

                        <div className="math-chapter-decoration">
                            <svg width="100" height="80" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 2L2 7L12 12L22 7L12 2Z M12 12L22 7 M12 12L2 7 M12 12V22 M22 7V17L12 22L2 17V7"
                                    stroke="#ff9500"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="#ff5e00"
                                    strokeWidth="1.5"
                                />
                                <path d="M12 8V16 M8 12H16" stroke="#ff9500" strokeWidth="2"/>
                            </svg>
                        </div>
                    </div>
                    <div className="activity-header">
                        <span className="activity-badge">ACTIVITÉ 1</span>
                        <div className="activity-title">
              <span className="course-title">
                <FaCoins/> <span className="emoji"></span> Lancers de pièces
              </span>
                        </div>
                    </div>
                    <div
                        className="d-flex align-items-start flex-wrap"
                        style={{gap: '20px'}}
                    >
                        {/* Partie gauche : texte */}
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <p>
                                    <strong>Manu</strong> dispose d'un lot de <strong>40</strong>{' '}
                                    pièces. Il pense que ce lot contient des pièces mal
                                    équilibrées. Il fait l'expérience suivante : chaque pièce est
                                    lancée <strong>200</strong> fois et il observe la fréquence de
                                    sortie du côté <strong> PILE</strong> de la pièce.
                                </p>
                            </div>
                            <div className="problem-box" style={{marginTop: '10px'}}>
                                <h3>Objectif</h3>
                                <p>
                                    L'objectif est de déterminer si le lot de pièces contient des
                                    pièces mal équilibrées.
                                </p>
                            </div>
                        </div>

                        {/* Partie droite : image */}
                        <div
                            className="flex-shrink-0" style={{
                            maxWidth: '270px', cursor: 'pointer',
                        }}
                        >
                            <img
                                src={pieceprobact1} alt="Lancer de Dés"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(pieceprobact1, 'Lancer de Dés')}
                            />
                        </div>
                    </div>
                    {/* Partie 1 */}
                    <section className="tp-section compact">
                        <h3 className="compact-title">
                            <FaCoins/> Expérience aléatoire
                        </h3>
                        <p></p>
                        <div className="d-flex align-items-start gap-3">
                            <div className="flex-grow-1">
                                <div className="question compact">
                                    <p className="compact-text">
                                        <div
                                            className="question-number2"
                                            style={{marginLeft: '-30px', marginTop: '-30px'}}
                                        >
                                            1a
                                        </div>
                                        Expliquez pourquoi le lancer d’une pièce est une expérience
                                        aléatoire.
                                    </p>

                                    <AutoResizeTextarea
                                        id={`textarea-question1a`}
                                        className={`answer-input ${showCorrections.question1a ? 'correction-active' : ''}`}
                                        value={answers.question1a}
                                        onChange={(e) =>
                                            handleInputChange('question1a', e.target.value)
                                        }
                                        minRows={3}
                                        maxRows={13}
                                    />
                                    {!showCorrections.question1a && (
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question1a')}
                                        >
                                            <FaCheck/> Correction
                                        </button>
                                    )}
                                </div>
                                <Question
                                    id="question1b"
                                    text={
                                        <>
                                            <div
                                                className="question-number2"
                                                style={{marginLeft: '-30px', marginTop: '-30px'}}
                                            >
                                                1b
                                            </div>
                                            Donnez les deux issues (ou résultats) possibles.
                                        </>
                                    }
                                    answer={answers.question1b}
                                    showCorrection={showCorrections.question1b}
                                    onChange={handleInputChange}
                                    onToggleCorrection={toggleCorrection}
                                />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Page 2 */}
                <div className="print-page" id="page2-start">
                    <section className="tp-section compact">
                        {/* Partie 2 */}
                        <h3 className="compact-title">
                            <FaChartLine/> Simulation des lancers
                        </h3>
                        <div className="d-flex align-items-start gap-3">
                            <div className="flex-grow-1">
                                <p>
                                    Pour ne pas avoir à lancer 200 fois chaque pièce, on simule
                                    ces lancers sur un tableur. Ouvrez le fichier «{' '}
                                    <strong>C03_40_lancers.xlsx</strong> ». La liste des{' '}
                                    <strong>200 PILE</strong> ou <strong>FACE</strong> obtenus en
                                    colonne C s'appelle un{' '}
                                    <strong style={{color: 'green', fontStyle: 'italic'}}>
                                        échantillon
                                    </strong>
                                    .
                                </p>

                                <Question
                                    id="question2a"
                                    text={
                                        <>
                                            <div
                                                className="question-number2"
                                                style={{marginLeft: '-30px', marginTop: '-30px'}}
                                            >
                                                2a
                                            </div>
                                            Appuyez sur la touche F9. Indiquez ce que vous observez.
                                        </>
                                    }
                                    answer={answers.question2a}
                                    showCorrection={showCorrections.question2a}
                                    onChange={handleInputChange}
                                    onToggleCorrection={toggleCorrection}
                                    textarea
                                />

                                <div className="sample-table-container">
                                    <table className="sample-table">
                                        <thead>
                                        <tr>
                                            <th style={{width: '110px'}}>Échantillon</th>
                                            <th>A</th>
                                            <th>B</th>
                                            <th>C</th>
                                            <th>D</th>
                                            <th>E</th>
                                            <th>F</th>
                                            <th>G</th>
                                            <th>H</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td style={{width: '110px', fontWeight: 'bold'}}>
                                                Fréquence PILE
                                            </td>
                                            <td
                                                style={{
                                                    color: 'green',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.2rem',
                                                }}
                                            >
                                                {showTableCorrection ? '0,485' : ''}
                                            </td>
                                            <td
                                                style={{
                                                    color: 'green',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.2rem',
                                                }}
                                            >
                                                {showTableCorrection ? '0,575' : ''}
                                            </td>
                                            <td
                                                style={{
                                                    color: 'green',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.2rem',
                                                }}
                                            >
                                                {showTableCorrection ? '0,465' : ''}
                                            </td>
                                            <td
                                                style={{
                                                    color: 'green',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.2rem',
                                                }}
                                            >
                                                {showTableCorrection ? '0,47' : ''}
                                            </td>
                                            <td
                                                style={{
                                                    color: 'green',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.2rem',
                                                }}
                                            >
                                                {showTableCorrection ? '0,5' : ''}
                                            </td>
                                            <td
                                                style={{
                                                    color: 'green',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.2rem',
                                                }}
                                            >
                                                {showTableCorrection ? '0,52' : ''}
                                            </td>
                                            <td
                                                style={{
                                                    color: 'green',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.2rem',
                                                }}
                                            >
                                                {showTableCorrection ? '0,575' : ''}
                                            </td>
                                            <td
                                                style={{
                                                    color: 'green',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.2rem',
                                                }}
                                            >
                                                {showTableCorrection ? '0,56' : ''}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="question compact">
                                    <p className="compact-text">
                                        <div
                                            className="question-number2"
                                            style={{marginLeft: '-30px', marginTop: '-30px'}}
                                        >
                                            2b
                                        </div>
                                        b. Relevez la fréquence obtenue pour PILE dans la cellule
                                        G12 quand vous simulez 8 échantillons avec la touche F9.
                                    </p>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => setShowTableCorrection(!showTableCorrection)}
                                    >
                                        <FaCheck/>{' '}
                                        {showTableCorrection
                                            ? 'Masquer les valeurs'
                                            : 'Afficher les valeurs'}
                                    </button>
                                </div>

                                <Question
                                    id="question2c"
                                    text={
                                        <>
                                            <div
                                                className="question-number2"
                                                style={{marginLeft: '-30px', marginTop: '-30px'}}
                                            >
                                                2c
                                            </div>
                                            La fréquence obtenue est-elle toujours la même ?
                                        </>
                                    }
                                    answer={answers.question2c}
                                    showCorrection={showCorrections.question2c}
                                    onChange={handleInputChange}
                                    onToggleCorrection={toggleCorrection}
                                />

                                <div className="info-bubble definition">
                                    <div className="info-bubble-title">
                                        <BsFillQuestionCircleFill/> Définition
                                    </div>
                                    <p>
                                        On dit qu'il y a fluctuation de la fréquence de PILE lorsque
                                        les valeurs changent entre les échantillons.
                                    </p>
                                </div>

                                <Question
                                    id="question2d"
                                    text={
                                        <>
                                            <div
                                                className="question-number2"
                                                style={{marginLeft: '-30px', marginTop: '-30px'}}
                                            >
                                                2d
                                            </div>
                                            Calculez l'étendue des fréquences, c'est-à-dire la
                                            différence entre la plus grande et la plus petite
                                            fréquences obtenues.
                                        </>
                                    }
                                    answer={answers.question2d}
                                    showCorrection={showCorrections.question2d}
                                    onChange={handleInputChange}
                                    onToggleCorrection={toggleCorrection}
                                />
                            </div>
                        </div>
                    </section>
                    {/* Partie 3 */}
                    <div className="print-page" id="page3-start">
                        <section className="tp-section compact">
                            <h3 className="compact-title">
                                <FaChartLine/> Analyse des résultats
                            </h3>
                            <div className="d-flex align-items-start gap-3">
                                <div className="flex-grow-1">
                                    <p>
                                        On lance <strong>200</strong> fois chacune des{' '}
                                        <strong>40</strong> pièces. Le graphique donne les
                                        fréquences de <strong> PILE</strong> observées. Une pièce
                                        est considérée comme bien équilibrée si la fréquence de
                                        sortie du côté <strong>PILE </strong>
                                        pour <strong>200 </strong> lancers est comprise entre{' '}
                                        <strong>0,43</strong> et <strong>0,57</strong> (soit entre
                                        <strong>43</strong> et <strong>57% </strong>).
                                    </p>

                                    <div className="graph-placeholder">
                                        <div className="graph-container">
                                            <div className="graph-label">
                                                Graphique des fréquences de PILE pour 40 pièces
                                            </div>
                                            {/* Ici serait placé le graphique réel */}
                                            <div
                                                style={{
                                                    height: '80%',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'flex-end',
                                                    paddingTop: '20px',
                                                }}
                                            >
                                                {/* Barres du graphique */}
                                                {[...Array(40)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        style={{
                                                            width: '1.5%',
                                                            height: `${Math.random() * 80 + 10}%`,
                                                            backgroundColor: i === 22 ? '#e74c3c' : '#3498db',
                                                            margin: '0 0.5%',
                                                            position: 'relative',
                                                        }}
                                                    >
                            <span
                                style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    width: '100%',
                                    textAlign: 'center',
                                    fontSize: '10px',
                                }}
                            >
                              {i === 2 && '0,535'}
                            </span>
                                                    </div>
                                                ))}
                                                {/* Lignes de référence */}
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        left: 0,
                                                        right: 0,
                                                        height: '2px',
                                                        backgroundColor: '#2ecc71',
                                                        top: '30%', // Correspond à y=0,43
                                                        zIndex: 2,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    <Question
                                        id="question3a"
                                        text={
                                            <>
                                                <div
                                                    className="question-number2"
                                                    style={{marginLeft: '-30px', marginTop: '-30px'}}
                                                >
                                                    3a
                                                </div>
                                                Donnez la fréquence de PILE pour la 3ème pièce lancée.
                                            </>
                                        }
                                        answer={answers.question3a}
                                        showCorrection={showCorrections.question3a}
                                        onChange={handleInputChange}
                                        onToggleCorrection={toggleCorrection}
                                    />

                                    <Question
                                        id="question3b"
                                        text={
                                            <>
                                                <div
                                                    className="question-number2"
                                                    style={{marginLeft: '-30px', marginTop: '-30px'}}
                                                >
                                                    3b
                                                </div>
                                                Tracez les droites d'équations y = 0,43 et y = 0,57 sur
                                                le graphique.
                                            </>
                                        }
                                        answer={answers.question3b}
                                        showCorrection={showCorrections.question3b}
                                        onChange={handleInputChange}
                                        onToggleCorrection={toggleCorrection}
                                        textarea
                                    />

                                    <Question
                                        id="question3c"
                                        text={
                                            <>
                                                <div
                                                    className="question-number2"
                                                    style={{marginLeft: '-30px', marginTop: '-30px'}}
                                                >
                                                    3c
                                                </div>
                                                Répondez à la problématique : Le lot de pièces
                                                contient-il des pièces mal équilibrées ? Justifiez.
                                            </>
                                        }
                                        answer={answers.question3c}
                                        showCorrection={showCorrections.question3c}
                                        onChange={handleInputChange}
                                        onToggleCorrection={toggleCorrection}
                                        textarea
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* Conclusion */}
                    <div className="print-page" id="conclusion">
                        <section className="tp-section compact">
                            <div className="info-bubble property">
                                <div className="info-bubble-title">
                                    <FaChartLine/> Propriété
                                </div>
                                <p>
                                    Pour une pièce équilibrée, la fréquence de PILE sur un grand
                                    nombre de lancers (200 ici) doit être proche de 0,5. Les
                                    valeurs en dehors de l'intervalle [0,43; 0,57] suggèrent que
                                    la pièce pourrait être déséquilibrée.
                                </p>
                            </div>

                            <h3 className="compact-title">
                                <BsFillQuestionCircleFill/> Je retiens
                            </h3>

                            <div className="conclusion-container">
                                {showConclusion ? (
                                    <div className="info-bubble warning">
                                        <div className="info-bubble-title">
                                            <FaCoins/> Conclusion 💬
                                        </div>
                                        <p style={{fontWeight: 'bold'}}>
                                            Pour détecter des pièces potentiellement déséquilibrées,
                                            on compare les fréquences observées à un intervalle de
                                            référence.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="empty-conclusion-space"></div>
                                )}
                            </div>
                            <button
                                className="toggle-conclusion-btn"
                                onClick={() => setShowConclusion(!showConclusion)}
                            >
                                <FaCheck/>{' '}
                                {showConclusion
                                    ? 'Masquer la conclusion'
                                    : 'Afficher la conclusion'}
                            </button>
                        </section>
                        <AutoEvaluationGrid/>
                    </div>
                    <footer className="tp-footer compact">
                        <p className="compact-text">Mathématiques 2nde - Probabilités</p>
                        <p className="compact-text">TUTO: Fluctuation d'échantillonnage</p>
                    </footer>
                </div>

                {/* Modal pour l'image agrandie */}
                {modalState.show && (
                    <ModalImage
                        imageUrl={modalState.imageUrl}
                        altText={modalState.altText}
                        onClose={closeModal}
                    />
                )}
            </div>
        </>
    );
};

// Composant pour une question
const Question = ({
                      id,
                      text,
                      answer,
                      showCorrection,
                      onChange,
                      onToggleCorrection,
                      textarea = false,
                  }) => (
    <div className="question compact">
        {text && <p className="compact-text">{text}</p>}
        <div className="answer-container compact">
            {textarea ? (
                <textarea
                    className={`answer-input compact ${showCorrection ? 'correction-active' : ''}`}
                    rows={text ? '2' : '3'}
                    value={answer}
                    onChange={(e) => onChange(id, e.target.value)}
                />
            ) : (
                <input
                    type="text"
                    className={`answer-input compact ${showCorrection ? 'correction-active' : ''}`}
                    value={answer}
                    onChange={(e) => onChange(id, e.target.value)}
                />
            )}
        </div>
        <button
            className="correction-btnoptic compact"
            onClick={() => onToggleCorrection(id)}
        >
            <FaCheck/> Correction
        </button>
    </div>
);

export default Act1Proba;

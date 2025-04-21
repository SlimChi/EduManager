import React, {useRef, useState} from 'react';
import { FaChartBar, FaCalculator, FaPrint, FaCheck } from 'react-icons/fa';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { IoMdSchool } from 'react-icons/io';
import '../../../../../styles/activites.css';
import {useLocation, useParams} from "react-router-dom";
import {MdIndeterminateCheckBox} from "react-icons/md";
import BackButton from "../../../../../components/navigation/BackButton";
import Automatismes from "../../../../../config/Automatismes";
import ModalImage from "../../../../../utils/ModalImage";
import stat1act3 from "../../../../../assets/stat1act1.png";
import PrintManager from "../../../../../utils/PrintManager";

const StatUneVariableSeconde = () => {
    const { classId } = useParams();
    const location = useLocation();
    const className = location.state?.className || '';


    const [answers, setAnswers] = useState({
        question1a: '',
        question1b: '',
        question1c: '',
        question2: '',
        conclusion: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        question1a: false,
        question1b: false,
        question1c: false,
        question2: false,
        conclusion: false
    });

    // Réponses attendues
    const correctAnswers = {
        question1a: "50 familles ont été interrogées.",
        question1b: "La variable statistique étudiée est le nombre d'écrans par famille.",
        question1c: "Les valeurs prises par la variable vont de 3 à 8 écrans.",
        question2: "Les valeurs sont situées entre 30 minutes et 3 heures 30 minutes.",
        conclusion: `La majorité des familles (60%) ont 4-6 écrans, et les élèves passent en moyenne 2h10/jour sur écrans. 
Les statistiques permettent de mesurer et comparer ces comportements.
Les valeurs d’une variable continue sont regroupées en classes notées par un intervalle.
`    };
    const [modalState, setModalState] = useState({
        show: false,
        imageUrl: '',
        altText: ''
    });
    const openModal = (imageUrl, altText) => {
        setModalState({ show: true, imageUrl, altText });
    };

    const closeModal = () => {
        setModalState(prev => ({ ...prev, show: false }));
    };
    const handleAnswerChange = (field, value) => {
        setAnswers(prev => ({
            ...prev,
            [field]: value
        }));
    };
    const contentRef = useRef();
    const toggleCorrection = (field) => {
        setShowCorrections(prev => ({
            ...prev,
            [field]: !prev[field]
        }));

        if (!answers[field] && !showCorrections[field]) {
            setAnswers(prev => ({
                ...prev,
                [field]: correctAnswers[field]
            }));
        }
    };

    if (className == 'Seconde') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }
    return (
        <>
            <BackButton />
        <div className="tp-container" id="stat-content" ref={contentRef}>
            {/* Page 1 */}
            <div className="print-page">
                <header className="tp-header print-optimization">
                    <IoMdSchool className="header-icon" />
                    <h1>Statistique à une variable - Classe Seconde Mathématiques</h1>
                    <PrintManager
                        contentRef={contentRef}
                        activityName="Statistiques_Age_Eleves"
                        pageCount={3}
                        quality="hd"
                    />
                </header>
                <Automatismes />
                <div className="tp-intro">
                        <div className="math-chapter-box blue">
                            <FaChartBar className="math-chapter-icon" />
                            <h2 className="math-chapter-title">
                                Organiser des données statistiques </h2>
                            <div className="math-chapter-decoration">
                                <svg width="100" height="80" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z M12 12L22 7 M12 12L2 7 M12 12V22 M22 7V17L12 22L2 17V7"
                                          stroke="#ff9500" strokeWidth="2"/>
                                    <circle cx="12" cy="12" r="10" stroke="#ff5e00" strokeWidth="1.5"/>
                                    <path d="M12 8V16 M8 12H16" stroke="#ff9500" strokeWidth="2"/>
                                </svg>
                            </div>
                        </div>
                </div>
                <div className="d-flex align-items-start flex-wrap" style={{ gap: '20px' }}>

                    <div style={{ flex: 1, minWidth: '300px' }}>
                    <p className="d-flex align-items-center mb-4">
                        <span className="badge bg-primary text-white rounded-pill px-4 py-2 shadow-lg me-3"
                              style={{ fontSize: '1.0rem', letterSpacing: '1px' }}>
                            ACTIVITÉ 1
                        </span>
                                            <span className="course-title">
                            « Quels sont les temps d'écran pour les élèves du lycée ? »
                        </span>
                    </p>
                    <div className="renovation-contexte">
                        <p>
                            Le proviseur du lycée souhaite évaluer l'impact des écrans sur ses élèves. Pour ce faire,
                            il mène une enquête auprès des familles afin de collecter des données précises.
                        </p>

                        <div className="problem-box">
                            <h3>Objectif</h3>
                            <p>
                                Le but de cette activité est de découvrir comment on peut utiliser les mathématiques
                                pour analyser les habitudes numériques des élèves et en tirer des conclusions.
                            </p>
                        </div>
                    </div>
                  </div>
                    <div
                        className="flex-shrink-0"
                        style={{ maxWidth: '350px', cursor: 'pointer', marginTop: '90px',}} >
                        <img src={stat1act3}
                             alt="Lancer de Dés"
                             className="img-fluid rounded shadow-sm compact-img"
                             onClick={() => openModal(stat1act3, "Lancer de Dés")}
                        />
                    </div>
               </div>


                <section className="tp-section print-optimization">
                    <h3><BsFillQuestionCircleFill /> S'approprier</h3>
                    <p>
                        Le proviseur demande à chaque famille le nombre d'écrans (téléviseurs, smartphones, ordinateurs, tablettes) qu'elle possède et obtient les résultats suivants :
                    </p>

                    <div className="data-grid">
                        {[5,4,5,6,4,5,7,6,5,6,8,5,6,4,4,5,7,7,4,7,5,4,5,4,8,3,4,5,6,6,5,8,4,5,6,4,5,5,4,6,4,5,4,7,7,6,5,4,5].map((val, i) => (
                            <span key={i} className="data-cell">{val}</span>
                        ))}
                    </div>

                    <div className="question">
                        <p><strong>a)</strong> Combien de familles ont-elles été interrogées ?</p>
                        <div className="answer-container">
                            <input
                                type="text"
                                className={`answer-input ${showCorrections.question1a ? 'correction-active' : ''}`}
                                value={answers.question1a}
                                onChange={(e) => handleAnswerChange('question1a', e.target.value)}
                            />

                        </div>
                        <button
                            className="correction-btn"
                            onClick={() => toggleCorrection('question1a')}
                        >
                            <FaCheck /> Correction
                        </button>
                    </div>

                    <div className="question">
                        <p><strong>b)</strong> Quelle est la variable statistique étudiée ?</p>
                        <div className="answer-container">
                            <input
                                type="text"
                                className={`answer-input ${showCorrections.question1b ? 'correction-active' : ''}`}
                                value={answers.question1b}
                                onChange={(e) => handleAnswerChange('question1b', e.target.value)}
                            />

                        </div>
                        <button
                            className="correction-btn"
                            onClick={() => toggleCorrection('question1b')}
                        >
                            <FaCheck /> Correction
                        </button>
                    </div>

                    <div className="question">
                        <p><strong>c)</strong> Quelles sont les valeurs prises par la variable ?</p>
                        <div className="answer-container">
                            <input
                                type="text"
                                className={`answer-input ${showCorrections.question1c ? 'correction-active' : ''}`}
                                value={answers.question1c}
                                onChange={(e) => handleAnswerChange('question1c', e.target.value)}
                            />

                        </div>
                        <button
                            className="correction-btn"
                            onClick={() => toggleCorrection('question1c')}
                        >
                            <FaCheck /> Correction
                        </button>
                    </div>
                </section>

                <section className="tp-section print-optimization">
                    <h3><FaCalculator /> Réaliser</h3>
                    <p>
                        Associer à chaque nombre d'écrans le nombre de familles (c'est-à-dire l'effectif) correspondant dans ce tableau. Calculer les fréquences correspondantes.
                    </p>

                    <table className="measurement-table printable-table print-optimization">
                        <thead>
                        <tr>
                            <th>Nombre d'écrans</th>
                            <th>Nombre de familles</th>
                            <th>Nombre de familles (en %)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>3</td>
                            <td>.........</td>
                            <td>.........</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>.........</td>
                            <td>.........</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>.........</td>
                            <td>.........</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>.........</td>
                            <td>.........</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>.........</td>
                            <td>.........</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>.........</td>
                            <td>.........</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>50</strong></td>
                            <td><strong>100</strong></td>
                        </tr>
                        </tbody>
                    </table>
                </section>
            </div>

            {/* Page 2 */}
            <div id="page2-start" className="print-page">
                <section className="tp-section print-optimization">
                    <h3><BsFillQuestionCircleFill /> S'approprier</h3>
                    <p>
                        Le proviseur demande ensuite à chaque élève d'estimer le nombre d'heures par jour qu'il passe devant un écran.
                    </p>

                    <div className=" time-data">
                        {['30 min', '1 h 10', '2 h 30', '1 h 20', '1 h 40', '45 min', '3 h 10', '2 h 20', '1 h 15', '3 h 30', '3 h 15',
                            '3 h 20', '50 min', '1 h 25', '1 h 30', '2 h 15', '2 h 25', '2 h 05', '3 h 10', '55 min', '1 h 55', '2 h 10',
                            '1 h 40', '2 h 50', '2 h 10', '1 h', '3 h', '35 min', '55 min', '2 h 45', '2 h 25', '2 h', '3 h 10',
                            '45 min', '2 h 15', '3 h', '1 h 50', '2 h 05', '55 min', '2 h 45', '1 h 35', '2 h 10', '3 h 05', '1 h',
                            '1 h 35', '2 h 10', '1 h 55', '50 min', '1 h 05', '2 h'].map((val, i) => (
                            <span key={i} className="data-cell">{val}</span>
                        ))}
                    </div>

                    <div className="question">
                        <p>Dans quel intervalle sont situées les valeurs de la variable ?</p>
                        <div className="answer-container">
                            <input
                                type="text"
                                className={`answer-input ${showCorrections.question2 ? 'correction-active' : ''}`}
                                value={answers.question2}
                                onChange={(e) => handleAnswerChange('question2', e.target.value)}
                            />
                        </div>
                        <button
                            className="correction-btn"
                            onClick={() => toggleCorrection('question2')}
                        >
                            <FaCheck /> Correction
                        </button>
                    </div>
                </section>

                <section className="tp-section print-optimization">
                    <h3><FaCalculator /> Réaliser</h3>
                    <p>
                        Regrouper ces valeurs dans les intervalles de ce tableau.
                    </p>

                    <table className="measurement-table printable-table print-optimization">
                        <thead>
                        <tr>
                            <th>Durée (en heures)</th>
                            <th>[0 ; 1]</th>
                            <th>[1 ; 2]</th>
                            <th>[2 ; 3]</th>
                            <th>[3 ; 4]</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Nombre d'élèves</td>
                            <td>.........</td>
                            <td>.........</td>
                            <td>.........</td>
                            <td>.........</td>
                        </tr>
                        </tbody>
                    </table>
                </section>

                <section className="tp-section conclusion">
                    <h3>📝 Je retiens</h3>
                    <p>
                        À l'aide des résultats obtenus, analysez la distribution du nombre d'écrans par famille et des temps d'écran des élèves.
                    </p>
                    <div className="answer-container">
                        <textarea
                            className={`answer-input ${showCorrections.conclusion ? 'correction-active' : ''}`}
                            rows="4"
                            value={answers.conclusion}
                            onChange={(e) => handleAnswerChange('conclusion', e.target.value)}
                        />
                        <button
                            className="correction-btn"
                            onClick={() => toggleCorrection('conclusion')}
                        >
                            <FaCheck /> Correction
                        </button>
                    </div>
                </section>

                <footer className="tp-footer">
                    <p>© 2025 - Mathématiques : statistiques - Tous droits réservés - S.CHIHATI </p>
                </footer>
            </div>
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

export default StatUneVariableSeconde;
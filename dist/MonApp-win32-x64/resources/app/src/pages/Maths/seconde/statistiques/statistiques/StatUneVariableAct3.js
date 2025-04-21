import React, {useRef, useState} from 'react';
import {FaChartBar, FaPrint, FaCheck, FaCalculator, FaDice} from 'react-icons/fa';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { IoMdSchool } from 'react-icons/io';
import '../../../../../styles/activites.css';
import {useLocation, useParams} from "react-router-dom";
import diagrammeImage from '../../../../../assets/histo.png';
import BackButton from "../../../../../components/navigation/BackButton";
import PrintManager from "../../../../../utils/PrintManager";
import Automatismes from "../../../../../config/Automatismes";
import {FcBullish} from "react-icons/fc";
import stat1act3 from "../../../../../assets/shrek.jpg";
import ModalImage from "../../../../../utils/ModalImage";

const StatUneVariableAct3 = () => {
    const { classId } = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [answers, setAnswers] = useState({
        question2: '',
        question3a: '',
        question3b: '',
        question3c: '',
        question5: '',
        diagramme: ''
    });

    const [effectifs, setEffectifs] = useState({
        classe0_2: 0,
        classe2_4: 0,
        classe4_6: 0,
        classe6_8: 0
    });

    const [showCorrections, setShowCorrections] = useState({
        question2: false,
        question3a: false,
        question3b: false,
        question3c: false,
        question5: false,
        diagramme: false
    });

    // Réponses attendues
    const correctAnswers = {
        question2: "La population étudiée est les élèves interrogés par l'enquêteur.",
        question3a: "Le caractère étudié est la durée d'utilisation du téléphone portable.",
        question3b: "Le caractère est quantitatif car il peut être mesuré numériquement (en heures et minutes).",
        question3c: "Le caractère est continu car la durée peut prendre n'importe quelle valeur dans un intervalle.",
        question5: "Un histogramme est le plus adapté pour cette série statistique car les données sont regroupées en classes.",
        diagramme: "Histogramme complété avec les effectifs calculés pour chaque classe de durée"
    };
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
    const handleInputChange = (field, value) => {
        setAnswers(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleEffectifChange = (classe, value) => {
        setEffectifs(prev => ({
            ...prev,
            [classe]: parseInt(value) || 0
        }));
    };

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
    const contentRef = useRef();

    if (className === 'Secondeastat-une-variableact3') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton />
        <div className="tp-container" id="stat-act3-content" ref={contentRef}>
            {/* Page 1 */}
            <div className="print-page">
                <header className="tp-header">
                    <IoMdSchool className="header-icon" />
                    <h1>Statistique à une variable - Classe 2MRC Mathématiques</h1>
                    <PrintManager
                        contentRef={contentRef}
                        activityName="Statistiques_Age_Eleves"
                        pageCount={3}
                        quality="hd"
                    />
                </header>
                <Automatismes />
                <div className="tp-intro">
                    <div className="math-chapter-box red">
                        <FaChartBar className="math-chapter-icon" />
                        <h2 className="math-chapter-title">
                            Analyser des données continues </h2>
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
                <div style={{ flex: 1}}>
                    <p className="d-flex align-items-center flex-wrap mt-4">
                                  <span
                                      className="badge bg-primary text-white rounded-pill px-4 py-2 shadow-lg me-3"
                                      style={{ fontSize: '1.0rem', letterSpacing: '1px' }}
                                  >
                                    ACTIVITÉ 3
                                  </span>
                        <span className="course-title">
                                    <FaDice /> <span className="emoji"><FcBullish /></span>  « Durée d'utilisation du téléphone portable »
                                  </span>
                    </p>

                    <div className="renovation-contexte">
                        <p>
                            Pour mieux comprendre les habitudes des élèves, un professeur mène une petite enquête.
                            Il demande à chaque élève combien de temps il a utilisé son téléphone portable la veille, en heures et minutes.
                        </p>

                        <div className="problem-box">
                            <h3>Objectif</h3>
                            <p>
                                Comprendre comment recueillir, organiser et représenter des
                                données à partir d'une enquête sur l'utilisation du téléphone.
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
                <section className="tp-section">
                    <h3><BsFillQuestionCircleFill /> S'approprier</h3>
                    <p>1) Les résultats obtenus :</p>
                    <div className="time-data">
                        {['2h30','3h15','1h45','5h00','4h30','2h15','6h00',
                            '3h30','7h00','2h45','5h15','3h00','4h00','2h00',
                            '6h30'].map((val, i) => (
                            <span key={i} className="data-cell">{val}</span>
                        ))}
                    </div>

                    <div className="question">
                        <p>2) Quelle est la population étudiée lors de cette enquête ?</p>
                        <div className="answer-container">
                            <textarea
                                className={`answer-input ${showCorrections.question2 ? 'correction-active' : ''}`}
                                rows="2"
                                value={answers.question2}
                                onChange={(e) => handleInputChange('question2', e.target.value)}
                            />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('question2')}
                            >
                                <FaCheck /> Correction
                            </button>
                        </div>
                    </div>

                    <div className="question">
                        <p>3) a) Quel est le caractère étudié ?</p>
                        <div className="answer-container">
                            <input
                                type="text"
                                className={`answer-input ${showCorrections.question3a ? 'correction-active' : ''}`}
                                value={answers.question3a}
                                onChange={(e) => handleInputChange('question3a', e.target.value)}
                            />

                        </div>
                        <button
                            className="correction-btn"
                            onClick={() => toggleCorrection('question3a')}
                        >
                            <FaCheck /> Correction
                        </button>
                    </div>

                    <div className="question">
                        <p>b) Ce caractère est-il quantitatif ou qualitatif ? Justifiez.</p>
                        <div className="answer-container">
                            <textarea
                                className={`answer-input ${showCorrections.question3b ? 'correction-active' : ''}`}
                                rows="2"
                                value={answers.question3b}
                                onChange={(e) => handleInputChange('question3b', e.target.value)}
                            />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('question3b')}
                            >
                                <FaCheck /> Correction
                            </button>
                        </div>

                    </div>

                    <div className="question">
                        <p>c) Ce caractère est-il discret ou continu ? Justifiez.</p>
                        <div className="answer-container">
                            <textarea
                                className={`answer-input ${showCorrections.question3c ? 'correction-active' : ''}`}
                                rows="2"
                                value={answers.question3c}
                                onChange={(e) => handleInputChange('question3c', e.target.value)}
                            />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('question3c')}
                            >
                                <FaCheck /> Correction
                            </button>
                        </div>
                    </div>
                </section>

                <section className="tp-section">
                    <h3><FaCalculator /> Réaliser</h3>
                    <p>4) Pour que les résultats soient plus lisibles, on peut les regrouper par classes dans un tableau.</p>

                    <table className="measurement-table printable-table">
                        <thead>
                        <tr>
                            <th>Durée (heures)</th>
                            <th>[0 ; 2]</th>
                            <th>[2 ; 4]</th>
                            <th>[4 ; 6]</th>
                            <th>[6 ; 8]</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Effectif</td>
                            <td>
                                <input
                                    type="number"
                                    value={effectifs.classe0_2}
                                    onChange={(e) => handleEffectifChange('classe0_2', e.target.value)}
                                    className="measure-input"
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={effectifs.classe2_4}
                                    onChange={(e) => handleEffectifChange('classe2_4', e.target.value)}
                                    className="measure-input"
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={effectifs.classe4_6}
                                    onChange={(e) => handleEffectifChange('classe4_6', e.target.value)}
                                    className="measure-input"
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={effectifs.classe6_8}
                                    onChange={(e) => handleEffectifChange('classe6_8', e.target.value)}
                                    className="measure-input"
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </section>
            </div>

            {/* Page 2 */}
            <div id="page2-start" className="print-page">
                <section className="tp-section">
                    <h3><FaChartBar /> Communiquer</h3>
                    <div className="question">
                        <p>5) Quel type de diagramme est le plus adapté pour représenter cette série statistique ?</p>
                        <div className="answer-container">
                            <textarea
                                className={`answer-input ${showCorrections.question5 ? 'correction-active' : ''}`}
                                rows="2"
                                value={answers.question5}
                                onChange={(e) => handleInputChange('question5', e.target.value)}
                            />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('question5')}
                            >
                                <FaCheck /> Correction
                            </button>
                        </div>
                    </div>

                    <div className="question">
                        <p>6) À l'aide du tableau, complétez l'histogramme ci-dessous.</p>

                    </div>

                    <div className="diagram-placeholder" style={{
                        height: 'auto',
                        margin: '20px 0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#f9f9f9',
                        padding: '20px',
                        borderRadius: '12px'
                    }}>
                        <img src={diagrammeImage} alt="Histogramme" style={{
                            maxWidth: '100%',
                            height: 'auto',
                            border: '2px solid #ccc',
                            borderRadius: '8px'
                        }} />
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

export default StatUneVariableAct3;
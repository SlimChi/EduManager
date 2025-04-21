import React, {useRef, useState} from 'react';
import {FaChartBar, FaPrint, FaCheck, FaCalculator, FaDice, FaHome} from 'react-icons/fa';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { IoMdSchool } from 'react-icons/io';
import '../../../../../styles/activites.css';
import {useLocation, useParams} from "react-router-dom";
import diagrammeImage from '../../../../../assets/diagbaton.png';
import BackButton from "../../../../../components/navigation/BackButton";
import PrintManager from "../../../../../utils/PrintManager";
import Automatismes from "../../../../../config/Automatismes";
import stat1act2 from "../../../../../assets/stat1act2.png";
import {FcBullish} from "react-icons/fc";
import ModalImage from "../../../../../utils/ModalImage";
const StatUneVariableAct2 = () => {
    const { classId } = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3a: '',
        question3b: '',
        question3c: '',
        question5: '',
        diagramme: ''
    });

    const [effectifs, setEffectifs] = useState({
        age14: 0,
        age15: 0,
        age16: 0,
        age17: 0
    });

    const [showCorrections, setShowCorrections] = useState({
        question1: false,
        question2: false,
        question3a: false,
        question3b: false,
        question3c: false,
        question5: false,
        diagramme: false
    });

    // Réponses attendues
    const correctAnswers = {
        question1: "L'ensemble des individus étudiés s'appelle la population.",
        question2: "La population étudiée est les élèves de la classe.",
        question3a: "Le caractère étudié est l'âge des élèves.",
        question3b: "Le caractère est quantitatif car il peut être mesuré numériquement.",
        question3c: "Le caractère est discret car l'âge prend des valeurs entières isolées.",
        question5: "Un diagramme en bâtons est le plus adapté pour cette série statistique.",

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

    const handleEffectifChange = (age, value) => {
        setEffectifs(prev => ({
            ...prev,
            [age]: parseInt(value) || 0
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

    if (className == 'Secondeastat-une-variableact2') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }
    return (
        <>
            <BackButton />
        <div className="tp-container" id="stat-act2-content" ref={contentRef}>
            {/* Page 1 */}
            <div className="print-page">
                <header className="tp-header">
                    <IoMdSchool className="header-icon" />
                    <h1>Statistique à une variable - Classe 2MRC Mathématiques</h1>
                    <PrintManager
                        contentRef={contentRef}
                        activityName="Statistiques_Age_Eleves"
                        pageCount={2}
                        quality="hd"
                    />
                </header>
                <Automatismes />
                <div className="tp-intro">
                    <div className="math-chapter-box red">
                        <FaChartBar className="math-chapter-icon" />
                        <h2 className="math-chapter-title">
                            Choisir une représentation graphique </h2>
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
                {/* Intro */}
                <div className="d-flex align-items-start flex-wrap" style={{ gap: '20px' }}>
                    {/* Partie gauche : texte */}
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <p className="d-flex align-items-center flex-wrap mt-4">
                                  <span
                                      className="badge bg-primary text-white rounded-pill px-4 py-2 shadow-lg me-3"
                                      style={{ fontSize: '1.0rem', letterSpacing: '1px' }}
                                  >
                                    ACTIVITÉ 2
                                  </span>
                            <span className="course-title">
                                    <FaDice /> <span className="emoji"><FcBullish /></span>  « Âge des élèves »
                                  </span>
                        </p>

                        <div className="renovation-contexte">
                            <p>
                                Une professeure de mathématiques pose une question à tous ses élèves
                                : « <strong>Quel est ton âge ?</strong> » Elle veut ensuite utiliser leurs réponses pour leur
                                montrer comment ranger des données et les présenter clairement.
                            </p>

                            <div className="problem-box">
                                <h3>Objectif</h3>
                                <p>
                                    L’objectif est de comprendre comment lire et organiser des données,
                                    et de choisir une représentation graphique adaptée.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Partie droite : image */}
                    <div
                        className="flex-shrink-0"
                        style={{ maxWidth: '350px', cursor: 'pointer', marginTop: '90px',}} >
                        <img src={stat1act2}
                             alt="Lancer de Dés"
                             className="img-fluid rounded shadow-sm compact-img"
                             onClick={() => openModal(stat1act2, "Lancer de Dés")}
                        />
                    </div>
                </div>
                <section className="tp-section">
                    <h3><BsFillQuestionCircleFill /> S'approprier</h3>
                    <p>1) Les résultats obtenus :</p>
                    <div className="data-grid">
                        {[15,16,15,14,17,16,15,14,16,17,15,16,14,17,16].map((val, i) => (
                            <span key={i} className="data-cell">{val}</span>
                        ))}
                    </div>

                    <div className="question">
                        <p>L'ensemble des individus étudiés au cours d'une enquête statistique s'appelle</p>
                        <div className="answer-container">
                            <input
                                type="text"
                                className={`answer-input ${showCorrections.question1 ? 'correction-active' : ''}`}
                                value={answers.question1}
                                onChange={(e) => handleInputChange('question1', e.target.value)}
                            />

                        </div>
                        <button
                            className="correction-btn"
                            onClick={() => toggleCorrection('question1')}
                        >
                            <FaCheck /> Correction
                        </button>
                    </div>

                    <div className="question">
                        <p>2) Quelle est la population étudiée dans cette enquête statistique ?</p>
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
                        <p>3) a) Quel est le caractère étudié dans cette enquête statistique ?</p>
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
                    <p>4) Pour que les résultats soient plus lisibles, on peut les regrouper dans un tableau d'effectifs.</p>

                    <table className="measurement-table printable-table">
                        <thead>
                        <tr>
                            <th>Âge</th>
                            <th>14</th>
                            <th>15</th>
                            <th>16</th>
                            <th>17</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Effectif</td>
                            <td>
                                <input
                                    type="number"
                                    value={effectifs.age14}
                                    onChange={(e) => handleEffectifChange('age14', e.target.value)}
                                    className="measure-input"
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={effectifs.age15}
                                    onChange={(e) => handleEffectifChange('age15', e.target.value)}
                                    className="measure-input"
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={effectifs.age16}
                                    onChange={(e) => handleEffectifChange('age16', e.target.value)}
                                    className="measure-input"
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={effectifs.age17}
                                    onChange={(e) => handleEffectifChange('age17', e.target.value)}
                                    className="measure-input"
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </section>
            </div>

            {/* Page 2 */}
            <div >
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
                        <p>6) À l'aide du tableau, complétez le diagramme en bâtons ci-dessous.</p>
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
                        <img src={diagrammeImage} alt="Diagramme en bâtons" style={{
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

export default StatUneVariableAct2;
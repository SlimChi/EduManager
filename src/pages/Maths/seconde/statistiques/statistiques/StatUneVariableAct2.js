import React, {useRef, useState} from 'react';
import {FaChartBar, FaPrint, FaCheck, FaCalculator, FaDice, FaHome} from 'react-icons/fa';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import {IoMdSchool} from 'react-icons/io';
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
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3a: '',
        question3b: '',
        question3c: '',
        question5: ''
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
        question5: false
    });

    // Réponses attendues
    const correctAnswers = {
        question1: "L'ensemble des individus étudiés s'appelle la population.",
        question2: "La population étudiée est les élèves de la classe.",
        question3a: "Le caractère étudié est l'âge des élèves.",
        question3b: "Le caractère est quantitatif car il peut être mesuré numériquement.",
        question3c: "Le caractère est discret car l'âge prend des valeurs entières isolées.",
        question5: "Un diagramme en bâtons est le plus adapté pour cette série statistique."
    };

    const [modalState, setModalState] = useState({
        show: false,
        imageUrl: '',
        altText: ''
    });

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState(prev => ({...prev, show: false}));
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

    if (className === 'Secondeastat-une-variableact2') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>
            <div className="tp-container" id="stat-act2-content" ref={contentRef}>
                <PrintManager
                    contentRef={contentRef}
                    activityName="Statistiques_Age_Eleves_Act2"
                    pageCount={2}
                    quality="hd"
                />
                {/*<div className="print-page">*/}
                {/*    <Automatismes/>*/}
                {/*</div>*/}
                {/* PAGE 1 */}
                <div className="print-page">
                    <div className="activity-header mt-0">
                        <span className="activity-badge">ACTIVITÉ 2</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaDice/> <FcBullish/> « Âge des élèves »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <h5 className="mb-3 text-primary fw-bold">
                                    📊 "Analyse de l'âge des élèves"
                                </h5>

                                <p style={{textAlign: 'justify', fontSize: '15px', lineHeight: '1.3'}}>
                                    Une professeure de mathématiques pose une question à tous ses élèves
                                    : « <strong>Quel est ton âge ?</strong> » Elle veut ensuite utiliser leurs réponses
                                    pour leur
                                    montrer comment ranger des données et les présenter clairement.
                                </p>

                                <div className="objectif-box" style={{marginTop: '10px', padding: '10px'}}>
                                    <div className="objectif-title"><strong style={{color: 'orangered'}}>Objectif
                                        :</strong> 🎯 Comprendre comment lire et organiser des données, et choisir une
                                        représentation
                                        graphique adaptée.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PHOTO - DISPOSITION CONSERVÉE */}
                        <div className="flex-shrink-0"
                             style={{maxWidth: '250px', cursor: 'pointer', marginTop: '10px'}}>
                            <img src={stat1act2}
                                 alt="Lancer de Dés"
                                 className="img-fluid rounded shadow-sm compact-img"
                                 onClick={() => openModal(stat1act2, "Lancer de Dés")}
                            />
                        </div>
                    </div>

                    {/* Section S'approprier */}
                    <div className="question-card mt-1 mb-0">
                        <div className="question-content">
                            <h4 className="vect-title"
                                style={{display: 'inline', marginRight: '10px'}}>
                                <span>S'approprier</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                Les résultats obtenus :
                            </p>

                            <div className="data-grid mt-3 mb-3">
                                {[15, 16, 15, 14, 17, 16, 15, 14, 16, 17, 15, 16, 14, 17, 16].map((val, i) => (
                                    <span key={i} className="data-cell">{val}</span>
                                ))}
                            </div>

                            {/* Question 1 */}
                            <div className="question-item" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                flexWrap: 'wrap',
                                marginBottom: '15px'
                            }}>
                                <p style={{margin: '0', flex: '1'}}>
                                    1) L'ensemble des individus étudiés au cours d'une enquête statistique s'appelle
                                    <span
                                        className="answer-dots"> .................................................................................</span>
                                </p>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question1')}
                                        style={{padding: '2px 6px', fontSize: '12px'}}
                                    >
                                        <FaCheck/> {showCorrections.question1 ? '✕' : '✓'}
                                    </button>
                                </div>
                            </div>

                            {/* Question 2 */}
                            <div className="question-item" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                flexWrap: 'wrap',
                                marginBottom: '15px'
                            }}>
                                <p style={{margin: '0', flex: '1'}}>
                                    2) Quelle est la population étudiée dans cette enquête statistique ?
                                    <span
                                        className="answer-dots"> .................................................................................</span>
                                </p>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question2')}
                                        style={{padding: '2px 6px', fontSize: '12px'}}
                                    >
                                        <FaCheck/> {showCorrections.question2 ? '✕' : '✓'}
                                    </button>
                                </div>
                            </div>

                            {/* Question 3a */}
                            <div className="question-item" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                flexWrap: 'wrap',
                                marginBottom: '15px'
                            }}>
                                <p style={{margin: '0', flex: '1'}}>
                                    3) a) Quel est le caractère étudié dans cette enquête statistique ?
                                    <span
                                        className="answer-dots"> .................................................................................</span>
                                </p>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question3a')}
                                        style={{padding: '2px 6px', fontSize: '12px'}}
                                    >
                                        <FaCheck/> {showCorrections.question3a ? '✕' : '✓'}
                                    </button>
                                </div>
                            </div>

                            {/* Question 3b */}
                            <div className="question-item" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                flexWrap: 'wrap',
                                marginBottom: '15px'
                            }}>
                                <p style={{margin: '0', flex: '1'}}>
                                    b) Ce caractère est-il quantitatif ou qualitatif ? Justifiez.
                                    <span
                                        className="answer-dots"> .................................................................................</span>
                                </p>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question3b')}
                                        style={{padding: '2px 6px', fontSize: '12px'}}
                                    >
                                        <FaCheck/> {showCorrections.question3b ? '✕' : '✓'}
                                    </button>
                                </div>
                            </div>

                            {/* Question 3c */}
                            <div className="question-item" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                flexWrap: 'wrap',
                                marginBottom: '15px'
                            }}>
                                <p style={{margin: '0', flex: '1'}}>
                                    c) Ce caractère est-il discret ou continu ? Justifiez.
                                    <span
                                        className="answer-dots"> .................................................................................</span>
                                </p>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question3c')}
                                        style={{padding: '2px 6px', fontSize: '12px'}}
                                    >
                                        <FaCheck/> {showCorrections.question3c ? '✕' : '✓'}
                                    </button>
                                </div>
                            </div>

                            {/* Affichage des corrections */}
                            {showCorrections.question1 && (
                                <div className="correction-box" style={{
                                    backgroundColor: '#e8f5e9',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    margin: '5px 0'
                                }}>
                                    <strong>Correction :</strong> {correctAnswers.question1}
                                </div>
                            )}
                            {showCorrections.question2 && (
                                <div className="correction-box" style={{
                                    backgroundColor: '#e8f5e9',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    margin: '5px 0'
                                }}>
                                    <strong>Correction :</strong> {correctAnswers.question2}
                                </div>
                            )}
                            {showCorrections.question3a && (
                                <div className="correction-box" style={{
                                    backgroundColor: '#e8f5e9',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    margin: '5px 0'
                                }}>
                                    <strong>Correction :</strong> {correctAnswers.question3a}
                                </div>
                            )}
                            {showCorrections.question3b && (
                                <div className="correction-box" style={{
                                    backgroundColor: '#e8f5e9',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    margin: '5px 0'
                                }}>
                                    <strong>Correction :</strong> {correctAnswers.question3b}
                                </div>
                            )}
                            {showCorrections.question3c && (
                                <div className="correction-box" style={{
                                    backgroundColor: '#e8f5e9',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    margin: '5px 0'
                                }}>
                                    <strong>Correction :</strong> {correctAnswers.question3c}
                                </div>
                            )}
                        </div>

                        <div className="question-content">
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>Réaliser</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                4) Pour que les résultats soient plus lisibles, on peut les regrouper dans un tableau
                                d'effectifs.
                            </p>

                            <div className="table-responsive mt-3">
                                <table className="table table-bordered text-center shadow-sm"
                                       style={{fontSize: '14px'}}>
                                    <thead className="table-light">
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

                                        </td>
                                        <td>
                                       
                                        </td>
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h2 className="math-chapter-title-test mb-0" style={{
                            color: '#6c757d',
                            fontWeight: '300',
                            fontSize: '16px',
                            fontStyle: 'italic',
                            textAlign: 'center',
                            padding: '4px 0',
                            margin: '8px 0'
                        }}>
                            Représentation graphique
                        </h2>
                        {/* Section Communiquer */}

                        <div className="question-content mt-0">
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>Communiquer</span>
                            </h4>

                            {/* Question 5 */}
                            <div className="question-item" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                flexWrap: 'wrap',
                                marginBottom: '15px'
                            }}>
                                <p style={{margin: '0', flex: '1'}}>
                                    5) Quel type de diagramme est le plus adapté pour représenter cette série
                                    statistique ?
                                    <span
                                        className="answer-dots"> .................................................................................</span>
                                </p>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question5')}
                                        style={{padding: '2px 6px', fontSize: '12px'}}
                                    >
                                        <FaCheck/> {showCorrections.question5 ? '✕' : '✓'}
                                    </button>
                                </div>
                            </div>

                            {showCorrections.question5 && (
                                <div className="correction-box" style={{
                                    backgroundColor: 'rgba(232, 245, 233, 0.9)',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    margin: '5px 0',
                                    backdropFilter: 'blur(2px)'
                                }}>
                                    <strong>Correction :</strong> {correctAnswers.question5}
                                </div>
                            )}

                            <p>6) À l'aide du tableau, complétez le diagramme en bâtons ci-dessous.</p>

                            {/* PHOTO - DISPOSITION CONSERVÉE */}
                            <div className="diagram-placeholder" style={{
                                height: 'auto',
                                margin: '10px 0',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#f9f9f9',
                                padding: '10px',
                                borderRadius: '12px'
                            }}>
                                <img src={diagrammeImage} alt="Diagramme en bâtons" style={{
                                    maxWidth: '57%',
                                    height: 'auto',
                                    border: '2px solid #ccc',
                                    borderRadius: '8px'
                                }}/>
                            </div>

                        </div>
                    </div>
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
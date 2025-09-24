import React, {useRef, useState} from 'react';
import {FaChartBar, FaPrint, FaCheck, FaCalculator, FaDice} from 'react-icons/fa';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import {IoMdSchool} from 'react-icons/io';
import '../../../../../styles/activites.css';
import {useLocation, useParams} from "react-router-dom";
import diagrammeImage from '../../../../../assets/histo.png';
import BackButton from "../../../../../components/navigation/BackButton";
import PrintManager from "../../../../../utils/PrintManager";
import Automatismes from "../../../../../config/Automatismes";
import {FcBullish} from "react-icons/fc";
import stat1act3 from "../../../../../assets/act1indicposi.png";
import ModalImage from "../../../../../utils/ModalImage";
import Automatismes2 from "../../../../../config/Automatismes2";

const Act1IndicateurDePosition = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    const [answers, setAnswers] = useState({
        question1a: '',
        question1b: '',
        question2d: '',
        question2e: '',
        question2f: '',
        question2g: '',
        question2h_q1: '',
        question2h_q3: '',
        question2i: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        question1a: false,
        question1b: false,
        question2d: false,
        question2e: false,
        question2f: false,
        question2g: false,
        question2h_q1: false,
        question2h_q3: false,
        question2i: false
    });

    // Données triées pour les calculs
    const notesTriées = [10, 11, 12, 12, 12, 12, 13, 14, 14, 14, 15, 15, 15, 16, 16, 16, 17, 17, 18, 19];

    // Réponses attendues avec calculs détaillés
    const correctAnswers = {
        question1a: "La population",
        question1b: "La population étudiée est les élèves de la classe en mathématiques.",
        question2d: `Moyenne = (15+12+14+16+18+12+10+16+14+19+12+15+14+17+13+15+11+16+12+17)/20 = 289/20 = 14,45`,
        question2e: `Médiane = Données triées: ${notesTriées.join(', ')}. Nombre pair (20), médiane = moyenne des 10ème et 11ème valeurs: (14 + 15)/2 = 14,5`,
        question2f: `Mode = 12 (apparaît 4 fois). Fréquences: 10(1), 11(1), 12(4), 13(1), 14(3), 15(3), 16(3), 17(2), 18(1), 19(1)`,
        question2g: "Étendue = Valeur max (19) - Valeur min (10) = 9",
        question2h_q1: `Q1 = 25% de 20 = 5ème valeur. Données triées: position 5 = 12`,
        question2h_q3: `Q3 = 75% de 20 = 15ème valeur. Données triées: position 15 = 16`,
        question2i: "Écart interquartile = Q3 - Q1 = 16 - 12 = 4"
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

    if (className === 'Secondeastat-une-variableact3') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>
            <div className="tp-container" id="stat-act1-content" ref={contentRef}>
                <PrintManager
                    contentRef={contentRef}
                    activityName="Indicateurs_Position_Act1"
                    pageCount={2}
                    quality="hd"
                />

                {/* PAGE 1 */}
                <div className="print-page">
                    <div style={{marginTop: '-10px'}}>
                        <Automatismes2/>
                    </div>
                    <div className="activity-header mt-0">
                        <span className="activity-badge">ACTIVITÉ 1</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaCalculator/> <FcBullish/> « Résultats scolaires des élèves en mathématiques »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '350px'}}>
                            <div className="renovation-contexte">
                                <h5 className="mb-3 text-primary fw-bold">
                                    📊 "Analyse des résultats scolaires en mathématiques"
                                </h5>

                                <p style={{textAlign: 'justify', fontSize: '11px', lineHeight: '1.3'}}>
                                    Un enseignant souhaite analyser les résultats des élèves de la classe en
                                    mathématiques sur un contrôle pour avoir un aperçu général de leur performance.
                                    Voici les notes obtenues par les élèves :
                                </p>

                                <div className="data-grid-single-line mt-3 mb-3" style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '2px',
                                    justifyContent: 'center',

                                }}>
                                    {['15', '12', '14', '16', '18', '12', '10', '16', '14', '19',
                                        '12', '15', '14', '17', '13', '15', '11', '16', '12', '17'].map((val, i) => (
                                        <span key={i} className="data-cell-single" style={{
                                            padding: '4px 8px',
                                            backgroundColor: '#e9ecef',
                                            borderRadius: '4px',
                                            fontSize: '11px',
                                            fontWeight: 'bold',

                                        }}>{val}</span>
                                    ))}
                                </div>

                                <div className="objectif-box" style={{
                                    marginTop: '10px',
                                    padding: '12px',
                                    backgroundColor: '#fff3cd',
                                    border: '1px solid #ffeaa7',
                                    borderRadius: '8px'
                                }}>
                                    <div className="objectif-title" style={{fontSize: '11px', color: '#856404'}}>
                                        <strong style={{color: 'orangered'}}>Objectif :</strong> 🎯 Comprendre et
                                        calculer les indicateurs de position (moyenne, médiane, mode, quartiles) pour
                                        analyser une série statistique.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PHOTO - DISPOSITION CONSERVÉE */}
                        <div className="flex-shrink-0"
                             style={{maxWidth: '200px', cursor: 'pointer'}}>
                            <img src={stat1act3}
                                 alt="Résultats scolaires en mathématiques"
                                 className="img-fluid rounded shadow-sm compact-img"
                                 onClick={() => openModal(stat1act3, "Résultats scolaires en mathématiques")}
                            />
                        </div>
                    </div>

                    {/* Section S'approprier */}
                    <div className="question-card mt-1 mb-0" style={{
                        backgroundColor: '#ffffff',
                        border: '2px solid #4a90e2',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div className="question-content">
                            <h4 className="vect-title2">
                                <span>1) S'APPROPRIER</span>
                            </h4>

                            {/* Question 1a */}
                            <div className="question-item" style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '10px',
                                flexWrap: 'wrap',
                                padding: '10px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '8px',
                                borderLeft: '4px solid #4a90e2'
                            }}>
                                <div style={{flex: 1, minWidth: '250px'}}>
                                    <p style={{margin: '0', fontSize: '11px', fontWeight: 'bold', color: '#2c3e50'}}>
                                        a) L'ensemble des individus étudiés au cours d'une enquête statistique s'appelle
                                    </p>
                                    <div className="answer-line" style={{
                                        borderBottom: '1px dashed #ccc',
                                        marginTop: '8px',
                                        paddingBottom: '4px',
                                        minHeight: '20px'
                                    }}>
                                        {showCorrections.question1a && (
                                            <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                                {correctAnswers.question1a}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question1a')}
                                        style={{
                                            padding: '4px 8px',
                                            fontSize: '11px',
                                            backgroundColor: showCorrections.question1a ? '#e74c3c' : '#2ecc71',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <FaCheck style={{marginRight: '4px'}}/>
                                        {showCorrections.question1a ? '✕ Cacher' : '✓ Voir'}
                                    </button>
                                </div>

                                <div style={{flex: 1, minWidth: '250px'}}>
                                    <p style={{margin: '0', fontSize: '11px', fontWeight: 'bold', color: '#2c3e50'}}>
                                        b) Quelle est la population étudiée dans cette enquête statistique ?
                                    </p>
                                    <div className="answer-line" style={{
                                        borderBottom: '1px dashed #ccc',
                                        marginTop: '8px',
                                        paddingBottom: '4px',
                                        minHeight: '40px'
                                    }}>
                                        {showCorrections.question1b && (
                                            <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                                {correctAnswers.question1b}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div style={{display: 'flex', alignItems: 'flex-start', gap: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question1b')}
                                        style={{
                                            padding: '4px 8px',
                                            fontSize: '11px',
                                            backgroundColor: showCorrections.question1b ? '#e74c3c' : '#2ecc71',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <FaCheck style={{marginRight: '4px'}}/>
                                        {showCorrections.question1b ? '✕ Cacher' : '✓ Voir'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="question-content">
                            <h4 className="vect-title" style={{
                                display: 'inline',
                            }}>
                                <span>2) RÉALISER</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify', fontSize: '11px', color: '#7f8c8d'}}>
                                Nous allons maintenant calculer différents indicateurs statistiques en nous basant sur
                                les données fournies.
                            </p>

                            {/* Conteneur principal avec grille pour une disposition stable */}
                            <div className="questions-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr', // 2 colonnes fixes
                                gap: '15px',
                                marginTop: '15px'
                            }}>

                                {/* Question 2d - Moyenne */}
                                <div className="question-item" style={{
                                    padding: '10px',
                                    backgroundColor: 'rgba(255,250,240,0.1)',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #e67e22',
                                    pageBreakInside: 'avoid'
                                }}>
                                    <p style={{margin: '0', fontSize: '11px', fontWeight: 'bold', color: '#2c3e50'}}>
                                        c) Calcul de la moyenne : La moyenne est la somme des valeurs divisée par le
                                        nombre de valeurs.
                                    </p>
                                    <div className="answer-line" style={{
                                        borderBottom: '1px dashed #ccc',
                                        marginTop: '8px',
                                        paddingBottom: '4px',
                                        minHeight: '40px'
                                    }}>
                                        {showCorrections.question2d && (
                                            <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                        {correctAnswers.question2d}
                    </span>
                                        )}
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '8px'}}>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question2d')}
                                            style={{
                                                padding: '4px 8px',
                                                fontSize: '11px',
                                                backgroundColor: showCorrections.question2d ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <FaCheck style={{marginRight: '4px'}}/>
                                            {showCorrections.question2d ? '✕ Cacher' : '✓ Voir'}
                                        </button>
                                    </div>
                                </div>

                                {/* Question 2e - Médiane */}
                                <div className="question-item" style={{
                                    padding: '10px',
                                    backgroundColor: 'rgba(255,250,240,0.1)',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #e67e22',
                                    pageBreakInside: 'avoid'
                                }}>
                                    <p style={{margin: '0', fontSize: '11px', fontWeight: 'bold', color: '#2c3e50'}}>
                                        d) Calcul de la médiane : La médiane est la valeur qui sépare une série de
                                        données en deux parties égales.
                                    </p>
                                    <p style={{
                                        margin: '5px 0',
                                        fontSize: '10px',
                                        color: '#7f8c8d',
                                        fontStyle: 'italic'
                                    }}>
                                        Étapes: 1. On range les données en ordre croissant. 2. Si impair → valeur du
                                        milieu. 3. Si pair → moyenne des deux valeurs du milieu.
                                    </p>
                                    <div className="answer-line" style={{
                                        borderBottom: '1px dashed #ccc',
                                        marginTop: '8px',
                                        paddingBottom: '4px',
                                        minHeight: '60px'
                                    }}>
                                        {showCorrections.question2e && (
                                            <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                        {correctAnswers.question2e}
                    </span>
                                        )}
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '8px'}}>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question2e')}
                                            style={{
                                                padding: '4px 8px',
                                                fontSize: '11px',
                                                backgroundColor: showCorrections.question2e ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <FaCheck style={{marginRight: '4px'}}/>
                                            {showCorrections.question2e ? '✕ Cacher' : '✓ Voir'}
                                        </button>
                                    </div>
                                </div>

                                {/* Question 2f - Mode */}
                                <div className="question-item" style={{
                                    padding: '10px',
                                    backgroundColor: 'rgba(255,250,240,0.1)',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #e67e22',
                                    pageBreakInside: 'avoid'
                                }}>
                                    <p style={{margin: '0', fontSize: '11px', fontWeight: 'bold', color: '#2c3e50'}}>
                                        e) Calcul du mode : Le mode est la valeur la plus fréquente dans une série de
                                        données.
                                    </p>
                                    <div className="answer-line" style={{
                                        borderBottom: '1px dashed #ccc',
                                        marginTop: '8px',
                                        paddingBottom: '4px',
                                        minHeight: '40px'
                                    }}>
                                        {showCorrections.question2f && (
                                            <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                        {correctAnswers.question2f}
                    </span>
                                        )}
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '8px'}}>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question2f')}
                                            style={{
                                                padding: '4px 8px',
                                                fontSize: '11px',
                                                backgroundColor: showCorrections.question2f ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <FaCheck style={{marginRight: '4px'}}/>
                                            {showCorrections.question2f ? '✕ Cacher' : '✓ Voir'}
                                        </button>
                                    </div>
                                </div>

                                {/* Question 2g - Étendue */}
                                <div className="question-item" style={{
                                    padding: '10px',
                                    backgroundColor: 'rgba(255,250,240,0.1)',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #e67e22',
                                    pageBreakInside: 'avoid'
                                }}>
                                    <p style={{margin: '0', fontSize: '11px', fontWeight: 'bold', color: '#2c3e50'}}>
                                        f) Calcul de l'étendue : L'étendue est la différence entre la valeur maximale et
                                        la valeur minimale.
                                    </p>
                                    <div className="answer-line" style={{
                                        borderBottom: '1px dashed #ccc',
                                        marginTop: '8px',
                                        paddingBottom: '4px',
                                        minHeight: '40px'
                                    }}>
                                        {showCorrections.question2g && (
                                            <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                        {correctAnswers.question2g}
                    </span>
                                        )}
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '8px'}}>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question2g')}
                                            style={{
                                                padding: '4px 8px',
                                                fontSize: '11px',
                                                backgroundColor: showCorrections.question2g ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <FaCheck style={{marginRight: '4px'}}/>
                                            {showCorrections.question2g ? '✕ Cacher' : '✓ Voir'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Question 2h - Quartiles (pleine largeur) */}
                            <div className="question-item" style={{
                                padding: '10px',
                                backgroundColor: 'rgba(255,250,240,0.11)',
                                borderRadius: '8px',
                                borderLeft: '4px solid #e67e22',
                                marginTop: '15px',
                                marginBottom: '15px',
                                pageBreakInside: 'avoid'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    gap: '15px'
                                }}>
                                    <div style={{flex: 1}}>
                                        <p style={{
                                            margin: '0',
                                            fontSize: '11px',
                                            fontWeight: 'bold',
                                            color: '#2c3e50'
                                        }}>
                                            g) Les quartiles : Les quartiles divisent les données en quatre parties
                                            égales.
                                        </p>
                                        <p style={{margin: '5px 0', fontSize: '10px', color: '#7f8c8d'}}>
                                            • Q1 (Premier quartile) : sépare les 25% des plus petites valeurs.<br/>
                                            • Q3 (Troisième quartile) : sépare les 25% des plus grandes valeurs.
                                        </p>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '15px',
                                            marginTop: '10px'
                                        }}>
                                            <div>
                                                <p style={{margin: '5px 0', fontSize: '11px', fontWeight: 'bold'}}>➢ Q1
                                                    (premier quartile) :</p>
                                                <div className="answer-line" style={{
                                                    borderBottom: '1px dashed #ccc',
                                                    paddingBottom: '4px',
                                                    minHeight: '25px'
                                                }}>
                                                    {showCorrections.question2h_q1 && (
                                                        <span style={{
                                                            color: '#27ae60',
                                                            fontWeight: 'bold',
                                                            fontSize: '11px'
                                                        }}>
                                    {correctAnswers.question2h_q1}
                                </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div>
                                                <p style={{margin: '5px 0', fontSize: '11px', fontWeight: 'bold'}}>➢ Q3
                                                    (troisième quartile) :</p>
                                                <div className="answer-line" style={{
                                                    borderBottom: '1px dashed #ccc',
                                                    paddingBottom: '4px',
                                                    minHeight: '25px'
                                                }}>
                                                    {showCorrections.question2h_q3 && (
                                                        <span style={{
                                                            color: '#27ae60',
                                                            fontWeight: 'bold',
                                                            fontSize: '11px'
                                                        }}>
                                    {correctAnswers.question2h_q3}
                                </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question2h_q1')}
                                            style={{
                                                padding: '4px 8px',
                                                fontSize: '11px',
                                                backgroundColor: showCorrections.question2h_q1 ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                width: '100px'
                                            }}
                                        >
                                            <FaCheck style={{marginRight: '4px'}}/>
                                            {showCorrections.question2h_q1 ? '✕ Q1' : '✓ Q1'}
                                        </button>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question2h_q3')}
                                            style={{
                                                padding: '4px 8px',
                                                fontSize: '11px',
                                                backgroundColor: showCorrections.question2h_q3 ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                width: '100px'
                                            }}
                                        >
                                            <FaCheck style={{marginRight: '4px'}}/>
                                            {showCorrections.question2h_q3 ? '✕ Q3' : '✓ Q3'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Question 2i - Écart interquartile (pleine largeur) */}
                            <div className="question-item" style={{
                                padding: '10px',
                                backgroundColor: 'rgba(255,250,240,0.12)',
                                borderRadius: '8px',
                                borderLeft: '4px solid #e67e22',
                                marginBottom: '5px',
                                pageBreakInside: 'avoid'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    gap: '15px'
                                }}>
                                    <div style={{flex: 1}}>
                                        <p style={{
                                            margin: '0',
                                            fontSize: '11px',
                                            fontWeight: 'bold',
                                            color: '#2c3e50'
                                        }}>
                                            h) Calcul de l'écart interquartile : L'écart interquartile est la différence
                                            entre le troisième quartile (Q3) et le premier quartile (Q1).
                                            Écart interquartile = Q3 - Q1
                                        </p>
                                        <div className="answer-line" style={{
                                            borderBottom: '1px dashed #ccc',
                                            marginTop: '8px',
                                            paddingBottom: '4px',
                                            minHeight: '40px'
                                        }}>
                                            {showCorrections.question2i && (
                                                <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                            {correctAnswers.question2i}
                        </span>
                                            )}
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '8px'}}>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question2i')}
                                            style={{
                                                padding: '4px 8px',
                                                fontSize: '11px',
                                                backgroundColor: showCorrections.question2i ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <FaCheck style={{marginRight: '4px'}}/>
                                            {showCorrections.question2i ? '✕ Cacher' : '✓ Voir'}
                                        </button>
                                    </div>
                                </div>
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

export default Act1IndicateurDePosition;
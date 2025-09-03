import React, {useRef, useState} from 'react';
import {FaChartBar, FaCheck, FaIndustry} from 'react-icons/fa';
import '../../../../../styles/activites.css';
import {useLocation, useParams} from "react-router-dom";
import BackButton from "../../../../../components/navigation/BackButton";
import ModalImage from "../../../../../utils/ModalImage";
import stat1act3 from "../../../../../assets/stat1act1.png";
import PrintManager from "../../../../../utils/PrintManager";
import AutoEvaluationGrid from "../../../../../config/AutoEvaluationGrid";
import Automatismes from "../../../../../config/Automatismes";
import {IoMdSchool} from "react-icons/io";
import Automatismes2 from "../../../../../config/Automatismes2";

const StatUneVariableSeconde = () => {
    const {classId} = useParams();
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
Les valeurs d'une variable continue sont regroupées en classes notées par un intervalle.`
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

    if (className === 'Seconde') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>
            <div className="tp-container" id="stat-content" ref={contentRef}>
                <PrintManager
                    contentRef={contentRef}
                    activityName="Statistiques_Age_Eleves"
                    pageCount={2}
                    quality="hd"
                />
                {/* PAGE DE GARDE - STATISTIQUE ET PROBABILITÉS */}
                <div className="print-page">
                    <div className="cover-page" style={{
                        height: '90%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '2rem',
                        background: 'linear-gradient(135deg, #e8f5e9 0%, #ffffff 50%, #4CAF50 50%, white 50%, white 100%)',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        fontFamily: 'Cambria Math, serif'
                    }}>
                        {/* En-tête */}
                        <div style={{
                            marginBottom: '2rem',
                            padding: '2rem',
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                            maxWidth: '90%'
                        }}>


                            <h1 style={{
                                color: '#2c3e50',
                                fontSize: '2.2rem',
                                fontWeight: '700',
                                marginBottom: '0.5rem'
                            }}>
                                📈 CHAPITRE 1 - Statistique et Probabilités
                            </h1>

                            <h2 style={{
                                color: '#4CAF50',
                                fontSize: '1.5rem',
                                fontWeight: '500',
                                marginBottom: '1.5rem'
                            }}>
                                Analyser, interpréter et prendre des décisions grâce aux données
                            </h2>

                            <div style={{
                                height: '3px',
                                width: '80px',
                                backgroundColor: '#4CAF50',
                                margin: '0 auto 1.5rem',
                                borderRadius: '3px'
                            }}></div>

                            <p style={{
                                color: '#7f8c8d',
                                fontSize: '1.1rem',
                                marginBottom: '2rem',
                                lineHeight: '1.6'
                            }}>
                                Ce domaine constitue un enjeu essentiel de formation et favorise les liaisons<br/>
                                avec les autres enseignements pour comprendre le monde et prendre des décisions
                            </p>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: '1rem',
                                marginBottom: '2rem'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#f8f9fa',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem'
                                }}>
                                    <FaIndustry style={{marginRight: '0.5rem', color: '#4CAF50'}}/>
                                    Mathématiques
                                </div>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#f8f9fa',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem'
                                }}>
                                    <IoMdSchool style={{marginRight: '0.5rem', color: '#4CAF50'}}/>
                                    Niveau Seconde
                                </div>
                            </div>
                        </div>
                        {/* Tableau des capacités et connaissances - CORRIGÉ */}
                        <div style={{
                            width: '90%',
                            marginBottom: '2rem',
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                            padding: '1.5rem',
                            textAlign: 'left'
                        }}>
                            <h3 style={{
                                color: '#2c3e50',
                                textAlign: 'center',
                                marginBottom: '1.5rem',
                                fontSize: '1.4rem'
                            }}>
                                Capacités et connaissances - Statistique à une variable
                            </h3>

                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                fontSize: '0.9rem'
                            }}>
                                <thead>
                                <tr style={{backgroundColor: '#4CAF50', color: 'white'}}>
                                    <th style={{
                                        padding: '0.75rem',
                                        border: '1px solid #ddd',
                                        textAlign: 'center'
                                    }}>Capacités
                                    </th>
                                    <th style={{
                                        padding: '0.75rem',
                                        border: '1px solid #ddd',
                                        textAlign: 'center'
                                    }}>Connaissances
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                        Recueillir et organiser des données statistiques.
                                    </td>
                                    <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                        Regroupement par classes d'une série statistique.
                                    </td>
                                </tr>
                                <tr style={{backgroundColor: '#f8f9fa'}}>
                                    <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                        Organiser des données statistiques en choisissant un mode de représentation
                                        adapté à l'aide des fonctions statistiques d'une calculatrice ou d'un
                                        tableur.<br/>
                                        Extraire des informations d'une représentation d'une série statistique.
                                    </td>
                                    <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                        Représentation d'une série statistique par un diagramme en secteurs, en bâtons,
                                        en colonnes, à lignes brisées.
                                    </td>
                                </tr>

                                <tr>
                                    <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                        Comparer et interpréter des séries statistiques à l'aide d'indicateurs de
                                        position et de dispersion calculés avec les fonctions statistiques d'une
                                        calculatrice ou d'un tableur.
                                    </td>
                                    <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                        Indicateurs de position : mode, classe modale, moyenne, médiane, quartiles.<br/>
                                        Indicateurs de dispersion : étendue, écart type, écart interquartile \( Q_3 -
                                        Q_1 \).
                                    </td>
                                </tr>
                                <tr style={{backgroundColor: '#f8f9fa'}}>
                                    <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                        Construire le diagramme en boîte à moustaches associé à une série statistique
                                        avec ou sans TIC.<br/>
                                        Comparer et interpréter des diagrammes en boîte à moustaches.
                                    </td>
                                    <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                        Diagrammes en boîte à moustaches.
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                        <Automatismes2/>
                    </div>
                </div>
                {/* PAGE 1 */}
                <div className="print-page">
                    <div className="math-chapter-box blue" style={{padding: '10px'}}>
                        <FaChartBar className="math-chapter-icon"/>
                        <h2 className="math-chapter-title-test mb-0">Statistique à une variable</h2>
                    </div>

                    <div className="activity-header">
                        <span className="activity-badge">ACTIVITÉ 1</span>
                        <div className="activity-title">
                            <span className="course-title">
                                « Quels sont les temps d'écran pour les élèves du lycée ? »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <h5 className="mb-3 text-primary fw-bold">
                                    📊 "Analyse des habitudes numériques des élèves"
                                </h5>

                                <p style={{textAlign: 'justify', fontSize: '16px', lineHeight: '1.4'}}>
                                    Le proviseur du lycée souhaite évaluer l'impact des écrans sur ses élèves. Pour ce
                                    faire,
                                    il mène une enquête auprès des familles afin de collecter des données précises
                                    sur le nombre d'écrans par famille et le temps passé devant les écrans.
                                </p>

                                <div className="objectif-box" style={{marginTop: '10px', padding: '10px'}}>
                                    <div className="objectif-title"><strong style={{color: 'orangered'}}>Objectif
                                        :</strong> 🎯
                                    </div>
                                    <p>Découvrir comment utiliser les mathématiques pour analyser les habitudes
                                        numériques des élèves et en tirer des conclusions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0"
                             style={{maxWidth: '300px', cursor: 'pointer', marginTop: '20px'}}>
                            <img src={stat1act3}
                                 alt="Statistiques écrans"
                                 className="img-fluid rounded shadow-sm"
                                 onClick={() => openModal(stat1act3, "Statistiques écrans")}
                                 style={{maxHeight: '200px', objectFit: 'contain'}}
                            />
                        </div>
                    </div>

                    {/* Section S'approprier */}
                    <div className="question-card mt-3">
                        <div className="question-content">
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>S'approprier</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                Le proviseur demande à chaque famille le nombre d'écrans (téléviseurs, smartphones,
                                ordinateurs, tablettes) qu'elle possède et obtient les résultats suivants :
                            </p>

                            <div className="data-grid mt-3 mb-3">
                                {[5, 4, 5, 6, 4, 5, 7, 6, 5, 6, 8, 5, 6, 4, 4, 5, 7, 7, 4, 7, 5, 4, 5, 4, 8, 3, 4, 5, 6, 6, 5, 8, 4, 5, 6, 4, 5, 5, 4, 6, 4, 5, 4, 7, 7, 6, 5, 4, 5].map((val, i) => (
                                    <span key={i} className="data-cell">{val}</span>
                                ))}
                            </div>

                            {/* Question 1a */}
                            <div className="question-item" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                flexWrap: 'wrap',
                                marginBottom: '15px'
                            }}>
                                <p style={{margin: '0', flex: '1'}}>
                                    <strong>a)</strong> Combien de familles ont-elles été interrogées ?
                                    <span
                                        className="answer-dots"> .................................................................................</span>
                                </p>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>

                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question1a')}
                                        style={{padding: '2px 6px', fontSize: '12px'}}
                                    >
                                        <FaCheck/> {showCorrections.question1a ? '✕' : '✓'}
                                    </button>
                                </div>
                            </div>

                            {/* Question 1b */}
                            <div className="question-item" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                flexWrap: 'wrap',
                                marginBottom: '15px'
                            }}>
                                <p style={{margin: '0', flex: '1'}}>
                                    <strong>b)</strong> Quelle est la variable statistique étudiée ?
                                    <span
                                        className="answer-dots"> .................................................................................</span>
                                </p>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question1b')}
                                        style={{padding: '2px 6px', fontSize: '12px'}}
                                    >
                                        <FaCheck/> {showCorrections.question1b ? '✕' : '✓'}
                                    </button>
                                </div>
                            </div>

                            {/* Question 1c */}
                            <div className="question-item" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                flexWrap: 'wrap',
                                marginBottom: '15px'
                            }}>
                                <p style={{margin: '0', flex: '1'}}>
                                    <strong>c)</strong> Quelles sont les valeurs prises par la variable ?
                                    <span
                                        className="answer-dots"> .................................................................................</span>
                                </p>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question1c')}
                                        style={{padding: '2px 6px', fontSize: '12px'}}
                                    >
                                        <FaCheck/> {showCorrections.question1c ? '✕' : '✓'}
                                    </button>
                                </div>
                            </div>

                            {/* Affichage des corrections */}
                            {showCorrections.question1a && (
                                <div className="correction-box" style={{
                                    backgroundColor: '#e8f5e9',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    margin: '5px 0'
                                }}>
                                    <strong>Correction :</strong> {correctAnswers.question1a}
                                </div>
                            )}
                            {showCorrections.question1b && (
                                <div className="correction-box" style={{
                                    backgroundColor: '#e8f5e9',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    margin: '5px 0'
                                }}>
                                    <strong>Correction :</strong> {correctAnswers.question1b}
                                </div>
                            )}
                            {showCorrections.question1c && (
                                <div className="correction-box" style={{
                                    backgroundColor: '#e8f5e9',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    margin: '5px 0'
                                }}>
                                    <strong>Correction :</strong> {correctAnswers.question1c}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Section Réaliser */}
                    <div className="question-card mt-3">
                        <div className="question-content">
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>Réaliser</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                Associer à chaque nombre d'écrans le nombre de familles (effectif) correspondant dans ce
                                tableau. Calculer les fréquences.
                            </p>

                            <div className="table-responsive mt-3">
                                <table className="table table-bordered text-center shadow-sm"
                                       style={{fontSize: '14px'}}>
                                    <thead className="table-light">
                                    <tr>
                                        <th>Nombre d'écrans</th>
                                        <th>Nombre de familles</th>
                                        <th>Fréquence (%)</th>
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
                            </div>
                        </div>
                    </div>
                </div>

                {/* PAGE 2 */}
                <div className="print-page">
                    <div className="math-chapter-box blue" style={{padding: '10px'}}>
                        <h2 className="math-chapter-title-test mb-0">Analyse des temps d'écran</h2>
                    </div>

                    {/* Section S'approprier */}
                    <div className="question-card mt-3">
                        <div className="question-content">
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>S'approprier</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                Le proviseur demande ensuite à chaque élève d'estimer le nombre d'heures par jour qu'il
                                passe devant un écran.
                            </p>

                            <div className="time-data mt-3 mb-3">
                                {['30 min', '1 h 10', '2 h 30', '1 h 20', '1 h 40', '45 min', '3 h 10', '2 h 20', '1 h 15', '3 h 30', '3 h 15',
                                    '3 h 20', '50 min', '1 h 25', '1 h 30', '2 h 15', '2 h 25', '2 h 05', '3 h 10', '55 min', '1 h 55', '2 h 10',
                                    '1 h 40', '2 h 50', '2 h 10', '1 h', '3 h', '35 min', '55 min', '2 h 45', '2 h 25', '2 h', '3 h 10',
                                    '45 min', '2 h 15', '3 h', '1 h 50', '2 h 05', '55 min', '2 h 45', '1 h 35', '2 h 10', '3 h 05', '1 h',
                                    '1 h 35', '2 h 10', '1 h 55', '50 min', '1 h 05', '2 h'].map((val, i) => (
                                    <span key={i} className="data-cell">{val}</span>
                                ))}
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
                                    Dans quel intervalle sont situées les valeurs de la variable ?
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
                        </div>
                    </div>

                    {/* Section Réaliser */}
                    <div className="question-card mt-3">
                        <div className="question-content">
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>Réaliser</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                Regrouper ces valeurs dans les intervalles de ce tableau.
                            </p>

                            <div className="table-responsive mt-3">
                                <table className="table table-bordered text-center shadow-sm"
                                       style={{fontSize: '14px'}}>
                                    <thead className="table-light">
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
                            </div>
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div className="question-card mt-3">
                        <div className="question-content">
                            <h4 className="vect-title">
                                <span>📝 Je retiens</span>
                            </h4>
                            <p>
                                À l'aide des résultats obtenus, analysez la distribution du nombre d'écrans par famille
                                et
                                des temps d'écran des élèves.
                            </p>
                            <div className="answer-area">
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={answers.conclusion}
                                    onChange={(e) => handleAnswerChange('conclusion', e.target.value)}
                                    style={{maxWidth: '100%', fontSize: '14px'}}
                                />
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('conclusion')}
                                    style={{marginTop: '10px'}}
                                >
                                    <FaCheck/> {showCorrections.conclusion ? 'Masquer la correction' : 'Afficher la correction'}
                                </button>
                                {showCorrections.conclusion && (
                                    <div className="correction-box" style={{
                                        backgroundColor: '#e8f5e9',
                                        padding: '8px',
                                        borderRadius: '4px',
                                        marginTop: '10px'
                                    }}>
                                        <strong>Correction :</strong> {correctAnswers.conclusion}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <footer className="tp-footer mt-4">
                        <AutoEvaluationGrid/>
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
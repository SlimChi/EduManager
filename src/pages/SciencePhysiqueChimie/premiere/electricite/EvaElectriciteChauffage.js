import React, {useRef, useState} from 'react';
import {FaBolt, FaCalculator, FaCheck, FaQuestionCircle} from 'react-icons/fa';
import '../../../../styles/activites.css';
import {useLocation, useParams} from "react-router-dom";
import BackButton from "../../../../components/navigation/BackButton";
import PrintManager from "../../../../utils/PrintManager";
import Automatismes2 from "../../../../config/Automatismes2";
import ModalImage from "../../../../utils/ModalImage";
import schemaElectrique from "../../../../assets/schema-chauffage.png";
import schemaElectrique3 from "../../../../assets/shemaelectic3.png";
import schemaJoulmetre from "../../../../assets/shemajoulmetre.png"

const EvaElectriciteChauffage = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    const [answers, setAnswers] = useState({
        question1: '',
        question2_allume: '',
        question2_eteint: '',
        question2_veille: '',
        question3: '',
        question4_1h: '',
        question4_24h: '',
        question4_365j: '',
        question5: '',
        qcm1: '', qcm2: '', qcm3: '', qcm4: '', qcm5: '',
        qcm6: '', qcm7: '', qcm8: '', qcm9: '', qcm10: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        question1: false, question2_allume: false, question2_eteint: false, question2_veille: false,
        question3: false, question4_1h: false, question4_24h: false, question4_365j: false, question5: false,
        qcm1: false, qcm2: false, qcm3: false, qcm4: false, qcm5: false,
        qcm6: false, qcm7: false, qcm8: false, qcm9: false, qcm10: false
    });

    // Réponses attendues
    const correctAnswers = {
        question1: "Schéma B",
        question2_allume: "K1 fermé, K2 fermé",
        question2_eteint: "K1 ouvert, K2 ouvert",
        question2_veille: "K1 ouvert, K2 fermé",
        question3: "E = 720 J",
        question4_1h: "43 200 J",
        question4_24h: "1 036 800 J",
        question4_365j: "378 432 000 J",
        question5: "Oui, Lucas a raison car la consommation en veille représente seulement 0,3% de la consommation en fonctionnement normal.",
        qcm1: "E = P × t",
        qcm2: "le kilowattheure",
        qcm3: "P = U × I",
        qcm4: "watt",
        qcm5: "2 kWh",
        qcm6: "un compteur d'énergie",
        qcm7: "3 600 000 J",
        qcm8: "un voltmètre",
        qcm9: "ampère",
        qcm10: "en série"
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

    const handleQCMChange = (question, value) => {
        setAnswers(prev => ({
            ...prev,
            [question]: value
        }));
    };

    if (className === 'ClasseNonDisponible') {
        return <div>Cette évaluation n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>
            <div className="tp-container" id="eval-electricite-content" ref={contentRef}>
                <PrintManager
                    contentRef={contentRef}
                    activityName="Evaluation_Electricite_Chauffage"
                    pageCount={2}
                    quality="hd"
                />

                {/* PAGE 1 */}
                <div className="print-page">
                    {/* EN-TÊTE MINIMALISTE */}
                    <div className="evaluation-header" style={{
                        border: '1px solid #bdc3c7',
                        borderRadius: '5px',
                        padding: '10px',
                        marginBottom: '15px',
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
                    }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '10px',
                            fontSize: '12px'
                        }}>
                            <div>
                                <strong>Nom :</strong><br/>
                                <div style={{
                                    borderBottom: '1px dashed #7f8c8d',
                                    height: '20px',
                                    marginTop: '3px'
                                }}></div>
                            </div>
                            <div>
                                <strong>Prénom :</strong><br/>
                                <div style={{
                                    borderBottom: '1px dashed #7f8c8d',
                                    height: '20px',
                                    marginTop: '3px'
                                }}></div>
                            </div>
                            <div>
                                <strong>Classe :</strong><br/>
                                <div style={{
                                    borderBottom: '1px dashed #7f8c8d',
                                    height: '20px',
                                    marginTop: '3px'
                                }}></div>
                            </div>
                            <div>
                                <strong>Note :</strong><br/>
                                <div style={{
                                    borderBottom: '1px dashed #e74c3c',
                                    height: '20px',
                                    marginTop: '3px',
                                    fontWeight: 'bold',
                                    color: '#e74c3c'
                                }}>
                                    /10
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="activity-header mt-0">
                        <span className="activity-badge">ÉVALUATION </span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaBolt/> « Consommation d'un chauffage d'appoint »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '350px'}}>
                            <div className="renovation-contexte">
                                <h5 className="mb-3 text-primary fw-bold">
                                    🔥 "Analyse de la consommation électrique"
                                </h5>

                                <p style={{textAlign: 'justify', fontSize: '13px', lineHeight: '1.3'}}>
                                    Lucas utilise un chauffage d'appoint électrique pendant l'hiver.
                                    Il sait qu'il est préférable de l'éteindre complètement plutôt que de le laisser en
                                    veille.
                                    Lucas pense que le voyant lumineux de veille consomme très peu, environ 2 kWh pour
                                    l'année.
                                </p>

                                <div className="objectif-box" style={{
                                    marginTop: '10px',
                                    padding: '12px',
                                    backgroundColor: '#fff3cd',
                                    border: '1px solid #ffeaa7',
                                    borderRadius: '8px'
                                }}>
                                    <div className="objectif-title" style={{fontSize: '12px', color: '#856404'}}>
                                        <strong style={{color: 'orangered'}}>Problématique :</strong> 🎯
                                        Lucas a-t-il raison concernant la faible consommation du voyant de veille ?
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0" style={{maxWidth: '175px', cursor: 'pointer'}}>
                            <img src={schemaElectrique}
                                 alt="Schéma électrique du chauffage"
                                 className="img-fluid rounded shadow-sm compact-img"
                                 onClick={() => openModal(schemaElectrique, "Schéma électrique du chauffage")}
                            />
                        </div>
                    </div>

                    {/* QUESTION 1 */}
                    <div className="question-card mt-3 mb-0" style={{
                        backgroundColor: '#ffffff',
                        border: '2px solid #4a90e2',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div className="question-content">
                            <h4 className="vect-title2">
                                <span>Partie 1 : Analyse du circuit</span>
                            </h4>

                            <div className="question-item" style={{
                                padding: '10px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '8px',
                                borderLeft: '4px solid #4a90e2',
                                marginBottom: '15px'
                            }}>
                                <p style={{margin: '0', fontSize: '11px', fontWeight: 'bold', color: '#2c3e50'}}>
                                    1. Il existe trois états possibles pour le chauffage : allumé ; en veille (voyant
                                    vert) ; complètement éteint.
                                </p>
                                <p style={{margin: '10px 0 5px 0', fontSize: '11px', color: '#2c3e50'}}>
                                    Choisir le schéma électrique qui offre ces trois possibilités :
                                </p>

                                <div className="flex-shrink-0"
                                     style={{maxWidth: '100%', cursor: 'pointer'}}>
                                    <img src={schemaElectrique3}
                                         alt="Schéma électrique du chauffage"
                                         className="img-fluid rounded shadow-sm compact-img"
                                         onClick={() => openModal(schemaElectrique3, "Schéma électrique du chauffage")}
                                    />
                                </div>


                                <p style={{
                                    margin: '15px 0 5px 0',
                                    fontSize: '13px',
                                    fontWeight: 'bold',
                                    color: '#2c3e50'
                                }}>
                                    2. Donner l'état (ouvert ou fermé) de chaque interrupteur lorsque le chauffage est :
                                </p>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr 1fr',
                                    gap: '10px',
                                    marginTop: '10px'
                                }}>

                                </div>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr 1fr',
                                    gap: '10px',
                                    marginTop: '10px'
                                }}>
                                    <div>
                                        <p style={{margin: '5px 0', fontSize: '11px', fontWeight: 'bold'}}>• Allumé
                                            :</p>
                                        <div className="answer-line" style={{
                                            borderBottom: '1px dashed #ccc',
                                            paddingBottom: '4px',
                                            minHeight: '20px'
                                        }}>
                                            {showCorrections.question2_allume && (
                                                <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                                    {correctAnswers.question2_allume}
                                                </span>
                                            )}
                                        </div>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question2_allume')}
                                            style={{
                                                padding: '2px 6px',
                                                fontSize: '10px',
                                                backgroundColor: showCorrections.question2_allume ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                marginTop: '5px'
                                            }}
                                        >
                                            {showCorrections.question2_allume ? '✕' : '✓'}
                                        </button>
                                    </div>

                                    <div>
                                        <p style={{margin: '5px 0', fontSize: '11px', fontWeight: 'bold'}}>• Éteint
                                            :</p>
                                        <div className="answer-line" style={{
                                            borderBottom: '1px dashed #ccc',
                                            paddingBottom: '4px',
                                            minHeight: '20px'
                                        }}>
                                            {showCorrections.question2_eteint && (
                                                <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                                    {correctAnswers.question2_eteint}
                                                </span>
                                            )}
                                        </div>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question2_eteint')}
                                            style={{
                                                padding: '2px 6px',
                                                fontSize: '10px',
                                                backgroundColor: showCorrections.question2_eteint ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                marginTop: '5px'
                                            }}
                                        >
                                            {showCorrections.question2_eteint ? '✕' : '✓'}
                                        </button>
                                    </div>

                                    <div>
                                        <p style={{margin: '5px 0', fontSize: '11px', fontWeight: 'bold'}}>• En veille
                                            :</p>
                                        <div className="answer-line" style={{
                                            borderBottom: '1px dashed #ccc',
                                            paddingBottom: '4px',
                                            minHeight: '20px'
                                        }}>
                                            {showCorrections.question2_veille && (
                                                <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                                    {correctAnswers.question2_veille}
                                                </span>
                                            )}
                                        </div>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question2_veille')}
                                            style={{
                                                padding: '2px 6px',
                                                fontSize: '10px',
                                                backgroundColor: showCorrections.question2_veille ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                marginTop: '5px'
                                            }}
                                        >
                                            {showCorrections.question2_veille ? '✕' : '✓'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* QUESTION 3 */}
                            <div className="question-item" style={{
                                padding: '10px',
                                backgroundColor: 'rgba(255,250,240,0.1)',
                                borderRadius: '8px',
                                borderLeft: '4px solid #e67e22',
                                marginBottom: '15px'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '15px',
                                    margin: '15px 0'
                                }}>
                                    {/* Partie texte à gauche */}
                                    <div>
                                        <p style={{
                                            margin: '0',
                                            fontSize: '13px',
                                            fontWeight: 'bold',
                                            color: '#2c3e50'
                                        }}>
                                            3. Pour valider que le voyant consomme très peu, Lucas mesure l'énergie
                                            consommée
                                            par la DEL pendant 2 minutes.
                                        </p>
                                        <p style={{margin: '5px 0', fontSize: '12px', fontWeight: 'bold'}}>
                                            Noter l'énergie consommée en joules pour 1 minute : E =
                                            .............................................................
                                            ..................................................................
                                        </p>
                                    </div>

                                    {/* Image à droite */}

                                </div>
                                <div className="flex-shrink-0" style={{
                                    maxWidth: '300px',
                                    minWidth: '150px',
                                    cursor: 'pointer',
                                    marginLeft: '30%'
                                }}>
                                    <img src={schemaJoulmetre}
                                         alt="Mesure de l'énergie avec un joulemètre"
                                         className="img-fluid rounded shadow-sm compact-img"
                                         onClick={() => openModal(schemaJoulmetre, "Mesure de l'énergie avec un joulemètre")}
                                    />
                                    <p style={{
                                        fontSize: '9px',
                                        color: '#666',
                                        textAlign: 'center',
                                        margin: '5px 0 0 0',
                                        fontStyle: 'italic'
                                    }}>
                                        Schéma de mesure
                                    </p>
                                </div>
                            </div>

                            {/* QUESTION 4 */}
                            <div className="question-item" style={{
                                padding: '10px',
                                backgroundColor: 'rgba(240,255,240,0.1)',
                                borderRadius: '8px',
                                borderLeft: '4px solid #27ae60'
                            }}>
                                <p style={{margin: '0', fontSize: '13px', fontWeight: 'bold', color: '#2c3e50'}}>
                                    4. Calculer l'énergie consommée pour :
                                </p>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr 1fr',
                                    gap: '10px',
                                    marginTop: '10px'
                                }}>
                                    <div>
                                        <p style={{margin: '5px 0', fontSize: '11px', fontWeight: 'bold'}}>• 1 heure
                                            :</p>
                                        <div className="answer-line" style={{
                                            borderBottom: '1px dashed #ccc',
                                            paddingBottom: '4px',
                                            minHeight: '20px'
                                        }}>
                                            {showCorrections.question4_1h && (
                                                <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                                    {correctAnswers.question4_1h}
                                                </span>
                                            )}
                                        </div>
                                        <div className="answer-line" style={{
                                            borderBottom: '1px dashed #ccc',
                                            paddingBottom: '4px',
                                            minHeight: '20px'
                                        }}>
                                            {showCorrections.question4_24h && (
                                                <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                                    {correctAnswers.question4_24h}
                                                </span>
                                            )}
                                        </div>
                                        <div className="answer-line" style={{
                                            borderBottom: '1px dashed #ccc',
                                            paddingBottom: '4px',
                                            minHeight: '20px'
                                        }}>
                                            {showCorrections.question4_24h && (
                                                <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                                    {correctAnswers.question4_24h}
                                                </span>
                                            )}
                                        </div>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question4_1h')}
                                            style={{
                                                padding: '2px 6px',
                                                fontSize: '10px',
                                                backgroundColor: showCorrections.question4_1h ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                marginTop: '5px'
                                            }}
                                        >
                                            {showCorrections.question4_1h ? '✕' : '✓'}
                                        </button>
                                    </div>

                                    <div>
                                        <p style={{margin: '5px 0', fontSize: '11px', fontWeight: 'bold'}}>• 24 heures
                                            :</p>
                                        <div className="answer-line" style={{
                                            borderBottom: '1px dashed #ccc',
                                            paddingBottom: '4px',
                                            minHeight: '20px'
                                        }}>
                                            {showCorrections.question4_24h && (
                                                <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                                    {correctAnswers.question4_24h}
                                                </span>
                                            )}
                                        </div>
                                        <div className="answer-line" style={{
                                            borderBottom: '1px dashed #ccc',
                                            paddingBottom: '4px',
                                            minHeight: '20px'
                                        }}>
                                            {showCorrections.question4_24h && (
                                                <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                                    {correctAnswers.question4_24h}
                                                </span>
                                            )}
                                        </div>
                                        <div className="answer-line" style={{
                                            borderBottom: '1px dashed #ccc',
                                            paddingBottom: '4px',
                                            minHeight: '20px'
                                        }}>
                                            {showCorrections.question4_24h && (
                                                <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                                    {correctAnswers.question4_24h}
                                                </span>
                                            )}
                                        </div>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question4_24h')}
                                            style={{
                                                padding: '2px 6px',
                                                fontSize: '10px',
                                                backgroundColor: showCorrections.question4_24h ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                marginTop: '5px'
                                            }}
                                        >
                                            {showCorrections.question4_24h ? '✕' : '✓'}
                                        </button>
                                    </div>

                                    <div>
                                        <p style={{margin: '5px 0', fontSize: '11px', fontWeight: 'bold'}}>• 365 jours
                                            :</p>
                                        <div className="answer-line" style={{
                                            borderBottom: '1px dashed #ccc',
                                            paddingBottom: '4px',
                                            minHeight: '20px'
                                        }}>
                                            {showCorrections.question4_365j && (
                                                <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                                    {correctAnswers.question4_365j}
                                                </span>
                                            )}
                                        </div>
                                        <div className="answer-line" style={{
                                            borderBottom: '1px dashed #ccc',
                                            paddingBottom: '4px',
                                            minHeight: '20px'
                                        }}>
                                            {showCorrections.question4_24h && (
                                                <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                                    {correctAnswers.question4_24h}
                                                </span>
                                            )}
                                        </div>
                                        <div className="answer-line" style={{
                                            borderBottom: '1px dashed #ccc',
                                            paddingBottom: '4px',
                                            minHeight: '20px'
                                        }}>
                                            {showCorrections.question4_24h && (
                                                <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                                    {correctAnswers.question4_24h}
                                                </span>
                                            )}
                                        </div>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question4_365j')}
                                            style={{
                                                padding: '2px 6px',
                                                fontSize: '10px',
                                                backgroundColor: showCorrections.question4_365j ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                marginTop: '5px'
                                            }}
                                        >
                                            {showCorrections.question4_365j ? '✕' : '✓'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* QUESTION 5 */}
                            <div className="question-item" style={{
                                padding: '10px',
                                backgroundColor: 'rgba(255,240,240,0.1)',
                                borderRadius: '8px',
                                borderLeft: '4px solid #e74c3c',
                                marginTop: '15px'
                            }}>
                                <p style={{margin: '0', fontSize: '13px', fontWeight: 'bold', color: '#2c3e50'}}>
                                    5. Lucas a-t-il raison ? Justifiez votre réponse.
                                </p>
                                <div className="answer-line" style={{
                                    borderBottom: '1px dashed #ccc',
                                    marginTop: '8px',
                                    paddingBottom: '4px',
                                    minHeight: '60px'
                                }}>
                                    {showCorrections.question5 && (
                                        <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                            {correctAnswers.question5}
                                        </span>
                                    )}
                                </div>
                                <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question5')}
                                        style={{
                                            padding: '4px 8px',
                                            fontSize: '11px',
                                            backgroundColor: showCorrections.question5 ? '#e74c3c' : '#2ecc71',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <FaCheck style={{marginRight: '4px'}}/>
                                        {showCorrections.question5 ? '✕ Cacher' : '✓ Voir'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PAGE 2 - QCM OPTIMISÉ AVEC 4 QUESTIONS SUPPLEMENTAIRES */}
                <div className="print-page">
                    <div className="question-card mt-0 mb-0" style={{
                        backgroundColor: '#ffffff',
                        border: '2px solid #9b59b6',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div className="question-content">
                            <h4 className="vect-title" style={{color: '#9b59b6'}}>
                                <span>Partie 2 : QCM - Électricité </span>
                            </h4>

                            <div className="questions-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '10px',
                            }}>

                                {[
                                    {
                                        question: "1. La relation entre énergie E, puissance P et temps t est :",
                                        options: ["P = E × t", "E = P × t", "E = W × t"],
                                        correct: "E = P × t",
                                        key: "qcm1"
                                    },
                                    {
                                        question: "2. L'unité de l'énergie électrique couramment utilisée est :",
                                        options: ["le watt", "le kilowattheure", "le volt"],
                                        correct: "le kilowattheure",
                                        key: "qcm2"
                                    },
                                    {
                                        question: "3. La relation entre puissance P, tension U et intensité I est :",
                                        options: ["P = U + I", "P = U × I", "P = U / I"],
                                        correct: "P = U × I",
                                        key: "qcm3"
                                    },
                                    {
                                        question: "4. La puissance s'exprime en :",
                                        options: ["watt", "joule", "ampère"],
                                        correct: "watt",
                                        key: "qcm4"
                                    },
                                    {
                                        question: "5. Un appareil de 1000 W fonctionne pendant 2 h. L'énergie consommée est :",
                                        options: ["500 Wh", "2 kWh", "2000 J"],
                                        correct: "2 kWh",
                                        key: "qcm5"
                                    },
                                    {
                                        question: "6. L'énergie électrique se mesure avec :",
                                        options: ["un voltmètre", "un compteur d'énergie", "un ampèremètre"],
                                        correct: "un compteur d'énergie",
                                        key: "qcm6"
                                    },
                                    {
                                        question: "7. 1 kWh équivaut à :",
                                        options: ["1000 J", "3600 J", "3 600 000 J"],
                                        correct: "3 600 000 J",
                                        key: "qcm7"
                                    },
                                    {
                                        question: "8. La tension électrique se mesure avec :",
                                        options: ["un voltmètre", "un ampèremètre", "un ohmmètre"],
                                        correct: "un voltmètre",
                                        key: "qcm8"
                                    },
                                    {
                                        question: "9. L'intensité du courant se mesure en :",
                                        options: ["volt", "ampère", "watt"],
                                        correct: "ampère",
                                        key: "qcm9"
                                    },
                                    {
                                        question: "10. Pour mesurer l'intensité dans un circuit, on branche l'ampèremètre :",
                                        options: ["en parallèle", "en série", "en dérivation"],
                                        correct: "en série",
                                        key: "qcm10"
                                    },
                                    {
                                        question: "11. Un circuit électrique simple est composé de :",
                                        options: ["un générateur, des fils, une lampe", "un interrupteur seulement", "des fils uniquement"],
                                        correct: "un générateur, des fils, une lampe",
                                        key: "qcm11"
                                    },
                                    {
                                        question: "12. La sécurité électrique impose de :",
                                        options: ["toujours couper le courant avant intervention", "travailler avec les mains mouillées", "ignorer les fusibles"],
                                        correct: "toujours couper le courant avant intervention",
                                        key: "qcm12"
                                    },
                                    {
                                        question: "13. Quand un appareil est éteint mais branché :",
                                        options: ["il ne consomme pas d'énergie", "il consomme un peu d'énergie", "il consomme autant qu'allumé"],
                                        correct: "il consomme un peu d'énergie",
                                        key: "qcm13"
                                    },
                                    {
                                        question: "14. Pour économiser l'énergie électrique, il faut :",
                                        options: ["éteindre les lumières inutiles", "laisser tous les appareils en veille", "utiliser plus d'appareils"],
                                        correct: "éteindre les lumières inutiles",
                                        key: "qcm14"
                                    },
                                    // NOUVELLES QUESTIONS SUPPLEMENTAIRES FACILES
                                    {
                                        question: "15. Le voyant rouge d'un appareil en veille indique que :",
                                        options: ["l'appareil consomme un peu d'électricité", "l'appareil est complètement éteint", "l'appareil est en surchauffe"],
                                        correct: "l'appareil consomme un peu d'électricité",
                                        key: "qcm15"
                                    },
                                    {
                                        question: "16. Pour éviter la consommation inutile, il vaut mieux :",
                                        options: ["débrancher les chargeurs inutilisés", "laisser tous les appareils branchés", "utiliser des multiprises sans interrupteur"],
                                        correct: "débrancher les chargeurs inutilisés",
                                        key: "qcm16"
                                    },
                                    {
                                        question: "17. Un chauffage d'appoint consomme plus d'énergie quand :",
                                        options: ["il fonctionne à pleine puissance", "il est éteint", "il est débranché"],
                                        correct: "il fonctionne à pleine puissance",
                                        key: "qcm17"
                                    },
                                    {
                                        question: "18. La fonction 'veille' d'un appareil électrique permet :",
                                        options: ["de consommer moins que quand il est allumé", "de consommer plus d'énergie", "d'arrêter complètement la consommation"],
                                        correct: "de consommer moins que quand il est allumé",
                                        key: "qcm18"
                                    }
                                ].map((qcm, index) => (
                                    <div key={qcm.key} className="question-item" style={{
                                        padding: '8px',
                                        backgroundColor: index % 2 === 0 ? 'rgba(245,245,255,0.1)' : 'rgba(250,245,255,0.1)',
                                        borderRadius: '6px',
                                        borderLeft: '3px solid #9b59b6',
                                        pageBreakInside: 'avoid',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                        <div>
                                            <p style={{
                                                margin: '0 0 6px 0',
                                                fontSize: '13px',
                                                fontWeight: 'bold',
                                                color: '#2c3e50',
                                                lineHeight: '1.2'
                                            }}>
                                                {qcm.question}
                                            </p>

                                            <div style={{marginTop: '4px'}}>
                                                {qcm.options.map((option, optIndex) => (
                                                    <label key={optIndex} style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        marginBottom: '3px',
                                                        fontSize: '13px',
                                                        cursor: 'pointer',
                                                        lineHeight: '1.4'
                                                    }}>
                                                        <input
                                                            type="radio"
                                                            name={qcm.key}
                                                            value={option}
                                                            onChange={(e) => handleQCMChange(qcm.key, e.target.value)}
                                                            style={{
                                                                marginRight: '6px',
                                                                transform: 'scale(0.8)'
                                                            }}
                                                        />
                                                        {option}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Bouton de correction */}
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            marginTop: '8px'
                                        }}>
                                            <button
                                                className="correction-btnoptic"
                                                onClick={() => toggleCorrection(qcm.key)}
                                                style={{
                                                    padding: '4px 8px',
                                                    fontSize: '11px',
                                                    backgroundColor: showCorrections[qcm.key] ? '#e74c3c' : '#2ecc71',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                <FaCheck style={{marginRight: '4px'}}/>
                                                {showCorrections[qcm.key] ? '✕ Cacher' : '✓ Voir'}
                                            </button>
                                        </div>

                                        {/* Correction affichée */}
                                        {showCorrections[qcm.key] && (
                                            <div style={{
                                                marginTop: '8px',
                                                padding: '6px',
                                                backgroundColor: '#d4edda',
                                                border: '1px solid #c3e6cb',
                                                borderRadius: '4px'
                                            }}>
                                <span style={{
                                    color: '#155724',
                                    fontWeight: 'bold',
                                    fontSize: '11px'
                                }}>
                                    ✓ Réponse correcte : {qcm.correct}
                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="question-content">


                            <table style={{
                                width: '100%',
                                fontSize: '9px',
                                borderCollapse: 'collapse',
                                marginTop: '5px'
                            }}>
                                <thead>
                                <tr style={{backgroundColor: '#f8f9fa'}}>
                                    <th style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        textAlign: 'left',
                                        width: '25%'
                                    }}>Compétence
                                    </th>
                                    <th style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        textAlign: 'left',
                                        width: '60%'
                                    }}>Critères
                                    </th>
                                    <th style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        textAlign: 'center',
                                        width: '15%'
                                    }}>Note
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        fontSize: '9px'
                                    }}><strong>S'approprier</strong>
                                    </td>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        fontSize: '9px',
                                        lineHeight: '1.2'
                                    }}>Identification des informations utiles
                                    </td>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        textAlign: 'center',
                                        fontSize: '9px'
                                    }}>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        fontSize: '9px'
                                    }}><strong>Analyser</strong>
                                    </td>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        fontSize: '9px',
                                        lineHeight: '1.2'
                                    }}>Traduction en calculs appropriés
                                    </td>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        textAlign: 'center',
                                        fontSize: '9px'
                                    }}>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        fontSize: '9px'
                                    }}><strong>Réaliser</strong>
                                    </td>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        fontSize: '9px',
                                        lineHeight: '1.2'
                                    }}>Résolution des calculs énergétiques
                                    </td>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        textAlign: 'center',
                                        fontSize: '9px'
                                    }}>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        fontSize: '9px'
                                    }}><strong>Valider</strong>
                                    </td>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        fontSize: '9px',
                                        lineHeight: '1.2'
                                    }}>Vérification de la cohérence
                                    </td>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        textAlign: 'center',
                                        fontSize: '9px'
                                    }}>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        fontSize: '9px'
                                    }}><strong>Communiquer</strong>
                                    </td>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        fontSize: '9px',
                                        lineHeight: '1.2'
                                    }}>Rédaction claire et complète
                                    </td>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        textAlign: 'center',
                                        fontSize: '9px'
                                    }}>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        fontSize: '9px'
                                    }}><strong>QCM Électricité</strong>
                                    </td>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        fontSize: '9px',
                                        lineHeight: '1.2'
                                    }}>Questions sur les bases de l'électricité
                                    </td>
                                    <td style={{
                                        border: '1px solid #ddd',
                                        padding: '6px',
                                        textAlign: 'center',
                                        fontSize: '9px'
                                    }}>/10
                                    </td>
                                </tr>
                                </tbody>
                            </table>

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

export default EvaElectriciteChauffage;
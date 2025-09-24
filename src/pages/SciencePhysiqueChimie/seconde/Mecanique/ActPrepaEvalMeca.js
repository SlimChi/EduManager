import React, {useRef, useState} from 'react';
import {FaPlay, FaVideo, FaRuler, FaMapMarkerAlt, FaCheck, FaCalculator} from 'react-icons/fa';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import '../../../../styles/activites.css';
import {useLocation, useParams} from "react-router-dom";
import BackButton from "../../../../components/navigation/BackButton";
import PrintManager from "../../../../utils/PrintManager";
import Automatismes2 from "../../../../config/Automatismes2";
import ModalImage from "../../../../utils/ModalImage";
import mirageImage from "../../../../assets/mirage-f1.png";

const ActPrepaEvalMeca = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    const [answers, setAnswers] = useState({
        question1_2: '',
        question1_3: '',
        question2_2a: '',
        question2_2b: '',
        question2_3: '',
        question4_1: '',
        question4_2: '',
        question4_3: '',
        question4_4: '',
        question4_5: '',
        question4_6: '',
        question5_1: '',
        question5_2: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        question1_2: false,
        question1_3: false,
        question2_2a: false,
        question2_2b: false,
        question2_3: false,
        question4_1: false,
        question4_2: false,
        question4_3: false,
        question4_4: false,
        question4_5: false,
        question4_6: false,
        question5_1: false,
        question5_2: false
    });

// Réponses attendues adaptées selon les corrections
    const correctAnswers = {
        question1_2: "Dans le référentiel terrestre, les Mirages se déplacent en ligne droite.",
        question1_3: "Le mouvement des Mirages est apparemment uniforme car leur vitesse semble constante.",
        question2_2a: "Il y a 26 images.",
        question2_2b: "Δt = 26 / 24 = 1,08 s",
        question2_3: "v = 500 / 1,08 ≃ 463 m/s, soit 1 667 km/h.",
        question4_1: "Le référentiel utilisé est le référentiel terrestre.",
        question4_2: "Le système étudié est le Mirage.",
        question4_3: "La trajectoire du système est une droite.",
        question4_4: "Les positions successives semblent régulièrement espacées.",
        question4_5: "La vitesse est constante.",
        question4_6: "L'hypothèse est validée. Le mouvement est rectiligne et uniforme.",
        question5_1: "Dans le référentiel terrestre, la trajectoire des Mirages est rectiligne car les points successifs sont alignés.",
        question5_2: "Il s'agit d'un mouvement rectiligne uniforme."
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

    if (className === 'ClasseNonDisponible') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>
            <div className="tp-container" id="meca-eval-content" ref={contentRef}>
                <PrintManager
                    contentRef={contentRef}
                    activityName="Evaluation_Mecanique_Mirage"
                    pageCount={2}
                    quality="hd"
                />

                {/* PAGE 1 */}
                <div className="print-page">
                    <div style={{marginTop: '-10px'}}>
                        <Automatismes2/>
                    </div>

                    <div className="activity-header mt-0">
                        <div className="activity-title">
                            <span className="course-title">
                                <FaVideo/> « Comment étudier le mouvement d'un Mirage ? »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '350px'}}>
                            <div className="renovation-contexte">
                                <h5 className="mb-3 text-primary fw-bold">
                                    ✈️ "Analyse du mouvement des Mirages F1"
                                </h5>

                                <p style={{textAlign: 'justify', fontSize: '12px', lineHeight: '1.3'}}>
                                    Arthur a filmé le vol des Mirages F1 lors du défilé militaire du 14 juillet.
                                    Le Mirage est un avion de chasse français de 15 m de long.
                                    Arthur prétend que sur la vidéo, les Mirages décrivent dans le référentiel terrestre
                                    un mouvement rectiligne uniforme. Arthur a-t-il raison ?
                                </p>

                                <div className="objectif-box" style={{
                                    marginTop: '10px',
                                    padding: '12px',
                                    backgroundColor: '#e8f4fd',
                                    border: '1px solid #b3d9ff',
                                    borderRadius: '8px'
                                }}>
                                    <div className="objectif-title" style={{fontSize: '12px', color: '#0066cc'}}>
                                        <strong style={{color: '#004d99'}}>Objectif :</strong> 🎯 Analyser un mouvement
                                        à partir d'une vidéo et valider une hypothèse sur la nature du mouvement.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0" style={{maxWidth: '200px', cursor: 'pointer'}}>
                            <img src={mirageImage}
                                 alt="Mirage F1 en vol"
                                 className="img-fluid rounded shadow-sm compact-img"
                                 onClick={() => openModal(mirageImage, "Mirage F1 en vol")}
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
                                <span>Question 1 : Observation préliminaire</span>
                            </h4>

                            <div className="question-item" style={{
                                padding: '10px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '8px',
                                borderLeft: '4px solid #4a90e2',
                                marginBottom: '15px'
                            }}>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: 'bold', color: '#2c3e50'}}>
                                    1.1. Visionnez la vidéo mirages.avi.
                                </p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: 'bold', color: '#2c3e50'}}>
                                    1.2. Décrivez la trajectoire des Mirages si l'on se place dans le référentiel
                                    terrestre.
                                </p>
                                <div className="answer-line" style={{
                                    borderBottom: '1px dashed #ccc',
                                    marginTop: '8px',
                                    paddingBottom: '4px',
                                    minHeight: '60px'
                                }}>
                                    {showCorrections.question1_2 && (
                                        <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                            {correctAnswers.question1_2}
                                        </span>
                                    )}
                                </div>
                                <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question1_2')}
                                        style={{
                                            padding: '4px 8px',
                                            fontSize: '12px',
                                            backgroundColor: showCorrections.question1_2 ? '#e74c3c' : '#2ecc71',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <FaCheck style={{marginRight: '4px'}}/>
                                        {showCorrections.question1_2 ? '✕ Cacher' : '✓ Voir'}
                                    </button>
                                </div>

                                <p style={{
                                    margin: '15px 0 5px 0',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    color: '#2c3e50'
                                }}>
                                    1.3. Dans le référentiel terrestre, le mouvement des Mirages semble-t-il être
                                    accéléré,
                                    ralenti ou uniforme ? Justifiez votre choix.
                                </p>
                                <div className="answer-line" style={{
                                    borderBottom: '1px dashed #ccc',
                                    marginTop: '8px',
                                    paddingBottom: '4px',
                                    minHeight: '80px'
                                }}>
                                    {showCorrections.question1_3 && (
                                        <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '11px'}}>
                                            {correctAnswers.question1_3}
                                        </span>
                                    )}
                                </div>
                                <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question1_3')}
                                        style={{
                                            padding: '4px 8px',
                                            fontSize: '12px',
                                            backgroundColor: showCorrections.question1_3 ? '#e74c3c' : '#2ecc71',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <FaCheck style={{marginRight: '4px'}}/>
                                        {showCorrections.question1_3 ? '✕ Cacher' : '✓ Voir'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* QUESTION 2 */}
                    <div className="question-card mt-3 mb-0" style={{
                        backgroundColor: '#ffffff',
                        border: '2px solid #e67e22',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div className="question-content">
                            <h4 className="vect-title" style={{color: '#e67e22'}}>
                                <span>Question 2 : Analyse quantitative</span>
                            </h4>

                            <div className="questions-grid">

                                <div className="question-item" style={{
                                    padding: '10px',
                                    backgroundColor: 'rgba(255,250,240,0.1)',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #e67e22',
                                    pageBreakInside: 'avoid'
                                }}>
                                    <p style={{margin: '0', fontSize: '12px', fontWeight: 'bold', color: '#2c3e50'}}>
                                        2.2. a) Relevez le nombre d'images dans cette vidéo.
                                    </p>
                                    <div className="answer-line" style={{
                                        borderBottom: '1px dashed #ccc',
                                        marginTop: '8px',
                                        paddingBottom: '4px',
                                        minHeight: '25px'
                                    }}>
                                        {showCorrections.question2_2a && (
                                            <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '12px'}}>
                                                {correctAnswers.question2_2a}
                                            </span>
                                        )}
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '8px'}}>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question2_2a')}
                                            style={{
                                                padding: '4px 8px',
                                                fontSize: '12px',
                                                backgroundColor: showCorrections.question2_2a ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <FaCheck style={{marginRight: '4px'}}/>
                                            {showCorrections.question2_2a ? '✕ Cacher' : '✓ Voir'}
                                        </button>
                                    </div>

                                    <p style={{margin: '0', fontSize: '12px', fontWeight: 'bold', color: '#2c3e50'}}>
                                        b) Sachant que cette vidéo comprend 24 images par seconde, calculez sa durée Δt
                                    </p>
                                    <div className="answer-line" style={{
                                        borderBottom: '1px dashed #ccc',
                                        marginTop: '8px',
                                        paddingBottom: '4px',
                                        minHeight: '25px'
                                    }}>
                                        {showCorrections.question2_2b && (
                                            <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '12px'}}>
                                                {correctAnswers.question2_2b}
                                            </span>
                                        )}
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '8px'}}>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question2_2b')}
                                            style={{
                                                padding: '4px 8px',
                                                fontSize: '12px',
                                                backgroundColor: showCorrections.question2_2b ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <FaCheck style={{marginRight: '4px'}}/>
                                            {showCorrections.question2_2b ? '✕ Cacher' : '✓ Voir'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="question-item" style={{
                                padding: '10px',
                                backgroundColor: 'rgba(255,250,240,0.15)',
                                borderRadius: '8px',
                                borderLeft: '4px solid #e67e22',
                                marginTop: '15px',
                                pageBreakInside: 'avoid'
                            }}>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: 'bold', color: '#2c3e50'}}>
                                    2.3. Sur la vidéo, les Mirages parcourent 500m. Calculez leur vitesse moyenne v,
                                    en m/s puis en km/h.
                                </p>
                                <div className="answer-line" style={{
                                    borderBottom: '1px dashed #ccc',
                                    marginTop: '8px',
                                    paddingBottom: '4px',
                                    minHeight: '40px'
                                }}>
                                    {showCorrections.question2_3 && (
                                        <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '12px'}}>
                                            {correctAnswers.question2_3}
                                        </span>
                                    )}
                                </div>
                                <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question2_3')}
                                        style={{
                                            padding: '4px 8px',
                                            fontSize: '12px',
                                            backgroundColor: showCorrections.question2_3 ? '#e74c3c' : '#2ecc71',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <FaCheck style={{marginRight: '4px'}}/>
                                        {showCorrections.question2_3 ? '✕ Cacher' : '✓ Voir'}
                                    </button>
                                </div>
                            </div>

                            <div style={{
                                backgroundColor: '#fff3cd',
                                border: '1px solid #ffeaa7',
                                borderRadius: '6px',
                                padding: '8px',
                                marginTop: '10px'
                            }}>
                                <p style={{margin: '0', fontSize: '11px', color: '#856404', fontStyle: 'italic'}}>
                                    <strong>Appel 1 :</strong> Appelez le professeur pour présenter vos réponses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PAGE 2 */}
                <div className="print-page">
                    {/* QUESTION 3 */}
                    <div className="question-card mt-3 mb-0" style={{
                        backgroundColor: '#ffffff',
                        border: '2px solid #27ae60',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div className="question-content">
                            <h4 className="vect-title" style={{color: '#27ae60'}}>
                                <span>Question 3 : Utilisation du logiciel PyMecaVideo</span>
                            </h4>

                            <div className="question-item" style={{
                                padding: '10px',
                                backgroundColor: 'rgba(240,255,240,0.1)',
                                borderRadius: '8px',
                                borderLeft: '4px solid #27ae60'
                            }}>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: 'bold', color: '#2c3e50'}}>
                                    3.1. Lancez le logiciel PyMecaVideo et ouvrez la video mirages.avi.
                                </p>
                                <p style={{
                                    margin: '10px 0 5px 0',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    color: '#2c3e50'
                                }}>
                                    3.2. Choisissez comme origine du repère l'extrémité d'une aile d'un des avions.
                                </p>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: 'bold', color: '#2c3e50'}}>
                                    3.3. Définissez l'échelle en utilisant la longueur d'un avion.
                                </p>
                                <p style={{margin: '5px 0', fontSize: '11px', fontWeight: 'bold', color: '#2c3e50'}}>
                                    3.4. Repérez les positions successives de l'extrémité de l'aile.
                                </p>

                                <div style={{
                                    backgroundColor: '#d4edda',
                                    border: '1px solid #c3e6cb',
                                    borderRadius: '6px',
                                    padding: '8px',
                                    marginTop: '10px'
                                }}>
                                    <p style={{margin: '0', fontSize: '11px', color: '#155724', fontStyle: 'italic'}}>
                                        <strong>Appel 2 :</strong> Appelez le professeur pour présenter votre travail.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* QUESTION 4 */}
                    <div className="question-card mt-3 mb-0" style={{
                        backgroundColor: '#ffffff',
                        border: '2px solid #9b59b6',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div className="question-content">
                            <h4 className="vect-title" style={{color: '#9b59b6'}}>
                                <span>Question 4 : Analyse des résultats</span>
                            </h4>

                            <div className="questions-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gap: '10px',
                                marginTop: '15px'
                            }}>

                                {[
                                    {key: 'question4_1', label: '4.1. Quel est le référentiel d\'étude du mouvement ?'},
                                    {key: 'question4_2', label: '4.2. Quel est le système mécanique étudié ?'},
                                    {
                                        key: 'question4_3',
                                        label: '4.3. Quelle est la forme de la trajectoire de ce système ?'
                                    },
                                    {
                                        key: 'question4_4',
                                        label: '4.4. Les positions successives du système sont-elles régulièrement espacées, de plus en plus proches ou de plus en plus éloignées ?'
                                    },
                                    {
                                        key: 'question4_5',
                                        label: '4.5. Comment évolue la vitesse en fonction du temps ?'
                                    },
                                    {
                                        key: 'question4_6',
                                        label: '4.6. Votre hypothèse de départ est-elle validée ? Justifiez la réponse.'
                                    }
                                ].map((item, index) => (
                                    <div key={item.key} className="question-item" style={{
                                        padding: '10px',
                                        backgroundColor: index % 2 === 0 ? 'rgba(245,245,255,0.1)' : 'rgba(250,245,255,0.1)',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #9b59b6',
                                        pageBreakInside: 'avoid'
                                    }}>
                                        <p style={{
                                            margin: '0',
                                            fontSize: '12px',
                                            fontWeight: 'bold',
                                            color: '#2c3e50'
                                        }}>
                                            {item.label}
                                        </p>
                                        <div className="answer-line" style={{
                                            borderBottom: '1px dashed #ccc',
                                            marginTop: '8px',
                                            paddingBottom: '4px',
                                            minHeight: item.key === 'question4_6' ? '60px' : '30px'
                                        }}>
                                            {showCorrections[item.key] && (
                                                <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '12px'}}>
                                                    {correctAnswers[item.key]}
                                                </span>
                                            )}
                                        </div>
                                        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '8px'}}>
                                            <button
                                                className="correction-btnoptic"
                                                onClick={() => toggleCorrection(item.key)}
                                                style={{
                                                    padding: '4px 8px',
                                                    fontSize: '12px',
                                                    backgroundColor: showCorrections[item.key] ? '#e74c3c' : '#2ecc71',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                <FaCheck style={{marginRight: '4px'}}/>
                                                {showCorrections[item.key] ? '✕ Cacher' : '✓ Voir'}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* QUESTION 5 */}
                    <div className="question-card mt-3 mb-0" style={{
                        backgroundColor: '#ffffff',
                        border: '2px solid #e74c3c',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div className="question-content">
                            <h4 className="vect-title" style={{color: '#e74c3c'}}>
                                <span>Question 5 : Conclusion</span>
                            </h4>

                            <div className="questions-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gap: '15px',
                                marginTop: '15px'
                            }}>

                                <div className="question-item" style={{
                                    padding: '10px',
                                    backgroundColor: 'rgba(255,240,240,0.1)',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #e74c3c',
                                    pageBreakInside: 'avoid'
                                }}>
                                    <p style={{margin: '0', fontSize: '12px', fontWeight: 'bold', color: '#2c3e50'}}>
                                        5.1. Quelle est la trajectoire des Mirages dans le référentiel terrestre ?
                                        Justifiez la réponse.
                                    </p>
                                    <div className="answer-line" style={{
                                        borderBottom: '1px dashed #ccc',
                                        marginTop: '8px',
                                        paddingBottom: '4px',
                                        minHeight: '60px'
                                    }}>
                                        {showCorrections.question5_1 && (
                                            <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '12px'}}>
                                                {correctAnswers.question5_1}
                                            </span>
                                        )}
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '8px'}}>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question5_1')}
                                            style={{
                                                padding: '4px 8px',
                                                fontSize: '12px',
                                                backgroundColor: showCorrections.question5_1 ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <FaCheck style={{marginRight: '4px'}}/>
                                            {showCorrections.question5_1 ? '✕ Cacher' : '✓ Voir'}
                                        </button>
                                    </div>
                                </div>

                                <div className="question-item" style={{
                                    padding: '10px',
                                    backgroundColor: 'rgba(255,240,240,0.15)',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #e74c3c',
                                    pageBreakInside: 'avoid'
                                }}>
                                    <p style={{margin: '0', fontSize: '12px', fontWeight: 'bold', color: '#2c3e50'}}>
                                        5.2. Quelle est la nature du mouvement des Mirages ?
                                    </p>
                                    <div className="answer-line" style={{
                                        borderBottom: '1px dashed #ccc',
                                        marginTop: '8px',
                                        paddingBottom: '4px',
                                        minHeight: '60px'
                                    }}>
                                        {showCorrections.question5_2 && (
                                            <span style={{color: '#27ae60', fontWeight: 'bold', fontSize: '12px'}}>
                                                {correctAnswers.question5_2}
                                            </span>
                                        )}
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '8px'}}>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question5_2')}
                                            style={{
                                                padding: '4px 8px',
                                                fontSize: '12px',
                                                backgroundColor: showCorrections.question5_2 ? '#e74c3c' : '#2ecc71',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <FaCheck style={{marginRight: '4px'}}/>
                                            {showCorrections.question5_2 ? '✕ Cacher' : '✓ Voir'}
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

export default ActPrepaEvalMeca;
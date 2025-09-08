import React, {useRef, useState} from 'react';
import {
    FaCheck,
    FaExclamationTriangle,
    FaTrash,
    FaShieldAlt,
    FaFire,
    FaFlask,
    FaEye,
    FaHands,
    FaHeadSideMask,
    FaFirstAid
} from 'react-icons/fa';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";

// Images
import tousPictogrammes from "../../../../assets/tous-pictogrammes.png";
import dechetsChimiques from "../../../../assets/dechetsChimiques.png";
import epiComplet from "../../../../assets/epiComplet.png";
import accident from "../../../../assets/tous-pictogrammes.png";
import Automatismes2 from "../../../../config/Automatismes2";

const PictoSecuriteSeconde = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const contentRef = useRef();

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        question1: '', question2: '', question3: '', question4: '', question5: '', question6: '',
        question7: '', question8: '', question9: '', question10: '', question11: '', question12: '',
        question13: '', question14: '', question15: '', question16: '', question17: '', question18: '',
        question19: '', question20: '', question21: '', question22: '', question23: '', question24: '',
        question25: '', question26: '', question27: '', question28: '', question29: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false,
        question6: false,
        question7: false,
        question8: false,
        question9: false,
        question10: false,
        question11: false,
        question12: false,
        question13: false,
        question14: false,
        question15: false,
        question16: false,
        question17: false,
        question18: false,
        question19: false,
        question20: false,
        question21: false,
        question22: false,
        question23: false,
        question24: false,
        question25: false,
        question26: false,
        question27: false,
        question28: false,
        question29: false
    });

    // Réponses attendues corrigées
    const correctAnswers = {
        question1: 'SGH01',
        question2: 'SGH02',
        question3: 'SGH03',
        question4: 'SGH04',
        question5: 'SGH05',
        question6: 'SGH06',
        question7: 'SGH07',
        question8: 'SGH08',
        question9: 'SGH09',
        question10: 'B) Porter des gants et des lunettes de protection.',
        question11: 'B) Elle me pousse à suivre des procédures de sécurité strictes.',
        question12: 'a) Conteneur spécifique pour déchets dangereux',
        question13: 'c) Ordures ménagères',
        question14: 'b) Conteneur de recyclage',
        question15: 'B) Pour protéger l\'environnement et éviter les risques de contamination',
        question16: 'A) Contamination croisée et risques pour la santé',
        question17: 'C) Le symbole de danger ou l\'étiquette sur l\'emballage',
        question18: 'C) La réglementation européenne REACH et la gestion des déchets dangereux',
        question19: 'B) Protéger les mains',
        question20: 'A) Protéger les yeux',
        question21: 'C) Protéger les voies respiratoires',
        question22: 'A) Des chaussures de sécurité et des casques.',
        question23: 'B) En protégeant les travailleurs contre les risques professionnels.',
        question24: 'B) En fournissant une formation régulière et des démonstrations pratiques.',
        question25: 'C) Tous les équipements de protection doivent être portés ensemble',
        question26: 'A) Avant chaque utilisation',
        question27: 'B) Les signaler immédiatement à son responsable',
        question28: 'C) Selon les instructions du fabricant et les procédures de l\'établissement',
        question29: 'A) Se laver soigneusement les mains après avoir retiré ses gants'
    };

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));
        if (!answers[field] && !showCorrections[field]) {
            setAnswers((prev) => ({...prev, [field]: correctAnswers[field]}));
        }
    };

    if (className === 'Seconde-securite-act1') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" id="securite-content" ref={contentRef}>
            <PrintManager contentRef={contentRef} activityName="Securite_Pictogrammes" pageCount={4} quality="hd"/>

            {/* PAGE 1 - COUVERTURE */}
            <div className="print-page">
                <div className="cover-page" style={{
                    padding: '1.5rem',
                    background: 'linear-gradient(135deg, #fff3e0 0%, #ffffff 50%, #ffe0b2 50%, white 50%, white 100%)',
                    borderRadius: '8px',
                    fontFamily: 'Roboto, sans-serif'
                }}>
                    {/* En-tête */}
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '2rem',
                        padding: '2rem',
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 6px 12px rgba(255, 152, 0, 0.2)'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '1rem'
                        }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundColor: '#ff9800',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '2.5rem',
                                boxShadow: '0 4px 8px rgba(255, 152, 0, 0.3)'
                            }}>
                                ⚠️
                            </div>
                        </div>

                        <h1 style={{
                            color: '#e65100',
                            fontSize: '2rem',
                            fontWeight: '700',
                            marginBottom: '0.5rem'
                        }}>
                            SÉCURITÉ EN LABORATOIRE
                        </h1>

                        <h2 style={{
                            color: '#ff9800',
                            fontSize: '1.5rem',
                            fontWeight: '500',
                            marginBottom: '1.5rem'
                        }}>
                            Classe de Seconde Professionnelle
                        </h2>

                        <div style={{
                            height: '3px',
                            width: '80px',
                            backgroundColor: '##ff9800',
                            margin: '0 auto 1.5rem',
                            borderRadius: '3px'
                        }}></div>

                        <p style={{
                            color: '#546e7a',
                            fontSize: '1.1rem',
                            marginBottom: '2rem',
                            lineHeight: '1.6'
                        }}>
                            Apprendre à travailler en toute sécurité avec les produits chimiques
                        </p>
                    </div>

                    {/* Objectifs de formation */}
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        marginBottom: '2rem'
                    }}>
                        <h3 style={{
                            color: '#e65100',
                            textAlign: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            Objectifs de formation
                        </h3>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '15px'
                        }}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{marginRight: '10px', color: '#ff9800', fontSize: '1.2rem'}}>⚠️</span>
                                <span>Identifier les pictogrammes de sécurité</span>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{marginRight: '10px', color: '#ff9800', fontSize: '1.2rem'}}>♻️</span>
                                <span>Appliquer les règles de tri sélectif</span>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{marginRight: '10px', color: '#ff9800', fontSize: '1.2rem'}}>🛡️</span>
                                <span>Utiliser les équipements de protection</span>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{marginRight: '10px', color: '#ff9800', fontSize: '1.2rem'}}>🚨</span>
                                <span>Réagir face aux situations à risque</span>
                            </div>
                        </div>
                    </div>

                    {/* Compétences travaillées */}
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        marginBottom: '2rem'
                    }}>
                        <h3 style={{
                            color: '#e65100',
                            textAlign: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            Compétences développées
                        </h3>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '15px'
                        }}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{marginRight: '10px', color: '#ff9800'}}>🔍</span>
                                <span>S'approprier</span>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{marginRight: '10px', color: '#ff9800'}}>🧠</span>
                                <span>Analyser & Raisonner</span>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{marginRight: '10px', color: '#ff9800'}}>🔧</span>
                                <span>Réaliser</span>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{marginRight: '10px', color: '#ff9800'}}>✅</span>
                                <span>Valider</span>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{marginRight: '10px', color: '#ff9800'}}>💬</span>
                                <span>Communiquer</span>
                            </div>
                        </div>
                    </div>

                    {/* Liens avec le programme */}
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        padding: '1rem',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h3 style={{
                            color: '#e65100',
                            textAlign: 'center',
                            marginBottom: '1.2rem'
                        }}>
                            Liens avec le programme
                        </h3>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '10px'
                        }}>
                            <div style={{
                                backgroundColor: '#fff3e0',
                                padding: '10px 15px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <span style={{marginRight: '5px'}}>🧪</span>
                                Chimie
                            </div>
                            <div style={{
                                backgroundColor: '#fff3e0',
                                padding: '10px 15px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <span style={{marginRight: '5px'}}>⚡</span>
                                Électricité
                            </div>
                            <div style={{
                                backgroundColor: '#fff3e0',
                                padding: '10px 15px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <span style={{marginRight: '5px'}}>🔊</span>
                                Acoustique
                            </div>
                            <div style={{
                                backgroundColor: '#fff3e0',
                                padding: '10px 15px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <span style={{marginRight: '5px'}}>💡</span>
                                Optique
                            </div>
                        </div>
                    </div>
                </div>
                <Automatismes2/>
            </div>

            {/* PAGE 2 - PICTOGRAMMES */}
            <div className="print-page">
                <section className="tp-section compact">
                    <div className="math-chapter-box orange" style={{padding: '10px', marginTop: '-10px'}}>
                        <h3 className="math-chapter-title-test mb-0">Module Sécurité: Pictogrammes Chimiques</h3>
                    </div>

                    <div className="activity-header mt-0">
                        <span className="activity-badge">ACTIVITÉ 1</span>
                        <div className="activity-title">
                            <span className="course-title"><FaExclamationTriangle/> Pictogrammes de sécurité</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-start flex-wrap" style={{gap: '15px', marginBottom: '15px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <h5 className="mb-2 text-primary fw-bold">⚠️ Identification des pictogrammes</h5>
                                <p style={{
                                    textAlign: 'justify',
                                    fontSize: '14px',
                                    lineHeight: '1.3',
                                    marginBottom: '10px'
                                }}>
                                    <p> Comment garantir la sécurité lors de l'utilisation de produits chimiques dans le
                                        cadre
                                        de votre travail en santé et services à la personne (ASSP),
                                        tout en respectant les règles de tri et en utilisant les équipements de
                                        protection
                                        adaptés ? </p>
                                    Pour chaque propriété chimique dangereuse, indiquez dans le tableau le numéro du
                                    pictogramme
                                    de sécurité correspondant (SGH01 à SGH09).
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0" style={{maxWidth: '350px'}}>
                            <img src={tousPictogrammes} alt="Tous les pictogrammes" className="img-fluid"
                                 style={{maxHeight: '450px'}}/>

                        </div>
                    </div>

                    {/* Tableau des pictogrammes avec image unique */}
                    <div className="question-card mt-0" style={{padding: '10px'}}>
                        <div className="row">

                            <div className="table-responsive">
                                <table className="table table-bordered" style={{fontSize: '12px'}}>
                                    <thead className="table-warning">
                                    <tr>
                                        <th style={{width: '30%'}}>Nature du danger</th>
                                        <th style={{width: '40%'}}>Description</th>
                                        <th style={{width: '30%'}}>Numéro SGH</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Explosif</td>
                                        <td>Peut exploser sous l'effet de la chaleur, choc, friction</td>
                                        <td>
                                            <div className="answer-space2"
                                                 style={{height: '30px', marginBottom: '5px'}}></div>
                                            <button className="correction-btnoptic btn-sm"
                                                    onClick={() => toggleCorrection('question1')}>
                                                <FaCheck/> {showCorrections.question1 ? '✕' : '✓'}
                                            </button>
                                            {showCorrections.question1 && <div
                                                className="correction-box small">{correctAnswers.question1}</div>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Inflammable</td>
                                        <td>Peut s'enflammer facilement au contact d'une flamme</td>
                                        <td>
                                            <div className="answer-space2"
                                                 style={{height: '30px', marginBottom: '5px'}}></div>
                                            <button className="correction-btnoptic btn-sm"
                                                    onClick={() => toggleCorrection('question2')}>
                                                <FaCheck/> {showCorrections.question2 ? '✕' : '✓'}
                                            </button>
                                            {showCorrections.question2 && <div
                                                className="correction-box small">{correctAnswers.question2}</div>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Comburant</td>
                                        <td>Favorise la combustion d'autres matières</td>
                                        <td>
                                            <div className="answer-space2"
                                                 style={{height: '30px', marginBottom: '5px'}}></div>
                                            <button className="correction-btnoptic btn-sm"
                                                    onClick={() => toggleCorrection('question3')}>
                                                <FaCheck/> {showCorrections.question3 ? '✕' : '✓'}
                                            </button>
                                            {showCorrections.question3 && <div
                                                className="correction-box small">{correctAnswers.question3}</div>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Gaz sous pression</td>
                                        <td>Peut exploser sous l'effet de la chaleur</td>
                                        <td>
                                            <div className="answer-space2"
                                                 style={{height: '30px', marginBottom: '5px'}}></div>
                                            <button className="correction-btnoptic btn-sm"
                                                    onClick={() => toggleCorrection('question4')}>
                                                <FaCheck/> {showCorrections.question4 ? '✕' : '✓'}
                                            </button>
                                            {showCorrections.question4 && <div
                                                className="correction-box small">{correctAnswers.question4}</div>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Corrosif</td>
                                        <td>Attaque et détruit les tissus vivants et métaux</td>
                                        <td>
                                            <div className="answer-space2"
                                                 style={{height: '30px', marginBottom: '5px'}}></div>
                                            <button className="correction-btnoptic btn-sm"
                                                    onClick={() => toggleCorrection('question5')}>
                                                <FaCheck/> {showCorrections.question5 ? '✕' : '✓'}
                                            </button>
                                            {showCorrections.question5 && <div
                                                className="correction-box small">{correctAnswers.question5}</div>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Toxicité aiguë</td>
                                        <td>Provoque des effets graves voire mortels</td>
                                        <td>
                                            <div className="answer-space2"
                                                 style={{height: '30px', marginBottom: '5px'}}></div>
                                            <button className="correction-btnoptic btn-sm"
                                                    onClick={() => toggleCorrection('question6')}>
                                                <FaCheck/> {showCorrections.question6 ? '✕' : '✓'}
                                            </button>
                                            {showCorrections.question6 && <div
                                                className="correction-box small">{correctAnswers.question6}</div>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Nocif ou irritant</td>
                                        <td>Provoque des effets moins graves mais dangereux</td>
                                        <td>
                                            <div className="answer-space2"
                                                 style={{height: '30px', marginBottom: '5px'}}></div>
                                            <button className="correction-btnoptic btn-sm"
                                                    onClick={() => toggleCorrection('question7')}>
                                                <FaCheck/> {showCorrections.question7 ? '✕' : '✓'}
                                            </button>
                                            {showCorrections.question7 && <div
                                                className="correction-box small">{correctAnswers.question7}</div>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Danger pour la santé</td>
                                        <td>Provoque des effets à long terme (cancérigène, etc.)</td>
                                        <td>
                                            <div className="answer-space2"
                                                 style={{height: '30px', marginBottom: '5px'}}></div>
                                            <button className="correction-btnoptic btn-sm"
                                                    onClick={() => toggleCorrection('question8')}>
                                                <FaCheck/> {showCorrections.question8 ? '✕' : '✓'}
                                            </button>
                                            {showCorrections.question8 && <div
                                                className="correction-box small">{correctAnswers.question8}</div>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Danger pour l'environnement</td>
                                        <td>Nocif pour les organismes aquatiques et l'écosystème</td>
                                        <td>
                                            <div className="answer-space2"
                                                 style={{height: '30px', marginBottom: '5px'}}></div>
                                            <button className="correction-btnoptic btn-sm"
                                                    onClick={() => toggleCorrection('question9')}>
                                                <FaCheck/> {showCorrections.question9 ? '✕' : '✓'}
                                            </button>
                                            {showCorrections.question9 && <div
                                                className="correction-box small">{correctAnswers.question9}</div>}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Questions sur les pictogrammes */}
                        <div className="row g-2 mt-3">
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>1.</strong> Quelles mesures devez-vous prendre si vous
                                        devez manipuler un produit avec un pictogramme de risque ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question10')}>
                                        <FaCheck/> {showCorrections.question10 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question10 &&
                                        <div className="correction-box small">{correctAnswers.question10}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>2.</strong> Comment cette identification peut-elle
                                        influencer vos actions dans un contexte professionnel ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question11')}>
                                        <FaCheck/> {showCorrections.question11 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question11 &&
                                        <div className="correction-box small">{correctAnswers.question11}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* PAGE 3 - TRI DES DÉCHETS */}
            <div className="print-page">
                <section className="tp-section compact">
                    <div className="activity-header mt-0">
                        <span className="activity-badge">ACTIVITÉ 2</span>
                        <div className="activity-title">
                            <span className="course-title"><FaTrash/> Tri sélectif des déchets chimiques</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '15px', marginBottom: '15px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <h5 className="mb-2 text-primary fw-bold">♻️ Règles de tri sélectif</h5>
                                <p style={{
                                    textAlign: 'justify',
                                    fontSize: '14px',
                                    lineHeight: '1.3',
                                    marginBottom: '10px'
                                }}>
                                    Quelles sont les conséquences d'un mauvais tri des déchets chimiques dans un
                                    environnement de soin ?
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0" style={{maxWidth: '150px'}}>
                            <img src={dechetsChimiques} alt="Tri des déchets"
                                 className="img-fluid rounded shadow-sm compact-img" style={{maxHeight: '100px'}}/>
                        </div>
                    </div>
                    <div className="objectif-box" style={{margin: '10px 0', padding: '8px'}}>
                        <div className="objectif-title"><strong style={{color: 'orangered'}}>Objectif :</strong> 🎯</div>
                        <p style={{margin: 0, fontSize: '13px'}}>Appliquer les règles de tri sélectif pour protéger
                            l'environnement et éviter les risques de contamination.</p>
                    </div>
                    <div className="question-card mt-0" style={{padding: '10px'}}>
                        <h4 className="vect-title" style={{color: '#388e3c', marginBottom: '12px'}}>Associez chaque type
                            de déchet à la méthode de tri appropriée :</h4>
                        <div className="row" style={{marginBottom: '20px'}}>
                            <div className="col-md-6">
                                <div className="association-list" style={{
                                    backgroundColor: '#f8f9fa',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    border: '2px dashed #dee2e6'
                                }}>
                                    <h6 style={{color: '#388e3c', marginBottom: '15px', textAlign: 'center'}}>Types
                                        de déchets</h6>
                                    <div className="association-item" style={{
                                        padding: '10px',
                                        marginBottom: '10px',
                                        backgroundColor: 'white',
                                        borderRadius: '5px',
                                        border: '1px solid #dee2e6',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                        <strong>Déchets dangereux (ex : acides)</strong>
                                    </div>
                                    <div className="association-item" style={{
                                        padding: '10px',
                                        marginBottom: '10px',
                                        backgroundColor: 'white',
                                        borderRadius: '5px',
                                        border: '1px solid #dee2e6',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                        <strong>Déchets non dangereux</strong>
                                    </div>
                                    <div className="association-item" style={{
                                        padding: '10px',
                                        backgroundColor: 'white',
                                        borderRadius: '5px',
                                        border: '1px solid #dee2e6',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                        <strong>Emballages de produits chimiques</strong>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="association-list" style={{
                                    backgroundColor: '#f8f9fa',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    border: '2px dashed #dee2e6'
                                }}>
                                    <h6 style={{
                                        color: '#388e3c',
                                        marginBottom: '15px',
                                        textAlign: 'center'
                                    }}>Méthodes de tri</h6>
                                    <div className="association-item" style={{
                                        padding: '10px',
                                        marginBottom: '10px',
                                        backgroundColor: 'white',
                                        borderRadius: '5px',
                                        border: '1px solid #dee2e6',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                        a) Conteneur spécifique pour déchets dangereux
                                    </div>
                                    <div className="association-item" style={{
                                        padding: '10px',
                                        marginBottom: '10px',
                                        backgroundColor: 'white',
                                        borderRadius: '5px',
                                        border: '1px solid #dee2e6',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                        b) Conteneur de recyclage
                                    </div>
                                    <div className="association-item" style={{
                                        padding: '10px',
                                        backgroundColor: 'white',
                                        borderRadius: '5px',
                                        border: '1px solid #dee2e6',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                        c) Ordures ménagères
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{marginBottom: '20px'}}>
                            <div className="col-12">
                                <button className="correction-btnoptic btn-sm" onClick={() => {
                                    toggleCorrection('question12');
                                    toggleCorrection('question13');
                                    toggleCorrection('question14');
                                }} style={{display: 'block', margin: '0 auto'}}>
                                    <FaCheck/> Vérifier les associations
                                </button>

                                {showCorrections.question12 && showCorrections.question13 && showCorrections.question14 && (
                                    <div className="correction-box small mt-3" style={{textAlign: 'center'}}>
                                        <strong>Correction :</strong><br/>
                                        Déchets dangereux → a) Conteneur spécifique pour déchets dangereux<br/>
                                        Déchets non dangereux → c) Ordures ménagères<br/>
                                        Emballages de produits chimiques → b) Conteneur de recyclage
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* QCM sur le tri des déchets */}
                        <h4 className="vect-title"
                            style={{color: '#388e3c', marginTop: '20px', marginBottom: '12px'}}>Questions :</h4>

                        <div className="row g-2">
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>1.</strong> Pourquoi est-il important de trier les
                                        déchets en milieu de soin ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question15')}>
                                        <FaCheck/> {showCorrections.question15 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question15 &&
                                        <div className="correction-box small">{correctAnswers.question15}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>2.</strong> Quelles sont les conséquences d'un tri
                                        incorrect des déchets ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question16')}>
                                        <FaCheck/> {showCorrections.question16 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question16 &&
                                        <div className="correction-box small">{correctAnswers.question16}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>3.</strong> Quels critères peuvent vous aider à
                                        identifier un déchet dangereux ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question17')}>
                                        <FaCheck/> {showCorrections.question17 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question17 &&
                                        <div className="correction-box small">{correctAnswers.question17}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>4.</strong> Quelles réglementations en vigueur
                                        s'appliquent aux déchets chimiques en milieu de soin ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question18')}>
                                        <FaCheck/> {showCorrections.question18 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question18 &&
                                        <div className="correction-box small">{correctAnswers.question18}</div>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ACTIVITÉ 3 - ÉQUIPEMENTS DE PROTECTION */}
                    <div className="activity-header mt-4">
                        <span className="activity-badge">ACTIVITÉ 3</span>
                        <div className="activity-title">
                            <span
                                className="course-title"><FaShieldAlt/> Équipements de protection individuelle (EPI)</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '15px', marginBottom: '15px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <h5 className="mb-2 text-primary fw-bold">🛡️ Protection contre les risques
                                    chimiques</h5>
                                <p style={{
                                    textAlign: 'justify',
                                    fontSize: '14px',
                                    lineHeight: '1.3',
                                    marginBottom: '10px'
                                }}>
                                    Comment les équipements de protection individuelle peuvent-ils prévenir les
                                    accidents lors de la manipulation de produits chimiques ?
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0" style={{maxWidth: '350px'}}>
                            <img src={epiComplet} alt="Équipements de protection"
                                 className="img-fluid rounded shadow-sm compact-img" style={{maxHeight: '150px'}}/>
                        </div>
                    </div>

                    <div className="objectif-box" style={{margin: '10px 0', padding: '8px'}}>
                        <div className="objectif-title"><strong style={{color: 'orangered'}}>Objectif :</strong> 🎯</div>
                        <p style={{margin: 0, fontSize: '13px'}}>Reconnaître et utiliser correctement les équipements de
                            protection individuelle adaptés à chaque situation.</p>
                    </div>

                    {/* Nouvelles questions sur les EPI */}
                    <div className="question-card mt-0" style={{padding: '10px'}}>
                        <h4 className="vect-title" style={{color: '#1565c0', marginBottom: '12px'}}>Questions sur les
                            EPI :</h4>

                        <div className="row g-2">
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>1.</strong> Quand doit-on porter les EPI ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question25')}>
                                        <FaCheck/> {showCorrections.question25 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question25 &&
                                        <div className="correction-box small">{correctAnswers.question25}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>2.</strong> À quelle fréquence doit-on vérifier l'état
                                        des EPI ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question26')}>
                                        <FaCheck/> {showCorrections.question26 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question26 &&
                                        <div className="correction-box small">{correctAnswers.question26}</div>}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            {/* PAGE 4 - ÉQUIPEMENTS DE PROTECTION (SUITE) */}
            <div className="print-page">
                <section className="tp-section compact">
                    <div className="question-card mt-0" style={{padding: '10px'}}>
                        <div className="row g-2">
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>3.</strong> Que faire si on constate qu'un EPI est
                                        endommagé ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question27')}>
                                        <FaCheck/> {showCorrections.question27 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question27 &&
                                        <div className="correction-box small">{correctAnswers.question27}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>4.</strong> Comment doit-on entreposer les EPI après
                                        utilisation ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question28')}>
                                        <FaCheck/> {showCorrections.question28 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question28 &&
                                        <div className="correction-box small">{correctAnswers.question28}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>5.</strong> Quelle est la procédure à suivre après avoir
                                        utilisé des EPI ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question29')}>
                                        <FaCheck/> {showCorrections.question29 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question29 &&
                                        <div className="correction-box small">{correctAnswers.question29}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>6.</strong> Comment sensibiliser les équipes à
                                        l'importance du port des EPI ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question24')}>
                                        <FaCheck/> {showCorrections.question24 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question24 &&
                                        <div className="correction-box small">{correctAnswers.question24}</div>}
                                </div>
                            </div>
                        </div>
                        <h4 className="vect-title" style={{color: '#1565c0', marginBottom: '12px'}}>7.Associez chaque
                            équipement de protection à sa fonction :</h4>

                        <div className="row" style={{marginBottom: '20px'}}>
                            <div className="col-md-6">
                                <div className="association-list" style={{
                                    backgroundColor: '#e3f2fd',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    border: '2px dashed #bbdefb'
                                }}>
                                    <h6 style={{
                                        color: '#1565c0',
                                        marginBottom: '15px',
                                        textAlign: 'center'
                                    }}>Équipement</h6>
                                    <div className="association-item" style={{
                                        padding: '10px',
                                        marginBottom: '10px',
                                        backgroundColor: 'white',
                                        borderRadius: '5px',
                                        border: '1px solid #bbdefb',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <FaHands style={{color: '#1565c0', marginRight: '10px'}}/>
                                        <strong>Gants de protection</strong>
                                    </div>
                                    <div className="association-item" style={{
                                        padding: '10px',
                                        marginBottom: '10px',
                                        backgroundColor: 'white',
                                        borderRadius: '5px',
                                        border: '1px solid #bbdefb',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <FaEye style={{color: '#1565c0', marginRight: '10px'}}/>
                                        <strong>Lunettes de sécurité</strong>
                                    </div>
                                    <div className="association-item" style={{
                                        padding: '10px',
                                        backgroundColor: 'white',
                                        borderRadius: '5px',
                                        border: '1px solid #bbdefb',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <FaHeadSideMask style={{color: '#1565c0', marginRight: '10px'}}/>
                                        <strong>Masque de protection</strong>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="association-list" style={{
                                    backgroundColor: '#e3f2fd',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    border: '2px dashed #bbdefb'
                                }}>
                                    <h6 style={{
                                        color: '#1565c0',
                                        marginBottom: '15px',
                                        textAlign: 'center'
                                    }}>Fonction</h6>
                                    <div className="association-item" style={{
                                        padding: '10px',
                                        marginBottom: '10px',
                                        backgroundColor: 'white',
                                        borderRadius: '5px',
                                        border: '1px solid #bbdefb',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                        a) Protéger les yeux
                                    </div>
                                    <div className="association-item" style={{
                                        padding: '10px',
                                        marginBottom: '10px',
                                        backgroundColor: 'white',
                                        borderRadius: '5px',
                                        border: '1px solid #bbdefb',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                        b) Protéger les mains
                                    </div>
                                    <div className="association-item" style={{
                                        padding: '10px',
                                        backgroundColor: 'white',
                                        borderRadius: '5px',
                                        border: '1px solid #bbdefb',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                        c) Protéger les voies respiratoires
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{marginBottom: '20px'}}>
                            <div className="col-12">
                                <button className="correction-btnoptic btn-sm" onClick={() => {
                                    toggleCorrection('question19');
                                    toggleCorrection('question20');
                                    toggleCorrection('question21');
                                }} style={{display: 'block', margin: '0 auto'}}>
                                    <FaCheck/> Vérifier les associations
                                </button>

                                {showCorrections.question19 && showCorrections.question20 && showCorrections.question21 && (
                                    <div className="correction-box small mt-3" style={{textAlign: 'center'}}>
                                        <strong>Correction :</strong><br/>
                                        Gants de protection → b) Protéger les mains<br/>
                                        Lunettes de sécurité → a) Protéger les yeux<br/>
                                        Masque de protection → c) Protéger les voies respiratoires
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* QCM sur les EPI */}
                        <div className="row g-2">
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>8.</strong> Quels équipements de protection sont
                                        recommandés pour manipuler des produits corrosifs ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question22')}>
                                        <FaCheck/> {showCorrections.question22 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question22 &&
                                        <div className="correction-box small">{correctAnswers.question22}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>9.</strong> Comment les EPI contribuent-ils à la
                                        prévention des risques professionnels ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question23')}>
                                        <FaCheck/> {showCorrections.question23 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question23 &&
                                        <div className="correction-box small">{correctAnswers.question23}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>10.</strong> Quel est l'équipement de protection le plus
                                        important à porter lors du changement de draps d'un patient ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question25')}>
                                        <FaCheck/> {showCorrections.question25 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question25 &&
                                        <div className="correction-box small">Des gants jetables pour se protéger des
                                            microbes</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>11.</strong> Pourquoi doit-on porter un masque lorsqu'on
                                        s'occupe d'un patient contagieux ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question26')}>
                                        <FaCheck/> {showCorrections.question26 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question26 &&
                                        <div className="correction-box small">Pour éviter d'inhaler des germes et se
                                            protéger des maladies</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>12.</strong> Quand doit-on absolument se laver les mains
                                        en milieu de soins ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question27')}>
                                        <FaCheck/> {showCorrections.question27 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question27 &&
                                        <div className="correction-box small">Avant et après chaque soin, et après avoir
                                            retiré ses gants</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>13.</strong> Quel EPI supplémentaire pourrait-on porter
                                        pour nettoyer une chambre de patient ?</p>
                                    <div className="answer-space2" style={{height: '40px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question28')}>
                                        <FaCheck/> {showCorrections.question28 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question28 &&
                                        <div className="correction-box small">Une surblouse pour protéger ses vêtements
                                            des salissures</div>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Grille d'auto-évaluation */}
                    <div className="mt-4">
                        <AutoEvaluationGrid
                            competences={[
                                "Identifier les pictogrammes de sécurité",
                                "Appliquer les règles de tri sélectif",
                                "Utiliser les équipements de protection",
                                "Réagir face aux situations à risque"
                            ]}
                            niveaux={[
                                "Je ne connais pas du tout",
                                "Je connais mais j'ai besoin d'aide",
                                "Je sais faire seul",
                                "Je sais faire et expliquer aux autres"
                            ]}
                        />
                    </div>
                </section>
            </div>
        </div>
    </>);
};

export default PictoSecuriteSeconde;
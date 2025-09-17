import React, {useRef, useState} from 'react';
import {FaCheck, FaVideo, FaQuestionCircle, FaRuler, FaRunning} from 'react-icons/fa';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import ModalImage from "../../../../utils/ModalImage";
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";
import {IoMdSchool} from "react-icons/io";

// Images (à remplacer par les vôtres)
import veliplanchisteImage from "../../../../assets/veliplanchisteImage.png";
import pymecavideoImage from "../../../../assets/pymecavideoImage.png";
import trajectoireImage from "../../../../assets/vegeta_vs_freezer.jpg";

const ActTrajectoireMouvement = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const contentRef = useRef();

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
        question8: '',
        question9: '',
        question10: '',
        protocole: '',
        validation: '',
        communication: ''
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
        protocole: false,
        validation: false,
        communication: false
    });

    // Réponses attendues
    const correctAnswers = {
        question1: 'Le véliplanchiste est en mouvement par rapport à la plage.',
        question2: 'Le mouvement du système est qualifié de mouvement quelconque.',
        question3: 'Matériel: Vidéo du véliplanchiste, ordinateur avec logiciel d\'analyse vidéo (PyMecaVideo), repères fixes.',
        question4: 'Démarche: Importer la vidéo, définir des repères fixes, tracer la trajectoire du point étudié à intervalles réguliers, analyser la forme de la trajectoire obtenue.',
        question5: 'L\'analyse de la trajectoire montre que le mouvement du véliplanchiste n\'est pas rectiligne mais suit une trajectoire courbe et irrégulière.',
        question6: 'Mehdi a raison. L\'analyse de la trajectoire montre que le mouvement du véliplanchiste est quelconque et non rectiligne comme le pensait Jules.',
        question7: 'Pour étudier l\'état de mouvement ou de repos d\'un système mécanique, il faut préciser le référentiel.',
        question8: 'Dans un bus qui roule, les passagers assis sont immobiles si le référentiel choisi est le bus.',
        question9: 'Dans un bus qui roule, un passager qui se déplace dans l\'allée centrale est en mouvement par rapport au sol et en mouvement par rapport aux passagers assis.',
        question10: 'La vitesse moyenne d\'un système se calcule avec la relation v = d/Δt.',
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

    const [modalState, setModalState] = useState({
        show: false, imageUrl: '', altText: '',
    });

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState((prev) => ({...prev, show: false}));
    };

    if (className === 'Seconde-mecanique-trajectoire') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" id="trajectoire-content" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Trajectoire_Mouvement"
                pageCount={2}
                quality="hd"
            />

            {/* PAGE 1 */}
            <div className="print-page" id="page1-start">
                <section className="tp-section compact">
                    <div className="math-chapter-box blue" style={{padding: '0'}}>
                        <span style={{marginRight: '10px', fontSize: '30px'}}>🏄</span>
                        <h2 className="math-chapter-title-test">Mécanique - Trajectoires et mouvements</h2>
                    </div>

                    <div className="activity-header mt-0">
                        <span className="activity-badge">ACTIVITÉ</span>
                        <div className="activity-title">
                            <span className="course-title" style={{marginRight: '-20px'}}>
                                <FaVideo/> <span>📏</span> « Différencier les trajectoires rectilignes et quelconques »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte2">
                                <h5 className="mb-3 text-primary fw-bold">🏄 "Mouvement d'un véliplanchiste"</h5>
                                <p style={{textAlign: 'justify', fontSize: '15px', lineHeight: '1.6'}}>
                                    Jules et Mehdi observent depuis la plage les performances d'un véliplanchiste.
                                    Ils se questionnent sur la nature de son mouvement. Jules pense qu'il
                                    est <strong>rectiligne</strong>, tandis que Mehdi affirme qu'il
                                    est <strong>quelconque</strong>. Mehdi décide alors de filmer le véliplanchiste et
                                    propose
                                    d'analyser la vidéo en notant, à intervalles de temps réguliers, la position d'un
                                    point
                                    précis de la planche.
                                    <br/> <br/>
                                    <span style={{fontStyle: 'italic', color: '#2e7d32'}}>
                                        "Comment peut-on étudier la nature du mouvement de la planche à voile ? Qui de Jules ou de Mehdi a raison ?"
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0" style={{maxWidth: '240px', cursor: 'pointer'}}>
                            <img src={veliplanchisteImage} alt="Véliplanchiste"
                                 className="img-fluid rounded shadow-sm compact-img"
                                 onClick={() => openModal(veliplanchisteImage, 'Véliplanchiste')}/>
                        </div>
                    </div>

                    <div className="objectif-box" style={{marginTop: '10px', marginBottom: '5px'}}>
                        <div className="objectif-title"><strong style={{color: 'orangered'}}> Objectif :</strong> 🎯
                        </div>
                        <p>Comprendre comment différencier les trajectoires rectilignes et quelconques à travers
                            l'analyse du mouvement d'un véliplanchiste.</p>
                    </div>

                    {/* Étape 1 : Formuler une hypothèse */}

                    <div className="question-card mt-0">
                        <div className="question-content">
                            <div style={{
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: '10px',
                                marginBottom: '15px',
                                flexWrap: 'wrap'
                            }}>
                                <h4 className="vect-title" style={{margin: 0, whiteSpace: 'nowrap'}}>
                                    <span>S'approprier</span>
                                </h4>
                                <p style={{margin: 0, flex: 1}}>
                                    Après avoir visionné la vidéo « Véliplanchiste » réalisée par Mehdi, cocher la ou
                                    les bonnes propositions.
                                </p>
                            </div>

                            <p><strong>Dans le référentiel terrestre :</strong></p>
                            <p style={{marginBottom: '8px'}}>Le véliplanchiste est :</p>
                            <div className="qcm-container">
                                {['immobile par rapport à la plage', 'immobile par rapport à la planche à voile', 'en mouvement par rapport à la plage'].map((option, index) => (
                                    <div key={index} className="qcm-option">
                                        <label className="radio-label">
                                            <input type="checkbox" className="radio-input"/>
                                            <span className="radio-checkmark"></span>
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <p style={{marginBottom: '8px', marginTop: '15px'}}>Le mouvement du système est qualifié de
                                :</p>
                            <div className="qcm-container">
                                {['mouvement circulaire', 'mouvement quelconque', 'mouvement rectiligne'].map((option, index) => (
                                    <div key={index} className="qcm-option">
                                        <label className="radio-label">
                                            <input type="checkbox" className="radio-input"/>
                                            <span className="radio-checkmark"></span>
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <div style={{display: 'flex', gap: '10px', marginTop: '15px'}}>
                                <button className="correction-btnoptic" onClick={() => toggleCorrection('question1')}>
                                    <FaCheck/> {showCorrections.question1 ? 'Masquer' : 'Correction 1'}
                                </button>
                                <button className="correction-btnoptic" onClick={() => toggleCorrection('question2')}>
                                    <FaCheck/> {showCorrections.question2 ? 'Masquer' : 'Correction 2'}
                                </button>
                            </div>

                            {showCorrections.question1 && (
                                <div className="correction-box">
                                    <strong>Correction 1 :</strong> {correctAnswers.question1}
                                </div>
                            )}
                            {showCorrections.question2 && (
                                <div className="correction-box">
                                    <strong>Correction 2 :</strong> {correctAnswers.question2}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Étape 2 : Proposer un protocole */}


                    <div className="question-card mt-0">
                        <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                            <div style={{flex: 1, minWidth: '300px'}}>
                                <div className="question-content">
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'baseline',
                                        gap: '10px',
                                        marginBottom: '15px',
                                        flexWrap: 'wrap'
                                    }}>
                                        <h4 className="vect-title" style={{margin: 0, whiteSpace: 'nowrap'}}>
                                            <span>Analyser/Raisonner</span>
                                        </h4>
                                        <p style={{margin: 0, flex: 1}}>
                                            Décrire la démarche et lister le matériel nécessaire (la hauteur de la
                                            planche à voile est de 5 m).
                                        </p>
                                    </div>

                                    <p><strong>Démarche :</strong></p>
                                    <div className="answer-space2" style={{
                                        height: '170px',
                                        marginBottom: '10px',
                                        borderBottom: '1px dashed #ccc'
                                    }}></div>

                                    <div style={{display: 'flex', gap: '10px', marginTop: '15px'}}>
                                        <button className="correction-btnoptic"
                                                onClick={() => toggleCorrection('question3')}>
                                            <FaCheck/> {showCorrections.question3 ? 'Masquer' : 'Correction Matériel'}
                                        </button>
                                        <button className="correction-btnoptic"
                                                onClick={() => toggleCorrection('question4')}>
                                            <FaCheck/> {showCorrections.question4 ? 'Masquer' : 'Correction Démarche'}
                                        </button>
                                    </div>

                                    {showCorrections.question3 && (
                                        <div className="correction-box">
                                            <strong>Correction Matériel :</strong> {correctAnswers.question3}
                                        </div>
                                    )}
                                    {showCorrections.question4 && (
                                        <div className="correction-box">
                                            <strong>Correction Démarche :</strong> {correctAnswers.question4}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex-shrink-0"
                                 style={{maxWidth: '300px', cursor: 'pointer', marginTop: '50px'}}>
                                <img src={pymecavideoImage} alt="Interface PyMecaVideo"
                                     className="img-fluid rounded shadow-sm"
                                     onClick={() => openModal(pymecavideoImage, 'Interface PyMecaVideo')}
                                     style={{maxHeight: '230px'}}/>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* PAGE 2 */}
            <div className="print-page" id="page2-start">
                <section className="tp-section compact">
                    {/* Étape 3 : Réaliser l'expérience */}

                    <div className="question-card mt-0">
                        <div className="question-content2">
                            <ol style={{paddingLeft: '20px', marginBottom: '0'}}>
                                <li> - Ouvrir l'application PyMecaVideo sur l'ordinateur.</li>
                                <li> - Importer la vidéo du véliplanchiste.</li>
                                <li> - Définir des repères fixes dans la vidéo (par exemple, des points sur la plage).
                                </li>
                                <li> - Tracer la trajectoire du véliplanchiste en suivant son mouvement dans la vidéo.
                                </li>
                                <li> - Observer la nature de la trajectoire (rectiligne, circulaire ou quelconque).</li>
                            </ol>
                        </div>


                        {/* Étape 4 : Valider */}


                        <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                            <div style={{flex: 1, minWidth: '300px'}}>
                                <div className="question-content">
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'baseline',
                                        gap: '10px',
                                        marginBottom: '15px',
                                        flexWrap: 'wrap'
                                    }}>
                                        <h4 className="vect-title" style={{margin: 0, whiteSpace: 'nowrap'}}>
                                            <span>Valider</span>
                                        </h4>
                                        <p style={{margin: 0, flex: 1}}>
                                            Confirmer ou non l'hypothèse initiale selon les résultats expérimentaux
                                            obtenus.
                                        </p>
                                    </div>
                                    <div className="answer-space2" style={{
                                        height: '60px',
                                        marginBottom: '10px',
                                        borderBottom: '1px dashed #ccc'
                                    }}></div>

                                    <button className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question5')}>
                                        <FaCheck/> {showCorrections.question5 ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question5 && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.question5}
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>


                        {/* Étape 5 : Communiquer */}


                        <div className="question-content">
                            <div style={{
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: '10px',
                                marginBottom: '15px',
                                flexWrap: 'wrap'
                            }}>
                                <h4 className="vect-title" style={{margin: 0, whiteSpace: 'nowrap'}}>
                                    <span>Communiquer</span>
                                </h4>
                                <p style={{margin: 0, flex: 1}}>
                                    Qui de Jules ou Mehdi a raison?
                                </p>
                            </div>
                            <div className="answer-space2" style={{
                                height: '40px',
                                marginBottom: '10px',
                                borderBottom: '1px dashed #ccc'
                            }}></div>

                            <button className="correction-btnoptic" onClick={() => toggleCorrection('question6')}>
                                <FaCheck/> {showCorrections.question6 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                            {showCorrections.question6 && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.question6}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* QCM */}
                    <div className="question-card mt-0">
                        <div className="question-content">
                            <div className="activity-title">
                            <span className="course-title">
                                <FaQuestionCircle/> Je teste mes acquis
                            </span>
                            </div>
                            <p style={{marginBottom: '15px'}}>Coche la ou les bonnes réponses.</p>

                            {/* Question 1 */}
                            <div style={{marginBottom: '15px'}}>
                                <p style={{fontWeight: '500', marginBottom: '8px'}}>1. Pour étudier l'état de mouvement
                                    ou de repos d'un système mécanique, il faut préciser :</p>
                                <div className="qcm-container">
                                    {['L\'objet qui sert de référence', 'Le référentiel', 'La trajectoire'].map((option, index) => (
                                        <div key={index} className="qcm-option">
                                            <label className="radio-label">
                                                <input type="checkbox" className="radio-input"/>
                                                <span className="radio-checkmark"></span>
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <button className="correction-btnoptic" onClick={() => toggleCorrection('question7')}
                                        style={{marginTop: '10px', fontSize: '12px', padding: '4px 8px'}}>
                                    <FaCheck/> {showCorrections.question7 ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.question7 && (
                                    <div className="correction-box" style={{fontSize: '12px'}}>
                                        <strong>Correction :</strong> {correctAnswers.question7}
                                    </div>
                                )}
                            </div>

                            {/* Question 2 */}
                            <div style={{marginBottom: '15px'}}>
                                <p style={{fontWeight: '500', marginBottom: '8px'}}>2. Dans un bus qui roule, les
                                    passagers assis sont immobiles si le référentiel choisi est :</p>
                                <div className="qcm-container">
                                    {['Le bus', 'Le sol', 'Un passager qui se déplace dans l\'allée centrale du bus'].map((option, index) => (
                                        <div key={index} className="qcm-option">
                                            <label className="radio-label">
                                                <input type="checkbox" className="radio-input"/>
                                                <span className="radio-checkmark"></span>
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <button className="correction-btnoptic" onClick={() => toggleCorrection('question8')}
                                        style={{marginTop: '10px', fontSize: '12px', padding: '4px 8px'}}>
                                    <FaCheck/> {showCorrections.question8 ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.question8 && (
                                    <div className="correction-box" style={{fontSize: '12px'}}>
                                        <strong>Correction :</strong> {correctAnswers.question8}
                                    </div>
                                )}
                            </div>

                            {/* Question 3 */}
                            <div style={{marginBottom: '15px'}}>
                                <p style={{fontWeight: '500', marginBottom: '8px'}}>3. Dans un bus qui roule, un
                                    passager qui se déplace dans l'allée centrale est :</p>
                                <div className="qcm-container">
                                    {['En mouvement par rapport au sol', 'En mouvement par rapport au bus', 'En mouvement par rapport aux passagers assis'].map((option, index) => (
                                        <div key={index} className="qcm-option">
                                            <label className="radio-label">
                                                <input type="checkbox" className="radio-input"/>
                                                <span className="radio-checkmark"></span>
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <button className="correction-btnoptic" onClick={() => toggleCorrection('question9')}
                                        style={{marginTop: '10px', fontSize: '12px', padding: '4px 8px'}}>
                                    <FaCheck/> {showCorrections.question9 ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.question9 && (
                                    <div className="correction-box" style={{fontSize: '12px'}}>
                                        <strong>Correction :</strong> {correctAnswers.question9}
                                    </div>
                                )}
                            </div>

                            {/* Question 4 */}
                            <div style={{marginBottom: '15px'}}>
                                <p style={{fontWeight: '500', marginBottom: '8px'}}>4. La vitesse moyenne d'un système
                                    se calcule avec la relation :</p>
                                <div className="qcm-container">
                                    {['v = d/Δt', 'v = Δt/d', 'v = d × t'].map((option, index) => (
                                        <div key={index} className="qcm-option">
                                            <label className="radio-label">
                                                <input type="checkbox" className="radio-input"/>
                                                <span className="radio-checkmark"></span>
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <button className="correction-btnoptic" onClick={() => toggleCorrection('question10')}
                                        style={{marginTop: '10px', fontSize: '12px', padding: '4px 8px'}}>
                                    <FaCheck/> {showCorrections.question10 ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.question10 && (
                                    <div className="correction-box" style={{fontSize: '12px'}}>
                                        <strong>Correction :</strong> {correctAnswers.question10}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Grille d'auto-évaluation */}
                    <AutoEvaluationGrid/>
                </section>
            </div>

            {modalState.show && (
                <ModalImage imageUrl={modalState.imageUrl} altText={modalState.altText} onClose={closeModal}/>)}
        </div>

        {/* Styles CSS */}
        <style jsx>{`
          .qcm-container {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin: 10px 0;
          }

          .qcm-option {
            display: flex;
            align-items: center;
            padding: 8px 12px;
            background-color: #f8f9fa;
            border-radius: 8px;
            border: 1px solid #e9ecef;
            transition: all 0.2s ease;
            cursor: pointer;
          }

          .qcm-option:hover {
            background-color: #e8f5e9;
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .radio-label {
            display: flex;
            align-items: center;
            cursor: pointer;
          }

          .radio-input {
            display: none;
          }

          .radio-checkmark {
            display: inline-block;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 2px solid #4CAF50;
            margin-right: 10px;
            position: relative;
            transition: all 0.2s ease;
          }

          .radio-label:hover .radio-checkmark {
            border-color: #2e7d32;
            transform: scale(1.1);
          }

          .radio-input:checked + .radio-checkmark {
            background-color: #4CAF50;
            border-color: #4CAF50;
          }

          .radio-input:checked + .radio-checkmark::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: white;
            transform: translate(-50%, -50%);
          }

          .answer-space {
            border-bottom: 1px dashed #ccc;
            margin: 10px 0;
          }

          .correction-btnoptic {
            padding: 6px 12px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 14px;
            margin-top: 10px;
          }

          .correction-btnoptic:hover {
            background-color: #2e7d32;
            transform: translateY(-1px);
          }

          .correction-box {
            background-color: #e8f5e9;
            padding: 10px;
            border-radius: 6px;
            border-left: 4px solid #4CAF50;
            margin-top: 10px;
            font-size: 14px;
          }
        `}</style>
    </>);
};

export default ActTrajectoireMouvement;
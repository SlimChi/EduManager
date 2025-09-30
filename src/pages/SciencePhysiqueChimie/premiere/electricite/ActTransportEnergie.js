import React, {useRef, useState} from 'react';
import {FaCheck, FaBolt, FaIndustry, FaCog, FaVideo} from 'react-icons/fa';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import ModalImage from "../../../../utils/ModalImage";
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";

// Images (à remplacer par les vôtres)
import transformateurImage from "../../../../assets/transformateurImage.png";
import transportElectriciteImage from "../../../../assets/effetJouleImage.png";
import effetJouleImage from "../../../../assets/effetJouleImage.png";
import montageTransportImage from "../../../../assets/montageTransportImage.png";
import montageTransportImage2 from "../../../../assets/montageTransportImage2.png";
import schema_transfo_blanc from "../../../../assets/schema_transfo_blanc.png";

const ActTransportEnergie = () => {
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
        question11: '',
        question12: '',
        question13: '',
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
    });

    // Réponses attendues
    const correctAnswers = {
        question1: 'La tension à appliquer au transformateur doit être alternative sinusoïdale.',
        question2: 'Le transformateur sert à élever la tension pour le transport sur de longues distances et à l\'abaisser pour la distribution domestique.',
        question3: 'm = U₂/U₁ = 5/12 ≈ 0,4',
        question4: 'Ce transformateur abaisse la tension (de 12V à 5V).',
        question5: 'La vidéo montre que sans transformateur, les pertes d\'énergie seraient trop importantes pour transporter l\'électricité sur de longues distances.',
        question6: 'Le transformateur permet de modifier la tension électrique pour adapter l\'énergie aux besoins du transport et de la consommation.',
        question7: 'Exemples : chargeurs de téléphone, alimentations d\'ordinateurs, transformateurs de halogènes. Ils abaissent la tension du secteur (230V) vers une tension plus basse adaptée aux appareils.',
        question8: 'L\'effet Joule est le dégagement de chaleur dans les conducteurs parcourus par un courant. Il cause des pertes d\'énergie. En élevant la tension, on réduit l\'intensité donc les pertes par effet Joule.',
        question9: 'Oui, Louna a raison. Plus la tension est élevée, plus l\'intensité est faible pour une même puissance, ce qui réduit les pertes par effet Joule.',
        question10: 'La valeur R correspond à la résistance des câbles de transport qui cause les pertes par effet Joule.',
        question11: 'I₁ ≈ 0,5 A, I₂ ≈ 0,1 A, I₃ ≈ 0,5 A (valeurs typiques montrant la réduction d\'intensité dans les lignes HT)',
        question12: 'Le premier transformateur élève la tension pour réduire l\'intensité dans les lignes de transport.',
        question13: 'Le deuxième transformateur abaisse la tension pour la rendre utilisable par les consommateurs.',
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

    if (className === 'Seconde-electricite-act1') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" id="transport-energie-content" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Transport_Energie_Electrique"
                pageCount={2}
                quality="hd"
            />

            {/* PAGE 1 */}
            <div className="print-page" id="page1-start">
                <section className="tp-section compact">

                    <div className="math-chapter-box blue" style={{padding: '10px', marginTop: '-10px'}}>
                        <h3 className="math-chapter-title-test mb-0">Chapitre 1 - Transporter l'énergie sous forme
                            électrique</h3>
                    </div>
                    <div className="activity-header mt-0">
                        <span className="activity-badge">ACTIVITÉ 1</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaIndustry/> <span>⚡</span> « Comprendre le Rôle du Transformateur »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <h5 className="mb-3 text-primary fw-bold">
                                    🎬 "Le mystère des transformateurs électriques"
                                </h5>

                                <p style={{
                                    textAlign: 'justify',
                                    textJustify: 'inter-word',
                                    fontSize: '16px',
                                    lineHeight: '1.4'
                                }}>
                                    <span style={{fontWeight: 'bold', color: '#1976d2'}}>Inès</span> regarde un
                                    documentaire
                                    sur le transport de l'électricité et apprend que les transformateurs sont des
                                    éléments
                                    essentiels du réseau : ils abaissent la tension de l'électricité transportée à
                                    <span style={{fontWeight: 'bold'}}> 400 000 V</span> vers une tension de
                                    <span style={{fontWeight: 'bold'}}> 230 V</span> dans les habitations.
                                    Sans transformateurs, l'électricité ne serait pas utilisable par les appareils
                                    courants.

                                    <br/>
                                    <span style={{fontStyle: 'italic', color: '#2e7d32'}}>
                                        "Comment les transformateurs rendent-ils possible l'utilisation de l'électricité dans nos maisons ?"
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0"
                             style={{maxWidth: '250px', cursor: 'pointer', marginTop: '10px'}}>
                            <img
                                src={transformateurImage}
                                alt="Transformateur électrique"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(transformateurImage, 'Transformateur électrique')}
                            />
                        </div>
                    </div>

                    <div className="objectif-box" style={{marginTop: '5px', marginBottom: '5px'}}>
                        <div className="objectif-title"><strong style={{color: 'orangered'}}> Objectif :</strong> 🎯
                        </div>
                        <p>Comprendre le rôle des transformateurs dans le transport et la distribution de l'énergie
                            électrique.</p>
                    </div>

                    {/* Section S'approprier */}
                    <div className="question-card mt-0">
                        <div className="question-content">
                            <h4 className="vect-title"
                                style={{display: 'inline', marginRight: '10px'}}>
                                <span>S'approprier</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                1. Donner la nature de la tension à appliquer au transformateur du lycée :
                                ..........................................................................................................................................
                                ............................................................................................................................................................................................
                            </p>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question1')}
                            >
                                <FaCheck/> {showCorrections.question1 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                            {showCorrections.question1 && (
                                <div className="correction-text" style={{
                                    backgroundColor: '#e8f5e8',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    marginTop: '10px',
                                    border: '1px solid #c8e6c9'
                                }}>
                                    {correctAnswers.question1}
                                </div>
                            )}
                        </div>

                        <div className="question-content">
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>Analyser/Raisonner</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>2. Quel rôle joue le transformateur
                                dans le transport et la distribution de l'électricité ?
                                ......................................................................................
                                ...............................................................................................................................</p>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question2')}
                            >
                                <FaCheck/> {showCorrections.question2 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                            {showCorrections.question2 && (
                                <div className="correction-text" style={{
                                    backgroundColor: '#e8f5e8',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    marginTop: '10px',
                                    border: '1px solid #c8e6c9'
                                }}>
                                    {correctAnswers.question2}
                                </div>
                            )}
                        </div>
                        <div
                            style={{display: 'flex', justifyContent: 'center', marginTop: '10px', cursor: 'pointer'}}
                        >
                            <img
                                src={schema_transfo_blanc}
                                alt="Transformateur électrique"
                                className="img-fluid rounded shadow-sm compact-img"
                                style={{maxWidth: '250px'}}
                                onClick={() => openModal(schema_transfo_blanc, 'Transformateur électrique')}
                            />
                        </div>

                        <div className="question-content">
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>Réaliser</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>3. Calculer le rapport de
                                transformation avec U₁ = 12V et U₂ = 5V :</p>

                            <div style={{
                                backgroundColor: '#f5f5f5',
                                padding: '15px',
                                borderRadius: '8px',
                                margin: '10px 0',
                                textAlign: 'center'
                            }}>
                                <InlineMath math="m = \frac{U_2}{U_1} = "/> .............
                            </div>

                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question3')}
                            >
                                <FaCheck/> {showCorrections.question3 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                            {showCorrections.question3 && (
                                <div className="correction-text" style={{
                                    backgroundColor: '#e8f5e8',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    marginTop: '10px',
                                    border: '1px solid #c8e6c9'
                                }}>
                                    {correctAnswers.question3}
                                </div>
                            )}
                        </div>

                        <div className="question-content">
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>Valider/Communiquer</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                4. Le transformateur sert-il à élever ou à abaisser la tension ?
                                ...............................................................................................................
                                ................................................................................................................
                                ...............................................................................................................
                                ................................................................................................................
                            </p>

                            {showCorrections.question4 && (
                                <div className="correction-text" style={{
                                    backgroundColor: '#e8f5e8',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    marginTop: '10px',
                                    border: '1px solid #c8e6c9'
                                }}>
                                    {correctAnswers.question4}
                                </div>
                            )}

                            <p className="mt-3">5. Comment la vidéo démontre-t-elle l'importance du transformateur ?
                                ...............................................................................................................
                                ................................................................................................................
                            </p>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question5')}
                            >
                                <FaCheck/> {showCorrections.question5 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                            {showCorrections.question5 && (
                                <div className="correction-text" style={{
                                    backgroundColor: '#e8f5e8',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    marginTop: '10px',
                                    border: '1px solid #c8e6c9'
                                }}>
                                    {correctAnswers.question5}
                                </div>
                            )}

                            <p className="mt-3">6. Quel est le rôle principal du transformateur ?
                                ...............................................................................................................
                                ................................................................................................................
                                ...............................................................................................................

                            </p>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question6')}
                            >
                                <FaCheck/> {showCorrections.question6 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                            {showCorrections.question6 && (
                                <div className="correction-text" style={{
                                    backgroundColor: '#e8f5e8',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    marginTop: '10px',
                                    border: '1px solid #c8e6c9'
                                }}>
                                    {correctAnswers.question6}
                                </div>
                            )}

                            <p className="mt-3">7. Citez des exemples d'appareils utilisant un transformateur :
                                ...............................................................................................................
                                ................................................................................................................
                                ...............................................................................................................
                                ................................................................................................................
                            </p>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question7')}
                            >
                                <FaCheck/> {showCorrections.question7 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                            {showCorrections.question7 && (
                                <div className="correction-text" style={{
                                    backgroundColor: '#e8f5e8',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    marginTop: '10px',
                                    border: '1px solid #c8e6c9'
                                }}>
                                    {correctAnswers.question7}
                                </div>
                            )}

                            <p className="mt-3">8. Expliquez l'effet Joule et son importance dans le transport :
                                ...............................................................................................................
                                ................................................................................................................
                                ...............................................................................................................
                                ................................................................................................................
                            </p>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question8')}
                            >
                                <FaCheck/> {showCorrections.question8 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                            {showCorrections.question8 && (
                                <div className="correction-text" style={{
                                    backgroundColor: '#e8f5e8',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    marginTop: '10px',
                                    border: '1px solid #c8e6c9'
                                }}>
                                    {correctAnswers.question8}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>

            {/* PAGE 2 */}
            <div className="print-page" id="page2-start">
                <section className="tp-section compact">
                    <div className="math-chapter-box blue" style={{padding: '0'}}>
                        <span style={{marginRight: '10px', fontSize: '30px'}}>🔌</span>
                        <h2 className="math-chapter-title-test">Transporter l'énergie - Réduire les pertes</h2>
                    </div>
                    <div className="activity-header">
                        <span className="activity-badge">ACTIVITÉ 2</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaCog/> <span>📉</span> « Réduire les pertes en lignes »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <p style={{
                                    textAlign: 'justify',
                                    textJustify: 'inter-word',
                                    fontSize: '15px',
                                    lineHeight: '1.4'
                                }}>
                                    🌟 <strong>Louna</strong> effectue un stage dans une entreprise spécialisée
                                    dans la production d'électricité. Elle s'interroge sur les raisons pour lesquelles
                                    l'électricité est transportée à très haute tension. <strong>Yamine</strong>, un de
                                    ses collègues, lui fait rapidement comprendre que cela réduit les pertes causées
                                    par l'effet Joule.
                                    <br/> <strong className="text-primary">
                                    Louna en conclut que plus la tension dans les fils est élevée, plus les pertes
                                    dues à l'effet Joule sont faibles. A-t-elle raison ?
                                </strong>
                                </p>

                                <div className="video-link" style={{
                                    backgroundColor: '#e3f2fd',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    margin: '10px 0'
                                }}>
                                    <FaVideo style={{marginRight: '8px', color: '#1976d2'}}/>
                                    <strong>Vidéo explicative : </strong>
                                    <a href="https://www.youtube.com/watch?v=a23lLQSdLUI" target="_blank"
                                       rel="noopener noreferrer">
                                        Comprendre l'effet Joule dans le transport d'électricité
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0"
                             style={{maxWidth: '250px', cursor: 'pointer'}}>
                            <img
                                src={transportElectriciteImage}
                                alt="Transport de l'électricité à haute tension"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(transportElectriciteImage, 'Transport haute tension')}
                            />
                        </div>
                    </div>

                    <div className="question-content">
                        <h4 className="vect-title"
                            style={{display: 'inline', marginRight: '10px'}}>
                            <span>S'approprier</span>
                        </h4>
                        <p style={{display: 'inline', textAlign: 'justify'}}>
                            9. Louna a-t-elle raison concernant l'effet de la tension sur les pertes par effet Joule ?
                            ................................................................................................................................
                            ....................................................................................................</p>
                        <button
                            className="correction-btnoptic"
                            onClick={() => toggleCorrection('question9')}
                        >
                            <FaCheck/> {showCorrections.question9 ? 'Masquer la correction' : 'Afficher la correction'}
                        </button>
                        {showCorrections.question9 && (
                            <div className="correction-text" style={{
                                backgroundColor: '#e8f5e8',
                                padding: '10px',
                                borderRadius: '5px',
                                marginTop: '10px',
                                border: '1px solid #c8e6c9'
                            }}>
                                {correctAnswers.question9}
                            </div>
                        )}
                    </div>

                    <div className="question-content mt-0">
                        <h4 className="vect-title"
                            style={{display: 'inline', marginRight: '10px'}}>
                            <span>Réaliser</span>
                        </h4>

                        <div className="flex-shrink-0"
                             style={{
                                 maxWidth: '100%',
                                 cursor: 'pointer',
                                 marginTop: '20px',
                                 marginBottom: '10px',

                             }}>
                            <img
                                src={montageTransportImage}
                                alt="Montage modélisant le transport d'électricité"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(montageTransportImage, 'Montage transport')}
                            />
                        </div>
                        <div
                            style={{
                                justifyContent: 'center',
                                maxWidth: '60%',
                                cursor: 'pointer',
                                marginTop: '20px',
                                marginBottom: '10px',
                                marginLeft: '20%'
                            }}
                        >
                            <img
                                src={montageTransportImage2}
                                alt="Montage modélisant le transport d'électricité"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(montageTransportImage2, 'Montage transport')}
                            />
                        </div>

                        <p>
                            10. À quoi correspond la valeur 33&nbsp;Ω dans le montage ?<br/>
                            ...............................................................................................................
                            ......................................................................................
                        </p>

                        <button
                            className="correction-btnoptic"
                            onClick={() => toggleCorrection('question10')}
                        >
                            <FaCheck/> {showCorrections.question10 ? 'Masquer la correction' : 'Afficher la correction'}
                        </button>
                        {showCorrections.question10 && (
                            <div className="correction-text" style={{
                                backgroundColor: '#e8f5e8',
                                padding: '10px',
                                borderRadius: '5px',
                                marginTop: '10px',
                                border: '1px solid #c8e6c9'
                            }}>
                                {correctAnswers.question10}
                            </div>
                        )}

                        <p className="mt-3">11. Relever les valeurs de I₁, I₂, I₃ :
                            .............................................................................................................................................................
                            ................................................................................................................
                            ................................................................................................................
                        </p>
                        <button
                            className="correction-btnoptic"
                            onClick={() => toggleCorrection('question11')}
                        >
                            <FaCheck/> {showCorrections.question11 ? 'Masquer la correction' : 'Afficher la correction'}
                        </button>
                        {showCorrections.question11 && (
                            <div className="correction-text" style={{
                                backgroundColor: '#e8f5e8',
                                padding: '10px',
                                borderRadius: '5px',
                                marginTop: '10px',
                                border: '1px solid #c8e6c9'
                            }}>
                                {correctAnswers.question11}
                            </div>
                        )}

                        <p className="mt-3">12. Quel rôle joue le premier transformateur ?
                            ...............................................................................................................................................
                            ................................................................................................................
                            ................................................................................................................
                        </p>
                        <button
                            className="correction-btnoptic"
                            onClick={() => toggleCorrection('question12')}
                        >
                            <FaCheck/> {showCorrections.question12 ? 'Masquer la correction' : 'Afficher la correction'}
                        </button>
                        {showCorrections.question12 && (
                            <div className="correction-text" style={{
                                backgroundColor: '#e8f5e8',
                                padding: '10px',
                                borderRadius: '5px',
                                marginTop: '10px',
                                border: '1px solid #c8e6c9'
                            }}>
                                {correctAnswers.question12}
                            </div>
                        )}

                        <p className="mt-3">13. Quel rôle joue le deuxième transformateur ?
                            ............................................................................................................................................
                            ................................................................................................................
                            ................................................................................................................
                        </p>
                        <button
                            className="correction-btnoptic"
                            onClick={() => toggleCorrection('question13')}
                        >
                            <FaCheck/> {showCorrections.question13 ? 'Masquer la correction' : 'Afficher la correction'}
                        </button>
                        {showCorrections.question13 && (
                            <div className="correction-text" style={{
                                backgroundColor: '#e8f5e8',
                                padding: '10px',
                                borderRadius: '5px',
                                marginTop: '10px',
                                border: '1px solid #c8e6c9'
                            }}>
                                {correctAnswers.question13}
                            </div>
                        )}

                        <div style={{
                            backgroundColor: '#fff3cd',
                            padding: '15px',
                            borderRadius: '8px',
                            margin: '15px 0',
                            border: '1px solid #ffeaa7'
                        }}>
                            <p><strong>Compléter la phrase :</strong></p>
                            <p>Lors du transport de l'électricité, un premier transformateur
                                <input type="text" style={{
                                    width: '120px',
                                    display: 'inline',
                                    margin: '0 5px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                    padding: '2px'
                                }} placeholder=""/>
                                la tension pour
                                <input type="text" style={{
                                    width: '120px',
                                    display: 'inline',
                                    margin: '0 5px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                    padding: '2px'
                                }} placeholder=""/>
                                l'intensité circulant dans les câbles, ce qui
                                <input type="text" style={{
                                    width: '120px',
                                    display: 'inline',
                                    margin: '0 5px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                    padding: '2px'
                                }} placeholder=""/>
                                les pertes causées par effet Joule.</p>
                        </div>
                    </div>
                </section>

            </div>

            {modalState.show && (<ModalImage
                imageUrl={modalState.imageUrl}
                altText={modalState.altText}
                onClose={closeModal}
            />)}
        </div>
    </>);
};

export default ActTransportEnergie;
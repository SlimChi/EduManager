import React, {useRef, useState} from 'react';
import {FaCheck, FaIndustry, FaRuler, FaRunning} from 'react-icons/fa';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import ModalImage from "../../../../utils/ModalImage";
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";
import {IoMdSchool} from "react-icons/io";

// Images
import escalatorImage from "../../../../assets/escalator.png";
import roueImage from "../../../../assets/roue.png";
import deplacementImage from "../../../../assets/deplacement.png";
import veloImage from "../../../../assets/trajectoire-roue.png";

const Act1et2Mecanic = () => {
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
    });

    // Réponses attendues
    const correctAnswers = {
        question1: 'Aurélie descend les marches, Charlotte est immobile sur l\'escalator, Sébastien est immobile sur une marche supérieure.',
        question2: 'Par rapport au sol : Aurélie et Charlotte sont en mouvement. Par rapport à l\'escalator : Aurélie est en mouvement, Charlotte est immobile.',
        question3: 'Charlotte est en mouvement par rapport au sol mais immobile par rapport à l\'escalator. Le mouvement dépend du référentiel choisi.',
        question4: 'Pour décrire l\'état de mouvement ou de repos d\'un objet, il faut préciser le référentiel.',
        question5: 'Ludovic étudie le moyeu et la valve de la roue avant du vélo.',
        question6: 'Le référentiel choisi est le sol (référentiel terrestre).',
        question7: 'Par rapport au référentiel terrestre : le moyeu décrit une droite, la valve décrit une cycloïde.',
        question8: 'Le disque permet de simuler le mouvement de la roue et de tracer les trajectoires du moyeu et de la valve.',
        question9: 'Les trajectoires expérimentales confirment que le moyeu a une trajectoire rectiligne et la valve une trajectoire cycloïdale.',
        question10: 'Oui, les propositions sont validées car les trajectoires observées correspondent aux trajectoires théoriques attendues.',
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

    if (className === 'Seconde-mecanique-act1') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" id="mecanique-content" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Mecanique_Mouvement_Trajectoire"
                pageCount={2}
                quality="hd"
            />

            {/* PAGE 1 */}
            <div className="print-page" id="page1-start">
                <section className="tp-section compact">
                    <div className="activity-header mt-0">
                        <span className="activity-badge ">ACTIVITÉ 1</span>
                        <div className="activity-title">
                            <span className="course-title" style={{marginRight: '-20px'}}>
                                <span> 🚶 </span>  « Reconnaître un état de mouvement ou de repos d'un solide »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <h5 className="mb-3 text-primary fw-bold">🚆 "Le mystère de l'escalator en gare !"</h5>
                                <p style={{textAlign: 'justify', fontSize: '15px', lineHeight: '1.3'}}>
                                    Le train d'<span style={{fontWeight: 'bold', color: '#1976d2'}}>Aurélie</span> part
                                    dans 2 minutes 30 secondes.
                                    Elle emprunte l'escalator qui conduit sur les quais et descend les marches de peur
                                    de rater sa correspondance.
                                    <br/>
                                    Sur le même escalator, <span
                                    style={{fontWeight: 'bold', color: '#1976d2'}}>Charlotte</span>, qui prend un autre
                                    train,
                                    attend sans bouger. <span
                                    style={{fontWeight: 'bold', color: '#1976d2'}}>Sébastien</span> est immobile sur une
                                    marche
                                    supérieure et filme la scène. Il affirme que Charlotte est en mouvement.
                                    <br/>
                                    <span style={{fontStyle: 'italic', color: '#2e7d32'}}>
                                        "Qu'en pensez-vous ? Charlotte est-elle vraiment en mouvement ?"
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0"
                             style={{maxWidth: '200px', cursor: 'pointer', marginTop: '-10px'}}>
                            <img src={escalatorImage} alt="Escalator en gare"
                                 className="img-fluid rounded shadow-sm compact-img"
                                 onClick={() => openModal(escalatorImage, 'Escalator en gare')}/>
                        </div>
                    </div>

                    <div className="objectif-box" style={{marginTop: '5px', marginBottom: '5px'}}>
                        <div className="objectif-title"><strong style={{color: 'orangered'}}> Objectif :</strong> 🎯
                        </div>
                        <p>Comprendre que le mouvement d'un objet dépend du référentiel choisi et apprendre à décrire
                            l'état de mouvement ou de repos d'un solide.</p>
                    </div>

                    {/* Section S'approprier */}
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
                                    1. Observer attentivement la situation et décrire le comportement de chaque
                                    personne.
                                </p><a href="https://lienmini.fr/0341-011" target="_blank"
                                       rel="noopener noreferrer">https://lienmini.fr/0341-011</a>
                            </div>
                            <div className="answer-space "
                                 style={{height: '60px', marginBottom: '10px', borderBottom: '1px dashed #ccc'}}></div>
                            <button className="correction-btnoptic" onClick={() => toggleCorrection('question1')}>
                                <FaCheck/> {showCorrections.question1 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                            {showCorrections.question1 && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.question1}
                                </div>
                            )}
                        </div>

                        <div className="question-content">
                            <div style={{
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: '10px',
                                marginBottom: '15px',
                                flexWrap: 'wrap'
                            }}>
                                <h4 className="vect-title" style={{margin: 0, whiteSpace: 'nowrap'}}>
                                    <span>Réaliser</span>
                                </h4>
                                <p style={{margin: 0, flex: 1}}>
                                    2. Compléter le schéma de la situation en y faisant figurer le prénom de chaque
                                    personnage et le sol.
                                </p>
                            </div>
                            <p>3. Indiquer par une flèche le sens de déplacement de l'escalator.</p>
                        </div>

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
                                    4. Indiquer l'état de mouvement ou de repos de chaque personne.
                                </p>
                            </div>

                            <p><strong>Par rapport au sol :</strong></p>
                            <div className="qcm-container">
                                {['Aurélie', 'Charlotte', 'Sébastien'].map((person, index) => (
                                    <div key={index} className="qcm-option">
                                        <label className="radio-label">
                                            <input type="checkbox" className="radio-input"/>
                                            <span className="radio-checkmark"></span>
                                            {person}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-3"><strong>Par rapport à l'escalator :</strong></p>
                            <div style={{marginBottom: '15px'}}>
                                <p style={{fontWeight: '500', marginBottom: '8px'}}>Les personnes en mouvement sont
                                    :</p>
                                <div className="qcm-container">
                                    {['Aurélie', 'Charlotte', 'Sébastien'].map((person, index) => (
                                        <div key={index} className="qcm-option">
                                            <label className="radio-label">
                                                <input type="checkbox" className="radio-input"/>
                                                <span className="radio-checkmark"></span>
                                                {person}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p style={{fontWeight: '500', marginBottom: '8px'}}>Les personnes immobiles sont :</p>
                                <div className="qcm-container">
                                    {['Aurélie', 'Charlotte', 'Sébastien'].map((person, index) => (
                                        <div key={index} className="qcm-option">
                                            <label className="radio-label">
                                                <input type="checkbox" className="radio-input"/>
                                                <span className="radio-checkmark"></span>
                                                {person}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="correction-btnoptic" onClick={() => toggleCorrection('question2')}
                                    style={{marginTop: '15px'}}>
                                <FaCheck/> {showCorrections.question2 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                            {showCorrections.question2 && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.question2}
                                </div>
                            )}
                        </div>

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
                                    5. D'après vos observations, peut-on dire que Charlotte est en mouvement comme le
                                    prétend Sébastien ? Justifier la réponse.
                                </p>
                            </div>
                            <div className="answer-space2"
                                 style={{height: '60px', marginBottom: '10px', borderBottom: '1px dashed #ccc'}}></div>
                            <button className="correction-btnoptic" onClick={() => toggleCorrection('question3')}>
                                <FaCheck/> {showCorrections.question3 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                            {showCorrections.question3 && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.question3}
                                </div>
                            )}

                            <p className="mt-3">6. Que faut-il donc préciser pour décrire l'état de mouvement ou de
                                repos d'un objet ?</p>
                            <div className="answer-space2"
                                 style={{height: '40px', marginBottom: '10px', borderBottom: '1px dashed #ccc'}}></div>
                            <button className="correction-btnoptic" onClick={() => toggleCorrection('question4')}>
                                <FaCheck/> {showCorrections.question4 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                            {showCorrections.question4 && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.question4}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>

            {/* PAGE 2 */}
            <div className="print-page" id="page2-start">
                <section className="tp-section compact">
                    <div className="math-chapter-box green" style={{padding: '0'}}>
                        <span style={{marginRight: '10px', fontSize: '30px'}}>🚴</span>
                        <h2 className="math-chapter-title-test">Mécanique - Trajectoire d'un solide</h2>
                    </div>

                    <div className="activity-header">
                        <span className="activity-badge">ACTIVITÉ 2</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaRuler/> <span>📏</span> « Identifier la trajectoire d'un solide »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <p style={{textAlign: 'justify', fontSize: '15px', lineHeight: '1.4'}}>
                                    🚴 <strong>Au bord d'une route, sur une portion en ligne droite</strong>,
                                    Ludovic, immobile, assiste au passage des cyclistes participant à une course.
                                    <br/>
                                    Il observe les positions successives de l'axe du moyeu (axe de la roue) et de la
                                    valve de la roue avant d'un coureur sur quelques mètres, par rapport au sol.
                                    <br/> <strong className="text-primary">
                                    Quelles sont les trajectoires du moyeu et de la valve de la roue du vélo ?
                                </strong>
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0" style={{maxWidth: '250px', cursor: 'pointer'}}>
                            <img src={veloImage} alt="Vélo en mouvement"
                                 className="img-fluid rounded shadow-sm compact-img"
                                 onClick={() => openModal(veloImage, 'Vélo en mouvement')}/>
                        </div>
                    </div>

                    {/* Section S'approprier avec image à droite */}
                    <div className="question-card mt-3">
                        <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                            <div style={{flex: 1, minWidth: '300px'}}>
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
                                        1. Quels systèmes mécaniques Ludovic étudie-t-il sur la roue avant ?
                                    </p>
                                </div>
                                <div className="answer-space2" style={{
                                    height: '40px',
                                    marginBottom: '10px',
                                    borderBottom: '1px dashed #ccc'
                                }}></div>

                                <p className="mt-3">2. Indiquer le référentiel choisi par Ludovic pour étudier la
                                    trajectoire du moyeu et de la valve du vélo.</p>
                                <div className="answer-space2" style={{
                                    height: '40px',
                                    marginBottom: '10px',
                                    borderBottom: '1px dashed #ccc'
                                }}></div>

                                <div style={{display: 'flex', gap: '10px', marginTop: '15px'}}>
                                    <button className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question5')}>
                                        <FaCheck/> {showCorrections.question5 ? 'Masquer' : 'Correction 1'}
                                    </button>
                                    <button className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question6')}>
                                        <FaCheck/> {showCorrections.question6 ? 'Masquer' : 'Correction 2'}
                                    </button>
                                </div>

                                {showCorrections.question5 && (
                                    <div className="correction-box">
                                        <strong>Correction 1 :</strong> {correctAnswers.question5}
                                    </div>
                                )}
                                {showCorrections.question6 && (
                                    <div className="correction-box">
                                        <strong>Correction 2 :</strong> {correctAnswers.question6}
                                    </div>
                                )}
                            </div>

                            <div className="flex-shrink-0"
                                 style={{maxWidth: '200px', cursor: 'pointer', marginTop: '80px'}}>
                                <img src={roueImage} alt="Roue de vélo" className="img-fluid rounded shadow-sm"
                                     onClick={() => openModal(roueImage, 'Roue de vélo')} style={{maxHeight: '150px'}}/>
                                <p className="text-center mt-1" style={{fontSize: '12px', color: '#666'}}>Roue avant du
                                    vélo</p>
                            </div>
                        </div>
                    </div>

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
                                3. Cocher les bonnes propositions.
                            </p>
                        </div>

                        <p><strong>Par rapport au référentiel terrestre :</strong></p>

                        <p style={{marginBottom: '8px'}}>Le moyeu M de la roue du vélo décrit :</p>
                        <div className="qcm-container">
                            {['une droite', 'un cercle', 'une cycloïde', 'autre'].map((option, index) => (
                                <div key={index} className="qcm-option">
                                    <label className="radio-label">
                                        <input type="checkbox" className="radio-input"/>
                                        <span className="radio-checkmark"></span>
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </div>

                        <p style={{marginBottom: '8px', marginTop: '15px'}}>La valve V de la roue du vélo décrit :</p>
                        <div className="qcm-container">
                            {['une droite', 'un cercle', 'une cycloïde', 'autre'].map((option, index) => (
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
                                style={{marginTop: '15px'}}>
                            <FaCheck/> {showCorrections.question7 ? 'Masquer la correction' : 'Afficher la correction'}
                        </button>
                        {showCorrections.question7 && (
                            <div className="correction-box">
                                <strong>Correction :</strong> {correctAnswers.question7}
                            </div>
                        )}
                    </div>

                    {/* Section Réaliser avec image à droite */}
                    <div className="question-card mt-1">
                        <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                            <div style={{flex: 1, minWidth: '300px'}}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'baseline',
                                    gap: '10px',
                                    marginBottom: '10px',
                                    flexWrap: 'wrap'
                                }}>
                                    <h4 className="vect-title" style={{margin: 0, whiteSpace: 'nowrap'}}>
                                        <span>Réaliser</span>
                                    </h4>
                                </div>
                                <p style={{margin: '2px 0', lineHeight: '1.3'}}>4. Découper un disque de 3 cm de rayon
                                    dans un morceau de carton.</p>
                                <p style={{margin: '2px 0', lineHeight: '1.3'}}>5. Faire deux trous sur le disque : un
                                    au centre et un à 3 mm du bord.</p>
                                <p style={{margin: '2px 0', lineHeight: '1.3'}}>6. Tracer une demi-droite [Ox] sur la
                                    longueur d'une feuille A3 blanche et poser le disque.</p>
                                <p style={{margin: '2px 0', lineHeight: '1.3'}}>7. Placer la pointe d'un crayon au
                                    centre de la roue tout en faisant 1 tour de roue.</p>
                                <p style={{margin: '2px 0', lineHeight: '1.3'}}>8. Renouveler l'expérience pour la valve
                                    de la roue.</p>

                                <button className="correction-btnoptic" onClick={() => toggleCorrection('question8')}
                                        style={{marginTop: '10px'}}>
                                    <FaCheck/> {showCorrections.question8 ? 'Masquer la correction' : 'Afficher la correction'}
                                </button>
                                {showCorrections.question8 && (
                                    <div className="correction-box">
                                        <strong>Correction :</strong> {correctAnswers.question8}
                                    </div>
                                )}
                            </div>

                            <div className="flex-shrink-0"
                                 style={{maxWidth: '200px', cursor: 'pointer', marginTop: '50px'}}>
                                <img src={deplacementImage} alt="Déplacement roue"
                                     className="img-fluid rounded shadow-sm"
                                     onClick={() => openModal(deplacementImage, 'Déplacement de la roue')}
                                     style={{maxHeight: '150px'}}/>
                                <p className="text-center mt-1" style={{fontSize: '12px', color: '#666'}}>Mouvement de
                                    la roue</p>
                            </div>
                        </div>
                    </div>

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
                                9. Ouvrir le fichier «roue01». Avec l'outil, sélectionner le moyeu et faire avancer la
                                roue. Comparer les trajectoires obtenues.
                            </p>
                        </div>
                        <div className="answer-space2"
                             style={{height: '40px', marginBottom: '10px', borderBottom: '1px dashed #ccc'}}></div>
                        <button className="correction-btnoptic" onClick={() => toggleCorrection('question9')}>
                            <FaCheck/> {showCorrections.question9 ? 'Masquer la correction' : 'Afficher la correction'}
                        </button>
                        {showCorrections.question9 && (
                            <div className="correction-box">
                                <strong>Correction :</strong> {correctAnswers.question9}
                            </div>
                        )}
                    </div>

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
                                10. Vos propositions sont-elles validées ? Justifier.
                            </p>
                        </div>
                        <div className="answer-space2"
                             style={{height: '40px', marginBottom: '10px', borderBottom: '1px dashed #ccc'}}></div>
                        <button className="correction-btnoptic" onClick={() => toggleCorrection('question10')}>
                            <FaCheck/> {showCorrections.question10 ? 'Masquer la correction' : 'Afficher la correction'}
                        </button>
                        {showCorrections.question10 && (
                            <div className="correction-box">
                                <strong>Correction :</strong> {correctAnswers.question10}
                            </div>
                        )}
                    </div>

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

export default Act1et2Mecanic;
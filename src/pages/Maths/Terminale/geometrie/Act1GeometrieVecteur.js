import React, {useRef, useState} from 'react';
import {FaPrint, FaCheck, FaVectorSquare, FaPlus, FaEquals, FaCode, FaBuilding} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import 'katex/dist/katex.min.css';
import {BlockMath, InlineMath} from 'react-katex';
import {Card} from "react-bootstrap";
import ModalImage from "../../../../utils/ModalImage";
import montAigoual from "../../../../assets/chamonix.jpg";

import montAigoual3D from "../../../../assets/reperevecteurpylone.png";
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";

const Act1GeometrieVecteur = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const toggleSummary = () => {
        setShowSummary(!showSummary);
    };
    const contentRef = useRef();
    const [showSummary, setShowSummary] = useState(false);
    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false,
    });

    // Réponses attendues
    const correctAnswers = {
        // C(40;40;0)</strong> et <strong>D(0;40;0)
        question1: 'H(20 ; 20 ; 0)\nE(20 ; 20 ; 40)\nF(20 ; 20 ; 50)',
        question2: 'EA→ = (-20; -20; -40)\nEB→ = (20; -20; -40)\nEC→ = (20; 20; -40)\nED→ = (-20; 20; -40)',
        question3: 'EA ≈ 49 m\nEB ≈ 49 m\nEC ≈ 49 m\nED ≈ 49 m',
        question4: 'Les quatre longueurs sont égales (≈ 49 m), ce qui est logique car les haubans sont attachés de façon symétrique par rapport au centre.',
        question5: 'La longueur totale de câble nécessaire est : 4 × 49 = 196,00 mètres (à 0,01 m près)',
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
        show: false,
        imageUrl: '',
        altText: '',
    });

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState((prev) => ({...prev, show: false}));
    };

    if (className === 'Seconde-geometrie-act1') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Geometrie_Vecteur_Pylones"
                pageCount={2}
                quality="hd"
            />

            {/* PAGE 1 */}
            <div className="print-page">
                <div className="math-chapter-box blue" style={{padding: '0'}}>
                    <span style={{marginRight: '10px', fontSize: '30px'}}>↗️</span>
                    <h2 className="math-chapter-title-test">Géométrie vectorielle dans l'espace</h2>
                </div>
                <div className="activity-header">
                    <span className="activity-badge">ACTIVITÉ 1</span>
                    <div className="activity-title">
                      <span className="course-title">
                        <FaBuilding/> <span>🏗️</span> « Pylônes de la station de Chamonix  »
                      </span>
                    </div>
                </div>
                <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                    <div style={{flex: 1, minWidth: '300px'}}>
                        <div className="renovation-contexte">
                            <p style={{textAlign: 'justify', textJustify: 'inter-word', fontSize: '16px'}}>
                                Pour solidifier les pylônes du mont <strong>Chamonix</strong>, des haubans en acier
                                ont été installés. Ces
                                câbles, fixés au sol, sont attachés au pylône à <strong>29 m</strong> de hauteur. Chaque
                                pylône mesure <strong>40 m</strong>. Pour déterminer la longueur des haubans, on
                                modélise la
                                situation dans un repère orthonormé (<strong>1 unité = 1 m</strong>). Les points
                                d'ancrage
                                au sol sont :<br/>
                                <strong>A(0;0;0)</strong>, <strong>B(40;0;0)</strong>, <strong>C(40;40;0)</strong> et <strong>D(0;40;0)</strong>.
                            </p>
                        </div>
                    </div>
                    <div className="flex-shrink-0"
                         style={{maxWidth: '350px', cursor: 'pointer', marginBottom: '10px'}}>
                        <img
                            src={montAigoual}
                            alt="Lancer de Dés"
                            className="img-fluid rounded shadow-sm compact-img"
                            onClick={() => openModal(montAigoual, 'Lancer de Dés')}
                        />
                    </div>

                    <div className="objectif-box" style={{marginTop: '-30px'}}>
                        <div className="objectif-title"><strong style={{color: 'orangered'}}> Objectif :</strong> 🎯
                        </div>
                        <p>"L'objectif est de déterminer la
                            longueur totale de câble
                            nécessaire pour un pylône du
                            mont Chamonix.</p>

                    </div>

                </div>
                <div className="question-card" style={{marginTop: '10px'}}>
                    <div className="question-number2">1</div>
                    <div className="question-content">
                        <h4 className="vect-title"><span>S'approprier</span></h4>
                        <p>En s'aidant du repère ci-dessous et des données de l'énoncé, donner les coordonnées des
                            points suivants : E, le point d'attache des haubans, F, le sommet du pylône et H, le
                            point de base du pylône.</p>

                        <div className="vect-image-text-container" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}>
                            <div
                                className="imageVecteur flex-shrink-0"
                                style={{
                                    maxWidth: '320px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}
                            >
                                <img
                                    src={montAigoual3D}
                                    alt="Lancer de Dés"
                                    className="img-fluid rounded shadow-sm compact-img"
                                    onClick={() => openModal(montAigoual3D, 'Lancer de Dés')}
                                    style={{
                                        maxWidth: '360px',
                                        height: 'auto'
                                    }}
                                />
                                <p className="objectif-phrase">Représentation 3D d'un pylône haubané avec axes et
                                    points de coordonnées A, B, C, D, E, F.</p>
                            </div>
                        </div>

                        <div className="answer-area">
                                <textarea
                                    className="answer-input"
                                    value={answers.question1}
                                    onChange={(e) => handleInputChange('question1', e.target.value)}
                                    rows={3}
                                ></textarea>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question1')}
                            >
                                <FaCheck/> {showCorrections.question1 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* PAGE 2 */}
            <div className="print-page">
                <div className="tp-section">
                    <div className="question-card">
                        <div className="question-number2">2</div>
                        <div className="question-content">
                            <h4 className="vect-title"><span>Analyser/Raisonner</span></h4>
                            <p>Dans un repère orthonormé de l'espace, si A(x<sub>A</sub>; y<sub>A</sub>; z<sub>A</sub>)
                                et B(x<sub>B</sub>; y<sub>B</sub>; z<sub>B</sub>), alors les coordonnées du
                                vecteur <span
                                    className="math-formula-act-vecteur">AB</span> sont :</p>

                            <div className="math-formula">
                              <span className="math-formula-act-vecteur">
                                <BlockMath
                                    math="\vec{AB} = \begin{pmatrix} x_B - x_A \\ y_B - y_A \\ z_B - z_A \end{pmatrix}"/>
                              </span>
                            </div>

                            <p>Déterminer les coordonnées des vecteurs <span
                                className="math-formula-act-vecteur">EA</span>, <span
                                className="math-formula-act-vecteur">EB</span>, <span
                                className="math-formula-act-vecteur">EC</span> et <span
                                className="math-formula-act-vecteur">ED</span> symbolisant l'action des haubans sur le
                                pylône.</p>

                            <div className="answer-area">
                                <textarea
                                    className="answer-input"
                                    value={answers.question2}
                                    onChange={(e) => handleInputChange('question2', e.target.value)}
                                    rows={4}
                                ></textarea>
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('question2')}
                                >
                                    <FaCheck/> {showCorrections.question2 ? 'Masquer la correction' : 'Afficher la correction'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-card">
                    <div className="question-number2">3</div>
                    <div className="question-content">
                        <h4 className="vect-title"><span>Réaliser</span></h4>
                        <p>Dans un repère orthonormé de l'espace, la norme du vecteur <span
                            className="math-formula-act-vecteur">AB</span> s'obtient de la manière suivante :</p>

                        <div className="math-formula">
                              <span className="math-formula-act-vecteur">
                                <BlockMath math="\|\vec{AB}\| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}"/>
                              </span>
                        </div>

                        <p>Calculer, à 0,01 m près, les longueurs des quatre haubans EA, EB, EC et ED.</p>

                        <div className="answer-area">
                                <textarea
                                    className="answer-input"
                                    value={answers.question3}
                                    onChange={(e) => handleInputChange('question3', e.target.value)}
                                    rows={4}
                                ></textarea>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question3')}
                            >
                                <FaCheck/> {showCorrections.question3 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="question-card">
                    <div className="question-number2">4</div>
                    <div className="question-content">
                        <h4 className="vect-title"><span>Valider</span></h4>
                        <p>Vérifier les longueurs obtenues.</p>

                        <div className="answer-area">
                                <textarea
                                    className="answer-input"
                                    value={answers.question4}
                                    onChange={(e) => handleInputChange('question4', e.target.value)}
                                    rows={3}
                                ></textarea>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question4')}
                            >
                                <FaCheck/> {showCorrections.question4 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE 3 */}
            <div className="print-page">
                <div className="tp-section">
                    <div className="question-card">
                        <div className="question-number2">5</div>
                        <div className="question-content">
                            <h4 className="vect-title"><span>Communiquer</span></h4>
                            <p>Répondre à la problématique : Quelle est la longueur totale de câble nécessaire pour un
                                pylône du mont Aigoual ?</p>

                            <div className="answer-area">
                                <textarea
                                    className="answer-input"
                                    value={answers.question5}
                                    onChange={(e) => handleInputChange('question5', e.target.value)}
                                    rows={3}
                                ></textarea>
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('question5')}
                                >
                                    <FaCheck/> {showCorrections.question5 ? 'Masquer la correction' : 'Afficher la correction'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div style={{padding: '20px'}}>
                        {/* Titre et bouton pour afficher/masquer */}
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h3>📌 À retenir</h3>
                            <button
                                className="correction-btn"
                                onClick={toggleSummary}
                                style={{marginLeft: '10px'}}
                            >
                                {showSummary ? 'Masquer' : 'Afficher'} les informations
                            </button>
                        </div>

                        {/* Contenu du résumé */}
                        <div className="vector-summary-container">
                            {showSummary ? (
                                <div className="vector-cards-grid">
                                    {/* Carte avec les informations à retenir */}
                                    <div className="vector-card vector-geometry-card">
                                        <h4>Vecteur AB</h4>
                                        <p>
                                            Dans un repère orthonormé (O; <InlineMath math="i, j, k"/>), on considère
                                            les points A(<InlineMath math="x_A, y_A, z_A"/>) et B(<InlineMath
                                            math="x_B, y_B, z_B"/>).
                                        </p>
                                        <p>Les coordonnées du vecteur <InlineMath math="\vec{AB}"/> sont :</p>
                                        <BlockMath
                                            math="\vec{AB} = \begin{pmatrix} x_B - x_A \\ y_B - y_A \\ z_B - z_A \end{pmatrix}"
                                        />
                                        <p>La norme du vecteur <InlineMath math="\vec{AB}"/> est :</p>
                                        <BlockMath
                                            math="\|\vec{AB}\| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="vector-cards-grid">
                                    {/* Cartes vides lorsque masqué */}
                                    <div className="vector-card" style={{
                                        border: '2px dashed #ccc', minHeight: '250px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'
                                    }}>
                                        {/* Carte vide pour la réponse */}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <AutoEvaluationGrid/>
                </div>


            </div>
            <footer className="tp-footer">
                <p>Activité de géométrie vectorielle - Pylônes du mont Chamonix </p>
            </footer>
            {modalState.show && (<ModalImage
                imageUrl={modalState.imageUrl}
                altText={modalState.altText}
                onClose={closeModal}
            />)}
        </div>
    </>);
};

export default Act1GeometrieVecteur;
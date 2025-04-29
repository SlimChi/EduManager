import React, {useRef, useState} from 'react';
import {FaPrint, FaCheck, FaIndustry, FaCog} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import 'katex/dist/katex.min.css';
import {BlockMath, InlineMath} from 'react-katex';
import {Card} from "react-bootstrap";
import ModalImage from "../../../../utils/ModalImage";
import fraiseuse from "../../../../assets/shemafraiseuse.png";
import schemaUsinage from "../../../../assets/shemafraiseuse2.png";
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";

const Act4Geometrie = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

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

    // Réponses attendues avec notation mathématique
    const correctAnswers = {
        question1: {
            text: "I(20, 10, 0)\nJ(40, 10, 0)\nK(40, 30, 0)\nL(20, 30, 0)",
            formatted: <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                gap: '20px' // Espace horizontal et vertical
            }}>
                <BlockMath math="\text{I} = \begin{pmatrix} 20 \\ 10 \\ 0 \end{pmatrix}"/>
                <BlockMath math="\text{J} = \begin{pmatrix} 40 \\ 10 \\ 0 \end{pmatrix}"/>
                <BlockMath math="\text{K} = \begin{pmatrix} 40 \\ 30 \\ 0 \end{pmatrix}"/>
                <BlockMath math="\text{L} = \begin{pmatrix} 20 \\ 30 \\ 0 \end{pmatrix}"/>
            </div>
        },
        question2: {
            text: "M(20, 10, -10)\nN(40, 10, -10)\nO(40, 30, -10)\nP(20, 30, -10)",
            formatted: <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                gap: '20px' // Espace horizontal et vertical
            }}>
                <BlockMath math="\text{M} = \begin{pmatrix} 20 \\ 10 \\ -10 \end{pmatrix}"/>
                <BlockMath math="\text{N} = \begin{pmatrix} 40 \\ 10 \\ -10 \end{pmatrix}"/>
                <BlockMath math="\text{O} = \begin{pmatrix} 40 \\ 30 \\ -10 \end{pmatrix}"/>
                <BlockMath math="\text{P} = \begin{pmatrix} 20 \\ 30 \\ -10 \end{pmatrix}"/>
            </div>
        },
        question3: {
            text: "S(20, 10, 20)",
            formatted: <BlockMath math="\text{S} = \begin{pmatrix} 20 \\ 10 \\ 20 \end{pmatrix}"/>
        },
        question4: {
            text: "RS = (20, 10, -20)",
            formatted: <BlockMath math="\overrightarrow{\mathrm{RS}} = \begin{pmatrix} 20 \\ 10 \\ -20 \end{pmatrix}"/>
        },
        question5: {
            text: "1. RS = (20, 10, -20)\n2. SI = (0, 0, -20)\n3. IJ = (20, 0, 0)\n4. JK = (0, 20, 0)\n5. KL = (-20, 0, 0)\n6. LI = (0, -20, 0)\n7. IS = (0, 0, 20)\n8. SR = (-20, -10, 20)",
            formatted: <div>
                <p><strong>Instructions pour la fraiseuse :</strong></p>
                <ol style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    gap: '20px' // Espace horizontal et vertical
                }}>
                    <li><BlockMath math="\overrightarrow{\mathrm{RS}} = \begin{pmatrix} 20 \\ 10 \\ -20 \end{pmatrix}"/>
                    </li>
                    <li><BlockMath math="\overrightarrow{\mathrm{SI}} = \begin{pmatrix} 0 \\ 0 \\ -20 \end{pmatrix}"/>
                    </li>
                    <li><BlockMath math="\overrightarrow{\mathrm{IJ}} = \begin{pmatrix} 20 \\ 0 \\ 0 \end{pmatrix}"/>
                    </li>
                    <li><BlockMath math="\overrightarrow{\mathrm{JK}} = \begin{pmatrix} 0 \\ 20 \\ 0 \end{pmatrix}"/>
                    </li>
                    <li><BlockMath math="\overrightarrow{\mathrm{KL}} = \begin{pmatrix} -20 \\ 0 \\ 0 \end{pmatrix}"/>
                    </li>
                    <li><BlockMath math="\overrightarrow{\mathrm{LI}} = \begin{pmatrix} 0 \\ -20 \\ 0 \end{pmatrix}"/>
                    </li>
                    <li><BlockMath math="\overrightarrow{\mathrm{IS}} = \begin{pmatrix} 0 \\ 0 \\ 20 \end{pmatrix}"/>
                    </li>
                    <li><BlockMath
                        math="\overrightarrow{\mathrm{SR}} = \begin{pmatrix} -20 \\ -10 \\ 20 \end{pmatrix}"/></li>
                </ol>

            </div>
        },
    };

    // Gestionnaires d'événements
    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));

        if (!answers[field] && !showCorrections[field]) {
            setAnswers((prev) => ({...prev, [field]: correctAnswers[field].text}));
        }
    };

    const toggleSummary = () => {
        setShowSummary(!showSummary);
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

    if (className === 'Seconde-geometrie-act4') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" ref={contentRef} style={{fontFamily: 'Cambria Math'}}>
            <PrintManager
                contentRef={contentRef}
                activityName="Geometrie_Vecteur_Usinage"
                pageCount={2}
                quality="hd"
            />

            {/* PAGE 1 */}
            <div className="print-page">
                <div className="math-chapter-box orange mt-0" style={{padding: '0'}}>
                    <span style={{marginRight: '10px', fontSize: '30px'}}>⚙️</span>
                    <h2 className="math-chapter-title-test mt-0">Géométrie vectorielle appliquée à l'usinage</h2>
                </div>
                <div className="activity-header mt-0">
                    <span className="activity-badge">ACTIVITÉ 4</span>
                    <div className="activity-title">
                      <span className="course-title">
                         <span>🛠️</span> « Découpe avec une fraiseuse »
                      </span>
                    </div>
                </div>
                <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                    <div>
                        <div className="renovation-contexte" style={{maxWidth: '100%'}}>
                            <p style={{textAlign: 'justify', textJustify: 'inter-word'}}>
                                ⚙️ <strong>Problème technique :</strong> On souhaite utiliser une <strong>fraiseuse à
                                commande numérique</strong> (FCN) pour usiner, dans un bloc d'aluminium de 10 mm
                                d'épaisseur, le contour de la forme en bleu représentée ci-après (cycle de contournage
                                extérieur).
                                <br/><br/>
                                Les mesures du repère sont données en <strong>millimètre</strong>. Au départ du
                                programme, le point de programmation (pointe de l'outil) se situe en « position haute »
                                au point <InlineMath math="\text{R}(0;0;40)"/>.
                            </p>
                        </div>
                    </div>


                    <div className="vect-image-text-container" style={{
                        marginLeft: '90px',

                    }}>
                        <div style={{maxWidth: '380px', cursor: 'pointer'}}>
                            <img
                                src={fraiseuse}
                                alt="Fraiseuse à commande numérique"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(fraiseuse, 'Fraiseuse à commande numérique')}
                                style={{width: '100%', height: 'auto'}}
                            />
                        </div>
                        <div style={{maxWidth: '300px', cursor: 'pointer'}}>
                            <img
                                src={schemaUsinage}
                                alt="Schéma d'usinage"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(schemaUsinage, 'Schéma d\'usinage')}
                                style={{width: '100%', height: 'auto'}}
                            />
                        </div>
                    </div>

                    <div className="objectif-box" style={{marginTop: '-10px'}}>
                        <p><strong> Objectif :</strong> 🎯 "Déterminer les instructions à donner à la machine pour usiner
                            la forme demandée."</p>
                    </div>
                </div>

                <div className="row" style={{marginTop: '5px'}}>
                    {/* Colonne de gauche */}
                    <div className="col-md-6 mt-0">
                        <div className="question-card mt-0">
                            <div className="question-content">
                                <h4 className="vect-title"><span>1 . S'approprier, Réaliser</span></h4>
                                <p>Donner les coordonnées des points <InlineMath math="\text{I}"/>, <InlineMath
                                    math="\text{J}"/>, <InlineMath math="\text{K}"/> et <InlineMath math="\text{L}"/>.
                                </p>

                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question1}
                                        onChange={(e) => handleInputChange('question1', e.target.value)}
                                        rows={4}
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question1')}
                                    >
                                        <FaCheck/> {showCorrections.question1 ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question1 && (
                                        <div className="correction-box">
                                            {correctAnswers.question1.formatted}
                                        </div>
                                    )}
                                </div>

                                <h4 className="vect-title" style={{marginTop: '15px'}}>
                                    <span>2 . S'approprier, Réaliser</span>
                                </h4>
                                <p>Donner les coordonnées des points <InlineMath math="\text{M}"/>, <InlineMath
                                    math="\text{N}"/>, <InlineMath math="\text{O}"/> et <InlineMath math="\text{P}"/>.
                                </p>

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
                                    {showCorrections.question2 && (
                                        <div className="correction-box">
                                            {correctAnswers.question2.formatted}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonne de droite */}
                    <div className="col-md-6">
                        <div className="question-card">
                            <div className="question-content">
                                <h4 className="vect-title">
                                    <span>3 . Analyser/Raisonner, Réaliser</span>
                                </h4>
                                <p>On note <InlineMath math="\text{S}"/> le point se situant 30 mm au-dessus du
                                    point <InlineMath math="\text{M}"/>. Donner les coordonnées du point <InlineMath
                                        math="\text{S}"/>.</p>

                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question3}
                                        onChange={(e) => handleInputChange('question3', e.target.value)}
                                        rows={2}
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question3')}
                                    >
                                        <FaCheck/> {showCorrections.question3 ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question3 && (
                                        <div className="correction-box">
                                            {correctAnswers.question3.formatted}
                                        </div>
                                    )}
                                </div>

                                <h4 className="vect-title" style={{marginTop: '15px'}}>
                                    <span>4 . Réaliser</span>
                                </h4>
                                <p>Déterminer les coordonnées du vecteur <InlineMath
                                    math="\overrightarrow{\mathrm{RS}}"/> puis compléter le premier bloc ci-dessus.</p>

                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question4}
                                        onChange={(e) => handleInputChange('question4', e.target.value)}
                                        rows={2}
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question4')}
                                    >
                                        <FaCheck/> {showCorrections.question4 ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question4 && (
                                        <div className="correction-box">
                                            {correctAnswers.question4.formatted}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="vect-title mt-2">
                    <span>5 . Analyser/Raisonner, Réaliser, Communiquer</span>
                </h4>
                <p>Répondre à la problématique <em>Quelles instructions doit-on donner à la machine afin
                    d'usiner cette forme ?</em> en complétant chacun des blocs de la chaîne
                    d'instruction ci-dessus afin que l'outil usine la figure demandée puis retourne à sa
                    position initiale en huit instructions.</p>
            </div>

            {/* PAGE 2 */}
            <div className="print-page">
                <div className="row mt-0">
                    <div className="col-12">
                        <div className="question-card">
                            <div className="question-content">
                                <div className="alert alert-info" style={{fontSize: '0.9rem'}}>
                                    <strong>Rappel :</strong> L'outil usine tout ce qui se situe au-dessus du point de
                                    programmation (il usine sur sa hauteur). Lorsque l'on donne une instruction à la
                                    machine, on indique le vecteur de déplacement du point de programmation (pointe de
                                    l'outil). Il parcourt alors ce vecteur à partir de sa position actuelle.
                                </div>

                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question5}
                                        onChange={(e) => handleInputChange('question5', e.target.value)}
                                        rows={8}
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question5')}
                                    >
                                        <FaCheck/> {showCorrections.question5 ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question5 && (
                                        <div className="correction-box">
                                            {correctAnswers.question5.formatted}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tp-section">
                    <div style={{padding: '20px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h3>📌 À retenir 🧠</h3>
                            <button
                                className="correction-btn"
                                onClick={toggleSummary}
                                style={{marginLeft: '10px'}}
                            >
                                {showSummary ? 'Masquer' : 'Afficher'} les informations
                            </button>
                        </div>

                        <div className="vector-summary-container">
                            {showSummary ? (
                                <div className="vector-cards-grid">
                                    <div className="vector-card" style={{fontFamily: 'Cambria Math'}}>
                                        <h4>Programmation de machines-outils</h4>
                                        <p>Pour programmer une fraiseuse CNC, on utilise des <strong>vecteurs de
                                            déplacement</strong> qui indiquent comment l'outil doit se déplacer depuis
                                            sa position actuelle.</p>

                                        <h5 style={{marginTop: '1rem'}}>Conventions importantes :</h5>
                                        <ul>
                                            <li>Les coordonnées sont généralement données en mm</li>
                                            <li>L'axe Z représente la hauteur (positive vers le haut)</li>
                                            <li>Le point R est souvent la position de référence</li>
                                        </ul>
                                    </div>

                                    <div className="vector-card" style={{fontFamily: 'Cambria Math'}}>
                                        <h4>Vecteurs en usinage</h4>
                                        <p>Chaque instruction correspond à un vecteur de déplacement :</p>
                                        <BlockMath
                                            math="\overrightarrow{\text{Position Actuelle → Nouvelle Position}}"/>

                                        <h5 style={{marginTop: '1rem'}}>Exemple :</h5>
                                        <BlockMath
                                            math="\overrightarrow{\text{AB}} = \begin{pmatrix} x_B - x_A \\ y_B - y_A \\ z_B - z_A \end{pmatrix}"/>
                                    </div>
                                </div>
                            ) : (
                                <div className="vector-cards-grid" style={{marginTop: '-20px'}}>
                                    <div className="vector-card" style={{
                                        border: '2px dashed #ccc',
                                        minHeight: '250px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#999'
                                    }}>
                                    </div>
                                    <div className="vector-card" style={{
                                        border: '2px dashed #ccc',
                                        minHeight: '250px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#999'
                                    }}>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                <AutoEvaluationGrid/>
            </div>

            <footer className="tp-footer">
                <p>Activité de géométrie vectorielle - Découpe avec une fraiseuse</p>
            </footer>

            {modalState.show && (
                <ModalImage
                    imageUrl={modalState.imageUrl}
                    altText={modalState.altText}
                    onClose={closeModal}
                />
            )}
        </div>
    </>);
};

export default Act4Geometrie;
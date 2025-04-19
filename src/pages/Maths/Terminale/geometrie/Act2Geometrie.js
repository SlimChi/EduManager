import React, {useRef, useState} from 'react';
import {FaPrint, FaCheck, FaVectorSquare, FaMountain, FaSkiing} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import 'katex/dist/katex.min.css';
import {BlockMath, InlineMath} from 'react-katex';
import {Card} from "react-bootstrap";
import ModalImage from "../../../../utils/ModalImage";
import telepherique from "../../../../assets/telecabine.png";
import schemaTelepherique from "../../../../assets/telephShema.png";
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";

const Act2Geometrie = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    const contentRef = useRef();
    const [showSummary, setShowSummary] = useState(false);

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        question1: '', question2: '', question3: '', question4: '', question5: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        question1: false, question2: false, question3: false, question4: false, question5: false,
    });

    // Réponses attendues avec notation mathématique
    const correctAnswers = {
        question1: {
            text: "A1B1 = (10, 10, 5)\nB1C1 = (6, 3, 2)", formatted: <div>
                <BlockMath
                    math="\vec{A_1B_1} = \begin{pmatrix} 10-0 \\ 10-0 \\ 5-0 \end{pmatrix} = \begin{pmatrix} 10 \\ 10 \\ 5 \end{pmatrix}"/>
                <BlockMath
                    math="\vec{B_1C_1} = \begin{pmatrix} 16-10 \\ 13-10 \\ 7-5 \end{pmatrix} = \begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}"/>
            </div>
        }, question2: {
            text: "C1D1 = (20, 20, 10)", formatted: <BlockMath
                math="\vec{C_1D_1} = \begin{pmatrix} 36-16 \\ 33-13 \\ 17-7 \end{pmatrix} = \begin{pmatrix} 20 \\ 20 \\ 10 \end{pmatrix}"/>
        }, question3: {
            text: "2 × A1B1 = (20, 20, 10)\nOn remarque que 2 × A1B1 = C1D1", formatted: <div>
                <BlockMath
                    math="2 \times \vec{A_1B_1} = 2 \times \begin{pmatrix} 10 \\ 10 \\ 5 \end{pmatrix} = \begin{pmatrix} 20 \\ 20 \\ 10 \end{pmatrix}"/>
                <p>On remarque que <InlineMath math="2 \times \vec{A_1B_1} = \vec{C_1D_1}"/></p>
            </div>
        }, question4: {
            text: "Direction : Même direction (vecteurs colinéaires)\nSens : Même sens (coefficient positif)\nNorme : ||C1D1|| = 2 × ||A1B1||",
            formatted: <div>
                <p><strong>Direction :</strong> Même direction (vecteurs colinéaires)</p>
                <p><strong>Sens :</strong> Même sens (coefficient multiplicateur positif)</p>
                <p><strong>Norme :</strong> <InlineMath math="\|\vec{C_1D_1}\| = 2 \times \|\vec{A_1B_1}\|"/></p>
            </div>
        }, question5: {
            text: "C1D1 = 2 × A1B1", formatted: <BlockMath math="\vec{C_1D_1} = 2 \times \vec{A_1B_1}"/>
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

    if (className === 'Seconde-geometrie-act2') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" ref={contentRef} style={{fontFamily: 'Cambria Math'}}>
            <PrintManager
                contentRef={contentRef}
                activityName="Geometrie_Vecteur_Telepherique"
                pageCount={2}
                quality="hd"
            />

            {/* PAGE 1 */}
            <div className="print-page">
                <div className="math-chapter-box blue" style={{padding: '0'}}>
                    <span style={{marginRight: '10px', fontSize: '30px'}}>🚡</span>
                    <h2 className="math-chapter-title-test">Géométrie vectorielle dans l'espace</h2>
                </div>
                <div className="activity-header">
                    <span className="activity-badge">ACTIVITÉ 2</span>
                    <div className="activity-title">
                      <span className="course-title">
                         <span>🏔️</span> « 🎿 Téléphérique de montagne »
                      </span>
                    </div>
                </div>
                <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                    <div style={{flex: 1, minWidth: '300px'}}>
                        <div className="renovation-contexte">
                            <p style={{textAlign: 'justify', textJustify: 'inter-word', fontSize: '16px'}}>
                                Une station de ski ⛷️ prévoit d'ouvrir une nouvelle piste et d'y installer un
                                téléphérique 🚠 le long du flanc de la montagne. Le tout est modélisé dans un repère
                                orthonormé où
                                chaque unité correspond à 1 km (<InlineMath math="1 \text{ unité} = 1 \text{ km}"/>).
                                Les coordonnées reportées sur le schéma correspondent à des mesures en kilomètre.
                            </p>

                        </div>
                    </div>
                    <div className="flex-shrink-0"
                         style={{maxWidth: '360px', cursor: 'pointer', marginTop: '10px'}}>
                        <img
                            src={telepherique}
                            alt="Téléphérique de montagne"
                            className="img-fluid rounded shadow-sm compact-img"
                            onClick={() => openModal(telepherique, 'Téléphérique de montagne')}
                        />
                    </div>
                    <div className="objectif-box" style={{marginTop: '-10px'}}>
                        <p><strong> Objectif :</strong> 🎯 " L’objectif est de déterminer la longueur de câble 🔌 que la
                            station de ski 🚠 devra acheter pour installer ce téléphérique."</p>
                    </div>

                </div>
                <div className="question-card" style={{marginTop: '10px'}}>
                    <div className="question-number2">1</div>
                    <div className="question-content">
                        <h4 className="vect-title"><span>Réaliser</span></h4>
                        <p>Déterminer les coordonnées des vecteurs <InlineMath math="\vec{A_1B_1}"/> et <InlineMath
                            math="\vec{B_1C_1}"/>.</p>

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
                                    src={schemaTelepherique}
                                    alt="Schéma du téléphérique"
                                    className="img-fluid rounded shadow-sm compact-img"
                                    onClick={() => openModal(schemaTelepherique, 'Schéma du téléphérique')}
                                    style={{
                                        maxWidth: '480px', height: 'auto'

                                    }}
                                />
                                <p className="objectif-phrase">Schéma du téléphérique avec points <InlineMath
                                    math="A_1, B_1, C_1, D_1"/></p>
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
                            {showCorrections.question1 && (<div className="correction-box">
                                {correctAnswers.question1.formatted}
                            </div>)}
                        </div>
                    </div>
                </div>
                <div className="question-card">
                    <div className="question-number2">2</div>
                    <div className="question-content">
                        <h4 className="vect-title"><span>Analyser/Raisonner</span></h4>
                        <p>Déterminer les coordonnées du vecteur <InlineMath math="\vec{C_1D_1}"/>.</p>

                        <div className="answer-area">
                            <textarea
                                className="answer-input"
                                value={answers.question2}
                                onChange={(e) => handleInputChange('question2', e.target.value)}
                                rows={3}
                            ></textarea>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question2')}
                            >
                                <FaCheck/> {showCorrections.question2 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                            {showCorrections.question2 && (<div className="correction-box">
                                {correctAnswers.question2.formatted}
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE 2 */}
            <div className="print-page">
                <div className="tp-section">
                    <div className="question-card">
                        <div className="question-number2">3</div>
                        <div className="question-content">
                            <h4 className="vect-title"><span>Analyser/Raisonner</span></h4>
                            <p>Multiplier par 2 les coordonnées du vecteur <InlineMath math="\vec{A_1B_1}"/>. Que
                                remarque-t-on ?</p>

                            <div className="answer-area">
                                <textarea
                                    className="answer-input"
                                    value={answers.question3}
                                    onChange={(e) => handleInputChange('question3', e.target.value)}
                                    rows={3}
                                ></textarea>
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('question3')}
                                >
                                    <FaCheck/> {showCorrections.question3 ? 'Masquer la correction' : 'Afficher la correction'}
                                </button>
                                {showCorrections.question3 && (<div className="correction-box">
                                    {correctAnswers.question3.formatted}
                                </div>)}
                            </div>
                        </div>
                    </div>

                    <div className="question-card">
                        <div className="question-number2">4</div>
                        <div className="question-content">
                            <h4 className="vect-title"><span>Analyser/Raisonner</span></h4>
                            <p>Que peut-on dire de la direction des vecteurs <InlineMath
                                math="\vec{A_1B_1}"/> et <InlineMath math="\vec{C_1D_1}"/> ? De leur sens ? De leur
                                norme ?</p>

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
                                {showCorrections.question4 && (<div className="correction-box">
                                    {correctAnswers.question4.formatted}
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-card">
                    <div className="question-number2">5</div>
                    <div className="question-content">
                        <h4 className="vect-title"><span>Communiquer</span></h4>
                        <p>Compléter l'égalité suivante : <InlineMath math="\vec{C_1D_1} = 2 \times \ldots"/></p>

                        <div className="answer-area">
                                <textarea
                                    className="answer-input"
                                    value={answers.question5}
                                    onChange={(e) => handleInputChange('question4', e.target.value)}
                                    rows={3}
                                ></textarea>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question5')}
                            >
                                <FaCheck/> {showCorrections.question5 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                            {showCorrections.question5 && (<div className="correction-box">
                                {correctAnswers.question5.formatted}
                            </div>)}
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
                            {showSummary ? (<div className="vector-cards-grid">
                                <div className="vector-card vector-geometry-card"
                                     style={{fontFamily: 'Cambria Math'}}>
                                    <h4>Vecteurs égaux et colinéaires</h4>

                                    <p>Deux vecteurs <InlineMath math="\vec{AB}"/> et <InlineMath
                                        math="\vec{CD}"/> égaux ont :</p>
                                    <ul>
                                        <li>La même direction, le même sens et la même norme</li>
                                        <li>Les mêmes coordonnées : <BlockMath math="\vec{AB} = \vec{CD}"/></li>
                                    </ul>

                                    <p>Deux vecteurs <InlineMath math="\vec{AB}"/> et <InlineMath
                                        math="\vec{CD}"/> colinéaires :</p>
                                    <ul>
                                        <li>Ont la même direction, mais pas nécessairement le même sens ni la même
                                            norme
                                        </li>
                                        <li>Ont des coordonnées proportionnelles :
                                            <BlockMath
                                                math="\vec{AB} = k \times \vec{CD} \quad \text{ou} \quad \vec{CD} = k \times \vec{AB}"/>
                                            avec <InlineMath math="k \in \mathbb{R}"/>
                                        </li>
                                    </ul>
                                </div>
                            </div>) : (<div className="vector-cards-grid">
                                <div className="vector-card" style={{
                                    border: '2px dashed #ccc',
                                    minHeight: '250px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#999'
                                }}>
                                </div>
                            </div>)}
                        </div>
                    </div>

                </div>
                <div className="print-page" style={{marginTop: '20px'}}>
                    <AutoEvaluationGrid/>
                </div>
            </div>

            {/* PAGE 3 */}

            <footer className="tp-footer">
                <p>Activité de géométrie vectorielle - Téléphérique de montagne</p>
            </footer>
            {modalState.show && (<ModalImage
                imageUrl={modalState.imageUrl}
                altText={modalState.altText}
                onClose={closeModal}
            />)}
        </div>
    </>);
};

export default Act2Geometrie;
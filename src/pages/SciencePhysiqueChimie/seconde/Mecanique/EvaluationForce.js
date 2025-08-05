import React, {useRef, useState} from 'react';
import {FaBalanceScale, FaAngleDoubleUp, FaAngleDoubleDown, FaExclamationTriangle, FaCheck} from 'react-icons/fa';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import ModalImage from '../../../../utils/ModalImage';
import AutoEvaluationGrid from '../../../../config/AutoEvaluationGrid';
import evaluationForce from '../../../../assets/evaluationForce.png';
import evaluationdynamo from "../../../../assets/evaluationdynamo.png";
import montageDynamo from "../../../../assets/montageDynamo.png";

const EvaluationForce = () => {
    const {classId} = useParams();
    const location = useLocation();
    const contentRef = useRef();
    const [modalState, setModalState] = useState({show: false, imageUrl: '', altText: ''});
    const [answers, setAnswers] = useState({
        question1: '',
        question2a60: '',
        question2a120: '',
        question2b: '',
        question4: ''
    });
    const [showCorrections, setShowCorrections] = useState({
        question1: false,
        question2a60: false,
        question2a120: false,
        question2b: false,
        question4: false
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

    const toggleCorrection = (field) => {
        setShowCorrections(prev => ({...prev, [field]: !prev[field]}));
    };

    return (
        <>
            <BackButton/>
            <div className="tp-container" id="evaluation-force-content" ref={contentRef}>
                <PrintManager
                    contentRef={contentRef}
                    activityName="Evaluation_Forces_Elingues"
                    pageCount={1}
                    quality="high"
                />

                <div className="print-page">
                    <header className="tp-header">
                        <h1>
                            ⚖️ Évaluation - Forces et élingues - Physique-Chimie 🏗️
                        </h1>
                    </header>
                    <div className="activity-header mt-0">
                        <span className="activity-badge">ÉVALUATION</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaExclamationTriangle/> Problème des élingues
                            </span>
                        </div>
                    </div>
                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte" style={{borderRadius: '10px'}}>
                                <h3><FaExclamationTriangle/> Problématique</h3>
                                <p>
                                    Sofiane suit un stage dans le secteur du bâtiment. Un conducteur de grue soulève une
                                    poutre
                                    métallique à l'aide de deux élingues. Il lui explique qu'il ne faut pas dépasser un
                                    certain
                                    angle α entre les deux élingues.
                                </p>
                                <p className="objectif-phrase mb-2">
                                    <strong style={{color: '#9c27b0'}}>🎯 Objectif :</strong>{' '}
                                    L'objectif est de savoir si, avec un angle important, les élingues risquent de se
                                    casser.
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0"
                             style={{maxWidth: '220px', cursor: 'pointer'}}>
                            <img
                                src={evaluationForce}
                                alt="Evaluation des forces"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(evaluationForce, 'Evaluation des forces')}
                            />
                        </div>
                    </div>
                    <div className="material-card p-2">
                        <h3><FaBalanceScale/> Matériel</h3>
                        <div style={{display: 'flex', gap: '30px', flexWrap: 'wrap'}}>
                            <label>
                                <input type="checkbox"/> Masse marquée
                            </label>
                            <label>
                                <input type="checkbox"/> Tableau métallique
                            </label>
                            <label>
                                <input type="checkbox"/> Dynamomètres
                            </label>
                            <label>
                                <input type="checkbox"/> Demi-rapporteur sur feuille blanche
                            </label>
                        </div>

                        <p>1 . À l'aide du schéma ci-contre, faire le bilan des actions mécaniques qui s'exercent sur la
                            poutre.</p>

                        <div style={{display: 'flex', alignItems: 'flex-start', gap: '20px'}}>
                            {/* Zone de réponse texte */}
                            <div style={{flex: 1}}>
                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        rows="3"
                                        value={answers.question1}
                                        onChange={(e) => handleInputChange('question1', e.target.value)}
                                        placeholder="Votre réponse ici..."
                                        style={{width: '100%', boxSizing: 'border-box'}}
                                    />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('question1')}
                                    >
                                        <FaCheck/> {showCorrections.question1 ? 'Masquer' : 'Afficher'} correction
                                    </button>
                                </div>
                            </div>

                            {/* Image à droite */}
                            <div
                                className="image-placeholder"
                                onClick={() => openModal(evaluationdynamo, 'Évaluation des forces')}
                                style={{cursor: 'pointer', maxWidth: '220px'}}
                            >
                                <img
                                    src={evaluationdynamo}
                                    alt="Évaluation des forces"
                                    className="img-fluid rounded shadow-sm compact-img"
                                    style={{width: '100%', height: 'auto'}}
                                />
                            </div>
                        </div>

                        <div style={{display: 'flex', alignItems: 'flex-start', gap: '30px'}}>
                            {/* Étapes à gauche */}
                            <div style={{flex: 1}}>
                                <p><strong>2. Réaliser le montage expérimental :</strong></p>
                                <ul className="steps-list">
                                    <li>Fixer avec un aimant le demi-rapporteur au centre du tableau</li>
                                    <li>Placer deux dynamomètres sur le tableau</li>
                                    <li>Les attacher au crochet G (centre du rapporteur) d'une masse de 100 g</li>
                                </ul>
                            </div>

                            {/* Image à droite */}
                            <div
                                className="image-placeholder"
                                onClick={() => openModal(montageDynamo, 'Montage expérimental')}
                                style={{cursor: 'pointer', maxWidth: '250px'}}
                            >
                                <img
                                    src={montageDynamo}
                                    alt="Montage expérimental"
                                    className="img-fluid rounded shadow-sm compact-img"
                                    style={{width: '100%', height: 'auto'}}
                                />
                            </div>
                        </div>


                        <div className="sub-question">
                            <p>a. Relever la valeur lue sur les deux dynamomètres :</p>
                            <div className="dynamometer-values">
                                <div className="angle-value">
                                    <FaAngleDoubleDown/> Pour 60° :
                                    <input
                                        type="text"
                                        value={answers.question2a60}
                                        onChange={(e) => handleInputChange('question2a60', e.target.value)}
                                        className="small-input"
                                    /> N
                                    <FaAngleDoubleUp/> Pour 120° :
                                    <input
                                        type="text"
                                        value={answers.question2a120}
                                        onChange={(e) => handleInputChange('question2a120', e.target.value)}
                                        className="small-input"
                                    /> N
                                </div>
                                <div className="angle-value">

                                </div>
                            </div>
                        </div>

                        <div className="sub-question">
                            <p>b. Comment évolue la valeur lue sur les dynamomètres ?</p>
                            <textarea
                                className="answer-input"
                                rows="2"
                                value={answers.question2b}
                                onChange={(e) => handleInputChange('question2b', e.target.value)}
                                placeholder="Votre observation ici..."
                            />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('question2b')}
                            >
                                <FaCheck/> {showCorrections.question2b ? 'Masquer' : 'Afficher'} correction
                            </button>
                        </div>
                        <p>
                            4 . On considérera que le poids de la masse est de 1 N. L'expérience permet-elle de vérifier
                            l'affirmation suivante :
                            « Pour ne pas engendrer des efforts plus importants que le poids de la charge elle-même, il
                            ne faut pas ouvrir l'angle de deux élingues de plus de 120° » ? Justifier la réponse.
                        </p>
                        <div className="answer-area">
                            <textarea
                                className="answer-input"
                                rows="3"
                                value={answers.question4}
                                onChange={(e) => handleInputChange('question4', e.target.value)}
                                placeholder="Votre justification ici..."
                            />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('question4')}
                            >
                                <FaCheck/> {showCorrections.question4 ? 'Masquer' : 'Afficher'} correction
                            </button>
                        </div>
                    </div>


                </div>
                <div className="print-page">
                    <div className="card header-info mb-2">
                        <div className="header-content">
                            <span className="student-name">Nom :</span>
                            <span className="student-lastname">Prénom :</span>
                            <span className="student-class">Classe : 2ASSP G2</span>
                        </div>
                    </div>

                    <AutoEvaluationGrid/>
                </div>


            </div>

            {modalState.show && (
                <ModalImage
                    imageUrl={modalState.imageUrl}
                    altText={modalState.altText}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export default EvaluationForce;
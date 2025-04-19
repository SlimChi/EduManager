import React, {useRef, useState} from 'react';
import {FaPrint, FaCheck, FaVectorSquare, FaPlus, FaEquals} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import AutoResizeTextarea from '../../../../config/AutoResizeTextarea';
import vecteur from "../../../../assets/vecteur.png";
import vecteurpg from "../../../../assets/vecteur2.png";
import 'katex/dist/katex.min.css';
import {BlockMath, InlineMath} from 'react-katex';
import {Card} from "react-bootstrap";
import hacker from "../../../../assets/hacker.png";
import ModalImage from "../../../../utils/ModalImage";

const RappelVecteur = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    const [answers, setAnswers] = useState({
        question1: '', question2: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        question1: false, question2: false,
    });

    const [showSummary, setShowSummary] = useState(false);

    const correctAnswers = {
        question1: 'Un vecteur est caractérisé par sa direction, son sens et sa norme (longueur).',
        question2: 'u⃗ + v⃗ = (2 + (-1); 3 + 4) = (1; 7)',
    };

    const handleInputChange = (field, value) => {
        setAnswers(prev => ({...prev, [field]: value}));
    };

    const toggleCorrection = (field) => {
        setShowCorrections(prev => ({
            ...prev, [field]: !prev[field]
        }));
    };

    const resetAnswer = (field) => {
        setAnswers(prev => ({...prev, [field]: ''}));
        setShowCorrections(prev => ({...prev, [field]: false}));
    };

    const toggleSummary = () => {
        setShowSummary(!showSummary);
    };

    const contentRef = useRef();
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
                activityName="Rappel_Vecteurs"
                pageCount={3}
                quality="hd"
            />

            {/* PAGE 1 */}
            <div className="print-page">
                <header className="tp-header">
                    <IoMdSchool className="header-icon"/>
                    <h1>Rappel sur les Vecteurs - Classe Terminale Mathématiques</h1>
                </header>

                <div className="math-chapter-box blue" style={{padding: '0'}}>
                    <span style={{marginRight: '10px', fontSize: '30px'}}>↗️</span>
                    <h2 className="math-chapter-title-test">Géométrie vectorielle</h2>
                    <div className="mt-4 p-4 from-blue-500 to-purple-500 text-black rounded-lg shadow-lg">
                        <span className="text-xl font-bold" style={{fontWeight: 'Bold'}}>🎯 Objectif :</span>
                        <p className="mt-2 text-base font-medium" style={{fontStyle: 'italic'}}>
                            Obtenez les concepts essentiels des vecteurs dans l'espace avec une approche claire et
                            moderne.
                        </p>
                    </div>
                </div>

                <div className="exercices-section2">
                    <div className="exercices-grid">
                        <div className="exercice-card square-card">
                            <div className="card-header">
                                <div className="card-icon">➕</div>
                                <h3>Notions fondamentales</h3>
                            </div>

                            <li>Définition d'un vecteur - Coordonnées dans un repère</li>
                            <li>Opérations sur les vecteurs - Colinéarité</li>
                        </div>
                    </div>

                    <div className="tp-section">
                        <div className="vect-header">
                            <h4 className="vect-header-title">📊 Coordonnées et norme dans un repère orthonormé</h4>
                        </div>
                        <h4 className="vect-title">📐 Caractéristiques d'un vecteur </h4>
                        <div className="vector-properties-list">
                            <div className="property-card direction-card">
                                <div className="property-content">
                                    <h5>Direction : La droite <InlineMath math="(AB)"/></h5>
                                </div>
                            </div>

                            <div className="property-card sense-card">
                                <div className="property-content">
                                    <h5>Sens : De <InlineMath math="A"/> vers <InlineMath math="B"/></h5>
                                </div>
                            </div>

                            <div className="property-card norm-card">
                                <div className="property-content">
                                    <h5>Norme : Notée <InlineMath math="\|\overrightarrow{AB}\|"/> (longueur AB)</h5>
                                </div>
                            </div>
                        </div>

                        <div className="vect-example-box">
                            {/* Conteneur flex pour aligner texte et image côte à côte */}
                            <div className="vect-image-text-container">
                                {/* Partie texte à gauche */}
                                <div className="vect-text-content">
                                    <div className="coordinates-definition">
                                        <p>Dans un repère orthonormé, si <InlineMath math="A(x_A; y_A)"/> et <InlineMath
                                            math="B(x_B; y_B)"/>, alors :</p>
                                    </div>

                                    <div className="vect-formula-row">
                                        <span className="vect-formula-label">Coordonnées :</span>
                                        <BlockMath
                                            math="\overrightarrow{AB} = \begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}"/>
                                    </div>

                                    <div className="vect-formula-row">
                                        <span className="vect-formula-label">Norme :</span>
                                        <BlockMath
                                            math="\|\overrightarrow{AB}\| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}"/>
                                    </div>
                                </div>

                                {/* Partie image à droite */}
                                <div className="vect-image-wrapper">
                                    <img
                                        src={vecteur}
                                        alt="Représentation du vecteur AB"
                                        className="vecteur-diagram"
                                    />
                                </div>
                            </div>

                            {/* Suite du contenu (exemple pratique) */}
                            <h5 className="example-title">Exemple pratique : <span
                                style={{fontWeight: 'normal', color: 'black', fontFamily: 'MathJax_Main'}}>Pour A(1;1) et B(4;3) :</span>
                            </h5>
                            <div className="vect-calculation-steps">
                                <div className="vect-step">
                                    <BlockMath
                                        math="\overrightarrow{AB} = \begin{pmatrix} 4-1 \\ 3-1 \end{pmatrix} = \begin{pmatrix} 3 \\ 2 \end{pmatrix}"/>
                                </div>
                                <div className="vect-step">
                                    <BlockMath
                                        math="\|\overrightarrow{AB}\| = \sqrt{(4-1)^2 + (3-1)^2} = \sqrt{9 + 4} = \sqrt{13}"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* PAGE 2 */}
            <div className="print-page">
                <div className="tp-section">
                    <h3>📐 Opérations sur les vecteurs</h3>
                    <div className="formulas-cards">
                        <div className="formula-card triangle-card">
                            <h4><FaPlus/> Addition de vecteurs</h4>
                            <div className="math-formula"><InlineMath math="\vec{u} + \vec{v}"/> = (x₁ + x₂, y₁ + y₂)
                            </div>
                        </div>

                        <div className="formula-card circle-card">
                            <h4><FaEquals/> Multiplication par un scalaire</h4>
                            <div className="math-formula">k × <InlineMath math="\vec{u}"/> = (k × x, k × y)</div>
                        </div>
                    </div>

                    <div className="info-bubble property">
                        <strong>ℹ️ Propriété importante :</strong> Deux vecteurs sont colinéaires si et seulement si
                        leurs coordonnées sont proportionnelles.
                    </div>

                    <h3>🧠 Validation des acquis</h3>

                    <div className="container text-dark">
                        <div className="row">
                            {/* Colonne gauche : Questions 1, 2, 3 */}
                            <div className="col-md-6 mb-4">
                                <div className="mb-4">
                                    <p><strong>1.</strong> Les coordonnées du point A sont :</p>
                                    <ul className="list-unstyled ps-3">
                                        <li><input type="checkbox"/> a. (−1 ; 2)</li>
                                        <li><input type="checkbox"/> b. (2 ; 3)</li>
                                        <li><input type="checkbox"/> c. (2 ; −1)</li>
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <p><strong>2.</strong> Les coordonnées du vecteur <InlineMath
                                        math="\overrightarrow{AB}"/> sont :</p>
                                    <ul className="list-unstyled ps-3">
                                        <li><input type="checkbox"/> a. <InlineMath
                                            math="\begin{pmatrix} 1 \\ 3 \end{pmatrix}"/></li>
                                        <li><input type="checkbox"/> b. <InlineMath
                                            math="\begin{pmatrix} 3 \\ 1 \end{pmatrix}"/></li>
                                        <li><input type="checkbox"/> c. <InlineMath
                                            math="\begin{pmatrix} -4 \\ 1 \end{pmatrix}"/></li>
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <p><strong>3.</strong> La norme <InlineMath math="\|\overrightarrow{AB}\|"/> est
                                        égale à :</p>
                                    <ul className="list-unstyled ps-3">
                                        <li><input type="checkbox"/> a. <InlineMath math="\sqrt{10}"/></li>
                                        <li><input type="checkbox"/> b. 10</li>
                                        <li><input type="checkbox"/> c. 5</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Colonne droite : Questions 4, 5 */}
                            <div className="col-md-6 mb-4">
                                <div className="mb-4">
                                    <p><strong>4.</strong> Les coordonnées du vecteur <InlineMath
                                        math="\overrightarrow{EF}"/> sont :</p>
                                    <ul className="list-unstyled ps-3">
                                        <div className="mb-4">
                                            <ul className="list-unstyled ps-3">
                                                <li className="d-flex gap-4">
                                                    <span><input type="checkbox"/> a. <InlineMath
                                                        math="\begin{pmatrix} 1 \\ 4 \end{pmatrix}"/></span>
                                                    <span><input type="checkbox"/> b. <InlineMath
                                                        math="\begin{pmatrix} -3 \\ -1 \end{pmatrix}"/></span>
                                                    <span><input type="checkbox"/> c. <InlineMath
                                                        math="\begin{pmatrix} 3 \\ -1 \end{pmatrix}"/></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </ul>
                                </div>
                                <div className="vect-image-text-container">
                                    <div className="mb-4">
                                        <p><strong>5.</strong> Choisir les bonnes réponses :</p>
                                        <ul className="list-unstyled ps-3">
                                            <li><input type="checkbox"/> a. <InlineMath math="\vec{u} = \vec{CD}"/></li>
                                            <li><input type="checkbox"/> b. <InlineMath
                                                math="\overrightarrow{AB} \text{ et } \overrightarrow{EF}"/> sont
                                                opposés.
                                            </li>
                                            <li><input type="checkbox"/> c. <InlineMath
                                                math="\overrightarrow{AB} \text{ et } \overrightarrow{EF}"/> sont
                                                colinéaires.
                                            </li>
                                            <li><input type="checkbox"/> d. <InlineMath
                                                math="\vec{u} \text{ et } \vec{CD}"/> sont opposés.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="vect-image-wrapper">
                                        <img
                                            src={vecteurpg}
                                            alt="Représentation du vecteur "
                                            className="vecteur-diagram2"
                                            onClick={() => openModal(vecteurpg, 'Lancer de Dés')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h3>📌 Je retiens</h3>
                        <button
                            className="correction-btn"
                            onClick={toggleSummary}
                            style={{marginLeft: '10px'}}
                        >
                            {showSummary ? 'Masquer' : 'Afficher'} à retenir
                        </button>
                    </div>

                    <div className="vector-summary-container">
                        {showSummary ? (<div className="vector-cards-grid">
                            <div className="vector-card vector-definition-card">
                                <h4>Essentiel sur les vecteurs</h4>
                                <ul style={{fontFamily: 'Cambria Math, serif'}}>
                                    <li>Direction</li>
                                    <li>Sens</li>
                                    <li>Norme</li>
                                </ul>
                            </div>

                            <div className="vector-card vector-operations-card">
                                <h4>Opérations clés</h4>
                                <ol style={{fontFamily: 'Cambria Math, serif'}}>
                                    <li>Addition : <InlineMath math="\vec{u} + \vec{v}"/> = (x₁+x₂, y₁+y₂)</li>
                                    <li>Scalaire : k × <InlineMath math="\vec{u}"/> = (k×x, k×y)</li>
                                    <li>Colinéarité : coordonnées proportionnelles</li>
                                </ol>
                            </div>
                        </div>) : (
                            <div className="vector-cards-grid">
                                {/* Cartes vides pour réponse */}
                                <div className="vector-card" style={{
                                    border: '2px dashed #ccc', minHeight: '150px', // Environ 5 lignes
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'
                                }}>
                                </div>

                                <div className="vector-card" style={{
                                    border: '2px dashed #ccc', minHeight: '150px', // Environ 5 lignes
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'
                                }}>
                                </div>
                            </div>)}
                    </div>
                </div>

                <footer className="tp-footer">
                    <p>Rappel sur les vecteurs - Mathématiques Première</p>
                    <p>Lycée Pierre-Joseph Laurent</p>
                </footer>
            </div>
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

export default RappelVecteur;
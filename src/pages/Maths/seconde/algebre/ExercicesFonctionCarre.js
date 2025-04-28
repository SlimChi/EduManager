import React, {useRef, useState} from 'react';
import {FaPrint, FaCheck, FaChartLine, FaCalculator, FaWind, FaBolt, FaSearch} from 'react-icons/fa';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import {IoMdSchool} from 'react-icons/io';
import '../../../../styles/activites.css';
import {useLocation, useParams} from "react-router-dom";
import BackButton from "../../../../components/navigation/BackButton";
import ModalImage from "../../../../utils/ModalImage";
import AutoResizeTextarea from "../../../../config/AutoResizeTextarea";
import Automatismes from "../../../../config/Automatismes";
import PrintManager from "../../../../utils/PrintManager";
import GraphComponent from "../../../../components/Outils/GraphComponent";
import {Button, Card, Row, Col, Form} from 'react-bootstrap';
import fonctioncarre from "../../../../assets/fonctioncarre.png";
import GraphRadiateur from "../../../../components/Outils/GraphRadiateur";
import GraphEolienne from "../../../../components/Outils/GraphEolienne";
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";

const ExercicesFonctionCarre = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [showConclusion, setShowConclusion] = useState(false);

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        ex1_1: Array(8).fill(''),
        ex1_2: '',
        ex1_3: {left: '', right: ''}, // Pour le tableau de variation
        ex2_1: '',
        ex2_2: '',
        ex2_3: '',
        ex2_4: '',
        ex3_1: Array(6).fill(''),
        ex3_3: '',
        ex3_4: '',
        ex4_1: '',
        ex4_2a: Array(9).fill(''),
        ex4_2c: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        ex1_1: false,
        ex1_2: false,
        ex1_3: false,
        ex2_1: false,
        ex2_2: false,
        ex2_3: false,
        ex2_4: false,
        ex3_1: false,
        ex3_3: false,
        ex3_4: false,
        ex4_1: false,
        ex4_2a: false,
        ex4_2c: false
    });

    // Réponses attendues
    const correctAnswers = {
        ex1_1: ["4.5", "2", "0.5", "0.125", "0", "0.125", "0.5", "2"],
        ex1_2: "La fonction est décroissante sur [-3, 0] et croissante sur [0, 2] avec un minimum en x = 0.",
        ex1_3: {
            left: "Décroissante (flèche descendante de -3 à 0)", right: "Croissante (flèche montante de 0 à 2)"
        },
        ex2_1: "x ≈ -3",
        ex2_2: "x ≈ -1 et x ≈ 2,5 ",
        ex2_3: "Pas de solution",
        ex2_4: "4 Solutions : x ≈ -4, x ≈ -1,7, x ≈ 0, x ≈ 2",
        ex3_1: ["160", "640", "1440", "2560", "4000", "5760"],
        ex3_3: "x ≈ 141.4 V (car 0,1x² = 2000 ⇒ x = √(20000))",
        ex3_4: "Une tension de 141,4 V est nécessaire (solution exacte: x = √20000)",
        ex4_1: "D ≈ 15.8 mètres (car 0,20 × D² = 50 ⇒ D = √(50/0,20) = √250)",
        ex4_2a: ["80", "45", "20", "5", "0", "5", "20", "45", "80"],
        ex4_2c: "x ≈ -15.8 ou x ≈ 15.8 - Cohérent avec le calcul en 4.1"
    };

    const [graphModal, setGraphModal] = useState(false);
    const [currentGraph, setCurrentGraph] = useState('ex1');

    // Fonctions pour ouvrir/fermer le modal
    const openGraphModal = (graph) => {
        setCurrentGraph(graph);
        setGraphModal(true);
    };
    const closeGraphModal = () => setGraphModal(false);

    // Gestionnaires d'événements
    const handleInputChange = (field, value, index = -1) => {
        if (index >= 0) {
            const newArray = [...answers[field]];
            newArray[index] = value;
            setAnswers(prev => ({...prev, [field]: newArray}));
        } else if (typeof value === 'object') {
            setAnswers(prev => ({...prev, [field]: {...prev[field], ...value}}));
        } else {
            setAnswers(prev => ({...prev, [field]: value}));
        }
    };

    const toggleCorrection = (field) => {
        setShowCorrections(prev => ({...prev, [field]: !prev[field]}));
        if (!answers[field] && !showCorrections[field]) {
            if (Array.isArray(correctAnswers[field])) {
                setAnswers(prev => ({...prev, [field]: [...correctAnswers[field]]}));
            } else if (typeof correctAnswers[field] === 'object') {
                setAnswers(prev => ({...prev, [field]: {...correctAnswers[field]}}));
            } else {
                setAnswers(prev => ({...prev, [field]: correctAnswers[field]}));
            }
        }
    };

    const [modalState, setModalState] = useState({
        show: false, imageUrl: '', altText: ''
    });

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState(prev => ({...prev, show: false}));
    };

    const contentRef = useRef();
    if (className === 'Seconde-pythagore') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container act1-container function-theme" id="exercices" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Exercices_Fonction_Carre"
                pageCount={3}
                quality="hd"
            />
            <div className="print-page">
                <Automatismes/>
            </div>
            {/* Page 1 */}

            <div className="print-page">
                <header className="tp-header">
                    <IoMdSchool className="header-icon"/>
                    <h1> 📊 Exercices sur la Fonction Carré 📉 - Classe Seconde Mathématiques</h1>
                </header>
                <div className="math-chapter-box blue mb-0 mt-3">
                    <IoMdSchool className="math-chapter-icon"/>
                    <h2 className="math-chapter-title-test">
                        Exercices d'application sur la fonction carré
                    </h2>
                </div>

                {/* Exercice 1 */}
                <section className="tp-section compact">
                    <div className="activity-header">
                        <span className="activity-badge">EXERCICE 1</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaChartLine/> Étude de fonction
                            </span>
                        </div>
                    </div>

                    <div className="question compact">
                        <p className="compact-text">1.1. Complétez le tableau de valeurs pour f(x) = 0,5x²</p>
                        <div className="sample-table-container">
                            <table className="sample-table">
                                <thead>
                                <tr>
                                    <th style={{
                                        width: '19%',
                                    }}>x
                                    </th>
                                    <th>-3</th>
                                    <th>-2</th>
                                    <th>-1</th>
                                    <th>-0.5</th>
                                    <th>0</th>
                                    <th>0.5</th>
                                    <th>1</th>
                                    <th>2</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style={{
                                        width: '50%',
                                    }}>f(x) = 0,5x²
                                    </td>
                                    {answers.ex1_1.map((answer, index) => (<td key={index}>
                                        <input
                                            type="text"
                                            className={`answer-input compact ${showCorrections.ex1_1 ? 'correction-active' : ''}`}
                                            value={showCorrections.ex1_1 ? correctAnswers.ex1_1[index] : answer}
                                            onChange={(e) => handleInputChange('ex1_1', e.target.value, index)}
                                            readOnly={showCorrections.ex1_1}
                                        />
                                    </td>))}
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="correction-btnoptic mt-1" onClick={() => toggleCorrection('ex1_1')}>
                                <FaCheck/> Correction
                            </button>
                        </div>
                    </div>

                    <div className="question compact">
                        <p className="compact-text">1.2. Complétez le tableau de variation de la fonction f</p>
                        <div className="sample-table-container" style={{margin: '20px 0'}}>
                            <table className="sample-table" style={{
                                borderCollapse: 'collapse', width: '100%', border: '1px solid #333'
                            }}>
                                <thead>
                                <tr>
                                    <th style={{
                                        border: '1px solid #333',
                                        padding: '8px',
                                        textAlign: 'center',
                                        backgroundColor: '#f5f5f5',
                                        width: '15%'
                                    }}>x
                                    </th>
                                    <th style={{
                                        border: '1px solid #333',
                                        padding: '8px',
                                        textAlign: 'left',
                                        backgroundColor: '#f5f5f5'
                                    }}>-3
                                    </th>
                                    <th style={{
                                        border: '1px solid #333',
                                        padding: '8px',
                                        textAlign: 'right',
                                        backgroundColor: '#f5f5f5'
                                    }}>2
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style={{
                                        border: '1px solid #333',
                                        padding: '8px',
                                        textAlign: 'center',
                                        backgroundColor: '#f5f5f5',
                                        width: '15%',
                                    }}>f(x)
                                    </td>
                                    <td style={{
                                        padding: '15px', height: '150px'
                                    }}>

                                    </td>
                                    <td style={{
                                        padding: '15px', height: '150px'
                                    }}>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="correction-btnoptic mt-1" onClick={() => toggleCorrection('ex1_3')}>
                                <FaCheck/> Correction
                            </button>
                        </div>
                    </div>

                    <Question
                        id="ex1_2"
                        text="1.3. Décrire les variations de la fonction f"
                        answer={answers.ex1_2}
                        showCorrection={showCorrections.ex1_2}
                        onChange={(field, value) => handleInputChange(field, value)}
                        onToggleCorrection={toggleCorrection}
                        textarea
                    />

                    <div className="info-bubble property">
                        <div className="info-bubble-title"><FaChartLine/> Rappel</div>
                        <p>
                            La fonction carré f(x) = x² est décroissante sur ]-∞, 0] et croissante sur [0, +∞[.<br/>
                            Pour f(x) = kx², le sens de variation est identique si k > 0, inversé si {`k < 0`}.
                        </p>
                    </div>
                </section>
            </div>

            {/* Page 2 */}
            <div className="print-page">
                {/* Exercice 2 */}
                <section className="tp-section compact mt-0">
                    <div className="activity-header mt-0">
                        <span className="activity-badge mt-0">EXERCICE 2</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaSearch/> Résolution graphique
                            </span>
                        </div>
                    </div>

                    <div className="question compact">
                        <p className="compact-text">2. Résolvez graphiquement les équations suivantes :</p>
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                            <div style={{maxWidth: '300px', cursor: 'pointer'}}>
                                <img
                                    src={fonctioncarre}
                                    alt="Fonction Carré"
                                    className="img-fluid rounded shadow-sm compact-img"
                                    onClick={() => openModal(fonctioncarre, "fonction carre")}
                                    style={{width: '100%', height: 'auto'}}
                                />
                            </div>
                        </div>


                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '20px',
                            justifyItems: 'center',
                            alignItems: 'start',
                            marginTop: '20px'
                        }}>
                            <Question
                                id="ex2_1"
                                text="2.1. f(x) = 1"
                                answer={answers.ex2_1}
                                showCorrection={showCorrections.ex2_1}
                                onChange={handleInputChange}
                                onToggleCorrection={toggleCorrection}
                            />
                            <Question
                                id="ex2_2"
                                text="2.2. f(x) = -2"
                                answer={answers.ex2_2}
                                showCorrection={showCorrections.ex2_2}
                                onChange={handleInputChange}
                                onToggleCorrection={toggleCorrection}
                            />
                            <Question
                                id="ex2_3"
                                text="2.3. f(x) = 2"
                                answer={answers.ex2_3}
                                showCorrection={showCorrections.ex2_3}
                                onChange={handleInputChange}
                                onToggleCorrection={toggleCorrection}
                            />
                            <Question
                                id="ex2_4"
                                text="2.4. f(x) = -1"
                                answer={answers.ex2_4}
                                showCorrection={showCorrections.ex2_4}
                                onChange={handleInputChange}
                                onToggleCorrection={toggleCorrection}
                            />
                        </div>
                    </div>
                    <div className="activity-header mt-0">
                        <span className="activity-badge">EXERCICE 3</span>
                        <div className="activity-title mt-0">
                            <span className="course-title">
                                <FaBolt/> Application physique
                            </span>
                        </div>
                    </div>

                    <div className="renovation-contexte2 mb-3" style={{
                        backgroundColor: '#e8f5e9',
                        padding: '20px',
                        borderRadius: '12px',
                        color: '#000000',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        fontFamily: 'Arial, sans-serif',
                        width: '100%',
                    }}>
                        <p>
                            Un radiateur électrique est alimenté par une tension x (en volts) entre 0 et 240 V.
                            La puissance dissipée est donnée par f(x) = 0,1x² (en watts).
                        </p>
                    </div>

                    <div className="question compact mt-2">
                        <p className="compact-text">3.1. Complétez le tableau de valeurs :</p>
                        <div className="sample-table-container">
                            <table className="sample-table">
                                <thead>
                                <tr>
                                    <th style={{
                                        width: '19%',
                                    }}>x (V)
                                    </th>
                                    <th>40</th>
                                    <th>80</th>
                                    <th>120</th>
                                    <th>160</th>
                                    <th>200</th>
                                    <th>240</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>f(x) = 0,1x² (W)</td>
                                    {answers.ex3_1.map((answer, index) => (<td key={index}>
                                        <input
                                            type="text"
                                            className={`answer-input compact ${showCorrections.ex3_1 ? 'correction-active' : ''}`}
                                            value={showCorrections.ex3_1 ? correctAnswers.ex3_1[index] : answer}
                                            onChange={(e) => handleInputChange('ex3_1', e.target.value, index)}
                                            readOnly={showCorrections.ex3_1}
                                        />
                                    </td>))}
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-end mb-0">
                            <button className="correction-btnoptic mt-1" onClick={() => toggleCorrection('ex3_1')}>
                                <FaCheck/> Correction
                            </button>
                        </div>
                    </div>
                    <div className="question compact mt-0">
                        <p className="compact-text mt-0">3.2. Représentation graphique :</p>
                        <div
                            style={{cursor: 'pointer', textAlign: 'center'}}
                            onClick={() => openGraphModal('ex3')}
                        >
                            <GraphRadiateur graphType="ex3" showCorrection={showCorrections.ex3_3}/>
                        </div>
                    </div>
                </section>
            </div>

            {/* Page 3 */}
            <div className="print-page">
                {/* Exercice 4 */}
                <section className="tp-section compact">
                    <Question
                        id="ex3_3"
                        text="3.3. Déterminez graphiquement la tension x pour f(x) = 2000 W"
                        answer={answers.ex3_3}
                        showCorrection={showCorrections.ex3_3}
                        onChange={handleInputChange}
                        onToggleCorrection={toggleCorrection}
                    />
                    <Question
                        id="ex3_4"
                        text="3.4. Quelle tension est nécessaire pour 2000 W ?"
                        answer={answers.ex3_4}
                        showCorrection={showCorrections.ex3_4}
                        onChange={handleInputChange}
                        onToggleCorrection={toggleCorrection}
                        textarea
                    />
                    <div className="activity-header">
                        <span className="activity-badge">EXERCICE 4</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaWind/> Problème concret
                            </span>
                        </div>
                    </div>

                    <div className="renovation-contexte2 mb-3" style={{
                        backgroundColor: '#e8f5e9',
                        padding: '20px',
                        borderRadius: '12px',
                        color: '#000000',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        fontFamily: 'Arial, sans-serif',
                        width: '100%',
                    }}>
                        <p>
                            🌬️ <strong>Savez-vous ?</strong> La puissance <strong>P</strong> (en <em>kW</em>) d'une
                            éolienne
                            se calcule avec la formule :
                            <span style={{color: '#388e3c', fontWeight: 'bold'}}> P = 0,20 × D² </span>
                            où <strong>D</strong> est le diamètre (en mètres) de la surface balayée par les pales.
                        </p>
                    </div>


                    <Question
                        id="ex4_1"
                        text="4.1. Calculez le diamètre nécessaire pour une puissance de 50 kW"
                        answer={answers.ex4_1}
                        showCorrection={showCorrections.ex4_1}
                        onChange={handleInputChange}
                        onToggleCorrection={toggleCorrection}
                    />

                    <div className="question compact">
                        <p className="compact-text">4.2. Soit f(x) = 0,20x² sur [-20, 20] :</p>
                        <p className="compact-subtext">a) Complétez le tableau de valeurs :</p>
                        <div className="sample-table-container">
                            <table className="sample-table">
                                <thead>
                                <tr>
                                    <th style={{
                                        width: '19%',
                                    }}>x
                                    </th>
                                    <th>-20</th>
                                    <th>-15</th>
                                    <th>-10</th>
                                    <th>-5</th>
                                    <th>0</th>
                                    <th>5</th>
                                    <th>10</th>
                                    <th>15</th>
                                    <th>20</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>f(x) = 0,20x²</td>
                                    {answers.ex4_2a.map((answer, index) => (<td key={index}>
                                        <input
                                            type="text"
                                            className={`answer-input compact ${showCorrections.ex4_2a ? 'correction-active' : ''}`}
                                            value={showCorrections.ex4_2a ? correctAnswers.ex4_2a[index] : answer}
                                            onChange={(e) => handleInputChange('ex4_2a', e.target.value, index)}
                                            readOnly={showCorrections.ex4_2a}
                                        />
                                    </td>))}
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="correction-btnoptic mt-1" onClick={() => toggleCorrection('ex4_2a')}>
                                <FaCheck/> Correction
                            </button>
                        </div>
                    </div>

                    <div className="question compact">
                        <p className="compact-subtext">b) Représentation graphique :</p>
                        <div
                            style={{cursor: 'pointer', margin: '20px auto', textAlign: 'center'}}
                            onClick={() => openGraphModal('ex4')}
                        >
                            <GraphEolienne graphType="ex4" showCorrection={showCorrections.ex4_2c}/>
                        </div>
                    </div>
                </section>
            </div>
            <div className="print-page">
                <section className="tp-section compact">
                    <Question
                        id="ex4_2c"
                        text="c) Résolvez 0,20x² = 50 et comparez avec la question 4.1"
                        answer={answers.ex4_2c}
                        showCorrection={showCorrections.ex4_2c}
                        onChange={handleInputChange}
                        onToggleCorrection={toggleCorrection}
                        textarea
                    />

                    <div className="info-bubble definition">
                        <div className="info-bubble-title">
                            <BsFillQuestionCircleFill/> Méthode
                        </div>
                        <p>
                            Pour résoudre une équation du type kx² = a :
                        </p>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>Si a &lt; 0 : pas de solution (un carré est toujours positif)</li>
                            <li>Si a = 0 : solution unique x = 0</li>
                            <li>Si a &gt; 0 : deux solutions x = √(a/k) et x = -√(a/k)</li>
                        </ul>
                    </div>

                    <button className="toggle-conclusion-btn" onClick={() => setShowConclusion(!showConclusion)}>
                        <FaCheck/> {showConclusion ? 'Masquer le bilan' : 'Afficher le bilan'}
                    </button>
                </section>
                <AutoEvaluationGrid/>
                <footer className="tp-footer compact mb-0 mt-0">
                    <p className="compact-text">Mathématiques 2nde - Fonctions</p>
                    <p className="compact-text">Exercices sur la fonction carré</p>
                </footer>
            </div>

            {/* Modal pour les graphiques */}
            {graphModal && (<div className="modal-overlay" onClick={closeGraphModal}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <button className="modal-close-btn" onClick={closeGraphModal}>
                        × Fermer
                    </button>
                    <div className="graph-modal-container">
                        <GraphComponent
                            MaxWidth={800}
                            height={600}
                            graphType={currentGraph}
                            showCorrection={showCorrections[`ex${currentGraph.split('ex')[1]}_1`]}
                        />
                    </div>
                    <p className="text-center mt-3">
                        {!showCorrections[`ex${currentGraph.split('ex')[1]}_1`] && "Cliquez sur 'Correction' pour afficher les solutions"}
                    </p>
                </div>
            </div>)}

            {/* Modal pour l'image agrandie */}
            {modalState.show && (<ModalImage
                imageUrl={modalState.imageUrl}
                altText={modalState.altText}
                onClose={closeModal}
            />)}
        </div>
    </>);
};

// Composant Question réutilisé
const Question = ({
                      id, text, answer, showCorrection, onChange, onToggleCorrection, textarea = false
                  }) => (<div className="question compact" style={{marginBottom: '0'}}>
    {text && <p className="compact-text">{text}</p>}
    <div className="answer-container compact">
        {textarea ? (<AutoResizeTextarea
            className={`answer-input ${showCorrection ? 'correction-active' : ''}`}
            value={answer}
            onChange={(e) => onChange(id, e.target.value)}
            minRows={3}
            maxRows={13}
        />) : (<input
            type="text"
            className={`answer-input compact ${showCorrection ? 'correction-active' : ''}`}
            value={answer}
            onChange={(e) => onChange(id, e.target.value)}
        />)}
    </div>
    <div className="d-flex justify-content-end">
        <button className="correction-btnoptic mt-1"
                onClick={() => onToggleCorrection(id)}
                style={{marginBottom: '0'}}
        >
            <FaCheck/> Correction
        </button>
    </div>
</div>);

export default ExercicesFonctionCarre;
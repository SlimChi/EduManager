import React, {useRef, useState} from 'react';
import {
    FaPrint,
    FaCheck,
    FaLightbulb,
    FaShieldAlt,
    FaEye,
    FaExclamationTriangle,
    FaFlask,
    FaPalette,
    FaGripLines,
    FaChevronRight, FaPaintBrush
} from 'react-icons/fa';
import {
    GiPrism,
    GiSpectacleLenses,
    GiLightProjector,
    GiArtificialIntelligence, GiAce
} from 'react-icons/gi';
import {
    BsFillQuestionCircleFill,
    BsDropletHalf,
    BsLightningFill
} from 'react-icons/bs';
import '../../../../styles/activites.css';
import BackButton from "../../../../components/navigation/BackButton";
import prismImage from "../../../../assets/sourcelumiere.png";
import laserPictogram from "../../../../assets/pictogrammeOptic.png";
import prismImage2 from "../../../../assets/prisme.png";
import PrintManager from "../../../../utils/PrintManager";
import {useLocation} from "react-router-dom";
import "../../../../styles/tpoptic.css"
import {FcIdea, FcRedo} from "react-icons/fc";
import optic from "../../../../assets/optic2decomp.png";
import pieceprobact1 from "../../../../assets/probaAct1.png";
import ModalImage from "../../../../utils/ModalImage";
import prismBlank from "../../../../assets/optic_1.png";
import prismColored from "../../../../assets/optic_2.png";
import prismLaser from "../../../../assets/prismlaser.png";

const TP1Optique = () => {
    const [experimentData, setExperimentData] = useState({
        prismColors: [
            {name: 'rouge', hex: '#ff0000'},
            {name: 'orange', hex: '#ff7f00'},
            {name: 'jaune', hex: '#ffff00'},
            {name: 'vert', hex: '#00ff00'},
            {name: 'bleu', hex: '#0000ff'},
            {name: 'violet', hex: '#9400d3'}
        ],
        networkComparison: '',
        laserResults: {
            laser1: {color: '', observation: ''},
            laser2: {color: '', observation: ''}
        },
        activeTab: 'prism'
    });

    const [safetyChecks, setSafetyChecks] = useState({
        noEyes: false,
        noSkin: false,
        noReflective: false,
        teacherApproval: false
    });

    const [answers, setAnswers] = useState({
        prismObservation: '',
        networkComparison: '',
        laserObservation: '',
        safetyExplanation: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        prismObservation: false,
        networkComparison: false,
        laserObservation: false,
        safetyExplanation: false
    });

    const correctAnswers = {
        prismObservation1: "La lumière blanche se décompose en un spectre continu de couleurs allant du rouge au violet, appelé spectre visible. Cet arc-en-ciel est dû à la dispersion de la lumière par le prisme qui réfracte différemment chaque longueur d'onde.",
        networkComparison: "Le réseau produit un spectre plus net et mieux défini que le prisme, avec des raies spectrales plus fines. Cependant, le prisme donne un spectre plus lumineux et continu.",
        laserObservation: "Le laser ne se décompose pas comme la lumière blanche. Il produit un seul point de couleur sur l'écran, montrant qu'il est monochromatique (une seule longueur d'onde).",
        safetyExplanation: "Les lasers peuvent causer des dommages irréversibles à la rétine, même à faible puissance. Le faisceau concentré peut brûler la peau et les surfaces réfléchissantes peuvent rediriger le faisceau de manière imprévisible."
    };

    const [modalState, setModalState] = useState({
        show: false,
        imageUrl: '',
        altText: ''
    });
    const [showColoredPrism, setShowColoredPrism] = useState(false);
    const location = useLocation();
    const className = location.state?.className || '';
    const handleInputChange = (field, value) => {
        setAnswers(prev => ({
            ...prev,
            [field]: value
        }));
    };
    const [showColors, setShowColors] = useState(false);
    const toggleColors = () => {
        setShowColors(!showColors);
    };
    const handleSafetyCheck = (check) => {
        setSafetyChecks(prev => ({
            ...prev,
            [check]: !prev[check]
        }));
    };

    const toggleCorrection = (field) => {
        setShowCorrections(prev => ({
            ...prev,
            [field]: !prev[field]
        }));

        if (!answers[field] && !showCorrections[field]) {
            setAnswers(prev => ({
                ...prev,
                [field]: correctAnswers[field]
            }));
        }
    };

    const handleLaserResult = (laser, field, value) => {
        setExperimentData(prev => ({
            ...prev,
            laserResults: {
                ...prev.laserResults,
                [laser]: {
                    ...prev.laserResults[laser],
                    [field]: value
                }
            }
        }));
    };

    /* Helper function à ajouter dans votre composant */
    function getColorHex(colorName) {
        const colors = {
            rouge: '#ff3e3e',
            vert: '#4CAF50',
            bleu: '#2196F3',
            jaune: '#FFEB3B',
            violet: '#9C27B0',
            orange: '#FF9800'
        };
        return colors[colorName.toLowerCase()] || '#6a0dad';
    }

    function getContrastColor(hexColor) {
        // Convertir la couleur hex en RVB
        const r = parseInt(hexColor.substr(1, 2), 16);
        const g = parseInt(hexColor.substr(3, 2), 16);
        const b = parseInt(hexColor.substr(5, 2), 16);

        // Calculer la luminosité
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        // Retourner noir ou blanc selon la luminosité
        return brightness > 128 ? '#000' : '#fff';
    }

    const setActiveTab = (tab) => {
        setExperimentData(prev => ({
            ...prev,
            activeTab: tab
        }));
    };
    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };
    const contentRef = useRef();
    const closeModal = () => {
        setModalState(prev => ({...prev, show: false}));
    };
    if (className === 'optique') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }
    return (
        <>
            <BackButton/>

            <div className="tp-optique-container" id="tp-content" ref={contentRef}>
                {/* Page 1 */}
                <PrintManager
                    contentRef={contentRef}
                    activityName="Proba_Pieces"
                    pageCount={2}
                    quality="hd"
                />
                <div className="print-page">
                    <header className="tp-header">
                        <div className="header-content">
                            <GiSpectacleLenses className="header-icon"/>
                            <h1>
                                <FcIdea/> TP1 : Décomposition de la lumière blanche <br/>
                                <span className="h1-sub">Optique physique - Dispersion lumineuse</span>
                            </h1>

                        </div>
                        {/*<div className="header-wave">*/}
                        {/*    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">*/}
                        {/*        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#4b7bec"></path>*/}
                        {/*        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#4b7bec"></path>*/}
                        {/*        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#4b7bec"></path>*/}
                        {/*    </svg>*/}
                        {/*</div>*/}
                    </header>

                    <div className="tp-intro-optique">
                        <div className="science-card">
                            <div className="card-header1">
                                <GiPrism className="card-icon"/>
                                <h2 className="m-0" style={{fontSize: "1.4rem"}}>Décomposition spectrale de la
                                    lumière</h2>
                            </div>

                            <div
                                className="card-body d-flex flex-column flex-md-row align-items-center justify-content-between">
                                {/* Texte à gauche */}
                                <div className="card-text" style={{flex: 1, fontSize: '1rem', color: '#333'}}>
                                    <p className="mb-0">
                                        <FaLightbulb className="text-icon me-2" style={{color: "#f0c419"}}/>
                                        La lumière blanche contient toutes les couleurs 🌈.<br/>
                                        Dans ce TP, vous allez découvrir ce phénomène en utilisant différents objets
                                        optiques.
                                    </p>
                                </div>

                                {/* Image à droite */}
                                <div
                                    className="flex-shrink-0 mt-4 mt-md-0"
                                    style={{
                                        width: '200px',
                                        marginLeft: '30px',
                                    }}
                                >
                                    <img
                                        src={optic}
                                        alt="Dispositif optique"
                                        className="img-fluid rounded shadow"
                                        style={{
                                            width: '100%',
                                            objectFit: 'contain',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => openModal(optic, "optic")}

                                    />
                                </div>
                            </div>
                        </div>


                        <div className="objectives-grid">
                            <div className="objective-card">
                                <div className="objective-icon">
                                    <GiAce/>
                                </div>
                                <h3>Objectifs</h3>
                                <ul>
                                    <li><FaChevronRight/> Réaliser la décomposition de la lumière blanche</li>
                                    <li><FaChevronRight/> Identifier les couleurs du spectre visible</li>
                                    <li><FaChevronRight/> Comparer prisme et réseau</li>
                                    <li><FaChevronRight/> Étudier la lumière laser</li>
                                </ul>
                            </div>

                            <div className="material-card">
                                <div className="material-icon">
                                    <FaFlask/>
                                </div>
                                <h3><GiLightProjector/> Matériel</h3>
                                <div className="material-list">
                                    <div className="material-item">
                                        <span className="material-bullet">•</span>
                                        <span>Source lumineuse blanche</span>
                                    </div>
                                    <div className="material-item">
                                        <span className="material-bullet">•</span>
                                        <span>Générateur 12V</span>
                                    </div>
                                    <div className="material-item">
                                        <span className="material-bullet">•</span>
                                        <span>Prisme en verre</span>
                                    </div>
                                    <div className="material-item">
                                        <span className="material-bullet">•</span>
                                        <span>Réseau de diffraction</span>
                                    </div>
                                    <div className="material-item">
                                        <span className="material-bullet">•</span>
                                        <span>2 lasers colorés</span>
                                    </div>
                                    <div className="material-item">
                                        <span className="material-bullet">•</span>
                                        <span>Écran blanc</span>
                                    </div>
                                </div>

                                {/* Conteneur centré pour l'image */}
                                <div className="image-container">
                                    <img
                                        src={prismImage}
                                        alt="Expérience avec un prisme"
                                        className="img-optique"
                                        onClick={() => openModal(prismImage, "Figure 1 : Générateur de lumière blanche")}
                                    />
                                </div>

                                <div className="image-caption">
                                    <BsDropletHalf/> Figure 1 : Générateur de lumière blanche
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="experiment-tabs">
                        <button
                            className={`tab-btn ${experimentData.activeTab === 'prism' ? 'active' : ''}`}
                            onClick={() => setActiveTab('prism')}
                        >
                            <GiPrism/> Expérience 1: Prisme
                        </button>
                        <button
                            className={`tab-btn ${experimentData.activeTab === 'network' ? 'active' : ''}`}
                            onClick={() => setActiveTab('network')}
                        >
                            <FaGripLines/> Expérience 2: Réseau
                        </button>
                        <button
                            className={`tab-btn ${experimentData.activeTab === 'laser' ? 'active' : ''}`}
                            onClick={() => setActiveTab('laser')}
                        >
                            <BsLightningFill/> Expérience 3: Laser
                        </button>
                    </div>


                </div>

                {/* Page 2 */}
                <div className="print-page">
                    {experimentData.activeTab === 'prism' && (
                        <section className="experiment-section prism-experiment">
                            <h2 className="experiment-title">
                                <GiPrism/> Expérience 1 : Décomposition par un prisme
                            </h2>

                            <div className="protocol-steps">
                                <div className="step">
                                    <div className="step-number">1</div>
                                    <div className="step-content">
                                        <h4>Préparation</h4>
                                        <ol>
                                            <li>🌑 Placer la source dans un endroit sombre</li>
                                            <li>⚡ Alimenter en 12V (ne pas allumer)</li>
                                            <li>🔘 Insérer le peigne à fente unique</li>
                                            <li>📏 Positionner l'écran à 30cm</li>
                                            <li>🔺 Placer le prisme entre source et écran</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="step-number">2</div>
                                    <div className="step-content">
                                        <h4>Observation</h4>
                                        <ol>
                                            <li>💡 Allumer la source lumineuse</li>
                                            <li>🌈 Ajuster le prisme pour visualiser le spectre</li>
                                            <li>🔄 Optimiser la position de l'écran</li>
                                        </ol>

                                        <div className="observation-box">
                                            <div className="observation-header">
                                                <FaPalette className="observation-icon"/>
                                                <h5>Spectre observé</h5>
                                            </div>

                                            <p style={{fontSize: '1.2rem'}}>Représentez l'ordre des couleurs :</p>

                                            <div className="spectrum-display">
                                                {experimentData.prismColors.map((color, index) => (
                                                    <div
                                                        key={index}
                                                        className="color-band"
                                                        style={{
                                                            backgroundColor: showColors ? color.hex : 'transparent',
                                                            animation: showColors ? `rainbowGlow 2s ease-in-out ${index * 0.1}s infinite alternate` : 'none',
                                                            border: showColors ? 'none' : '1px solid #ddd'
                                                        }}
                                                        title={showColors ? color.name : ''}
                                                    >
                                                        {showColors &&
                                                            <span className="color-label">{color.name}</span>}
                                                    </div>
                                                ))}

                                            </div>
                                            <button
                                                className="correction-btnoptic"
                                                onClick={() => {
                                                    toggleCorrection('prismObservation');
                                                    toggleColors();
                                                }}
                                            >
                                                <FaCheck/> Voir correction
                                            </button>
                                            {/* Nouvelle question ajoutée */}
                                            <div className="coloring-task">
                                                <p style={{fontSize: '1.2rem'}}>
                                                    <FaPaintBrush className="task-icon"/>
                                                    Colorier correctement les rayons sortant du prisme :
                                                </p>
                                                <div className="coloring-image-container">
                                                    <img
                                                        src={showColoredPrism ? prismColored : prismBlank}
                                                        alt={showColoredPrism ? "Schéma corrigé" : "Schéma à colorier"}
                                                        className="coloring-image"
                                                        style={{display: 'block'}}
                                                        onClick={() =>
                                                            openModal(
                                                                showColoredPrism ? prismColored : prismBlank,
                                                                showColoredPrism ? "Schéma corrigé" : "Schéma à colorier")}/>
                                                </div>
                                                <button
                                                    className="correction-btnoptic"
                                                    onClick={() => setShowColoredPrism(!showColoredPrism)}
                                                    style={{marginTop: '10px'}}
                                                >
                                                    <FaCheck/> {showColoredPrism ? "Masquer la correction" : "Voir la correction"}
                                                </button>
                                            </div>

                                            <div className="answer-field">
                                                <p style={{fontSize: '1.2rem'}}>Décrivez comment la lumière blanche se
                                                    décompose :</p>
                                                <div className="answer-container">
                                                      <textarea
                                                          className={`answer-input ${showCorrections.prismObservation1 ? 'correction-active' : ''}`}
                                                          rows="4"
                                                          value={answers.prismObservation1}
                                                          onChange={(e) => handleInputChange('prismObservation1', e.target.value)}
                                                      />
                                                    <button
                                                        className="correction-btnoptic"
                                                        onClick={() => toggleCorrection('prismObservation1')}
                                                    >
                                                        <FaCheck/> Voir correction
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </div>
                <div className="print-page">
                    {experimentData.activeTab === 'network' && (
                        <section className="experiment-section network-experiment">
                            <h2 className="experiment-title">
                                <FaGripLines/> Expérience 2 : Décomposition par un réseau
                            </h2>

                            <div className="protocol-steps">
                                <div className="step">
                                    <div className="step-number">3</div>
                                    <div className="step-content">
                                        <h4>Protocole</h4>

                                        <div className="d-flex flex-column flex-md-row align-items-start">
                                            <ol className="flex-grow-1 pe-md-3">
                                                <li>🧲 Retirer le prisme</li>
                                                <li>📏 Placer le réseau devant la fente</li>
                                                <li>👀🌈 Observer la décomposition</li>

                                            </ol>

                                            <div className="image-container flex-shrink-0"
                                                 style={{width: '200px', marginTop: '-30px'}}>
                                                <img
                                                    src={prismImage2}
                                                    alt="Expérience avec un prisme"
                                                    className="img-optique img-fluid"
                                                    onClick={() => openModal(prismImage2, "Figure 2 : Prisme")}
                                                    style={{maxWidth: '100%', height: 'auto'}}
                                                />
                                            </div>
                                        </div>

                                        <div className="observation-box">
                                            <h5>Analyse comparative</h5>
                                            <div className="answer-field">
                                                <label>Comparez avec les résultats du prisme :</label>
                                                <div className="answer-container">
                                                    <textarea
                                                        className={`answer-input ${showCorrections.networkComparison ? 'correction-active' : ''}`}
                                                        rows="4"
                                                        value={answers.networkComparison}
                                                        onChange={(e) => handleInputChange('networkComparison', e.target.value)}
                                                        placeholder="Quelles différences observez-vous entre les deux méthodes ?"
                                                    />
                                                    <button
                                                        className="correction-btnoptic"
                                                        onClick={() => toggleCorrection('networkComparison')}
                                                    >
                                                        <FaCheck/> Voir correction
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </div>
                <div className="print-page">
                    {experimentData.activeTab === 'laser' && (
                        <section className="experiment-section laser-experiment">
                            <h2 className="experiment-title">
                                <BsLightningFill/> Expérience 3 : Étude de la lumière laser
                            </h2>

                            <div className="safety-warning-box">
                                <div className="warning-header">
                                    <FaExclamationTriangle className="warning-icon"/>
                                    <h4><FaShieldAlt/> Consignes de sécurité LASER</h4>
                                </div>
                                <div className="warning-content">
                                    <p><FcRedo/> Avant toute manipulation, cochez les précautions à respecter :</p>

                                    <div className="safety-grid">
                                        <div className="safety-item">
                                            <input
                                                type="checkbox"
                                                id="noEyes"
                                                checked={safetyChecks.noEyes}
                                                onChange={() => handleSafetyCheck('noEyes')}
                                            />
                                            <label htmlFor="noEyes">
                                                <FaEye/> Ne pas diriger vers les yeux
                                            </label>
                                        </div>
                                        <div className="safety-item">
                                            <input
                                                type="checkbox"
                                                id="noSkin"
                                                checked={safetyChecks.noSkin}
                                                onChange={() => handleSafetyCheck('noSkin')}
                                            />
                                            <label htmlFor="noSkin">
                                                <FaExclamationTriangle/> Éviter la peau
                                            </label>
                                        </div>
                                        <div className="safety-item">
                                            <input
                                                type="checkbox"
                                                id="noReflective"
                                                checked={safetyChecks.noReflective}
                                                onChange={() => handleSafetyCheck('noReflective')}
                                            />
                                            <label htmlFor="noReflective">
                                                <GiArtificialIntelligence/> Pas de surfaces réfléchissantes
                                            </label>
                                        </div>
                                        <div className="safety-item">
                                            <input
                                                type="checkbox"
                                                id="teacherApproval"
                                                checked={safetyChecks.teacherApproval}
                                                onChange={() => handleSafetyCheck('teacherApproval')}
                                            />
                                            <label htmlFor="teacherApproval">
                                                <BsFillQuestionCircleFill/> Autorisation requise
                                            </label>
                                        </div>
                                    </div>

                                    <div className="answer-field">
                                        <label>Justifiez ces précautions :</label>
                                        <div className="answer-container">
                                            <textarea
                                                className={`answer-input ${showCorrections.safetyExplanation ? 'correction-active' : ''}`}
                                                rows="4"
                                                value={answers.safetyExplanation}
                                                onChange={(e) => handleInputChange('safetyExplanation', e.target.value)}
                                                placeholder="Expliquez pourquoi ces mesures sont nécessaires..."
                                            />
                                            <button
                                                className="correction-btnoptic"
                                                onClick={() => toggleCorrection('safetyExplanation')}
                                            >
                                                <FaCheck/> Voir correction
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="protocol-steps">
                                <div className="step">
                                    <div className="step-number">4</div>
                                    <div className="step-content">
                                        <h4>Protocole expérimental</h4>
                                        <ol>
                                            <li>🔄 Remplacer la source de lumière blanche par le laser.</li>
                                            <li>🔺 Placer le prisme sur le trajet.</li>
                                            <li>⚠️🔦 Allumer le laser (après autorisation).</li>
                                            <li>👀📝 Observer et noter les résultats.</li>

                                            <div className="laser-card1">
                                                <div className="laser-card-header1"
                                                     style={{backgroundColor: '#ff3e3e20', borderColor: '#ff3e3e'}}>
                                                    <BsLightningFill className="laser-icon1"/>
                                                    <h3>Laser 1</h3>
                                                    <div
                                                        className="laser-color-tag1"
                                                        style={{
                                                            backgroundColor: experimentData.laserResults.laser1.color ? getColorHex(experimentData.laserResults.laser1.color) : '#f0f0f0',
                                                            color: experimentData.laserResults.laser1.color ? getContrastColor(getColorHex(experimentData.laserResults.laser1.color)) : '#333'
                                                        }}
                                                    >
                                                        {experimentData.laserResults.laser1.color || "Couleur"}
                                                    </div>
                                                </div>
                                                <div className="laser-card-body1">
                                                    <div className="form-row1">
                                                        <div className="form-group1 color-input-group">
                                                            <label>
                                                                <FaPalette/> Couleur :
                                                            </label>
                                                            <input
                                                                type="text"
                                                                value={experimentData.laserResults.laser1.color}
                                                                onChange={(e) => handleLaserResult('laser1', 'color', e.target.value)}
                                                                className="laser-color-input1"

                                                            />
                                                        </div>
                                                        <div className="form-group1 observation-group">
                                                            <label>
                                                                <FaEye/> Observation :
                                                            </label>
                                                            <input
                                                                type="text"
                                                                value={experimentData.laserResults.laser1.observation}
                                                                onChange={(e) => handleLaserResult('laser1', 'observation', e.target.value)}
                                                                className="laser-observation-input1"

                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <li>Compléter le schéma suivant avec le(s) rayon(s) sortant du prisme.</li>
                                            <div className="image-container">
                                                <img
                                                    src={prismLaser}
                                                    alt="Expérience avec un prisme"
                                                    className="img-optique"
                                                    onClick={() => openModal(prismLaser, "Figure 3 : Laser")}
                                                />
                                            </div>
                                        </ol>

                                        <div className="laser-experiment-results">
                                            <p style={{fontSize: '1.1rem'}}>6. Remplacer le laser utilisé par un laser
                                                d’une autre couleur :<br/>
                                                <FcRedo/> Dessiner, en couleur, la figure obtenue sur l’écran.
                                            </p>

                                            <div className="laser-card1">
                                                <div className="laser-card-header1"
                                                     style={{backgroundColor: '#3eccff20', borderColor: '#3eccff'}}>
                                                    <BsLightningFill className="laser-icon1"/>
                                                    <h3>Laser 2</h3>
                                                    <div
                                                        className="laser-color-tag1"
                                                        style={{
                                                            backgroundColor: experimentData.laserResults.laser2.color ? getColorHex(experimentData.laserResults.laser2.color) : '#f0f0f0',
                                                            color: experimentData.laserResults.laser2.color ? getContrastColor(getColorHex(experimentData.laserResults.laser2.color)) : '#333'
                                                        }}
                                                    >
                                                        {experimentData.laserResults.laser2.color || "Couleur"}
                                                    </div>
                                                </div>
                                                <div className="laser-card-body1">
                                                    <div className="form-row1">
                                                        <div className="form-group1 color-input-group">
                                                            <label>
                                                                <FaPalette/> Couleur :
                                                            </label>
                                                            <input
                                                                type="text"
                                                                value={experimentData.laserResults.laser2.color}
                                                                onChange={(e) => handleLaserResult('laser2', 'color', e.target.value)}
                                                                className="laser-color-input1"

                                                            />
                                                        </div>
                                                        <div className="form-group1 observation-group">
                                                            <label>
                                                                <FaEye/> Observation :
                                                            </label>
                                                            <input
                                                                type="text"
                                                                value={experimentData.laserResults.laser2.observation}
                                                                onChange={(e) => handleLaserResult('laser2', 'observation', e.target.value)}
                                                                className="laser-observation-input1"

                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="answer-field">
                                            <label><FcRedo/> Conclusion :</label>
                                            <div className="answer-container">
                                                <textarea
                                                    className={`answer-input ${showCorrections.laserObservation ? 'correction-active' : ''}`}
                                                    rows="4"
                                                    value={answers.laserObservation}
                                                    onChange={(e) => handleInputChange('laserObservation', e.target.value)}
                                                    placeholder="Que pouvez-vous conclure sur la nature de la lumière laser ?"
                                                />
                                                <button
                                                    className="correction-btnoptic"
                                                    onClick={() => toggleCorrection('laserObservation')}
                                                >
                                                    <FaCheck/> Voir correction
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Info Section */}
                    <div className="print-page">
                        <div className="info-card">
                            <div className="info-header"
                                 style={{background: 'linear-gradient(to right, #e74c3c, #f39c12)'}}>
                                <FaExclamationTriangle className="info-icon"/>
                                <h3>LASER et SÉCURITÉ</h3>
                            </div>
                            <div className="info-content">
                                <div className="info-text">
                                    <p><strong>LASER</strong> = Light Amplification by Stimulated Emission of
                                        Radiation
                                    </p>
                                    <p style={{marginLeft: '4.7rem', color: 'green', fontStyle: 'italic'}}> «
                                        Amplification de la lumière par émission
                                        stimulée de rayonnement » </p>
                                    <p><FcRedo/> Le laser est une source lumineuse qui possède trois
                                        caractéristiques
                                        clés:</p>
                                    <div className="laser-properties">
                                        <div className="property" data-aos="fade-up" data-aos-delay="100">
                                            <div className="property-icon">
                                                <span className="icon-symbol">λ</span>
                                                <div className="icon-pulse"></div>
                                            </div>
                                            <h3 className="property-title">Monochromatique</h3>
                                            <p className="property-description">
                                                Il émet un rayonnement monochromatique (une seule longueur
                                                d’onde) <br/>(Δλ
                                                ≈ 0.1nm)
                                            </p>
                                            <div className="property-wave"></div>
                                            
                                        </div>

                                        <div className="property" data-aos="fade-up" data-aos-delay="200">
                                            <div className="property-icon">
                                                <span className="icon-symbol">→</span>
                                                <div className="icon-beam"></div>
                                            </div>
                                            <h3 className="property-title">Directif</h3>
                                            <p className="property-description">
                                                Le faisceau de lumière laser est très directif.
                                            </p>
                                            <div className="property-beam"></div>
                                        </div>


                                    </div>
                                    <div className="property" data-aos="fade-up" data-aos-delay="300"
                                         style={{margin: 'auto'}}>
                                        <div className="property-icon">
                                            <span className="icon-symbol">⚡</span>
                                            <div className="icon-shock"></div>
                                        </div>
                                        <h3 className="property-title">Énergétique</h3>
                                        <p className="property-description">
                                            Le faisceau de lumière laser possède une très grande densité d’énergie,
                                            lui
                                            conférant
                                            son caractère dangereux.
                                        </p>
                                        <div className="property-energy"></div>
                                    </div>
                                    <div className="laser-pictogram">
                                        <p>
                                            Il existe un pictogramme spécifique pour signaler un danger lié au
                                            laser.
                                        </p>
                                        <img
                                            src={laserPictogram}
                                            alt="Pictogramme de danger laser"
                                        />
                                    </div>
                                    <h4 style={{marginTop: '1.5rem', color: '#e74c3c'}}>Classes de laser</h4>

                                    <div style={{overflowX: 'auto', margin: '1rem 0'}}>
                                        <table style={{
                                            width: '100%',
                                            borderCollapse: 'collapse',
                                            textAlign: 'center'
                                        }}>
                                            <thead>
                                            <tr style={{backgroundColor: '#f8f9fa'}}>
                                                <th style={{
                                                    padding: '0.8rem',
                                                    border: '1px solid #ddd'
                                                }}>Classe
                                                </th>
                                                <th style={{
                                                    padding: '0.8rem',
                                                    border: '1px solid #ddd'
                                                }}>Puissance
                                                </th>
                                                <th style={{
                                                    padding: '0.8rem',
                                                    border: '1px solid #ddd'
                                                }}>Danger
                                                </th>
                                                <th style={{
                                                    padding: '0.8rem',
                                                    border: '1px solid #ddd'
                                                }}>Protection
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr style={{backgroundColor: '#e8f5e9'}}>
                                                <td style={{
                                                    padding: '0.8rem',
                                                    border: '1px solid #ddd',
                                                    fontWeight: 'bold'
                                                }}>1
                                                </td>
                                                <td style={{padding: '0.8rem', border: '1px solid #ddd'}}>&lt; 0.39
                                                    mW
                                                </td>
                                                <td style={{padding: '0.8rem', border: '1px solid #ddd'}}>Sans
                                                    danger
                                                </td>
                                                <td style={{
                                                    padding: '0.8rem',
                                                    border: '1px solid #ddd'
                                                }}>Aucune
                                                </td>
                                            </tr>
                                            <tr style={{backgroundColor: '#fffde7'}}>
                                                <td style={{
                                                    padding: '0.8rem',
                                                    border: '1px solid #ddd',
                                                    fontWeight: 'bold'
                                                }}>2
                                                </td>
                                                <td style={{padding: '0.8rem', border: '1px solid #ddd'}}>0.4 - 1 mW
                                                </td>
                                                <td style={{padding: '0.8rem', border: '1px solid #ddd'}}>Danger si
                                                    exposition prolongée
                                                </td>
                                                <td style={{padding: '0.8rem', border: '1px solid #ddd'}}>Éviter
                                                    regard
                                                    direct
                                                </td>
                                            </tr>
                                            <tr style={{backgroundColor: '#fff3e0'}}>
                                                <td style={{
                                                    padding: '0.8rem',
                                                    border: '1px solid #ddd',
                                                    fontWeight: 'bold'
                                                }}>3A
                                                </td>
                                                <td style={{padding: '0.8rem', border: '1px solid #ddd'}}>1 - 5 mW
                                                </td>
                                                <td style={{padding: '0.8rem', border: '1px solid #ddd'}}>Danger
                                                    pour la
                                                    vue
                                                </td>
                                                <td style={{padding: '0.8rem', border: '1px solid #ddd'}}>Lunettes
                                                    obligatoires
                                                </td>
                                            </tr>
                                            <tr style={{backgroundColor: '#ffebee'}}>
                                                <td style={{
                                                    padding: '0.8rem',
                                                    border: '1px solid #ddd',
                                                    fontWeight: 'bold'
                                                }}>3B
                                                </td>
                                                <td style={{padding: '0.8rem', border: '1px solid #ddd'}}>5 - 500 mW
                                                </td>
                                                <td style={{padding: '0.8rem', border: '1px solid #ddd'}}>Danger
                                                    immédiat
                                                </td>
                                                <td style={{padding: '0.8rem', border: '1px solid #ddd'}}>Protection
                                                    stricte
                                                </td>
                                            </tr>
                                            <tr style={{backgroundColor: '#fce4ec'}}>
                                                <td style={{
                                                    padding: '0.8rem',
                                                    border: '1px solid #ddd',
                                                    fontWeight: 'bold'
                                                }}>4
                                                </td>
                                                <td style={{padding: '0.8rem', border: '1px solid #ddd'}}>&gt; 500
                                                    mW
                                                </td>
                                                <td style={{padding: '0.8rem', border: '1px solid #ddd'}}>Danger
                                                    peau et
                                                    yeux
                                                </td>
                                                <td style={{
                                                    padding: '0.8rem',
                                                    border: '1px solid #ddd'
                                                }}>Environnement
                                                    contrôlé
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="warning-message1" style={{marginTop: '1.5rem'}}>
                                        <FaExclamationTriangle/> <strong>Protection des yeux :</strong> À partir de
                                        la
                                        classe 2,
                                        le laser peut provoquer des brûlures irréparables de la rétine. Portez des
                                        lunettes de protection adaptées.
                                    </div>

                                    <div style={{marginTop: '1.5rem'}}>
                                        <h4 style={{color: '#e74c3c'}}>Consignes de sécurité impératives :</h4>
                                        <ul style={{paddingLeft: '1.5rem'}}>
                                            <li style={{
                                                marginBottom: '0.5rem',
                                                display: 'flex',
                                                alignItems: 'flex-start'
                                            }}>
                                                <FaChevronRight style={{
                                                    color: '#e74c3c',
                                                    marginRight: '0.5rem',
                                                    marginTop: '0.2rem'
                                                }}/>
                                                Laisser le laser posé sur la table - ne pas le tenir en main
                                            </li>
                                            <li style={{
                                                marginBottom: '0.5rem',
                                                display: 'flex',
                                                alignItems: 'flex-start'
                                            }}>
                                                <FaChevronRight style={{
                                                    color: '#e74c3c',
                                                    marginRight: '0.5rem',
                                                    marginTop: '0.2rem'
                                                }}/>
                                                Ne jamais diriger le faisceau vers une personne, en particulier vers
                                                le
                                                visage
                                            </li>
                                            <li style={{
                                                marginBottom: '0.5rem',
                                                display: 'flex',
                                                alignItems: 'flex-start'
                                            }}>
                                                <FaChevronRight style={{
                                                    color: '#e74c3c',
                                                    marginRight: '0.5rem',
                                                    marginTop: '0.2rem'
                                                }}/>
                                                Éviter le port de bijoux, montres et objets réfléchissants
                                            </li>
                                            <li style={{
                                                marginBottom: '0.5rem',
                                                display: 'flex',
                                                alignItems: 'flex-start'
                                            }}>
                                                <FaChevronRight style={{
                                                    color: '#e74c3c',
                                                    marginRight: '0.5rem',
                                                    marginTop: '0.2rem'
                                                }}/>
                                                Attendre l'autorisation du professeur avant toute manipulation
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <footer className="tp-footer compact">
                        <div className="footer-content">
                            <p>Travail Pratique d'Optique Physique </p>
                            <p className="copyright">© 2023 Sciences Physiques - Lycée Pro</p>
                        </div>
                    </footer>
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

export default TP1Optique;
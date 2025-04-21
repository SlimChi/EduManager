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
    FaChevronRight,
    FaPaintBrush
} from 'react-icons/fa';
import {
    GiPrism,
    GiSpectacleLenses,
    GiLightProjector,
    GiArtificialIntelligence,
    GiAce
} from 'react-icons/gi';
import {
    BsFillQuestionCircleFill,
    BsDropletHalf,
    BsLightningFill
} from 'react-icons/bs';
import '../../../../styles/activites.css';
import BackButton from "../../../../components/navigation/BackButton";
import lightSourceImage from "../../../../assets/sourcelumiere.png";
import tp2optic1picm from "../../../../assets/tp2optic1pic.png";
import PrintManager from "../../../../utils/PrintManager";
import {useLocation} from "react-router-dom";
import "../../../../styles/tpoptic.css"
import {FcIdea, FcRedo} from "react-icons/fc";
import ModalImage from "../../../../utils/ModalImage";
import subtractiveSchema from "../../../../assets/optictp2.png";
import optictp2rep from "../../../../assets/optictp2rep.png";
import tp2opticfig1 from "../../../../assets/tp2opticfig1.png";
import {IoMdSchool} from "react-icons/io";

const TP2Optique = () => {
    const [experimentData, setExperimentData] = useState({
        singleFilterResults: {
            cyan: '',
            magenta: '',
            yellow: ''
        },
        doubleFilterResults: {
            cyanMagenta: '',
            cyanYellow: '',
            yellowMagenta: '',
            allThree: ''
        },
        messageResults: {
            blueFilter: '',
            redFilter: '',
            greenFilter: '',
            doubleFilter: '',
            hiddenMessage: ''
        },
        activeTab: 'synthesis'
    });

    const [showSchema, setShowSchema] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const [answers, setAnswers] = useState({
        synthesisExplanation: '',
        messageExplanation: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        synthesisExplanation: false,
        messageExplanation: false
    });

    const correctAnswers = {
        synthesisExplanation: "La synthèse soustractive fonctionne en absorbant (soustrayant) certaines longueurs d'onde de la lumière blanche et en laissant passer les autres. Chaque filtre soustrait sa couleur complémentaire : cyan absorbe le rouge, magenta absorbe le vert, jaune absorbe le bleu.",
        messageExplanation: "Les filtres colorés permettent de révéler des messages cachés en bloquant certaines couleurs. Le filtre bleu laisse passer le bleu et absorbe les autres, révélant ainsi les parties du message écrites en bleu sur fond contrasté."
    };

    const [modalState, setModalState] = useState({
        show: false,
        imageUrl: '',
        altText: ''
    });

    const location = useLocation();
    const className = location.state?.className || '';
    const contentRef = useRef();

    const handleInputChange = (field, value) => {
        setAnswers(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSingleFilterResult = (filter, value) => {
        setExperimentData(prev => ({
            ...prev,
            singleFilterResults: {
                ...prev.singleFilterResults,
                [filter]: value
            }
        }));
    };

    const handleDoubleFilterResult = (combination, value) => {
        setExperimentData(prev => ({
            ...prev,
            doubleFilterResults: {
                ...prev.doubleFilterResults,
                [combination]: value
            }
        }));
    };

    const handleMessageResult = (filter, value) => {
        setExperimentData(prev => ({
            ...prev,
            messageResults: {
                ...prev.messageResults,
                [filter]: value
            }
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

    const setActiveTab = (tab) => {
        setExperimentData(prev => ({
            ...prev,
            activeTab: tab
        }));
    };

    const openModal = (imageUrl, altText) => {
        setModalState({ show: true, imageUrl, altText });
    };

    const closeModal = () => {
        setModalState(prev => ({ ...prev, show: false }));
    };

    if (className === 'optique') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton />
            <div className="tp-container" id="tp-content" ref={contentRef}>
                {/* Page 1 */} <PrintManager
                contentRef={contentRef}
                activityName="Synthèse_Soustractive"
                pageCount={5}
                quality="hd"
            />
                <div className="print-page">

                    <header className="tp-header">
                        <IoMdSchool className="header-icon" />

                        <h1>
                            <span className="highlight1">TP2 : Synthèse soustractive des couleurs </span>
                            <span className="class-info1">Optique - Couleurs et filtres</span>
                        </h1>

                        <div className="math-decoration">
                            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z M12 12L22 7 M12 12L2 7 M12 12V22 M22 7V17L12 22L2 17V7"
                                      stroke="white" strokeWidth="1.5"/>
                                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1"/>
                            </svg>
                        </div>
                    </header>
                    <div className="tp-intro-optique">
                        <div className="science-card">
                            <div className="card-header1">
                                <FaPalette className="card-icon" />
                                <h2 className="m-0" style={{ fontSize: "1.4rem" }}>Synthèse soustractive des couleurs</h2>
                            </div>

                            <div className="card-body d-flex flex-column flex-md-row align-items-center justify-content-between">
                                <div className="card-text" style={{ flex: 1, fontSize: '1rem', color: '#333' }}>
                                    <p className="mb-0">
                                        <FaLightbulb className="text-icon me-2" style={{ color: "#f0c419" }} />
                                        La synthèse soustractive explique comment les filtres colorés et les pigments interagissent avec la lumière 🌈. <br />
                                        Dans ce TP, vous allez explorer ce phénomène en combinant différents filtres colorés.
                                    </p>
                                </div>

                                <div className="flex-shrink-0 mt-4 mt-md-0" style={{ width: '350px', marginLeft: '5px' }}>
                                    <img
                                        src={tp2optic1picm}
                                        alt="Source lumineuse avec filtres"
                                        className="img-fluid rounded shadow"
                                        style={{ width: '100%', objectFit: 'contain', cursor: 'pointer' }}
                                        onClick={() => openModal(tp2optic1picm, "Source lumineuse avec filtres")}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="objectives-grid">
                            <div className="objective-card">
                                <div className="objective-icon">
                                    <GiAce />
                                </div>
                                <h3>Objectifs</h3>
                                <ul>
                                    <li><FaChevronRight /> Réaliser une synthèse soustractive des couleurs</li>
                                    <li><FaChevronRight /> Observer les mélanges de couleurs par soustraction</li>
                                    <li><FaChevronRight /> Comprendre le principe des filtres colorés</li>
                                    <li><FaChevronRight /> Décrypter un message avec des filtres</li>
                                </ul>
                            </div>

                            <div className="material-card">
                                <div className="material-icon">
                                    <FaFlask />
                                </div>
                                <h3><GiLightProjector /> Matériel</h3>
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
                                        <span>Filtres cyan, magenta et jaune</span>
                                    </div>
                                    <div className="material-item">
                                        <span className="material-bullet">•</span>
                                        <span>Filtres bleu, rouge et vert</span>
                                    </div>
                                    <div className="material-item">
                                        <span className="material-bullet">•</span>
                                        <span>Écran blanc</span>
                                    </div>
                                    <div className="material-item">
                                        <span className="material-bullet">•</span>
                                        <span>Message crypté</span>
                                    </div>
                                </div>

                                <div className="image-container">
                                    <img
                                        src={lightSourceImage}
                                        alt="Dispositif expérimental"
                                        className="img-optique"
                                        onClick={() => openModal(lightSourceImage, "Figure 1 : Dispositif expérimental")}
                                    />
                                </div>

                                <div className="image-caption">
                                    <BsDropletHalf /> Figure 1 : Dispositif expérimental
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="experiment-tabs">
                        <button
                            className={`tab-btn ${experimentData.activeTab === 'synthesis' ? 'active' : ''}`}
                            onClick={() => setActiveTab('synthesis')}
                        >
                            <FaPalette /> Expérience 1: Synthèse
                        </button>
                        <button
                            className={`tab-btn ${experimentData.activeTab === 'message' ? 'active' : ''}`}
                            onClick={() => setActiveTab('message')}
                        >
                            <FaEye /> Expérience 2: Message
                        </button>
                    </div>

                    {experimentData.activeTab === 'synthesis' && (
                        <section className="experiment-section synthesis-experiment">
                            <h2 className="experiment-title">
                                <FaPalette /> Expérience 1 : Synthèse soustractive
                            </h2>

                            <div className="protocol-steps">
                                <div className="step">
                                    <div className="step-number">1</div>
                                    <div className="step-content">
                                        <h4>Préparation</h4>
                                        <ol>
                                            <li>🌑 Placer la source dans un endroit sombre (miroirs fermés)</li>
                                            <li>⚡ Alimenter en 12V (ne pas allumer)</li>
                                            <li>📏 Positionner l'écran à 15cm</li>
                                        </ol>
                                        <div className="image-container">
                                            <img
                                                src={tp2opticfig1}
                                                alt="Expérience avec un prisme"
                                                className="img-optique"
                                                onClick={() => openModal(tp2opticfig1, "Figure 3 : Laser")}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="step-number">2</div>
                                    <div className="step-content">
                                        <h4>Synthèse avec un seul filtre</h4>
                                        <ol>
                                            <li>🔵 Glisser le filtre cyan devant la source</li>
                                            <li>💡 Allumer la source</li>
                                            <li>📝 Noter la couleur obtenue dans le tableau</li>
                                            <li>🟡 Recommencer avec le filtre jaune</li>
                                            <li>🔴 Puis avec le filtre magenta</li>
                                        </ol>

                                        <div className="observation-box">
                                            <h5>Résultats avec un seul filtre</h5>
                                            <table className="results-table">
                                                <thead>
                                                <tr>
                                                    <th>Couleur du filtre</th>
                                                    <th>Cyan</th>
                                                    <th>Jaune</th>
                                                    <th>Magenta</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>Couleur obtenue</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={experimentData.singleFilterResults.cyan}
                                                            onChange={(e) => handleSingleFilterResult('cyan', e.target.value)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={experimentData.singleFilterResults.yellow}
                                                            onChange={(e) => handleSingleFilterResult('yellow', e.target.value)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={experimentData.singleFilterResults.magenta}
                                                            onChange={(e) => handleSingleFilterResult('magenta', e.target.value)}
                                                        />
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="step-number">3</div>
                                    <div className="step-content">
                                        <h4>Synthèse avec deux filtres</h4>
                                        <ol>
                                            <li>🔵+🔴 Placer les filtres cyan et magenta devant la source</li>
                                            <li>📝 Noter la couleur obtenue dans le tableau</li>
                                            <li>📏 Rapprocher l'écran si nécessaire</li>
                                            <li>🔄 Recommencer avec les autres combinaisons</li>
                                        </ol>

                                        <div className="observation-box">
                                            <h5>Résultats avec plusieurs filtres</h5>
                                            <table className="results-table">
                                                <thead>
                                                <tr>
                                                    <th>Combinaison</th>
                                                    <th>Cyan + Magenta</th>
                                                    <th>Cyan + Jaune</th>
                                                    <th>Jaune + Magenta</th>
                                                    <th>Tous les trois</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>Couleur obtenue</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={experimentData.doubleFilterResults.cyanMagenta}
                                                            onChange={(e) => handleDoubleFilterResult('cyanMagenta', e.target.value)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={experimentData.doubleFilterResults.cyanYellow}
                                                            onChange={(e) => handleDoubleFilterResult('cyanYellow', e.target.value)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={experimentData.doubleFilterResults.yellowMagenta}
                                                            onChange={(e) => handleDoubleFilterResult('yellowMagenta', e.target.value)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={experimentData.doubleFilterResults.allThree}
                                                            onChange={(e) => handleDoubleFilterResult('allThree', e.target.value)}
                                                        />
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                            <div className="answer-field">
                                                <p style={{ fontSize: '1.2rem' }}>Expliquez le principe de la synthèse soustractive :</p>
                                                <div className="answer-container">
                                                    <textarea
                                                        className={`answer-input ${showCorrections.synthesisExplanation ? 'correction-active' : ''}`}
                                                        rows="4"
                                                        value={answers.synthesisExplanation}
                                                        onChange={(e) => handleInputChange('synthesisExplanation', e.target.value)}
                                                        placeholder="Expliquez comment les filtres colorés modifient la lumière blanche..."
                                                    />
                                                    <button
                                                        className="correction-btnoptic"
                                                        onClick={() => toggleCorrection('synthesisExplanation')}
                                                    >
                                                        <FaCheck /> Voir correction
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="coloring-task">
                                                <p style={{ fontSize: '1.2rem' }}>
                                                    <FaPaintBrush className="task-icon" />
                                                    Compléter et colorier le schéma de la synthèse soustractive :
                                                </p>
                                                <div className="coloring-image-container">
                                                    <img
                                                        src={showSchema ? optictp2rep : subtractiveSchema}
                                                        alt={showSchema ? "Schéma corrigé" : "Schéma à compléter"}
                                                        className="coloring-image"
                                                        style={{ display: 'block' }}
                                                        onClick={() => openModal(showSchema ? optictp2rep : subtractiveSchema,
                                                            showSchema ? "Schéma corrigé" : "Schéma à compléter")}
                                                    />
                                                </div>
                                                <button
                                                    className="correction-btnoptic"
                                                    onClick={() => setShowSchema(!showSchema)}
                                                    style={{ marginTop: '10px' }}
                                                >
                                                    <FaCheck /> {showSchema ? "Masquer la correction" : "Voir la correction"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </div>

                {/* Page 2 */}
                <div className="print-page">
                    {experimentData.activeTab === 'message' && (
                        <section className="experiment-section message-experiment">
                            <h2 className="experiment-title">
                                <FaEye /> Expérience 2 : Message crypté
                            </h2>

                            <div className="protocol-steps">
                                <div className="step">
                                    <div className="step-number">4</div>
                                    <div className="step-content">
                                        <h4>Protocole</h4>
                                        <ol>
                                            <li>💻 Ouvrir le fichier 'Message crypté.pdf'</li>
                                            <li>🔵 Placer le filtre bleu entre le dessin et votre œil</li>
                                            <li>📝 Noter ce que vous voyez</li>
                                            <li>🔴 Recommencer avec le filtre rouge</li>
                                            <li>🟢 Puis avec le filtre vert</li>
                                            <li>🔄 Essayer avec deux filtres superposés</li>
                                        </ol>

                                        <div className="observation-box">
                                            <h5>Résultats avec les filtres</h5>
                                            <table className="results-table">
                                                <thead>
                                                <tr>
                                                    <th>Filtre utilisé</th>
                                                    <th>Bleu</th>
                                                    <th>Rouge</th>
                                                    <th>Vert</th>
                                                    <th>Deux filtres</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>Observation</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={experimentData.messageResults.blueFilter}
                                                            onChange={(e) => handleMessageResult('blueFilter', e.target.value)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={experimentData.messageResults.redFilter}
                                                            onChange={(e) => handleMessageResult('redFilter', e.target.value)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={experimentData.messageResults.greenFilter}
                                                            onChange={(e) => handleMessageResult('greenFilter', e.target.value)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={experimentData.messageResults.doubleFilter}
                                                            onChange={(e) => handleMessageResult('doubleFilter', e.target.value)}
                                                        />
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>


                                            <div className="answer-field">
                                                <p style={{ fontSize: '1.2rem' }}>Noter le message caché :</p>
                                                <div className="answer-container">
                                                    <input
                                                        type="text"
                                                        className={`answer-input ${showCorrections.messageExplanation ? 'correction-active' : ''}`}
                                                        value={experimentData.messageResults.hiddenMessage}
                                                        onChange={(e) => handleMessageResult('hiddenMessage', e.target.value)}
                                                        placeholder="Entrez le message que vous avez découvert..."
                                                    />
                                                </div>
                                            </div>

                                            <div className="answer-field">
                                                <p style={{ fontSize: '1.2rem' }}>Expliquez comment les filtres permettent de révéler le message :</p>
                                                <div className="answer-container">
                                                    <textarea
                                                        className={`answer-input ${showCorrections.messageExplanation ? 'correction-active' : ''}`}
                                                        rows="4"
                                                        value={answers.messageExplanation}
                                                        onChange={(e) => handleInputChange('messageExplanation', e.target.value)}
                                                        placeholder="Expliquez le principe utilisé pour cacher et révéler le message..."
                                                    />
                                                    <button
                                                        className="correction-btnoptic"
                                                        onClick={() => toggleCorrection('messageExplanation')}
                                                    >
                                                        <FaCheck /> Voir correction
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    <section className="info-section">
                        <div className="info-card">
                            <div className="info-header" style={{ background: 'linear-gradient(to right, #4b7bec, #6a0dad)' }}>
                                <FcIdea className="info-icon" />
                                <h3>Théorie - Synthèse soustractive</h3>
                            </div>
                            <div className="info-content">
                                <div className="info-text">
                                    <p><strong>Principe :</strong> La synthèse soustractive fonctionne en soustrayant (absorbant) certaines couleurs de la lumière blanche et en laissant passer les autres.</p>

                                    <div className="tp2-color-properties">
                                        <div className="tp2-color-card" data-aos="fade-up" data-aos-delay="100">
                                            <div className="tp2-color-icon cyan">
                                                <span className="icon-symbol">C</span>
                                            </div>
                                            <h3 className="tp2-color-title">Filtre Cyan</h3>
                                            <p className="tp2-color-description">
                                                Absorbe le rouge (R)<br />
                                                Laisse passer le vert (V) et le bleu (B)
                                            </p>
                                        </div>

                                        <div className="tp2-color-card" data-aos="fade-up" data-aos-delay="200">
                                            <div className="tp2-color-icon magenta">
                                                <span className="icon-symbol">M</span>
                                            </div>
                                            <h3 className="tp2-color-title">Filtre Magenta</h3>
                                            <p className="tp2-color-description">
                                                Absorbe le vert (V)<br />
                                                Laisse passer le rouge (R) et le bleu (B)
                                            </p>
                                        </div>

                                        <div className="tp2-color-card" data-aos="fade-up" data-aos-delay="300">
                                            <div className="tp2-color-icon jaune">
                                                <span className="icon-symbol">J</span>
                                            </div>
                                            <h3 className="tp2-color-title">Filtre Jaune</h3>
                                            <p className="tp2-color-description">
                                                Absorbe le bleu (B)<br />
                                                Laisse passer le rouge (R) et le vert (V)
                                            </p>
                                        </div>
                                    </div>



                                    <h4 style={{ marginTop: '1.5rem', color: '#4b7bec' }}>Combinaisons de filtres</h4>
                                    <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
                                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
                                            <thead>
                                            <tr style={{ backgroundColor: '#f8f9fa' }}>
                                                <th style={{ padding: '0.8rem', border: '1px solid #ddd' }}>Combinaison</th>
                                                <th style={{ padding: '0.8rem', border: '1px solid #ddd' }}>Couleur obtenue</th>
                                                <th style={{ padding: '0.8rem', border: '1px solid #ddd' }}>Explication</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr style={{ backgroundColor: '#e0f7fa' }}>
                                                <td style={{ padding: '0.8rem', border: '1px solid #ddd', fontWeight: 'bold', color: '#004d40' }}>Cyan + Magenta</td>
                                                <td style={{ padding: '0.8rem', border: '1px solid #ddd', color: '#01579b' }}>Bleu</td>
                                                <td style={{ padding: '0.8rem', border: '1px solid #ddd', color: '#004d40' }}>Absorbe R+V, laisse B</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#f0f4c3' }}>
                                                <td style={{ padding: '0.8rem', border: '1px solid #ddd', fontWeight: 'bold', color: '#33691e' }}>Cyan + Jaune</td>
                                                <td style={{ padding: '0.8rem', border: '1px solid #ddd', color: '#388e3c' }}>Vert</td>
                                                <td style={{ padding: '0.8rem', border: '1px solid #ddd', color: '#33691e' }}>Absorbe R+B, laisse V</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#ffccbc' }}>
                                                <td style={{ padding: '0.8rem', border: '1px solid #ddd', fontWeight: 'bold', color: '#d32f2f' }}>Jaune + Magenta</td>
                                                <td style={{ padding: '0.8rem', border: '1px solid #ddd', color: '#a61313' }}>Rouge</td>
                                                <td style={{ padding: '0.8rem', border: '1px solid #ddd', color: '#d32f2f' }}>Absorbe V+B, laisse R</td>
                                            </tr>
                                            <tr style={{ backgroundColor: 'rgba(79,73,74,0.62)' }}>
                                                <td style={{ padding: '0.8rem', border: '1px solid #ddd', fontWeight: 'bold', color: '#000000' }}>Cyan + Magenta + Jaune</td>
                                                <td style={{ padding: '0.8rem', border: '1px solid #ddd', color: '#000000' }}>Noir</td>
                                                <td style={{ padding: '0.8rem', border: '1px solid #ddd', color: 'rgb(0,0,0)' }}>Absorbe R+V+B</td>
                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="warning-message1" style={{ marginTop: '1.5rem' }}>
                                        <FaExclamationTriangle /> <strong>Application :</strong> Ce principe est utilisé en impression couleur (CMJN), en photographie et dans les écrans LCD.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="tp-footer compact">
                        <div className="footer-content">
                            <p>Travail Pratique d'Optique - Synthèse soustractive</p>
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

export default TP2Optique;
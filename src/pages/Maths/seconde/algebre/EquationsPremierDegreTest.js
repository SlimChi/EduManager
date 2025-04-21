import React, {useRef, useState} from 'react';
import {FaCheck, FaCode, FaEquals} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import AutoEvaluationGrid from '../../../../config/AutoEvaluationGrid';
import hacker from '../../../../assets/hacker.png';
import ModalImage from '../../../../utils/ModalImage';
import Automatismes from "../../../../config/Automatismes";

const EquationsPremierDegreTest = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    // Liste des messages disponibles
    const messages = [
        {
            id: 0,
            name: "Message 1",
            coded: "⭐🎴 ⬛🔺 💀🖤🌙⭐",
            parts: ["⭐🎴", "⬛🔺", "💀🖤🌙⭐"],
            equations: {
                symbole1: {equation: "3 × 🔺 = 57", answer: "🔺 = 19"},
                symbole2: {equation: "⬛ - 3 = 2", answer: "⬛ = 5"},
                symbole3: {equation: "🌙 - 2 = 16", answer: "🌙 = 18"},
                symbole4: {equation: "⭐ + 5 = 25", answer: "⭐ = 20"},
                symbole5: {equation: "💀 + 1 = 7", answer: "💀 = 6"},
                symbole6: {equation: "2 × 🎴 = 42", answer: "🎴 = 21"},
                symbole7: {equation: "⭐ - 10 = 10", answer: "⭐ = 20"},
                symbole8: {equation: "🖤 ÷ 3 = 5", answer: "🖤 = 15"},
            },
            decoded: "⭐(20=T) 🎴(21=U) ⬛(5=E) 🔺(19=S) 💀(6=F) 🖤(15=O) 🌙(18=R) ⭐(20=T) → 'TU ES FORT'",
            message: "TU ES FORT"
        },
        {
            id: 1,
            name: "Message 2",
            coded: "🔺🌙 ⭐🖤 🎴💀⬛💀",
            parts: ["🔺", "🌙⭐🖤", "🎴💀⬛💀"],
            equations: {
                symbole1: {equation: "🔺 + 33 = 36", answer: "🔺 = 3"},
                symbole2: {equation: "🌙 x 2 = 30", answer: "🌙 = 5"},
                symbole3: {equation: "⭐ - 1 = 20", answer: "⭐ = 19"},
                symbole4: {equation: "🖤 × 2 = 40", answer: "🖤 = 20"},
                symbole5: {equation: "🎴 + 6 = 12", answer: "🎴 = 6"},
                symbole6: {equation: "💀 × 2 = 18", answer: "💀 = 9"},
                symbole7: {equation: "⬛ - 4 = 10", answer: "⬛ = 14"},
                symbole8: {equation: "💀 ÷ 3 = 3", answer: "💀 = 9"},
            },
            decoded: "🔺(3=C) 🌙(5=E) ⭐(19=S) 🖤(20=T) 🎴(6=F) 💀(9=I) ⬛(14=N)💀(9=I) → 'C'EST FINI'",
            message: "C'EST FINI"
        },
        {
            id: 2,
            name: "Message 3",
            coded: "🖤💀 🌙🔺 ⭐🎴⬛🌙",
            parts: ["🖤💀🌙🔺", "⭐🎴⬛🌙"],
            equations: {
                symbole1: {equation: "🖤 ÷ 2 = 1", answer: "🖤 = 2"},
                symbole2: {equation: "💀 + 1 = 10", answer: "💀 = 9"},
                symbole3: {equation: "🌙 - 3 = 2", answer: "🌙 = 5"},
                symbole4: {equation: "🔺 × 2 = 7", answer: "🔺 = 14"},
                symbole5: {equation: "⭐ + 5 = 15", answer: "⭐ = 10"},
                symbole6: {equation: "🎴 × 3 = 5", answer: "🎴 = 15"},
                symbole7: {equation: "⬛ - 4 = 16", answer: "⬛ = 21"},
                symbole8: {equation: "🌙 - 5 = 0", answer: "🌙 = 5"},
            },
            decoded: "🖤(2=B) 💀(9=I) 🌙(5=E) 🔺(14=N) ⭐(10=J) 🎴(15=O) ⬛(21=U) 🌙(5=E) → 'BIEN JOUÉ'",
            message: "BIEN JOUÉ"
        },
        {
            id: 3,
            name: "Message 4",
            coded: "🎴🌙 ⭐💀 🔺🖤💙",
            parts: ["🎴🌙⭐💀", "🔺⭐⭐💙"],
            equations: {
                symbole1: {equation: "🎴 + 4 = 24", answer: "🎴 = 20"},
                symbole2: {equation: "🌙 ÷ 2 = 9", answer: "🌙 = 18"},
                symbole3: {equation: "⭐ - 5 = 10", answer: "⭐ = 15"},
                symbole4: {equation: "💀 × 2 = 8", answer: "💀 = 16"},
                symbole5: {equation: "🔺 + 3 = 6", answer: "🔺 = 3"},
                symbole6: {equation: "⭐ ÷ 5 = 3", answer: "⭐ = 15"},
                symbole7: {equation: "⭐ - 3 = 12", answer: "⭐ = 15"},
                symbole8: {equation: "💙 - 2 = 10", answer: "💙 = 12"},
            },
            decoded: "🎴(20=T) 🌙(18=R) ⭐(15=O) 💀(16=P) 🔺(3=C) ⭐(15=O) ⭐(15=O) 💙(12=L) → 'TROP COOL'",
            message: "TROP COOL"
        },
        {
            id: 4,
            name: "Message 5",
            coded: "💀🖤⭐💀 💀🌙💚🎴",
            parts: ["💀🖤⭐💀", "💀🌙💚🎴"],
            equations: {
                symbole1: {equation: "💀 + 3 = 22", answer: "💀 = 19"},
                symbole2: {equation: "🖤 - 10 = 5", answer: "🖤 = 15"},
                symbole3: {equation: "⭐ ÷ 3 = 3", answer: "⭐ = 9"},
                symbole4: {equation: "💀 + 7 = 26", answer: "💀 = 19"},
                symbole5: {equation: "💀 - 1 = 18", answer: "💀 = 19"},
                symbole6: {equation: "🌙 + 2 = 3", answer: "🌙 = 1"},
                symbole7: {equation: "💚 × 1 = 7", answer: "💚 = 7"},
                symbole8: {equation: "🎴 + 4 = 9", answer: "🎴 = 5"},
            },
            decoded: "💀(19=S) 🖤(15=O) ⭐(9=I) 💀(19=S) 💀(19=S) 🌙(1=A) 💚(7=G) 🎴(5=E) → 'SOIS SAGE'",
            message: "SOIS SAGE"
        },

    ];

    const [selectedMessage, setSelectedMessage] = useState(0);
    const currentMessage = messages[selectedMessage];

    const [answers, setAnswers] = useState({
        symbole1: '',
        symbole2: '',
        symbole3: '',
        symbole4: '',
        symbole5: '',
        symbole6: '',
        symbole7: '',
        symbole8: '',
        message: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        symbole1: false,
        symbole2: false,
        symbole3: false,
        symbole4: false,
        symbole5: false,
        symbole6: false,
        symbole7: false,
        symbole8: false,
        message: false,
    });

    // Réponses attendues basées sur le message sélectionné
    const correctAnswers = {
        symbole1: currentMessage.equations.symbole1.answer,
        symbole2: currentMessage.equations.symbole2.answer,
        symbole3: currentMessage.equations.symbole3.answer,
        symbole4: currentMessage.equations.symbole4.answer,
        symbole5: currentMessage.equations.symbole5.answer,
        symbole6: currentMessage.equations.symbole6.answer,
        symbole7: currentMessage.equations.symbole7.answer,
        symbole8: currentMessage.equations.symbole8.answer,
        message: currentMessage.decoded,
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
    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));

        if (!answers[field] && !showCorrections[field]) {
            setAnswers((prev) => ({
                ...prev,
                [field]: correctAnswers[field],
            }));
        }
    };

    const contentRef = useRef();

    const [activeSteps, setActiveSteps] = useState([]);

    const toggleStep = (stepNumber) => {
        setActiveSteps((prev) =>
            prev.includes(stepNumber)
                ? prev.filter((step) => step !== stepNumber)
                : [...prev, stepNumber]
        );
    };

    const steps = [
        "1 → Isoler le terme contenant l'inconnue",
        "2 → Diviser par le coefficient de l'inconnue",
        "3 → Vérifier la solution en remplaçant dans l'équation",
    ];
    if (className === 'Secondeaequations-premier-degre') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>

            <div className="tp-container" id="equations-content" ref={contentRef}>
                {/* Barre latérale */}
                <div className="message-sidebar">
                    <h3>Messages d'encouragement</h3>
                    <ul>
                        {messages.map((msg, index) => (
                            <li
                                key={index}
                                className={selectedMessage === index ? 'active' : ''}
                                onClick={() => {
                                    setSelectedMessage(index);
                                    // Réinitialiser les réponses lors du changement de message
                                    setAnswers({
                                        symbole1: '',
                                        symbole2: '',
                                        symbole3: '',
                                        symbole4: '',
                                        symbole5: '',
                                        symbole6: '',
                                        symbole7: '',
                                        symbole8: '',
                                        message: '',
                                    });
                                    setShowCorrections({
                                        symbole1: false,
                                        symbole2: false,
                                        symbole3: false,
                                        symbole4: false,
                                        symbole5: false,
                                        symbole6: false,
                                        symbole7: false,
                                        symbole8: false,
                                        message: false,
                                    });
                                }}
                            >
                                {msg.name}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contenu principal */}
                <div className="tp-main-content">
                    <PrintManager
                        contentRef={contentRef}
                        activityName="Message_Secret_Equations"
                        pageCount={2}
                        quality="hd"
                    />
                    <div className="print-page">
                        <Automatismes/>
                    </div>
                    <div className="print-page">
                        <header className="tp-header">
                            <IoMdSchool className="header-icon"/>
                            <h1>🧩 Équations premier degré - Classe Seconde Mathématiques</h1>
                        </header>

                        <div className="math-chapter-box blue">
                            <FaCode className="math-chapter-icon"/>
                            <span style={{fontSize: '2rem', marginRight: '20px'}}>💻</span>
                            <h2 className="math-chapter-title-test"
                                style={{color: '#your-color', fontSize: 'your-size'}}>
                                Mission Code : Déchiffre le Message Secret !{' '}
                            </h2>
                            <div className="math-chapter-decoration">
                                <svg width="100" height="80" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 2L2 7L12 12L22 7L12 2Z M12 12L22 7 M12 12L2 7 M12 12V22 M22 7V17L12 22L2 17V7"
                                        stroke="#ff9500"
                                        strokeWidth="2"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="#ff5e00"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M12 8V16 M8 12H16"
                                        stroke="#ff9500"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="activity-header">
                            <span className="activity-badge">ACTIVITÉ 1</span>
                            <div className="activity-title">
                                <span className="course-title">
                                    <FaCode/> <span>🔢</span> « Un message pas clair ! »
                                </span>
                            </div>
                        </div>
                        <div
                            className="d-flex align-items-start flex-wrap"
                            style={{gap: '20px'}}
                        >
                            {/* Partie gauche : texte */}
                            <div style={{flex: 1, minWidth: '300px'}}>
                                <div className="renovation-contexte">
                                    <p>
                                        📩 Julio a reçu un message secret composé de symboles. Il sait
                                        que chaque symbole correspond à un nombre et que chaque nombre
                                        est associé à une lettre de l'alphabet.
                                        <p> Voici le Message codé reçu :</p>
                                        <p> {currentMessage.coded}</p>
                                    </p>
                                </div>
                                <div className="objectif-box" style={{marginTop: '-10px', marginBottom: '20px'}}>
                                    <p><strong> Objectif :</strong> 🎯
                                        Résoudre des équations simples pour découvrir la signification
                                        cachée d'un message codé.
                                    </p>
                                </div>
                            </div>

                            {/* Partie droite : image */}
                            <div
                                className="flex-shrink-0"
                                style={{
                                    maxWidth: '350px',
                                    cursor: 'pointer',
                                    marginTop: '50px',
                                }}
                            >
                                <img
                                    src={hacker}
                                    alt="Lancer de Dés"
                                    className="img-fluid rounded shadow-sm compact-img"
                                    onClick={() => openModal(hacker, 'Lancer de Dés')}
                                />
                            </div>
                        </div>

                        <section className="tp-section">
                            <h3> 🕵️ Partie 1 : Trouver les valeurs des symboles</h3>
                            <p>
                                Compléter le tableau suivant en trouvant la valeur de chaque
                                symbole.
                            </p>

                            <table className="measurement-table printable-table">
                                <thead>
                                <tr>
                                    <th>Équation</th>
                                    <th>Valeur du Symbole</th>
                                    <th>Équation</th>
                                    <th>Valeur du Symbole</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{currentMessage.equations.symbole3.equation}</td>
                                    <td>
                                        <input
                                            type="text"
                                            className={`answer-inputEq1deg ${showCorrections.symbole3 ? 'correction-active' : ''}`}
                                            value={answers.symbole3}
                                            onChange={(e) =>
                                                handleInputChange('symbole3', e.target.value)
                                            }
                                        />
                                        <button
                                            className="correction-btn3"
                                            onClick={() => toggleCorrection('symbole3')}
                                        >
                                            <FaCheck/> Correction
                                        </button>
                                    </td>
                                    <td>{currentMessage.equations.symbole1.equation}</td>
                                    <td>
                                        <input
                                            type="text"
                                            className={`answer-inputEq1deg ${showCorrections.symbole1 ? 'correction-active' : ''}`}
                                            value={answers.symbole1}
                                            onChange={(e) =>
                                                handleInputChange('symbole1', e.target.value)
                                            }
                                        />
                                        <button
                                            className="correction-btn3"
                                            onClick={() => toggleCorrection('symbole1')}
                                        >
                                            <FaCheck/> Correction
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{currentMessage.equations.symbole4.equation}</td>
                                    <td>
                                        <input
                                            type="text"
                                            className={`answer-inputEq1deg ${showCorrections.symbole4 ? 'correction-active' : ''}`}
                                            value={answers.symbole4}
                                            onChange={(e) =>
                                                handleInputChange('symbole4', e.target.value)
                                            }
                                        />
                                        <button
                                            className="correction-btn3"
                                            onClick={() => toggleCorrection('symbole4')}
                                        >
                                            <FaCheck/> Correction
                                        </button>
                                    </td>
                                    <td>{currentMessage.equations.symbole2.equation}</td>
                                    <td>
                                        <input
                                            type="text"
                                            className={`answer-inputEq1deg ${showCorrections.symbole2 ? 'correction-active' : ''}`}
                                            value={answers.symbole2}
                                            onChange={(e) =>
                                                handleInputChange('symbole2', e.target.value)
                                            }
                                        />
                                        <button
                                            className="correction-btn3"
                                            onClick={() => toggleCorrection('symbole2')}
                                        >
                                            <FaCheck/> Correction
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{currentMessage.equations.symbole5.equation}</td>
                                    <td>
                                        <input
                                            type="text"
                                            className={`answer-inputEq1deg ${showCorrections.symbole5 ? 'correction-active' : ''}`}
                                            value={answers.symbole5}
                                            onChange={(e) =>
                                                handleInputChange('symbole5', e.target.value)
                                            }
                                        />
                                        <button
                                            className="correction-btn3"
                                            onClick={() => toggleCorrection('symbole5')}
                                        >
                                            <FaCheck/> Correction
                                        </button>
                                    </td>
                                    <td>{currentMessage.equations.symbole6.equation}</td>
                                    <td>
                                        <input
                                            type="text"
                                            className={`answer-inputEq1deg ${showCorrections.symbole6 ? 'correction-active' : ''}`}
                                            value={answers.symbole6}
                                            onChange={(e) =>
                                                handleInputChange('symbole6', e.target.value)
                                            }
                                        />
                                        <button
                                            className="correction-btn3"
                                            onClick={() => toggleCorrection('symbole6')}
                                        >
                                            <FaCheck/> Correction
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{currentMessage.equations.symbole7.equation}</td>
                                    <td>
                                        <input
                                            type="text"
                                            className={`answer-inputEq1degt ${showCorrections.symbole7 ? 'correction-active' : ''}`}
                                            value={answers.symbole7}
                                            onChange={(e) =>
                                                handleInputChange('symbole7', e.target.value)
                                            }
                                        />
                                        <button
                                            className="correction-btn3"
                                            onClick={() => toggleCorrection('symbole7')}
                                        >
                                            <FaCheck/> Correction
                                        </button>
                                    </td>
                                    <td>{currentMessage.equations.symbole8.equation}</td>
                                    <td>
                                        <input
                                            type="text"
                                            className={`answer-inputEq1deg ${showCorrections.symbole8 ? 'correction-active' : ''}`}
                                            value={answers.symbole8}
                                            onChange={(e) =>
                                                handleInputChange('symbole8', e.target.value)
                                            }
                                        />
                                        <button
                                            className="correction-btn3"
                                            onClick={() => toggleCorrection('symbole8')}
                                        >
                                            <FaCheck/> Correction
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </section>
                        <div className="equation-card">
                            <h3 className="equation-title">
                                <FaEquals className="equation-icon"/> Qu'est-ce qu'une équation ?
                            </h3>
                            <p className="equation-text">
                                Une équation est une phrase mathématique où <span className="highlight2">deux expressions sont égales</span>.
                                On cherche la valeur de l'inconnue qui rend cette égalité <span
                                className="highlight2">vraie</span>.
                            </p>
                        </div>
                    </div>
                    {/* Page 2 */}
                    <div className="print-page">
                        <section className="tp-section">
                            <h3>🔑 Partie 2 : Décrypter le message</h3>

                            <div className="question">
                                <p>
                                    Utilisez le tableau de correspondance des lettres pour décrypter
                                    le message :
                                </p>

                                <table className="measurement-table printable-table" style={{maxHeight: '71%'}}>
                                    <thead>
                                    <tr>
                                        <th>Lettre</th>
                                        <th>Valeur</th>
                                        <th>Lettre</th>
                                        <th>Valeur</th>
                                        <th>Lettre</th>
                                        <th>Valeur</th>
                                        <th>Lettre</th>
                                        <th>Valeur</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>A</td>
                                        <td>1</td>
                                        <td>B</td>
                                        <td>2</td>
                                        <td>C</td>
                                        <td>3</td>
                                        <td>D</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>E</td>
                                        <td>5</td>
                                        <td>F</td>
                                        <td>6</td>
                                        <td>G</td>
                                        <td>7</td>
                                        <td>H</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <td>I</td>
                                        <td>9</td>
                                        <td>J</td>
                                        <td>10</td>
                                        <td>K</td>
                                        <td>11</td>
                                        <td>L</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>M</td>
                                        <td>13</td>
                                        <td>N</td>
                                        <td>14</td>
                                        <td>O</td>
                                        <td>15</td>
                                        <td>P</td>
                                        <td>16</td>
                                    </tr>
                                    <tr>
                                        <td>Q</td>
                                        <td>17</td>
                                        <td>R</td>
                                        <td>18</td>
                                        <td>S</td>
                                        <td>19</td>
                                        <td>T</td>
                                        <td>20</td>
                                    </tr>
                                    <tr>
                                        <td>U</td>
                                        <td>21</td>
                                        <td>V</td>
                                        <td>22</td>
                                        <td>W</td>
                                        <td>23</td>
                                        <td>X</td>
                                        <td>24</td>
                                    </tr>
                                    <tr>
                                        <td>Y</td>
                                        <td>25</td>
                                        <td>Z</td>
                                        <td>26</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>

                                <div className="answer-container">
                                    <p>🧮 Message décrypté :</p>
                                    <input
                                        type="text"
                                        className={`answer-input ${showCorrections.message ? 'correction-active' : ''}`}
                                        value={answers.message}
                                        onChange={(e) => handleInputChange('message', e.target.value)}
                                        style={{width: '100%'}}
                                    />
                                    <button
                                        className="correction-btn mt-2"
                                        onClick={() => toggleCorrection('message')}
                                    >
                                        <FaCheck/> Correction
                                    </button>
                                </div>
                            </div>

                            <div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginTop: '-10px'
                                }}>
                                    <h3>🧠 Je retiens</h3>
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleStep(1)}
                                        style={{marginLeft: '10px'}}
                                    >
                                        {activeSteps.includes(1) ? 'Masquer' : 'Afficher'} les informations
                                    </button>
                                </div>

                                <div className="vector-summary-container">
                                    {activeSteps.includes(1) ? (
                                        <div className="vector-cards-grid">
                                            <div className="vector-card">
                                                <h4>📝 C'est quoi une équation ?</h4>
                                                <p>
                                                    Une équation est une égalité mathématique qui contient une
                                                    inconnue.
                                                    <br/>
                                                    <strong>Exemple :</strong> 3x + 5 = 20
                                                </p>
                                            </div>
                                            <div className="vector-card">
                                                <h4>💡 En pratique</h4>
                                                <p>
                                                    Une équation permet de trouver une valeur inconnue en
                                                    respectant l'égalité.
                                                    <br/>
                                                    <em>Vérification :</em> 3×5 + 5 = 20 → 15 + 5 = 20 ✔️
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="vector-cards-grid" style={{marginTop: '-20px'}}>
                                            {/* Cartes vides pour réponse */}
                                            <div className="vector-card" style={{
                                                border: '2px dashed #ccc',
                                                minHeight: '150px', // Environ 5 lignes
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#999'
                                            }}>
                                            </div>

                                            <div className="vector-card" style={{
                                                border: '2px dashed #ccc',
                                                minHeight: '150px', // Environ 5 lignes
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#999'
                                            }}>
                                            </div>
                                        </div>)}
                                </div>
                            </div>
                            <AutoEvaluationGrid/>
                        </section>

                    </div>
                    <footer className="tp-footer">
                        <p>
                            © 2025 - Mathématiques : équations premier degré - Tous droits
                            réservés
                        </p>
                    </footer>
                    {modalState.show && (
                        <ModalImage
                            imageUrl={modalState.imageUrl}
                            altText={modalState.altText}
                            onClose={closeModal}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default EquationsPremierDegreTest;
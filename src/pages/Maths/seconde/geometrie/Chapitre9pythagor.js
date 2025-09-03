import React, {useRef, useState} from 'react';
import {
    FaPrint,
    FaCheck,
    FaRuler,
    FaChartBar,
    FaCalculator,
    FaShapes,
    FaSquare,
    FaCircle
} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io';
import '../../../../styles/activites.css';
import {useLocation, useParams} from "react-router-dom";
import BackButton from "../../../../components/navigation/BackButton";
import ModalImage from "../../../../utils/ModalImage";
import Automatismes from "../../../../config/Automatismes";
import PrintManager from "../../../../utils/PrintManager";


const Chapitre9Pythagor = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    const [answers, setAnswers] = useState({
        question1a: '',
        question1b: '',
        question2: '',
        question3a: '',
        question3b: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        question1a: false,
        question1b: false,
        question2: false,
        question3a: false,
        question3b: false
    });

    // Réponses attendues
    const correctAnswers = {
        question1a: "√34 ≈ 5,83",
        question1b: "Les solutions sont x = -6 et x = 6",
        question2: "A = B ✓ A = C",
        question3a: "✓ Les droites (BC) et (DE) n'ont pas de point d'intersection",
        question3b: "(AB) // (DE) et (BC) // (DE)"
    };

    const [modalState, setModalState] = useState({
        show: false,
        imageUrl: '',
        altText: ''
    });

    const handleInputChange = (field, value) => {
        setAnswers(prev => ({
            ...prev,
            [field]: value
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

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState(prev => ({...prev, show: false}));
    };

    const contentRef = useRef();
    if (className === 'Seconde') {
        return <div>Ce chapitre n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>

            <div className="tp-container" id="pythagore-content" ref={contentRef}>
                <PrintManager
                    contentRef={contentRef}
                    activityName="Theoremes_Pythagore_Thales"
                    pageCount={2}
                    quality="hd"
                />
                <div className="print-page">

                    <header className="tp-header">
                        <IoMdSchool className="header-icon"/>
                        <h1>Théorèmes de Pythagore et Thalès - Classe 2nde Mathématiques</h1>

                    </header>
                    <Automatismes/>
                    <div className="tp-intro">
                        <div className="math-chapter-box red">
                            <FaChartBar className="math-chapter-icon"/>
                            <h2 className="math-chapter-title">
                                Calculs de longueurs </h2>
                            <div className="math-chapter-decoration">
                                <svg width="100" height="80" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 2L2 7L12 12L22 7L12 2Z M12 12L22 7 M12 12L2 7 M12 12V22 M22 7V17L12 22L2 17V7"
                                        stroke="#ff9500" strokeWidth="2"/>
                                    <circle cx="12" cy="12" r="10" stroke="#ff5e00" strokeWidth="1.5"/>
                                    <path d="M12 8V16 M8 12H16" stroke="#ff9500" strokeWidth="2"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-start" style={{gap: '20px'}}>
                        <div style={{flex: 1}}>
                            <p className="d-flex align-items-center flex-wrap mt-4">
                             <span
                                 className="badge bg-primary text-white rounded-pill px-4 py-2 shadow-lg me-3"
                                 style={{fontSize: '1.0rem', letterSpacing: '1px'}}
                             >
                                    THÉORÈMES CLÉS
                                </span>
                                <span className="course-title">
                                    <FaRuler/> Pythagore & Thalès
                                </span>
                            </p>
                            <p>
                                Ce chapitre explore les théorèmes fondamentaux pour le calcul des longueurs en
                                géométrie.
                            </p>
                        </div>
                    </div>


                    <section className="formulas-cards">
                        <div className="formula-card triangle-card">
                            <h4><FaShapes/> Théorème de Pythagore</h4>
                            <div className="formula-content">
                                <p>Dans un triangle rectangle :</p>
                                <div className="math-formula">AB² + AC² = BC²</div>
                            </div>
                        </div>

                        <div className="formula-card circle-card">
                            <h4><FaCircle/> Théorème de Thalès</h4>
                            <div className="formula-content ">
                                <p>Avec (DE) // (BC) :</p>
                                <div className="math-formula">
                                    <div className="fraction">
                                        <span>AD</span>
                                        <span>AB</span>
                                    </div>
                                    =
                                    <div className="fraction">
                                        <span>AE</span>
                                        <span>AC</span>
                                    </div> =
                                    <div className="fraction">
                                        <span>DE</span>
                                        <span>BC</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="warm-up">
                        {/* Activité 1 */}
                        <section className="tp-section">
                            <div className="warm-up-title">Je m'échauffe !</div>
                            <div className="activities-container">
                                {/* Ligne supérieure avec Activité 1 et 2 */}
                                <div className="activities-row">
                                    {/* Carte Activité 1 */}
                                    <div className="activity-card">
                                        <div className="activity-header">
                                            <span className="activity-bubble bubble-blue">1</span>
                                        </div>

                                        <div className="activity-content">
                                            <div className="question">
                                                <p>a. Donnez la valeur arrondie au centième de √34.</p>
                                                <div className="answer-container">
                                                    <input
                                                        type="text"
                                                        className={`answer-input ${showCorrections.question1a ? 'correction-active' : ''}`}
                                                        value={answers.question1a}
                                                        onChange={(e) => handleInputChange('question1a', e.target.value)}
                                                    />
                                                    <button className="correction-btn"
                                                            onClick={() => toggleCorrection('question1a')}>
                                                        <FaCheck/> Correction
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="question">
                                                <p>b. L'équation x² = 36 admet deux solutions. Lesquelles ?</p>
                                                <div className="answer-container">
            <textarea
                className={`answer-input ${showCorrections.question1b ? 'correction-active' : ''}`}
                rows="2"
                value={answers.question1b}
                onChange={(e) => handleInputChange('question1b', e.target.value)}
            />
                                                    <button className="correction-btn"
                                                            onClick={() => toggleCorrection('question1b')}>
                                                        <FaCheck/> Correction
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Carte Activité 2 */}
                                    <div className="activity-card">
                                        <div className="activity-header">
                                            <span className="activity-bubble bubble-green">2</span>
                                        </div>

                                        <div className="activity-content">
                                            <div className="math-equation">Si A = 2 × √2500 - 2 × √49</div>
                                            <div className="math-equation">B = 9² + (√2)²</div>
                                            <div className="math-equation">C = √8100 - 2²</div>

                                            <div className="question">Alors :</div>
                                            <div className="answer-container">
                                                <input
                                                    type="text"
                                                    className={`answer-input ${showCorrections.question2 ? 'correction-active' : ''}`}
                                                    value={answers.question2}
                                                    onChange={(e) => handleInputChange('question2', e.target.value)}
                                                />
                                                <button className="correction-btn"
                                                        onClick={() => toggleCorrection('question2')}>
                                                    <FaCheck/> Correction
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Ligne inférieure avec Activité 3 (large) */}
                                <div className="activities-row">
                                    <div style={{display: 'flex', gap: '20px', alignItems: 'flex-start'}}>
                                        {/* Carte unique pour les questions 3a et 3b */}
                                        <div className="activity-card-wide">
                                            <div className="activity-header">
                                                <span className="activity-bubble bubble-orange">3</span>
                                            </div>

                                            <div className="activity-content-wide">
                                                {/* Question 3a en QCM */}
                                                <div className="question-column">
                                                    <div className="question">
                                                        <p>a. Si (BC) // (DE) alors :</p>
                                                        <div className="answer-container">
                                                            <div className="qcm-options">
                                                                <label className="qcm-option">
                                                                    <input
                                                                        type="radio"
                                                                        name="question3a"
                                                                        checked={answers.question3a === "les droites (BC) et (DE) sont sécantes"}
                                                                        onChange={() => handleInputChange('question3a', "les droites (BC) et (DE) sont sécantes")}
                                                                    />
                                                                    <span>les droites (BC) et (DE) sont sécantes</span>
                                                                </label>

                                                                <label className="qcm-option">
                                                                    <input
                                                                        type="radio"
                                                                        name="question3a"
                                                                        checked={answers.question3a === "les droites (BC) et (DE) n'ont pas de point d'intersection"}
                                                                        onChange={() => handleInputChange('question3a', "les droites (BC) et (DE) n'ont pas de point d'intersection")}
                                                                    />
                                                                    <span>les droites (BC) et (DE) n'ont pas de point d'intersection</span>
                                                                </label>
                                                            </div>
                                                            <button className="correction-btn"
                                                                    onClick={() => toggleCorrection('question3a')}>
                                                                <FaCheck/> Correction
                                                            </button>
                                                            {showCorrections.question3a && (
                                                                <div className="correction-text">
                                                                    <p>Correction : La bonne réponse est "les droites
                                                                        (BC) et (DE) n'ont pas de point
                                                                        d'intersection"</p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Question 3b (inchangée) */}
                                                <div className="question-column">
                                                    <div className="question">
                                                        <p>b. En observant la configuration ci-contre, citez :</p>
                                                        <div className="answer-container">
                            <textarea
                                className={`answer-input ${showCorrections.question3b ? 'correction-active' : ''}`}
                                rows="3"
                                value={answers.question3b}
                                onChange={(e) => handleInputChange('question3b', e.target.value)}
                                placeholder="- une droite parallèle à (AB) : (AB) //........."
                            />
                                                            <button className="correction-btn"
                                                                    onClick={() => toggleCorrection('question3b')}>
                                                                <FaCheck/> Correction
                                                            </button>
                                                            {showCorrections.question3b && (
                                                                <div className="correction-text">
                                                                    <p>Correction :</p>
                                                                    <ul>
                                                                        <li>Une droite parallèle à (AB) : (AB) // (HI)
                                                                        </li>
                                                                        <li>La droite parallèle à (BC) passant par D :
                                                                            (DE)
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Image à droite (inchangée) */}
                                            <div style={{
                                                flex: 1,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <img
                                                    src={require("../../../../assets/trianglepythaexo1.png")}
                                                    alt="Configuration géométrique"
                                                    style={{maxWidth: '100%', maxHeight: '300px', objectFit: 'contain'}}
                                                />
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Page 2 - Exercices pratiques */}
                <div className="print-page">
                    <section className="exercices-section">
                        <h2 className="section-title">
                            <FaRuler className="icon"/> Exercices pratiques
                        </h2>

                        <div className="exercices-grid">
                            {/* Carte Exercice 1 */}
                            <div className="exercice-card square-card">
                                <div className="card-header">
                                    <FaSquare className="card-icon"/>
                                    <h3>Exercice 1</h3>
                                </div>
                                <div className="card-content">
                                    <p>ABC est un triangle rectangle en A avec AB = 5 cm et AC = 7 cm.</p>
                                    <p>Calculer BC en utilisant le théorème de Pythagore.</p>
                                    <div className="answer-space">
                                        {showCorrections.ex1 ? (
                                            <div className="formula-box">
                                                <p className="formula-text">BC² = AB² + AC²</p>
                                                <p className="result-text">BC = √(5² + 7²) ≈ 8,60 cm</p>
                                            </div>
                                        ) : (
                                            <div className="empty-space"></div>
                                        )}
                                    </div>
                                    {!showCorrections.ex1 && (
                                        <button
                                            className="correction-btn"
                                            onClick={() => toggleCorrection('ex1')}
                                        >
                                            <FaCheck/> Afficher correction
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Carte Exercice 2 */}
                            <div className="exercice-card circle-card">
                                <div className="card-header">
                                    <FaCircle className="card-icon"/>
                                    <h3>Exercice 2</h3>
                                </div>
                                <div className="card-content">
                                    <p>Configuration de Thalès avec (DE) // (BC), AD = 3 cm, AB = 9 cm et DE = 4 cm.</p>
                                    <p>Calculer BC.</p>
                                    <div className="answer-space">
                                        {showCorrections.ex2 ? (
                                            <div className="formula-box">
                                                <p className="formula-text">AD/AB = DE/BC</p>
                                                <p className="result-text">BC = (DE × AB)/AD = 12 cm</p>
                                            </div>
                                        ) : (
                                            <div className="empty-space"></div>
                                        )}
                                    </div>
                                    {!showCorrections.ex2 && (
                                        <button
                                            className="correction-btn"
                                            onClick={() => toggleCorrection('ex2')}
                                        >
                                            <FaCheck/> Afficher correction
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="tp-footer">
                        <p>Chapitre 9 - Théorèmes de Pythagore et Thalès</p>
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
        </>
    );
};

export default Chapitre9Pythagor;
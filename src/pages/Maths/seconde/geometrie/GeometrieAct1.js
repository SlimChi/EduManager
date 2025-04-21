import React, {useRef, useState} from 'react';
import {
    FaPrint,
    FaCheck,
    FaRuler,
    FaHome,
    FaPalette,
    FaRulerCombined,
    FaCircle,
    FaShapes,
    FaSquare,
    FaThLarge,
    FaDice,
    FaMeteor,
    FaCalculator,
    FaCertificate,
} from 'react-icons/fa';
import '../../../../styles/act1geometrie.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import imageAct1 from '../../../../assets/act1geofigures.png';
import cuisine from '../../../../assets/benggers.png';
import ModalImage from '../../../../utils/ModalImage';
import '../../../../styles/AireFiguresCard.css';
import carre from '../../../../assets/carre2.png';
import cercle from '../../../../assets/cercle2.png';
import rectangle from '../../../../assets/rectangle2.png';
import triangle from '../../../../assets/triangle2.png';
import Automatismes from '../../../../config/Automatismes';
import PrintManager from '../../../../utils/PrintManager';
import AutoEvaluationGrid from '../../../../config/AutoEvaluationGrid';
import AutoResizeTextarea from '../../../../config/AutoResizeTextarea';
import {FcCalculator} from 'react-icons/fc';

const GeometrieAct1 = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
        question8: '',
        question9: '',
        question10: '',
        question11a: '',
        question11b: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false,
        question6: false,
        question7: false,
        question8: false,
        question9: false,
        question10: false,
        question11a: false,
        question11b: false,
    });

    const correctAnswers = {
        question1: 'Les trois formes géométriques sont: rectangle, triangle et demi-cercle.',
        question2: 'AB = 10 cm, BD = 6 cm\n' + 'ED = 10 cm, AE = 6 cm\n' + 'CD = 4 cm, BC = 7,2 cm',

        // Corrections à partir d'ici en se basant sur Q1 et Q2
        question3: 'AB = 10 m, BD = 6 m\n' + 'ED = 10 m, AE = 6 m\n' + 'CD = 4 m, BC = 7,2 m',

        question4: 'Longueur du demi-cercle = π × R\n' + 'R = ED ÷ 2 = 10 ÷ 2 = 5 m\n' + // Correction: rayon basé sur ED (diamètre)
            'Calcul: P = π × 5 ≈ 15,71 m',

        question5: 'Périmètre total = AB + BC + CD + DE + demi-cercle\n' + '= 10 + 7,2 + 4 + 10 + 15,71 \n Périmètre total ≈ 46,91 m', // Basé sur les mesures de Q2/Q3

        question6: 'Nombre de plinthes = périmètre ÷ 2,4\n' + '= 46,91 ÷ 2,4 ≈ 19,55 → 20 plinthes', // Arrondi à l'unité supérieure

        question7: 'Aire de la partie « Bibliothèque » = (base × hauteur) ÷ 2\n' + '= (CD × AE) ÷ 2 = (4 × 6) ÷ 2 = 12 m²', // Correction selon dimensions Q2

        question8: 'Aire partie principale = AB × BD\n' + '= 10 × 6 = 60 m²', // Rectangle AB × BD

        question9: 'Aire de la partie « Coin détente » = (π × R²) ÷ 2\n' + '= (3,14 × 5²) ÷ 2 ≈ 39,27 m²', // Rayon corrigé à 5m (ED/2)

        question10: 'Aire totale = Aire triangle + Aire rectangle + Aire demi-cercle\n' + '= 12 + 60 + 39,27 ≈ 111,27 m²',

        question11a: "Aire d'un paquet = 10 × (0,3 × 0,6) = 1,8 m²", // Inchangé

        question11b: 'Nombre de paquets nécessaires:\n' + '111,27 ÷ 1,8 ≈ 61,82\n' + 'Avec 10% supplémentaire: 61,82 × 1,1 ≈ 68\n' + '→ 68 paquets',
    };
    const [modalState, setModalState] = useState({
        show: false, imageUrl: '', altText: '',
    });

    const [showFormule, setShowFormule] = useState({
        carre: false, rectangle: false, triangle: false, cercle: false,
    });

    const toggleFormule = (figure) => {
        setShowFormule((prev) => ({
            ...prev, [figure]: !prev[figure],
        }));
    };

    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({
            ...prev, [field]: value,
        }));
    };

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({
            ...prev, [field]: !prev[field],
        }));

        if (!answers[field] && !showCorrections[field]) {
            setAnswers((prev) => ({
                ...prev, [field]: correctAnswers[field],
            }));
        }
    };

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState((prev) => ({...prev, show: false}));
    };

    const contentRef = useRef();

    if (className === 'Seconde-geometrie-act1') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div
            className="tp-container"
            id="geometrie-act1-content"
            ref={contentRef}
        >
            <PrintManager
                contentRef={contentRef}
                activityName="Geometrie_Cuisine"
                pageCount={5}
                quality="ultrahd"
            />

            {/* Page 1 - Automatismes */}
            <div className="print-page">
                <Automatismes/>
            </div>

            {/* Page 2 - Chapitre et formules */}
            <div className="print-page" id="page1-start">
                <header className="tp-header">
                    <h1>
                        📐 Calculs d'aires et de volumes - Classe Seconde Mathématiques🧊
                    </h1>
                </header>
                <div className="math-chapter-box green">
                    <FaCalculator className="math-chapter-icon"/>
                    <h2 className="math-chapter-title-test">
                        📏 Chapitre 3 : Calculs d'aires et de volumes
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
                            <path d="M12 8V16 M8 12H16" stroke="#ff9500" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>
                <div className="activity-header">
                    <span className="activity-badge">ACTIVITÉ 1</span>
                    <div className="activity-title">
              <span className="course-title">
                <FaRuler/> Mathématiques au service de la maison
              </span>
                    </div>
                </div>

                <div className="d-flex align-items-start" style={{gap: '20px'}}>
                    <div style={{flex: 1}}>
                        <div className="renovation-contexte">
                            <p>
                                👨‍👩‍👧‍👦 Monsieur et Madame <strong>Benggers</strong> veulent
                                rénover le sol de leur salon 🧱. Ils souhaitent connaître le
                                nombre de plinthes et de dalles de parquet nécessaires.
                            </p>
                            <p className="objectif-phrase">
                                <strong style={{color: '#e74c3c'}}>🎯 Objectif :</strong>{' '}
                                <br/>
                                <FcCalculator/>
                                Estimer précisément les quantités de matériaux nécessaires
                                pour recouvrir toute la surface du salon.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex-shrink-0"
                        style={{
                            maxWidth: '300px', cursor: 'pointer', margin: '0 auto', marginTop: '5%',
                        }}
                    >
                        <img
                            src={cuisine}
                            alt="Calculs d'aires et de volumes"
                            className="img-fluid rounded shadow-sm compact-img"
                            onClick={() => openModal(cuisine, "Calculs d'aires et de volumes")}
                        />
                    </div>
                </div>
                <img
                    src={imageAct1}
                    alt="Calculs d'aires et de volumes"
                    className="img-fluid rounded shadow-sm compact-img"
                    style={{
                        width: '100%', cursor: 'pointer', alignContent: 'center',
                    }}
                    onClick={() => openModal(imageAct1, "Calculs d'aires et de volumes")}
                />
                <section className="formulas-cards">
                    <div className="formula-card triangle-card">
                        <h4>Aire d'un triangle</h4>
                        <div className="formula-content">
                            <p>
                                Aire d'un triangle de base <i>b</i> et de hauteur <i>h</i> :
                            </p>
                            <div className="math-formula">
                                A =
                                <div className="fraction">
                                    <span>b × h</span>
                                    <span>2</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="formula-card circle-card">
                        <h4>
                            <FaCircle/> Aire d'un disque
                        </h4>
                        <div className="formula-content">
                            <p>
                                Aire d'un disque de rayon <i>R</i> :
                            </p>
                            <div className="math-formula">
                                A = π × R<sup>2</sup>
                            </div>
                        </div>
                    </div>

                    <div className="formula-card perimeter-card">
                        <h4>
                            <FaRulerCombined/> Périmètre d'un cercle
                        </h4>
                        <div className="formula-content">
                            <p>
                                Périmètre d'un cercle de rayon <i>R</i> :
                            </p>
                            <div className="math-formula">P = 2 × π × R</div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Page 3 - Questions 1 à 11 */}
            <div className="print-page" id="page3-start">
                <section className="tp-section compact">
                    <div className="questions-container">
                        <div className="questions-column">
                            {/* Questions 1-4 */}
                            <div className="question-card wide">
                                <div className="question-number2">1</div>
                                <p>
                                    Identifier les trois formes géométriques qui composent le
                                    sol de la cuisine.
                                </p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        id="textarea-question1"
                                        className={`answer-input ${showCorrections.question1 ? 'correction-active' : 'hidden-answer'}`}
                                        value={answers.question1}
                                        onChange={(e) => handleInputChange('question1', e.target.value)}
                                        minRows={3}
                                        maxRows={13}
                                    />
                                    {!showCorrections.question1 && (<button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('question1')}
                                    >
                                        <FaCheck/> Voir correction
                                    </button>)}
                                </div>
                            </div>
                            {/* Question 2 */}
                            <div className="question-card">
                                <div className="question-number2">2</div>
                                <p>
                                    Mesurer les dimensions de la cuisine sur le plan, en cm.
                                </p>
                                <div className="answer-area">
                                        <textarea
                                            className={`answer-input ${showCorrections.question2 ? 'correction-active' : 'hidden-answer'}`}
                                            rows="3"
                                            value={answers.question2}
                                            onChange={(e) => handleInputChange('question2', e.target.value)}
                                        />
                                    {!showCorrections.question2 && (<button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('question2')}
                                    >
                                        <FaCheck/> Voir correction
                                    </button>)}
                                </div>
                            </div>

                            {/* Question 3 */}
                            <div className="question-card">
                                <div className="question-number2">3</div>

                                <p>
                                    Sachant que 1 cm sur le plan représente 1 m en réalité,
                                    indiquer les dimensions réelles de la cuisine, en m.
                                </p>
                                <div className="answer-area">
                                        <textarea
                                            className={`answer-input ${showCorrections.question3 ? 'correction-active' : 'hidden-answer'}`}
                                            rows="3"
                                            value={answers.question3}
                                            onChange={(e) => handleInputChange('question3', e.target.value)}
                                        />
                                    {!showCorrections.question3 && (<button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('question3')}
                                    >
                                        <FaCheck/> Voir correction
                                    </button>)}
                                </div>
                            </div>

                            {/* Question 4 */}
                            <div className="question-card">
                                <div className="question-number2">4</div>

                                <p>Calculer la longueur du demi-cercle de diamètre [AE].</p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        id={`textarea-question4`}
                                        className={`answer-input ${showCorrections.question4 ? 'correction-active' : 'hidden-answer'}`}
                                        value={answers.question4}
                                        onChange={(e) => handleInputChange('question4', e.target.value)}
                                        minRows={3}
                                        maxRows={10}
                                    />
                                    {!showCorrections.question4 && (<button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('question4')}
                                    >
                                        <FaCheck/> Voir correction
                                    </button>)}
                                </div>
                            </div>
                            <div className="question-card wide">
                                <div className="question-number2">5</div>
                                <p>Calculer le périmètre de la cuisine.</p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        id="textarea-question5"
                                        className={`answer-input ${showCorrections.question5 ? 'correction-active' : 'hidden-answer'}`}
                                        value={answers.question5}
                                        onChange={(e) => handleInputChange('question5', e.target.value)}
                                        minRows={5}
                                        maxRows={15}
                                    />
                                    {!showCorrections.question5 && (<button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('question5')}
                                    >
                                        <FaCheck/> Voir correction
                                    </button>)}
                                </div>
                            </div>
                        </div>

                        <div className="questions-column">
                            {/* Questions 6-11 */}

                            {/* Question 6 */}
                            <div className="question-card">
                                <div className="question-number2">6</div>
                                <p>
                                    Sachant qu'une plinthe a une longueur de 2,4 m, calculer le
                                    nombre de plinthes nécessaires.
                                </p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        id={`textarea-question6`}
                                        className={`answer-input ${showCorrections.question6 ? 'correction-active' : 'hidden-answer'}`}
                                        value={answers.question6}
                                        onChange={(e) => handleInputChange('question6', e.target.value)}
                                        minRows={4}
                                        maxRows={13}
                                    />
                                    {!showCorrections.question6 && (<button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('question6')}
                                    >
                                        <FaCheck/> Voir correction
                                    </button>)}
                                </div>
                            </div>

                            {/* Question 7 */}
                            <div className="question-card">
                                <div className="question-number2">7</div>

                                <p>
                                    Calculer l'aire de la partie « Bibliothèque » (partie
                                    verte).
                                </p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        id={`textarea-question7`}
                                        className={`answer-input ${showCorrections.question7 ? 'correction-active' : 'hidden-answer'}`}
                                        value={answers.question7}
                                        onChange={(e) => handleInputChange('question7', e.target.value)}
                                        minRows={4}
                                        maxRows={17}
                                    />
                                    {!showCorrections.question7 && (<button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('question7')}
                                    >
                                        <FaCheck/> Voir correction
                                    </button>)}
                                </div>
                            </div>
                            {/* Question 8 */}
                            <div className="question-card">
                                <div className="question-number2">8</div>
                                <p>
                                    Calculer l'aire de la partie principale du salon (partie bleue).
                                </p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        id={`textarea-question8`}
                                        className={`answer-input ${showCorrections.question8 ? 'correction-active' : 'hidden-answer'}`}
                                        value={answers.question8}
                                        onChange={(e) => handleInputChange('question8', e.target.value)}
                                        minRows={4}
                                        maxRows={13}
                                    />
                                    {!showCorrections.question8 && (<button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('question8')}
                                    >
                                        <FaCheck/> Voir correction
                                    </button>)}
                                </div>
                            </div>
                            {/* Question 9 */}
                            <div className="question-card">
                                <div className="question-number2">9</div>

                                <p>
                                    Calculer l'aire de la partie « Coin détente » (partie
                                    violette). Arrondir à 0,1 m².
                                </p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        id={`textarea-question9`}
                                        className={`answer-input ${showCorrections.question9 ? 'correction-active' : 'hidden-answer'}`}
                                        value={answers.question9}
                                        onChange={(e) => handleInputChange('question9', e.target.value)}
                                        minRows={3}
                                        maxRows={13}
                                    />
                                    {!showCorrections.question9 && (<button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('question9')}
                                    >
                                        <FaCheck/> Voir correction
                                    </button>)}
                                </div>
                            </div>
                            {/* Question 10 */}
                            <div className="question-card wide">
                                <div className="question-number2">10</div>
                                <p>
                                    En déduire l'aire totale de la surface à carreler (en m²).
                                </p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        id={`textarea-question10`}
                                        className={`answer-input ${showCorrections.question10 ? 'correction-active' : 'hidden-answer'}`}
                                        value={answers.question10}
                                        onChange={(e) => handleInputChange('question10', e.target.value)}
                                        minRows={2}
                                        maxRows={13}
                                    />
                                    {!showCorrections.question10 && (<button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('question10')}
                                    >
                                        <FaCheck/> Voir correction
                                    </button>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Page 4 */}
            <div className="print-page" id="page4-start">
                <section className="tp-section compact">
                    <div className="questions-container">
                        {/* Question 11 */}
                        <div className="questions-column">
                            <div className="question-card wide">
                                <div
                                    className="question-number2"
                                >11
                                </div>
                                <p>
                                    Le revêtement du sol est fait en carreaux de 30 × 60 cm
                                    conditionnés par paquets de 10.
                                </p>

                                <div className="sub-question">
                                    <p>
                                        a) Calculer l'aire que permet de recouvrir un paquet de
                                        carrelage.
                                    </p>
                                    <div className="answer-area">
                                              <textarea
                                                  className={`answer-input ${showCorrections.question11a ? 'correction-active' : 'hidden-answer'}`}
                                                  rows="2"
                                                  value={answers.question11a}
                                                  onChange={(e) => handleInputChange('question11a', e.target.value)}
                                              />
                                        {!showCorrections.question11a && (<button
                                            className="correction-btn"
                                            onClick={() => toggleCorrection('question11a')}
                                        >
                                            <FaCheck/> Voir correction
                                        </button>)}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="questions-column">
                            <div className="question-card">

                                <p>
                                    b) Prévoir 10% de carreaux supplémentaires. Calculer le
                                    nombre de paquets nécessaires.
                                </p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        id={`textarea-question11b`}
                                        className={`answer-input ${showCorrections.question11b ? 'correction-active' : 'hidden-answer'}`}
                                        value={answers.question11b}
                                        onChange={(e) => handleInputChange('question11b', e.target.value)}
                                        minRows={4}
                                        maxRows={13}
                                    />
                                    {!showCorrections.question11b && (<button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('question11b')}
                                    >
                                        <FaCheck/> Voir correction
                                    </button>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aire-card">
                        <div className="aire-card-header">
                            <h3>
                                ✍️ À retenir :{' '}
                                <span className="highlight">
                                        Aire des figures planes usuelles
                                      </span>
                            </h3>
                        </div>

                        <div className="figures-grid">
                            {/* Première ligne - 2 cartes */}
                            <div className="figure-row">
                                {/* Carte Carré */}
                                <div className="figure-card">
                                    <div
                                        className="figure-image-container"
                                        onClick={() => openModal(carre, 'Carré')}
                                    >
                                        <img src={carre} alt="Carré" className="figure-image"/>
                                    </div>
                                    <div className="figure-title">Carré</div>
                                    <button
                                        className="formule-toggle"
                                        onClick={() => toggleFormule('carre')}
                                    >
                                        {showFormule.carre ? 'Masquer' : 'Voir'} la formule
                                    </button>
                                    {showFormule.carre && (<div className="formule-box">
                                        Aire = côté × côté
                                        <br/>
                                        <span className="formule">
                                                  A = a × a = a<sup>2</sup>
                                                </span>
                                    </div>)}
                                </div>

                                {/* Carte Rectangle */}
                                <div className="figure-card">
                                    <div
                                        className="figure-image-container"
                                        onClick={() => openModal(rectangle, 'Rectangle')}
                                    >
                                        <img
                                            src={rectangle}
                                            alt="Rectangle"
                                            className="figure-image"
                                        />
                                    </div>
                                    <div className="figure-title">Rectangle</div>
                                    <button
                                        className="formule-toggle"
                                        onClick={() => toggleFormule('rectangle')}
                                    >
                                        {showFormule.rectangle ? 'Masquer' : 'Voir'} la formule
                                    </button>
                                    {showFormule.rectangle && (<div className="formule-box">
                                        Aire = longueur × largeur
                                        <br/>
                                        <span className="formule">A = L × l</span>
                                    </div>)}
                                </div>
                            </div>

                            {/* Deuxième ligne - 2 cartes */}
                            <div className="figure-row">
                                {/* Carte Triangle */}
                                <div className="figure-card">
                                    <div
                                        className="figure-image-container"
                                        onClick={() => openModal(triangle, 'Triangle')}
                                    >
                                        <img
                                            src={triangle}
                                            alt="Triangle"
                                            className="figure-image"
                                        />
                                    </div>
                                    <div className="figure-title">Triangle</div>
                                    <button
                                        className="formule-toggle"
                                        onClick={() => toggleFormule('triangle')}
                                    >
                                        {showFormule.triangle ? 'Masquer' : 'Voir'} la formule
                                    </button>
                                    {showFormule.triangle && (<div className="formule-box">
                                        Aire = (base × hauteur) ÷ 2<br/>
                                        <div className="formule">
                                            <div className="fraction1">
                                                <span>A</span>
                                            </div>
                                            =
                                            <div className="fraction fraction1">
                                                <span>(b × h)</span>
                                                <span>2</span>
                                            </div>
                                        </div>
                                    </div>)}
                                </div>

                                {/* Carte Cercle */}
                                <div className="figure-card">
                                    <div
                                        className="figure-image-container"
                                        onClick={() => openModal(cercle, 'Cercle')}
                                    >
                                        <img src={cercle} alt="Cercle" className="figure-image"/>
                                    </div>
                                    <div className="figure-title">Cercle</div>
                                    <button
                                        className="formule-toggle"
                                        onClick={() => toggleFormule('cercle')}
                                    >
                                        {showFormule.cercle ? 'Masquer' : 'Voir'} la formule
                                    </button>
                                    {showFormule.cercle && (<div className="formule-box">
                                        Aire = π × rayon²
                                        <br/>
                                        <span className="formule">A = π × R²</span>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Page 5 - exercices */}
            <div className="print-page" id="conclusion">
                <div className="exercices-grid">
                    <section className="exercices-section" style={{marginTop: '0px'}}>
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
                                    <p>Un carré a pour côté 7,5 cm.</p>
                                    <p>Calculer son périmètre et son aire.</p>
                                    <div className="answer-space">
                                        {showCorrections.ex1 ? (<>
                                            <div className="formula-box">
                                                <p className="formula-text">
                                                    Périmètre : P = 4 × côté
                                                </p>
                                                <p className="result-text">P = 4 × 7,5 = 30 cm</p>
                                            </div>
                                            <div className="formula-box">
                                                <p className="formula-text">Aire : A = côté²</p>
                                                <p className="result-text">A = 7,5² = 56,25 cm²</p>
                                            </div>
                                        </>) : (<div className="empty-space"></div>)}
                                    </div>

                                    {!showCorrections.ex1 && (<button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('ex1')}
                                    >
                                        <FaCheck/> Afficher correction
                                    </button>)}
                                </div>
                            </div>

                            {/* Carte Exercice 2 */}
                            <div className="exercice-card rectangle-card">
                                <div className="card-header">
                                    <FaSquare className="card-icon"/>
                                    <h3>Exercice 2</h3>
                                </div>
                                <div className="card-content">
                                    <p>
                                        La longueur d'un rectangle est 5,2 m et sa largeur 45 cm.
                                    </p>
                                    <p>Calculer son périmètre et son aire.</p>

                                    <div className="answer-space">
                                        {showCorrections.ex2 ? (<>
                                            <div className="formula-box">
                                                <p className="formula-text">
                                                    Périmètre : P = 2 × (L + l)
                                                </p>
                                                <p className="result-text">
                                                    P = 2 × (5,2 + 0,45) = 11,3 m
                                                </p>
                                            </div>
                                            <div className="formula-box">
                                                <p className="formula-text">Aire : A = L × l</p>
                                                <p className="result-text">
                                                    A = 5,2 × 0,45 = 2,34 m²
                                                </p>
                                            </div>
                                        </>) : (<div className="empty-space"></div>)}
                                    </div>

                                    {!showCorrections.ex2 && (<button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('ex2')}
                                    >
                                        <FaCheck/> Afficher correction
                                    </button>)}
                                </div>
                            </div>

                            {/* Carte Exercice 3 */}
                            <div className="exercice-card circle-card">
                                <div className="card-header">
                                    <FaCircle className="card-icon"/>
                                    <h3>Exercice 3</h3>
                                </div>
                                <div className="card-content">
                                    <p>3.1. Disque de rayon 22 mm.</p>
                                    <p>3.2. Disque de diamètre 1,8 m.</p>
                                    <p>Calculer périmètre et aire pour chaque.</p>

                                    <div className="answer-space">
                                        {showCorrections.ex3 ? (<>
                                            <div className="formula-box">
                                                <p className="formula-text">
                                                    Périmètre : P = 2 × π × R
                                                </p>
                                                <p className="result-text">
                                                    P = 2 × π × 22 ≃ 138 mm
                                                </p>
                                            </div>
                                            <div className="formula-box">
                                                <p className="formula-text">Aire : A = π × R²</p>
                                                <p className="result-text">
                                                    A = π × 22² ≃ 1 521 mm²
                                                </p>
                                            </div>
                                            <div className="formula-box">
                                                <p className="formula-text">
                                                    3.2. Rayon = Diamètre/2 = 0,9 m
                                                </p>
                                                <p className="result-text">
                                                    P = 2 × π × 0,9 ≃ 5,7 m
                                                </p>
                                                <p className="result-text">A = π × 0,9² ≃ 2,5 m²</p>
                                            </div>
                                        </>) : (<div className="empty-space"></div>)}
                                    </div>

                                    {!showCorrections.ex3 && (<button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('ex3')}
                                    >
                                        <FaCheck/> Afficher correction
                                    </button>)}
                                </div>
                            </div>

                            {/* Carte Exercice 4 */}
                            <div className="exercice-card triangle-card">
                                <div className="card-header">
                                    <FaThLarge className="card-icon"/>
                                    <h3>Exercice 4</h3>
                                </div>
                                <div className="card-content">
                                    <p>
                                        Triangle ABC rectangle en A avec AB = 14 m et AC = 8 m.
                                    </p>
                                    <p>Calculer l'aire du triangle ABC.</p>

                                    <div className="answer-space">
                                        {showCorrections.ex4 ? (<div className="formula-box">
                                            <p className="formula-text">
                                                Aire triangle rectangle : A = (base × hauteur)/2
                                            </p>
                                            <div
                                                className="math-formula"
                                                style={{color: '#208a02'}}
                                            >
                                                <div className="fraction1">
                                                    <span>A</span>
                                                </div>
                                                =
                                                <div className="fraction">
                                                    <span>(14 × 8)</span>
                                                    <span>2</span>
                                                </div>
                                            </div>
                                            <p className="result-text">A = 56 m²</p>
                                        </div>) : (<div className="empty-space"></div>)}
                                    </div>

                                    {!showCorrections.ex4 && (<button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('ex4')}
                                    >
                                        <FaCheck/> Afficher correction
                                    </button>)}
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                <AutoEvaluationGrid/>
            </div>

            <footer className="tp-footer">
                <p>Activité - Mathématiques 2nde</p>
                <p>Lycée Pierre-Joseph Laurent</p>
            </footer>
        </div>

        {modalState.show && (<ModalImage
            imageUrl={modalState.imageUrl}
            altText={modalState.altText}
            onClose={closeModal}
        />)}
    </>);
};

export default GeometrieAct1;

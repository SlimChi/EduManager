import React, {useRef, useState} from 'react';
import {
    FaPrint, FaCheck, FaRuler, FaHome, FaPalette, FaRulerCombined, FaCircle, FaShapes, FaSquare, FaThLarge, FaDice,
} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io';
import '../../../../styles/act1geometrie.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import ModalImage from '../../../../utils/ModalImage';
import spherebois from '../../../../assets/shpereenboisfille.jpg';
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

const GeomAct2 = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [answers, setAnswers] = useState({
        questionII1: '',
        questionII2: '',
        questionII3a: '',
        questionII3b: '',
        questionII4a: '',
        questionII4b: '',
        questionII5a: '',
        questionII5b: '',
        questionII6: '',
        questionII7: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        questionII1: false,
        questionII2: false,
        questionII3a: false,
        questionII3b: false,
        questionII4a: false,
        questionII4b: false,
        questionII5a: false,
        questionII5b: false,
        questionII6: false,
        questionII7: false,
    });

    // Réponses attendues
    const correctAnswers = {
        questionII1: 'Déterminer le nombre de disques nécessaires pour construire la sphère.',
        questionII2: 'Le solide représenté est une sphère.',
        questionII3a: '40 cm',
        questionII3b: '150 cm',
        questionII4a: '20 cm',
        questionII4b: '75 cm',
        questionII5a: 'π × 20² ≈ 1256.6 cm²',
        questionII5b: '4 × π × 75² ≈ 70685.8 cm²',
        questionII6: 'Nombre de disques ≈\n 1256.6 ÷ 70685.8 \n' + 'Nombre de disques ≈ 56 disques',
        questionII7: "L'artiste aura besoin d'environ 56 disques de 40 cm de diamètre pour construire sa sphère de 150 cm de diamètre.",
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
            {/* Page 1 */}
            <PrintManager
                contentRef={contentRef}
                activityName="Statistiques_Age_Eleves"
                pageCount={5}
                quality="hd"
            />
            {/* Page 1 - Chapitre et formules */}
            <div className="print-page" id="page1-start">
                {/* Page 1 */}
                <div className="math-chapter-box blue">
                    <span style={{marginRight: '10px', fontSize: '30px'}}>📐</span>

                    <h2 className="math-chapter-title-test">
                        Volumes et formes dans l'espace
                    </h2>
                </div>
                <div className="activity-header" style={{marginTop: '-10px'}}>
                    <span className="activity-badge">ACTIVITÉ 2</span>
                    <div className="activity-title">
                <span className="course-title">
                  {' '}
                    <span className="emoji">
                    <FaCircle/>
                  </span>{' '}
                    Une sphère en bois
                </span>
                    </div>
                </div>

                <div className="d-flex align-items-start" style={{gap: '20px'}}>
                    <div style={{flex: 1, fontSize: '14px'}}>
                        <div className="renovation-contexte" style={{marginTop: '-10px'}}>
                            <p
                                style={{
                                    fontFamily: 'Georgia, serif', fontSize: '1rem', lineHeight: '1.6', color: '#2c3e50',
                                }}
                            >
                                <strong>Angela</strong> 🧰, une élève en bac pro menuiserie,
                                veut fabriquer une décoration en bois : une{' '}
                                <strong>boule</strong> (sphère) ⚪ de{' '}
                                <strong>150 cm</strong> de diamètre (<strong>d₁</strong>).
                                <br/>
                                Elle aime cette forme parce qu’elle est{' '}
                                <strong>lisse</strong> ✨ et{' '}
                                <strong>pareille de tous les côtés</strong> .
                                <br/>
                                <br/>
                                🛠️ Pour la construire, elle va utiliser des{' '}
                                <strong>disques en bois</strong> de <strong>40 cm </strong>
                                de diamètre (<strong>d₂</strong>), qu’elle va assembler 🔧.
                                <br/>
                                <strong>🧾 Données :</strong> d₁ = 150 cm, d₂ = 40 cm.
                            </p>

                            <p className="objectif-phrase">
                                <strong style={{color: '#e67e22', fontWeight: 'bold'}}>
                                    🎯 Objectif :
                                </strong>{' '}
                                estimer le nombre de disques nécessaires à la fabrication
                                d’une sphère en bois, à partir des dimensions données.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex-shrink-0"
                        style={{
                            maxWidth: '350px', cursor: 'pointer', margin: '0 auto', marginTop: '50px',
                        }}
                    >
                        <img
                            src={spherebois}
                            alt="II. Une sphère en bois"
                            className="img-fluid rounded shadow-sm compact-img"
                            onClick={() => openModal(spherebois, 'II. Une sphère en bois')}
                        />
                    </div>
                </div>
                <section className="formulas-cards" style={{marginTop: '-10px', marginBottom: '20px'}}>
                    <div className="formula-card triangle-card">
                        <h4>
                            <FaShapes/> Aire d’un disque de rayon R.
                        </h4>
                        <div className="formula-content">
                            <div className="math-formula">
                                A = π × R<sup>2</sup>
                            </div>
                        </div>
                    </div>

                    <div className="formula-card circle-card">
                        <h4>
                            <FaCircle/> Aire d’une sphère de rayon R.
                        </h4>
                        <div className="formula-content">
                            <div className="math-formula">
                                A = 4 × π × R<sup>2</sup>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="card">
                    <div className="questions-row" style={{
                        display: 'flex', gap: '1rem', alignItems: 'stretch', flexWrap: 'wrap'
                    }}>
                        {/* Première question */}
                        <div className="question-card" style={{
                            flex: '1', display: 'flex', flexDirection: 'column'
                        }}>
                            <div className="question-number2">1</div>
                            <p>Indiquer quel est le but de ce problème.</p>
                            <div className="answer-container" style={{flexGrow: 1}}>
                                    <textarea
                                        className={`answer-input ${showCorrections.questionII1 ? 'correction-active' : ''}`}
                                        rows="2"
                                        value={answers.questionII1}
                                        onChange={(e) => handleInputChange('questionII1', e.target.value)}
                                        style={{width: '100%'}}
                                    />
                                {!showCorrections.questionII1 && (<button
                                    className="correction-btn"
                                    onClick={() => toggleCorrection('questionII1')}
                                >
                                    <FaCheck/> Correction
                                </button>)}
                            </div>
                        </div>

                        {/* Deuxième question */}
                        <div className="question-card" style={{
                            flex: '1', display: 'flex', flexDirection: 'column', height: '100%'
                        }}>
                            <div className="question-number2">2</div>
                            <p>Nommer le solide montré par Angela.</p>
                            <div className="answer-container" style={{flexGrow: 1}}>
                                    <textarea
                                        className={`answer-input ${showCorrections.questionII2 ? 'correction-active' : ''}`}
                                        rows="2"
                                        value={answers.questionII2}
                                        onChange={(e) => handleInputChange('questionII2', e.target.value)}
                                        style={{width: '100%'}}
                                    />
                                {!showCorrections.questionII2 && (<button
                                    className="correction-btn"
                                    onClick={() => toggleCorrection('questionII2')}
                                >
                                    <FaCheck/> Correction
                                </button>)}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card">
                    <div className="questions-row" style={{
                        display: 'flex', gap: '1rem', alignItems: 'stretch', flexWrap: 'wrap'
                    }}>
                        <div className="question-card" style={{
                            flex: '1', display: 'flex', flexDirection: 'column'
                        }}>
                            <div className="question-number2">3a</div>
                            <p>Le diamètre moyen d'un disque :</p>
                            <div className="answer-container">
                                <input
                                    type="text"
                                    className={`answer-input ${showCorrections.questionII3a ? 'correction-active' : ''}`}
                                    value={answers.questionII3a}
                                    onChange={(e) => handleInputChange('questionII3a', e.target.value)}/>
                            </div>
                            {!showCorrections.questionII3a && (<button
                                className="correction-btn"
                                onClick={() => toggleCorrection('questionII3a')}>
                                <FaCheck/> Correction
                            </button>)}
                        </div>

                        <div className="question-card" style={{
                            flex: '1', display: 'flex', flexDirection: 'column', height: '100%'
                        }}>
                            <div className="question-number2">3b</div>
                            <p>Le diamètre de la sphère :</p>
                            <div className="answer-container">
                                <input
                                    type="text"
                                    className={`answer-input ${showCorrections.questionII3b ? 'correction-active' : ''}`}
                                    value={answers.questionII3b}
                                    onChange={(e) => handleInputChange('questionII3b', e.target.value)}
                                />
                            </div>
                            {!showCorrections.questionII3b && (<button
                                className="correction-btn"
                                onClick={() => toggleCorrection('questionII3b')}
                            >
                                <FaCheck/> Correction
                            </button>)}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="questions-row" style={{
                        display: 'flex', gap: '1rem', alignItems: 'stretch', flexWrap: 'wrap'
                    }}>
                        <div className="question-card" style={{
                            flex: '1', display: 'flex', flexDirection: 'column'
                        }}>
                            <div className="question-number2">4a</div>
                            <p>Le rayon moyen d'un disque :</p>
                            <div className="answer-container">
                                <input
                                    type="text"
                                    className={`answer-input ${showCorrections.questionII4a ? 'correction-active' : ''}`}
                                    value={answers.questionII4a}
                                    onChange={(e) => handleInputChange('questionII4a', e.target.value)}
                                />
                            </div>
                            {!showCorrections.questionII4a && (<button
                                className="correction-btn"
                                onClick={() => toggleCorrection('questionII4a')}
                            >
                                <FaCheck/> Correction
                            </button>)}
                        </div>

                        <div className="question-card" style={{
                            flex: '1', display: 'flex', flexDirection: 'column', height: '100%'
                        }}>
                            <div className="question-number2">4b</div>
                            <p>Le rayon de la sphère :</p>
                            <div className="answer-container">
                                <input
                                    type="text"
                                    className={`answer-input ${showCorrections.questionII4b ? 'correction-active' : ''}`}
                                    value={answers.questionII4b}
                                    onChange={(e) => handleInputChange('questionII4b', e.target.value)}
                                />
                            </div>
                            {!showCorrections.questionII4b && (<button
                                className="correction-btn"
                                onClick={() => toggleCorrection('questionII4b')}
                            >
                                <FaCheck/> Correction
                            </button>)}
                        </div>
                    </div>
                </div>
            </div>
            {/* Page 2 - Questions  */}
            <div className="print-page" id="page2-start">
                <section className="tp-section compact">
                    <div className="card-container">
                        <div className="card">
                            <div className="question-card wide">
                                <div className="question-number2">5a</div>
                                <p>Calculer les aires des surfaces (en arrondissant au dixème) :</p>
                                <p>d’un disque moyen en bois :</p>
                                <div className="answer-container">
                                    <input
                                        type="text"
                                        className={`answer-input ${showCorrections.questionII5b ? 'correction-active' : ''}`}
                                        value={answers.questionII5a}
                                        onChange={(e) => handleInputChange('questionII5a', e.target.value)}
                                    />
                                </div>
                                {!showCorrections.questionII5a && (<button
                                    className="correction-btn"
                                    onClick={() => toggleCorrection('questionII5a')}
                                >
                                    <FaCheck/> Correction
                                </button>)}
                            </div>
                            <div className="question-card wide">
                                <div className="question-number2">5b</div>
                                <p>de la sphère en bois :</p>
                                <div className="answer-container">
                                    <input
                                        type="text"
                                        className={`answer-input ${showCorrections.questionII5b ? 'correction-active' : ''}`}
                                        value={answers.questionII5b}
                                        onChange={(e) => handleInputChange('questionII5b', e.target.value)}
                                    />
                                </div>
                                {!showCorrections.questionII5b && (<button
                                    className="correction-btn"
                                    onClick={() => toggleCorrection('questionII5b')}
                                >
                                    <FaCheck/> Correction
                                </button>)}
                            </div>
                        </div>

                        <div class="card">
                            <div className="questions-column">
                                <div className="question-card wide">
                                    <div className="question-number2">6</div>
                                    <p>
                                        Calculer le nombre de disques en bois utilisés par
                                        l'artiste.
                                    </p>
                                    <div className="math-formula">
                                        <div className="fraction1">
                                            <span>Nombre de disques</span>
                                        </div>
                                        =
                                        <div className="fraction">
                                            <span>Aire du disque</span>
                                            <span>Aire de la sphère</span>
                                        </div>
                                    </div>
                                    <div className="answer-area">

                                        <AutoResizeTextarea
                                            id={`textarea-questionII6`}
                                            className={`answer-input ${showCorrections.questionII6 ? 'correction-active' : ''}`}
                                            value={answers.questionII6}
                                            onChange={(e) => handleInputChange('questionII6', e.target.value)}
                                            minRows={4}
                                            maxRows={13}
                                        />
                                        {!showCorrections.questionII6 && (<button
                                            className="correction-btn"
                                            onClick={() => toggleCorrection('questionII6')}
                                        >
                                            <FaCheck/> Voir correction
                                        </button>)}
                                    </div>
                                </div>


                            </div>

                        </div>
                        <div className="question-card wide">
                            <div className="question-number2">7</div>
                            <p>Rédiger une réponse au problème.</p>
                            <div className="answer-container">
                                <AutoResizeTextarea
                                    id={`textarea-questionII7`}
                                    className={`answer-input ${showCorrections.questionII7 ? 'correction-active' : ''}`}
                                    value={answers.questionII7}
                                    onChange={(e) => handleInputChange('questionII7', e.target.value)}
                                    minRows={4}
                                    maxRows={13}
                                />
                                {!showCorrections.questionII7 && (<button
                                    className="correction-btn"
                                    onClick={() => toggleCorrection('questionII7')}
                                >
                                    <FaCheck/> Correction
                                </button>)}
                            </div>
                        </div>
                    </div>

                    <div className="aire-card">
                        <div className="aire-card-header" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '1rem',
                            flexWrap: 'wrap'
                        }}>
                            <h3 style={{margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                ✍️ À retenir :{' '}
                                <span className="highlight2" style={{whiteSpace: 'nowrap'}}>Aire des figures planes usuelles</span>
                            </h3>
                            <button
                                className="correction-btnoptic"
                                style={{

                                    color: 'white',
                                    border: 'none',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.2s ease',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                                    flexShrink: 0
                                }}
                                onClick={() => {
                                    const newState = !Object.values(showFormule).some(v => v);
                                    setShowFormule({
                                        carre: newState, rectangle: newState, triangle: newState, cercle: newState
                                    });
                                }}
                            >
                                {Object.values(showFormule).some(v => v) ? 'Masquer toutes' : 'Afficher toutes'} les
                                formules
                            </button>
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
                                    <div
                                        className="figure-title2">.............................................................................
                                    </div>
                                    {showFormule.carre && (<div className="formule-box">
                                        Aire carré = côté × côté
                                        <br/>
                                        <span className="formule">A = a × a = a<sup>2</sup></span>
                                    </div>)}

                                    <div
                                        className="figure-image-container"
                                        onClick={() => openModal(rectangle, 'Rectangle')}
                                    >
                                        <img src={rectangle} alt="Rectangle" className="figure-image"/>
                                    </div>
                                    <div
                                        className="figure-title2">.............................................................................
                                    </div>
                                    {showFormule.rectangle && (<div className="formule-box">
                                        Aire rectangle = longueur × largeur
                                        <br/>
                                        <span className="formule">A = L × l</span>
                                    </div>)}
                                </div>

                                {/* Carte Triangle */}
                                <div className="figure-card">
                                    <div
                                        className="figure-image-container"
                                        onClick={() => openModal(triangle, 'Triangle')}
                                    >
                                        <img src={triangle} alt="Triangle" className="figure-image"/>
                                    </div>
                                    <div
                                        className="figure-title2">.............................................................................
                                    </div>
                                    {showFormule.triangle && (<div className="formule-box">
                                        Aire triangle = (base × hauteur) ÷ 2<br/>
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

                                    <div
                                        className="figure-image-container"
                                        onClick={() => openModal(cercle, 'Cercle')}
                                    >
                                        <img src={cercle} alt="Cercle" className="figure-image"/>
                                    </div>
                                    <div
                                        className="figure-title2">.............................................................................
                                    </div>
                                    {showFormule.cercle && (<div className="formule-box">
                                        Aire cercle = π × rayon²
                                        <br/>
                                        <span className="formule">A = π × R²</span>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="print-page" id="page3-start">
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

export default GeomAct2;

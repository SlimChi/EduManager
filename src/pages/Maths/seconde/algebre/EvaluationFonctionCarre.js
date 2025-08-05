import React, {useRef, useState} from 'react';
import {FaCheck, FaChartLine} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io';
import '../../../../styles/activites.css';
import {useLocation, useParams} from "react-router-dom";
import BackButton from "../../../../components/navigation/BackButton";
import AutoResizeTextarea from "../../../../config/AutoResizeTextarea";
import PrintManager from "../../../../utils/PrintManager";
import GraphParabola from "../../../../components/Outils/GrapheCompenent/GraphParabola";
import plongeur from "../../../../assets/plongeur.png";
import sautplonge from "../../../../assets/sautplonge.png";
import {GiCheckMark} from "react-icons/gi";

// Composant Question
const Question = ({
                      id,
                      text,
                      textarea,
                      inputType,
                      options,
                      answers,
                      showCorrections,
                      correctAnswers,
                      handleInputChange,
                      handleCheckboxChange,
                      toggleCorrection
                  }) => {
    return (
        <div className="compact-question">
            <p>{text}</p>

            {inputType === "checkbox" ? (
                <div className="checkbox-options">
                    {options?.map((option) => (
                        <label
                            key={option.value}
                            className={`checkbox-label ${showCorrections[id] && correctAnswers[id]?.includes(option.value) ? 'correct-answer' : ''}`}
                        >
                            <input
                                type="checkbox"
                                checked={answers[id]?.includes(option.value) || false}
                                onChange={(e) => handleCheckboxChange(id, option.value, e.target.checked)}
                                disabled={showCorrections[id]}
                            />
                            {option.label}
                        </label>
                    ))}
                </div>
            ) : textarea ? (
                <AutoResizeTextarea
                    className={showCorrections[id] ? 'correction-active' : ''}
                    value={showCorrections[id] ? correctAnswers[id] : answers[id]}
                    onChange={(e) => handleInputChange(id, e.target.value)}
                    minRows={2}
                    maxRows={6}
                    readOnly={showCorrections[id]}
                />
            ) : (
                <input
                    type="text"
                    className={showCorrections[id] ? 'correction-active' : ''}
                    value={showCorrections[id] ? correctAnswers[id] : answers[id]}
                    onChange={(e) => handleInputChange(id, e.target.value)}
                    readOnly={showCorrections[id]}
                />
            )}

            {!showCorrections[id] && (
                <button className="correction-btn" onClick={() => toggleCorrection(id)}>
                    <FaCheck/> Correction
                </button>
            )}
        </div>
    );
};

// Composant QuestionBlock
const QuestionBlock = ({title, questions, children, ...props}) => (
    <div className="question-block">
        {title && <h3>{title}</h3>}
        {questions.map((q) => {
            // Si c'est un sous-titre, on retourne juste le h4
            if (q.subtitle) {
                return <h3 key={`subtitle-${q.subtitle}`} className="question-subtitle">{q.subtitle}</h3>;
            }
            // Sinon, on retourne la question normale
            return <Question key={q.id} {...q} {...props} />;
        })}
        {children}
    </div>
);

// Composant InlineInput
const InlineInput = ({value, correct, showCorrection, onChange}) => (
    <span className="inline-input">
        {showCorrection ? (
            <span className="correction-text">{correct}</span>
        ) : (
            <input
                type="text"
                value={value}
                onChange={onChange}
                style={{width: `${Math.max(value.length * 8, 40)}px`}}
            />
        )}
    </span>
);

// Composant principal
const EvaluationFonctionCarre = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        q1a: '', q1b: '', q2a: '', q2c: '',
        q3a: [], // Tableau pour stocker les cases cochées
        q3b: '', q3c: ['', '', ''], q3d: '', q4: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        q1a: false, q1b: false, q2a: false, q2c: false, q3a: false,
        q3b: false, q3c: false, q3d: false, q4: false
    });

    const correctAnswers = {
        q1a: "La fonction carré est croissante sur [0 ; 10].",
        q1b: "f(x) = 0,1x² a les mêmes variations que x² car 0,1 > 0 → croissante sur [0 ; 10]",
        q2a: "d = 0,1 × 4² = 1,6 m",
        q2c: "Pour d = 8,1 m → v ≈ 9 m/s",
        q3a: ["inférieure ou égale à 20 m"],
        q3b: "Distance bateau-impact = 24,9 - 0,1x² ≤ 20",
        q3c: ["24,9", "-4,9", "x² ≥ 49"],
        q3d: "x ≥ 7 m/s (car x ∈ [0;10])",
        q4: "Vitesse nécessaire : entre 7 et 10 m/s"
    };

    const [graphModal, setGraphModal] = useState(false);
    const openGraphModal = () => setGraphModal(true);
    const closeGraphModal = () => setGraphModal(false);

    const handleInputChange = (field, value, index = -1) => {
        if (index >= 0) {
            const newArray = [...answers[field]];
            newArray[index] = value;
            setAnswers(prev => ({...prev, [field]: newArray}));
        } else {
            setAnswers(prev => ({...prev, [field]: value}));
        }
    };

    const toggleCorrection = (field) => {
        setShowCorrections(prev => ({...prev, [field]: !prev[field]}));
        if (!answers[field] && !showCorrections[field]) {
            if (Array.isArray(correctAnswers[field])) {
                setAnswers(prev => ({...prev, [field]: [...correctAnswers[field]]}));
            } else {
                setAnswers(prev => ({...prev, [field]: correctAnswers[field]}));
            }
        }
    };

    const handleCheckboxChange = (field, optionValue, isChecked) => {
        setAnswers(prev => {
            const currentValues = prev[field] || [];
            const newValues = isChecked
                ? [...currentValues, optionValue]
                : currentValues.filter(v => v !== optionValue);
            return {...prev, [field]: newValues};
        });
    };

    const contentRef = useRef();
    if (className === 'Seconde-pythagore') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <div className="tp-container mt-0" ref={contentRef}>
            <BackButton/>
            <PrintManager contentRef={contentRef} activityName="Evaluation_Fonction_Carre" pageCount={1} quality="hd"/>
            <div className="print-page">
                <div className="evaluation-content mt-0" style={{fontFamily: 'MathJax', fontStyle: 'italic'}}>
                    {/* En-tête compact */}
                    <div className="evaluation-header mt-0"
                         style={{padding: '10px', backgroundColor: '#f0f8ff', borderRadius: '10px'}}>
                        <h1 style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            color: '#3f51b5',
                            textAlign: 'center',
                            width: '100%'
                        }}>
                            <IoMdSchool/> Évaluation – <span style={{fontWeight: 600}}>Fonction Carré 📐</span>
                        </h1>


                        <div className="scenario-box" style={{display: 'flex', marginTop: '20px'}}>
                            <div style={{flex: 1}}>
                                <h2 style={{color: '#009688'}}>🎯 Situation : <strong>Saut de James Bond</strong></h2>
                                <p style={{lineHeight: '1.6'}}>
                                    James saute d'une falaise. Le bateau est à <strong>24,9 m</strong> du pied.
                                    <br/>Distance de sécurité : <span
                                    style={{color: '#f44336', fontWeight: 600}}>≤ 20 m</span> de nage.
                                    <br/>
                                    <strong>Fonction :</strong> f(x) = 0,1x² où x = vitesse (m/s), f(x) = distance
                                    d'impact (m).
                                </p>

                                <p style={{margin: 0, fontSize: '16px', marginBottom: '10px'}}>
                                    <FaChartLine style={{color: '#ff9800', marginRight: '8px'}}/>
                                    <strong style={{color: '#e65100'}}>Problématique :</strong> Quelle(s) vitesse(s) de
                                    course, en m/s, de James permet(tent) de respecter la distance de sécurité de 20 m ?
                                    ⚠️
                                </p>
                                <img src={sautplonge} alt="Saut de James Bond" style={{
                                    width: '320px',
                                    marginLeft: '20px',
                                    borderRadius: '8px',
                                    boxShadow: '0 0 8px rgba(0,0,0,0.2)'
                                }}/>
                            </div>
                            <img src={plongeur} alt="Plongeur" style={{
                                width: '300px',
                                height: '300px',
                                marginLeft: '20px',
                                borderRadius: '8px',
                                boxShadow: '0 0 8px rgba(0,0,0,0.2)'
                            }}/>
                        </div>
                    </div>

                    {/* Questions groupées */}
                    <div className="questions-grid mt-0">
                        {/* Colonne 1 */}
                        <div className="question-column">
                            <QuestionBlock
                                title="1 - Variations"
                                questions={[
                                    {
                                        id: "q1a",
                                        text: "a. Décrire les variations de x² sur l'intervalle [0 ; 10].",
                                        textarea: true
                                    },
                                    {
                                        id: "q1b",
                                        text: "b. Décrire les variations de f(x) = 0,1x².",
                                        textarea: true
                                    },
                                    {
                                        subtitle: "2 - Calculs" // Titre intermédiaire
                                    },
                                    {
                                        id: "q2a",
                                        text: "a. Si James saute avec une vitesse v de 4 m/s, calculez en m la distance d.",
                                        textarea: true
                                    },
                                    {
                                        id: "q2c",
                                        text: "b. Si la distance d est égale à 8,1 m, déterminez graphiquement la vitesse v",
                                        textarea: true
                                    }

                                ]}
                                correctAnswers={correctAnswers}
                                answers={answers}
                                showCorrections={showCorrections}
                                handleInputChange={handleInputChange}
                                toggleCorrection={toggleCorrection}

                            >

                                <div onClick={openGraphModal} style={{cursor: 'pointer'}}>
                                    <p>c. Représentation graphique :</p>
                                    <GraphParabola showCorrection={showCorrections.q2c}/>
                                </div>
                            </QuestionBlock>
                        </div>

                        {/* Colonne 2 */}
                        <div className="question-column">
                            <QuestionBlock
                                title="3 - Inéquation"
                                questions={[
                                    {
                                        id: "q3a",
                                        text: "a. Quelle condition doit respecter la distance pour garantir la sécurité ?",
                                        inputType: "checkbox",
                                        options: [
                                            {
                                                value: " inférieure ou égale à 20 m",
                                                label: " inférieure ou égale à 20 m "
                                            },
                                            {
                                                value: " supérieure ou égale à 20 m",
                                                label: " supérieure ou égale à 20 m"
                                            }
                                        ]
                                    },
                                    {
                                        id: "q3b",
                                        text: "b. Montrez que la phrase précédente peut se traduire par l’inéquation : 24,9 − 0,1x² ≤ 20.",
                                        textarea: true
                                    },
                                    {
                                        id: "q3d",
                                        text: "c. Utilisez la représentation graphique de la question 2.b pour résoudre graphiquement l’inéquation 0,1x² ≥ 4,9.",
                                        textarea: true
                                    }
                                ]}
                                correctAnswers={correctAnswers}
                                answers={answers}
                                showCorrections={showCorrections}
                                handleInputChange={handleInputChange}
                                toggleCorrection={toggleCorrection}
                                handleCheckboxChange={handleCheckboxChange}
                            >
                                <div className="equation-steps">
                                    <p>d. Résolution :</p>
                                    <div className="equation-line">
                                        24,9 - 0,1x² ≤ 20 →
                                    </div>
                                    <div className="equation-line">
                                        -0,1x² ≤ 20 -
                                        <InlineInput
                                            value={answers.q3c[0]}
                                            correct={correctAnswers.q3c[0]}
                                            showCorrection={showCorrections.q3c}
                                            onChange={(e) => handleInputChange('q3c', e.target.value, 0)}
                                        />
                                    </div>
                                    <div className="equation-line">
                                        → -0,1x² ≤
                                        <InlineInput
                                            value={answers.q3c[1]}
                                            correct={correctAnswers.q3c[1]}
                                            showCorrection={showCorrections.q3c}
                                            onChange={(e) => handleInputChange('q3c', e.target.value, 1)}
                                        />
                                    </div>
                                    <div className="equation-line">
                                        → 0,1x² ≥ 4,9 → x² ≥
                                        <InlineInput
                                            value={answers.q3c[2]}
                                            correct={correctAnswers.q3c[2]}
                                            showCorrection={showCorrections.q3c}
                                            onChange={(e) => handleInputChange('q3c', e.target.value, 2)}
                                        />
                                    </div>
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('q3c')}
                                    >
                                        <FaCheck/> Correction
                                    </button>
                                </div>


                                <QuestionBlock
                                    title="Question 4 - Synthèse"
                                    questions={[
                                        {
                                            id: "q4",
                                            text: "Réponse à la problématique:",
                                            textarea: true
                                        }
                                    ]}
                                    correctAnswers={correctAnswers}
                                    answers={answers}
                                    showCorrections={showCorrections}
                                    handleInputChange={handleInputChange}
                                    toggleCorrection={toggleCorrection}
                                />
                            </QuestionBlock>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal du graphique */}
            {graphModal && (
                <div className="modal-overlay" onClick={closeGraphModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeGraphModal}>×</button>
                        <GraphParabola height={500} showCorrection={showCorrections.q2c}/>
                        <p className="graph-caption">
                            {showCorrections.q2c
                                ? "Points clés : rouge=v=4m/s, vert=d=8,1m"
                                : "Cliquez 'Correction' pour afficher les solutions"}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EvaluationFonctionCarre;
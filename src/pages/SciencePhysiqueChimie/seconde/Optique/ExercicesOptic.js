import React, {useRef, useState} from 'react';
import {FaCheck} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io';
import '../../../../styles/activites.css';
import {useLocation, useParams} from "react-router-dom";
import BackButton from "../../../../components/navigation/BackButton";
import AutoResizeTextarea from "../../../../config/AutoResizeTextarea";
import PrintManager from "../../../../utils/PrintManager";
import visibleSpectrum from "../../../../assets/visibleSpectrum.png";
import longueurondeexo4 from "../../../../assets/longueurondeexo4.png";
// Réponses correctes définies en premier
const CORRECT_ANSWERS = {
    qcm1: ["c"],
    qcm2: ["a"],
    qcm3: ["b"],
    qcm4: ["a"],
    qcm5: ["a"],
    qcm6: ["b"],
    qcm7: ["a"],
    qcm8: ["c"],
    qcm9: ["a"],
    qcm10: ["b"],
    ex1_1: "Il ne faut pas regarder en face le faisceau laser et porter des lunettes de protection.",
    ex1_2: "Il s'agit d'un laser rouge.",
    ex2: "Il faut additionner les faisceaux rouge et vert pour obtenir une couleur jaune.",
    ex3_1: "Le projecteur émet une couleur jaune.",
    ex3_2: ["UV", "Visible", "IR"],
    ex4_1: "555 nm",
    ex4_2: " vert-jaune",
    ex4_3: "violet et rouge",
    ex5_a: "cyan",
    ex5_b: "blanc",
    ex5_c: "synthèse additive",
    ex6: ["Bleu"],
    ex7_1: "cyan et magenta",
    ex7_2: "Mesurer le diamètre du faisceau à différentes distances pour vérifier s’il augmente.\n",
    ex7_3: "Le faisceau suit une trajectoire rectiligne avec une légère divergence.\n",
    ex7_4: "synthèse soustractive",
    ex8: "Le faisceau laser est très directif avec une faible divergence."
};

const Question = ({
                      id,
                      text,
                      textarea,
                      inputType,
                      options,
                      answers,
                      showCorrections,
                      handleInputChange,
                      handleCheckboxChange,
                      toggleCorrection
                  }) => {
    // Vérifie si la réponse est correcte (pour le QCM)
    const isAnswerCorrect = (questionId, optionValue) => {
        return showCorrections[questionId] &&
            CORRECT_ANSWERS[questionId]?.includes(optionValue);
    };

    // Vérifie si la réponse sélectionnée est incorrecte
    const isAnswerIncorrect = (questionId, optionValue) => {
        return showCorrections[questionId] &&
            answers[questionId]?.includes(optionValue) &&
            !CORRECT_ANSWERS[questionId]?.includes(optionValue);
    };

    return (
        <div className={`compact-question ${inputType === "checkbox" ? 'compact-checkbox' : ''}`}>
            <p>{text}</p>

            {inputType === "checkbox" ? (
                <div className="checkbox-options">
                    {options?.map((option) => (
                        <label
                            key={option.value}
                            className={`checkbox-label 
                                ${isAnswerCorrect(id, option.value) ? 'correct-answer' : ''}
                                ${isAnswerIncorrect(id, option.value) ? 'incorrect-answer' : ''}
                            `}
                        >
                            <div className="custom-checkbox">
                                <input
                                    type="checkbox"
                                    checked={answers[id]?.includes(option.value) || false}
                                    onChange={(e) => handleCheckboxChange(id, option.value, e.target.checked)}
                                    disabled={showCorrections[id]}
                                />
                                <span className="checkmark"></span>
                            </div>
                            {option.label}
                        </label>
                    ))}
                </div>
            ) : textarea ? (
                <AutoResizeTextarea
                    className={showCorrections[id] ? 'correction-active' : ''}
                    value={showCorrections[id] ? CORRECT_ANSWERS[id] : answers[id]}
                    onChange={(e) => handleInputChange(id, e.target.value)}
                    minRows={2}
                    maxRows={6}
                    readOnly={showCorrections[id]}
                />
            ) : (
                <input
                    type="text"
                    className={showCorrections[id] ? 'correction-active' : ''}
                    value={showCorrections[id] ? CORRECT_ANSWERS[id] : answers[id]}
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

const QuestionBlock = ({title, questions, children, ...props}) => (
    <div className="question-block">
        {title && <h3>{title}</h3>}
        {questions.map((q) => {
            if (q.subtitle) {
                return <h4 key={`subtitle-${q.subtitle}`} className="question-subtitle">{q.subtitle}</h4>;
            }
            return <Question key={q.id} {...q} {...props} />;
        })}
        {children}
    </div>
);

const ExercicesOptic = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    // Initialisation des états
    const initialAnswers = {};
    const initialCorrections = {};

    // QCM (10 questions)
    for (let i = 1; i <= 10; i++) {
        initialAnswers[`qcm${i}`] = [];
        initialCorrections[`qcm${i}`] = false;
    }

    // Exercices
    const exerciseFields = [
        'ex1_1', 'ex1_2', 'ex2', 'ex3_1', 'ex3_2', 'ex4_1', 'ex4_2', 'ex4_3',
        'ex5_a', 'ex5_b', 'ex5_c', 'ex6', 'ex7_1', 'ex7_2', 'ex7_3', 'ex7_4', 'ex8'
    ];

    exerciseFields.forEach(q => {
        initialAnswers[q] = Array.isArray(CORRECT_ANSWERS[q]) ? [] : '';
        initialCorrections[q] = false;
    });

    const [answers, setAnswers] = useState(initialAnswers);
    const [showCorrections, setShowCorrections] = useState(initialCorrections);

    const handleInputChange = (field, value) => {
        setAnswers(prev => ({...prev, [field]: value}));
    };

    const toggleCorrection = (field) => {
        setShowCorrections(prev => ({...prev, [field]: !prev[field]}));
        if (!answers[field] && !showCorrections[field]) {
            setAnswers(prev => ({
                ...prev,
                [field]: Array.isArray(CORRECT_ANSWERS[field])
                    ? [...CORRECT_ANSWERS[field]]
                    : CORRECT_ANSWERS[field]
            }));
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
        <div className="tp-container mt-0" style={{fontFamily: 'MathJax', fontStyle: 'italic'}} ref={contentRef}>
            <BackButton/>
            <PrintManager contentRef={contentRef} activityName="Exercices_Optic" pageCount={1} quality="hd"/>
            <div className="print-page">
                <div className="evaluation-content mt-0">
                    {/* En-tête */}
                    <div className="evaluation-header">
                        <h1><IoMdSchool/> Exercices – <span>Optique 🌈</span></h1>
                    </div>

                    {/* QCM sur 2 colonnes */}
                    <div className="qcm-section ">
                        <h2>QCM</h2>
                        <p className="instructions">Pour chaque question, cocher la (ou les) bonne(s) réponse(s).</p>

                        <div className="qcm-grid">
                            {/* Colonne gauche (Q1-Q5) */}
                            <div className="qcm-column">
                                {[1, 2, 3, 4, 5].map(num => (
                                    <Question
                                        key={`qcm${num}`}
                                        id={`qcm${num}`}
                                        text={`${num}. ${[
                                            "Un filtre ne laisse passer que :",
                                            "Une DEL émet une lumière dont la longueur d'onde est de 750 nm. La lumière émise a pour couleur :",
                                            "Pour décomposer la lumière blanche, on utilise :",
                                            "Un nanomètre (nm) est égal à :",
                                            "La lumière blanche se décompose en :"
                                        ][num - 1]}`}
                                        inputType="checkbox"
                                        options={getQcmOptions(num)}
                                        answers={answers}
                                        showCorrections={showCorrections}
                                        handleCheckboxChange={handleCheckboxChange}
                                        toggleCorrection={toggleCorrection}
                                    />
                                ))}
                            </div>

                            {/* Colonne droite (Q6-Q10) */}
                            <div className="qcm-column">
                                {[6, 7, 8, 9, 10].map(num => (
                                    <Question
                                        key={`qcm${num}`}
                                        id={`qcm${num}`}
                                        text={`${num}. ${[
                                            "Dans la synthèse additive, le jaune s'obtient en additionnant :",
                                            "Notre œil perçoit toutes les couleurs grâce :",
                                            "La superposition des trois filtres cyan, magenta et jaune donne du :",
                                            "En physique, les trois couleurs primaires sont :",
                                            "Si on additionne les trois couleurs primaires, on obtient du :"
                                        ][num - 6]}`}
                                        inputType="checkbox"
                                        options={getQcmOptions(num)}
                                        answers={answers}
                                        showCorrections={showCorrections}
                                        handleCheckboxChange={handleCheckboxChange}
                                        toggleCorrection={toggleCorrection}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="print-page mt-0">
                {/* Exercices */}
                <div className="exercices-section mt-0">
                    <h2>Exercices d'application</h2>

                    <div className="exercices-grid mt-0">
                        {/* Colonne 1 */}
                        <div className="exercice-column">
                            <QuestionBlock
                                title="Exercice 1"
                                questions={[
                                    {
                                        id: "ex1_1",
                                        text: "1. Pour manipuler un laser, quelle précaution faut-il prendre ?",
                                        textarea: true
                                    },
                                    {
                                        id: "ex1_2",
                                        text: "2. Indiquer la couleur du laser (λ = 650 nm).",
                                        textarea: true
                                    }
                                ]}
                                answers={answers}
                                showCorrections={showCorrections}
                                handleInputChange={handleInputChange}
                                toggleCorrection={toggleCorrection}
                            />

                            <QuestionBlock
                                title="Exercice 2"
                                questions={[
                                    {
                                        id: "ex2",
                                        text: "On dispose de trois faisceaux de couleurs primaires : rouge, vert et bleu. Indiquer quels sont les faisceaux qu'il faut additionner pour obtenir une couleur jaune sur un écran initialement blanc.",
                                        textarea: true
                                    }
                                ]}
                                answers={answers}
                                showCorrections={showCorrections}
                                handleInputChange={handleInputChange}
                                toggleCorrection={toggleCorrection}
                            />

                            <QuestionBlock
                                title="Exercice 3"
                                questions={[
                                    {
                                        id: "ex3_1",
                                        text: (
                                            <>
                                                1. À l'aide du schéma ci-dessous, indiquer la couleur émise par le
                                                projecteur (λ = 580 nm).
                                                <div className="spectrum-image-container">
                                                    <img
                                                        src={visibleSpectrum}
                                                        alt="Spectre visible de la lumière"
                                                        className="spectrum-image"
                                                    />
                                                </div>
                                            </>
                                        ),
                                        textarea: true
                                    },
                                    {
                                        id: "ex3_2",
                                        text: "2. Placer sur la figure les domaines suivants : visible – infrarouge – ultraviolet",
                                        textarea: true
                                    }
                                ]}
                                answers={answers}
                                showCorrections={showCorrections}
                                handleInputChange={handleInputChange}
                                toggleCorrection={toggleCorrection}
                            />
                            <div className="spectrum-card">
                                <div className="spectrum-card-title">Exercice 4</div>
                                <div className="spectrum-image-container">
                                    <img
                                        src={longueurondeexo4}
                                        alt="Spectre visible de la lumière"
                                        className="spectrum-image" style={{width: "80%"}}
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Colonne 2 */}
                        <div className="exercice-column">
                            <QuestionBlock
                                title="Exercice 4 (suite)"
                                questions={[
                                    {
                                        id: "ex4_1",
                                        text: (
                                            <>
                                                L’oeil humain ne présente pas la même sensibilité
                                                pour toutes les longueurs d’onde. La courbe suivante
                                                donne sa sensibilité relative moyenne en fonction de
                                                la longueur d’onde.<br/>
                                                1. Déterminer la longueur d’onde pour laquelle l’oeil
                                                est le plus sensible :

                                            </>
                                        ),
                                        textarea: true
                                    },
                                    {
                                        id: "ex4_2",
                                        text: "2. Indiquer la couleur correspondant au maximum de sensibilité :",
                                        textarea: true
                                    }
                                ]}
                                answers={answers}
                                showCorrections={showCorrections}
                                handleInputChange={handleInputChange}
                                toggleCorrection={toggleCorrection}
                            />

                            <QuestionBlock
                                title="Exercice 5"
                                questions={[
                                    {
                                        id: "ex5_a",
                                        text: "a. Quelle couleur obtient-on en superposant λA (450 nm) et λB (530 nm) ?",
                                        textarea: true
                                    },
                                    {
                                        id: "ex5_b",
                                        text: "b. Qu'obtient-on si on superpose les trois faisceaux (λA, λB, λC = 700 nm) ?",
                                        textarea: true
                                    }
                                ]}
                                answers={answers}
                                showCorrections={showCorrections}
                                handleInputChange={handleInputChange}
                                toggleCorrection={toggleCorrection}
                            />

                            <QuestionBlock
                                title="Exercice 6"
                                questions={[
                                    {
                                        id: "ex6",
                                        text: "Indiquer le (ou les) filtre(s) à interposer sur le faisceau lumineux émis par une source de lumière blanche de façon à obtenir une lumière bleue.",
                                        textarea: true
                                    }
                                ]}
                                answers={answers}
                                showCorrections={showCorrections}
                                handleInputChange={handleInputChange}
                                toggleCorrection={toggleCorrection}
                            />

                            <QuestionBlock
                                title="Exercice 7"
                                questions={[
                                    {
                                        id: "ex7_1",
                                        text: "1. Faire une hypothèse sur le schéma qui caractérise la bonne trajectoire du faisceau laser.",
                                        textarea: true
                                    },
                                    {
                                        id: "ex7_2",
                                        text: "2. Décrire le protocole expérimental pour vérifier la divergence du faisceau laser :",
                                        textarea: true
                                    }
                                ]}
                                answers={answers}
                                showCorrections={showCorrections}
                                handleInputChange={handleInputChange}
                                toggleCorrection={toggleCorrection}
                            />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

// Fonction utilitaire pour les options du QCM
function getQcmOptions(questionNum) {
    switch (questionNum) {
        case 1:
            return [
                {value: "a", label: "a. le jaune"},
                {value: "b", label: "b. la lumière blanche"},
                {value: "c", label: "c. sa couleur"}
            ];
        case 2:
            return [
                {value: "a", label: "a. rouge"},
                {value: "b", label: "b. verte"},
                {value: "c", label: "c. bleue"}
            ];
        case 3:
            return [
                {value: "a", label: "a. un luxmètre"},
                {value: "b", label: "b. un prisme"},
                {value: "c", label: "c. une loupe"}
            ];
        case 4:
            return [
                {value: "a", label: "a. 1 × 10⁻⁹ m"},
                {value: "b", label: "b. 1 × 10⁻⁶ m"},
                {value: "c", label: "c. 1 × 10⁻³ m"}
            ];
        case 5:
            return [
                {value: "a", label: "a. un spectre coloré"},
                {value: "b", label: "b. une seule couleur"},
                {value: "c", label: "c. trois couleurs"}
            ];
        case 6:
            return [
                {value: "a", label: "a. le vert et le cyan"},
                {value: "b", label: "b. le vert et le rouge"},
                {value: "c", label: "c. le magenta et le vert"}
            ];
        case 7:
            return [
                {value: "a", label: "a. aux bâtonnets"},
                {value: "b", label: "b. à la synthèse soustractive"},
                {value: "c", label: "c. à la synthèse additive"}
            ];
        case 8:
            return [
                {value: "a", label: "a. jaune"},
                {value: "b", label: "b. blanc"},
                {value: "c", label: "c. noir"}
            ];
        case 9:
            return [
                {value: "a", label: "a. RVB"},
                {value: "b", label: "b. CMJ"},
                {value: "c", label: "c. RVJ"}
            ];
        case 10:
            return [
                {value: "a", label: "a. noir"},
                {value: "b", label: "b. blanc"},
                {value: "c", label: "c. jaune"}
            ];
        default:
            return [];
    }
}

export default ExercicesOptic;
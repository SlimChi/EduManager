import React, {useRef, useState} from 'react';
import {FaChartBar, FaPrint, FaCheck, FaBook, FaFutbol} from 'react-icons/fa';
import '../../../../../styles/activites.css';
import {useLocation, useParams} from "react-router-dom";
import BackButton from "../../../../../components/navigation/BackButton";
import PrintManager from "../../../../../utils/PrintManager";
import Automatismes2 from "../../../../../config/Automatismes2";
import {FcLibrary, FcSportsMode} from "react-icons/fc";
import ModalImage from "../../../../../utils/ModalImage";
import act4stat from "../../../../../assets/elevelivre.png";
import diagrammeImage from "../../../../../assets/diagrammevide.png";
import exostat from "../../../../../assets/footstat.png";

const Exercice1et2StatUneVar = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    // États pour l'exercice 1
    const [livresReponses, setLivresReponses] = useState({
        question1a: '',
        question1b: '',
        question1c: '',
        question2c: '',
        question3a: ''
    });

    const [frequencesLivres, setFrequencesLivres] = useState({
        freq0: '',
        freq1: '',
        freq2: '',
        freq3: '',
        freq4: '',
        freq5: ''
    });

    // États pour l'exercice 2
    const [ageReponses, setAgeReponses] = useState({
        question1a: '',
        question1b: '',
        question1c: '',
        question1d: '',
        question2c: '',
        question3a: '',
        question3b: ''
    });

    const [frequencesAge, setFrequencesAge] = useState({
        freq10: '',
        freq11: '',
        freq12: '',
        freq13: '',
        freq14: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        // Exercice 1
        ex1_question1a: false,
        ex1_question1b: false,
        ex1_question1c: false,
        ex1_question2c: false,
        ex1_question3a: false,

        // Exercice 2
        ex2_question1a: false,
        ex2_question1b: false,
        ex2_question1c: false,
        ex2_question1d: false,
        ex2_question2c: false,
        ex2_question3a: false
    });

    // Réponses attendues
    const correctAnswers = {
        // Exercice 1
        ex1_question1a: "La population étudiée est les 60 élèves interrogés.",
        ex1_question1b: "Le caractère étudié est le nombre de livres lus. Il est quantitatif.",
        ex1_question1c: "Le caractère est discret car le nombre de livres prend des valeurs entières isolées (0, 1, 2, etc.).",
        ex1_question2c: "37 élèves ont lu 2 livres ou moins (10 + 12 + 15 = 37).",
        ex1_question3a: "Un diagramme en bâtons ou un diagramme à secteurs serait adapté pour représenter ces données.",

        // Exercice 2
        ex2_question1a: "La population étudiée est les 40 participants au tournoi de football.",
        ex2_question1b: "Le caractère étudié est l'âge des participants.",
        ex2_question1c: "Le caractère est quantitatif car l'âge peut être mesuré numériquement.",
        ex2_question1d: "Le caractère est discret car l'âge prend des valeurs entières isolées (10, 11, 12, etc.).",
        ex2_question2c: "L'âge le plus fréquent est 12 ans (effectif de 12 participants).",
        ex2_question3a: "Un diagramme en bâtons serait le plus adapté pour représenter ces données."
    };

    const [modalState, setModalState] = useState({
        show: false,
        imageUrl: '',
        altText: ''
    });

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState(prev => ({...prev, show: false}));
    };

    const handleInputChange = (field, value) => {
        if (field.startsWith('ex1_')) {
            setLivresReponses(prev => ({
                ...prev,
                [field.replace('ex1_', '')]: value
            }));
        } else {
            setAgeReponses(prev => ({
                ...prev,
                [field.replace('ex2_', '')]: value
            }));
        }
    };

    const handleFrequenceChangeLivres = (valeur, freq) => {
        setFrequencesLivres(prev => ({
            ...prev,
            [valeur]: freq
        }));
    };

    const handleFrequenceChangeAge = (age, freq) => {
        setFrequencesAge(prev => ({
            ...prev,
            [age]: freq
        }));
    };

    const contentRef = useRef();

    const toggleCorrection = (field) => {
        setShowCorrections(prev => ({
            ...prev,
            [field]: !prev[field]
        }));

        if (!showCorrections[field]) {
            const answerField = field.startsWith('ex1_')
                ? field.replace('ex1_', '')
                : field.replace('ex2_', '');

            if (field.startsWith('ex1_') && !livresReponses[answerField]) {
                setLivresReponses(prev => ({
                    ...prev,
                    [answerField]: correctAnswers[field]
                }));
            } else if (field.startsWith('ex2_') && !ageReponses[answerField]) {
                setAgeReponses(prev => ({
                    ...prev,
                    [answerField]: correctAnswers[field]
                }));
            }
        }
    };

    if (className === 'Secondeastat-une-variable-exo12') {
        return <div>Cet exercice n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>
            <div className="tp-container" id="stat-exo12-content" ref={contentRef}>
                <PrintManager
                    contentRef={contentRef}
                    activityName="Exercices_Statistiques_1_2"
                    pageCount={2}
                    quality="hd"
                />

                {/* PAGE 1 - EXERCICE 1 */}
                <div className="print-page">
                    <div style={{marginTop: '-12px'}}>
                        <Automatismes2/>
                    </div>
                    <div className="activity-header mt-0">
                        <span className="activity-badge">EXERCICE 1</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaBook/> <FcLibrary/> « Nombre de livres lus par des élèves »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '15px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte2">
                                <p style={{textAlign: 'justify', fontSize: '14px', lineHeight: '1.3'}}>
                                    Une enquête a été réalisée auprès de 60 élèves pour connaître le nombre de livres
                                    qu'ils ont lus durant l'année.
                                    Les résultats obtenus sont les suivants :
                                </p>
                            </div>
                            {/* Tableau des données */}
                            <div className="table-responsive mt-2">
                                <table className="table table-bordered text-center shadow-sm"
                                       style={{fontSize: '14px'}}>
                                    <thead className="table-light">
                                    <tr>
                                        <th>Nombre de livres lus</th>
                                        <th>0</th>
                                        <th>1</th>
                                        <th>2</th>
                                        <th>3</th>
                                        <th>4</th>
                                        <th>5</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Nombre d'élèves</td>
                                        <td>10</td>
                                        <td>12</td>
                                        <td>15</td>
                                        <td>9</td>
                                        <td>8</td>
                                        <td>6</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* ESPACE POUR IMAGE */}
                        <div className="flex-shrink-0"
                             style={{maxWidth: '200px', cursor: 'pointer'}}>
                            <img
                                src={act4stat}
                                alt="CDiagramme des dépenses"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(act4stat, 'élèves')}
                            />
                        </div>
                    </div>


                    {/* Question 1 - Compréhension des données */}
                    <div className="question-card mt-3">
                        <h4 className="vect-title2"
                            style={{display: 'inline', marginRight: '10px', marginTop: '20px', marginBottom: '20px'}}>
                            <span>1. Compréhension des données :</span>
                        </h4>
                        <div className="question-item">
                            <p style={{margin: '0', flex: '1'}}>
                                a. Quelle est la population étudiée dans cette enquête ?
                                <span
                                    className="answer-dots"> ...............................................
                                                ................................................</span>
                            </p>
                            <div className="answer-container">
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex1_question1a')}
                                >
                                    <FaCheck/> {showCorrections.ex1_question1a ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex1_question1a && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex1_question1a}
                                </div>
                            )}
                        </div>
                        <div className="question-item">
                            <p style={{margin: '0', flex: '1'}}>
                                b. Quel est le caractère statistique étudié ? Est-il quantitatif ou qualitatif ?
                                <span
                                    className="answer-dots"> ...............................................
                                                ...............</span>
                            </p>
                            <div className="answer-container">

                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex1_question1b')}
                                >
                                    <FaCheck/> {showCorrections.ex1_question1b ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex1_question1b && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex1_question1b}
                                </div>
                            )}
                        </div>

                        <div className="question-item">
                            <p style={{margin: '0', flex: '1'}}>
                                c. Ce caractère est-il discret ou continu ? Justifiez votre réponse.
                                <span
                                    className="answer-dots"> ...............................................
                                                ...............</span>
                            </p>
                            <div className="answer-container">
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex1_question1c')}
                                >
                                    <FaCheck/> {showCorrections.ex1_question1c ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex1_question1c && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex1_question1c}
                                </div>
                            )}
                        </div>

                        {/* Question 2 - Calcul des fréquences */}
                        <h4 className="vect-title"
                            style={{display: 'inline', marginRight: '10px', marginTop: '0'}}>
                            <span>2. Calcul des fréquences :</span>
                        </h4>
                        <p>a. Calculez la fréquence de chaque nombre de livres lus.</p>

                        <div className="table-responsive mt-3">
                            <table className="table table-bordered text-center shadow-sm" style={{fontSize: '14px'}}>
                                <thead className="table-light">
                                <tr>
                                    <th>Nombre de livres lus</th>
                                    <th>0</th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Nombre d'élèves</td>
                                    <td>10</td>
                                    <td>12</td>
                                    <td>15</td>
                                    <td>9</td>
                                    <td>8</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>Fréquences %</td>
                                    <td>
                                        ........... %
                                    </td>
                                    <td>
                                        ........... %
                                    </td>
                                    <td>
                                        ........... %
                                    </td>
                                    <td>
                                        ........... %
                                    </td>
                                    <td>
                                        ........... %
                                    </td>
                                    <td>
                                        ........... %
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="question-item mt-3">
                            <p style={{margin: '0', flex: '1'}}>
                                c. Combien d'élèves ont lu 2 livres ou moins ?
                                <span
                                    className="answer-dots"> ...............................................
                                                ...............</span>
                            </p>
                            <div className="answer-container">
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex1_question2c')}
                                >
                                    <FaCheck/> {showCorrections.ex1_question2c ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex1_question2c && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex1_question2c}
                                </div>
                            )}
                        </div>

                        {/* Question 3 - Représentation graphique */}
                        <h4 className="vect-title"
                            style={{display: 'inline', marginRight: '10px', marginTop: '0'}}>
                            <span>3. Représentation graphique :</span>
                        </h4>
                        <div className="question-item">
                            <p style={{margin: '0', flex: '1'}}>
                                a. Proposez une représentation graphique adaptée pour illustrer ces données.
                                <span
                                    className="answer-dots"> ...............................................
                                                ...............</span>
                            </p>
                            <div className="answer-container">
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex1_question3a')}
                                >
                                    <FaCheck/> {showCorrections.ex1_question3a ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex1_question3a && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex1_question3a}
                                </div>
                            )}
                        </div>

                        {/* ESPACE POUR IMAGE */}
                        <div className="diagram-placeholder" style={{
                            height: 'auto',
                            margin: '10px 0',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ffffff',
                            padding: '10px',
                            borderRadius: '12px'
                        }}>
                            <img src={diagrammeImage} alt="Diagramme " style={{
                                maxWidth: '45%',
                                height: 'auto',
                                border: '2px solid #ccc',
                                borderRadius: '8px'
                            }}/>
                        </div>
                    </div>
                </div>

                {/* PAGE 2 - EXERCICE 2 */}
                <div className="print-page">
                    <div className="activity-header mt-0">
                        <span className="activity-badge">EXERCICE 2</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaFutbol/> <FcSportsMode/> « Âge des participants à un tournoi de football »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '15px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte2">
                                <p style={{textAlign: 'justify', fontSize: '14px', lineHeight: '1.4'}}>
                                    Lors d’un tournoi de football, les âges des 40 joueurs ont été relevés et regroupés
                                    dans un tableau.
                                    Ce tableau servira de support pour l’étude statistique de la répartition des
                                    participants. :
                                </p>
                            </div>

                            {/* Tableau des données */}
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered text-center shadow-sm"
                                       style={{fontSize: '14px'}}>
                                    <thead className="table-light">
                                    <tr>
                                        <th>Âge</th>
                                        <th>10 ans</th>
                                        <th>11 ans</th>
                                        <th>12 ans</th>
                                        <th>13 ans</th>
                                        <th>14 ans</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Effectif</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td>12</td>
                                        <td>8</td>
                                        <td>5</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* ESPACE POUR IMAGE */}
                        <div className="flex-shrink-0"
                             style={{maxWidth: '200px', cursor: 'pointer'}}>
                            <img
                                src={exostat}
                                alt="clients"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(exostat, 'clients')}
                            />
                        </div>
                    </div>


                    {/* Question 1 - Analyse des données */}
                    <div className="question-card mt-3">
                        <h4 className="vect-title"
                            style={{display: 'inline', marginRight: '10px', marginTop: '0'}}>
                            <span>1. Analyse des données :</span>
                        </h4>
                        <div className="question-item">
                            <p style={{margin: '0', flex: '1'}}>
                                a. Quelle est la population étudiée dans cette enquête ?
                                <span
                                    className="answer-dots"> ........................................................
                                                ...............</span>
                            </p>
                            <div className="answer-container">
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex2_question1a')}
                                >
                                    <FaCheck/> {showCorrections.ex2_question1a ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex2_question1a && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex2_question1a}
                                </div>
                            )}
                        </div>
                        <br/>
                        <div className="question-item">
                            <p style={{margin: '0', flex: '1'}}>
                                b. Quel est le caractère étudié dans cette enquête statistique ?
                                <span
                                    className="answer-dots"> ...............................................
                                                ...............</span>
                            </p>
                            <div className="answer-container">
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex2_question1b')}
                                >
                                    <FaCheck/> {showCorrections.ex2_question1b ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex2_question1b && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex2_question1b}
                                </div>
                            )}
                        </div>
                        <br/>
                        <div className="question-item">
                            <p style={{margin: '0', flex: '1'}}>
                                c. Ce caractère est-il quantitatif ou qualitatif ? Justifiez.
                                <span
                                    className="answer-dots"> ...............................................
                                                ...........................</span>
                            </p>
                            <div className="answer-container">

                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex2_question1c')}
                                >
                                    <FaCheck/> {showCorrections.ex2_question1c ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex2_question1c && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex2_question1c}
                                </div>
                            )}
                        </div>
                        <br/>
                        <div className="question-item">
                            <p style={{margin: '0', flex: '1'}}>
                                d. Ce caractère est-il discret ou continu ? Expliquez pourquoi.
                                <span
                                    className="answer-dots"> ...............................................
                                                ...............</span>
                            </p>
                            <div className="answer-container">
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex2_question1d')}
                                >
                                    <FaCheck/> {showCorrections.ex2_question1d ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex2_question1d && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex2_question1d}
                                </div>
                            )}
                        </div>

                        {/* Question 2 - Calculs statistiques */}
                        <h4 className="vect-title"
                            style={{display: 'inline', marginRight: '10px', marginTop: '0'}}>
                            <span>2. Calculs statistiques :</span>
                        </h4>
                        <p style={{margin: '0', flex: '1'}}>
                            . Calculez l'effectif total des participants.
                            <span
                                className="answer-dots"> ........................................................
                                                ...............</span>
                        </p>

                        <p className="mt-3">b. Calculez la fréquence pour chaque âge.</p>

                        <div className="table-responsive mt-3">
                            <table className="table table-bordered text-center shadow-sm" style={{fontSize: '14px'}}>
                                <thead className="table-light">
                                <tr>
                                    <th>Âge</th>
                                    <th>10 ans</th>
                                    <th>11 ans</th>
                                    <th>12 ans</th>
                                    <th>13 ans</th>
                                    <th>14 ans</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Effectif</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>12</td>
                                    <td>8</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>Fréquences %</td>
                                    <td>
                                        ........... %
                                    </td>
                                    <td>
                                        ........... %
                                    </td>
                                    <td>
                                        ........... %
                                    </td>
                                    <td>
                                        ........... %
                                    </td>
                                    <td>
                                        ........... %
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="question-item mt-3">
                            <p style={{margin: '0', flex: '1'}}>
                                c. Quel est l'âge le plus fréquent parmi les participants ?
                                <span
                                    className="answer-dots"> ........................................................
                                                ...............</span>
                            </p>
                            <div className="answer-container">
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex2_question2c')}
                                >
                                    <FaCheck/> {showCorrections.ex2_question2c ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex2_question2c && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex2_question2c}
                                </div>
                            )}
                        </div>

                        {/* Question 3 - Représentation graphique */}
                        <h4 className="vect-title"
                            style={{display: 'inline', marginRight: '10px', marginTop: '0'}}>
                            <span>3. Représentation graphique :</span>
                        </h4>
                        <div className="question-item">
                            <p style={{margin: '0', flex: '1'}}>
                                a. Quel type de diagramme est le plus adapté pour représenter ces données ?
                                <span
                                    className="answer-dots"> ........................................................
                                                ...............</span>
                            </p>
                            <div className="answer-container">

                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex2_question3a')}
                                >
                                    <FaCheck/> {showCorrections.ex2_question3a ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex2_question3a && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex2_question3a}
                                </div>
                            )}
                        </div>

                        <div className="question-item mt-3">
                            <p>b. Réalisez la représentation graphique adaptée.</p>
                        </div>

                        {/* ESPACE POUR IMAGE */}
                        <div className="diagram-placeholder" style={{
                            height: 'auto',
                            margin: '10px 0',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ffffff',
                            padding: '10px',
                            borderRadius: '12px'
                        }}>
                            <img src={diagrammeImage} alt="Diagramme " style={{
                                maxWidth: '50%',
                                height: 'auto',
                                border: '2px solid #ccc',
                                borderRadius: '8px'
                            }}/>
                        </div>
                    </div>
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

export default Exercice1et2StatUneVar;
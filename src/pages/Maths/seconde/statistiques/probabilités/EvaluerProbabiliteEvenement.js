import React, {useRef, useState} from 'react';
import {FaPrint, FaCheck, FaChartPie, FaHome, FaBullseye} from 'react-icons/fa';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import {IoMdSchool} from 'react-icons/io';
import '../../../../../styles/act1proba.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../../components/navigation/BackButton';
import ModalImage from '../../../../../utils/ModalImage';
import PrintManager from '../../../../../utils/PrintManager';
import Automatismes from '../../../../../config/Automatismes';
import roueImage from '../../../../../assets/diagCircul.png';
import frequenceSortie from '../../../../../assets/frequenceSortie.png';
import '../../../../../styles/act1proba-print.css';
import {FcSalesPerformance} from 'react-icons/fc';
import AutoEvaluationGrid from "../../../../../config/AutoEvaluationGrid";
import AutoEvaluationGrid2 from "../../../../../config/AutoEvaluationGrid2";

const EvaluerProbabiliteEvenement = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [showConclusion, setShowConclusion] = useState(false);

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        question1: '',
        question5: '',
        question6: '',
        question7: '',
        question8: '',
        question9: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        question1: false,
        question5: false,
        question6: false,
        question7: false,
        question8: false,
        question9: false,
    });

    // Réponses attendues
    const correctAnswers = {
        question1: 'Ouvrir le fichier "roue" et observer que la colonne B contient 1 lorsque le numéro 2 sort',
        question5: 'La fréquence de sortie se stabilise vers 0,25.',
        question6: 'a = 90°',
        question7: 'Angle total = 360°',
        question8: 'Probabilité = 0,25',
        question9: 'Oui, 0,25 = 1/4, correspond bien à une chance sur quatre.',
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
        setAnswers((prev) => ({...prev, [field]: value}));
    };

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));

        if (!answers[field] && !showCorrections[field]) {
            setAnswers((prev) => ({...prev, [field]: correctAnswers[field]}));
        }
    };
    const [showAnswer, setShowAnswer] = useState(false);
    const contentRef = useRef();
    if (className === 'Seconde-pythagore') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>

            <div
                className="tp-container act1-container"
                id="proba-content"
                ref={contentRef}
            >
                <PrintManager
                    contentRef={contentRef}
                    activityName="Proba_Roue"
                    pageCount={3}
                    quality="hd"
                />
                <div className="print-page">
                    <Automatismes/>
                </div>


                {/* Page 1 - En-tête et introduction */}
                <div className="print-page">
                    <div className="math-chapter-box blue">
                        <FaChartPie className="math-chapter-icon"/>
                        <h2 className="math-chapter-title-test">
                            Évaluer la probabilité d'un événement <br/> Comment prévoir le bon numéro ?
                        </h2>
                        <span
                            className="emoji"
                            style={{fontSize: '30px', marginLeft: '15px'}}
                        >
                            🎡
                        </span>
                    </div>

                    <div className="activity-header">
                        <span className="activity-badge">ACTIVITÉ 3</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaChartPie/> {' '}
                                <span className="emoji">
                                    <FaChartPie/>
                                </span>{' '}
                                Roue de la tombola
                            </span>
                        </div>
                    </div>

                    <div
                        className="d-flex align-items-start flex-wrap"
                        style={{gap: '20px', width: '100%'}}
                    >
                        <div style={{flex: 1}}>
                            <div className="renovation-contexte">
                                <p style={{fontSize: '16px', color: '#2c3e50'}}>
                                    🎡 <strong>Lucas </strong> tient le stand de la tombola à la fête de l’école.
                                    Les lots dépendent du numéro du secteur sur lequel la roue représentée ci-contre
                                    s’arrête.
                                </p>

                                <p style={{fontSize: '16px', color: '#2c3e50'}}>
                                    🔄 La roue est équilibrée, la probabilité d’obtenir un secteur donné est
                                    proportionnelle à l’angle de celui-ci.<br/>
                                    🤔 <strong>Camille </strong> pense qu’elle a une chance sur quatre d’obtenir le
                                    numéro 2.
                                </p>
                            </div>
                            <div className="problem-box2 print-optimized" style={{marginTop: '10px'}}>
                                <div className="d-flex align-items-center mb-2">
                                </div>
                                <p className="print-text">
                                    🎯 L’objectif est de vérifier si l’estimation de Camille est correcte.
                                </p>
                            </div>

                        </div>

                        <div
                            className="flex-shrink-0"
                            style={{
                                maxWidth: '260px',
                                cursor: 'pointer',
                            }}
                        >
                            <img
                                src={roueImage}
                                alt="Roue de la loterie"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(roueImage, 'Roue de la loterie')}
                            />
                        </div>
                    </div>

                    {/* Partie A - Simulation avec tableur */}
                    <section className="tp-section compact print-section">
                        <h3 className="compact-title">
                            <FaChartPie/> A. Simulation de la sortie du numéro 2 avec un tableur
                        </h3>
                        <div className="d-flex align-items-start gap-3">
                            <div className="flex-grow-1 compact-content">
                                <div className="instruction-box1 compact">
                                    <h4 className="instruction-title">1. Préparation du fichier :</h4>
                                    <div className="excel-instruction">
                                        <span>Ouvrir le fichier « roue » qui simule 100 lancers de la roue.</span><br/>
                                        <span>Dans la colonne B, la sortie du numéro 2 est validée par le chiffre 1.</span>
                                    </div>
                                    <button
                                        className="correction-btnoptic compact no-print"
                                        onClick={() => toggleCorrection('question1')}
                                        style={{margin: '5px 0'}}
                                    >
                                        <FaCheck/> Voir la correction
                                    </button>
                                    {showCorrections.question1 && (
                                        <div className="correction-box">
                                            {correctAnswers.question1}
                                        </div>
                                    )}
                                </div>

                                <div className="table-responsive" style={{margin: '15px 0'}}>
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th>Nombre de tirages</th>
                                            <th>Sortie du numéro 2</th>
                                            <th>Nombre de sorties du numéro 2</th>
                                            <th>Fréquence de sorties du numéro 2</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>0</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>0</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>0</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>0</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>0</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="instruction-container">
                                    <div className="instruction-box compact">
                                        <h4 className="instruction-title">2. Compter les sorties du numéro 2 :</h4>
                                        <div className="excel-instruction">
                                            <span>Dans la colonne C, saisir :</span><br/>
                                            <span>- Cellule C2:  </span>
                                            <button className="excel-formula-btn">=B2</button>
                                            <br/>
                                            <span>- Cellule C3: </span>
                                            <button className="excel-formula-btn">=C2+B3</button>
                                            <br/>
                                            <span>- Copier la formule jusqu'à C101</span>
                                        </div>
                                    </div>

                                    <div className="instruction-box compact">
                                        <h4 className="instruction-title">3. Calculer les fréquences :</h4>
                                        <div className="excel-instruction">
                                            <span>Dans la colonne D, saisir :</span><br/>
                                            <span>- Cellule D2: </span>
                                            <button className="excel-formula-btn">=C2/A2</button>
                                            <br/>
                                            <span>- Recopier la formule jusqu'à D101</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Page 2 - Partie B - Calcul théorique */}
                <div className="print-page" id="page2-start">
                    <section className="tp-section compact print-section">
                        <div className="instruction-box1 compact"
                             style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <div className="text-section">
                                <h4 className="instruction-title">4. Création du graphique :</h4>
                                <div className="excel-instruction">
                                    <span>Sélectionner les colonnes A et D</span><br/>
                                    <span>Insérer un graphique en nuage de points</span>
                                </div>
                            </div>

                            <img
                                src={frequenceSortie}
                                alt="Roue de la loterie"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(frequenceSortie, 'Roue de la loterie')}
                                style={{maxWidth: '400px', height: 'auto', marginLeft: '20px'}}

                            />

                        </div>

                        <Question
                            id="question5"
                            text="5. Comment évolue la fréquence de sortie du numéro 2 lorsque le nombre de lancers de la roue augmente ?"
                            answer={answers.question5}
                            showCorrection={showCorrections.question5}
                            onChange={handleInputChange}
                            onToggleCorrection={toggleCorrection}
                            textarea
                            className="compact-question"
                        />
                        <h3 className="compact-title">
                            <FaChartPie/> B. Calcul de la probabilité de sortie du numéro 2
                        </h3>
                        <div className="d-flex flex-column gap-3">
                            {/* Ligne 1 - Questions 6 et 7 */}
                            <div className="d-flex align-items-start gap-3" style={{width: '100%'}}>
                                <div className="flex-grow-1 compact-content">
                                    <Question
                                        id="question6"
                                        text="6. Quel est l'angle α correspondant au secteur du numéro 2 ?"
                                        answer={answers.question6}
                                        showCorrection={showCorrections.question6}
                                        onChange={handleInputChange}
                                        onToggleCorrection={toggleCorrection}
                                        className="compact-question"
                                        style={{flex: 1}}
                                    />
                                </div>
                                <div className="flex-grow-1 compact-content">
                                    <Question
                                        id="question7"
                                        text="7. Quel est l'angle total du disque ?"
                                        answer={answers.question7}
                                        showCorrection={showCorrections.question7}
                                        onChange={handleInputChange}
                                        onToggleCorrection={toggleCorrection}
                                        className="compact-question"
                                        style={{flex: 1}}
                                    />
                                </div>
                            </div>

                            {/* Ligne 2 - Questions 8 et 9 */}
                            <div className="d-flex align-items-start gap-3" style={{width: '100%'}}>
                                <div className="flex-grow-1 compact-content">
                                    <Question
                                        id="question8"
                                        text="8. Quelle est la probabilité théorique d'obtenir le numéro 2 ?"
                                        answer={answers.question8}
                                        showCorrection={showCorrections.question8}
                                        onChange={handleInputChange}
                                        onToggleCorrection={toggleCorrection}
                                        className="compact-question"
                                        style={{flex: 1}}
                                    />
                                </div>
                                <div className="flex-grow-1 compact-content">
                                    <Question
                                        id="question9"
                                        text="9. Camille a-t-elle bien estimé la probabilité d'obtenir le numéro 2 ?"
                                        answer={answers.question9}
                                        showCorrection={showCorrections.question9}
                                        onChange={handleInputChange}
                                        onToggleCorrection={toggleCorrection}
                                        className="compact-question"
                                        style={{flex: 1}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="math-card">
                            {showAnswer ? (
                                <div className="math-formula1">
                                    La probabilité d’un événement est le rapport =
                                    <div className="fraction">
                                        <span className="numerator1">Nombre de cas favorables</span>
                                        <span className="denominator1">Nombre de cas possibles</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="math-formula1">
                                    La probabilité d’un événement est le rapport =
                                    <div className="fraction">
                                        <span
                                            className="numerator1">..................................................</span>
                                        <span
                                            className="denominator1">..................................................</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => setShowAnswer(!showAnswer)}
                            className="correction-btnoptic compact no-print mt-3"
                        >
                            {showAnswer ? 'Masquer la réponse' : 'Afficher la réponse'}
                        </button>
                    </section>

                    <AutoEvaluationGrid2/>
                </div>
                <footer className="tp-footer compact">
                    <p className="compact-text">Mathématiques 2nde - Probabilités</p>
                    <p className="compact-text">Évaluation de probabilités avec une roue</p>
                </footer>
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

const Question = ({
                      id,
                      text,
                      answer,
                      showCorrection,
                      onChange,
                      onToggleCorrection,
                      textarea = false,
                      className = '',
                  }) => (
    <div className={`question compact ${className}`} style={{marginBottom: '12px'}}>
        {text && <p className="compact-text" style={{marginBottom: '5px'}}>{text}</p>}
        <div className="answer-container compact" style={{margin: '5px 0'}}>
            {textarea ? (
                <textarea
                    className={`answer-input compact ${showCorrection ? 'correction-active' : ''}`}
                    rows={1}
                    value={answer}
                    onChange={(e) => onChange(id, e.target.value)}
                    style={{marginBottom: '5px'}}
                />
            ) : (
                <input
                    type="text"
                    className={`answer-input compact ${showCorrection ? 'correction-active' : ''}`}
                    value={answer}
                    onChange={(e) => onChange(id, e.target.value)}
                    style={{marginBottom: '5px'}}
                />
            )}
        </div>
        <button
            className="correction-btnoptic compact no-print"
            onClick={() => onToggleCorrection(id)}
            style={{margin: '5px 0'}}
        >
            <FaCheck/> Correction
        </button>
    </div>
);

export default EvaluerProbabiliteEvenement;
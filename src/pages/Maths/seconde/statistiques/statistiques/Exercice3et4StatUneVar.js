import React, {useRef, useState} from 'react';
import {FaChartBar, FaPrint, FaCheck, FaTv, FaTools} from 'react-icons/fa';
import '../../../../../styles/activites.css';
import {useLocation, useParams} from "react-router-dom";
import BackButton from "../../../../../components/navigation/BackButton";
import PrintManager from "../../../../../utils/PrintManager";
import Automatismes2 from "../../../../../config/Automatismes2";
import {FcFilm, FcEngineering} from "react-icons/fc";
import ModalImage from "../../../../../utils/ModalImage";
import act3stat from "../../../../../assets/tvstat.png";
import diagrammeImage from "../../../../../assets/diagrammevide.png";
import act4stat from "../../../../../assets/maintenancestat.png";
import diagsecteur from "../../../../../assets/diagsecteur.png";
import histoexo5 from "../../../../../assets/histoexo5.png";
import AutoEvaluationGrid from "../../../../../config/AutoEvaluationGrid";

const Exercice3et4StatUneVar = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    // États pour l'exercice 3
    const [tvReponses, setTvReponses] = useState({
        question1a: '',
        question1b: '',
        question1c: '',
        question3b: ''
    });

    const [effectifsTV, setEffectifsTV] = useState({
        classe0_2: '',
        classe2_4: '',
        classe4_6: '',
        classe6_8: ''
    });

    const [frequencesTV, setFrequencesTV] = useState({
        freq0_2: '',
        freq2_4: '',
        freq4_6: '',
        freq6_8: ''
    });

    const [anglesTV, setAnglesTV] = useState({
        angle0_2: '',
        angle2_4: '',
        angle4_6: '',
        angle6_8: ''
    });

    // États pour l'exercice 4
    const [maintenanceReponses, setMaintenanceReponses] = useState({
        question1: '',
        question3: '',
        question4e: ''
    });

    const [frequencesMaintenance, setFrequencesMaintenance] = useState({
        freq10_20: '',
        freq20_30: '',
        freq30_40: '',
        freq40_50: '',
        freq50_60: '',
        freq60_70: ''
    });

    const [effectifsMaintenance, setEffectifsMaintenance] = useState({
        effectif10_20: '',
        effectif20_30: '',
        effectif30_40: '',
        effectif40_50: '',
        effectif50_60: '',
        effectif60_70: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        // Exercice 3
        ex3_question1a: false,
        ex3_question1b: false,
        ex3_question1c: false,
        ex3_question3b: false,

        // Exercice 4
        ex4_question1: false,
        ex4_question3: false,
        ex4_question4e: false
    });

    // Réponses attendues
    const correctAnswers = {
        // Exercice 3
        ex3_question1a: "La population étudiée est les 20 familles interrogées.",
        ex3_question1b: "Le caractère étudié est la durée d'utilisation de la télévision. Il est quantitatif.",
        ex3_question1c: "Le caractère est continu car la durée peut prendre n'importe quelle valeur dans un intervalle.",
        ex3_question3b: "Le pourcentage des familles qui regardent la télévision plus de 4 heures par jour est calculé en additionnant les fréquences des classes [4;6] et [6;8].",

        // Exercice 4
        ex4_question1: "La variable de la série statistique représentée est la durée des interventions de maintenance (en minutes).",
        ex4_question3: "Le pourcentage des interventions de plus de 30 minutes est calculé en additionnant les fréquences des classes [30;40], [40;50], [50;60] et [60;70].",
        ex4_question4e: "Pour vérifier si le tuteur a raison, il faut additionner les fréquences des classes [30;40] et [40;50] et voir si cela dépasse 50%."
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
        if (field.startsWith('ex3_')) {
            setTvReponses(prev => ({
                ...prev,
                [field.replace('ex3_', '')]: value
            }));
        } else {
            setMaintenanceReponses(prev => ({
                ...prev,
                [field.replace('ex4_', '')]: value
            }));
        }
    };

    const handleEffectifChangeTV = (classe, value) => {
        setEffectifsTV(prev => ({
            ...prev,
            [classe]: value
        }));
    };

    const handleFrequenceChangeTV = (classe, value) => {
        setFrequencesTV(prev => ({
            ...prev,
            [classe]: value
        }));
    };

    const handleAngleChangeTV = (classe, value) => {
        setAnglesTV(prev => ({
            ...prev,
            [classe]: value
        }));
    };

    const handleFrequenceChangeMaintenance = (classe, value) => {
        setFrequencesMaintenance(prev => ({
            ...prev,
            [classe]: value
        }));
    };

    const handleEffectifChangeMaintenance = (classe, value) => {
        setEffectifsMaintenance(prev => ({
            ...prev,
            [classe]: value
        }));
    };

    const contentRef = useRef();

    const toggleCorrection = (field) => {
        setShowCorrections(prev => ({
            ...prev,
            [field]: !prev[field]
        }));

        if (!showCorrections[field]) {
            const answerField = field.startsWith('ex3_')
                ? field.replace('ex3_', '')
                : field.replace('ex4_', '');

            if (field.startsWith('ex3_') && !tvReponses[answerField]) {
                setTvReponses(prev => ({
                    ...prev,
                    [answerField]: correctAnswers[field]
                }));
            } else if (field.startsWith('ex4_') && !maintenanceReponses[answerField]) {
                setMaintenanceReponses(prev => ({
                    ...prev,
                    [answerField]: correctAnswers[field]
                }));
            }
        }
    };

    if (className === 'Secondeastat-une-variable-exo34') {
        return <div>Cet exercice n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>
            <div className="tp-container" id="stat-exo34-content" ref={contentRef}>
                <PrintManager
                    contentRef={contentRef}
                    activityName="Exercices_Statistiques_3_4"
                    pageCount={2}
                    quality="hd"
                />

                {/* PAGE 1 - EXERCICE 3 */}
                <div className="print-page">
                    <div style={{marginTop: '-12px'}}>
                        <Automatismes2/>
                    </div>
                    <div className="activity-header mt-0">
                        <span className="activity-badge">EXERCICE 3</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaTv/> <FcFilm/> « Durée d'utilisation de la télévision »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '15px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte2">
                                <p style={{textAlign: 'justify', fontSize: '14px', lineHeight: '1.3'}}>
                                    Une enquête a été menée auprès de 20 familles pour connaître la durée d'utilisation
                                    de la télévision par jour.
                                    Voici les résultats obtenus (en heures) :
                                </p>
                                <p style={{textAlign: 'center', fontStyle: 'italic', fontSize: '13px'}}>
                                    2h45, 3h00, 1h30, 5h15, 4h00, 3h45, 6h30, 3h00, 4h15, 2h00, 5h45, 2h30, 3h30, 4h30,
                                    3h15, 4h45, 5h00, 6h00, 2h15
                                </p>
                            </div>
                        </div>

                        {/* ESPACE POUR IMAGE */}
                        <div className="flex-shrink-0"
                             style={{maxWidth: '150px', cursor: 'pointer'}}>
                            <img
                                src={act3stat}
                                alt="Télévision"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(act3stat, 'Télévision')}
                            />
                        </div>
                    </div>

                    {/* Question 1 - Organisation des données */}
                    <div className="question-card mt-3">
                        <h4 className="vect-title2"
                            style={{display: 'inline', marginRight: '10px', marginTop: '20px', marginBottom: '20px'}}>
                            <span>1. Organisation des données :</span>
                        </h4>

                        <div className="question-item">
                            <p style={{margin: '0', flex: '1'}}>
                                a. Quelle est la population étudiée ?
                                <span className="answer-dots"> ...............................................</span>
                            </p>
                            <div className="answer-container">
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex3_question1a')}
                                >
                                    <FaCheck/> {showCorrections.ex3_question1a ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex3_question1a && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex3_question1a}
                                </div>
                            )}
                        </div>

                        <div className="question-item">
                            <p style={{margin: '0', flex: '1'}}>
                                b. Quel est le caractère étudié ? Est-il quantitatif ou qualitatif ?
                                <span className="answer-dots"> ...............................................</span>
                            </p>
                            <div className="answer-container">
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex3_question1b')}
                                >
                                    <FaCheck/> {showCorrections.ex3_question1b ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex3_question1b && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex3_question1b}
                                </div>
                            )}
                        </div>

                        <div className="question-item">
                            <p style={{margin: '0', flex: '1'}}>
                                c. Ce caractère est-il discret ou continu ? Justifiez votre réponse.
                                <span className="answer-dots"> ...............................................</span>
                            </p>
                            <div className="answer-container">
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex3_question1c')}
                                >
                                    <FaCheck/> {showCorrections.ex3_question1c ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex3_question1c && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex3_question1c}
                                </div>
                            )}
                        </div>

                        {/* Question 2 - Construction du tableau de fréquences */}
                        <h4 className="vect-title"
                            style={{display: 'inline', marginRight: '10px', marginTop: '0'}}>
                            <span>2. Construction du tableau de fréquences :</span>
                        </h4>

                        <p>a. Regroupez les durées d'utilisation dans les classes suivantes : [0 ; 2], [2 ; 4], [4 ; 6],
                            [6 ; 8].</p>
                        <div className="d-flex flex-wrap justify-content-between mt-2" style={{gap: '10px'}}>
                            <div className="table-responsive" style={{flex: '1', minWidth: '220px'}}>
                                <table className="table table-bordered text-center shadow-sm"
                                       style={{fontSize: '14px'}}>
                                    <thead className="table-light">
                                    <tr>
                                        <th>Durée (en heures)</th>
                                        <th>[0 ; 2]</th>
                                        <th>[2 ; 4]</th>
                                        <th>[4 ; 6]</th>
                                        <th>[6 ; 8]</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Effectif</td>
                                        <td>
                                            ............
                                        </td>
                                        <td>
                                            ............
                                        </td>
                                        <td>
                                            ............
                                        </td>
                                        <td>
                                            ............
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Fréquence (%)</td>
                                        <td>
                                            ............%
                                        </td>
                                        <td>
                                            ............%
                                        </td>
                                        <td>
                                            ............%
                                        </td>
                                        <td>
                                            ............%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Angle °</td>
                                        <td>
                                            ............°
                                        </td>
                                        <td>
                                            ............°
                                        </td>
                                        <td>
                                            ............°
                                        </td>
                                        <td>
                                            ............°
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Deuxième tableau - Proportionnalité */}
                            <div className="table-responsive" style={{flex: '0 0 auto', alignSelf: 'flex-start'}}>
                                <table className="table table-bordered text-center shadow-sm"
                                       style={{fontSize: '12px', maxWidth: '300px'}}>
                                    <thead className="table-light">
                                    <tr>
                                        <th>Fréquence</th>
                                        <th>100 %</th>
                                        <th>......</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Angle (degré)</td>
                                        <td>360°</td>
                                        <td>X°</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* Question 3 - Analyse des résultats */}
                        <h4 className="vect-title"
                            style={{display: 'inline', marginRight: '10px', marginTop: '0'}}>
                            <span>3. Analyse des résultats :</span>
                        </h4>

                        <div className="question-item">
                            <p style={{margin: '0', flex: '1'}}>
                                b. Quel pourcentage des familles regardent la télévision plus de 4 heures par jour ?
                                <span className="answer-dots"> ...............................................</span>
                            </p>
                            <div className="answer-container">
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex3_question3b')}
                                >
                                    <FaCheck/> {showCorrections.ex3_question3b ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex3_question3b && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex3_question3b}
                                </div>
                            )}
                        </div>

                        {/* Question 4 - Représentation graphique */}
                        <h4 className="vect-title"
                            style={{display: 'inline', marginRight: '10px', marginTop: '0'}}>
                            <span>4. Représentation graphique :</span>
                        </h4>

                        {/* ESPACE POUR DIAGRAMME */}
                        <div className="flex-shrink-0"
                             style={{maxWidth: '300px', cursor: 'pointer', marginLeft: '30%'}}>
                            <img
                                src={diagsecteur}
                                alt="Diagramme des dépenses"
                                onClick={() => openModal(diagsecteur, 'Diagramme des dépenses')}
                                style={{maxWidth: '100%', height: 'auto'}}
                            />
                        </div>
                    </div>
                </div>

                {/* PAGE 2 - EXERCICE 4 */}
                <div className="print-page">
                    <div className="activity-header mt-0">
                        <span className="activity-badge">EXERCICE 4</span>
                        <div className="activity-title">
                            <span className="course-title" style={{marginLeft: '60px'}}>
                             « Combien de temps dure l'opération de maintenance automatisée ? »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '15px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte2">
                                <p style={{textAlign: 'justify', fontSize: '14px', lineHeight: '1.4'}}>
                                    Nathan, un élève en maintenance, a effectué un stage au sein d'une entreprise qui
                                    utilise des systèmes automatisés pour la production.
                                    Son tuteur lui a demandé de comptabiliser la durée de ses interventions sur les
                                    équipements automatisés pendant une semaine.
                                </p>
                                <div className="flex-shrink-0"
                                     style={{maxWidth: '300px', cursor: 'pointer', marginLeft: '25%'}}>
                                    <img
                                        src={histoexo5}
                                        alt="Maintenance"
                                        className="img-fluid rounded shadow-sm compact-img"
                                        onClick={() => openModal(histoexo5, 'Maintenance')}
                                    />
                                </div>
                            </div>

                        </div>

                        {/* ESPACE POUR IMAGE */}
                        <div className="flex-shrink-0"
                             style={{maxWidth: '200px', cursor: 'pointer'}}>
                            <img
                                src={act4stat}
                                alt="Maintenance"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(act4stat, 'Maintenance')}
                            />
                        </div>
                    </div>

                    <div className="question-card mt-3">
                        {/* Section S'approprier */}
                        <h4 className="vect-title"
                            style={{display: 'inline', marginRight: '10px', marginTop: '0'}}>
                            <span>S'approprier :</span>
                        </h4>

                        <div className="question-item">
                            <p style={{margin: '0', flex: '1'}}>
                                Quelle est la variable de la série statistique représentée ?
                                <span className="answer-dots"> ...............................................</span>
                            </p>
                            <div className="answer-container">
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex4_question1')}
                                >
                                    <FaCheck/> {showCorrections.ex4_question1 ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex4_question1 && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex4_question1}
                                </div>
                            )}
                        </div>

                        {/* Section Réaliser */}
                        <h4 className="vect-title"
                            style={{display: 'inline', marginRight: '10px', marginTop: '0'}}>
                            <span>Réaliser :</span>
                        </h4>

                        <p>En utilisant l'histogramme fourni, compléter le tableau suivant :</p>

                        <div className="table-responsive mt-3">
                            <table className="table table-bordered text-center shadow-sm" style={{fontSize: '14px'}}>
                                <thead className="table-light">
                                <tr>
                                    <th>Durée de l'intervention (en min)</th>
                                    <th>[10 ; 20]</th>
                                    <th>[20 ; 30]</th>
                                    <th>[30 ; 40]</th>
                                    <th>[40 ; 50]</th>
                                    <th>[50 ; 60]</th>
                                    <th>[60 ; 70]</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Fréquence (en %)</td>
                                    <td>
                                        ............%
                                    </td>
                                    <td>
                                        ............%
                                    </td>
                                    <td>
                                        ............%
                                    </td>
                                    <td>
                                        ............%
                                    </td>
                                    <td>
                                        ............%
                                    </td>
                                    <td>
                                        ............%
                                    </td>
                                </tr>
                                <tr>
                                    <td>Effectif</td>
                                    <td>
                                        ...........
                                    </td>
                                    <td>
                                        ...........
                                    </td>
                                    <td>
                                        ...........
                                    </td>
                                    <td>
                                        ...........
                                    </td>
                                    <td>
                                        ...........
                                    </td>
                                    <td>
                                        ...........
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Section Analyser/Raisonner */}
                        <h4 className="vect-title"
                            style={{display: 'inline', marginRight: '10px', marginTop: '0'}}>
                            <span>Analyser/Raisonner :</span>
                        </h4>

                        <div className="question-item">
                            <p style={{margin: '0', flex: '1'}}>
                                Quel est le pourcentage des interventions de plus de 30 minutes ?
                                <span className="answer-dots"> ...............................................</span>
                            </p>
                            <div className="answer-container">
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex4_question3')}
                                >
                                    <FaCheck/> {showCorrections.ex4_question3 ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex4_question3 && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex4_question3}
                                </div>
                            )}
                        </div>

                        {/* Section Communiquer */}
                        <h4 className="vect-title"
                            style={{display: 'inline', marginRight: '10px', marginTop: '0'}}>
                            <span>Communiquer :</span>
                        </h4>

                        <p>Le gérant demande à Nathan de lui présenter ces résultats sous forme d'un diagramme à
                            secteurs :</p>
                        <ol>

                            <li>.Recopiez le tableau précédent dans un tableur.</li>
                            <li>.Créez un diagramme à secteurs (ou circulaire) qui représente les pourcentages pour
                                chaque intervalle de durée.
                            </li>
                        </ol>

                        {/* ESPACE POUR DIAGRAMME */}
                        {/*<div className="diagram-placeholder" style={{*/}
                        {/*    height: 'auto',*/}
                        {/*    margin: '10px 0',*/}
                        {/*    display: 'flex',*/}
                        {/*    justifyContent: 'center',*/}
                        {/*    alignItems: 'center',*/}
                        {/*    backgroundColor: '#ffffff',*/}
                        {/*    padding: '10px',*/}
                        {/*    borderRadius: '12px'*/}
                        {/*}}>*/}
                        {/*    <img src={diagrammeImage} alt="Diagramme" style={{*/}
                        {/*        maxWidth: '50%',*/}
                        {/*        height: 'auto',*/}
                        {/*        border: '2px solid #ccc',*/}
                        {/*        borderRadius: '8px'*/}
                        {/*    }}/>*/}
                        {/*</div>*/}

                        {/* Section Valider */}
                        <h4 className="vect-title"
                            style={{display: 'inline', marginRight: '10px', marginTop: '0'}}>
                            <span>Valider :</span>
                        </h4>

                        <div className="question-item">
                            <p style={{margin: '0', flex: '1'}}>
                                e. Le tuteur dit à Nathan que plus de la moitié des interventions durent entre 30 min et
                                50 min. A-t-il raison ?
                                <span className="answer-dots"> .................................................................
                                    ............................................................................</span>
                            </p>
                            <div className="answer-container">
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('ex4_question4e')}
                                >
                                    <FaCheck/> {showCorrections.ex4_question4e ? '✕' : '✓'}
                                </button>
                            </div>
                            {showCorrections.ex4_question4e && (
                                <div className="correction-box">
                                    <strong>Correction :</strong> {correctAnswers.ex4_question4e}
                                </div>
                            )}
                        </div>
                    </div>
                    <AutoEvaluationGrid/>
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

export default Exercice3et4StatUneVar;
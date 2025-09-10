import React, {useRef, useState} from 'react';
import {FaChartBar, FaPrint, FaCheck, FaCalculator, FaDice, FaMoneyBill, FaPhone} from 'react-icons/fa';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import '../../../../../styles/activites.css';
import {useLocation, useParams} from "react-router-dom";
import BackButton from "../../../../../components/navigation/BackButton";
import PrintManager from "../../../../../utils/PrintManager";
import Automatismes2 from "../../../../../config/Automatismes2";
import {FcBullish, FcMoneyTransfer, FcCustomerSupport} from "react-icons/fc";
import ModalImage from "../../../../../utils/ModalImage";
import act4stat from "../../../../../assets/act4stat.png";
import diagsecteur from "../../../../../assets/diagsecteur.png";
import act5stat from "../../../../../assets/act5stat.png";
import histostat5 from "../../../../../assets/histostat5.png"

const StatUneVarAct4et5 = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    // États pour l'activité 4
    const [depenses, setDepenses] = useState({
        achat: 3500,
        entretien: 3000,
        deplacement: 1500,
        arbitrage: 500,
        charges: 1300,
        assurances: 200
    });

    const [frequencesAct4, setFrequencesAct4] = useState({
        achat: '',
        entretien: '',
        deplacement: '',
        arbitrage: '',
        charges: '',
        assurances: ''
    });

    const [angles, setAngles] = useState({
        achat: '',
        entretien: '',
        deplacement: '',
        arbitrage: '',
        charges: '',
        assurances: ''
    });

    // États pour l'activité 5
    const [frequencesAct5, setFrequencesAct5] = useState({
        classe0_5: '',
        classe5_10: '',
        classe10_15: '',
        classe15_20: '',
        classe20_25: '',
        classe25_30: ''
    });

    const [effectifsAct5, setEffectifsAct5] = useState({
        classe0_5: '',
        classe5_10: '',
        classe10_15: '',
        classe15_20: '',
        classe20_25: '',
        classe25_30: ''
    });

    const [answers, setAnswers] = useState({
        question4_1: '',
        question5_1: '',
        question5_2: '',
        question5_3: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        question4_1: false,
        question5_1: false,
        question5_2: false,
        question5_3: false
    });

    // Réponses attendues
    const correctAnswers = {
        question4_1: "Le diagramme à secteurs (camembert) est le plus adapté pour représenter la répartition des dépenses.",
        question5_1: "La variable de la série statistique représentée est la durée des appels (en minutes).",
        question5_2: "Le pourcentage des appels de plus de 10 minutes est de 65% (25% + 20% + 15% + 5%).",
        question5_3: "Oui, le tuteur a raison car 45% des appels (25% + 20%) durent entre 10 et 20 minutes, ce qui représente près de la moitié des appels."
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
        setAnswers(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleFrequenceChangeAct4 = (depense, value) => {
        setFrequencesAct4(prev => ({
            ...prev,
            [depense]: value
        }));
    };

    const handleAngleChange = (depense, value) => {
        setAngles(prev => ({
            ...prev,
            [depense]: value
        }));
    };

    const handleFrequenceChangeAct5 = (classe, value) => {
        setFrequencesAct5(prev => ({
            ...prev,
            [classe]: value
        }));
    };

    const handleEffectifChangeAct5 = (classe, value) => {
        setEffectifsAct5(prev => ({
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

        if (!answers[field] && !showCorrections[field]) {
            setAnswers(prev => ({
                ...prev,
                [field]: correctAnswers[field]
            }));
        }
    };

    // Calcul du total des dépenses pour l'activité 4
    const totalDepenses = Object.values(depenses).reduce((sum, value) => sum + value, 0);

    if (className === 'Secondeastat-une-variableact4et5') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>
            <div className="tp-container" id="stat-act4et5-content" ref={contentRef}>
                <PrintManager
                    contentRef={contentRef}
                    activityName="Statistiques_Depenses_DureeAppels_Act4et5"
                    pageCount={3}
                    quality="hd"
                />

                {/* PAGE 1 - ACTIVITÉ 4 */}
                <div className="print-page">
                    <div style={{marginTop: '-12px'}}>
                        <Automatismes2/>
                    </div>
                    <div className="activity-header mt-0">
                        <span className="activity-badge">ACTIVITÉ 4</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaDice/> <FcMoneyTransfer/> « Comment sont réparties les dépenses du club ? »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '15px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <h5 className="mb-3 text-primary fw-bold">
                                    💰 "Analyse des dépenses annuelles du club"
                                </h5>

                                <p style={{textAlign: 'justify', fontSize: '14px', lineHeight: '1.3'}}>
                                    Madame Jacquet, votre tutrice de stage, vous demande d'assister à une réunion pour
                                    analyser
                                    des dépenses annuelles de l'équipe, présentés dans un tableau. Vous devrez ensuite
                                    proposer
                                    des solutions pour améliorer la gestion financière du club.
                                </p>

                                <div className="objectif-box" style={{marginTop: '10px', padding: '10px'}}>
                                    <div className="objectif-title"><strong style={{color: 'orangered'}}>Objectif
                                        :</strong> 🎯 Comprendre comment présenter un bilan sous forme de graphique à
                                        l'assemblée générale du club.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ESPACE POUR IMAGE */}
                        <div className="flex-shrink-0"
                             style={{maxWidth: '250px', cursor: 'pointer', marginTop: '10px'}}>
                            <img
                                src={act4stat}
                                alt="CDiagramme des dépenses"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(act4stat, 'Diagramme des dépenses')}
                            />
                        </div>

                        <div className="question-content2">
                            <h4 className="vect-title2"
                                style={{display: 'inline', marginRight: '10px', marginBottom: '0'}}>
                                <span>S'approprier</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                1) Calculer le total des dépenses puis les pourcentages. ✅
                            </p>

                            <div>
                                <table className="table table-bordered text-center shadow-sm mt"
                                       style={{fontSize: '12px'}}>
                                    <thead className="table-light">
                                    <tr>
                                        <th>N° dépense</th>
                                        <th>Nature des dépenses</th>
                                        <th>Montants (en €)</th>
                                        <th>Pourcentage de la dépense totale</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Achat d'équipement</td>
                                        <td>3 500</td>
                                        <td>
                                            ........... %
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Entretien d'équipement</td>
                                        <td>3 000</td>
                                        <td>
                                            ........... %
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Frais de déplacement</td>
                                        <td>1 500</td>
                                        <td>
                                            ........... %
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Frais d'arbitrage</td>
                                        <td>500</td>
                                        <td>
                                            ........... %
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Part des charges du stade</td>
                                        <td>1 300</td>
                                        <td>
                                            ........... %
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Assurances</td>
                                        <td>200</td>
                                        <td>
                                            ........... %
                                        </td>
                                    </tr>
                                    <tr className="table-info">
                                        <td colSpan="2"><strong>Total</strong></td>
                                        <td><strong>{totalDepenses.toLocaleString()} €</strong></td>
                                        <td><strong>100%</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>2) On veut représenter cette répartition par un diagramme à secteurs.</p>
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>Réaliser</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                Calculer les angles à reporter dans ce tableau.
                            </p>

                            <div className="d-flex flex-wrap justify-content-between mt-2" style={{gap: '10px'}}>
                                {/* Premier tableau - Fréquences et Angles */}
                                <div className="table-responsive" style={{flex: '1', minWidth: '220px'}}>
                                    <table className="table table-bordered text-center shadow-sm"
                                           style={{fontSize: '12px'}}>
                                        <thead className="table-light">
                                        <tr>
                                            <th>N° dépense</th>
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                            <th>4</th>
                                            <th>5</th>
                                            <th>6</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Fréquence</td>
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
                                        <tr>
                                            <td>Angle (en degrés)</td>
                                            <td>
                                                ........... °
                                            </td>
                                            <td>
                                                ........... °
                                            </td>
                                            <td>
                                                ........... °
                                            </td>
                                            <td>
                                                ........... °
                                            </td>
                                            <td>
                                                ........... °
                                            </td>
                                            <td>
                                                ........... °
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
                            <h4 className="vect-title"
                                style={{display: 'inline', marginRight: '10px', marginTop: '10px'}}>
                                <span>Communiquer</span>
                            </h4>
                            <p>
                                3) Construire le diagramme sur ce cercle rapporteur.
                            </p>
                            <div className="d-flex flex-wrap justify-content-between align-items-start mt-2"
                                 style={{gap: '20px'}}>
                                {/* Contenu à gauche */}
                                <div style={{flex: '1', minWidth: '300px'}}>
                                    <div className="question-item" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        flexWrap: 'wrap',
                                        marginBottom: '10px'
                                    }}>
                                        <p style={{margin: '0', flex: '1'}}>
                                            4) Quel type de diagramme est le plus adapté pour représenter cette série
                                            statistique ?
                                            <span
                                                className="answer-dots"> ...............................................
                                                ................................................</span>
                                        </p>
                                        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                            <button
                                                className="correction-btnoptic"
                                                onClick={() => toggleCorrection('question4_1')}
                                                style={{padding: '2px 6px', fontSize: '12px'}}
                                            >
                                                <FaCheck/> {showCorrections.question4_1 ? '✕' : '✓'}
                                            </button>
                                        </div>
                                    </div>

                                    {showCorrections.question4_1 && (
                                        <div className="correction-box" style={{
                                            backgroundColor: '#e8f5e9',
                                            padding: '8px',
                                            borderRadius: '4px',
                                            margin: '5px 0'
                                        }}>
                                            <strong>Correction :</strong> {correctAnswers.question4_1}
                                        </div>
                                    )}
                                    <br/>
                                    <p className="mt-3" style={{fontSize: '14px', fontStyle: 'italic'}}>
                                        Une série statistique à variable discrète ou qualitative peut être représentée
                                        par un
                                        diagramme à secteurs.
                                    </p>
                                </div>

                                {/* Image à droite */}
                                <div className="flex-shrink-0" style={{maxWidth: '300px', cursor: 'pointer'}}>
                                    <img
                                        src={diagsecteur}
                                        alt="Diagramme des dépenses"

                                        onClick={() => openModal(diagsecteur, 'Diagramme des dépenses')}
                                        style={{maxWidth: '100%', height: 'auto', marginTop: '-60px'}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PAGE 2 - ACTIVITÉ 5 */}
                <div className="print-page">
                    <div className="activity-header mt-0">
                        <span className="activity-badge">ACTIVITÉ 5</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaDice/> <FcCustomerSupport/> « Combien de temps passent les agents au service client ? »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <h5 className="mb-3 text-primary fw-bold">
                                    📞 "Analyse des durées d'appels au service client"
                                </h5>

                                <p style={{textAlign: 'justify', fontSize: '15px', lineHeight: '1.3'}}>
                                    Marie a effectué un stage au service client d'une entreprise. Son tuteur lui a
                                    demandé
                                    de comptabiliser la durée des appels traités par les agents. Un total de 100 appels
                                    a été réalisé.
                                </p>

                                <div className="objectif-box" style={{marginTop: '10px', padding: '10px'}}>
                                    <div className="objectif-title"><strong style={{color: 'orangered'}}>Objectif
                                        :</strong> 🎯 Comprendre comment présenter ces durées d'appels et en extraire des
                                        informations utiles.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ESPACE POUR IMAGE */}
                        <div className="flex-shrink-0"
                             style={{maxWidth: '250px', cursor: 'pointer', marginTop: '10px'}}>
                            <img
                                src={act5stat}
                                alt="clients"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(act5stat, 'clients')}
                            />
                        </div>
                    </div>

                    {/* Section S'approprier */}
                    <div className="question-card mt-1 mb-0">
                        <div className="question-content2">
                            <h4 className="vect-title"
                                style={{display: 'inline', marginRight: '10px', marginTop: '0'}}>
                                <span>S'approprier</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                1) Veuillez analyser l'histogramme et ses données afin d'interpréter la répartition des
                                durées des appels.
                            </p>

                            {/* ESPACE POUR HISTOGRAMME */}
                            <div className="flex-shrink-0"
                                 style={{maxWidth: '350px', cursor: 'pointer', marginTop: '5px', marginLeft: '30%'}}>
                                <img
                                    src={histostat5}
                                    alt="clients"
                                    className="img-fluid rounded shadow-sm compact-img"
                                    onClick={() => openModal(histostat5, 'histostat5')}
                                />
                            </div>

                            <div className="question-item" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                flexWrap: 'wrap',
                                marginBottom: '15px'
                            }}>
                                <p style={{margin: '0', flex: '1'}}>
                                    Quelle est la variable de la série statistique représentée ?
                                    <span
                                        className="answer-dots"> .................................................................................</span>
                                </p>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question5_1')}
                                        style={{padding: '2px 6px', fontSize: '12px'}}
                                    >
                                        <FaCheck/> {showCorrections.question5_1 ? '✕' : '✓'}
                                    </button>
                                </div>
                            </div>

                            {showCorrections.question5_1 && (
                                <div className="correction-box" style={{
                                    backgroundColor: '#e8f5e9',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    margin: '5px 0'
                                }}>
                                    <strong>Correction :</strong> {correctAnswers.question5_1}
                                </div>
                            )}
                        </div>

                        <div className="question-content">
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>Réaliser</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                2) En utilisant l'histogramme, compléter le tableau suivant :
                            </p>

                            <div className="table-responsive mt-2">
                                <table className="table table-bordered text-center shadow-sm"
                                       style={{fontSize: '12px'}}>
                                    <thead className="table-light">
                                    <tr>
                                        <th>Durée de l'appel (en min)</th>
                                        <th>[0; 5]</th>
                                        <th>[5; 10]</th>
                                        <th>[10; 15]</th>
                                        <th>[15; 20]</th>
                                        <th>[20; 25]</th>
                                        <th>[25; 30]</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Fréquence (en %)</td>
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
                        </div>

                        <div className="question-content">
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>Analyser/Raisonner</span>
                            </h4>
                            <div className="question-item" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                flexWrap: 'wrap',
                                marginBottom: '15px'
                            }}>
                                <p style={{margin: '0', flex: '1'}}>
                                    3) Quel est le pourcentage des appels de plus de 10 minutes ?
                                    <span
                                        className="answer-dots"> .................................................................................</span>
                                </p>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question5_2')}
                                        style={{padding: '2px 6px', fontSize: '12px'}}
                                    >
                                        <FaCheck/> {showCorrections.question5_2 ? '✕' : '✓'}
                                    </button>
                                </div>
                            </div>

                            {showCorrections.question5_2 && (
                                <div className="correction-box" style={{
                                    backgroundColor: '#e8f5e9',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    margin: '5px 0'
                                }}>
                                    <strong>Correction :</strong> {correctAnswers.question5_2}
                                </div>
                            )}
                        </div>

                        <div className="question-content">
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>Communiquer</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                4) Le gérant demande à Marie de lui présenter ces résultats sous forme d'un diagramme à
                                secteurs.
                                Recopier le tableau précédent dans un tableur et afficher le diagramme à secteurs.
                            </p>

                            {/* ESPACE POUR DIAGRAMME CIRÉULAIRE */}
                            <div className="flex-shrink-0"
                                 style={{maxWidth: '300px', cursor: 'pointer', marginLeft: '32%'}}>
                                <img
                                    src={diagsecteur}
                                    alt="Diagramme des dépenses"

                                    onClick={() => openModal(diagsecteur, 'Diagramme des dépenses')}
                                    style={{maxWidth: '100%', height: 'auto'}}
                                />
                            </div>
                        </div>

                        <div className="question-content">
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>Valider</span>
                            </h4>
                            <div className="question-item" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                flexWrap: 'wrap',
                                marginBottom: '15px'
                            }}>
                                <p style={{margin: '0', flex: '1'}}>
                                    5) Le tuteur dit à Marie que plus de la moitié des appels durent entre 10 min et 20
                                    min. A-t-il raison ?
                                    <span
                                        className="answer-dots"> .........................................................................................
                                        ..........................................................................................................................................</span>
                                </p>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question5_3')}
                                        style={{padding: '2px 6px', fontSize: '12px'}}
                                    >
                                        <FaCheck/> {showCorrections.question5_3 ? '✕' : '✓'}
                                    </button>
                                </div>
                            </div>

                            {showCorrections.question5_3 && (
                                <div className="correction-box" style={{
                                    backgroundColor: '#e8f5e9',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    margin: '5px 0'
                                }}>
                                    <strong>Correction :</strong> {correctAnswers.question5_3}
                                </div>
                            )}

                            <p className="mt-3" style={{fontSize: '14px', fontStyle: 'italic'}}>
                                Une série à variable continue dont les valeurs sont regroupées par intervalles ou
                                classes peut être représentée par un histogramme.
                            </p>
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

export default StatUneVarAct4et5;
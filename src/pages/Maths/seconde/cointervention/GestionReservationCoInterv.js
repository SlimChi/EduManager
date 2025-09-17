import React, {useRef, useState} from 'react';
import {
    FaCheck, FaCalculator, FaChartLine, FaPercent, FaEuroSign,
    FaHotel, FaBed, FaStar, FaClipboardList, FaInfoCircle
} from 'react-icons/fa';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import AutoEvaluationGrid from '../../../../config/AutoEvaluationGrid';
import hotelExterior from '../../../../assets/hotelRoom.png';
import hotelRoom from '../../../../assets/hotelRoom.png';
import ModalImage from '../../../../utils/ModalImage';
import Automatismes from "../../../../config/Automatismes";
import AutoResizeTextarea from '../../../../config/AutoResizeTextarea';

const GestionReservationCoInterv = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [showConclusion, setShowConclusion] = useState(false);
    const [activeSteps, setActiveSteps] = useState([]);

    // États pour les réponses des exercices
    const [exercice1, setExercice1] = useState({
        tauxOccupation: ['', '', '']
    });

    const [exercice2, setExercice2] = useState({
        reductions: ['', '', ''],
        prixFinaux: ['', '', '']
    });

    const [exercice3, setExercice3] = useState({
        quantitesCommander: ['', '', '']
    });

    const [exercice4, setExercice4] = useState({
        nombreAvis: ['', '', '']
    });

    const [exercice5, setExercice5] = useState({
        totalReservations: '',
        moyenneReservations: '',
        augmentationPrevue: '',
        reservationsPrevues: ''
    });

    // Réponses correctes
    const correctAnswers = {
        exercice1: {
            tauxOccupation: [40, 60, 80]
        },
        exercice2: {
            reductions: [12, 18, 30],
            prixFinaux: [68, 102, 170]
        },
        exercice3: {
            quantitesCommander: [50, 30, 0]
        },
        exercice4: {
            nombreAvis: [70, 20, 10]
        },
        exercice5: {
            totalReservations: 330,
            moyenneReservations: 165,
            augmentationPrevue: 8.25,
            reservationsPrevues: 173.25
        },
        questions: {
            q1: "Le taux d'occupation se calcule en divisant le nombre de chambres occupées par le nombre total de chambres, puis en multipliant par 100 pour obtenir un pourcentage.",
            q2: "Pour calculer une réduction, on multiplie le prix initial par le taux de réduction (en décimal). Par exemple : 80€ avec 15% de réduction → 80 × 0,15 = 12€ de réduction.",
            q3: "La quantité à commander est la différence entre le stock cible et le stock actuel. Si le stock actuel est supérieur au stock cible, aucune commande n'est nécessaire.",
            q4: "Pour convertir un pourcentage en nombre sur 100, on utilise directement la valeur du pourcentage. Par exemple, 70% correspond à 70 avis positifs sur 100 clients.",
            q5: "Pour prévoir les réservations, on calcule d'abord la moyenne des réservations passées, puis on applique le taux d'augmentation prévu."
        }
    };

    const [showCorrections, setShowCorrections] = useState({
        exercice1: false,
        exercice2: false,
        exercice3: false,
        exercice4: false,
        exercice5: false,
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false
    });

    const explanations = {
        exercice1: {
            tauxOccupation: "Taux d'occupation = (Réservations / Total chambres) × 100"
        },
        exercice2: {
            reductions: "Réduction = Prix initial × Taux réduction (15% = 0,15)",
            prixFinaux: "Prix final = Prix initial - Réduction"
        },
        exercice3: {
            quantitesCommander: "Quantité à commander = Stock cible - Stock actuel"
        },
        exercice4: {
            nombreAvis: "Nombre d'avis = Pourcentage (car calcul pour 100 clients)"
        },
        exercice5: {
            totalReservations: "Total = Semaine 1 + Semaine 2",
            moyenneReservations: "Moyenne = Total / 2",
            augmentationPrevue: "Augmentation = Moyenne × 5%",
            reservationsPrevues: "Prévision = Moyenne + Augmentation"
        }
    };

    const [modalState, setModalState] = useState({
        show: false, imageUrl: '', altText: '',
    });

    const [questionAnswers, setQuestionAnswers] = useState({
        q1: '', q2: '', q3: '', q4: '', q5: ''
    });

    const [analyseAnswers, setAnalyseAnswers] = useState({
        tendances: '',
        comparaison: '',
        promotions: '',
        previsions: '',
        strategies: ''
    });

    const handleInputChange = (setExercice, field, index, value) => {
        if (index !== undefined) {
            setExercice(prev => {
                const newValues = [...prev[field]];
                newValues[index] = value;
                return {...prev, [field]: newValues};
            });
        } else {
            setExercice(prev => ({...prev, [field]: value}));
        }
    };

    const handleQuestionChange = (question, value) => {
        setQuestionAnswers(prev => ({...prev, [question]: value}));
    };

    const handleAnalyseChange = (field, value) => {
        setAnalyseAnswers(prev => ({...prev, [field]: value}));
    };

    const toggleCorrection = (field) => {
        setShowCorrections(prev => ({...prev, [field]: !prev[field]}));

        if (!showCorrections[field]) {
            if (field === 'exercice1') {
                setExercice1(prev => ({
                    tauxOccupation: prev.tauxOccupation.map((val, i) => val === '' ? correctAnswers.exercice1.tauxOccupation[i] : val)
                }));
            } else if (field === 'exercice2') {
                setExercice2(prev => ({
                    reductions: prev.reductions.map((val, i) => val === '' ? correctAnswers.exercice2.reductions[i] : val),
                    prixFinaux: prev.prixFinaux.map((val, i) => val === '' ? correctAnswers.exercice2.prixFinaux[i] : val)
                }));
            } else if (field === 'exercice3') {
                setExercice3(prev => ({
                    quantitesCommander: prev.quantitesCommander.map((val, i) => val === '' ? correctAnswers.exercice3.quantitesCommander[i] : val)
                }));
            } else if (field === 'exercice4') {
                setExercice4(prev => ({
                    nombreAvis: prev.nombreAvis.map((val, i) => val === '' ? correctAnswers.exercice4.nombreAvis[i] : val)
                }));
            } else if (field === 'exercice5') {
                setExercice5(prev => ({
                    totalReservations: prev.totalReservations === '' ? correctAnswers.exercice5.totalReservations : prev.totalReservations,
                    moyenneReservations: prev.moyenneReservations === '' ? correctAnswers.exercice5.moyenneReservations : prev.moyenneReservations,
                    augmentationPrevue: prev.augmentationPrevue === '' ? correctAnswers.exercice5.augmentationPrevue : prev.augmentationPrevue,
                    reservationsPrevues: prev.reservationsPrevues === '' ? correctAnswers.exercice5.reservationsPrevues : prev.reservationsPrevues
                }));
            } else if (field.startsWith('q')) {
                setQuestionAnswers(prev => ({
                    ...prev,
                    [field]: prev[field] === '' ? correctAnswers.questions[field] : prev[field]
                }));
            }
        }
    };

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState(prev => ({...prev, show: false}));
    };

    const toggleStep = (stepNumber) => {
        setActiveSteps(prev => prev.includes(stepNumber) ? prev.filter(step => step !== stepNumber) : [...prev, stepNumber]);
    };

    const steps = [
        "Taux d'occupation : (Réservations / Total chambres) × 100",
        "Réduction : Prix initial × Taux réduction",
        "Commande : Stock cible - Stock actuel",
        "Conversion : Pourcentage → Nombre/100",
        "Prévision : Moyenne + (Moyenne × Taux augmentation)"
    ];

    const contentRef = useRef();

    if (className === 'Secondeaequations-premier-degre') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" id="reservation-content" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Gestion_Reservation_Hoteliere"
                pageCount={4}
                quality="hd"
            />

            {/* Page 1 - Automatismes */}
            <div className="print-page">
                <Automatismes/>
            </div>

            {/* Page 2 - Activité 1 et 2 */}
            <div className="print-page">
                <div className="activity-header">
                    <span className="activity-badge">EXERCICE 1</span>
                    <div className="activity-title">
                            <span className="course-title">
                                <FaClipboardList/> Gestion des Réservations et Projections
                            </span>
                    </div>
                </div>

                <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                    <div style={{flex: 1, minWidth: '300px'}}>
                        <div className="renovation-contexte2">
                            <p>
                                <strong>🏨 Vous êtes réceptionniste dans un hôtel</strong> et devez gérer les
                                réservations de chambres et anticiper le taux d'occupation.
                            </p>
                        </div>
                        <div className="objectif-box" style={{marginTop: ' 10px', marginBottom: '10px'}}>
                            <p><strong> Objectif :</strong> 🎯 "Savoir calculer et interpréter un taux d'occupation."</p>
                        </div>
                    </div>

                    {/*<div className="flex-shrink-0"*/}
                    {/*     style={{maxWidth: '250px', cursor: 'pointer', marginTop: '10px', marginBottom: '10px'}}>*/}
                    {/*    <img*/}
                    {/*        src={hotelExterior}*/}
                    {/*        alt="Hôtel"*/}
                    {/*        className="img-fluid rounded shadow-sm compact-img"*/}
                    {/*        onClick={() => openModal(hotelExterior, 'Hôtel')}*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>

                <section className="tp-section compact">
                    <h3 className="compact-title p-0">
                        <FaCalculator/> Tableau de calcul du taux d'occupation
                    </h3>

                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead>
                            <tr>
                                <th>Jour</th>
                                <th>Réservations</th>
                                <th>Total chambres</th>
                                <th>Taux d'occupation (%)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[0, 1, 2].map((index) => (<tr key={index}>
                                <td>Jour {index + 1}</td>
                                <td>{[20, 30, 40][index]}</td>
                                <td>50</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice1 ? 'correction-active' : ''}`}
                                        value={exercice1.tauxOccupation[index]}
                                        onChange={(e) => handleInputChange(setExercice1, 'tauxOccupation', index, e.target.value)}
                                    />
                                </td>
                            </tr>))}
                            </tbody>
                        </table>
                    </div>

                    <div className="questions-container m-0">
                        <div className="questions-column">
                            <div className="question-card">
                                <p>Interpréter les résultats : Quel jour l'hôtel est-il le plus occupé ? Que
                                    pourriez-vous recommander pour améliorer les réservations ?</p>
                                <AutoResizeTextarea
                                    className={`answer-input ${showCorrections.q1 ? 'correction-active' : ''}`}
                                    minRows={3}
                                    maxRows={6}
                                    value={questionAnswers.q1}
                                    onChange={(e) => handleQuestionChange('q1', e.target.value)}
                                />
                                <button
                                    className="correction-btn"
                                    onClick={() => toggleCorrection('q1')}
                                >
                                    <FaCheck/> {showCorrections.q1 ? 'Masquer' : 'Voir'} correction
                                </button>
                            </div>
                        </div>
                    </div>

                    <button
                        className="correction-btn"
                        onClick={() => toggleCorrection('exercice1')}
                    >
                        <FaCheck/> {showCorrections.exercice1 ? 'Masquer' : 'Voir'} correction
                    </button>

                    <div className="activity-header" style={{marginTop: '30px'}}>
                        <span className="activity-badge">EXERCICE 2</span>
                        <div className="activity-title">
                                <span className="course-title">
                                    <FaEuroSign/> Calcul des Prix et Réductions
                                </span>
                        </div>
                    </div>

                    <div className="renovation-contexte2 mt-0">
                        <p>
                            <strong>L'hôtel propose une réduction de 15% pour les séjours de 3 nuits ou plus.</strong>
                        </p>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead>
                            <tr>
                                <th>Type de chambre</th>
                                <th>Prix initial (€)</th>
                                <th>Réduction (15%) (€)</th>
                                <th>Prix final après réduction (€)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[0, 1, 2].map((index) => (<tr key={index}>
                                <td>{['Chambre standard', 'Chambre supérieure', 'Suite'][index]}</td>
                                <td>{[80, 120, 200][index]}</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice2 ? 'correction-active' : ''}`}
                                        value={exercice2.reductions[index]}
                                        onChange={(e) => handleInputChange(setExercice2, 'reductions', index, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice2 ? 'correction-active' : ''}`}
                                        value={exercice2.prixFinaux[index]}
                                        onChange={(e) => handleInputChange(setExercice2, 'prixFinaux', index, e.target.value)}
                                    />
                                </td>
                            </tr>))}
                            </tbody>
                        </table>
                    </div>

                    <button
                        className="correction-btn"
                        onClick={() => toggleCorrection('exercice2')}
                    >
                        <FaCheck/> {showCorrections.exercice2 ? 'Masquer' : 'Voir'} correction
                    </button>

                </section>
            </div>

            {/* Page 3 - Activité 3 et 4 */}
            <div className="print-page">
                <section className="tp-section compact">

                    <div className="activity-header mt-0">
                        <span className="activity-badge">EXERCICE 3</span>
                        <div className="activity-title">
                                <span className="course-title">
                                    <FaBed/> Gestion des Stocks de Fournitures Hôtelières
                                </span>
                        </div>
                    </div>

                    <div className="renovation-contexte2 mt-0">
                        <p>
                            <strong>Vous devez gérer les fournitures de l'hôtel</strong> et déterminer les quantités à
                            commander.
                        </p>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead>
                            <tr>
                                <th>Fourniture</th>
                                <th>Stock actuel</th>
                                <th>Stock cible</th>
                                <th>Quantité à commander</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[0, 1, 2].map((index) => (<tr key={index}>
                                <td>{['Serviettes', 'Produits de nettoyage', 'Savons'][index]}</td>
                                <td>{[100, 50, 200][index]}</td>
                                <td>{[150, 80, 150][index]}</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice3 ? 'correction-active' : ''}`}
                                        value={exercice3.quantitesCommander[index]}
                                        onChange={(e) => handleInputChange(setExercice3, 'quantitesCommander', index, e.target.value)}
                                    />
                                </td>
                            </tr>))}
                            </tbody>
                        </table>
                    </div>

                    <button
                        className="correction-btn"
                        onClick={() => toggleCorrection('exercice3')}
                    >
                        <FaCheck/> {showCorrections.exercice3 ? 'Masquer' : 'Voir'} correction
                    </button>

                    <div className="questions-column">
                        <div className="question-card">
                            <p>3. Comment déterminez-vous la quantité à commander pour une fourniture ?</p>
                            <AutoResizeTextarea
                                className={`answer-input ${showCorrections.q3 ? 'correction-active' : ''}`}
                                minRows={2}
                                maxRows={4}
                                value={questionAnswers.q3}
                                onChange={(e) => handleQuestionChange('q3', e.target.value)}
                            />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('q3')}
                            >
                                <FaCheck/> {showCorrections.q3 ? 'Masquer' : 'Voir'} correction
                            </button>
                        </div>
                    </div>

                    <div className="activity-header" style={{marginTop: '30px'}}>
                        <span className="activity-badge">EXERCICE 4</span>
                        <div className="activity-title">
                                <span className="course-title">
                                    <FaStar/> Analyse des Retours Clients
                                </span>
                        </div>
                    </div>

                    <div className="renovation-contexte2 mt-0">
                        <p>
                            <strong>Vous analysez les avis clients</strong> pour améliorer la satisfaction.
                        </p>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead>
                            <tr>
                                <th>Type d'avis</th>
                                <th>Pourcentage</th>
                                <th>Nombre d'avis (pour 100 clients)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[0, 1, 2].map((index) => (<tr key={index}>
                                <td>{['Positifs', 'Neutres', 'Négatifs'][index]}</td>
                                <td>{['70%', '20%', '10%'][index]}</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice4 ? 'correction-active' : ''}`}
                                        value={exercice4.nombreAvis[index]}
                                        onChange={(e) => handleInputChange(setExercice4, 'nombreAvis', index, e.target.value)}
                                    />
                                </td>
                            </tr>))}
                            </tbody>
                        </table>
                    </div>

                    <div className="questions-container m-0">
                        <div className="questions-column">
                            <div className="question-card">
                                <p>Proposer des solutions pour améliorer la satisfaction des clients, en particulier
                                    pour ceux qui ont laissé des avis négatifs.</p>
                                <AutoResizeTextarea
                                    className={`answer-input ${showCorrections.q4 ? 'correction-active' : ''}`}
                                    minRows={3}
                                    maxRows={6}
                                    value={questionAnswers.q4}
                                    onChange={(e) => handleQuestionChange('q4', e.target.value)}
                                />
                                <button
                                    className="correction-btn"
                                    onClick={() => toggleCorrection('q4')}
                                >
                                    <FaCheck/> {showCorrections.q4 ? 'Masquer' : 'Voir'} correction
                                </button>
                            </div>
                        </div>
                    </div>

                    <button
                        className="correction-btn"
                        onClick={() => toggleCorrection('exercice4')}
                    >
                        <FaCheck/> {showCorrections.exercice4 ? 'Masquer' : 'Voir'} correction
                    </button>
                </section>
            </div>

            {/* Page 4 - Activité 5 et Analyse */}
            <div className="print-page">
                <section className="tp-section compact">
                    <div className="activity-header" style={{marginTop: '30px'}}>
                        <span className="activity-badge">EXERCICE 5</span>
                        <div className="activity-title">
                                <span className="course-title">
                                    <FaChartLine/> Prévisions des Ventes
                                </span>
                        </div>
                    </div>

                    <div className="renovation-contexte mt-0">
                        <p>
                            <strong>Vous prévoyez les réservations pour la semaine suivante</strong> en vous basant sur
                            les données des semaines précédentes.
                        </p>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead>
                            <tr>
                                <th>Semaine</th>
                                <th>Réservations</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Semaine 1</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>Semaine 2</td>
                                <td>180</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice5 ? 'correction-active' : ''}`}
                                        value={exercice5.totalReservations}
                                        onChange={(e) => handleInputChange(setExercice5, 'totalReservations', null, e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Moyenne</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice5 ? 'correction-active' : ''}`}
                                        value={exercice5.moyenneReservations}
                                        onChange={(e) => handleInputChange(setExercice5, 'moyenneReservations', null, e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Augmentation prévue (5%)</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice5 ? 'correction-active' : ''}`}
                                        value={exercice5.augmentationPrevue}
                                        onChange={(e) => handleInputChange(setExercice5, 'augmentationPrevue', null, e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Réservations prévues Semaine 3</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice5 ? 'correction-active' : ''}`}
                                        value={exercice5.reservationsPrevues}
                                        onChange={(e) => handleInputChange(setExercice5, 'reservationsPrevues', null, e.target.value)}
                                    />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <button
                        className="correction-btn"
                        onClick={() => toggleCorrection('exercice5')}
                    >
                        <FaCheck/> {showCorrections.exercice5 ? 'Masquer' : 'Voir'} correction
                    </button>

                    <div className="info-bubble property p-2">
                        <div className="info-bubble-title ">
                            <FaInfoCircle/> Méthode de calcul
                        </div>
                        {steps.map((step, index) => (<li
                            key={index}
                            className={activeSteps.includes(index + 1) ? 'active' : ''}
                            onClick={() => toggleStep(index + 1)}
                        >
                            {step}
                        </li>))}
                    </div>
                </section>

                <AutoEvaluationGrid/>

                <footer className="tp-footer compact">
                    <p className="compact-text">Mathématiques -Première - Gestion Hôtelière</p>
                    <p className="compact-text">Co-intervention - Gestion des Réservations</p>
                </footer>
            </div>

            {modalState.show && (<ModalImage
                imageUrl={modalState.imageUrl}
                altText={modalState.altText}
                onClose={closeModal}
            />)}
        </div>
    </>);
};

export default GestionReservationCoInterv;
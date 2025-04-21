import React, {useRef, useState} from 'react';
import {
    FaCheck, FaCalculator, FaChartLine, FaPercent, FaEuroSign, FaShoppingCart, FaFileInvoice, FaInfoCircle
} from 'react-icons/fa';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import AutoEvaluationGrid from '../../../../config/AutoEvaluationGrid';
import boutique from '../../../../assets/boutiquesport.png';
import facture from '../../../../assets/magasinstylo.jpg';
import ModalImage from '../../../../utils/ModalImage';
import Automatismes from "../../../../config/Automatismes";
import AutoResizeTextarea from '../../../../config/AutoResizeTextarea';

const CalculCommerciauxCoIntervention = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [showConclusion, setShowConclusion] = useState(false);
    const [activeSteps, setActiveSteps] = useState([]);

    // États pour les réponses des exercices
    const [exercice1, setExercice1] = useState({
        reductions: ['', '', '', ''], prixReduits: ['', '', '', ''], prixFinaux: ['', '', '', '']
    });

    const [exercice2, setExercice2] = useState({
        totalsHT: ['', '', ''],
        montantsTVA: ['', '', ''],
        totalsTTC: ['', '', ''],
        totalGeneralHT: '',
        totalGeneralTVA: '',
        totalGeneralTTC: ''
    });

    const [exercice3, setExercice3] = useState({
        prixVente: ['', '', ''], remises: ['', '', ''], prixFinaux: ['', '', '']
    });

    const [exercice4, setExercice4] = useState({
        margesUnitaire: ['', '', ''], margesTotales: ['', '', ''], totalMarge: ''
    });

    // Réponses correctes
    const correctAnswers = {
        exercice1: {
            reductions: [25, 45, 15, 60],
            prixReduits: [225, 247.5, 127.5, 240],
            prixFinaux: [236.25, 259.88, 140.25, 264]
        },
        exercice2: {
            totalsHT: [24, 17.5, 21.6],
            montantsTVA: [4.8, 3.5, 4.32],
            totalsTTC: [28.8, 21, 25.92],
            totalGeneralHT: 63.1,
            totalGeneralTVA: 12.62,
            totalGeneralTTC: 75.72
        },
        exercice3: {
            prixVente: [36, 52.5, 27], remises: [3.6, 2.63, 5.4], prixFinaux: [32.4, 49.88, 21.6]
        },
        exercice4: {
            margesUnitaire: [9, 17.5, 12], margesTotales: [90, 87.5, 96], totalMarge: 273.5
        },
        questions: {
            q1: "Pour calculer une réduction, multipliez le prix initial par le pourcentage de réduction puis divisez par 100. Le prix réduit est obtenu en soustrayant cette réduction au prix initial.",
            q2: "Le prix final peut être supérieur au prix initial si la taxe appliquée est plus élevée que la réduction accordée.",
            q3: "Je propose une remise personnalisée en fonction du volume d'achat tout en maintenant une marge bénéficiaire raisonnable.",
            q4: "La marge commerciale est la différence entre le prix de vente et le coût d'achat, elle permet de couvrir les frais et de réaliser un bénéfice.",
            q5: "La marge représente notre bénéfice avant frais, c'est ce qui permet à l'entreprise de rester compétitive.",
            q6: "Le prix de vente inclut non seulement le coût du produit mais aussi les frais de personnel, de logistique et les investissements futurs."
        }
    };

    const [showCorrections, setShowCorrections] = useState({
        exercice1: false,
        exercice2: false,
        exercice3: false,
        exercice4: false,
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false
    });

    const explanations = {
        exercice1: {
            reductions: "Montant réduction = Prix initial × (Taux réduction/100)",
            prixReduits: "Prix après réduction = Prix initial - Montant réduction",
            prixFinaux: "Prix final = Prix après réduction × (1 + Taxe/100)"
        },
        exercice2: {
            totalsHT: "Total HT = Quantité × Prix unitaire",
            montantsTVA: "Montant TVA = Total HT × (Taux TVA/100)",
            totalsTTC: "Total TTC = Total HT + Montant TVA"
        },
        exercice3: {
            prixVente: "Prix de vente = Prix d'achat × (1 + Marge/100)",
            remises: "Remise = Prix de vente × (Taux remise/100)",
            prixFinaux: "Prix final = Prix de vente - Remise"
        },
        exercice4: {
            margesUnitaire: "Marge unitaire = Prix de vente - Prix d'achat",
            margesTotales: "Marge totale = Marge unitaire × Quantité vendue"
        }
    };

    const [modalState, setModalState] = useState({
        show: false, imageUrl: '', altText: '',
    });

    const [questionAnswers, setQuestionAnswers] = useState({
        q1: '', q2: '', q3: '', q4: '', q5: '', q6: ''
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

    const toggleCorrection = (field) => {
        setShowCorrections(prev => ({...prev, [field]: !prev[field]}));

        // Si on active la correction, remplir les champs vides avec les réponses correctes
        if (!showCorrections[field]) {
            if (field === 'exercice1') {
                setExercice1(prev => ({
                    reductions: prev.reductions.map((val, i) => val === '' ? correctAnswers.exercice1.reductions[i] : val),
                    prixReduits: prev.prixReduits.map((val, i) => val === '' ? correctAnswers.exercice1.prixReduits[i] : val),
                    prixFinaux: prev.prixFinaux.map((val, i) => val === '' ? correctAnswers.exercice1.prixFinaux[i] : val)
                }));
            } else if (field === 'exercice2') {
                setExercice2(prev => ({
                    totalsHT: prev.totalsHT.map((val, i) => val === '' ? correctAnswers.exercice2.totalsHT[i] : val),
                    montantsTVA: prev.montantsTVA.map((val, i) => val === '' ? correctAnswers.exercice2.montantsTVA[i] : val),
                    totalsTTC: prev.totalsTTC.map((val, i) => val === '' ? correctAnswers.exercice2.totalsTTC[i] : val),
                    totalGeneralHT: prev.totalGeneralHT === '' ? correctAnswers.exercice2.totalGeneralHT : prev.totalGeneralHT,
                    totalGeneralTVA: prev.totalGeneralTVA === '' ? correctAnswers.exercice2.totalGeneralTVA : prev.totalGeneralTVA,
                    totalGeneralTTC: prev.totalGeneralTTC === '' ? correctAnswers.exercice2.totalGeneralTTC : prev.totalGeneralTTC
                }));
            } else if (field === 'exercice3') {
                setExercice3(prev => ({
                    prixVente: prev.prixVente.map((val, i) => val === '' ? correctAnswers.exercice3.prixVente[i] : val),
                    remises: prev.remises.map((val, i) => val === '' ? correctAnswers.exercice3.remises[i] : val),
                    prixFinaux: prev.prixFinaux.map((val, i) => val === '' ? correctAnswers.exercice3.prixFinaux[i] : val)
                }));
            } else if (field === 'exercice4') {
                setExercice4(prev => ({
                    margesUnitaire: prev.margesUnitaire.map((val, i) => val === '' ? correctAnswers.exercice4.margesUnitaire[i] : val),
                    margesTotales: prev.margesTotales.map((val, i) => val === '' ? correctAnswers.exercice4.margesTotales[i] : val),
                    totalMarge: prev.totalMarge === '' ? correctAnswers.exercice4.totalMarge : prev.totalMarge
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

    const steps = ["Pour calculer une réduction : Prix initial × Taux réduction / 100", "Pour ajouter une taxe : Prix après réduction × (1 + Taux TVA/100)", "Pour calculer une marge : Prix de vente - Prix d'achat"];

    const contentRef = useRef();

    if (className === 'Secondeaequations-premier-degre') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" id="commerciaux-content" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Calculs_Commerciaux"
                pageCount={4}
                quality="hd"
            />

            {/* Page 1 - Automatismes */}
            <div className="print-page">
                <Automatismes/>
            </div>

            {/* Page 2 - Activité 1 */}
            <div className="print-page">
                <div className="math-chapter-box blue ">
                    <FaShoppingCart className="math-chapter-icon"/>
                    <h2 className="math-chapter-title-test">
                        Calculs Commerciaux et Co-Intervention
                    </h2>
                    <div className="math-chapter-decoration">
                        <svg width="100" height="80" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 2L2 7L12 12L22 7L12 2Z M12 12L22 7 M12 12L2 7 M12 12V22 M22 7V17L12 22L2 17V7"
                                stroke="#4CAF50"
                                strokeWidth="2"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="#2E7D32"
                                strokeWidth="1.5"
                            />
                            <path d="M12 8V16 M8 12H16" stroke="#4CAF50" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>

                <div className="activity-header">
                    <span className="activity-badge">EXERCICE 1</span>
                    <div className="activity-title">
                            <span className="course-title">
                                <FaPercent/> Calcul de prix et pourcentages
                            </span>
                    </div>
                </div>

                <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                    <div style={{flex: 1, minWidth: '300px'}}>
                        <div className="renovation-contexte">
                            <p>
                                <strong>🏪 Vous êtes responsable d'une boutique de sport 🏋️‍♂️🏃‍♀️🎿</strong> et devez
                                calculer les
                                nouveaux prix après réduction 🔻 et après application de la TVA 💶 pour la collection
                                d'hiver ❄️🧥.
                            </p>

                        </div>
                        <div className="objectif-box" style={{marginTop: '-10px', marginBottom: '10px'}}>
                            <p><strong> Objectif :</strong> 🎯 " Savoir calculer un prix après réduction ou avec une
                                augmentation (taxe ou marge)."</p>
                        </div>
                    </div>

                    <div className="flex-shrink-0"
                         style={{maxWidth: '250px', cursor: 'pointer', marginTop: '10px', marginBottom: '10px'}}>
                        <img
                            src={boutique}
                            alt="Boutique de sport"
                            className="img-fluid rounded shadow-sm compact-img"
                            onClick={() => openModal(boutique, 'Boutique de sport')}
                        />
                    </div>
                </div>

                <section className="tp-section compact">
                    <h3 className="compact-title p-0">
                        <FaCalculator/> Tableau de calcul
                    </h3>

                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead>
                            <tr>
                                <th>Prix initial (€)</th>
                                <th>Taux de réduction (%)</th>
                                <th>Montant de la réduction (€)</th>
                                <th>Prix après réduction (€)</th>
                                <th>Taxe (%)</th>
                                <th>Prix final avec taxe (€)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[0, 1, 2, 3].map((index) => (<tr key={index}>
                                <td>{[250, 450, 150, 300][index]}</td>
                                <td>{[10, 45, 15, 20][index]}</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice1 ? 'correction-active' : ''}`}
                                        value={exercice1.reductions[index]}
                                        onChange={(e) => handleInputChange(setExercice1, 'reductions', index, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice1 ? 'correction-active' : ''}`}
                                        value={exercice1.prixReduits[index]}
                                        onChange={(e) => handleInputChange(setExercice1, 'prixReduits', index, e.target.value)}
                                    />
                                </td>
                                <td>{[5, 5, 10, 10][index]}</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice1 ? 'correction-active' : ''}`}
                                        value={exercice1.prixFinaux[index]}
                                        onChange={(e) => handleInputChange(setExercice1, 'prixFinaux', index, e.target.value)}
                                    />
                                </td>
                            </tr>))}
                            </tbody>
                        </table>
                    </div>

                    <button
                        className="correction-btn"
                        onClick={() => toggleCorrection('exercice1')}
                    >
                        <FaCheck/> {showCorrections.exercice1 ? 'Masquer' : 'Voir'} correction
                    </button>

                    <div className="questions-container m-0">
                        <div className="questions-column">
                            <div className="question-card">
                                <p>1. Comment calculez-vous une réduction de 15% sur un article à 120€ ?</p>
                                <AutoResizeTextarea
                                    className={`answer-input ${showCorrections.q1 ? 'correction-active' : ''}`}
                                    minRows={3}
                                    maxRows={10}
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
                        <div className="questions-column">
                            <div className="question-card">
                                <p>2. Pourquoi le prix final peut-il être supérieur au prix affiché après réduction
                                    ?</p>
                                <AutoResizeTextarea
                                    className={`answer-input ${showCorrections.q2 ? 'correction-active' : ''}`}
                                    minRows={3}
                                    maxRows={10}
                                    value={questionAnswers.q2}
                                    onChange={(e) => handleQuestionChange('q2', e.target.value)}
                                />
                                <button
                                    className="correction-btn"
                                    onClick={() => toggleCorrection('q2')}
                                >
                                    <FaCheck/> {showCorrections.q2 ? 'Masquer' : 'Voir'} correction
                                </button>

                            </div>
                        </div>
                    </div>

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
            </div>

            {/* Page 3 - Activité 2 */}
            <div className="print-page">
                <section className="tp-section compact">
                    <div className="activity-header mt-0">
                        <span className="activity-badge">EXERCICE 2</span>
                        <div className="activity-title">
                                <span className="course-title">
                                    <FaFileInvoice/> Facture professionnelle
                                </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte mt-0">
                                <p>
                                    <strong>Vous êtes gestionnaire dans un magasin de fournitures de bureau
                                        🖊️</strong> et
                                    devez établir une facture 🧾 pour une entreprise cliente 👩‍💼.
                                </p>
                            </div>
                            <div className="objectif-box" style={{marginTop: '-10px', marginBottom: '10px'}}>
                                <p><strong>📌 Consigne :</strong> "Remplissez les cases vides du tableau 📊 en calculant
                                    les sous-totaux, le montant de la TVA 💶 et le total TTC ."
                                </p>
                            </div>

                        </div>

                        <div className="flex-shrink-0"
                             style={{maxWidth: '200px', cursor: 'pointer', marginTop: '20px'}}>
                            <img
                                src={facture}
                                alt="Facture professionnelle"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(facture, 'Facture professionnelle')}
                            />
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered text-center  mb-0">
                            <thead>
                            <tr>
                                <th>Produit</th>
                                <th>Quantité</th>
                                <th>Prix unitaire (€)</th>
                                <th>Total HT (€)</th>
                                <th>TVA (%)</th>
                                <th>Montant TVA (€)</th>
                                <th>Total TTC (€)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[0, 1, 2].map((index) => (<tr key={index}>
                                <td>{['Classeur', 'Ramette papier', 'Stylo'][index]}</td>
                                <td>{[12, 5, 18][index]}</td>
                                <td>{[2.0, 3.5, 1.2][index].toFixed(2)}</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice2 ? 'correction-active' : ''}`}
                                        value={exercice2.totalsHT[index]}
                                        onChange={(e) => handleInputChange(setExercice2, 'totalsHT', index, e.target.value)}
                                    />
                                </td>
                                <td>20</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice2 ? 'correction-active' : ''}`}
                                        value={exercice2.montantsTVA[index]}
                                        onChange={(e) => handleInputChange(setExercice2, 'montantsTVA', index, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice2 ? 'correction-active' : ''}`}
                                        value={exercice2.totalsTTC[index]}
                                        onChange={(e) => handleInputChange(setExercice2, 'totalsTTC', index, e.target.value)}
                                    />
                                </td>
                            </tr>))}
                            <tr>
                                <td colSpan="3">TOTAL</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice2 ? 'correction-active' : ''}`}
                                        value={exercice2.totalGeneralHT}
                                        onChange={(e) => handleInputChange(setExercice2, 'totalGeneralHT', null, e.target.value)}
                                    />
                                </td>
                                <td></td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice2 ? 'correction-active' : ''}`}
                                        value={exercice2.totalGeneralTVA}
                                        onChange={(e) => handleInputChange(setExercice2, 'totalGeneralTVA', null, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice2 ? 'correction-active' : ''}`}
                                        value={exercice2.totalGeneralTTC}
                                        onChange={(e) => handleInputChange(setExercice2, 'totalGeneralTTC', null, e.target.value)}
                                    />
                                </td>
                            </tr>
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
                <div className="activity-header mt-0">
                    <span className="activity-badge">EXERCICE 3</span>
                    <div className="activity-title">
                                <span className="course-title">
                                    <FaEuroSign/> Devis avec marge et remise
                                </span>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table table-bordered text-center">
                        <thead>
                        <tr>
                            <th>Produit</th>
                            <th>Prix d'achat (€)</th>
                            <th>Marge (%)</th>
                            <th>Prix de vente (€)</th>
                            <th>Taux de remise (%)</th>
                            <th>Remise (€)</th>
                            <th>Prix final (€)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {[0, 1, 2].map((index) => (<tr key={index}>
                            <td>{['Chaussures', 'Veste', 'Sac à dos'][index]}</td>
                            <td>{[30, 35, 15][index]}</td>
                            <td>{[20, 50, 80][index]}</td>
                            <td>
                                <input
                                    type="number"
                                    className={`answer-input ${showCorrections.exercice3 ? 'correction-active' : ''}`}
                                    value={exercice3.prixVente[index]}
                                    onChange={(e) => handleInputChange(setExercice3, 'prixVente', index, e.target.value)}
                                />
                            </td>
                            <td>{[10, 5, 20][index]}</td>
                            <td>
                                <input
                                    type="number"
                                    className={`answer-input ${showCorrections.exercice3 ? 'correction-active' : ''}`}
                                    value={exercice3.remises[index]}
                                    onChange={(e) => handleInputChange(setExercice3, 'remises', index, e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    className={`answer-input ${showCorrections.exercice3 ? 'correction-active' : ''}`}
                                    value={exercice3.prixFinaux[index]}
                                    onChange={(e) => handleInputChange(setExercice3, 'prixFinaux', index, e.target.value)}
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

                <div className="questions-container mt-0">
                    <div className="questions-column">
                        <div className="question-card">
                            <p>3. Justifiez une marge de 50% à un client.</p>
                            <AutoResizeTextarea
                                className={`answer-input ${showCorrections.q3 ? 'correction-active' : ''}`}
                                minRows={3}
                                maxRows={6}
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
                    <div className="questions-column">
                        <div className="question-card">
                            <p>4. Quelle est la différence entre marge et bénéfice ?</p>
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
            </div>

            {/* Page 4 - Activités 3 et 4 */}
            <div className="print-page">
                {/* Exercice 3 */}
                <section className="tp-section compact">
                    {/* Exercice 4 */}
                    <div className="activity-header" style={{marginTop: '30px'}}>
                        <span className="activity-badge">EXERCICE 4</span>
                        <div className="activity-title">
                                <span className="course-title">
                                    <FaChartLine/> Analyse de marge
                                </span>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead>
                            <tr>
                                <th>Produit</th>
                                <th>Prix d'achat (€)</th>
                                <th>Prix de vente (€)</th>
                                <th>Quantité vendue</th>
                                <th>Marge unitaire (€)</th>
                                <th>Marge totale (€)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[0, 1, 2].map((index) => (<tr key={index}>
                                <td>{['Ballon', 'Raquette', 'Maillot'][index]}</td>
                                <td>{[14, 35, 18][index]}</td>
                                <td>{[23, 52.5, 30][index]}</td>
                                <td>{[10, 5, 8][index]}</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice4 ? 'correction-active' : ''}`}
                                        value={exercice4.margesUnitaire[index]}
                                        onChange={(e) => handleInputChange(setExercice4, 'margesUnitaire', index, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice4 ? 'correction-active' : ''}`}
                                        value={exercice4.margesTotales[index]}
                                        onChange={(e) => handleInputChange(setExercice4, 'margesTotales', index, e.target.value)}
                                    />
                                </td>
                            </tr>))}
                            <tr>
                                <td colSpan="5">TOTAL</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice4 ? 'correction-active' : ''}`}
                                        value={exercice4.totalMarge}
                                        onChange={(e) => handleInputChange(setExercice4, 'totalMarge', null, e.target.value)}
                                    />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <button
                        className="correction-btn"
                        onClick={() => toggleCorrection('exercice4')}
                    >
                        <FaCheck/> {showCorrections.exercice4 ? 'Masquer' : 'Voir'} correction
                    </button>

                    <div className="questions-container m-0">
                        <div className="questions-column">
                            <div className="question-card">
                                <p>5. Pourquoi calculer la marge unitaire et la marge totale ?</p>
                                <AutoResizeTextarea
                                    className={`answer-input ${showCorrections.q5 ? 'correction-active' : ''}`}
                                    minRows={3}
                                    maxRows={6}
                                    value={questionAnswers.q5}
                                    onChange={(e) => handleQuestionChange('q5', e.target.value)}
                                />
                                <button
                                    className="correction-btn"
                                    onClick={() => toggleCorrection('q5')}
                                >
                                    <FaCheck/> {showCorrections.q5 ? 'Masquer' : 'Voir'} correction
                                </button>
                            </div>
                        </div>
                        <div className="questions-column">
                            <div className="question-card">
                                <p>6. Comment expliquez-vous la différence entre prix d'achat et prix de vente ?</p>
                                <AutoResizeTextarea
                                    className={`answer-input ${showCorrections.q6 ? 'correction-active' : ''}`}
                                    minRows={3}
                                    maxRows={10}
                                    value={questionAnswers.q6}
                                    onChange={(e) => handleQuestionChange('q6', e.target.value)}
                                />
                                <button
                                    className="correction-btn"
                                    onClick={() => toggleCorrection('q6')}
                                >
                                    <FaCheck/> {showCorrections.q6 ? 'Masquer' : 'Voir'} correction
                                </button>
                            </div>
                        </div>
                    </div>

                </section>

                <AutoEvaluationGrid/>
            </div>

            <footer className="tp-footer compact">
                <p className="compact-text">Mathématiques 2nde - Calculs commerciaux</p>
                <p className="compact-text">Co-intervention</p>
            </footer>

            {modalState.show && (<ModalImage
                imageUrl={modalState.imageUrl}
                altText={modalState.altText}
                onClose={closeModal}
            />)}
        </div>
    </>);
};

export default CalculCommerciauxCoIntervention;
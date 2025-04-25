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

const CalculsCommerciauxCoIntervention2 = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [showConclusion, setShowConclusion] = useState(false);
    const [activeSteps, setActiveSteps] = useState([]);

    // États pour les réponses des exercices
    const [exercice1, setExercice1] = useState({
        reductions: ['', '', ''], prixReduits: ['', '', ''], prixFinaux: ['', '', '']
    });

    const [exercice2, setExercice2] = useState({
        coeffMultiplicateurs: ['', '', ''],
        prixVente: ['', '', '']
    });

    const [exercice3, setExercice3] = useState({
        montantsTVA: ['', '', ''],
        totalsTTC: ['', '', '']
    });

    const [exercice4, setExercice4] = useState({
        interets: ['', '', ''],
        montantsFinaux: ['', '', '']
    });

    // Réponses correctes
    const correctAnswers = {
        exercice1: {
            reductions: [15, 30, 10],
            prixReduits: [85, 140, 45],
            prixFinaux: [89.25, 147, 47.25]
        },
        exercice2: {
            coeffMultiplicateurs: [1.2, 1.5, 1.8],
            prixVente: [24, 45, 54]
        },
        exercice3: {
            montantsTVA: [2.4, 4.5, 5.4],
            totalsTTC: [14.4, 27, 32.4]
        },
        exercice4: {
            interets: [15, 30, 45],
            montantsFinaux: [115, 130, 145]
        },
        questions: {
            q1: "Pour calculer une réduction, on multiplie le prix initial par le taux de réduction puis on divise par 100. Exemple : 100€ avec 20% de réduction → 100 × 20 ÷ 100 = 20€ de réduction.",
            q2: "Le coefficient multiplicateur permet de passer directement du prix d'achat au prix de vente. Par exemple, un coefficient de 1,5 signifie qu'on vend le produit 1,5 fois son prix d'achat.",
            q3: "La TVA est une taxe payée par le client final. Pour la calculer, on multiplie le prix HT par le taux de TVA (20% = 0,20).",
            q4: "Les intérêts simples se calculent avec la formule : Intérêt = Capital × Taux × Temps (en années)."
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
        q4: false
    });

    const explanations = {
        exercice1: {
            reductions: "Réduction = Prix initial × Taux réduction ÷ 100",
            prixReduits: "Prix réduit = Prix initial - Réduction",
            prixFinaux: "Prix final = Prix réduit × 1,05 (car TVA 5%)"
        },
        exercice2: {
            coeffMultiplicateurs: "Coefficient = 1 + (Marge%/100)",
            prixVente: "Prix de vente = Prix d'achat × Coefficient"
        },
        exercice3: {
            montantsTVA: "TVA = Prix HT × Taux TVA",
            totalsTTC: "Prix TTC = Prix HT + TVA"
        },
        exercice4: {
            interets: "Intérêt = Capital × (Taux/100) × Temps",
            montantsFinaux: "Montant final = Capital + Intérêt"
        }
    };

    const [modalState, setModalState] = useState({
        show: false, imageUrl: '', altText: '',
    });

    const [questionAnswers, setQuestionAnswers] = useState({
        q1: '', q2: '', q3: '', q4: ''
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

        if (!showCorrections[field]) {
            if (field === 'exercice1') {
                setExercice1(prev => ({
                    reductions: prev.reductions.map((val, i) => val === '' ? correctAnswers.exercice1.reductions[i] : val),
                    prixReduits: prev.prixReduits.map((val, i) => val === '' ? correctAnswers.exercice1.prixReduits[i] : val),
                    prixFinaux: prev.prixFinaux.map((val, i) => val === '' ? correctAnswers.exercice1.prixFinaux[i] : val)
                }));
            } else if (field === 'exercice2') {
                setExercice2(prev => ({
                    coeffMultiplicateurs: prev.coeffMultiplicateurs.map((val, i) => val === '' ? correctAnswers.exercice2.coeffMultiplicateurs[i] : val),
                    prixVente: prev.prixVente.map((val, i) => val === '' ? correctAnswers.exercice2.prixVente[i] : val)
                }));
            } else if (field === 'exercice3') {
                setExercice3(prev => ({
                    montantsTVA: prev.montantsTVA.map((val, i) => val === '' ? correctAnswers.exercice3.montantsTVA[i] : val),
                    totalsTTC: prev.totalsTTC.map((val, i) => val === '' ? correctAnswers.exercice3.totalsTTC[i] : val)
                }));
            } else if (field === 'exercice4') {
                setExercice4(prev => ({
                    interets: prev.interets.map((val, i) => val === '' ? correctAnswers.exercice4.interets[i] : val),
                    montantsFinaux: prev.montantsFinaux.map((val, i) => val === '' ? correctAnswers.exercice4.montantsFinaux[i] : val)
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
        "Réduction : Prix × Taux ÷ 100",
        "Coefficient multiplicateur : 1 + (Marge%/100)",
        "TVA : Prix HT × Taux TVA",
        "Intérêt simple : Capital × Taux × Temps"
    ];

    const contentRef = useRef();

    if (className === 'Secondeaequations-premier-degre') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" id="commerciaux-content" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Calculs_Commerciaux_Relation_Client"
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
                        Calculs Commerciaux - Relation Client
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
                                <FaPercent/> Calcul de réductions
                            </span>
                    </div>
                </div>

                <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                    <div style={{flex: 1, minWidth: '300px'}}>
                        <div className="renovation-contexte">
                            <p>
                                <strong>🏪 Vous travaillez dans un magasin de vêtements 👕👖</strong> et devez calculer
                                les prix soldés avec une réduction de 15%, 30% ou 10% puis ajouter la TVA de 5%.
                            </p>
                        </div>
                        <div className="objectif-box" style={{marginTop: '-10px', marginBottom: '10px'}}>
                            <p><strong> Objectif :</strong> 🎯 "Savoir calculer un prix après réduction et avec TVA."</p>
                        </div>
                    </div>

                    <div className="flex-shrink-0"
                         style={{maxWidth: '250px', cursor: 'pointer', marginTop: '10px', marginBottom: '10px'}}>
                        <img
                            src={boutique}
                            alt="Boutique de vêtements"
                            className="img-fluid rounded shadow-sm compact-img"
                            onClick={() => openModal(boutique, 'Boutique de vêtements')}
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
                                <th>TVA (5%)</th>
                                <th>Prix final avec TVA (€)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[0, 1, 2].map((index) => (<tr key={index}>
                                <td>{[100, 200, 50][index]}</td>
                                <td>{[15, 30, 10][index]}</td>
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
                                <td>5%</td>
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
                                <p>1. Comment calculez-vous une réduction de 20% sur un article à 150€ ?</p>
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

            {/* Page 3 - Activité 2 et 3 */}
            <div className="print-page">
                <section className="tp-section compact">
                    <div className="activity-header mt-0">
                        <span className="activity-badge">EXERCICE 2</span>
                        <div className="activity-title">
                                <span className="course-title">
                                    <FaEuroSign/> Coefficient multiplicateur
                                </span>
                        </div>
                    </div>

                    <div className="renovation-contexte2 mt-0">
                        <p>
                            <strong>Vous êtes vendeur en magasin 🛍️</strong> et devez calculer les prix de vente à
                            partir
                            des prix d'achat en utilisant un coefficient multiplicateur.
                        </p>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead>
                            <tr>
                                <th>Produit</th>
                                <th>Prix d'achat (€)</th>
                                <th>Marge souhaitée (%)</th>
                                <th>Coefficient multiplicateur</th>
                                <th>Prix de vente (€)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[0, 1, 2].map((index) => (<tr key={index}>
                                <td>{['T-shirt', 'Pantalon', 'Veste'][index]}</td>
                                <td>{[20, 30, 30][index]}</td>
                                <td>{[20, 50, 80][index]}</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice2 ? 'correction-active' : ''}`}
                                        value={exercice2.coeffMultiplicateurs[index]}
                                        onChange={(e) => handleInputChange(setExercice2, 'coeffMultiplicateurs', index, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice2 ? 'correction-active' : ''}`}
                                        value={exercice2.prixVente[index]}
                                        onChange={(e) => handleInputChange(setExercice2, 'prixVente', index, e.target.value)}
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

                    <div className="questions-column">
                        <div className="question-card">
                            <p>2. À quoi sert un coefficient multiplicateur ?</p>
                            <AutoResizeTextarea
                                className={`answer-input ${showCorrections.q2 ? 'correction-active' : ''}`}
                                minRows={2}
                                maxRows={4}
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
                    <div className="activity-header" style={{marginTop: '5px'}}>
                        <span className="activity-badge">EXERCICE 3</span>
                        <div className="activity-title">
                                <span className="course-title">
                                    <FaFileInvoice/> Calcul de la TVA
                                </span>
                        </div>
                    </div>

                    <div className="renovation-contexte2 mt-0">
                        <p>
                            <strong>Vous devez établir une facture 🧾</strong> pour un client en calculant la TVA à 20%
                            sur plusieurs produits.
                        </p>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead>
                            <tr>
                                <th>Produit</th>
                                <th>Prix HT (€)</th>
                                <th>TVA (20%)</th>
                                <th>Prix TTC (€)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[0, 1, 2].map((index) => (<tr key={index}>
                                <td>{['Chaussures', 'Sac', 'Ceinture'][index]}</td>
                                <td>{[12, 22.5, 27][index]}</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice3 ? 'correction-active' : ''}`}
                                        value={exercice3.montantsTVA[index]}
                                        onChange={(e) => handleInputChange(setExercice3, 'montantsTVA', index, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice3 ? 'correction-active' : ''}`}
                                        value={exercice3.totalsTTC[index]}
                                        onChange={(e) => handleInputChange(setExercice3, 'totalsTTC', index, e.target.value)}
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
                            <p>3. Qu'est-ce que la TVA et comment la calcule-t-on ?</p>
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
                </section>
            </div>

            {/* Page 4 - Activité 4 */}
            <div className="print-page">
                <section className="tp-section compact">
                    <div className="activity-header" style={{marginTop: '30px'}}>
                        <span className="activity-badge">EXERCICE 4</span>
                        <div className="activity-title">
                                <span className="course-title">
                                    <FaChartLine/> Intérêts simples
                                </span>
                        </div>
                    </div>

                    <div className="renovation-contexte mt-0">
                        <p>
                            <strong>Vous conseillez un client sur un placement bancaire 💰</strong> avec un taux
                            d'intérêt
                            simple de 5% par an.
                        </p>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead>
                            <tr>
                                <th>Capital (€)</th>
                                <th>Taux annuel (%)</th>
                                <th>Durée (années)</th>
                                <th>Intérêt (€)</th>
                                <th>Montant final (€)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[0, 1, 2].map((index) => (<tr key={index}>
                                <td>{[100, 200, 300][index]}</td>
                                <td>5</td>
                                <td>{[3, 3, 3][index]}</td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice4 ? 'correction-active' : ''}`}
                                        value={exercice4.interets[index]}
                                        onChange={(e) => handleInputChange(setExercice4, 'interets', index, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className={`answer-input ${showCorrections.exercice4 ? 'correction-active' : ''}`}
                                        value={exercice4.montantsFinaux[index]}
                                        onChange={(e) => handleInputChange(setExercice4, 'montantsFinaux', index, e.target.value)}
                                    />
                                </td>
                            </tr>))}
                            </tbody>
                        </table>
                    </div>

                    <button
                        className="correction-btn"
                        onClick={() => toggleCorrection('exercice4')}
                    >
                        <FaCheck/> {showCorrections.exercice4 ? 'Masquer' : 'Voir'} correction
                    </button>

                    <div className="questions-column">
                        <div className="question-card">
                            <p>4. Comment calcule-t-on les intérêts simples ?</p>
                            <AutoResizeTextarea
                                className={`answer-input ${showCorrections.q4 ? 'correction-active' : ''}`}
                                minRows={2}
                                maxRows={3}
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
                </section>

                <AutoEvaluationGrid/>

                <footer className="tp-footer compact">
                    <p className="compact-text">Mathématiques 2nde - Relation Client</p>
                    <p className="compact-text">Co-intervention - Calculs commerciaux</p>
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

export default CalculsCommerciauxCoIntervention2;
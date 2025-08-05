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
import boutique from '../../../../assets/electromenager.jpg';
import facture from '../../../../assets/magasinstylo.jpg';
import ModalImage from '../../../../utils/ModalImage';
import Automatismes from "../../../../config/Automatismes";
import AutoResizeTextarea from '../../../../config/AutoResizeTextarea';

const CalculsCommerciauxCoIntervention4 = () => {
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
            reductions: [12, 25, 8],
            prixReduits: [88, 150, 46],
            prixFinaux: [92.4, 157.5, 48.3]
        },
        exercice2: {
            coeffMultiplicateurs: [1.25, 1.4, 1.6],
            prixVente: [25, 42, 48]
        },
        exercice3: {
            montantsTVA: [3, 5.25, 6],
            totalsTTC: [18, 31.5, 36]
        },
        exercice4: {
            interets: [12, 24, 36],
            montantsFinaux: [112, 124, 136]
        },
        questions: {
            q1: "Pour calculer une remise en euros, on multiplie le prix initial par le taux de remise puis on divise par 100. Exemple : 80€ avec 15% de remise → 80 × 15 ÷ 100 = 12€ de remise.",
            q2: "Le coefficient multiplicateur permet de déterminer le prix de vente TTC à partir du prix d'achat HT en tenant compte de la marge et de la TVA.",
            q3: "La TVA est collectée par l'entreprise pour l'État. Pour un produit à 50€ HT avec TVA à 20%, le calcul est : 50 × 0,20 = 10€ de TVA.",
            q4: "Les intérêts simples se calculent avec la formule : Intérêt = (Capital × Taux × Temps) ÷ 100. Pour 200€ à 3% pendant 2 ans : (200 × 3 × 2) ÷ 100 = 12€."
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
            reductions: "Remise = Prix initial × Taux remise ÷ 100",
            prixReduits: "Prix remisé = Prix initial - Remise",
            prixFinaux: "Prix final = Prix remisé × 1,05 (car TVA 5%)"
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
            interets: "Intérêt = (Capital × Taux × Temps) ÷ 100",
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
        "Remise : Prix × Taux ÷ 100",
        "Coefficient multiplicateur : 1 + (Marge%/100)",
        "TVA : Prix HT × Taux TVA",
        "Intérêt simple : (Capital × Taux × Temps) ÷ 100"
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
                activityName="Calculs_Commerciaux_Gestion_Magasin"
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
                        Calculs Commerciaux - Gestion de Magasin
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
                                <FaPercent/> Calcul de remises commerciales
                            </span>
                    </div>
                </div>

                <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                    <div style={{flex: 1, minWidth: '300px'}}>
                        <div className="renovation-contexte" style={{borderRadius: '10px'}}>
                            <p>
                                <strong>🏬 Vous êtes employé dans un magasin d'électroménager 🏷️</strong> et devez
                                calculer
                                les prix après remise de 12%, 25% ou 8% puis ajouter la TVA de 5%.
                            </p>
                        </div>
                        <div className="objectif-box" style={{marginBottom: '10px', marginTop: '10px'}}>
                            <p><strong> Objectif :</strong> 🎯 "Maîtriser le calcul des remises et prix TTC."</p>
                        </div>
                    </div>

                    <div className="flex-shrink-0"
                         style={{maxWidth: '250px', cursor: 'pointer', marginTop: '10px', marginBottom: '10px'}}>
                        <img
                            src={boutique}
                            alt="Magasin d'électroménager"
                            className="img-fluid rounded shadow-sm compact-img"
                            onClick={() => openModal(boutique, "Magasin d'électroménager")}
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
                                <th>Taux de remise (%)</th>
                                <th>Montant de la remise (€)</th>
                                <th>Prix après remise (€)</th>
                                <th>TVA (5%)</th>
                                <th>Prix final avec TVA (€)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[0, 1, 2].map((index) => (<tr key={index}>
                                <td>{[100, 200, 50][index]}</td>
                                <td>{[12, 25, 8][index]}</td>
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
                                <p>1. Comment calculez-vous une remise de 15% sur un article à 80€ ?</p>
                                <AutoResizeTextarea
                                    className={`answer-input ${showCorrections.q1 ? 'correction-active' : ''}`}
                                    minRows={8}
                                    maxRows={8}
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
                                    <FaEuroSign/> Marge commerciale
                                </span>
                        </div>
                    </div>

                    <div className="renovation-contexte2 mt-0">
                        <p>
                            <strong>Vous êtes responsable des prix en grande surface 🏪</strong> et devez calculer les
                            prix de vente à
                            partir des prix d'achat en appliquant une marge commerciale.
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
                                <td>{['Cafetière', 'Grille-pain', 'Mixeur'][index]}</td>
                                <td>{[20, 30, 30][index]}</td>
                                <td>{[25, 40, 60][index]}</td>
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
                            <p>2. Comment utilise-t-on un coefficient multiplicateur pour fixer un prix de vente ?</p>
                            <AutoResizeTextarea
                                className={`answer-input ${showCorrections.q2 ? 'correction-active' : ''}`}
                                minRows={3}
                                maxRows={6}
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
                                    <FaFileInvoice/> Facturation et TVA
                                </span>
                        </div>
                    </div>

                    <div className="renovation-contexte2 mt-0">
                        <p>
                            <strong>Vous devez établir des factures pour des clients professionnels 🧾</strong> en
                            calculant la TVA à
                            20% sur différents produits.
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
                                <td>{['Aspirateur', 'Robot cuiseur', 'Sèche-cheveux'][index]}</td>
                                <td>{[15, 26.25, 30][index]}</td>
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
                            <p>3. Expliquez le rôle de la TVA et son calcul sur un produit à 50€ HT ?</p>
                            <AutoResizeTextarea
                                className={`answer-input ${showCorrections.q3 ? 'correction-active' : ''}`}
                                minRows={4}
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
                                    <FaChartLine/> Calcul d'intérêts bancaires
                                </span>
                        </div>
                    </div>

                    <div className="renovation-contexte mt-0">
                        <p>
                            <strong>Vous conseillez des clients sur des placements à intérêts simples 🏦</strong> avec un
                            taux
                            d'intérêt de 4% par an.
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
                                <td>4</td>
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
                            <p>4. Calculez les intérêts pour 200€ placés à 3% pendant 2 ans ?</p>
                            <AutoResizeTextarea
                                className={`answer-input ${showCorrections.q4 ? 'correction-active' : ''}`}
                                minRows={8}
                                maxRows={8}
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
                    <p className="compact-text">Mathématiques TpEpc </p>
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

export default CalculsCommerciauxCoIntervention4;
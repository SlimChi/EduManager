import React, {useRef, useState} from 'react';
import {
    FaCheck, FaCalculator, FaChartLine, FaEquals, FaCoins, FaShoppingCart, FaRuler, FaInfoCircle
} from 'react-icons/fa';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import {IoMdSchool} from 'react-icons/io';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import AutoEvaluationGrid from '../../../../config/AutoEvaluationGrid';
import shop from '../../../../assets/shop.png';
import magazine from '../../../../assets/magazine.png';
import ModalImage from '../../../../utils/ModalImage';
import Automatismes from "../../../../config/Automatismes";
import AutoResizeTextarea from '../../../../config/AutoResizeTextarea';

const Act3Equation1erDegre = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [showConclusion, setShowConclusion] = useState(false);
    const [activeSteps, setActiveSteps] = useState([]);

    const [answers, setAnswers] = useState({
        beneficeBrut: '',
        depenses: '',
        beneficeNet: '',
        equation: '',
        simplification: '',
        solution: '',
        prixAbonnement: '',
        prixKiosque: '',
        inequation: '',
        resolution: '',
        conclusion: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        beneficeBrut: false,
        depenses: false,
        beneficeNet: false,
        equation: false,
        simplification: false,
        solution: false,
        prixAbonnement: false,
        prixKiosque: false,
        inequation: false,
        resolution: false,
        conclusion: false
    });

    const correctAnswers = {
        beneficeBrut: '2.5x', // 25% de 10€ = 2.5€ par article
        depenses: '2x', // 2€ par item
        beneficeNet: '0.5x', // 2.5x - 2x = 0.5x
        equation: '0.5x = 100',
        simplification: 'x = 100 / 0.5',
        solution: '200 articles',
        prixAbonnement: '43.20€', // 12 * 4.50 * 0.8
        prixKiosque: '4.50x + 6',
        inequation: '4.50x + 6 > 43.20',
        resolution: 'x > (43.20 - 6) / 4.50 → x > 8.27',
        conclusion: 'À partir de 9 numéros'
    };

    const explanations = {
        beneficeBrut: "25% de 10€ = 2.5€ de bénéfice brut par article → 2.5x",
        depenses: "Coût fixe de 2€ par article vendu → 2x",
        beneficeNet: "Bénéfice net = Bénéfice brut (2.5x) - Dépenses (2x) = 0.5x",
        equation: "On cherche x tel que le bénéfice net soit 100€ → 0.5x = 100",
        simplification: "Isoler x en divisant les deux côtés par 0.5 → x = 100 / 0.5",
        solution: "100 / 0.5 = 200 → Il faut vendre 200 articles",
        prixAbonnement: "12 numéros × 4.50€ × 0.8 (20% réduction) = 43.20€",
        prixKiosque: "4.50€ par numéro + 6€ pour le numéro spécial → 4.50x + 6",
        inequation: "On cherche quand le kiosque devient plus cher que l'abonnement → 4.50x + 6 > 43.20",
        resolution: "4.50x > 37.20 → x > 37.20/4.50 → x > 8.27 (donc à partir du 9ème numéro)",
        conclusion: "L'abonnement devient intéressant à partir de 9 numéros achetés"
    };

    const [modalState, setModalState] = useState({
        show: false, imageUrl: '', altText: '',
    });

    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));

        if (!answers[field] && !showCorrections[field]) {
            setAnswers((prev) => ({...prev, [field]: correctAnswers[field]}));
        }
    };

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState((prev) => ({...prev, show: false}));
    };

    const toggleStep = (stepNumber) => {
        setActiveSteps((prev) => prev.includes(stepNumber) ? prev.filter((step) => step !== stepNumber) : [...prev, stepNumber]);
    };

    const steps = [" → Calculer le bénéfice brut par article (25% du prix d'achat), → Soustraire les coûts fixes pour obtenir le bénéfice net, → Résoudre l'équation pour atteindre le bénéfice cible",

    ];

    const contentRef = useRef();

    if (className === 'Secondeaequations-premier-degre') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" id="equations-content" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Calcul_Benefice_Equations"
                pageCount={4}
                quality="hd"
            />

            {/* Page 1 - Automatismes */}
            <div className="print-page">
                <Automatismes/>
            </div>

            {/* Page 2 - Activité 3 */}
            <div className="print-page">
                <div className="math-chapter-box blue ">
                    <FaShoppingCart className="math-chapter-icon"/>
                    <h2 className="math-chapter-title-test">
                        Problèmes concrets : Calcul de bénéfice
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
                    <span className="activity-badge">ACTIVITÉ 3</span>
                    <div className="activity-title">
                            <span className="course-title">
                                <FaCalculator/> <span className="emoji">📈</span> Calcul de bénéfice
                            </span>
                    </div>
                </div>

                <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                    <div style={{flex: 1, minWidth: '300px'}}>
                        <div className="renovation-contexte">
                            <p>
                                <strong>Un magasin</strong> vend des accessoires à un <strong>prix d'achat unitaire
                                de 10 €</strong>.
                                Pour fixer le prix de vente, il ajoute <strong>25% de bénéfice</strong> sur chaque
                                article.
                            </p>
                            <p>• Le <strong>coût d'entretien</strong> pour chaque article vendu est estimé
                                à <strong>2 €</strong>.</p>
                        </div>
                        <div className="objectif-box" style={{marginTop: '-10px', marginBottom: '10px'}}>
                            <p><strong> Question :</strong> 🎯 " Combien d'articles doivent-ils vendre pour obtenir un
                                bénéfice net de 100 € ?"</p>
                        </div>
                    </div>

                    <div className="flex-shrink-0"
                         style={{maxWidth: '350px', cursor: 'pointer', marginTop: '50px'}}>
                        <img
                            src={shop}
                            alt="Magasin d'accessoires"
                            className="img-fluid rounded shadow-sm compact-img"
                            onClick={() => openModal(shop, 'Magasin d\'accessoires')}
                        />
                    </div>
                </div>

                <section className="tp-section compact">
                    <h3 className="compact-title p-0">
                        <FaChartLine/> Partie 1 : Modélisation du problème
                    </h3>

                    <div className="questions-container m-0">
                        <div className="questions-column">
                            {/* Question 1a */}
                            <div className="question-card">
                                <div className="question-number2">1a</div>
                                <p>Exprimez le bénéfice brut en fonction du nombre x d'articles vendus :</p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        className={`answer-input ${showCorrections.beneficeBrut ? 'correction-active' : ''}`}
                                        value={answers.beneficeBrut}
                                        onChange={(e) => handleInputChange('beneficeBrut', e.target.value)}
                                        minRows={2}
                                        maxRows={4}
                                    />
                                    {showCorrections.beneficeBrut && (<div className="info-bubble explanation">
                                        <p>{explanations.beneficeBrut}</p>
                                    </div>)}
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('beneficeBrut')}
                                    >
                                        <FaCheck/> {showCorrections.beneficeBrut ? 'Masquer' : 'Voir'} correction
                                    </button>
                                </div>

                                <div className="question-number" style={{marginTop: '36%', width: '7%'}}>1b</div>
                                <p style={{marginTop: '10px'}}>Exprimez les dépenses totales en fonction de x :</p>

                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        className={`answer-input ${showCorrections.depenses ? 'correction-active' : ''}`}
                                        value={answers.depenses}
                                        onChange={(e) => handleInputChange('depenses', e.target.value)}
                                        minRows={2}
                                        maxRows={4}
                                    />
                                    {showCorrections.depenses && (<div className="info-bubble explanation">
                                        <p>{explanations.depenses}</p>
                                    </div>)}
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('depenses')}
                                    >
                                        <FaCheck/> {showCorrections.depenses ? 'Masquer' : 'Voir'} correction
                                    </button>
                                </div>
                            </div>
                            <h3 className="compact-title mt-1">
                                <FaCalculator/> Partie 2 : Résolution de l'équation
                            </h3>
                            {/* Question 2a */}
                            <div className="question-card" style={{marginTop: '-20px'}}>
                                <div className="question-number2">2a</div>
                                <p>Simplifiez l'équation :</p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        className={`answer-input ${showCorrections.simplification ? 'correction-active' : ''}`}
                                        value={answers.simplification}
                                        onChange={(e) => handleInputChange('simplification', e.target.value)}
                                        minRows={2}
                                        maxRows={4}
                                    />
                                    {showCorrections.simplification && (<div className="info-bubble explanation">
                                        <p>{explanations.simplification}</p>
                                    </div>)}
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('simplification')}
                                    >
                                        <FaCheck/> {showCorrections.simplification ? 'Masquer' : 'Voir'} correction
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="questions-column">
                            {/* Question 1c */}
                            <div className="question-card">
                                <div className="question-number2">1c</div>
                                <p>Exprimez le bénéfice net en fonction de x :</p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        className={`answer-input ${showCorrections.beneficeNet ? 'correction-active' : ''}`}
                                        value={answers.beneficeNet}
                                        onChange={(e) => handleInputChange('beneficeNet', e.target.value)}
                                        minRows={2}
                                        maxRows={4}
                                    />
                                    {showCorrections.beneficeNet && (<div className="info-bubble explanation">
                                        <p>{explanations.beneficeNet}</p>
                                    </div>)}
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('beneficeNet')}
                                    >
                                        <FaCheck/> {showCorrections.beneficeNet ? 'Masquer' : 'Voir'} correction
                                    </button>
                                </div>
                            </div>

                            {/* Question 1d */}
                            <div className="question-card">
                                <div className="question-number2">1d</div>
                                <p>Établissez l'équation permettant de trouver x pour un bénéfice net de 100€ :</p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        className={`answer-input ${showCorrections.equation ? 'correction-active' : ''}`}
                                        value={answers.equation}
                                        onChange={(e) => handleInputChange('equation', e.target.value)}
                                        minRows={2}
                                        maxRows={4}
                                    />
                                    {showCorrections.equation && (<div className="info-bubble explanation">
                                        <p>{explanations.equation}</p>
                                    </div>)}
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('equation')}
                                    >
                                        <FaCheck/> {showCorrections.equation ? 'Masquer' : 'Voir'} correction
                                    </button>
                                </div>
                            </div>
                            {/* Question 2b */}
                            <div className="question-card">
                                <div className="question-number2">2b</div>
                                <p>Solution : Combien d'articles doivent-ils vendre ?</p>
                                <div className="answer-area">
                                    <input
                                        type="text"
                                        className={`answer-input ${showCorrections.solution ? 'correction-active' : ''}`}
                                        value={answers.solution}
                                        onChange={(e) => handleInputChange('solution', e.target.value)}
                                    />
                                    {showCorrections.solution && (<div className="info-bubble explanation">
                                        <p>{explanations.solution}</p>
                                    </div>)}
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('solution')}
                                    >
                                        <FaCheck/> {showCorrections.solution ? 'Masquer' : 'Voir'} correction
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info-bubble property p-2">
                        <div className="info-bubble-title ">
                            <FaInfoCircle/> Méthode de résolution
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

            {/* Page 3 - Activité 4 */}
            <div className="print-page">
                <section className="tp-section compact">
                    <div className="activity-header">
                        <span className="activity-badge">ACTIVITÉ 4</span>
                        <div className="activity-title">
                                <span className="course-title">
                                    <FaCalculator/> <span className="emoji">📰</span> Choix d'abonnement
                                </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <p>
                                    <strong>Un magazine de musique</strong> propose l'offre suivante :
                                    <br/>
                                    « <strong>20% de réduction</strong> pour un abonnement de <strong>12
                                    numéros</strong> + un <strong>numéro spécial gratuit</strong> ! »
                                </p>
                                <p>• Le prix en kiosque est de <strong>4,50 € le numéro</strong> et <strong>6 € le
                                    numéro spécial</strong>.</p>
                                <p>• <strong>Question :</strong> À partir de combien de numéros achetés en kiosque
                                    est-il préférable de s'abonner ?</p>
                            </div>
                        </div>

                        <div className="flex-shrink-0"
                             style={{maxWidth: '250px', cursor: 'pointer', marginTop: '40px'}}>
                            <img
                                src={magazine}
                                alt="Magazine de musique"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(magazine, 'Magazine de musique')}
                            />
                        </div>
                    </div>

                    <h3 className="compact-title">
                        <FaChartLine/> Partie 1 : Modélisation
                    </h3>

                    <div className="questions-container">
                        <div className="questions-column">
                            {/* Question 3a */}
                            <div className="question-card">
                                <div className="question-number2">3a</div>
                                <p>Calculez le prix de l'abonnement (12 numéros avec 20% de réduction) :</p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        className={`answer-input ${showCorrections.prixAbonnement ? 'correction-active' : ''}`}
                                        value={answers.prixAbonnement}
                                        onChange={(e) => handleInputChange('prixAbonnement', e.target.value)}
                                        minRows={2}
                                        maxRows={4}
                                    />
                                    {showCorrections.prixAbonnement && (<div className="info-bubble explanation">
                                        <p>{explanations.prixAbonnement}</p>
                                    </div>)}
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('prixAbonnement')}
                                    >
                                        <FaCheck/> {showCorrections.prixAbonnement ? 'Masquer' : 'Voir'} correction
                                    </button>
                                </div>
                            </div>

                            {/* Question 3b */}
                            <div className="question-card">
                                <div className="question-number2">3b</div>
                                <p>Exprimez le prix en kiosque pour x numéros (incluant le numéro spécial) :</p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        className={`answer-input ${showCorrections.prixKiosque ? 'correction-active' : ''}`}
                                        value={answers.prixKiosque}
                                        onChange={(e) => handleInputChange('prixKiosque', e.target.value)}
                                        minRows={2}
                                        maxRows={4}
                                    />
                                    {showCorrections.prixKiosque && (<div className="info-bubble explanation">
                                        <p>{explanations.prixKiosque}</p>
                                    </div>)}
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('prixKiosque')}
                                    >
                                        <FaCheck/> {showCorrections.prixKiosque ? 'Masquer' : 'Voir'} correction
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="questions-column">
                            {/* Question 3c */}
                            <div className="question-card">
                                <div className="question-number2">3c</div>
                                <p>Établissez l'inéquation permettant de comparer les deux options :</p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        className={`answer-input ${showCorrections.inequation ? 'correction-active' : ''}`}
                                        value={answers.inequation}
                                        onChange={(e) => handleInputChange('inequation', e.target.value)}
                                        minRows={2}
                                        maxRows={4}
                                    />
                                    {showCorrections.inequation && (<div className="info-bubble explanation">
                                        <p>{explanations.inequation}</p>
                                    </div>)}
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('inequation')}
                                    >
                                        <FaCheck/> {showCorrections.inequation ? 'Masquer' : 'Voir'} correction
                                    </button>
                                </div>
                            </div>

                            {/* Question 4a */}
                            <div className="question-card">
                                <div className="question-number2">4a</div>
                                <p>Résolvez l'inéquation :</p>
                                <div className="answer-area">
                                    <AutoResizeTextarea
                                        className={`answer-input ${showCorrections.resolution ? 'correction-active' : ''}`}
                                        value={answers.resolution}
                                        onChange={(e) => handleInputChange('resolution', e.target.value)}
                                        minRows={3}
                                        maxRows={6}
                                    />
                                    {showCorrections.resolution && (<div className="info-bubble explanation">
                                        <p>{explanations.resolution}</p>
                                    </div>)}
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('resolution')}
                                    >
                                        <FaCheck/> {showCorrections.resolution ? 'Masquer' : 'Voir'} correction
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="info-bubble property">
                        <div className="conclusion-answer">
                            <p className="explanation"><strong>Solution finale :</strong> {explanations.conclusion}</p>
                        </div>
                    </div>

                    <h3 className="compact-title">
                        <BsFillQuestionCircleFill/> Je retiens
                    </h3>
                    <div className="info-bubble-title">
                        <FaEquals/> Différence équation/inéquation
                    </div>
                    <div className="conclusion-container">
                        {showConclusion ? (<div className="info-bubble warning">
                            <p>
                                <strong>Équation</strong> : égalité avec une inconnue (ex: 2x + 3 = 7)<br/>
                                <strong>Inéquation</strong> : inégalité avec une inconnue (ex: 2x + 3 > 7)<br/>
                                Même méthode de résolution, mais attention au sens de l'inégalité quand on
                                multiplie/divise par un nombre négatif.
                            </p>

                        </div>) : (<div className="empty-conclusion-space"></div>)}
                    </div>
                    <button
                        className="toggle-conclusion-btn"
                        onClick={() => setShowConclusion(!showConclusion)}
                    >
                        <FaCheck/>{' '}
                        {showConclusion ? 'Masquer la conclusion' : 'Afficher la conclusion'}
                    </button>
                </section>


            </div>
            <div className="print-page">
                <AutoEvaluationGrid/>
            </div>
            <footer className="tp-footer compact">
                <p className="compact-text">Mathématiques 2nde - Applications des équations</p>
                <p className="compact-text">Problèmes économiques concrets</p>
            </footer>

            {modalState.show && (<ModalImage
                imageUrl={modalState.imageUrl}
                altText={modalState.altText}
                onClose={closeModal}
            />)}
        </div>
    </>);
};

export default Act3Equation1erDegre;
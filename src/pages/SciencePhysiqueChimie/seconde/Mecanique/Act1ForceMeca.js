import React, {useRef, useState} from 'react';
import {FaCheck, FaBalanceScale, FaTiktok} from 'react-icons/fa';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import 'katex/dist/katex.min.css';
import {BlockMath, InlineMath} from 'react-katex';
import ModalImage from "../../../../utils/ModalImage";
import poulieImage from "../../../../assets/poulie.png";
import force from "../../../../assets/force.png";
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";
import pomme from "../../../../assets/pomme.png";

const Act1ForceMeca = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const toggleSummary = () => {
        setShowSummary(!showSummary);
    };
    const contentRef = useRef();
    const [showSummary, setShowSummary] = useState(false);

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
        question8: '',
        question9: '',
        question10: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false,
        question6: false,
        question7: false,
        question8: false,
        question9: false,
        question10: false,
    });

    // Réponses attendues
    const correctAnswers = {
        question1: 'Levage simple: F1 = 0,8 N\nLevage avec poulie: F2 = 0,8 N',
        question2: 'Le dynamomètre mesure la valeur de la force.',
        question3: 'Une poulie change: ☑ le sens ☑ la droite d\'action',
        question4: 'Une poulie fixe ne change pas la force nécessaire pour soulever une charge, mais elle permet de changer la direction de cette force.',
        question5: 'F1: Droite d\'action verticale, Sens vers le haut, Valeur 100 N\nF2: Droite d\'action verticale, Sens vers le haut, Valeur 50 N',
        question6: '1 cm pour 25 N',
        question7: 'La masse: balance\nLe poids: dynamomètre',
        question8: 'Oui, le rapport Poids/Masse est constant (environ 9.81 N/kg).',
        question9: 'P = m × g',
        question10: 'P = 2,5 × 9,81 = 24,53 N',
    };

    // Gestionnaires d'événements
    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };
    const [activeSteps, setActiveSteps] = useState([]);

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));

        if (!answers[field] && !showCorrections[field]) {
            setAnswers((prev) => ({...prev, [field]: correctAnswers[field]}));
        }
    };

    const [modalState, setModalState] = useState({
        show: false, imageUrl: '', altText: '',
    });

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState((prev) => ({...prev, show: false}));
    };

    if (className === 'Seconde-mecanique-act1') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }
    const toggleStep = (stepNumber) => {
        setActiveSteps((prev) => prev.includes(stepNumber) ? prev.filter((step) => step !== stepNumber) : [...prev, stepNumber]);
    };
    return (<>
        <BackButton/>
        <div className="tp-container" id="mecanique-content" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Force_Mecanique_Poulie"
                pageCount={2}
                quality="hd"
            />

            {/* PAGE 1 */}
            <div className="print-page" id="page1-start">
                <section className="tp-section compact">
                    <div className="math-chapter-box blue mt-0" style={{padding: '0'}}>
                        <span style={{marginRight: '10px', fontSize: '30px'}}>↗️</span>
                        <h2 className="math-chapter-title-test">Mécanique - Actions mécaniques</h2>
                    </div>
                    <div className="activity-header mt-0">
                        <span className="activity-badge">ACTIVITÉ 1</span>
                        <div className="activity-title">
                      <span className="course-title">
                        <FaBalanceScale/> <span>🏗️</span> « Représenter et caractériser une action mécanique »
                      </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <h5 className="mb-3 text-primary fw-bold">
                                    🎥 "Le défi de la poulie : 20 kg, mais sans fatigue ! 💪😎🔥"
                                </h5>

                                <p style={{textAlign: 'justify', textJustify: 'inter-word', fontSize: '16px'}}>
                                    <span className="fw-bold text-primary">Nora</span> et <span
                                    className="fw-bold text-primary">Yanis</span>, deux ados fans de 🔧 bricolage
                                    sur <span
                                    className="text-body-secondary">TikTok <FaTiktok/></span>, lancent un nouveau défi :
                                    <span className="fw-semibold text-success"> soulever une caisse de 20 kg sans effort 💪</span> !
                                    <br/><br/>
                                    Yanis installe une <span className="fw-bold text-warning">poulie fixe</span> au
                                    plafond et affirme avec confiance :
                                    <br/>
                                    <span
                                        className="fst-italic text-secondary">“On force deux fois moins avec ça ! 😎”</span>
                                    <br/><br/>
                                    Mais dans les commentaires, certains abonnés doutent :
                                    <br/>
                                    <span className="text-danger">“T’es sûr que c’est pas une poulie mobile qu’il faut ? 🤔”</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0"
                             style={{maxWidth: '250px', cursor: 'pointer'}}>
                            <img
                                src={poulieImage}
                                alt="Système de poulie"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(poulieImage, 'Système de poulie')}
                            />
                        </div>
                    </div>

                    <div className="objectif-box" style={{marginTop: '-10px', marginBottom: '10px'}}>
                        <div className="objectif-title"><strong style={{color: 'orangered'}}> Objectif :</strong> 🎯
                        </div>
                        <p>L'objectif est de comprendre comment fonctionne une poulie fixe et de vérifier si elle permet
                            réellement de réduire la force à exercer lors du levage d'une charge.</p>
                    </div>

                    <div className="question-card mt-0">
                        <div className="question-content mt-0">
                            <div className="d-flex align-items-center gap-2">
                                <h4 class="vect-title mb-0"><span>Réaliser</span></h4>
                                <p className="mb-0">Réaliser deux expériences relatives aux deux types de levage puis
                                    compléter la colonne « Expérience » du tableau avec la valeur de la force.</p>
                            </div>


                            <div className="flex-shrink-0"
                                 style={{maxWidth: '100%', cursor: 'pointer', marginTop: '20px', marginBottom: '10px'}}>
                                <img
                                    src={force}
                                    alt="Système de poulie"
                                    className="img-fluid rounded shadow-sm compact-img"
                                    onClick={() => openModal(force, 'Système de poulie')}
                                />
                            </div>
                        </div>

                        {/* Question 2 et 3 côte à côte */}
                        <div style={{display: 'flex', gap: '20px', alignItems: 'flex-start'}}>
                            {/* Question 2 */}
                            <div style={{flex: 1}}>
                                <div className="question-content">
                                    <h4 className="vect-title"><span>Compléter</span></h4>
                                    <p>Le dynamomètre mesure la
                                        <span style={{
                                            display: 'inline-block',
                                            width: '150px',
                                            borderBottom: '1px solid #000',
                                            margin: '0 5px'
                                        }}>
                                                    {showCorrections.question2 ? "valeur" : ""}
                                                </span>
                                        de la force.</p>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question2')}
                                        style={{marginTop: '10px'}}
                                    >
                                        <FaCheck/> {showCorrections.question2 ? 'Masquer' : 'Afficher'} correction
                                    </button>
                                </div>
                            </div>

                            {/* Question 3 */}
                            <div style={{flex: 1}}>
                                <div className="question-content">
                                    <h4 className="vect-title"><span>Cocher</span></h4>
                                    <p>Une poulie change :</p>
                                    <div className="checkbox-options" style={{margin: '10px 0'}}>
                                        <label style={{display: 'block', margin: '5px 0'}}>
                                            <input
                                                type="checkbox"
                                                checked={showCorrections.question3}
                                                readOnly
                                                style={{marginRight: '8px'}}
                                            />
                                            la droite d'action
                                        </label>
                                        <label style={{display: 'block', margin: '5px 0'}}>
                                            <input
                                                type="checkbox"
                                                checked={showCorrections.question3}
                                                readOnly
                                                style={{marginRight: '8px'}}
                                            />
                                            le sens
                                        </label>
                                        <label style={{display: 'block', margin: '5px 0'}}>
                                            <input
                                                type="checkbox"
                                                checked={false}
                                                readOnly
                                                style={{marginRight: '8px'}}
                                            />
                                            la valeur
                                        </label>
                                    </div>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question3')}
                                    >
                                        <FaCheck/> {showCorrections.question3 ? 'Masquer' : 'Afficher'} correction
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="question-content">
                            <div className="d-flex align-items-center gap-2">
                                <h4 className="vect-title mb-0"><span>Communiquer</span></h4>
                                <p className="mb-0">Maher a-t-il raison ? Expliquer.</p>
                            </div>
                            <div className="answer-area">
                            <textarea
                                className="answer-input"
                                value={answers.question4}
                                onChange={(e) => handleInputChange('question4', e.target.value)}
                                rows={3}
                            ></textarea>
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('question4')}
                                >
                                    <FaCheck/> {showCorrections.question4 ? 'Masquer la correction' : 'Afficher la correction'}
                                </button>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

            {/* PAGE 2 */}
            <div className="print-page" id="page2-start">
                <section className="tp-section compact">
                    <div className="question-card">
                        <div className="question-content">
                            <p>Donner les caractéristiques des deux forces en complétant le tableau ci-dessous.</p>
                            <p>Une force se note <InlineMath math="F"/> et se représente par un segment fléché.</p>

                            <table className="table table-bordered text-center shadow-sm">
                                <thead className="table-light">
                                <tr>
                                    <th>Force</th>
                                    <th>Droite d'action</th>
                                    <th>Sens</th>
                                    <th>Valeur (en N)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><strong>F<sub>1</sub></strong></td>
                                    <td>{showCorrections.question5 ? "Verticale" : ".........................."}</td>
                                    <td>{showCorrections.question5 ? "Vers le haut" : ".........................."}</td>
                                    <td>{showCorrections.question5 ? "0,8 N" : ".........................."}</td>
                                </tr>
                                <tr>
                                    <td><strong>F<sub>2</sub></strong></td>
                                    <td>{showCorrections.question5 ? "Verticale" : ".........................."}</td>
                                    <td>{showCorrections.question5 ? "Vers le bas" : ".........................."}</td>
                                    <td>{showCorrections.question5 ? "0,8 N" : ".........................."}</td>
                                </tr>
                                </tbody>
                            </table>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question5')}
                            >
                                <FaCheck/> {showCorrections.question5 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                        </div>
                    </div>

                    <div style={{marginTop: '20px'}}>
                        <div className="question-number2">6</div>
                        <div className="question-content">
                            <div className="d-flex align-items-center gap-2">
                                <h4 className="vect-title mb-0"><span>Modélisation</span></h4>
                                <p className="mb-0">
                                    Compléter l'échelle : 1 cm pour
                                    <span
                                        className="d-inline-block border-bottom"
                                        style={{width: '80px', margin: '0 5px'}} // Correction ici
                                    >
                                      {showCorrections.question6 ? "25 N" : ""}
                                    </span>
                                </p>
                            </div>

                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question6')}
                                style={{marginTop: '10px'}}
                            >
                                <FaCheck/> {showCorrections.question6 ? 'Masquer' : 'Afficher'} correction
                            </button>
                        </div>
                    </div>
                    <div className="math-chapter-box blue" style={{padding: '0', marginTop: '20px'}}>
                        <span style={{marginRight: '10px', fontSize: '30px'}}>↗️</span>
                        <h2 className="math-chapter-title-test">Mécanique - Mesurer la valeur du poids</h2>
                    </div>
                    <div className="activity-header">
                        <span className="activity-badge">ACTIVITÉ 2</span>
                        <div className="activity-title">
                      <span className="course-title">
                        <FaBalanceScale/> <span>🏗️</span> « Mesurer la valeur du poids »
                      </span>
                        </div>
                    </div>
                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <p style={{
                                    textAlign: 'justify', textJustify: 'inter-word', fontSize: '16px', lineHeight: '1.6'
                                }}>
                                    🍎 <strong style={{color: '#d35400'}}>À la fin du 17e siècle</strong>, un
                                    homme
                                    change notre façon de voir le monde : <strong>Isaac
                                    Newton</strong> !<br/><br/>
                                    Il découvre que la <strong style={{color: '#2980b9'}}>masse</strong>, c’est
                                    quelque
                                    chose qu’on peut mesurer. Mais attention !
                                    Dans la vie de tous les jours, on confond
                                    souvent <strong>masse</strong> et <strong>poids</strong>…<br/><br/>
                                    ➡️ <span style={{color: '#0a5e2f'}}>La masse</span>, c’est la quantité de
                                    matière
                                    dans un objet.<br/>
                                    ➡️ <span style={{color: '#e74c3c'}}>Le poids</span>, c’est la force avec
                                    laquelle la
                                    Terre attire cet objet vers elle. 🌍<br/><br/>
                                    🧐 Alors… est-ce qu’il y a un lien entre les deux ?
                                </p>
                            </div>


                        </div>
                        <div className="flex-shrink-0"
                             style={{maxWidth: '250px', cursor: 'pointer', marginTop: '25px'}}>
                            <img
                                src={pomme}
                                alt="Magasin d'accessoires"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(pomme, 'Magasin d\'accessoires')}
                            />
                        </div>
                    </div>

                    <div className="question-card mt-1">
                        {/* Questions 7 et 9 côte à côte */}
                        <div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
                            {/* Question 7 - Appareils de mesure */}
                            <div style={{flex: 1}}>
                                <div className="question-content">
                                    <h4 className="vect-title"><span>S'approprier</span></h4>
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap'
                                    }}>
                                        <span>Indiquer l'appareil à utiliser pour mesurer :  :</span>
                                        <div>
                                            <p><strong>La masse</strong> :
                                                <span style={{
                                                    display: 'inline-block',
                                                    width: '120px',
                                                    borderBottom: '1px solid #000',
                                                    marginLeft: '10px'
                                                }}>
                                                            {showCorrections.question7 ? "balance" : ""}
                                                        </span>
                                            </p>
                                            <p><strong>Le poids</strong> :
                                                <span style={{
                                                    display: 'inline-block',
                                                    width: '120px',
                                                    borderBottom: '1px solid #000',
                                                    marginLeft: '10px'
                                                }}>
                                                            {showCorrections.question7 ? "dynamomètre" : ""}
                                                        </span>
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question7')}
                                        style={{marginTop: '10px'}}
                                    >
                                        <FaCheck/> {showCorrections.question7 ? 'Masquer' : 'Afficher'} correction
                                    </button>
                                </div>
                            </div>

                            {/* Question 9 - Relation P/m */}
                            <div style={{flex: 1}}>
                                <div className="question-content">
                                    <h4 className="vect-title"><span>Raisonner</span></h4>
                                    <div style={{display: 'flex', alignItems: 'baseline', gap: '5px'}}>
                                        <InlineMath math="P ="/>
                                        <span style={{
                                            display: 'inline-block', width: '100px', borderBottom: '1px solid #000'
                                        }}>
                                                    {showCorrections.question9 ? "m × g" : ""}
                                                </span>
                                    </div>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question9')}
                                        style={{marginTop: '10px'}}
                                    >
                                        <FaCheck/> {showCorrections.question9 ? 'Masquer' : 'Afficher'} correction
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Question 8 - Rapport constant */}
                        <div>
                            <div className="question-content">
                                <h4 className="vect-title"><span>Analyser</span></h4>
                                <p style={{marginBottom: '10px'}}>En tenant compte de la variabilité des
                                    mesures, peut-on dire que le rapport
                                    Poids/Masse est
                                    constant ?</p>
                                <div className="answer-area" style={{minHeight: '80px'}}>
                                            <textarea
                                                className="answer-input"
                                                value={answers.question8}
                                                onChange={(e) => handleInputChange('question8', e.target.value)}
                                                rows={3}
                                            />
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question8')}
                                    >
                                        <FaCheck/> {showCorrections.question8 ? 'Masquer' : 'Afficher'} correction
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="question-content">
                            <div class="d-flex align-items-center gap-3">
                                <h4 className="vect-title mb-0"><span>Appliquer</span></h4>
                                <p class="mb-0">Calculer le poids d'un objet de masse 2,5 kg sur Terre (g = 9,81 N/kg)
                                    :</p>
                            </div>
                            <div>
                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question10}
                                        onChange={(e) => handleInputChange('question10', e.target.value)}
                                        rows={1}
                                    />
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question10')}
                                    >
                                        <FaCheck/> {showCorrections.question10 ? 'Masquer' : 'Afficher'} correction
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <div className="print-page" id="page3-start">
                <section className="tp-section compact">


                    <div style={{padding: '20px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h3>📌 À retenir</h3>
                            <button
                                className="correction-btn"
                                onClick={() => toggleStep(1)}
                                style={{marginLeft: '10px'}}
                            >
                                {activeSteps.includes(1) ? 'Masquer' : 'Afficher'} les informations
                            </button>
                        </div>

                        <div className="vector-summary-container">
                            {activeSteps.includes(1) ? (<div className="vector-cards-grid">
                                <div className="vector-card">
                                    <h4 style={{marginBottom: '0.5rem'}}>⚡ Caractéristiques d’une force</h4>
                                    <ul style={{marginLeft: '1rem', marginBottom: '1rem'}}>
                                        <li><strong>Direction</strong> ➝ droite d’action</li>
                                        <li><strong>🧭 Sens</strong></li>
                                        <li><strong>🔢 Valeur</strong> (en N)</li>
                                    </ul>
                                </div>
                                <div className="vector-card">
                                    <h4 style={{marginBottom: '0.5rem'}}>⚖️ Poids et masse</h4>
                                    <p style={{marginBottom: '0.3rem'}}><InlineMath math="P = m \times g"/></p>
                                    <p style={{fontSize: '0.95rem', color: '#555'}}>
                                        avec <InlineMath math="g \approx 9{,}81\,\text{N/kg}"/> (Terre)
                                    </p>
                                </div>
                            </div>) : (<div className="vector-cards-grid" style={{marginTop: '-20px'}}>
                                {/* Cartes vides pour réponse */}
                                <div className="vector-card" style={{
                                    border: '2px dashed #ccc', minHeight: '150px', // Environ 5 lignes
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'
                                }}>
                                </div>

                                <div className="vector-card" style={{
                                    border: '2px dashed #ccc', minHeight: '150px', // Environ 5 lignes
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'
                                }}>
                                </div>
                            </div>)}
                        </div>

                    </div>
                    <AutoEvaluationGrid/>

                </section>

                <footer className="tp-footer">
                    <p>S.CHIHATI - Actions mécaniques et mesure du poids</p>
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

export default Act1ForceMeca;
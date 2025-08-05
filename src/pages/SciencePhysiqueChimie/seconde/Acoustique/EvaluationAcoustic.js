import React, {useRef, useState} from 'react';
import {FaCheck} from 'react-icons/fa';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import sonometreImage from '../../../../assets/sonometre.jpg';
import oscilloscopeImage from '../../../../assets/groupeElectro.png';
import ModalImage from '../../../../utils/ModalImage';
import PrintManager from '../../../../utils/PrintManager';
import {FcRules} from 'react-icons/fc';
import GraphTensionTemps from "../../../../config/GraphTensionTemps";
import GraphTensionTempsImpur from "../../../../config/GraphTensionTempsImpur";
import SoundLevelBar from "../../../../config/SoundLevelBar";
import logolycee from "../../../../assets/logolycee.jpg";
import EvaluationGridCcf from "../../../../config/EvaluationGridCcf";

const EvaluationAcoustic = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [answers, setAnswers] = useState({
        // Exercice I
        question1: '',
        question2: '',
        question3: '',
        question4: '', // Exercice II
        question5: '',
        question6: '',
        question7a: false,
        question7b: false,
        question7c: false,
        question7d: false,
        question8: '',
        question9: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false,
        question6: false,
        question7a: false,
        question7b: false,
        question7c: false,
        question7d: false,
        question8: false,
        question9: false,
    });

    // Réponses attendues
    const correctAnswers = {
        question1: "88 dB",
        question2: "décibel (dB)",
        question3: "Oui, le son produit (88 dB) se situe dans la zone 'Dangereux' (80-100 dB) de l'échelle.",
        question4: "4 mètres. Justification: À 1m = 88 dB, à 2m = 82 dB (88-6), à 4m = 76 dB (82-6). On veut 70 dB, donc il faut encore doubler la distance: 8m donnerait 70 dB (76-6).",
        question5: "Sonomètre",
        question6: "Non, ce n'est pas un son pur car un son pur aurait une courbe sinusoïdale régulière sur l'oscillogramme, alors qu'ici le graphique montre des variations irrégulières.",
        question7a: true,
        question7b: false,
        question7c: true,
        question7d: true,
        question8: "Le bruit devient dangereux à partir de 80 dB. Pour se protéger, il faut porter des protections auditives comme des bouchons d'oreilles ou des casques anti-bruit.",
        question9: "T = 2,62 - 0,35 = 2,27 ms = 0,00227 s. f = 1/T = 1/0,00227 ≈ 440,5 Hz",
    };

    const [modalState, setModalState] = useState({
        show: false, imageUrl: '', altText: '',
    });

    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({
            ...prev, [field]: value,
        }));
    };

    const handleCheckboxChange = (field) => {
        setAnswers((prev) => ({
            ...prev, [field]: !prev[field],
        }));
    };

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({
            ...prev, [field]: !prev[field],
        }));

        if (!answers[field] && !showCorrections[field]) {
            setAnswers((prev) => ({
                ...prev, [field]: correctAnswers[field],
            }));
        }
    };

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };
    const contentRef = useRef();
    const closeModal = () => {
        setModalState((prev) => ({...prev, show: false}));
    };

    if (className === 'Seconde-acoustique-evaluation') {
        return <div>Cette évaluation n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div
            className="tp-container"
            id="acoustic-evaluation-content"
            ref={contentRef}
        >

            <PrintManager
                contentRef={contentRef}
                activityName="Evaluation_Acoustique"
                pageCount={2}
                quality="hd"
            />
            {/* Page 1 */}
            <div className="print-page" id="page1-start">
                <div className="container border rounded p-4 shadow-lg bg-white mt-0">
                    <div className="row mb-3 align-items-center">
                        <div className="col-md-3 text-center">
                            <div
                                className="border rounded p-2"
                                style={{minHeight: "100px", backgroundColor: "#f8f9fa"}}
                            >
                                <img
                                    src={logolycee}
                                    alt="Logo du lycee"
                                    className="img-fluid rounded shadow"
                                    style={{width: '100%', objectFit: 'contain', cursor: 'pointer'}}
                                    onClick={() => openModal(logolycee, "Logo")}
                                />
                            </div>
                        </div>
                        <div className="col-md-9 text-center">
                            <h5 className="text-uppercase text-primary">Baccalauréat Professionnel</h5>
                            <h6 className="text-secondary">Terminale Équipier Polyvalent du Commerce</h6>
                            <h5 className="text-dark mt-3">Épreuve – Science physique</h5>
                        </div>
                    </div>

                    <div className="row text-center border-top border-bottom py-3 bg-light">
                        <div className="col-md-3 border-end">
                            <strong>Contrôle en<br/>Cours de Formation </strong>
                        </div>
                        <div className="col-md-3 border-end">
                            <strong>Situation d’évaluation de<br/>Science physique</strong>
                        </div>
                        <div className="col-md-2 border-end">
                            <strong>Année scolaire<br/>2024-2025</strong>
                        </div>
                        <div className="col-md-2 border-end">
                            <strong>Durée<br/>45 min</strong>
                        </div>
                        <div className="col-md-2">
                            <strong>Note :</strong><br/>/10
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-9">
                            <strong>Établissement :</strong> <em>LP PIERRE-JOSEPH LAURENT</em>
                        </div>
                        <div className="col-md-3 text-end">
                            <strong>Classe :</strong> TPEPC
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-md-8">
                            <strong>NOM et Prénom du
                                CANDIDAT</strong> ..................................................
                        </div>
                        <div className="col-md-4 text-end">
                            <strong>Date d’évaluation :</strong> ___ / ___ / 2025
                        </div>
                    </div>
                    <div className="card border-0 rounded-3 mt-2 shadow-sm" style={{backgroundColor: "#f8f9fa"}}>
                        <div className="card-body py-2 px-3">
                            <p className="card-text mb-0 text-dark" style={{lineHeight: "1.6", fontSize: "0.95rem"}}>
                                🎯 <span className="text-primary">L’objectif de ce CCF</span> est d’évaluer les
                                compétences des élèves à mobiliser
                                leurs connaissances en <span className="text-success">sciences physiques</span> dans des
                                situations professionnelles concrètes,
                                en lien avec l’étude du <span className="text-warning">son</span>, de l’<span
                                className="text-danger">énergie</span> et des appareils utilisés
                                dans leur futur environnement de travail.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Exercice I */}
                <section className="tp-section">
                    <h3>
                        <FcRules/> Exercice I - Groupe électrogène
                    </h3>
                    <p>
                        On donne la fiche signalétique d'un groupe électrogène :
                    </p>

                    <div className="info-bubble">
                        <div className="d-flex align-items-start flex-wrap"
                             style={{gap: '20px'}}>
                            <div style={{flex: 1, minWidth: '300px'}}>
                                <div className="info-bubble-title">
                                    <BsFillQuestionCircleFill/> Fiche technique
                                </div>
                                <ul className="info-text">
                                    <li>Autonomie (en heures) : 4,3</li>
                                    <li>Capacité de la cuve (en litres) : 2,5</li>
                                    <li><strong>Niveau sonore à 1 m (en dB) : 88</strong></li>
                                    <li>Consommation à 3/4 de puissance par heure (en litres) : 0,58</li>
                                    <li>Disjoncteur thermique : oui</li>
                                    <li>Dimensions (en cm) : long. 45 x larg. 23.5 x haut. 38</li>
                                    <li>Intensité nominale (en ampère heure) : 3,9</li>
                                    <li>Sécurité d'huile : oui</li>
                                </ul>
                            </div>
                            {/* Partie droite : image */}
                            <div
                                className="flex-shrink-0"
                                style={{
                                    maxWidth: '250px', cursor: 'pointer', marginTop: '50px',
                                }}
                            >
                                <img
                                    src={oscilloscopeImage}
                                    alt="Lancer de Dés"
                                    className="img-fluid rounded shadow-sm compact-img"
                                    onClick={() => openModal(oscilloscopeImage, 'Lancer de Dés')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="question">
                        <div className="question-header">
                            <div className="question-number">1</div>
                            <p>Relever dans la fiche signalétique le niveau d'intensité acoustique du groupe
                                électrogène à une distance de 1 m.</p>
                        </div>
                        <div className="answer-container">
                            <input
                                type="text"
                                className={`answer-input ${showCorrections.question1 ? 'correction-active' : ''}`}
                                value={answers.question1}
                                onChange={(e) => handleInputChange('question1', e.target.value)}
                            />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('question1')}
                            >
                                <FaCheck/> Correction
                            </button>
                        </div>
                    </div>

                    <div className="question">
                        <div className="question-header">
                            <div className="question-number">2</div>
                            <p>Préciser l'unité du niveau d'intensité acoustique.</p>
                        </div>
                        <div className="answer-container">
                            <input
                                type="text"
                                className={`answer-input ${showCorrections.question2 ? 'correction-active' : ''}`}
                                value={answers.question2}
                                onChange={(e) => handleInputChange('question2', e.target.value)}
                            />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('question2')}
                            >
                                <FaCheck/> Correction
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Page 2 */}
            <div className="print-page" id="page2-start">
                {/* Exercice II */}
                <section className="tp-section">
                    <div className="question">
                        <div className="question-header">
                            <div className="question-number">3</div>
                            <p>
                                À partir du schéma ci-dessous, préciser en justifiant si le son produit par le
                                groupe électrogène peut être dangereux.
                            </p>

                        </div>
                        <SoundLevelBar/>
                        <div className="answer-container">
                                <textarea
                                    className={`answer-input ${showCorrections.question3 ? 'correction-active' : ''}`}
                                    rows="2"
                                    value={answers.question3}
                                    onChange={(e) => handleInputChange('question3', e.target.value)}
                                />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('question3')}
                            >
                                <FaCheck/> Correction
                            </button>
                        </div>
                    </div>

                    <div className="question mb-0 mt-0">
                        <div className="question-header">
                            <div className="question-number">4</div>
                            <p>
                                Le niveau d'intensité sonore diminue de 6 dB lorsque la distance double. Indiquer la
                                distance à laquelle il faut placer le groupe électrogène, pour que l'on ne mesure
                                plus que 70 dB. Justifier la réponse.
                            </p>
                        </div>
                        <div className="answer-container">
                            <textarea
                                className={`answer-input ${showCorrections.question4 ? 'correction-active' : ''}`}
                                rows="3"
                                value={answers.question4}
                                onChange={(e) => handleInputChange('question4', e.target.value)}
                            />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('question4')}
                            >
                                <FaCheck/> Correction
                            </button>
                        </div>
                    </div>
                    <h3 className="mt-3">
                        <FcRules/> Exercice II - Rétroprojecteur
                    </h3>
                    <p>
                        Avant commercialisation, le fabricant a mesuré le niveau sonore produit par le ventilateur
                        du rétroprojecteur en fonctionnement. Il obtient 52 dB à la distance de 1 mètre.
                    </p>

                    <div className="question">
                        <div className="d-flex align-items-start flex-wrap"
                             style={{gap: '20px'}}>
                            {/* Partie gauche : texte */}
                            <div style={{flex: 1}}>
                                <div className="question-header">
                                    <div className="question-number">5</div>
                                    <p>Nommer l'appareil utilisé pour effectuer cette mesure.</p>
                                </div>
                                <div className="answer-container">
                                    <input
                                        type="text"
                                        className={`answer-input ${showCorrections.question5 ? 'correction-active' : ''}`}
                                        value={answers.question5}
                                        onChange={(e) => handleInputChange('question5', e.target.value)}
                                    />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('question5')}
                                    >
                                        <FaCheck/> Correction
                                    </button>
                                </div>

                            </div>
                            <div className="flex-shrink-0"
                                 style={{maxWidth: '100px', cursor: 'pointer', margin: '10px 0'}}>
                                <img
                                    src={sonometreImage}
                                    alt="Sonomètre"
                                    className="img-fluid rounded shadow-sm compact-img"
                                    onClick={() => openModal(sonometreImage, "Sonomètre")}/>
                            </div>
                        </div>
                    </div>
                    <div className="question mt-0">
                        <div className="question-header mb-0">
                            <div className="question-number">6</div>

                            <p>
                                Pour analyser le bruit du rétroprojecteur, un micro est relié à un oscilloscope, donnant
                                l'oscillogramme ci-dessous:
                            </p>
                        </div>
                        <div style={{marginTop: '-30px', marginBottom: '-35px'}}><GraphTensionTempsImpur/></div>

                    </div>
                </section>
            </div>
            <div className="print-page" id="page3-start">
                <section className="tp-section compact">
                    <p>Le son produit est-il un son pur ? Justifier la réponse.</p>
                    <div className="answer-container">
                                        <textarea
                                            className={`answer-input ${showCorrections.question6 ? 'correction-active' : ''}`}
                                            rows="3"
                                            value={answers.question6}
                                            onChange={(e) => handleInputChange('question6', e.target.value)}
                                        />
                        <button
                            className="correction-btn"
                            onClick={() => toggleCorrection('question6')}
                        >
                            <FaCheck/> Correction
                        </button>
                    </div>

                    <div className="question modern-question p-4 rounded shadow-sm bg-white mb-1 mt-0">
                        <h5 className="mb-3 fw-bold text-primary">Question 7</h5>
                        <p className="mb-4">
                            Dans le but de réduire le niveau sonore du rétroprojecteur, les modifications
                            suivantes
                            sont
                            proposées :
                        </p>

                        <div className="row g-3">
                            {[{
                                id: 'question7a',
                                text: "Ajouter plusieurs plaques de mousse à proximité du moteur sans contact direct, ni risque d'échauffement."
                            }, {
                                id: 'question7b', text: "Boucher complètement les grilles d'aération."
                            }, {
                                id: 'question7c', text: "Réduire la fréquence de rotation du ventilateur."
                            }, {
                                id: 'question7d',
                                text: "Rajouter des « silent-blocs » entre le ventilateur et son support."
                            },].map(({id, text}) => (<div key={id} className="col-md-6">

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={id}
                                            checked={answers[id]}
                                            onChange={() => handleCheckboxChange(id)}
                                        />
                                        <label className="form-check-label ms-2" htmlFor={id}>
                                            {text}
                                        </label>
                                    </div>
                                </div>

                            ))}
                        </div>

                        <div className="text-end mt-4">
                            <button
                                className="btn correction-btnoptic"
                                onClick={() => {
                                    toggleCorrection('question7a');
                                    toggleCorrection('question7b');
                                    toggleCorrection('question7c');
                                    toggleCorrection('question7d');
                                }}
                            >
                                <FaCheck/> Correction
                            </button>
                        </div>
                    </div>

                    <div className="question mb-0 mt-3">
                        <div className="question-header">
                            <div className="question-number">8</div>
                            <p>
                                À quel niveau sonore le bruit devient-il dangereux pour la santé, et quelles
                                protections doit-on porter pour se protéger ?
                            </p>
                        </div>
                        <div className="answer-container">
                                <textarea
                                    className={`answer-input ${showCorrections.question8 ? 'correction-active' : ''}`}
                                    rows="3"
                                    value={answers.question8}
                                    onChange={(e) => handleInputChange('question8', e.target.value)}
                                />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('question8')}
                            >
                                <FaCheck/> Correction
                            </button>
                        </div>
                    </div>
                    <div style={{marginTop: '-3%'}}><GraphTensionTemps/></div>

                    <div className="question mt-3">
                        <div className="question-number" style={{marginTop: '-20px'}}>9</div>
                        <div className="question-header">
                            <p style={{fontWeight: '500'}}>
                                Déterminez la période T de l'onde, puis calculez la fréquence f.
                            </p>
                        </div>
                        <div className="answer-container">
                                    <textarea
                                        className={`answer-input ${showCorrections.question9 ? 'correction-active' : ''}`}
                                        rows="3"
                                        value={answers.question9}
                                        onChange={(e) => handleInputChange('question9', e.target.value)}
                                    />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('question9')}
                            >
                                <FaCheck/> Correction
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <div className="print-page">
                <EvaluationGridCcf/>
            </div>

            <footer className="tp-footer">
                <p>Baccalauréat Professionnel - Sciences Physiques - 2024-2025</p>
                <p>Lycée Professionnel</p>
            </footer>

        </div>

        {modalState.show && (<ModalImage
            imageUrl={modalState.imageUrl}
            altText={modalState.altText}
            onClose={closeModal}
        />)}
    </>);
};

export default EvaluationAcoustic;
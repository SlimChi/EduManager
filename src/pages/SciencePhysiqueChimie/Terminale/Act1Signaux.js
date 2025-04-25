import React, {useRef, useState} from 'react';
import {FaPrint, FaCheck, FaLightbulb, FaPlus, FaEquals, FaCode} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io';
import '../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../components/navigation/BackButton';
import PrintManager from '../../../utils/PrintManager';
import 'katex/dist/katex.min.css';
import {BlockMath, InlineMath} from 'react-katex';
import {Card} from "react-bootstrap";
import ModalImage from "../../../utils/ModalImage";
import spectreLampes from "../../../assets/led2.jpg";
import schemaLaser from "../../../assets/laserfuseau.png";
import laser2 from "../../../assets/2laser.png";
import infra from "../../../assets/infra.png";
import AutoEvaluationGrid from "../../../config/AutoEvaluationGrid";

const Act1Signaux = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const toggleSummary = () => {
        setShowSummary(!showSummary);
    };
    const contentRef = useRef();
    const [showSummary, setShowSummary] = useState(false);
    const [showTableCorrection, setShowTableCorrection] = useState(false);
    const [showSourcesCorrection, setShowSourcesCorrection] = useState(false);

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        act2_q4: '', act2_q5: '', act2_q6: '', act2_q7: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        act2_q4: false, act2_q5: false, act2_q6: false, act2_q7: false
    });

    // Réponses attendues
    const correctAnswers = {
        // Sources lumineuses
        hotSources: ['lampe à incandescence', 'Soleil', 'lampe halogène', 'bougie'],
        coldSources: ['LED', 'lampe fluocompacte', 'laser', 'tube néon'],

        // Tableau
        tableData: {
            incandescence: {
                flux: '574,5 lm', rendement: '14,4', efficacite: '1'
            }, led: {
                flux: '568 lm', rendement: '94,7', efficacite: '6,6'
            }, fluocompacte: {
                flux: '937 lm', rendement: '133,9', efficacite: '9,3'
            }
        },

        // Activité 2
        act2_q4: 'Distance laser-mur : d\' = 7 m\nDiamètre de la tache à 7 m : D\' = 5 mm',
        act2_q5: 'C\'est le schéma 2 qui est correct car quand la distance augmente, le diamètre du faisceau augmente légèrement.',
        act2_q6: 'C\'est Samir qui a raison.',
        act2_q7: 'Oui, un faisceau laser est très directif car même à 7 m de distance, le diamètre du faisceau ne s\'élargit que très peu (de 2 mm à 5 mm).'
    };

    // Gestionnaires d'événements
    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };

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

    if (className === 'Seconde-signaux-act1') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Signaux_Lumineux"
                pageCount={2}
                quality="hd"
            />

            {/* PAGE 1 - ACTIVITÉ 1 */}
            <div className="print-page">
                <div className="math-chapter-box blue" style={{padding: '0'}}>
                    <span style={{marginRight: '10px', fontSize: '30px'}}>💡</span>
                    <h2 className="math-chapter-title-test">Activité 1 : Caractérisation des sources lumineuses</h2>
                </div>

                <div className="activity-header">
                    <span className="activity-badge">ACTIVITÉ 1</span>
                    <div className="activity-title">
                      <span className="course-title">
                        <FaLightbulb/> <span>🔦</span> « Sources lumineuses et efficacité énergétique »
                      </span>
                    </div>
                </div>

                <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                    <div style={{flex: 1, minWidth: '300px'}}>
                        <div className="renovation-contexte">
                            <p style={{textAlign: 'justify', textJustify: 'inter-word', fontSize: '16px'}}>
                                🏠 <strong>Sofia vient d'aménager dans son nouvel appartement et souhaite installer un
                                éclairage pratique et économique.</strong><br/><br/>
                                Elle hésite entre des ampoules fluocompactes et des ampoules LED 💡.<br/>
                                Après quelques recherches, son frère Yanis lui conseille d'opter pour les LED, qu'il
                                juge plus efficaces sur le long terme 🔋.<br/><br/>
                                <strong>Yanis a-t-il raison ?</strong>
                            </p>
                        </div>
                    </div>
                    <div className="flex-shrink-0"
                         style={{maxWidth: '320px', cursor: 'pointer', marginBottom: '10px'}}>
                        <img
                            src={spectreLampes}
                            alt="Spectres de différentes lampes"
                            className="img-fluid rounded shadow-sm compact-img"
                            onClick={() => openModal(spectreLampes, 'Spectres de lampes')}
                        />
                    </div>
                </div>

                {/* Question 1 */}
                <div className="question-card" style={{marginTop: '20px'}}>
                    <div className="question-number2">1</div>
                    <div className="question-content">
                        <h4 className="vect-title"><span>Analyser/Raisonner</span></h4>
                        <p>On donne le spectre d'émission de trois types de lampes. Une source chaude de lumière
                            a un spectre d'émission continu (contient les couleurs à la suite et sans interruption).</p>

                        <p>En utilisant les spectres et vos connaissances, compléter :</p>

                        <div className="sources-list2" style={{margin: '15px 0'}}>
                            <p style={{marginBottom: '10px'}}>
                                <strong>● sources chaudes de lumière : </strong>
                                {showSourcesCorrection ? (<span
                                    className="answer-text2">lampe à incandescence, Soleil, lampe halogène, bougie</span>) : (
                                    <span className="answer-blank2">________, ________, ________, ________</span>)}
                            </p>

                            <p style={{marginBottom: '10px'}}>
                                <strong>● sources froides de lumière : </strong>
                                {showSourcesCorrection ? (
                                    <span className="answer-text2">LED, lampe fluocompacte, laser, tube néon</span>) : (
                                    <span className="answer-blank2">________, ________, ________, ________</span>)}
                            </p>
                        </div>

                        <button
                            className="correction-btnoptic"
                            onClick={() => setShowSourcesCorrection(!showSourcesCorrection)}
                            style={{marginTop: '5px'}}
                        >
                            <FaCheck/> {showSourcesCorrection ? 'Masquer la correction' : 'Afficher la correction'}
                        </button>
                    </div>
                </div>

                {/* Question 2 */}
                <div className="question-card">
                    <div className="question-number2">2</div>
                    <div className="question-content">
                        <h4 className="vect-title"><span>Réaliser</span></h4>
                        <p>La surface éclairée par la lampe est S = 4πd² (surface d'une sphère). Calculer S en m² pour d
                            = 20 cm.</p>

                        <div className="answer-area" style={{marginTop: '10px'}}>
                            <p>
                                <strong>Calcul : </strong>
                                {showTableCorrection ? (<span className="math-answer"><InlineMath
                                    math="S = 4 \times \pi \times 0.2^2 = 0,5 \, \text{m}^2"/></span>) : (
                                    <span className="answer-blank">S = 4 × π × ______ = ______ m²</span>)}
                            </p>
                            <button
                                className="correction-btnoptic"
                                onClick={() => setShowTableCorrection(!showTableCorrection)}
                                style={{marginTop: '8px'}}
                            >
                                <FaCheck/> {showTableCorrection ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Question 3-8 (Tableau) */}
                <div className="question-card">
                    <div className="question-number2">3-8</div>
                    <div className="question-content">
                        <h4 className="vect-title"><span>Réaliser/Valider</span></h4>
                        <p>Compléter le tableau suivant avec les calculs demandés :</p>

                        <div className="table-responsive" style={{margin: '20px 0'}}>
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Lampe</th>
                                    <th>à incandescence</th>
                                    <th>LED</th>
                                    <th>fluocompacte</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Éclairement E (lx)</td>
                                    <td>1 149</td>
                                    <td>1 136</td>
                                    <td>1 874</td>
                                </tr>
                                <tr>
                                    <td>Flux lumineux (lm)<br/><InlineMath math="F = E \times S"/></td>
                                    <td>{showTableCorrection ? correctAnswers.tableData.incandescence.flux : '...'}</td>
                                    <td>{showTableCorrection ? correctAnswers.tableData.led.flux : '...'}</td>
                                    <td>{showTableCorrection ? correctAnswers.tableData.fluocompacte.flux : '...'}</td>
                                </tr>
                                <tr>
                                    <td>Puissance électrique P (W)</td>
                                    <td>40</td>
                                    <td>6</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Rendement lumineux (lm/W)<br/><InlineMath math="\frac{F}{P}"/></td>
                                    <td>{showTableCorrection ? correctAnswers.tableData.incandescence.rendement : '...'}</td>
                                    <td>{showTableCorrection ? correctAnswers.tableData.led.rendement : '...'}</td>
                                    <td>{showTableCorrection ? correctAnswers.tableData.fluocompacte.rendement : '...'}</td>
                                </tr>
                                <tr>
                                    <td>Efficacité énergétique<br/>(par rapport à l'incandescence)</td>
                                    <td>1</td>
                                    <td>{showTableCorrection ? correctAnswers.tableData.led.efficacite : '...'}</td>
                                    <td>{showTableCorrection ? correctAnswers.tableData.fluocompacte.efficacite : '...'}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="answer-area" style={{marginTop: '15px'}}>
                            <p><strong>Questions complémentaires :</strong></p>

                            <div style={{marginBottom: '15px'}}>
                                <p>
                                    <strong>4. Quelle lampe offre la meilleure efficacité énergétique ?</strong><br/>
                                    {showTableCorrection ? (
                                        <span className="answer-text">La lampe fluocompacte offre la meilleure efficacité énergétique (9,3 contre 6,6 pour la LED et 1 pour l'incandescence).</span>) : (
                                        <span
                                            className="answer-blank">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</span>)}
                                </p>
                            </div>

                            <div style={{marginBottom: '15px'}}>
                                <p>
                                    <strong>5. Yanis a-t-il raison de conseiller les LED ? Justifiez.</strong><br/>
                                    {showTableCorrection ? (
                                        <span className="answer-text">Yanis a raison de conseiller les LED car elles sont 6,6 fois plus efficaces énergétiquement qu'une lampe à incandescence, même si les fluocompactes sont encore plus efficaces.</span>) : (
                                        <span className="answer-blank">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .<br/>
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</span>)}
                                </p>
                            </div>

                            <button
                                className="correction-btnoptic"
                                onClick={() => setShowTableCorrection(!showTableCorrection)}
                                style={{marginTop: '5px'}}
                            >
                                <FaCheck/> {showTableCorrection ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE 2 - ACTIVITÉ 2 */}
            <div className="print-page">
                <div className="math-chapter-box blue" style={{padding: '0'}}>
                    <span style={{marginRight: '10px', fontSize: '30px'}}>🔴</span>
                    <h2 className="math-chapter-title-test">Activité 2 : Propriétés d'un faisceau laser</h2>
                </div>

                <div className="activity-header">
                    <span className="activity-badge">ACTIVITÉ 2</span>
                    <div className="activity-title">
                      <span className="course-title">
                        <FaLightbulb/> <span>💫</span> « Mettre en évidence les propriétés d'un faisceau laser »
                      </span>
                    </div>
                </div>

                <div className="d-flex align-items-start flex-wrap" style={{gap: '20px', marginBottom: '20px'}}>
                    <div style={{flex: 1, minWidth: '300px'}}>
                        <div className="renovation-contexte">
                            <p style={{textAlign: 'justify', textJustify: 'inter-word', fontSize: '16px'}}>
                                🔬 <strong>Naïma et Léo font une expérience en classe avec un pointeur
                                laser.</strong><br/><br/>
                                Ils ont appris qu'un laser émet une lumière d'une seule couleur 🎯 et qu'elle se propage
                                en ligne droite ➡️.<br/><br/>
                                Deux schémas leur sont proposés pour illustrer cette trajectoire lumineuse.<br/><br/>
                                <strong>Naïma choisit le schéma 1, tandis que Léo préfère le schéma 2. 🔍 Qui a raison
                                    ?</strong>
                            </p>
                        </div>
                    </div>
                    <div className="flex-shrink-0"
                         style={{maxWidth: '200px', cursor: 'pointer'}}>
                        <img
                            src={schemaLaser}
                            alt="Schémas de faisceau laser"
                            className="img-fluid rounded shadow-sm compact-img"
                            onClick={() => openModal(schemaLaser, 'Schémas laser')}
                        />
                    </div>
                </div>
                <div className="flex-shrink-0"
                     style={{maxWidth: '100%', cursor: 'pointer', marginBottom: '10px'}}>
                    <img
                        src={laser2}
                        alt="Spectres de différentes lampes"
                        className="img-fluid rounded shadow-sm compact-img"
                        onClick={() => openModal(laser2, 'Spectres de lampes')}
                    />
                </div>
                {/* Question 1 */}
                <div className="question-card">
                    <div className="question-content">
                        <h4 className="vect-title"><span>Analyser/Raisonner</span></h4>
                        <p>1 . Sans allumer le laser, comment peut-on connaître sa couleur ?</p>
                        <div className="flex-shrink-0"
                             style={{maxWidth: '100%', cursor: 'pointer', marginBottom: '10px'}}>
                            <img
                                src={infra}
                                alt="Spectres de différentes lampes"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(infra, 'Spectres de lampes')}
                            />
                        </div>
                        <div className="answer-area">
                            <textarea
                                className="answer-input"
                                value={showCorrections.act2_q1 ? "On peut connaître la couleur d'un laser sans l'allumer en relevant la valeur de sa longueur d'onde (par exemple λ = 532 nm correspond au vert)." : ""}
                                readOnly
                                rows={2}
                                style={{width: '100%', padding: '8px', marginBottom: '10px'}}
                                placeholder={showCorrections.act2_q1 ? "Reponse" : ""}
                            ></textarea>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('act2_q1')}
                            >
                                <FaCheck/> {showCorrections.act2_q1 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Question 2 */}
                <div className="question-card">
                    <div className="question-content">
                        <h4 className="vect-title"><span>Analyser/Raisonner</span></h4>
                        <p>2 . Le faisceau du laser peut-il donner un spectre ? Justifier la réponse.</p>

                        <div className="answer-area">
                            <textarea
                                className="answer-input"
                                value={showCorrections.act2_q2 ? "Le faisceau du laser donnera un spectre avec une seule raie de la même couleur que le laser." : ""}
                                readOnly
                                rows={3}
                                placeholder={showCorrections.act2_q2 ? "" : "Cliquez sur 'Afficher la correction' pour voir la réponse"}
                            ></textarea>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('act2_q2')}
                            >
                                <FaCheck/> {showCorrections.act2_q2 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Question 3-4 */}
                <div className="question-card">
                    <div className="question-content">
                        <h4 className="vect-title"><span>Réaliser</span></h4>
                        <p><strong>Consigne de sécurité :</strong> Attention, il ne faut jamais se placer dans l'axe du
                            faisceau laser !</p>

                        <p>Mesures expérimentales :</p>
                        <ul>
                            <li>3 . Placer un écran blanc à 5 cm du faisceau laser, allumer le laser puis mesurer le
                                diamètre D du faisceau obtenu.
                            </li>
                            <li>4 . Projeter le faisceau laser au fond de la classe (distance d' = 7 m) et mesurer le
                                diamètre D' de la tache obtenue.
                            </li>
                        </ul>

                        <div className="answer-area">
                            <p>Résultats des mesures :</p>
                            <textarea
                                className="answer-input"
                                value={showCorrections.act2_q4 ? "Distance laser-mur : d' = 7 m\nDiamètre de la tache à 7 m : D' = 5 mm" : ""}
                                readOnly
                                rows={3}
                                placeholder={showCorrections.act2_q4 ? "" : "Cliquez sur 'Afficher la correction' pour voir les mesures"}
                            ></textarea>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('act2_q4')}
                            >
                                <FaCheck/> {showCorrections.act2_q4 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Question 5-7 */}
                <div className="question-card">
                    <div className="question-content">
                        <h4 className="vect-title"><span>Valider/Communiquer</span></h4>

                        <div className="answer-area">
                            <p>5 . À l'aide des mesures précédentes, dire quel est le schéma correct. Justifier la
                                réponse.</p>
                            <textarea
                                className="answer-input"
                                value={showCorrections.act2_q5 ? "C'est le schéma 2 qui est correct car quand la distance augmente, le diamètre du faisceau augmente légèrement." : ""}
                                readOnly
                                rows={2}
                                placeholder={showCorrections.act2_q5 ? "" : "Cliquez sur 'Afficher les corrections' pour voir la réponse"}
                            ></textarea>

                            <p>6 . Qui a raison entre Naïma et Léo ?</p>
                            <textarea
                                className="answer-input"
                                value={showCorrections.act2_q6 ? "C'est Léo qui a raison." : ""}
                                readOnly
                                rows={1}
                                placeholder={showCorrections.act2_q6 ? "" : "Cliquez sur 'Afficher les corrections' pour voir la réponse"}
                            ></textarea>

                            <p>7 . Est-il raisonnable d'affirmer qu'un faisceau laser est très directif ? Expliquer.</p>
                            <textarea
                                className="answer-input"
                                value={showCorrections.act2_q7 ? "Oui, un faisceau laser est très directif car même à 7 m de distance, le diamètre du faisceau ne s'élargit que très peu (de 2 mm à 5 mm)." : ""}
                                readOnly
                                rows={3}
                                placeholder={showCorrections.act2_q7 ? "" : "Cliquez sur 'Afficher les corrections' pour voir la réponse"}
                            ></textarea>

                            <button
                                className="correction-btnoptic"
                                onClick={() => {
                                    toggleCorrection('act2_q5');
                                    toggleCorrection('act2_q6');
                                    toggleCorrection('act2_q7');
                                }}
                                style={{marginTop: '10px'}}
                            >
                                <FaCheck/> {showCorrections.act2_q5 ? 'Masquer les corrections' : 'Afficher les corrections'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* À retenir */}
                <div style={{padding: '20px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h3>📌 À retenir</h3>
                        <button
                            className="correction-btn"
                            onClick={toggleSummary}
                            style={{marginLeft: '10px'}}
                        >
                            {showSummary ? 'Masquer' : 'Afficher'} les informations
                        </button>
                    </div>

                    <div className="vector-summary-container">
                        {showSummary ? (<div className="vector-cards-grid">
                            <div className="vector-card vector-geometry-card">
                                <h4>Sources lumineuses</h4>
                                <p><strong>Sources chaudes</strong> : spectre continu (ex: incandescence, Soleil)
                                </p>
                                <p><strong>Sources froides</strong> : spectre discontinu (ex: LED, laser)</p>
                                <p><strong>Rendement lumineux</strong> : Φ/P (lm/W)</p>
                                <p><strong>Efficacité énergétique</strong> : rapport des rendements par rapport à
                                    l'incandescence</p>
                            </div>
                            <div className="vector-card vector-geometry-card">
                                <h4>Propriétés du laser</h4>
                                <p><strong>Monochromatique</strong> : une seule longueur d'onde</p>
                                <p><strong>Directif</strong> : faible divergence du faisceau</p>
                                <p><strong>Cohérent</strong> : ondes en phase</p>
                            </div>
                        </div>) : (<div className="vector-cards-grid">
                            <div className="vector-card" style={{
                                border: '2px dashed #ccc',
                                minHeight: '250px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#999'
                            }}>
                            </div>
                        </div>)}
                    </div>
                </div>

                <AutoEvaluationGrid/>
                <footer className="tp-footer">
                    <p>Activité sur les signaux lumineux - Chapitre 15 : Choisir une source lumineuse</p>
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

export default Act1Signaux;
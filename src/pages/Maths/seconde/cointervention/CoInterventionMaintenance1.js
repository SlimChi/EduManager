import React, {useRef, useState} from 'react';
import {FaPrint, FaCheck} from 'react-icons/fa';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import 'katex/dist/katex.min.css';
import {BlockMath, InlineMath} from 'react-katex';
import {Card} from "react-bootstrap";
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";
import pneuUsure from "../../../../assets/pneuuse.jpg";
import jaugeProfondeur from "../../../../assets/jauge-profondeur.jpg";
import pneuindic from "../../../../assets/pneuindic.png";
import pneu1 from "../../../../assets/pneu1.jpg";
import pneu2 from "../../../../assets/pneu2.jpg";
import pneu3 from "../../../../assets/pneu3.jpg";
import ModalImage from "../../../../utils/ModalImage";
import {Table} from 'react-bootstrap';
import AutomatismesTerminal from "../../../../config/AutomatismesTerminal";
import Automatismes from "../../../../config/Automatismes";

const CoInterventionMaintenance1 = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [modalState, setModalState] = useState({
        show: false, imageUrl: '', altText: '',
    });

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState((prev) => ({...prev, show: false}));
    };

    const contentRef = useRef();
    const [showSummary, setShowSummary] = useState(false);

    // États pour les réponses
    const [answers, setAnswers] = useState({
        q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7_1: '', q7_2: '', q7_3: '', q7_4: '', q7_5: '', q7_6: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        q1: false, q2: false, q3: false, q4: false, q5: false, q6: false, q7: false
    });

    const toggleCorrection = (field) => {
        if (field === 'q7') {
            setAnswers({
                ...answers, q7_1: `3/4 × 25.4 = 19.05 mm 
                    Conversion pouces → millimètres :
                    1 pouce = 25.4 mm donc 3/4 pouce = 0.75 × 25.4
                    Application numérique : 0.75 × 25.4 = 19.05 mm`,

                q7_2: `π × (35/2)² ≈ 962 mm²
                    Calcul de l'aire d'un disque :
                    Aire = π × rayon² (rayon = diamètre/2)
                    Rayon = 35/2 = 17.5 mm
                    Aire = π × 17.5² ≈ 3.1416 × 306.25 ≈ 962 mm²`,

                q7_3: `150 × 0.95 = 142.5 kg
                    Calcul de masse volumique :
                    Masse = Volume × Masse volumique
                    Données : 150 L d'huile à 0.95 kg/L
                    Calcul : 150 × 0.95 = 142.5 kg`,

                q7_4: `2 × (120 + 80) = 400 cm
                    Périmètre d'un rectangle :
                    P = 2 × (Longueur + Largeur)
                    Application : 2 × (120 cm + 80 cm) = 400 cm`,

                q7_5: `75 ÷ 50 = 1.5 h = 90 min
                    Calcul de durée :
                    Temps = Distance / Vitesse
                    75 km ÷ 50 km/h = 1.5 heures
                    Conversion heures → minutes : 1.5 × 60 = 90 min`,

                q7_6: `(8 ÷ 100) × 350 = 28 L
                    Calcul de consommation :
                    8 L aux 100 km → consommation unitaire = 8/100 = 0.08 L/km
                    Pour 350 km : 0.08 × 350 = 28 L`
            });
        } else {
            const correctionMap = {
                q1: `Le client doit changer ses pneus. Nous sommes sur les témoins d'usure.
                  Diagnostic technique :
                  - Les témoins d'usure sont des indicateurs en relief dans les rainures`,

                q2: `La profondeur des pneus est de 2,5 mm.
                  Lecture de jauge :
                  - La jauge montre clairement 2.5 mm`,

                q3: `Oui, la profondeur des pneus est conforme car 2,5 mm > 1,6 mm (limite réglementaire).`,

                q4: `D = 2 × (205 × 0.55) + (16 × 25.4) = 631.9 mm → 632 mm
                  Calcul détaillé du diamètre total :
                  1) Hauteur du flanc : 205 mm × 55% = 112.75 mm
                  2) Conversion jante : 16" × 25.4 mm/pouce = 406.4 mm
                 3) Diamètre total : (2 × flanc) + jante
                    = (2 × 112.75) + 406.4 = 631.9 mm
                 Arrondi technique : 632 mm`,

                q5: `P = π × 632 ≈ 1985.7 mm → 1986 mm
                  Calcul du périmètre :
                  Formule : P = π × diamètre
                 Application : π × 632 mm ≈ 3.1416 × 632
                 Résultat : 1985.7 mm
                Arrondi métrologique : 1986 mm`,

                q6: `L = 10 × 1986 = 19860 mm = 1986 cm
                Conversion d'unités :
                  1) Calcul initial : 10 × 1986 mm = 19860 mm
                  2) Conversion mm → cm : ÷10
                  19860 mm = 1986 cm
                  Précision : 1 cm = 10 mm`
            };

            if (correctionMap[field]) {
                setAnswers({
                    ...answers, [field]: correctionMap[field]
                });
            }
        }

        setShowCorrections((prev) => ({
            ...prev, [field]: !prev[field]
        }));
    };

    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };

    const toggleSummary = () => {
        setShowSummary(!showSummary);
    };

    if (className === 'Seconde-geometrie-act5') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" ref={contentRef} style={{fontFamily: 'MathJax'}}>
            <PrintManager
                contentRef={contentRef}
                activityName="CoIntervention_Maintenance1"
                pageCount={3}
                quality="hd"
            />
            <div className="print-page">
                <Automatismes/>
            </div>

            {/* PAGE 1 */}
            <div className="print-page">
                <div className="math-chapter-box blue mt-0">
                    <h2 className="math-chapter-title-test mt-0">Co-intervention Mathématiques-Maintenance</h2>
                </div>
                <div className="activity-header mt-0">
                    <span className="activity-badge">ACTIVITÉ</span>
                    <div className="activity-title">
                        <span className="course-title">Contrôle de l'usure des pneus</span>
                    </div>
                </div>

                <div className="alert alert-info">
                    <strong>Contexte :</strong> Un client amène sa voiture au garage et désire savoir si ses pneus
                    sont usés et s'il faut les changer.
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="question-card">
                            <h4 className="vect-title">Question n°1 : Vérification des témoins d'usure</h4>
                            <div className="question-content">
                                <p>Afin de déterminer si des pneus sont à changer, la vision du témoin d'usure
                                    normalement suffit. Pour les roues avant, braquez-les à fond.</p>
                                <p>Indiquer si les pneus sont à changer. Justifier la réponse.</p>
                                <div className="d-flex justify-content-center mt-3" style={{maxWidth: '100%'}}>
                                    <img
                                        src={pneuUsure}
                                        alt="Témoin d'usure de pneu"
                                        className="img-fluid rounded shadow-sm"
                                        style={{maxWidth: '350px', cursor: 'pointer'}}
                                        onClick={() => openModal(pneuUsure, 'Témoin d\'usure de pneu')}
                                    />
                                </div>
                                <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.q1}
                                            onChange={(e) => handleInputChange('q1', e.target.value)}
                                            style={{minHeight: '38px', height: 'auto'}}
                                            rows={1}
                                        />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('q1')}
                                    >
                                        <FaCheck/> {showCorrections.q1 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.q1 && (<div className="correction-hint mt-2">
                                        <small className="text-muted">Votre réponse a été complétée</small>
                                    </div>)}
                                </div>
                            </div>

                            <h4 className="vect-title">Question n°2 : Mesure de la profondeur</h4>
                            <div className="question-content">
                                <p>Le client désire connaître la profondeur du pneu. Utiliser une jauge de
                                    profondeur.</p>
                                <p>Indiquer la valeur, en mm, de la profondeur du pneu.</p>
                                <div className="d-flex justify-content-center mt-3" style={{maxWidth: '100%'}}>
                                    <img
                                        src={jaugeProfondeur}
                                        alt="Jauge de profondeur de pneu"
                                        className="img-fluid rounded shadow-sm"
                                        style={{maxWidth: '300px', cursor: 'pointer'}}
                                        onClick={() => openModal(jaugeProfondeur, 'Jauge de profondeur de pneu')}
                                    />
                                </div>
                                <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.q2}
                                            onChange={(e) => handleInputChange('q2', e.target.value)}
                                            style={{minHeight: '38px', height: 'auto'}}
                                            rows={1}
                                        />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('q2')}
                                    >
                                        <FaCheck/> {showCorrections.q2 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.q2 && (<div className="correction-hint mt-2">
                                        <small className="text-muted">Votre réponse a été complétée</small>
                                    </div>)}
                                </div>
                            </div>

                            <h4 className="vect-title">Question n°3 : Respect de la réglementation</h4>
                            <div className="question-content">
                                <p>En utilisant la profondeur d'usure minimale réglementaire de 1,6 mm,
                                    indiquer si cette valeur est respectée.
                                    Justifier la réponse.</p>

                                <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.q3}
                                            onChange={(e) => handleInputChange('q3', e.target.value)}
                                            style={{minHeight: '38px', height: 'auto'}}
                                            rows={1}
                                        />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('q3')}
                                    >
                                        <FaCheck/> {showCorrections.q3 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.q3 && (<div className="correction-hint mt-2">
                                        <small className="text-muted">Votre réponse a été complétée</small>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE 2 */}
            <div className="print-page">
                <div className="row">
                    <div className="col-md-6">
                        <div className="question-card">
                            <h4 className="vect-title">Question n°4 : Calcul du diamètre</h4>
                            <div className="question-content">
                                <p>A partir des indications portées sur le pneu, calculer le diamètre D de la roue,
                                    en mm. Arrondir le résultat à l'unité.</p>
                                <div className="d-flex justify-content-center mt-3" style={{maxWidth: '100%'}}>
                                    <img
                                        src={pneuindic}
                                        alt="Témoin d'usure de pneu"
                                        className="img-fluid rounded shadow-sm"
                                        style={{maxWidth: '350px', cursor: 'pointer'}}
                                        onClick={() => openModal(pneuindic, 'Témoin d\'usure de pneu')}
                                    />
                                </div>
                                <div className="justify-content-center mt-3" style={{fontSize: '14px'}}>
                                    <BlockMath
                                        math="D = 2 \times \text{(Hauteur du pneu)} + \text{(Diamètre de la jante)}"/>
                                    <BlockMath
                                        math="\text{Hauteur} = \text{Largeur} \times \text{Percentage} / 100"/>
                                    <BlockMath math="\text{Diamètre jante} = \text{Valeur en pouces} \times 25.4"/>
                                </div>

                                <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.q4}
                                            onChange={(e) => handleInputChange('q4', e.target.value)}
                                            rows={4}
                                        />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('q4')}
                                    >
                                        <FaCheck/> {showCorrections.q4 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.q4 && (<div className="correction-hint mt-2">
                                        <small className="text-muted">Votre réponse a été complétée</small>
                                    </div>)}
                                </div>
                            </div>

                            <h4 className="vect-title mt-2">Question n°5 : Calcul du périmètre</h4>
                            <div className="question-content">
                                <p>En déduire le périmètre P de la roue, en mm. Arrondir le résultat à l'unité.</p>
                                <BlockMath math="P = \pi \times D"/>
                                <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.q5}
                                            onChange={(e) => handleInputChange('q5', e.target.value)}
                                            rows={4}
                                        />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('q5')}
                                    >
                                        <FaCheck/> {showCorrections.q5 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.q5 && (<div className="correction-hint mt-2">
                                        <small className="text-muted">Votre réponse a été complétée</small>
                                    </div>)}
                                </div>
                            </div>
                            <h4 className="vect-title mt-2">Question n°6 : Longueur de 10 périmètres</h4>
                            <div className="question-content">
                                <p>Calculer la longueur L, en cm, correspondant à dix périmètres.</p>
                                <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.q6}
                                            onChange={(e) => handleInputChange('q6', e.target.value)}
                                            rows={4}
                                        />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('q6')}
                                    >
                                        <FaCheck/> {showCorrections.q6 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.q6 && (<div className="correction-hint mt-2">
                                        <small className="text-muted">Votre réponse a été complétée</small>
                                    </div>)}
                                </div>
                            </div>
                            <h4 className="vect-title">Question n°7</h4>
                            <div className="question-content">
                                {/* Question 1 */}
                                <div className="mb-4">
                                    <p><strong>1. Conversion d'unités :</strong> Un boulon mesure 3/4 de pouce.
                                        Quelle est sa longueur en mm? (1 pouce = 25,4 mm)</p>
                                    <div className="answer-area">
                                            <textarea
                                                className="answer-input"
                                                value={answers.q7_1}
                                                onChange={(e) => handleInputChange('q7_1', e.target.value)}
                                                rows={3}
                                            />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="question-card">
                            <div className="question-content">
                                {/* Question 2 */}
                                <div className="mb-4">
                                    <p><strong>2. Géométrie :</strong> Calculer l'aire d'un joint torique circulaire
                                        de 35 mm de diamètre.</p>
                                    <div className="answer-area">
                                            <textarea
                                                className="answer-input"
                                                value={answers.q7_2}
                                                onChange={(e) => handleInputChange('q7_2', e.target.value)}
                                                rows={3}
                                            />
                                    </div>
                                </div>

                                {/* Question 3 */}
                                <div className="mb-4">
                                    <p><strong>3. Calcul technique :</strong> Un réservoir contient 150 litres
                                        d'huile. Sachant que la masse volumique est de 0,95 kg/L, quelle est la
                                        masse d'huile?</p>
                                    <div className="answer-area">
                                            <textarea
                                                className="answer-input"
                                                value={answers.q7_3}
                                                onChange={(e) => handleInputChange('q7_3', e.target.value)}
                                                rows={3}
                                            />
                                    </div>
                                </div>

                                {/* Question 4 */}
                                <div className="mb-4">
                                    <p><strong>4. Périmètre :</strong> Une plaque métallique rectangulaire mesure
                                        120 cm par 80 cm. Calculer son périmètre.</p>
                                    <div className="answer-area">
                                            <textarea
                                                className="answer-input"
                                                value={answers.q7_4}
                                                onChange={(e) => handleInputChange('q7_4', e.target.value)}
                                                rows={3}
                                            />
                                    </div>
                                </div>

                                {/* Question 5 */}
                                <div className="mb-4">
                                    <p><strong>5. Calcul de durée :</strong> Un technicien doit parcourir 75 km pour
                                        une intervention. À vitesse constante de 50 km/h, combien de temps durera le
                                        trajet (en minutes)?</p>
                                    <div className="answer-area">
                                            <textarea
                                                className="answer-input"
                                                value={answers.q7_5}
                                                onChange={(e) => handleInputChange('q7_5', e.target.value)}
                                                rows={3}
                                            />
                                    </div>
                                </div>

                                {/* Question 6 */}
                                <div className="mb-4">
                                    <p><strong>6. Consommation :</strong> Un véhicule consomme 8 L aux 100 km.
                                        Quelle sera sa consommation pour un trajet de 350 km?</p>
                                    <div className="answer-area">
                                            <textarea
                                                className="answer-input"
                                                value={answers.q7_6}
                                                onChange={(e) => handleInputChange('q7_6', e.target.value)}
                                                rows={3}
                                            />
                                    </div>
                                </div>

                                {/* Bouton de correction unique */}
                                <div className="text-center mt-4">
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('q7')}
                                    >
                                        <FaCheck/> {showCorrections.q7 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.q7 && (<div className="correction-hint mt-2">
                                        <small className="text-muted">Les réponses ont été complétées</small>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE 3 */}
            <div className="print-page">
                <div className="question-card">
                    <h4 className="vect-title">Dossier documentaire</h4>
                    <div className="question-content">
                        <h5>Profondeur d'usure</h5>
                        <ul>
                            <li>Profondeur habituelle des pneus neufs : 8 mm</li>
                            <li>Profondeur minimale recommandée : 3 mm (été), 4 mm (hiver)</li>
                            <li>Profondeur minimale réglementaire : 1.6 mm</li>
                            <li>Différence d'usure maximale sur un même essieu : 5 mm</li>
                        </ul>

                        <h5>Indications portées sur un pneu</h5>
                        <ul>
                            <li>Premier nombre : largeur en mm</li>
                            <div className="d-flex justify-content-center mt-3" style={{maxWidth: '100%'}}>
                                <img
                                    src={pneu1}
                                    alt="Indication pneu"
                                    className="img-fluid rounded shadow-sm"
                                    style={{maxWidth: '200px', cursor: 'pointer'}}
                                    onClick={() => openModal(pneu1, 'Indication pneu')}
                                />
                            </div>
                            <li>Deuxième nombre : hauteur en % de la largeur</li>
                            <div className="d-flex justify-content-center mt-3" style={{maxWidth: '100%'}}>
                                <img
                                    src={pneu2}
                                    alt="Indication pneu"
                                    className="img-fluid rounded shadow-sm"
                                    style={{maxWidth: '200px', cursor: 'pointer'}}
                                    onClick={() => openModal(pneu2, 'Indication pneu')}
                                />
                            </div>
                            <li>Troisième nombre : diamètre de la jante en pouces (1 pouce = 25.4 mm)</li>
                            <div className="d-flex justify-content-center mt-3" style={{maxWidth: '100%'}}>
                                <img
                                    src={pneu3}
                                    alt="Indication pneu"
                                    className="img-fluid rounded shadow-sm"
                                    style={{maxWidth: '200px', cursor: 'pointer'}}
                                    onClick={() => openModal(pneu3, 'Indication pneu')}
                                />
                            </div>
                        </ul>
                    </div>
                </div>

                <AutoEvaluationGrid/>

                <footer className="tp-footer">
                    <p>Co-intervention Mathématiques-Maintenance - Contrôle de l'usure des pneus</p>
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

export default CoInterventionMaintenance1;
import React, {useRef, useState} from 'react';
import {FaPrint, FaCheck, FaRuler, FaHammer} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import 'katex/dist/katex.min.css';
import {BlockMath, InlineMath} from 'react-katex';
import {Card} from "react-bootstrap";
import ModalImage from "../../../../utils/ModalImage";
import yourte from "../../../../assets/yourtshema.png";
import schemaYourte from "../../../../assets/shemayourt.png";
import vecteurAct3 from "../../../../assets/vecteur3act3.png";
import tipi from "../../../../assets/tipi.png";
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";

const Act3Geometrie = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    const contentRef = useRef();
    const [showSummary, setShowSummary] = useState(false);

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        question1a: '',
        question1b: '',
        question2: '',
        question3a: '',
        question3b: '',
        question3c: '',
        question4a: '',
        question4b: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        question1a: false,
        question1b: false,
        question2: false,
        question3a: false,
        question3b: false,
        question3c: false,
        question4a: false,
        question4b: false,
    });

    // Réponses attendues avec notation mathématique
    const correctAnswers = {
        question1a: {
            text: "De B à C: 2 m\nDe C à D: 1 m", formatted: <div>
                <p>De B à C: <InlineMath math="6 - 4 = 2 \text{ m}"/></p>
                <p>De C à D: <InlineMath math="7 - 6 = 1 \text{ m}"/></p>
            </div>
        }, question1b: {
            text: "De B à D: 3 m\nOn peut additionner les résultats précédents: 2 + 1 = 3 m", formatted: <div>
                <p>De B à D: <InlineMath math="7 - 4 = 3 \text{ m}"/></p>
                <p>On peut additionner les résultats précédents: <InlineMath math="2 + 1 = 3 \text{ m}"/></p>
            </div>
        }, question2: {
            text: "B à C: abscisses: 0 m, ordonnées: -2 m\nC à D: abscisses: 0 m, ordonnées: -3 m\nB à D: abscisses: 0 m, ordonnées: -5 m",
            formatted: <div>
                <p><strong>B à C:</strong></p>
                <ul>
                    <li>Abscisses: <InlineMath math="6.5 - 6.5 = 0 \text{ m}"/></li>
                    <li>Ordonnées: <InlineMath math="4.5 - 6.5 = -2 \text{ m}"/></li>
                </ul>
                <p><strong>C à D:</strong></p>
                <ul>
                    <li>Abscisses: <InlineMath math="6.5 - 6.5 = 0 \text{ m}"/></li>
                    <li>Ordonnées: <InlineMath math="1.5 - 4.5 = -3 \text{ m}"/></li>
                </ul>
                <p><strong>B à D:</strong></p>
                <ul>
                    <li>Abscisses: <InlineMath math="6.5 - 6.5 = 0 \text{ m}"/></li>
                    <li>Ordonnées: <InlineMath math="1.5 - 6.5 = -5 \text{ m}"/></li>
                </ul>
            </div>
        }, question3a: {
            text: "BC = (0, -2, 2)\nCD = (0, -3, 1)", formatted: <div>
                <BlockMath math="\vec{BC} = \begin{pmatrix} 0 \\ -2 \\ 2 \end{pmatrix}"/>
                <BlockMath math="\vec{CD} = \begin{pmatrix} 0 \\ -3 \\ 1 \end{pmatrix}"/>
            </div>
        }, question3b: {
            text: "On additionne les coordonnées de BC et CD\nBD = (0, -5, 3)", formatted: <div>
                <p>On additionne les coordonnées de <InlineMath math="\vec{BC}"/> et <InlineMath math="\vec{CD}"/>:</p>
                <BlockMath
                    math="\vec{BD} = \begin{pmatrix} 0 + 0 \\ -2 + (-3) \\ 2 + 1 \end{pmatrix} = \begin{pmatrix} 0 \\ -5 \\ 3 \end{pmatrix}"/>
            </div>
        }, question3c: {
            text: "BC + CD = BD", formatted: <BlockMath math="\vec{BC} + \vec{CD} = \vec{BD}"/>
        }, question4a: {
            text: "||BD|| = √(0² + (-5)² + 3²) = √34 ≈ 5.83 m",
            formatted: <BlockMath math="\|\vec{BD}\| = \sqrt{0^2 + (-5)^2 + 3^2} = \sqrt{34} \approx 5.83 \text{ m}"/>
        }, question4b: {
            text: "Hugo doit couper les planches à environ 5,83 mètres.",
            formatted: <p>Hugo doit couper les planches à environ <InlineMath math="5,\!83 \text{ mètres}"/>.</p>
        },
    };

    // Gestionnaires d'événements
    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));

        if (!answers[field] && !showCorrections[field]) {
            setAnswers((prev) => ({...prev, [field]: correctAnswers[field].text}));
        }
    };

    const toggleSummary = () => {
        setShowSummary(!showSummary);
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

    if (className === 'Seconde-geometrie-act3') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" ref={contentRef} style={{fontFamily: 'Cambria Math'}}>
            <PrintManager
                contentRef={contentRef}
                activityName="Geometrie_Vecteur_Yourte"
                pageCount={2}
                quality="hd"
            />

            {/* PAGE 1 */}
            <div className="print-page">
                <div className="math-chapter-box green mt-0" style={{padding: '0'}}>
                    <span style={{marginRight: '10px', fontSize: '30px'}}>🏕️</span>
                    <h2 className="math-chapter-title-test mt-0">Géométrie vectorielle dans l'espace</h2>
                </div>
                <div className="activity-header mt-0">
                    <span className="activity-badge">ACTIVITÉ 3</span>
                    <div className="activity-title">
                      <span className="course-title">
                         <span>🛠️</span> « Une histoire de tipi »
                      </span>
                    </div>
                </div>
                <div
                    className="d-flex align-items-center flex-wrap"
                    style={{gap: '20px', justifyContent: 'center'}}
                >
                    <div className="renovation-contexte" style={{flex: '1 1 600px', maxWidth: '600px'}}>
                        <p style={{textAlign: 'justify', textJustify: 'inter-word'}}>
                            🛠️ <strong>Hugo</strong>, un jeune <strong>charpentier</strong>, a été appelé
                            pour construire un joli <strong>tipi</strong> 🏕️, comme montré ci-dessus.
                            <br/><br/>
                            Pour que le toit tienne bien, Hugo doit poser des <span
                            style={{color: '#d35400', fontWeight: 'bold'}}>poutres inclinées</span> 🔺, visibles
                            en rouge sur le dessin.
                            Il se demande alors : <em><strong>quelle longueur doit faire chaque poutre
                            ?</strong></em> 📏
                            <br/><br/>
                            Comme toutes les poutres doivent être de la même taille, Hugo choisit d’en étudier une
                            seule :
                            celle qui relie les points<br/>
                            <span style={{color: '#8e44ad', fontWeight: 'bold'}}> B(6,5 ; 6,5 ; 4)</span>,
                            <span style={{color: '#8e44ad', fontWeight: 'bold'}}> C(6,5 ; 4,5 ; 6) </span>
                            et
                            <span style={{color: '#8e44ad', fontWeight: 'bold'}}> D(6,5 ; 1,5 ; 7) </span>,
                            dans un repère orthonormé 📈 où l’unité est le <strong>mètre</strong> (m).
                        </p>
                    </div>

                    <div className="flex-shrink-0" style={{flex: '0 0 auto', maxWidth: '250px', cursor: 'pointer'}}>
                        <img
                            src={tipi}
                            alt="Modélisation d'un tipi"
                            className="img-fluid rounded shadow-sm compact-img"
                            onClick={() => openModal(tipi, 'Modélisation d\'un tipi')}
                        />
                    </div>


                    <div className="vect-image-text-container" style={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <div className="flex-shrink-0"
                             style={{maxWidth: '360px', cursor: 'pointer'}}>
                            <img
                                src={yourte}
                                alt="Modélisation d'une yourte"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(yourte, 'Modélisation d\'une yourte')}
                            />
                        </div>
                        <div className="imageVecteur flex-shrink-0"
                             style={{maxWidth: '50%', cursor: 'pointer'}}>
                            <img
                                src={schemaYourte}
                                alt="Schéma de la yourte avec points B, C, D"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(schemaYourte, 'Schéma de la yourte')}
                            />
                        </div>
                    </div>
                    <div className="objectif-box" style={{marginTop: '-10px'}}>
                        <p><strong> Objectif :</strong> 🎯 "Déterminer la longueur des planches de support que Hugo
                            doit couper."</p>
                    </div>
                </div>

                <div className="row" style={{marginTop: '5px'}}>
                    {/* Colonne de gauche */}
                    <div className="col-md-6 mt-0">
                        <div className="question-card mt-0">
                            <div className="question-content">
                                <h4 className="vect-title"><span>1 . Réaliser</span></h4>
                                <p>a. De combien de mètres se déplace-t-on sur l'axe des cotes lorsqu'on passe du point
                                    B au point C ? Du point C au point D ?</p>

                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question1a}
                                        onChange={(e) => handleInputChange('question1a', e.target.value)}
                                        rows={2}
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question1a')}
                                    >
                                        <FaCheck/> {showCorrections.question1a ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question1a && (<div className="correction-box">
                                        {correctAnswers.question1a.formatted}
                                    </div>)}
                                </div>

                                <h4 className="vect-title" style={{marginTop: '15px'}}><span>Réaliser, Analyser/Raisonner</span>
                                </h4>
                                <p>b. De combien de mètres se déplace-t-on sur l'axe des cotes lorsqu'on passe du point
                                    B au point D ? Comment aurait-on pu trouver ce résultat à l'aide des réponses à la
                                    question précédente ?</p>

                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question1b}
                                        onChange={(e) => handleInputChange('question1b', e.target.value)}
                                        rows={3}
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question1b')}
                                    >
                                        <FaCheck/> {showCorrections.question1b ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question1b && (<div className="correction-box">
                                        {correctAnswers.question1b.formatted}
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonne de droite */}
                    <div className="col-md-6">
                        <div className="question-card">
                            <div className="question-content">
                                <h4 className="vect-title"><span>2 . Réaliser, Analyser/Raisonner</span></h4>
                                <p>De combien de mètres se déplace-t-on sur l'axe des abscisses et sur l'axe des
                                    ordonnées lorsqu'on passe du point B au point C ? Du point C au point D ?
                                    Directement du point B au point D ?</p>


                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question2}
                                        onChange={(e) => handleInputChange('question2', e.target.value)}
                                        rows={3}
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question2')}
                                    >
                                        <FaCheck/> {showCorrections.question2 ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question2 && (<div className="correction-box">
                                        {correctAnswers.question2.formatted}
                                    </div>)}
                                </div>
                                <h4 className="vect-title"><span>3 . Réaliser</span></h4>
                                <p>a. Déterminer les coordonnées des vecteurs <InlineMath
                                    math="\vec{BC}"/> et <InlineMath math="\vec{CD}"/>.</p>

                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question3a}
                                        onChange={(e) => handleInputChange('question3a', e.target.value)}
                                        rows={3}
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question3a')}
                                    >
                                        <FaCheck/> {showCorrections.question3a ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question3a && (<div className="correction-box">
                                        {correctAnswers.question3a.formatted}
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE 2 */}
            <div className="print-page">
                <div className="row mt-0">
                    {/* Colonne de gauche */}
                    <div className="col-md-6 mt-0">
                        <div className="question-card mt-0">
                            <div className="question-content">
                                <h4 className="vect-title mt-0"><span>Analyser/Raisonner, Réaliser</span>
                                </h4>
                                <p>b. Comment pourrait-on déterminer les coordonnées du vecteur <InlineMath
                                    math="\vec{BD}"/> à l'aide des coordonnées obtenues à la question précédente ?
                                    Déterminer les coordonnées de ce vecteur.</p>

                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question3b}
                                        onChange={(e) => handleInputChange('question3b', e.target.value)}
                                        rows={2}
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question3b')}
                                    >
                                        <FaCheck/> {showCorrections.question3b ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question3b && (<div className="correction-box">
                                        {correctAnswers.question3b.formatted}
                                    </div>)}
                                </div>

                                <h4 className="vect-title" style={{marginTop: '15px'}}><span>Communiquer, Analyser/Raisonner</span>
                                </h4>
                                <p>c. Compléter l'égalité entre vecteurs suivante :<br/> <InlineMath
                                    math="\vec{BC} + \vec{CD} = \ldots"/></p>

                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question3c}
                                        onChange={(e) => handleInputChange('question3c', e.target.value)}
                                        rows={1}
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question3c')}
                                    >
                                        <FaCheck/> {showCorrections.question3c ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question3c && (<div className="correction-box">
                                        {correctAnswers.question3c.formatted}
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonne de droite */}
                    <div className="col-md-6">
                        <div className="question-card">
                            <div className="question-content">
                                <h4 className="vect-title"><span>4 . Réaliser</span></h4>
                                <p>a. À l'aide de la réponse à la question 3.b, calculer la norme, au centimètre près,
                                    du vecteur <InlineMath math="\vec{BD}"/>.</p>

                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question4a}
                                        onChange={(e) => handleInputChange('question4a', e.target.value)}
                                        rows={1}
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question4a')}
                                    >
                                        <FaCheck/> {showCorrections.question4a ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question4a && (<div className="correction-box">
                                        {correctAnswers.question4a.formatted}
                                    </div>)}
                                </div>

                                <h4 className="vect-title" style={{marginTop: '15px'}}>
                                    <span>Communiquer, Réaliser</span></h4>
                                <p>b. Répondre à la problématique.</p>

                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question4b}
                                        onChange={(e) => handleInputChange('question4b', e.target.value)}
                                        rows={2}
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question4b')}
                                    >
                                        <FaCheck/> {showCorrections.question4b ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question4b && (<div className="correction-box">
                                        {correctAnswers.question4b.formatted}
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tp-section">
                    <div style={{padding: '20px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h3>📌 À retenir 🧠</h3>
                            <button
                                className="correction-btn"
                                onClick={toggleSummary}
                                style={{marginLeft: '10px'}}
                            >
                                {showSummary ? 'Masquer' : 'Afficher'} les informations
                            </button>
                        </div>
                        <div className="vect-image-text-container" style={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }}>
                            <div className="imageVecteur flex-shrink-0"
                                 style={{maxWidth: '30%', cursor: 'pointer'}}>
                                <img
                                    src={vecteurAct3}
                                    alt="Schéma de la yourte avec points B, C, D"
                                    className="img-fluid rounded shadow-sm compact-img"
                                    onClick={() => openModal(vecteurAct3, 'Schéma Vecteur Act3')}
                                />
                            </div>
                        </div>
                        <div className="vector-summary-container">
                            {showSummary ? (<div className="vector-cards-grid">
                                {/* Carte 1 - Somme de vecteurs */}
                                <div className="vector-card" style={{fontFamily: 'Cambria Math'}}>
                                    <h4 style={{marginBottom: '0.5rem'}}>➕ Somme de vecteurs</h4>
                                    <p style={{marginBottom: '0.3rem'}}>
                                        Pour déterminer la somme de deux vecteurs, on applique la <strong>relation
                                        de Chasles</strong> :
                                    </p>
                                    <BlockMath math="\vec{AB} + \vec{BC} = \vec{AC}"/>
                                    <p style={{fontSize: '0.95rem', color: '#555'}}>
                                        ➔ On additionne les coordonnées respectives.
                                    </p>
                                </div>

                                {/* Carte 2 - Coordonnées de la somme */}
                                <div className="vector-card" style={{fontFamily: 'Cambria Math'}}>
                                    <h4 style={{marginBottom: '0.5rem'}}>📈 Coordonnées de la somme</h4>
                                    <p style={{marginBottom: '0.3rem'}}>
                                        Les coordonnées du vecteur résultant sont obtenues par :
                                    </p>
                                    <BlockMath
                                        math="\begin{pmatrix} x_{\vec{AC}} \\ y_{\vec{AC}} \\ z_{\vec{AC}} \end{pmatrix} = \begin{pmatrix} x_{\vec{AB}} + x_{\vec{BC}} \\ y_{\vec{AB}} + y_{\vec{BC}} \\ z_{\vec{AB}} + z_{\vec{BC}} \end{pmatrix}"/>
                                </div>
                            </div>) : (<div className="vector-cards-grid" style={{marginTop: '-20px'}}>
                                {/* Cartes vides pour l'affichage masqué */}
                                <div className="vector-card" style={{
                                    border: '2px dashed #ccc',
                                    minHeight: '140px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#999'
                                }}>
                                </div>
                                <div className="vector-card" style={{
                                    border: '2px dashed #ccc',
                                    minHeight: '140px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#999'
                                }}>
                                </div>
                            </div>)}
                            <AutoEvaluationGrid/>
                        </div>
                    </div>

                </div>
            </div>

            <footer className="tp-footer">
                <p>Activité de géométrie vectorielle - Une histoire de yourte</p>
            </footer>

            {modalState.show && (<ModalImage
                imageUrl={modalState.imageUrl}
                altText={modalState.altText}
                onClose={closeModal}
            />)}
        </div>
    </>);
};

export default Act3Geometrie;
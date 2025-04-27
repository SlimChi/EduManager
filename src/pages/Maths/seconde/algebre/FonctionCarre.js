import React, {useRef, useState} from 'react';
import {FaPrint, FaCheck, FaChartLine, FaHome, FaCar, FaRuler, FaCode} from 'react-icons/fa';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import {IoMdSchool} from 'react-icons/io';
import '../../../../styles/activites.css';
import {useLocation, useParams} from "react-router-dom";
import BackButton from "../../../../components/navigation/BackButton";
import ModalImage from "../../../../utils/ModalImage";
import AutoResizeTextarea from "../../../../config/AutoResizeTextarea";
import Automatismes from "../../../../config/Automatismes";
import PrintManager from "../../../../utils/PrintManager";
import voituredrift from "../../../../assets/driftvoiture.png";
import reperefocntioncarre2 from "../../../../assets/act2fonctioncarre.png";
import reperefocntioncarre from "../../../../assets/reperefocntioncarre.png";
import GraphComponent from "../../../../components/Outils/GraphComponent";
import {Button, Card, Row, Col, Form} from 'react-bootstrap';

const FonctionCarre = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [showConclusion, setShowConclusion] = useState(false);

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        question1a1: '',
        question1a2: '',
        question1a3: '',
        question1a4: '',
        question1b: '',
        question1c1: '',
        question1c2: '',
        question1d: '',
        question1e: '',
        question2a1: '',
        question2a2: '',
        question2b: '',
        question2c: '',
        question2d1: '',
        question2d2: '',
        question2d3: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        question1a1: false,
        question1a2: false,
        question1a3: false,
        question1a4: false,
        question1b: false,
        question1c1: false,
        question1c2: false,
        question1d: false,
        question1e: false,
        question2a1: false,
        question2a2: false,
        question2b: false,
        question2c: false,
        question2d1: false,
        question2d2: false,
        question2d3: false
    });

    // Réponses attendues
    const correctAnswers = {
        question1a1: "900",
        question1a2: "2500",
        question1a3: "8100",
        question1a4: "12100",
        question1b: "La représentation graphique est une parabole orientée vers le haut, passant par les points (30,900), (50,2500), etc.",
        question1c1: "0",
        question1c2: "12100",
        question1d: "a ≈ 1 (valeur exacte à déterminer avec la calculatrice)",
        question1e: "La distance de freinage à 130 km/h est d'environ 101.4 mètres",
        question2a1: "50",
        question2a2: "200",
        question2b: "Non, car la fonction y=-5x donnerait des valeurs négatives pour les longueurs, ce qui n'a pas de sens physique.",
        question2c: "k = 0.2",
        question2d1: "l'axe des abscisses (y=0)",
        question2d2: "augmente",
        question2d3: "décroissante si k<0"
    };

    const [graphModal, setGraphModal] = useState(false);

    // Fonctions pour ouvrir/fermer le modal
    const openGraphModal = () => setGraphModal(true);
    const closeGraphModal = () => setGraphModal(false);

    // Gestionnaires d'événements
    const handleInputChange = (field, value) => {
        setAnswers(prev => ({...prev, [field]: value}));
    };

    const toggleCorrection = (field) => {
        setShowCorrections(prev => ({...prev, [field]: !prev[field]}));
        if (!answers[field] && !showCorrections[field]) {
            setAnswers(prev => ({...prev, [field]: correctAnswers[field]}));
        }
    };

    const [modalState, setModalState] = useState({
        show: false, imageUrl: '', altText: ''
    });

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState(prev => ({...prev, show: false}));
    };

    const contentRef = useRef();
    if (className === 'Seconde-pythagore') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
            <BackButton/>
            <div className="tp-container act1-container function-theme" id="proba-content" ref={contentRef}>
                <PrintManager
                    contentRef={contentRef}
                    activityName="Fonction_Carre"
                    pageCount={2}
                    quality="hd"
                />
                <div className="print-page">
                    <header className="tp-header">
                        <IoMdSchool className="header-icon"/>
                        <h1> 📈 Fonction Carré et Variations 📉 - Classe Seconde Mathématiques</h1>
                    </header>
                    <Automatismes/>
                    <div>
                        <br/>
                    </div>
                </div>
                {/* Page 1 */}
                <div className="print-page">
                    <div className="math-chapter-box blue mb-0 mt-0">
                        <IoMdSchool className="math-chapter-icon"/>
                        <h2 className="math-chapter-title-test">
                            Représenter la fonction « carré » et les fonctions définies par f(x) = kx²
                        </h2>
                        <div className="math-chapter-decoration">
                            <svg width="100" height="80" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 2L2 7L12 12L22 7L12 2Z M12 12L22 7 M12 12L2 7 M12 12V22 M22 7V17L12 22L2 17V7"
                                    stroke="#3498db" strokeWidth="2"/>
                                <path d="M12 8L16 12L12 16L8 12L12 8Z" stroke="#2980b9" strokeWidth="1.5"/>
                            </svg>
                        </div>
                    </div>
                    <div className="activity-header mt-0">
                        <span className="activity-badge">ACTIVITÉ 1</span>
                        <div className="activity-title">
                                <span className="course-title">
                                    <FaCar/> <span>🔢</span> « Distance de freinage ! »
                                </span>
                        </div>
                    </div>
                    <div className="d-flex align-items-start flex-wrap mt-0" style={{gap: '10px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>

                            <div className="renovation-contexte mt-0 mb-1 p-2">
                                <p>
                                    La monitrice de l'auto-école explique aux candidats au permis de conduire
                                    les distances de freinage d'une voiture. Elle indique que la distance de
                                    freinage varie comme « <strong>le carré de la vitesse</strong> ».
                                </p>


                                <div className="sample-table-container mt-1">
                                    <table className="sample-table" style={{fontSize: '0.9rem'}}>
                                        <thead>
                                        <tr>
                                            <th>Vitesse (en km/h)</th>
                                            <th>30</th>
                                            <th>50</th>
                                            <th>90</th>
                                            <th>110</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Distance de freinage (en m)</td>
                                            <td>5,4</td>
                                            <td>15</td>
                                            <td>45,8</td>
                                            <td>72,6</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Espace pour image */}
                        <div className="flex-shrink-0"
                             style={{maxWidth: '350px', cursor: 'pointer'}}>
                            <img src={voituredrift}
                                 alt="Lancer de Dés"
                                 className="img-fluid rounded shadow-sm compact-img"
                                 onClick={() => openModal(voituredrift, "Voiture Drift")}
                            />
                            <div className="objectif-box mt-2 mb-1">
                                <p><p><strong>L'objectif</strong> est de déterminer le lien entre
                                    la <strong>vitesse</strong> et la <strong>distance de freinage</strong>.</p>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Partie A - Fonction carré */}
                    <section className="tp-section compact mt-0">
                        <h3 className="compact-title"><FaChartLine/> A. Fonction « carré »</h3>
                        <p style={{marginBottom: '0px'}}>En notant x la vitesse en km/h, « le carré de la vitesse » est
                            donné par la fonction f
                            définie par : f(x) = x²</p>

                        <div className="question compact mb-0 mt-0">
                            <p className="compact-text">1. Compléter ce tableau de valeurs</p>
                            <div className="sample-table-container">
                                <table className="sample-table">
                                    <thead>
                                    <tr>
                                        <th>x</th>
                                        <th>30</th>
                                        <th>50</th>
                                        <th>90</th>
                                        <th>110</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>f(x) = x²</td>
                                        <td>
                                            <input type="text" className="answer-input compact"
                                                   value={answers.question1a1}
                                                   onChange={(e) => handleInputChange('question1a1', e.target.value)}/>
                                        </td>
                                        <td>
                                            <input type="text" className="answer-input compact"
                                                   value={answers.question1a2}
                                                   onChange={(e) => handleInputChange('question1a2', e.target.value)}/>
                                        </td>
                                        <td>
                                            <input type="text" className="answer-input compact"
                                                   value={answers.question1a3}
                                                   onChange={(e) => handleInputChange('question1a3', e.target.value)}/>
                                        </td>
                                        <td>
                                            <input type="text" className="answer-input compact"
                                                   value={answers.question1a4}
                                                   onChange={(e) => handleInputChange('question1a4', e.target.value)}/>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="correction-btnoptic mt-1" style={{marginBottom: '-20px'}}
                                        onClick={() => {
                                            toggleCorrection('question1a1');
                                            toggleCorrection('question1a2');
                                            toggleCorrection('question1a3');
                                            toggleCorrection('question1a4');
                                        }}>
                                    <FaCheck/> Correction
                                </button>
                            </div>
                        </div>
                        <div className="question compact mt-0 mb-0" style={{marginBottom: '0px'}}>
                            <p className="compact-text">2. Représenter la fonction f dans un repère.</p>
                            <div
                                style={{cursor: 'pointer', marginLeft: '100px', marginRight: 'auto'}}
                                onClick={openGraphModal}
                            >
                                <GraphComponent showCorrection={showCorrections.question1b}/>
                            </div>
                            <div className="d-flex justify-content-end mb-0">
                                <button className="correction-btnoptic mt-1 mb-0"
                                        onClick={() => toggleCorrection('question1b')}
                                >
                                    <FaCheck/> Correction
                                </button>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Page 2 */}
                <div className="print-page" id="page2-start">
                    {/* Activité 2 */}
                    <section className="tp-section compact">
                        <div className="question compact mt-0">
                            <p className="compact-text">3. Compléter le tableau de variation de la fonction f</p>
                            <div className="sample-table-container" style={{margin: '20px 0'}}>
                                <table className="sample-table" style={{
                                    borderCollapse: 'collapse', width: '100%', border: '1px solid #333'
                                }}>
                                    <thead>
                                    <tr>
                                        <th style={{
                                            border: '1px solid #333',
                                            padding: '8px',
                                            textAlign: 'center',
                                            backgroundColor: '#f5f5f5',
                                            width: '15%'  // Colonne gauche plus petite
                                        }}>x
                                        </th>
                                        <th style={{
                                            border: '1px solid #333', borderRight: '1px solid transparent',  // Ligne verticale invisible
                                            padding: '8px', textAlign: 'left',  // Alignement à gauche pour "0"
                                            backgroundColor: '#f5f5f5'
                                        }}>0
                                        </th>
                                        <th style={{
                                            border: '1px solid #333', padding: '8px', textAlign: 'right',  // Alignement à droite pour "110"
                                            backgroundColor: '#f5f5f5'
                                        }}>110
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td style={{
                                            border: '1px solid #333',
                                            padding: '8px',
                                            textAlign: 'center',
                                            backgroundColor: '#f5f5f5',
                                            width: '15%'  // Colonne gauche plus petite
                                        }}>f(x)
                                        </td>
                                        <td style={{
                                            borderRight: '1px solid transparent',  // Ligne verticale invisible
                                            padding: '15px', height: '60px', width: '35%'  // Taille intermédiaire
                                        }}>
                                            {/* Espace pour dessin */}
                                        </td>
                                        <td style={{
                                            padding: '15px', height: '150px', width: '50%'  // Case de droite plus grande
                                        }}>
                                            {/* Espace pour dessin */}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="correction-btnoptic mt-1" onClick={() => {
                                    toggleCorrection('question1c1');
                                    toggleCorrection('question1c2');
                                }}>
                                    <FaCheck/> Correction
                                </button>
                            </div>
                        </div>

                        <Question
                            id="question1d"
                            text="4. Déterminer le coefficient a du modèle quadratique y = ax² à l'aide de la calculatrice."
                            answer={answers.question1d}
                            showCorrection={showCorrections.question1d}
                            onChange={handleInputChange}
                            onToggleCorrection={toggleCorrection}
                        />

                        <Question
                            id="question1e"
                            text="5. En déduire la distance de freinage pour une vitesse de 130 km/h."
                            answer={answers.question1e}
                            showCorrection={showCorrections.question1e}
                            onChange={handleInputChange}
                            onToggleCorrection={toggleCorrection}
                            textarea
                        />

                        <div className="info-bubble property">
                            <div className="info-bubble-title"><FaChartLine/> Propriété</div>
                            <p>
                                La distance de freinage d’un véhicule est proportionnelle au carré de sa vitesse.<br/>
                                Autrement dit, si la vitesse double, la distance de freinage est multipliée par 4 ;
                                si la vitesse triple, elle est multipliée par 9, etc.
                            </p>
                        </div>
                    </section>
                </div>
                <div className="print-page" id="page2-start">
                    {/* Activité 2 */}
                    <section className="tp-section compact mt-0">
                        <h3 className="compact-title"><FaRuler/> Activité 2 : Calculer des dimensions à une échelle
                            donnée</h3>
                        <div className="d-flex align-items-start flex-wrap mt-0" style={{gap: '10px'}}>
                            <div style={{flex: 1, minWidth: '300px'}}>
                                <div className="renovation-contexte mt-0">
                                    <p>
                                        <strong>Quentin</strong>, en stage dans un bureau d'études, élabore des plans
                                        pour des clients
                                        de différents secteurs industriels. Quelles formules doit-il entrer dans son
                                        logiciel pour calculer des dimensions sur ses plans ?
                                    </p>
                                </div>
                            </div>
                            <div className="flex-shrink-0"
                                 style={{maxWidth: '160px', cursor: 'pointer'}}>
                                <img src={reperefocntioncarre2}
                                     alt="Lancer de Dés"
                                     className="img-fluid rounded shadow-sm compact-img"
                                     onClick={() => openModal(reperefocntioncarre2, "Voiture Drift")}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="tp-section grid-layout mt-0">
                        {/* Première ligne - 2 cartes côte à côte */}
                        <Row className="g-4">
                            {/* Carte 1 */}
                            <Col md={6}>
                                <Card className="activity-card mt-0">

                                    <Card.Title className="activity-title mt-0">📏 Échelle 5:1</Card.Title>
                                    <p className="activity-subtitle">1️⃣ Compléter le tableau pour une échelle de 5
                                        pour
                                        1</p>
                                    <table className="styled-table">
                                        <thead>
                                        <tr>
                                            <th>Longueur réelle x (mm)</th>
                                            <th>10</th>
                                            <th>40</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Longueur à représenter y (mm)</td>
                                            <td>50</td>
                                            <td>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="?"
                                                    value={answers.question2a2}
                                                    onChange={(e) => handleInputChange('question2a2', e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="d-flex justify-content-end">
                                        <button className="correction-btnoptic mt-4"
                                                onClick={() => toggleCorrection('question2a2')}>
                                            <FaCheck/> Correction
                                        </button>
                                    </div>


                                    <Card.Title className="activity-title mt-3">📉 Fonction linéaire</Card.Title>
                                    <p className="activity-subtitle">
                                        2️⃣ Quentin pense utiliser y = -5x pour une réduction à l'échelle 1/5.
                                        Est-ce
                                        correct ? Justifiez.
                                    </p>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={answers.question2b}
                                        onChange={(e) => handleInputChange('question2b', e.target.value)}
                                    />
                                    <div className="d-flex justify-content-end">
                                        <button className="correction-btnoptic mt-1"
                                                onClick={() => toggleCorrection('question2b')}>
                                            <FaCheck/> Correction
                                        </button>
                                    </div>

                                </Card>
                            </Col>

                            {/* Carte 2 */}
                            <Col md={6}>
                                <Card className="activity-card">

                                    <Card.Title className="activity-title">🔢 Déterminer k</Card.Title>
                                    <p className="activity-subtitle">3️⃣ Déterminer la valeur de k pour l'équation y
                                        =
                                        kx correspondant à l'échelle 1/5.</p>
                                    <Form.Control
                                        type="text"
                                        value={answers.question2c}
                                        onChange={(e) => handleInputChange('question2c', e.target.value)}
                                    />
                                    <div className="d-flex justify-content-end">
                                        <button className="correction-btnoptic mt-1"
                                                onClick={() => toggleCorrection('question2c')}>
                                            <FaCheck/> Correction
                                        </button>
                                    </div>

                                    <Card.Title className="activity-title mt-5">🧠 Observations</Card.Title>
                                    <p className="activity-subtitle">4️⃣ Complétez les phrases :</p>

                                    <Form.Group className="mb-2">
                                        <Form.Label>Si k = 0, la droite est</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={answers.question2d1}
                                            onChange={(e) => handleInputChange('question2d1', e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-2">
                                        <Form.Label>Si k augmente, l'inclinaison de la droite</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={answers.question2d2}
                                            onChange={(e) => handleInputChange('question2d2', e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-2">
                                        <Form.Label>Si k est négatif, la droite est</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={answers.question2d3}
                                            onChange={(e) => handleInputChange('question2d3', e.target.value)}
                                        />
                                    </Form.Group>

                                    <div className="d-flex justify-content-end">
                                        <button className="correction-btnoptic mt-1" onClick={() => {
                                            toggleCorrection('question2d1');
                                            toggleCorrection('question2d2');
                                            toggleCorrection('question2d3');
                                        }}>
                                            <FaCheck/> Correction
                                        </button>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <div className="info-bubble definition">
                            <div className="info-bubble-title">
                                <BsFillQuestionCircleFill/> Propriété mathématique
                            </div>
                            <p style={{fontStyle: 'italic', fontFamily: 'MathJax_Main'}}>
                                Soit <strong>f</strong> une fonction et <strong>k</strong> un nombre réel :
                            </p>
                            <ul className="list-disc pl-5 text-sm space-y-1"
                                style={{fontStyle: 'italic', fontFamily: 'MathJax_Main'}}>
                                <li>
                                    Si <strong>k &gt; 0</strong>, alors <strong>kf</strong> a le <em>même sens de
                                    variation</em> que <strong>f</strong>.
                                </li>
                                <li>
                                    Si <strong>k &lt; 0</strong>, alors <strong>kf</strong> a le <em>sens de variation
                                    opposé</em> à celui de <strong>f</strong>.
                                </li>
                            </ul>
                        </div>


                        <h3 className="compact-title"><BsFillQuestionCircleFill/> Je retiens</h3>
                        <div className="conclusion-container">
                            {showConclusion ? (<div className="info-bubble warning">
                                <div className="info-bubble-title"><FaChartLine/> Conclusion</div>
                                <p style={{fontWeight: 'bold'}}>

                                    Une fonction de la forme <span
                                    style={{fontStyle: 'italic', fontFamily: 'MathJax_Main'}}>x → kx²</span> est
                                    représentée par une parabole.
                                    <br/><span
                                    style={{fontStyle: 'italic', fontFamily: 'MathJax_Main'}}> Si k {'>'} 0</span>, la
                                    parabole est orientée vers le haut<strong
                                    style={{fontStyle: 'italic', fontWeight: 'normal'}}> (convexe)</strong>.<br/>
                                    <span
                                        style={{fontStyle: 'italic', fontFamily: 'MathJax_Main'}}>Si k {'<'} 0</span>,
                                    elle est orientée vers le bas <strong
                                    style={{fontStyle: 'italic', fontWeight: 'normal'}}>(concave)</strong>.

                                </p>
                            </div>) : (<div className="empty-conclusion-space"></div>)}
                        </div>
                        <button className="toggle-conclusion-btn" onClick={() => setShowConclusion(!showConclusion)}>
                            <FaCheck/> {showConclusion ? 'Masquer la conclusion' : 'Afficher la conclusion'}
                        </button>
                    </section>

                </div>

                <footer className="tp-footer compact mb-0 mt-0">
                    <p className="compact-text">Mathématiques 2nde - Fonctions</p>
                    <p className="compact-text">Fonction carré et variations</p>
                </footer>
                {graphModal && (<div className="modal-overlay" onClick={closeGraphModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeGraphModal}>
                            × Fermer
                        </button>
                        <div className="graph-modal-container">
                            <GraphComponent MaxWidth={800} height={600} showCorrection={showCorrections.question1b}/>
                        </div>
                        {!showCorrections.question1b && (
                            <p className="text-center mt-3">Cliquez sur "Correction" pour afficher la parabole</p>)}
                    </div>
                </div>)}

                {/* Modal pour l'image agrandie */}
                {modalState.show && (<ModalImage
                    imageUrl={modalState.imageUrl}
                    altText={modalState.altText}
                    onClose={closeModal}
                />)}
            </div>
        </>
    );
};

// Composant Question (identique à celui de Act1Proba.js)
const Question = ({
                      id, text, answer, showCorrection, onChange, onToggleCorrection, textarea = false
                  }) => (
    <div className="question compact" style={{marginBottom: '0'}}>
        {text && <p className="compact-text">{text}</p>}
        <div className="answer-container compact">
            {textarea ? (<AutoResizeTextarea
                className={`answer-input ${showCorrection ? 'correction-active' : ''}`}
                value={answer}
                onChange={(e) => onChange(id, e.target.value)}
                minRows={3}
                maxRows={13}
            />) : (<input
                type="text"
                className={`answer-input compact ${showCorrection ? 'correction-active' : ''}`}
                value={answer}
                onChange={(e) => onChange(id, e.target.value)}
            />)}
        </div>
        <div className="d-flex justify-content-end">
            <button className="correction-btnoptic mt-1"
                    onClick={() => onToggleCorrection(id)}
                    style={{marginBottom: '0'}}
            >
                <FaCheck/> Correction
            </button>
        </div>
    </div>
);

export default FonctionCarre;
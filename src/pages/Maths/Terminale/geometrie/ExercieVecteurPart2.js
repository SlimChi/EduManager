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
import geovecttripie from "../../../../assets/geovecttripie.png";
import ModalImage from "../../../../utils/ModalImage";
import vegeta_vs_freezer from "../../../../assets/vegeta_vs_freezer.jpg";
import {Table} from 'react-bootstrap';
import AutomatismesTerminal from "../../../../config/AutomatismesTerminal";

const ExercicesVecteursPart2 = () => {
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
        exo1_1: '', exo1_2: '', exo1_3: '', exo2_1: '', exo2_2: '',
        exo3_1: '', exo3_2: '', exo4_1: '', exo4_2: '', exo5: '',
        exo6_1: '', exo6_2: '', exo7_1: '', exo7_2: '', exo2_3: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        exo1_1: false, exo1_2: false, exo1_3: false, exo2_1: false, exo2_2: false,
        exo3_1: false, exo3_2: false, exo4_1: false, exo4_2: false, exo5: false,
        exo6_1: false, exo6_2: false, exo7_1: false, exo7_2: false, exo2_3: false
    });

    // Réponses attendues complètes
    const correctAnswers = {
        exo1_1: {
            formatted: <div>
                <BlockMath math="\overrightarrow{AD} = \begin{pmatrix} 0 \\ 0 \\ 500 \end{pmatrix}"/>
                <BlockMath math="\overrightarrow{BE} = \begin{pmatrix} 0 \\ 0 \\ 500 \end{pmatrix}"/>
                <BlockMath math="\overrightarrow{CF} = \begin{pmatrix} 0 \\ 0 \\ 500 \end{pmatrix}"/>
            </div>
        },
        exo1_2: {
            formatted: <div>
                <BlockMath math="\|\overrightarrow{AD}\| = \sqrt{0^2 + 0^2 + 500^2} = 500 \text{ cm}"/>
                <BlockMath math="\|\overrightarrow{BE}\| = \sqrt{0^2 + 0^2 + 500^2} = 500 \text{ cm}"/>
                <BlockMath math="\|\overrightarrow{CF}\| = \sqrt{0^2 + 0^2 + 500^2} = 500 \text{ cm}"/>
            </div>
        },
        exo1_3: {
            formatted: <div>
                <p>Les trois vecteurs ont la même norme (500 cm), ce qui montre que les trois montants verticaux du
                    support ont la même longueur.</p>
            </div>
        },
        exo2_1: {
            formatted: <div>
                <p>Le trajet de Krilin peut être exprimé comme :</p>
                <BlockMath math="\overrightarrow{NY} + \overrightarrow{YV} + \overrightarrow{VT}"/>
                <p>Avec :</p>
                <BlockMath math="\overrightarrow{NY} = \begin{pmatrix} -1 \\ 35 \\ -109 \end{pmatrix}"/>
                <BlockMath math="\overrightarrow{YV} = \begin{pmatrix} -84 \\ 79 \\ 161 \end{pmatrix}"/>
                <BlockMath math="\overrightarrow{VT} = \begin{pmatrix} 50 \\ -104 \\ -152 \end{pmatrix}"/>
            </div>
        },
        exo2_2: {
            formatted: <div>
                <p>Distance totale parcourue :</p>
                <BlockMath
                    math="\|\overrightarrow{NY}\| = \\\
                    \sqrt{(-1)^2 + 35^2 + (-109)^2} \approx 114.5 \text{ millions de km}"/>
                <BlockMath
                    math="\|\overrightarrow{YV}\| = \\\
                    \sqrt{(-84)^2 + 79^2 + 161^2} \approx 198.0 \text{ millions de km}"/>
                <BlockMath
                    math="\|\overrightarrow{VT}\| = \\\
                    \sqrt{50^2 + (-104)^2 + (-152)^2} \approx 190.8 \text{ millions de km}"/>
                <BlockMath math="\text{Total} = \\\
                114.5 + 198.0 + 190.8 \approx 503.3 \text{ millions de km}"/>
            </div>
        },
        exo2_3: {
            formatted: <div>
                <p>La base secrète se trouve aux coordonnées :</p>
                <BlockMath
                    math="\overrightarrow{CN} = \begin{pmatrix} 35-34 \\ -10-25 \\ 100-(-9) \end{pmatrix} = \begin{pmatrix} 1 \\ -35 \\ 109 \end{pmatrix}"/>
                <BlockMath
                    math="\overrightarrow{MO} = \begin{pmatrix} 0-(-50) \\ 0-104 \\ 0-152 \end{pmatrix} = \begin{pmatrix} 50 \\ -104 \\ -152 \end{pmatrix}"/>
                <BlockMath
                    math="\overrightarrow{PB} = 2 \times \begin{pmatrix} 1 \\ -35 \\ 109 \end{pmatrix} - \frac{1}{2} \begin{pmatrix} 50 \\ -104 \\ -152 \end{pmatrix} = \begin{pmatrix} -23 \\ -18 \\ 294 \end{pmatrix}"/>
                <BlockMath
                    math="B = P + \overrightarrow{PB} = \begin{pmatrix} 29 \\ 146 \\ 57 \end{pmatrix} + \begin{pmatrix} -23 \\ -18 \\ 294 \end{pmatrix} = \begin{pmatrix} 6 \\ 128 \\ 351 \end{pmatrix}"/>
                <p>Distance à Orthogona :</p>
                <BlockMath math="\sqrt{6^2 + 128^2 + 351^2} \approx 373.6 \text{ millions de km}"/>
            </div>
        },
        exo3_1: {
            formatted: <div>
                <p>Erreurs de Marco :</p>
                <ol>
                    <li>Il a mal calculé la composante z (a ajouté 8 au lieu de multiplier par 3)</li>
                    <li>Il n'a pas multiplié toutes les composantes de BC par 3</li>
                </ol>
                <p>Correction :</p>
                <BlockMath
                    math="\overrightarrow{EF} = \begin{pmatrix} 30 + 3 \times 8 \\ 16 + 3 \times 6 \\ -2 + 3 \times (-2) \end{pmatrix} = \begin{pmatrix} 54 \\ 34 \\ -8 \end{pmatrix}"/>
            </div>
        },
        exo4_1: {
            formatted: <div>
                <BlockMath
                    math="\overrightarrow{AB} = \begin{pmatrix} -1-(-7) \\ 1-8 \\ 9-2 \end{pmatrix} = \begin{pmatrix} 6 \\ -7 \\ 7 \end{pmatrix}"/>
                <BlockMath
                    math="\overrightarrow{AC} = \begin{pmatrix} 2-(-7) \\ 4-8 \\ 2-2 \end{pmatrix} = \begin{pmatrix} 9 \\ -4 \\ 0 \end{pmatrix}"/>
            </div>
        },
        exo4_2: {
            formatted: <div>
                <BlockMath math="\|\overrightarrow{AB}\| = \sqrt{6^2 + (-7)^2 + 7^2} = \sqrt{134} \approx 11.58"/>
                <BlockMath math="\|\overrightarrow{AC}\| = \sqrt{9^2 + (-4)^2 + 0^2} = \sqrt{97} \approx 9.85"/>
            </div>
        },
        exo5: {
            formatted: <BlockMath
                math="\overrightarrow{PX} = 2 \times \begin{pmatrix} 58 \\ -15 \\ 120 \end{pmatrix} + \begin{pmatrix} -47 \\ 25 \\ -250 \end{pmatrix} = \begin{pmatrix} 69 \\ -5 \\ -10 \end{pmatrix}"/>
        },
        exo6_1: {
            formatted: <BlockMath
                math="\overrightarrow{AC} = \begin{pmatrix} -2 + 8 \\ 3 + 5 \\ 4 + 4 \end{pmatrix} = \begin{pmatrix} 6 \\ 8 \\ 8 \end{pmatrix}"/>
        },
        exo6_2: {
            formatted: <BlockMath
                math="\overrightarrow{AC} = \begin{pmatrix} 5 + 1 \\ 0 + (-1.5) \\ -2 + 1 \end{pmatrix} = \begin{pmatrix} 6 \\ -1.5 \\ -1 \end{pmatrix}"/>
        },
        exo7_1: {
            formatted: <BlockMath
                math="\overrightarrow{AC} = \begin{pmatrix} 4.1 + (-2.1) \\ 3 + (-1.3) \\ -2 + (-1.3) \end{pmatrix} = \begin{pmatrix} 2 \\ 1.7 \\ -3.3 \end{pmatrix}"/>
        },

    };

    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));
    };

    const toggleSummary = () => {
        setShowSummary(!showSummary);
    };

    if (className === 'Seconde-geometrie-act5') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>
            <div className="tp-container" ref={contentRef} style={{fontFamily: 'MathJax'}}>
                <PrintManager
                    contentRef={contentRef}
                    activityName="Exercices_Vecteurs_3D_Part2"
                    pageCount={3}
                    quality="hd"
                />
                <div className="print-page">
                    <AutomatismesTerminal/>
                </div>
                {/* PAGE 1 */}
                <div className="print-page">
                    <div className="math-chapter-box blue mt-0">
                        <h2 className="math-chapter-title-test mt-0">Géométrie vectorielle dans l'espace - Partie 2</h2>
                    </div>
                    <div className="activity-header mt-0">
                        <span className="activity-badge">EXERCICES</span>
                        <div className="activity-title">
                            <span className="course-title">Applications des vecteurs en 3D</span>
                        </div>
                    </div>

                    <div className="alert alert-info">
                        <strong>Contexte :</strong> L'espace est rapporté au repère orthonormé <InlineMath
                        math="(0; \overrightarrow{i}, \overrightarrow{j}, \overrightarrow{k})"/>.
                    </div>

                    <div className="row">
                        {/* Colonne gauche */}
                        <div className="col-md-6">
                            <div className="question-card">
                                <h4 className="vect-title">Exercice 1 - Support de cuve</h4>
                                <div className="question-content">
                                    <p>Une cuve d'huile hydraulique est posée sur un trépied en profilés acier, installé
                                        dans un atelier. Ce support est représenté dans un repère orthonormé (unité :
                                        centimètre).</p>
                                    <div
                                        className="d-flex justify-content-center mt-3"
                                        style={{maxWidth: '100%'}}
                                    >
                                        <img
                                            src={geovecttripie}
                                            alt="Lancer de Dés"
                                            className="img-fluid rounded shadow-sm"
                                            style={{maxWidth: '200px', cursor: 'pointer'}}
                                            onClick={() => openModal(geovecttripie, 'Lancer de Dés')}
                                        />
                                    </div>

                                    <p>Coordonnées des points :</p>
                                    <ul>
                                        <li>A(0; 125; 0) ; B(-110; -63; 0) ; C(110; -63; 0) ; <br/> D(0; 125; 500) ;
                                            E(-110;
                                            -63; 500) ; F(110; -63; 500)
                                        </li>
                                    </ul>

                                    <p>
                                        <strong>1.</strong> Déterminer les coordonnées des vecteurs&nbsp;
                                        <InlineMath math="\vec{AD}"/>,&nbsp;
                                        <InlineMath math="\vec{BE}"/>,&nbsp;
                                        <InlineMath math="\vec{CF}"/>.
                                    </p>
                                    <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.exo1_1}
                                            onChange={(e) => handleInputChange('exo1_1', e.target.value)}
                                            rows={4}
                                        />
                                        <button
                                            className="correction-btn"
                                            onClick={() => toggleCorrection('exo1_1')}
                                        >
                                            <FaCheck/> {showCorrections.exo1_1 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo1_1 && (
                                            <div className="correction-box">
                                                {correctAnswers.exo1_1.formatted}
                                            </div>
                                        )}
                                    </div>

                                    <p>
                                        <strong>2.</strong> Déterminer la norme des vecteurs&nbsp;
                                        <InlineMath math="||\vec{AD}||"/>,&nbsp;
                                        <InlineMath math="||\vec{BE}||"/>,&nbsp;
                                        <InlineMath math="||\vec{CF}||"/>.
                                    </p>
                                    <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.exo1_2}
                                            onChange={(e) => handleInputChange('exo1_2', e.target.value)}
                                            rows={4}
                                        />
                                        <button
                                            className="correction-btn"
                                            onClick={() => toggleCorrection('exo1_2')}
                                        >
                                            <FaCheck/> {showCorrections.exo1_2 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo1_2 && (
                                            <div className="correction-box">
                                                {correctAnswers.exo1_2.formatted}
                                            </div>
                                        )}
                                    </div>

                                    <p><strong>3.</strong> Que peut-on conclure ?</p>
                                    <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.exo1_3}
                                            onChange={(e) => handleInputChange('exo1_3', e.target.value)}
                                            rows={2}
                                        />
                                        <button
                                            className="correction-btn"
                                            onClick={() => toggleCorrection('exo1_3')}
                                        >
                                            <FaCheck/> {showCorrections.exo1_3 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo1_3 && (
                                            <div className="correction-box">
                                                {correctAnswers.exo1_3.formatted}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Colonne droite */}
                        <div className="col-md-6">
                            <div className="question-card">
                                <div className="question-content">
                                    <h4 className="vect-title">Exercice 2 - Voyage spatial</h4>
                                    <p>
                                        <strong>🛠️ Krilin</strong>, technicien en{' '}
                                        <strong style={{color: 'steelblue'}}>structures métalliques</strong>, revient de
                                        la planète{' '}
                                        <strong style={{color: 'green'}}>Namek (N)</strong> avec un{' '}
                                        <strong style={{color: 'orange'}}>générateur d’énergie</strong> conçu par{' '}
                                        <strong>Bulma</strong>. Il doit le livrer sur{' '}
                                        <strong style={{color: 'blue'}}>Terre (T)</strong> pour l’intégrer à une{' '}
                                        <strong>station de défense</strong>.
                                    </p>
                                    <p>
                                        🚀 Sur le chemin du retour, Krilin fait une halte sur{' '}
                                        <strong style={{color: 'purple'}}>Yardrat (Y)</strong> pour{' '}
                                        <em>recharger son vaisseau</em>. Mais 🌌 un{' '}
                                        <strong style={{color: 'red'}}>champ d’astéroïdes imprévu</strong>, causé par
                                        l’explosion d’un ancien satellite de{' '}
                                        <strong style={{color: 'crimson'}}>Freezer</strong>, le force à{' '}
                                        <strong style={{color: 'darkred'}}>modifier sa trajectoire</strong>. Il passe
                                        alors par la station relais{' '}
                                        <strong style={{color: 'darkorange'}}>Végéta (V)</strong> pour contourner la
                                        zone à risque.
                                    </p>

                                    <p>
                                        📍 Les coordonnées sont exprimées en <strong>millions de kilomètres</strong>,
                                        dans un{' '}
                                        <strong>repère orthonormé</strong> ayant pour origine le centre de la
                                        planète{' '}
                                        <strong style={{color: 'blue'}}>Terre (T)</strong>.
                                    </p>

                                    <p><strong>🗺️ Coordonnées des points :</strong></p>

                                    <Table striped bordered hover responsive style={{maxWidth: '500px'}}>
                                        <thead className="table-dark">
                                        <tr>
                                            <th>🌌 Planète / Station</th>
                                            <th>🧭 Coordonnées (x ; y ; z)</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td style={{color: 'green'}}><strong>Namek (N)</strong></td>
                                            <td>(35 ; -10 ; 100)</td>
                                        </tr>
                                        <tr>
                                            <td style={{color: 'purple'}}><strong>Yardrat (Y)</strong></td>
                                            <td>(34 ; 25 ; -9)</td>
                                        </tr>
                                        <tr>
                                            <td style={{color: 'darkorange'}}><strong>Végéta (V)</strong></td>
                                            <td>(-50 ; 104 ; 152)</td>
                                        </tr>
                                        <tr>
                                            <td style={{color: 'blue'}}><strong>Terre (T)</strong></td>
                                            <td>(0 ; 0 ; 0)</td>
                                        </tr>
                                        <tr>
                                            <td style={{color: 'teal'}}><strong>Pital (P)</strong></td>
                                            <td>(29 ; 146 ; 57)</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    <div
                                        className="flex-shrink-0"
                                        style={{
                                            maxWidth: '400px',
                                            cursor: 'pointer',
                                            marginTop: '10px',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        <img
                                            src={vegeta_vs_freezer}
                                            alt="Lancer de Dés"
                                            className="img-fluid rounded shadow-sm compact-img"
                                            onClick={() => openModal(vegeta_vs_freezer, 'Lancer de Dés')}
                                        />
                                    </div>
                                    <p>La position de la base secrète est donnée par :</p>
                                    <BlockMath
                                        math="\overrightarrow{PB} = 2 \times \overrightarrow{CN} - \frac{1}{2} \overrightarrow{MO}"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PAGE 2 */}
                <div className="print-page">
                    <div className="row">
                        {/* Colonne gauche */}
                        <div className="col-md-6">
                            <div className="question-card">
                                <p><strong>1.</strong> Écrire le trajet de Krilin à l'aide d'une somme de vecteurs.
                                </p>
                                <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.exo2_1}
                                            onChange={(e) => handleInputChange('exo2_1', e.target.value)}
                                            rows={2}
                                        />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('exo2_1')}
                                    >
                                        <FaCheck/> {showCorrections.exo2_1 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.exo2_1 && (
                                        <div className="correction-box">
                                            {correctAnswers.exo2_1.formatted}
                                        </div>
                                    )}
                                </div>
                                <p><strong>2.</strong> Calculer la distance totale parcourue par Krilin.</p>
                                <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.exo2_2}
                                            onChange={(e) => handleInputChange('exo2_2', e.target.value)}
                                            rows={4}
                                        />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('exo2_2')}
                                    >
                                        <FaCheck/> {showCorrections.exo2_2 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.exo2_2 && (
                                        <div className="correction-box">
                                            {correctAnswers.exo2_2.formatted}
                                        </div>
                                    )}
                                </div>
                                <p><strong>3.</strong> Déterminer les coordonnées de la base secrète et sa distance
                                    à Orthogona.</p>
                                <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.exo2_3}
                                            onChange={(e) => handleInputChange('exo2_3', e.target.value)}
                                            rows={4}
                                        />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('exo2_3')}
                                    >
                                        <FaCheck/> {showCorrections.exo2_3 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.exo2_3 && (
                                        <div className="correction-box">
                                            {correctAnswers.exo2_3.formatted}
                                        </div>
                                    )}
                                </div>
                                <h4 className="vect-title">Exercice 3 - Copie d'élève</h4>
                                <div className="question-content">
                                    <p>Voici l'énoncé de l'exercice réalisé par Marco :</p>
                                    <blockquote>
                                        On considère les vecteurs <InlineMath
                                        math="\overrightarrow{AB} = \begin{pmatrix} 30 \\ 16 \\ -2 \end{pmatrix}"/> et <InlineMath
                                        math="\overrightarrow{BC} = \begin{pmatrix} 8 \\ 6 \\ -2 \end{pmatrix}"/>.<br/>
                                        Calculer les coordonnées du vecteur <InlineMath
                                        math="\overrightarrow{EF} = \overrightarrow{AB} + 3 \times \overrightarrow{BC}"/>.
                                    </blockquote>
                                    <p>Voici la copie de Marco :</p>
                                    <blockquote>
                                        <InlineMath
                                            math="\begin{pmatrix} 30 + 3 \times 8 \\ 16 + 6 \\ -2 + 8 \end{pmatrix} = \begin{pmatrix} 54 \\ 22 \\ 6 \end{pmatrix}"/>
                                    </blockquote>
                                    <p>Indiquer les erreurs commises par Marco puis les corriger.</p>
                                    <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.exo3_1}
                                            onChange={(e) => handleInputChange('exo3_1', e.target.value)}
                                            rows={6}
                                        />
                                        <button
                                            className="correction-btn"
                                            onClick={() => toggleCorrection('exo3_1')}
                                        >
                                            <FaCheck/> {showCorrections.exo3_1 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo3_1 && (
                                            <div className="correction-box">
                                                {correctAnswers.exo3_1.formatted}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <h4 className="vect-title">Exercice 4 - Vecteurs et normes</h4>
                                <div className="question-content">
                                    <p>Dans un repère orthonormé, on considère les points :</p>
                                    <ul>
                                        <li>A(-7; 8; 2) ; B(-1; 1; 9) ; C(2; 4; 2)</li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                        {/* Colonne droite */}
                        <div className="col-md-6">
                            <div className="question-card">
                                <p><strong>1.</strong> Déterminer les coordonnées des vecteurs AB et AC.</p>
                                <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.exo4_1}
                                            onChange={(e) => handleInputChange('exo4_1', e.target.value)}
                                            rows={5}
                                        />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('exo4_1')}
                                    >
                                        <FaCheck/> {showCorrections.exo4_1 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.exo4_1 && (
                                        <div className="correction-box">
                                            {correctAnswers.exo4_1.formatted}
                                        </div>
                                    )}
                                </div>

                                <p><strong>2.</strong> Calculer les normes des vecteurs AB et AC.</p>
                                <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.exo4_2}
                                            onChange={(e) => handleInputChange('exo4_2', e.target.value)}
                                            rows={4}
                                        />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('exo4_2')}
                                    >
                                        <FaCheck/> {showCorrections.exo4_2 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.exo4_2 && (
                                        <div className="correction-box">
                                            {correctAnswers.exo4_2.formatted}
                                        </div>
                                    )}
                                </div>
                                <h4 className="vect-title">Exercice 5 - Combinaison linéaire</h4>
                                <div className="question-content">
                                    <p>On considère les vecteurs :</p>
                                    <BlockMath
                                        math="\overrightarrow{AB} = \begin{pmatrix} 58 \\ -15 \\ 120 \end{pmatrix}"/>
                                    <BlockMath
                                        math="\overrightarrow{CD} = \begin{pmatrix} -47 \\ 25 \\ -250 \end{pmatrix}"/>
                                    <p>Déterminer les coordonnées du vecteur <InlineMath
                                        math="\overrightarrow{PX} = 2 \times \overrightarrow{AB} + \overrightarrow{CD}"/>.
                                    </p>
                                    <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.exo5}
                                            onChange={(e) => handleInputChange('exo5', e.target.value)}
                                            rows={6}
                                        />
                                        <button
                                            className="correction-btn"
                                            onClick={() => toggleCorrection('exo5')}
                                        >
                                            <FaCheck/> {showCorrections.exo5 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo5 && (
                                            <div className="correction-box">
                                                {correctAnswers.exo5.formatted}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <h4 className="vect-title">Exercice 6 - Calcul vectoriel</h4>
                                <div className="question-content">
                                    <p>Déterminer les coordonnées du vecteur AC dans les cas suivants :</p>

                                    <p><strong>1.</strong> <InlineMath
                                        math="\overrightarrow{AB} = \begin{pmatrix} -2 \\ 3 \\ 4 \end{pmatrix}"/> et <InlineMath
                                        math="\overrightarrow{BC} = \begin{pmatrix} 8 \\ 5 \\ 4 \end{pmatrix}"/></p>
                                    <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.exo6_1}
                                            onChange={(e) => handleInputChange('exo6_1', e.target.value)}
                                            rows={6}
                                        />
                                        <button
                                            className="correction-btn"
                                            onClick={() => toggleCorrection('exo6_1')}
                                        >
                                            <FaCheck/> {showCorrections.exo6_1 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo6_1 && (
                                            <div className="correction-box">
                                                {correctAnswers.exo6_1.formatted}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PAGE 3 */}
                <div className="print-page">
                    <div className="question-card">
                        <p><strong>2.</strong> <InlineMath
                            math="\overrightarrow{AB} = \begin{pmatrix} 5 \\ 0 \\ -2 \end{pmatrix}"/> et <InlineMath
                            math="\overrightarrow{BC} = \begin{pmatrix} 1 \\ -1.5 \\ 1 \end{pmatrix}"/></p>
                        <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.exo6_2}
                                            onChange={(e) => handleInputChange('exo6_2', e.target.value)}
                                            rows={6}
                                        />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('exo6_2')}
                            >
                                <FaCheck/> {showCorrections.exo6_2 ? 'Masquer' : 'Correction'}
                            </button>
                            {showCorrections.exo6_2 && (
                                <div className="correction-box">
                                    {correctAnswers.exo6_2.formatted}
                                </div>
                            )}
                        </div>
                        <p><strong>3.</strong> <InlineMath
                            math="\overrightarrow{AB} = \begin{pmatrix} 4.1 \\ 3 \\ -2 \end{pmatrix}"/> et <InlineMath
                            math="\overrightarrow{BC} = \begin{pmatrix} -2.1 \\ -1.3 \\ -1.3 \end{pmatrix}"/>
                        </p>
                        <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.exo7_1}
                                            onChange={(e) => handleInputChange('exo7_1', e.target.value)}
                                            rows={6}
                                        />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('exo7_1')}
                            >
                                <FaCheck/> {showCorrections.exo7_1 ? 'Masquer' : 'Correction'}
                            </button>
                            {showCorrections.exo7_1 && (
                                <div className="correction-box">
                                    {correctAnswers.exo7_1.formatted}
                                </div>
                            )}
                        </div>
                        <h4 className="vect-title">Synthèse</h4>
                        <div className="question-content">
                            <p>Qu'avez-vous appris à travers ces exercices sur les vecteurs en 3D ?</p>
                            <div className="answer-area">
                                <textarea
                                    className="answer-input"
                                    rows={6}
                                />
                            </div>
                        </div>
                        <AutoEvaluationGrid/>
                    </div>

                    <footer className="tp-footer">
                        <p>Exercices de géométrie vectorielle dans l'espace - Partie 2</p>
                    </footer>
                </div>

                {modalState.show && (
                    <ModalImage
                        imageUrl={modalState.imageUrl}
                        altText={modalState.altText}
                        onClose={closeModal}
                    />
                )}
            </div>
        </>
    );
};

export default ExercicesVecteursPart2;
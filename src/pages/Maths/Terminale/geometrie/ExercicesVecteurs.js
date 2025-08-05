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
import problemeBarre from "../../../../assets/problemeBarre.png";
import exerciceVecteur from "../../../../assets/exerciceVecteur.png";
import ModalImage from "../../../../utils/ModalImage";

const ExercicesVecteurs = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };
    const [modalState, setModalState] = useState({
        show: false, imageUrl: '', altText: '',
    });
    const closeModal = () => {
        setModalState((prev) => ({...prev, show: false}));
    };
    const contentRef = useRef();
    const [showSummary, setShowSummary] = useState(false);

    // États pour les réponses et corrections
    const [selectedAnswers, setSelectedAnswers] = useState({
        qcm1: '', qcm2: '', qcm3: '', qcm4: '', qcm5: [], qcm6: '', qcm7: '',
    });

    const [answers, setAnswers] = useState({
        probleme1: '', probleme2: '', probleme3: '',
        exo1: '', exo4: '', exo5_1: '', exo5_2: '', exo5_3: '', exo5_4: '',
        exo6_1: '', exo6_2: '', exo7_1: '', exo7_2: '', exo8: '', exo9: '', exo10: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        qcm1: false, qcm2: false, qcm3: false, qcm4: false, qcm5: false, qcm6: false, qcm7: false,
        probleme1: false, probleme2: false, probleme3: false,
        exo1: false, exo4: false, exo5_1: false, exo5_2: false, exo5_3: false, exo5_4: false,
        exo6_1: false, exo6_2: false, exo7_1: false, exo7_2: false, exo8: false, exo9: false, exo10: false
    });

    // Réponses attendues
    const correctAnswers = {
        qcm1: {formatted: <div>Réponse correcte: <strong>d. (0; 4; 3)</strong></div>},
        qcm2: {formatted: <div>Réponse correcte: <strong>c. (3; 4; 2)</strong></div>},
        qcm3: {formatted: <div>Réponse correcte: <strong>a. (-3; 4; 3)</strong></div>},
        qcm4: {formatted: <div>Réponse correcte: <strong>d. 5</strong></div>},
        qcm5: {
            formatted: <div>Réponses correctes: <strong>b. égaux</strong> et <strong>d. de même norme</strong></div>
        },
        qcm6: {formatted: <div>Réponse correcte: <strong>b. AE</strong></div>},
        qcm7: {formatted: <div>Réponse correcte: <strong>b. GO</strong></div>},

        probleme1: {
            formatted: <BlockMath math="C(2; 2; 2.5)"/>
        },
        probleme2: {
            formatted: <div>
                <BlockMath math="\overrightarrow{AC} = \begin{pmatrix} 0 \\ 1.5 \\ -1.6 \end{pmatrix}"/>
                <BlockMath math="\overrightarrow{BC} = \begin{pmatrix} 0 \\ -1.5 \\ -1.6 \end{pmatrix}"/>
            </div>
        },
        probleme3: {
            formatted: <div>
                <p>Longueur AC: <InlineMath math="\approx 2.19 \text{ m}"/></p>
                <p>Longueur BC: <InlineMath math="\approx 2.19 \text{ m}"/></p>
            </div>
        },

        exo1: {
            formatted: <div>
                <p>Pour déterminer les coordonnées du vecteur <InlineMath math="\overrightarrow{AB}"/> graphiquement, il
                    faut:</p>
                <ol>
                    <li>Identifier les coordonnées des points A et B</li>
                    <li>Calculer les différences: <InlineMath math="x_B - x_A"/>, <InlineMath
                        math="y_B - y_A"/>, <InlineMath math="z_B - z_A"/></li>
                </ol>
            </div>
        },

        exo4: {
            formatted: <div>
                <p>Erreur de Lisa: Elle a soustrait les coordonnées dans le mauvais sens (A - B au lieu de B - A).</p>
                <p>Correction:</p>
                <BlockMath
                    math="\overrightarrow{AB} = \begin{pmatrix} 1-0 \\ 0-2 \\ 0-2 \end{pmatrix} = \begin{pmatrix} 1 \\ -2 \\ -2 \end{pmatrix}"/>
            </div>
        },

        exo5_1: {formatted: <BlockMath math="\overrightarrow{AB} = \begin{pmatrix} 1 \\ 1.5 \\ 8 \end{pmatrix}"/>},
        exo5_2: {formatted: <BlockMath math="\overrightarrow{AB} = \begin{pmatrix} 8 \\ 3.8 \\ -4 \end{pmatrix}"/>},
        exo5_3: {formatted: <BlockMath math="\overrightarrow{AB} = \begin{pmatrix} -7 \\ -8 \\ 8 \end{pmatrix}"/>},
        exo5_4: {formatted: <BlockMath math="\overrightarrow{AB} = \begin{pmatrix} -2 \\ -1 \\ 5.75 \end{pmatrix}"/>},

        exo6_1: {
            formatted: <div>
                <BlockMath math="\overrightarrow{AB} = \begin{pmatrix} -2 \\ -1 \\ -1 \end{pmatrix}"/>
                <BlockMath math="\overrightarrow{AC} = \begin{pmatrix} -2 \\ 1 \\ -2 \end{pmatrix}"/>
                <BlockMath math="\overrightarrow{AD} = \begin{pmatrix} -3 \\ 1 \\ -2 \end{pmatrix}"/>
            </div>
        },
        exo6_2: {
            formatted: <div>
                <BlockMath math="|\overrightarrow{AB}| = \sqrt{(-2)^2 + (-1)^2 + (-1)^2} = \sqrt{6}"/>
                <BlockMath math="|\overrightarrow{AC}| = \sqrt{(-2)^2 + 1^2 + (-2)^2} = 3"/>
                <BlockMath math="|\overrightarrow{AD}| = \sqrt{(-3)^2 + 1^2 + (-2)^2} = \sqrt{14}"/>
            </div>
        },

        exo7_1: {
            formatted: <div>
                <p>La fonction Python <code>vecteur</code> calcule les coordonnées du vecteur allant du point A au point
                    B en 3D.</p>
                <p>Elle prend en entrée les coordonnées des points A et B et retourne les composantes (x, y, z) du
                    vecteur AB.</p>
            </div>
        },
        exo7_2: {
            formatted: <div>
                <p>Pour vérifier les réponses de l'exercice 6, on pourrait appeler:</p>
                <pre>{`vecteur(2, 0, 3, 0, -1, 2)  # Doit retourner (-2, -1, -1)
                    vecteur(2, 0, 3, 0, 1, 1)   # Doit retourner (-2, 1, -2)
                    vecteur(2, 0, 3, -1, 1, 1)  # Doit retourner (-3, 1, -2)`}</pre>
            </div>
        },

        exo8: {
            formatted: <div>
                <p>a. <InlineMath math="|\overrightarrow{AB}| = \sqrt{(-6)^2 + 0^2 + 0^2} = 6"/></p>
                <p>b. <InlineMath math="|\overrightarrow{CD}| = \sqrt{2^2 + 0^2 + 0^2} = 2"/></p>
                <p>c. <InlineMath math="|\overrightarrow{AD}| = \sqrt{116^2 + (-12)^2 + 0^2} \approx 116.6"/></p>
            </div>
        },

        exo9: {
            formatted: <div>
                <p>Erreurs de Nabil:</p>
                <ol>
                    <li>Calcul incorrect des coordonnées du vecteur (mauvaises soustractions)</li>
                    <li>Calcul incorrect de la norme (erreur dans les carrés et la somme)</li>
                </ol>
                <p>Correction:</p>
                <BlockMath
                    math="\overrightarrow{CG} = \begin{pmatrix} 48-24 \\ -86-(-42) \\ -26-12 \end{pmatrix} = \begin{pmatrix} 24 \\ -44 \\ -38 \end{pmatrix}"/>
                <BlockMath math="|\overrightarrow{CG}| = \sqrt{24^2 + (-44)^2 + (-38)^2} = \sqrt{3956} \approx 62.9"/>
            </div>
        },

        exo10: {
            formatted: <div>
                <p>1. Erreurs dans le programme:</p>
                <ul>
                    <li>La fonction s'appelle <code>norms</code> mais est appelée comme <code>norme</code></li>
                    <li>Le résultat retourné est <code>x</code> au lieu de la norme calculée</li>
                    <li>Il manque la racine carrée dans le calcul</li>
                </ul>
                <p>Correction:</p>
                <pre>{`from math import sqrt
                    
                    def norme(x, y, z):
                        a = sqrt(x**2 + y**2 + z**2)
                        return a
                    
                    print("La norme du vecteur est : ", norme(50, 116, -12))`}</pre>
                <p>2. En sortie, on obtiendra: <InlineMath
                    math="\sqrt{50^2 + 116^2 + (-12)^2} = \sqrt{17300} \approx 131.53"/></p>
            </div>
        }
    };

    // Gestionnaires d'événements
    // Gestionnaires d'événements
    const handleQCMChange = (question, option) => {
        if (question === 'qcm5') {
            // Gestion des cases à cocher pour les réponses multiples
            setSelectedAnswers(prev => {
                const newSelection = [...(prev[question] || [])];
                const index = newSelection.indexOf(option);

                if (index === -1) {
                    newSelection.push(option);
                } else {
                    newSelection.splice(index, 1);
                }

                return {
                    ...prev,
                    [question]: newSelection
                };
            });
        } else {
            // Gestion des boutons radio pour les réponses uniques
            setSelectedAnswers(prev => ({
                ...prev,
                [question]: option
            }));
        }
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

    if (className === 'Seconde-geometrie-act4') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }
    return (<>
        <BackButton/>
        <div className="tp-container" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Exercices_Vecteurs_3D"
                pageCount={4}
                quality="hd"
            />

            {/* PAGE 1 */}
            <div className="print-page">
                <div className="math-chapter-box blue mt-0">
                    <h2 className="math-chapter-title-test mt-0">Géométrie vectorielle dans l'espace</h2>
                </div>
                <div className="activity-header mt-0">
                    <span className="activity-badge">EXERCICES</span>
                    <div className="activity-title">
                        <span className="course-title">Vecteurs et repères 3D</span>
                    </div>
                </div>

                <div className="alert alert-info">
                    <strong>Contexte :</strong> L'espace est rapporté au repère orthonormé <InlineMath
                    math="(0; \overrightarrow{i}, \overrightarrow{j}, \overrightarrow{k})"/> d'unité graphique 1 cm.
                </div>
                <div className="row">
                    {/* Colonne de gauche */}
                    <div className="col-md-6">
                        <h4 className="vect-title" style={{color: '#007bff'}}>
                            Auto-évaluation - QCM
                        </h4>

                        <p>Une ou plusieurs bonnes réponses possibles.</p>
                        {/* Question 1 */}
                        <div style={{
                            maxWidth: '380px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            marginLeft: '7%',
                        }}>
                            <img
                                src={exerciceVecteur}
                                alt="Vecteur"
                                className="img-fluid rounded shadow-sm compact-img mb-3"
                                onClick={() => openModal(exerciceVecteur, 'Vecteur')}
                                style={{width: 'auto', maxWidth: '100%', height: 'auto'}}
                            />
                        </div>
                        <div className="question-card qcm-card">
                            <div className="question-content">
                                <p className="question-text"><strong>1.</strong> Les coordonnées de D sont :</p>
                                <div className="qcm-options-grid">
                                    <div className="qcm-option-row">
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm1-a"
                                                name="qcm1"
                                                checked={selectedAnswers.qcm1 === 'a'}
                                                onChange={() => handleQCMChange('qcm1', 'a')}
                                            />
                                            <label htmlFor="qcm1-a">a. (0; 0; 2)</label>
                                        </div>
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm1-b"
                                                name="qcm1"
                                                checked={selectedAnswers.qcm1 === 'b'}
                                                onChange={() => handleQCMChange('qcm1', 'b')}
                                            />
                                            <label htmlFor="qcm1-b">b. (3; 4; 3)</label>
                                        </div>
                                    </div>
                                    <div className="qcm-option-row">
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm1-c"
                                                name="qcm1"
                                                checked={selectedAnswers.qcm1 === 'c'}
                                                onChange={() => handleQCMChange('qcm1', 'c')}
                                            />
                                            <label htmlFor="qcm1-c">c. (0; 4; 0)</label>
                                        </div>
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm1-d"
                                                name="qcm1"
                                                checked={selectedAnswers.qcm1 === 'd'}
                                                onChange={() => handleQCMChange('qcm1', 'd')}
                                            />
                                            <label htmlFor="qcm1-d">d. (0; 4; 3)</label>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="correction-btn"
                                    onClick={() => toggleCorrection('qcm1')}
                                >
                                    <FaCheck/> {showCorrections.qcm1 ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.qcm1 && (
                                    <div className="correction-box">
                                        {correctAnswers.qcm1.formatted}
                                    </div>
                                )}
                            </div>
                            {/* Question 2 */}
                            <div className="question-content">
                                <p className="question-text"><strong>2.</strong> Les coordonnées du vecteur <InlineMath
                                    math="\overrightarrow{OC}"/> sont :</p>
                                <div className="qcm-options-grid">
                                    <div className="qcm-option-row">
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm2-a"
                                                name="qcm2"
                                                checked={selectedAnswers.qcm2 === 'a'}
                                                onChange={() => handleQCMChange('qcm2', 'a')}
                                            />
                                            <label htmlFor="qcm2-a">a. </label>
                                            <div className="vector-print-fix">
                                                <BlockMath
                                                    math=" \displaystyle \begin{pmatrix} 0 \\ 4 \\ 0 \end{pmatrix}"/>

                                            </div>


                                        </div>
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm2-b"
                                                name="qcm2"
                                                checked={selectedAnswers.qcm2 === 'b'}
                                                onChange={() => handleQCMChange('qcm2', 'b')}
                                            />
                                            <label htmlFor="qcm2-b">b. <InlineMath
                                                math="\begin{pmatrix} 0 \\ 4 \\ 2 \end{pmatrix}"/></label>
                                        </div>
                                    </div>
                                    <div className="qcm-option-row">
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm2-c"
                                                name="qcm2"
                                                checked={selectedAnswers.qcm2 === 'c'}
                                                onChange={() => handleQCMChange('qcm2', 'c')}
                                            />
                                            <label htmlFor="qcm2-c">c. <InlineMath
                                                math="\begin{pmatrix} 3 \\ 4 \\ 2 \end{pmatrix}"/></label>
                                        </div>
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm2-d"
                                                name="qcm2"
                                                checked={selectedAnswers.qcm2 === 'd'}
                                                onChange={() => handleQCMChange('qcm2', 'd')}
                                            />
                                            <label htmlFor="qcm2-d">d. <InlineMath
                                                math="\begin{pmatrix} 2 \\ 4 \\ 0 \end{pmatrix}"/></label>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="correction-btn"
                                    onClick={() => toggleCorrection('qcm2')}
                                >
                                    <FaCheck/> {showCorrections.qcm2 ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.qcm2 && (
                                    <div className="correction-box">
                                        {correctAnswers.qcm2.formatted}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    {/* Colonne de droite */}
                    <div className="col-md-6">
                        <div className="question-card qcm-card">
                            {/* Question 3 */}
                            <div className="question-content">
                                <p className="question-text"><strong>3.</strong> Les coordonnées du vecteur <InlineMath
                                    math="\overrightarrow{AD}"/> sont :</p>
                                <div className="qcm-options-grid">
                                    <div className="qcm-option-row">
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm3-a"
                                                name="qcm3"
                                                checked={selectedAnswers.qcm3 === 'a'}
                                                onChange={() => handleQCMChange('qcm3', 'a')}
                                            />
                                            <label htmlFor="qcm3-a">a. <InlineMath
                                                math="\begin{pmatrix} -3 \\ 4 \\ 3 \end{pmatrix}"/></label>
                                        </div>
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm3-b"
                                                name="qcm3"
                                                checked={selectedAnswers.qcm3 === 'b'}
                                                onChange={() => handleQCMChange('qcm3', 'b')}
                                            />
                                            <label htmlFor="qcm3-b">b.
                                                <InlineMath
                                                    math="\begin{pmatrix} 0 \\ -4 \\ -3 \end{pmatrix}"/>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="qcm-option-row">
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm3-c"
                                                name="qcm3"
                                                checked={selectedAnswers.qcm3 === 'c'}
                                                onChange={() => handleQCMChange('qcm3', 'c')}
                                            />
                                            <label htmlFor="qcm3-c">c. <InlineMath
                                                math="\begin{pmatrix} 3 \\ 4 \\ 3 \end{pmatrix}"/></label>
                                        </div>
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm3-d"
                                                name="qcm3"
                                                checked={selectedAnswers.qcm3 === 'd'}
                                                onChange={() => handleQCMChange('qcm3', 'd')}
                                            />
                                            <label htmlFor="qcm3-d">d. <InlineMath
                                                math="\begin{pmatrix} -3 \\ -4 \\ 0 \end{pmatrix}"/></label>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="correction-btn"
                                    onClick={() => toggleCorrection('qcm3')}
                                >
                                    <FaCheck/> {showCorrections.qcm3 ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.qcm3 && (
                                    <div className="correction-box">
                                        {correctAnswers.qcm3.formatted}
                                    </div>
                                )}
                            </div>
                            {/* Question 4 */}

                            <div className="question-content">
                                <p className="question-text"><strong>4.</strong> La norme du vecteur <InlineMath
                                    math="\overrightarrow{BF}"/> est :</p>
                                <div className="qcm-options-grid">
                                    <div className="qcm-option-row">
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm4-a"
                                                name="qcm4"
                                                checked={selectedAnswers.qcm4 === 'a'}
                                                onChange={() => handleQCMChange('qcm4', 'a')}
                                            />
                                            <label htmlFor="qcm4-a">a. <InlineMath
                                                math="|\overrightarrow{BF}| = 25"/></label>
                                        </div>
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm4-b"
                                                name="qcm4"
                                                checked={selectedAnswers.qcm4 === 'b'}
                                                onChange={() => handleQCMChange('qcm4', 'b')}
                                            />
                                            <label htmlFor="qcm4-b">b. <InlineMath
                                                math="|\overrightarrow{BF}| = 7"/></label>
                                        </div>
                                    </div>
                                    <div className="qcm-option-row">
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm4-c"
                                                name="qcm4"
                                                checked={selectedAnswers.qcm4 === 'c'}
                                                onChange={() => handleQCMChange('qcm4', 'c')}
                                            />
                                            <label htmlFor="qcm4-c">c. <InlineMath
                                                math="|\overrightarrow{BF}| = 1"/></label>
                                        </div>
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm4-d"
                                                name="qcm4"
                                                checked={selectedAnswers.qcm4 === 'd'}
                                                onChange={() => handleQCMChange('qcm4', 'd')}
                                            />
                                            <label htmlFor="qcm4-d">d. <InlineMath
                                                math="|\overrightarrow{BF}| = 5"/></label>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="correction-btn"
                                    onClick={() => toggleCorrection('qcm4')}
                                >
                                    <FaCheck/> {showCorrections.qcm4 ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.qcm4 && (
                                    <div className="correction-box">
                                        {correctAnswers.qcm4.formatted}
                                    </div>
                                )}
                            </div>


                            {/* Question 5 */}

                            <div className="question-content">
                                <p className="question-text"><strong>5.</strong> Les vecteurs <InlineMath
                                    math="\overrightarrow{BC}"/> et <InlineMath math="\overrightarrow{OE}"/> sont :</p>
                                <div className="qcm-options-grid">
                                    <div className="qcm-option-row">
                                        <div className="qcm-option">
                                            <input
                                                type="checkbox"
                                                id="qcm5-a"
                                                checked={selectedAnswers.qcm5?.includes('a') || false}
                                                onChange={() => handleQCMChange('qcm5', 'a')}
                                            />
                                            <label htmlFor="qcm5-a">a. opposés</label>
                                        </div>
                                        <div className="qcm-option">
                                            <input
                                                type="checkbox"
                                                id="qcm5-b"
                                                checked={selectedAnswers.qcm5?.includes('b') || false}
                                                onChange={() => handleQCMChange('qcm5', 'b')}
                                            />
                                            <label htmlFor="qcm5-b">b. égaux</label>
                                        </div>
                                    </div>
                                    <div className="qcm-option-row">
                                        <div className="qcm-option">
                                            <input
                                                type="checkbox"
                                                id="qcm5-c"
                                                checked={selectedAnswers.qcm5?.includes('c') || false}
                                                onChange={() => handleQCMChange('qcm5', 'c')}
                                            />
                                            <label htmlFor="qcm5-c">c. colinéaires</label>
                                        </div>
                                        <div className="qcm-option">
                                            <input
                                                type="checkbox"
                                                id="qcm5-d"
                                                checked={selectedAnswers.qcm5?.includes('d') || false}
                                                onChange={() => handleQCMChange('qcm5', 'd')}
                                            />
                                            <label htmlFor="qcm5-d">d. de même norme</label>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="correction-btn"
                                    onClick={() => toggleCorrection('qcm5')}
                                >
                                    <FaCheck/> {showCorrections.qcm5 ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.qcm5 && (
                                    <div className="correction-box">
                                        {correctAnswers.qcm5.formatted}
                                    </div>
                                )}
                            </div>

                            {/* Question 6 */}
                            <div className="question-content">
                                <p className="question-text"><strong>6.</strong> <InlineMath
                                    math="\overrightarrow{AB} + \overrightarrow{BE} = \ldots"/></p>
                                <div className="qcm-options-grid">
                                    <div className="qcm-option-row">
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm6-a"
                                                name="qcm6"
                                                checked={selectedAnswers.qcm6 === 'a'}
                                                onChange={() => handleQCMChange('qcm6', 'a')}
                                            />
                                            <label htmlFor="qcm6-a">a. <InlineMath math="\overrightarrow{EA}"/></label>
                                        </div>
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm6-b"
                                                name="qcm6"
                                                checked={selectedAnswers.qcm6 === 'b'}
                                                onChange={() => handleQCMChange('qcm6', 'b')}
                                            />
                                            <label htmlFor="qcm6-b">b. <InlineMath math="\overrightarrow{AE}"/></label>
                                        </div>
                                    </div>
                                    <div className="qcm-option-row">
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm6-c"
                                                name="qcm6"
                                                checked={selectedAnswers.qcm6 === 'c'}
                                                onChange={() => handleQCMChange('qcm6', 'c')}
                                            />
                                            <label htmlFor="qcm6-c">c. <InlineMath math="\overrightarrow{GE}"/></label>
                                        </div>
                                        <div className="qcm-option">
                                            <input
                                                type="radio"
                                                id="qcm6-d"
                                                name="qcm6"
                                                checked={selectedAnswers.qcm6 === 'd'}
                                                onChange={() => handleQCMChange('qcm6', 'd')}
                                            />
                                            <label htmlFor="qcm6-d">d. <InlineMath math="\overrightarrow{BD}"/></label>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="correction-btn"
                                    onClick={() => toggleCorrection('qcm6')}
                                >
                                    <FaCheck/> {showCorrections.qcm6 ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.qcm6 && (
                                    <div className="correction-box">
                                        {correctAnswers.qcm6.formatted}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                    {/* Question 7 */}

                    <div className="question-content" style={{justifyContent: 'center'}}>
                        <div className="question-card qcm-card" style={{maxWidth: '500px', margin: '0 auto',}}>
                            <p className="question-text"><strong>7.</strong> <InlineMath
                                math="\overrightarrow{GF} + \overrightarrow{GD} = \ldots"/></p>
                            <div className="qcm-options-grid">
                                <div className="qcm-option-row">
                                    <div className="qcm-option">
                                        <input
                                            type="radio"
                                            id="qcm7-a"
                                            name="qcm7"
                                            checked={selectedAnswers.qcm7 === 'a'}
                                            onChange={() => handleQCMChange('qcm7', 'a')}
                                        />
                                        <label htmlFor="qcm7-a">a. <InlineMath math="\overrightarrow{FD}"/></label>
                                    </div>
                                    <div className="qcm-option">
                                        <input
                                            type="radio"
                                            id="qcm7-b"
                                            name="qcm7"
                                            checked={selectedAnswers.qcm7 === 'b'}
                                            onChange={() => handleQCMChange('qcm7', 'b')}
                                        />
                                        <label htmlFor="qcm7-b">b. <InlineMath math="\overrightarrow{GO}"/></label>
                                    </div>
                                </div>
                                <div className="qcm-option-row">
                                    <div className="qcm-option">
                                        <input
                                            type="radio"
                                            id="qcm7-c"
                                            name="qcm7"
                                            checked={selectedAnswers.qcm7 === 'c'}
                                            onChange={() => handleQCMChange('qcm7', 'c')}
                                        />
                                        <label htmlFor="qcm7-c">c. <InlineMath math="\overrightarrow{GR}"/></label>
                                    </div>
                                    <div className="qcm-option">
                                        <input
                                            type="radio"
                                            id="qcm7-d"
                                            name="qcm7"
                                            checked={selectedAnswers.qcm7 === 'd'}
                                            onChange={() => handleQCMChange('qcm7', 'd')}
                                        />
                                        <label htmlFor="qcm7-d">d. <InlineMath math="\overrightarrow{EG}"/></label>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('qcm7')}
                            >
                                <FaCheck/> {showCorrections.qcm7 ? 'Masquer' : 'Correction'}
                            </button>
                            {showCorrections.qcm7 && (
                                <div className="correction-box">
                                    {correctAnswers.qcm7.formatted}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>

            {/* PAGE 2 */}
            <div className="print-page">
                {/* Problème */}
                <Card className="problem-card mt-3">
                    <Card.Body>
                        <Card.Title className="problem-title">
                            <h4 className="vect-title"
                                style={{color: '#007bff'}}>
                                <span role="img" aria-label="steel-bar">🏗️</span>Problème - Barre cylindrique
                            </h4>
                        </Card.Title>
                        <Card.Text className="problem-statement">
                            <p>
                                <span role="img" aria-label="steel-bar">🔩</span> Une barre cylindrique en acier de
                                <strong> 4 m</strong> de longueur et de <strong>0,20 m</strong> de diamètre a une masse
                                de
                                <strong> 1 000 kg</strong>. Elle est maintenue en équilibre horizontal par deux élingues
                                représentées
                                par les segments [AC] et [BC].
                            </p>
                            <p>
                                <span role="img" aria-label="coordinates">📊</span> On donne les coordonnées, dans un
                                repère orthonormé
                                <InlineMath math="(O; \overrightarrow{i}, \overrightarrow{j}, \overrightarrow{k})"/>, de
                                <strong> G(2; 2; 4)</strong>, le centre de gravité de la barre, ainsi que des points
                                <strong> A(2; 0,5; 4,1)</strong> et <strong>B(2; 3,5; 4,1)</strong>, les points de
                                fixation des élingues
                                sur la barre. L'unité graphique est le mètre.
                            </p>
                            <p>
                                <span role="img" aria-label="info">ℹ️</span> On sait, de plus, que le point C se situe à
                                la verticale du
                                point G à une distance de <strong>1,50 m</strong>.
                            </p>
                        </Card.Text>
                        <div style={{
                            maxWidth: '380px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            marginLeft: '30%',
                        }}>
                            <img
                                src={problemeBarre}
                                alt="Vecteur"
                                className="img-fluid rounded shadow-sm compact-img mb-3"
                                onClick={() => openModal(problemeBarre, 'Vecteur')}
                                style={{width: 'auto', maxWidth: '100%', height: 'auto'}}
                            />
                        </div>
                    </Card.Body>
                </Card>

                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="question-card">
                            <div className="question-content">
                                <p className="question-text">
                                    <span role="img" aria-label="question">1️⃣</span> <strong>Donner les coordonnées du
                                    point C.</strong>
                                </p>
                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.probleme1}
                                        onChange={(e) => handleInputChange('probleme1', e.target.value)}
                                        rows={2}
                                    />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('probleme1')}
                                    >
                                        <FaCheck/> {showCorrections.probleme1 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.probleme1 && (
                                        <div className="correction-box">
                                            {correctAnswers.probleme1.formatted}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="question-card">
                            <div className="question-content">
                                <p className="question-text">
                                    <span role="img" aria-label="question">2️⃣</span> <strong>Calculer les coordonnées
                                    des vecteurs</strong>
                                    <InlineMath math="\overrightarrow{AC}"/> <strong>et</strong> <InlineMath
                                    math="\overrightarrow{BC}"/>.
                                </p>
                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.probleme2}
                                        onChange={(e) => handleInputChange('probleme2', e.target.value)}
                                        rows={4}
                                    />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('probleme2')}
                                    >
                                        <FaCheck/> {showCorrections.probleme2 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.probleme2 && (
                                        <div className="correction-box">
                                            {correctAnswers.probleme2.formatted}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="question-card">
                            <div className="question-content">
                                <p className="question-text">
                                    <span role="img" aria-label="question">3️⃣</span> <strong>Calculer, à 0,01 m près,
                                    la longueur des élingues </strong>
                                    correspondant aux segments [AC] et [BC].
                                </p>
                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.probleme3}
                                        onChange={(e) => handleInputChange('probleme3', e.target.value)}
                                        rows={2}
                                    />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('probleme3')}
                                    >
                                        <FaCheck/> {showCorrections.probleme3 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.probleme3 && (
                                        <div className="correction-box">
                                            {correctAnswers.probleme3.formatted}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="vect-title mt-3">Vecteurs et coordonnées</h4>
                <div className="question-card">
                    <div className="question-content">
                        <p><strong>Exercice 1</strong> - Déterminer graphiquement les coordonnées du vecteur <InlineMath
                            math="\overrightarrow{AB}"/>.</p>
                        <div className="answer-area">
                            <textarea
                                className="answer-input"
                                value={answers.exo1}
                                onChange={(e) => handleInputChange('exo1', e.target.value)}
                                rows={3}
                            />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('exo1')}
                            >
                                <FaCheck/> {showCorrections.exo1 ? 'Masquer' : 'Correction'}
                            </button>
                            {showCorrections.exo1 && (
                                <div className="correction-box">
                                    {correctAnswers.exo1.formatted}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE 3 */}
            <div className="print-page">
                <div className="row">
                    <div className="col-md-6">

                        <div className="question-card">
                            <h4 className="vect-title">Exercice 4 - Copie d'élève</h4>
                            <div className="question-content">
                                <p>Voici l'énoncé de l'exercice réalisé par Lisa :</p>
                                <blockquote>
                                    On donne les points A et B de coordonnées A(0;2;2) et B(1;0;0).<br/>
                                    Calculer les coordonnées du vecteur AB.
                                </blockquote>
                                <p>Voici la copie de Lisa :</p>
                                <blockquote>
                                    Les coordonnées de AB sont<br/>
                                    <InlineMath
                                        math="\begin{pmatrix} 0 & -1 \\ 2 & 0 \\ 2 & 0 \end{pmatrix} = \begin{pmatrix} -1 \\ 2 \\ 2 \end{pmatrix}"/>
                                </blockquote>
                                <p>Indiquer l'erreur dans la copie de Lisa et proposer une correction.</p>
                                <div className="answer-area">
                            <textarea
                                className="answer-input"
                                value={answers.exo4}
                                onChange={(e) => handleInputChange('exo4', e.target.value)}
                                rows={5}
                            />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('exo4')}
                                    >
                                        <FaCheck/> {showCorrections.exo4 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.exo4 && (
                                        <div className="correction-box">
                                            {correctAnswers.exo4.formatted}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <h4 className="vect-title mt-3">Exercice 5</h4>
                            <p>Déterminer les coordonnées du vecteur AB dans les cas suivants.</p>
                            <div className="question-content">
                                <p><strong>1.</strong> A(5;3;2) et B(6;4,5;10)</p>
                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.exo5_1}
                                        onChange={(e) => handleInputChange('exo5_1', e.target.value)}
                                        rows={2}
                                    />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('exo5_1')}
                                    >
                                        <FaCheck/> {showCorrections.exo5_1 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.exo5_1 && (
                                        <div className="correction-box">
                                            {correctAnswers.exo5_1.formatted}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="question-content">
                                <p><strong>2.</strong> A(-1;4,2;1) et B(7;8;-3)</p>
                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.exo5_2}
                                        onChange={(e) => handleInputChange('exo5_2', e.target.value)}
                                        rows={2}
                                    />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('exo5_2')}
                                    >
                                        <FaCheck/> {showCorrections.exo5_2 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.exo5_2 && (
                                        <div className="correction-box">
                                            {correctAnswers.exo5_2.formatted}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="question-content">
                                <p><strong>3.</strong> A(5;7,1;-5) et B(-2;-0,9;3)</p>
                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.exo5_3}
                                        onChange={(e) => handleInputChange('exo5_3', e.target.value)}
                                        rows={2}
                                    />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('exo5_3')}
                                    >
                                        <FaCheck/> {showCorrections.exo5_3 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.exo5_3 && (
                                        <div className="correction-box">
                                            {correctAnswers.exo5_3.formatted}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="question-content">
                                <p><strong>4.</strong> A(0;1;-2) et B(-2;0;3,75)</p>
                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.exo5_4}
                                        onChange={(e) => handleInputChange('exo5_4', e.target.value)}
                                        rows={2}
                                    />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('exo5_4')}
                                    >
                                        <FaCheck/> {showCorrections.exo5_4 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.exo5_4 && (
                                        <div className="correction-box">
                                            {correctAnswers.exo5_4.formatted}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="question-card">
                            <h4 className="vect-title mt-3">Vecteurs et normes</h4>
                            <h5 className="vect-subtitle">Exercice 6</h5>

                            <div className="question-content">
                                <p>Le plan est rapporté à un repère orthonormé <InlineMath
                                    math="(O; \overrightarrow{i}, \overrightarrow{j}, \overrightarrow{k})"/>. On
                                    considère les
                                    points A(2;0;3), B(0;-1;2), C(0;1;1) et D(-1;1;1).</p>

                                <p><strong>1.</strong> Calculer les coordonnées des vecteurs AB, AC et AD.</p>
                                <div className="answer-area">
                            <textarea
                                className="answer-input"
                                value={answers.exo6_1}
                                onChange={(e) => handleInputChange('exo6_1', e.target.value)}
                                rows={4}
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

                                <p><strong>2.</strong> Calculer la norme des vecteurs AB, AC et AD.</p>
                                <div className="answer-area">
                            <textarea
                                className="answer-input"
                                value={answers.exo6_2}
                                onChange={(e) => handleInputChange('exo6_2', e.target.value)}
                                rows={4}
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
                            </div>
                            <h5 className="vect-subtitle">Exercice 7 - Algorithmique</h5>

                            <div className="question-content">
                                <p><strong>1.</strong> Que fait la fonction Python <code>vecteur</code> ci-dessous ?</p>
                                <pre>{`def vecteur(xA, yA, zA, xB, yB, zB):
                            x = xB - xA
                            y = yB - yA
                            z = zB - zA
                            return (x, y, z)`}</pre>
                                <div className="answer-area">
                            <textarea
                                className="answer-input"
                                value={answers.exo7_1}
                                onChange={(e) => handleInputChange('exo7_1', e.target.value)}
                                rows={3}
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

                                <p><strong>2.</strong> À l'aide de cette fonction Python, vérifier les réponses obtenues
                                    à la
                                    question 1. de l'exercice 6.</p>
                                <div className="answer-area">
                            <textarea
                                className="answer-input"
                                value={answers.exo7_2}
                                onChange={(e) => handleInputChange('exo7_2', e.target.value)}
                                rows={3}
                            />
                                    <button
                                        className="correction-btn"
                                        onClick={() => toggleCorrection('exo7_2')}
                                    >
                                        <FaCheck/> {showCorrections.exo7_2 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.exo7_2 && (
                                        <div className="correction-box">
                                            {correctAnswers.exo7_2.formatted}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <h5 className="vect-subtitle">Exercice 8</h5>
                            <div className="question-content">
                                <p>On se place dans un repère orthonormé.</p>
                                <p><strong>1.</strong> Calculer, au dixième près, les normes des vecteurs suivants.</p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <p>a. <InlineMath
                                            math="\overrightarrow{AB} = \begin{pmatrix} -6 \\ 0 \\ 0 \end{pmatrix}"/>
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <p>b. <InlineMath
                                            math="\overrightarrow{CD} = \begin{pmatrix} 2 \\ 0 \\ 0 \end{pmatrix}"/></p>
                                    </div>
                                    <div className="col-md-4">
                                        <p>c. <InlineMath
                                            math="\overrightarrow{AD} = \begin{pmatrix} 116 \\ -12 \\ 0 \end{pmatrix}"/>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* PAGE 4 */}
            <div className="print-page">
                <div className="question-card">
                    <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.exo8}
                                            onChange={(e) => handleInputChange('exo8', e.target.value)}
                                            rows={3}
                                        />
                        <button
                            className="correction-btn"
                            onClick={() => toggleCorrection('exo8')}
                        >
                            <FaCheck/> {showCorrections.exo8 ? 'Masquer' : 'Correction'}
                        </button>
                        {showCorrections.exo8 && (
                            <div className="correction-box">
                                {correctAnswers.exo8.formatted}
                            </div>
                        )}
                    </div>
                    <h5 className="vect-title">Exercice 9 - Copie d'élève</h5>

                    <div className="question-content">
                        <p>Voici l'énoncé de l'exercice réalisé par Nabil :</p>
                        <blockquote>
                            Dans un repère orthonormé, on considère les points C et G de coordonnées C(24 ; -42
                            ; 12) et
                            G(48 ; -86 ; -26).<br/>
                            1. Calculer les coordonnées du vecteur <InlineMath
                            math="\overrightarrow{CG}"/>.<br/>
                            2. Calculer la norme du vecteur <InlineMath math="\overrightarrow{CG}"/>.
                        </blockquote>
                        <p>Voici la copie de Nabil :</p>
                        <blockquote>
                            1. Les coordonnées du vecteur <InlineMath math="\overrightarrow{CG}"/> sont<br/>
                            <InlineMath math="\begin{pmatrix} 24 & 44 \\ -38 & 44 \end{pmatrix}"/><br/>
                            2. La norme du vecteur <InlineMath math="\overrightarrow{CG}"/> est<br/>
                            <InlineMath math="|\overrightarrow{CG}| = 3956"/>
                        </blockquote>
                        <p>Indiquer les erreurs dans la copie de Nabil et proposer une correction.</p>
                        <div className="answer-area">
                            <textarea
                                className="answer-input"
                                value={answers.exo9}
                                onChange={(e) => handleInputChange('exo9', e.target.value)}
                                rows={8}
                            />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('exo9')}
                            >
                                <FaCheck/> {showCorrections.exo9 ? 'Masquer' : 'Correction'}
                            </button>
                            {showCorrections.exo9 && (
                                <div className="correction-box">
                                    {correctAnswers.exo9.formatted}
                                </div>
                            )}
                        </div>
                    </div>


                    <h5 className="vect-title">Exercice 10 - Algorithmique</h5>

                    <div className="question-content">
                        <p>Le programme ci-dessous ne fonctionne pas.</p>
                        <pre>{`from math import *
                                    def norms(x, y, z):
                                        a = x**2 + y**2 + z**2
                                        return(x)
                                    print("La norme du vecteur est : ", norme(50, 116, -12))`}</pre>
                        <p><strong>1.</strong> Trouver et corriger l'erreur commise dans ce programme.</p>
                        <div className="answer-area">
                            <textarea
                                className="answer-input"
                                value={answers.exo10}
                                onChange={(e) => handleInputChange('exo10', e.target.value)}
                                rows={8}
                            />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('exo10')}
                            >
                                <FaCheck/> {showCorrections.exo10 ? 'Masquer' : 'Correction'}
                            </button>
                            {showCorrections.exo10 && (
                                <div className="correction-box">
                                    {correctAnswers.exo10.formatted}
                                </div>
                            )}
                        </div>

                    </div>

                </div>

            </div>

            <footer className="tp-footer">
                <p>Exercices de géométrie vectorielle dans l'espace</p>
            </footer>
            {modalState.show && (
                <ModalImage
                    imageUrl={modalState.imageUrl}
                    altText={modalState.altText}
                    onClose={closeModal}
                />
            )}
        </div>
    </>);
};

export default ExercicesVecteurs;
import React, {useRef, useState} from 'react';
import {FaPrint, FaCheck} from 'react-icons/fa';
import '../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../components/navigation/BackButton';
import PrintManager from '../../../utils/PrintManager';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import {Card, Row, Col} from "react-bootstrap";
import spectre3lumiereex from "../../../assets/spectre3lumiereex.png";
import laserShow from "../../../assets/laserExercice.png";
import ModalImage from "../../../utils/ModalImage";
import lamperexercice from "../../../assets/lamperexercice.png";
import lampe65w from "../../../assets/lampe65w.png";
import shema3exo from "../../../assets/shema3exo.png";

const ExerciceSignaux = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const contentRef = useRef();

    // États pour le modal d'image
    const [modalState, setModalState] = useState({
        show: false,
        imageUrl: '',
        altText: ''
    });

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState(prev => ({...prev, show: false}));
    };

    // États pour les réponses QCM
    const [selectedAnswers, setSelectedAnswers] = useState({
        qcm1: [], qcm2: [], qcm3: [], qcm4: [], qcm5: [],
        qcm6: [], qcm7: [], qcm8: [], qcm9: [], qcm10: []
    });

    // États pour les réponses des exercices
    const [answers, setAnswers] = useState({
        exo1_1: '', exo1_2: '', exo1_3: '',
        exo2_1: '', exo2_2: '', exo2_3: '',
        exo3_1: '', exo3_2: '',
        exo4_1: '', exo4_2: '', exo4_3: '',
        exo5_1: '', exo5_2: '',
        exo6_1: '', exo6_2: '',
        exo7_1: '', exo7_2: '', exo7_3: '',
        exo8_1: '', exo8_2: '', exo8_3: '', exo8_4: ''
    });

    // États pour afficher les corrections
    const [showCorrections, setShowCorrections] = useState({
        qcm1: false, qcm2: false, qcm3: false, qcm4: false, qcm5: false,
        qcm6: false, qcm7: false, qcm8: false, qcm9: false, qcm10: false,
        exo1_1: false, exo1_2: false, exo1_3: false,
        exo2_1: false, exo2_2: false, exo2_3: false,
        exo3_1: false, exo3_2: false,
        exo4_1: false, exo4_2: false, exo4_3: false,
        exo5_1: false, exo5_2: false,
        exo6_1: false, exo6_2: false,
        exo7_1: false, exo7_2: false, exo7_3: false,
        exo8_1: false, exo8_2: false, exo8_3: false, exo8_4: false
    });

    // Réponses correctes
    const correctAnswers = {
        qcm1: {
            formatted: <div>Réponse correcte: <strong>a. A</strong> (Les lampes les plus économiques sont classées A)
            </div>
        },
        qcm2: {
            formatted: <div>Réponses correctes: <strong>a. les différentes technologies d'éclairage</strong> et <strong>c.
                la puissance lumineuse</strong></div>
        },
        qcm3: {formatted: <div>Réponse correcte: <strong>c. une efficacité énergétique élevée</strong></div>},
        qcm4: {formatted: <div>Réponse correcte: <strong>b. énergie lumineuse</strong></div>},
        qcm5: {formatted: <div>Réponse correcte: <strong>b. monochromatique</strong></div>},
        qcm6: {formatted: <div>Réponse correcte: <strong>c. unidirectionnelle</strong></div>},
        qcm7: {
            formatted: <div>Réponses correctes: <strong>b. directivité</strong> et <strong>c. densité d'énergie</strong>
            </div>
        },
        qcm8: {
            formatted: <div>Réponse correcte: <strong>b. s'échauffent</strong> (Les lampes à incandescence produisent un
                spectre continu en chauffant)</div>
        },
        qcm9: {
            formatted: <div>Réponses correctes: <strong>b. discontinu</strong> et <strong>c. qui ne possède pas toutes
                les couleurs</strong></div>
        },
        qcm10: {
            formatted: <div>Réponse correcte: <strong>c. l'éclairement</strong> (Le luxmètre mesure l'éclairement
                lumineux en lux)</div>
        },

        exo1_1: {
            formatted: <div>Non, les lampes à incandescence ne sont plus en vente car elles consomment beaucoup
                d'énergie et ont une faible efficacité énergétique.</div>
        },
        exo1_2: {formatted: <div>La lampe de 45 W est équivalente à une lampe à incandescence de 65 W.</div>},
        exo1_3: {
            formatted: <div>Une telle différence de puissance existe car les deux lampes ont une efficacité énergétique
                différente. La lampe moderne convertit plus d'énergie électrique en lumière et moins en chaleur.</div>
        },

        exo2_1: {
            formatted: <div>Le spectre 1 comporte toutes les couleurs (spectre continu) alors que le spectre 2 n'a que 3
                couleurs (spectre de raies).</div>
        },
        exo2_2: {
            formatted: <div>Il s'agit du spectre 1 et c'est le spectre d'émission d'une source chaude (comme une lampe à
                incandescence).</div>
        },
        exo2_3: {
            formatted: <div>Oui, le spectre 2 correspond à une source froide de lumière car le spectre n'est pas continu
                (il présente des raies spectrales).</div>
        },

        exo3_1: {
            formatted: <div>Un faisceau laser donne une tache de 1 m de diamètre sur un obstacle placé à 10 km.</div>
        },
        exo3_2: {
            formatted: <div>Le faisceau laser est monochromatique et
                directionnel.</div>
        },

        exo4_1: {
            formatted: <div>
                <p>Calcul du rendement lumineux (lm/W):</p>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Type de lampe</th>
                        <th>Calcul</th>
                        <th>Rendement</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>LED</td>
                        <td><InlineMath math="420 \text{ lm} / 6 \text{ W}"/></td>
                        <td>70 lm/W</td>
                    </tr>
                    <tr>
                        <td>Fluocompacte</td>
                        <td><InlineMath math="450 \text{ lm} / 9 \text{ W}"/></td>
                        <td>50 lm/W</td>
                    </tr>
                    <tr>
                        <td>Incandescence</td>
                        <td><InlineMath math="400 \text{ lm} / 40 \text{ W}"/></td>
                        <td>10 lm/W</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        },
        exo4_2: {
            formatted: <div>
                <p>Efficacité énergétique (par rapport à l'incandescence):</p>
                <ul>
                    <li>LED: 70/10 = <strong>7 fois</strong> plus efficace</li>
                    <li>Fluocompacte: 50/10 = <strong>5 fois</strong> plus efficace</li>
                </ul>
            </div>
        },
        exo4_3: {
            formatted: <div>
                Non, on ne peut pas dire que la LED est 7 fois plus efficace que la fluocompacte.
                La LED est 7 fois plus efficace que l'incandescence, mais seulement 1,4 fois plus efficace
                que la fluocompacte (70/50 = 1,4).
            </div>
        },

        exo5_1: {
            formatted: <div>
                <p>Caractéristiques des spectres:</p>
                <ul>
                    <li><strong>Source chaude:</strong> spectre continu et complet (toutes les couleurs visibles)</li>
                    <li><strong>Source froide:</strong> spectre discontinu (raies spectrales) et incomplet</li>
                </ul>
            </div>
        },
        exo5_2: {
            formatted: <div>
                <p>Tableau complété:</p>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Spectre</th>
                        <th>Source</th>
                        <th>Lampe</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Continu complet</td>
                        <td>Chaude</td>
                        <td>Halogène, Incandescence</td>
                    </tr>
                    <tr>
                        <td>Discontinu quelques raies</td>
                        <td>Froide</td>
                        <td>Fluocompacte</td>
                    </tr>
                    <tr>
                        <td>Raie unique</td>
                        <td>Froide</td>
                        <td>Laser</td>
                    </tr>
                    <tr>
                        <td>Bandes étroites</td>
                        <td>Froide</td>
                        <td>LED</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        },

        exo6_1: {
            formatted: <div>
                Pour vérifier qu'une LED est une source froide, on peut:
                <ol>
                    <li>Utiliser un spectromètre pour observer son spectre d'émission (doit être discontinu)</li>
                    <li>Mesurer sa température avec un thermomètre infrarouge après fonctionnement prolongé (doit rester
                        relativement froide)
                    </li>
                    <li>Comparer avec une lampe à incandescence (qui chauffe beaucoup plus)</li>
                </ol>
            </div>
        },
        exo6_2: {
            formatted: <div>
                Pour mesurer le caractère directionnel d'une LED:
                <ol>
                    <li>Utiliser un luxmètre placé à distance fixe de la LED</li>
                    <li>Mesurer l'éclairement en face de la LED (0°)</li>
                    <li>Faire pivoter la LED et mesurer la diminution de l'éclairement avec l'angle</li>
                    <li>Comparer avec une lampe omnidirectionnelle (la diminution sera plus marquée pour la LED)</li>
                </ol>
            </div>
        },

        exo7_1: {
            formatted: <div>
                <p>Phénomènes physiques:</p>
                <ul>
                    <li><strong>Incandescence:</strong> Émission de lumière par un corps chauffé (ex: filament de
                        tungstène)
                    </li>
                    <li><strong>Luminescence:</strong> Émission de lumière sans échauffement notable (fluorescence,
                        phosphorescence, etc.)
                    </li>
                    <li><strong>Fluorescence:</strong> Émission de lumière pendant l'excitation seulement</li>
                </ul>
            </div>
        },
        exo7_2: {
            formatted: <div>
                <p>Technologies utilisées:</p>
                <ul>
                    <li><strong>Lampe à filament:</strong> Incandescence</li>
                    <li><strong>Lampe fluocompacte:</strong> Fluorescence</li>
                    <li><strong>Lampe halogène:</strong> Incandescence</li>
                    <li><strong>Lampe LED:</strong> Luminescence (électroluminescence)</li>
                </ul>
            </div>
        },
        exo7_3: {
            formatted: <div>
                La fluorescence cesse immédiatement quand l'excitation s'arrête, alors que la phosphorescence
                persiste pendant un certain temps après la fin de l'excitation (émission retardée).
            </div>
        },

        exo8_1: {
            formatted: <div>
                Il s'agit d'une lampe fluocompacte (indiqué par "Tornado" et la présence de mercure - 1,5 mg Hg).
            </div>
        },
        exo8_2: {
            formatted: <div>
                <p>Puissance: 15 W</p>
                <p>Équivalence: 75 W (équivalent à une lampe à incandescence de 75 W)</p>
            </div>
        },
        exo8_3: {
            formatted: <div>
                La valeur 970 lm correspond au flux lumineux (quantité totale de lumière émise).
            </div>
        },
        exo8_4: {
            formatted: <div>
                Karim a raison. L'ancienne lampe de 60 W fournissait environ 800 lm (13 lm/W × 60 W),
                alors que la nouvelle fournit 970 lm, donc plus de lumière pour moins de puissance.
            </div>
        }
    };

    // Gestion des événements
    const handleQCMChange = (question, option) => {
        setSelectedAnswers(prev => {
            const newSelection = [...(prev[question] || [])];
            const index = newSelection.indexOf(option);

            if (index === -1) {
                newSelection.push(option);
            } else {
                newSelection.splice(index, 1);
            }

            return {...prev, [question]: newSelection};
        });
    };

    const handleInputChange = (field, value) => {
        setAnswers(prev => ({...prev, [field]: value}));
    };

    const toggleCorrection = (field) => {
        setShowCorrections(prev => ({...prev, [field]: !prev[field]}));
    };

    if (className === 'Seconde-physique-act4') {
        return <div className="alert alert-warning">Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>
            <div className="tp-container" ref={contentRef}>
                <PrintManager
                    contentRef={contentRef}
                    activityName="Exercices_Signaux_Lumineux"
                    pageCount={4}
                    quality="hd"
                />

                {/* PAGE 1 - QCM */}
                <div className="print-page">
                    <div className="activity-header">
                        <span className="activity-badge">EXERCICES</span>
                        <div className="activity-title">
                            <span
                                className="course-title">Signaux lumineux et éclairage - Choix des sources lumineuses</span>
                        </div>
                    </div>

                    <Card className="mb-4 shadow">
                        <Card.Header className="bg-primary text-white">
                            <h4 className="mb-0">Auto-évaluation - QCM</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-3">Cocher la (ou les) bonne(s) réponse(s).</p>

                            <Row>
                                {/* Colonne gauche */}
                                <Col md={6}>
                                    {/* Question 1 */}
                                    <div className="mb-3 p-3 border rounded">
                                        <p className="font-weight-bold">1. Sur l'emballage d'une lampe figure la classe
                                            énergétique (de A à G). Les lampes économiques sont classées :</p>
                                        <div className="pl-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm1-a"
                                                       checked={selectedAnswers.qcm1?.includes('a') || false}
                                                       onChange={() => handleQCMChange('qcm1', 'a')}/>
                                                <label className="form-check-label" htmlFor="qcm1-a">a. A</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm1-b"
                                                       checked={selectedAnswers.qcm1?.includes('b') || false}
                                                       onChange={() => handleQCMChange('qcm1', 'b')}/>
                                                <label className="form-check-label" htmlFor="qcm1-b">b. C</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm1-c"
                                                       checked={selectedAnswers.qcm1?.includes('c') || false}
                                                       onChange={() => handleQCMChange('qcm1', 'c')}/>
                                                <label className="form-check-label" htmlFor="qcm1-c">c. G</label>
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-outline-primary mt-2"
                                                onClick={() => toggleCorrection('qcm1')}>
                                            <FaCheck/> {showCorrections.qcm1 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.qcm1 && (
                                            <div className="alert alert-info mt-2 p-2">
                                                {correctAnswers.qcm1.formatted}
                                            </div>
                                        )}
                                    </div>

                                    {/* Question 2 */}
                                    <div className="mb-3 p-3 border rounded">
                                        <p className="font-weight-bold">2. Le spectre d'émission permet de caractériser
                                            :</p>
                                        <div className="pl-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm2-a"
                                                       checked={selectedAnswers.qcm2?.includes('a') || false}
                                                       onChange={() => handleQCMChange('qcm2', 'a')}/>
                                                <label className="form-check-label" htmlFor="qcm2-a">a. les différentes
                                                    technologies d'éclairage</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm2-b"
                                                       checked={selectedAnswers.qcm2?.includes('b') || false}
                                                       onChange={() => handleQCMChange('qcm2', 'b')}/>
                                                <label className="form-check-label" htmlFor="qcm2-b">b. l'efficacité
                                                    énergétique</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm2-c"
                                                       checked={selectedAnswers.qcm2?.includes('c') || false}
                                                       onChange={() => handleQCMChange('qcm2', 'c')}/>
                                                <label className="form-check-label" htmlFor="qcm2-c">c. la puissance
                                                    lumineuse</label>
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-outline-primary mt-2"
                                                onClick={() => toggleCorrection('qcm2')}>
                                            <FaCheck/> {showCorrections.qcm2 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.qcm2 && (
                                            <div className="alert alert-info mt-2 p-2">
                                                {correctAnswers.qcm2.formatted}
                                            </div>
                                        )}
                                    </div>

                                    {/* Question 3 */}
                                    <div className="mb-3 p-3 border rounded">
                                        <p className="font-weight-bold">3. Pour faire des économies et avec un flux
                                            lumineux identique, il vaut mieux choisir une lampe avec :</p>
                                        <div className="pl-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm3-a"
                                                       checked={selectedAnswers.qcm3?.includes('a') || false}
                                                       onChange={() => handleQCMChange('qcm3', 'a')}/>
                                                <label className="form-check-label" htmlFor="qcm3-a">a. une puissance
                                                    élevée</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm3-b"
                                                       checked={selectedAnswers.qcm3?.includes('b') || false}
                                                       onChange={() => handleQCMChange('qcm3', 'b')}/>
                                                <label className="form-check-label" htmlFor="qcm3-b">b. une puissance
                                                    faible</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm3-c"
                                                       checked={selectedAnswers.qcm3?.includes('c') || false}
                                                       onChange={() => handleQCMChange('qcm3', 'c')}/>
                                                <label className="form-check-label" htmlFor="qcm3-c">c. une efficacité
                                                    énergétique élevée</label>
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-outline-primary mt-2"
                                                onClick={() => toggleCorrection('qcm3')}>
                                            <FaCheck/> {showCorrections.qcm3 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.qcm3 && (
                                            <div className="alert alert-info mt-2 p-2">
                                                {correctAnswers.qcm3.formatted}
                                            </div>
                                        )}
                                    </div>

                                    {/* Question 4 */}
                                    <div className="mb-3 p-3 border rounded">
                                        <p className="font-weight-bold">4. La lampe qui a l'efficacité énergétique la
                                            plus élevée est une lampe qui transforme une grande partie de l'énergie
                                            électrique reçue en :</p>
                                        <div className="pl-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm4-a"
                                                       checked={selectedAnswers.qcm4?.includes('a') || false}
                                                       onChange={() => handleQCMChange('qcm4', 'a')}/>
                                                <label className="form-check-label" htmlFor="qcm4-a">a. chaleur</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm4-b"
                                                       checked={selectedAnswers.qcm4?.includes('b') || false}
                                                       onChange={() => handleQCMChange('qcm4', 'b')}/>
                                                <label className="form-check-label" htmlFor="qcm4-b">b. énergie
                                                    lumineuse</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm4-c"
                                                       checked={selectedAnswers.qcm4?.includes('c') || false}
                                                       onChange={() => handleQCMChange('qcm4', 'c')}/>
                                                <label className="form-check-label" htmlFor="qcm4-c">c. énergie
                                                    thermique</label>
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-outline-primary mt-2"
                                                onClick={() => toggleCorrection('qcm4')}>
                                            <FaCheck/> {showCorrections.qcm4 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.qcm4 && (
                                            <div className="alert alert-info mt-2 p-2">
                                                {correctAnswers.qcm4.formatted}
                                            </div>
                                        )}
                                    </div>

                                    {/* Question 5 */}
                                    <div className="mb-3 p-3 border rounded">
                                        <p className="font-weight-bold">5. La lumière émise par un laser est une lumière
                                            :</p>
                                        <div className="pl-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm5-a"
                                                       checked={selectedAnswers.qcm5?.includes('a') || false}
                                                       onChange={() => handleQCMChange('qcm5', 'a')}/>
                                                <label className="form-check-label" htmlFor="qcm5-a">a.
                                                    polychromatique</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm5-b"
                                                       checked={selectedAnswers.qcm5?.includes('b') || false}
                                                       onChange={() => handleQCMChange('qcm5', 'b')}/>
                                                <label className="form-check-label" htmlFor="qcm5-b">b.
                                                    monochromatique</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm5-c"
                                                       checked={selectedAnswers.qcm5?.includes('c') || false}
                                                       onChange={() => handleQCMChange('qcm5', 'c')}/>
                                                <label className="form-check-label" htmlFor="qcm5-c">c. blanche</label>
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-outline-primary mt-2"
                                                onClick={() => toggleCorrection('qcm5')}>
                                            <FaCheck/> {showCorrections.qcm5 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.qcm5 && (
                                            <div className="alert alert-info mt-2 p-2">
                                                {correctAnswers.qcm5.formatted}
                                            </div>
                                        )}
                                    </div>
                                </Col>

                                {/* Colonne droite */}
                                <Col md={6}>
                                    {/* Question 6 */}
                                    <div className="mb-3 p-3 border rounded">
                                        <p className="font-weight-bold">6. La lumière émise par un laser est une lumière
                                            :</p>
                                        <div className="pl-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm6-a"
                                                       checked={selectedAnswers.qcm6?.includes('a') || false}
                                                       onChange={() => handleQCMChange('qcm6', 'a')}/>
                                                <label className="form-check-label" htmlFor="qcm6-a">a. qui se propage
                                                    dans toutes les directions</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm6-b"
                                                       checked={selectedAnswers.qcm6?.includes('b') || false}
                                                       onChange={() => handleQCMChange('qcm6', 'b')}/>
                                                <label className="form-check-label" htmlFor="qcm6-b">b.
                                                    omnidirectionnelle</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm6-c"
                                                       checked={selectedAnswers.qcm6?.includes('c') || false}
                                                       onChange={() => handleQCMChange('qcm6', 'c')}/>
                                                <label className="form-check-label" htmlFor="qcm6-c">c.
                                                    unidirectionnelle</label>
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-outline-primary mt-2"
                                                onClick={() => toggleCorrection('qcm6')}>
                                            <FaCheck/> {showCorrections.qcm6 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.qcm6 && (
                                            <div className="alert alert-info mt-2 p-2">
                                                {correctAnswers.qcm6.formatted}
                                            </div>
                                        )}
                                    </div>

                                    {/* Question 7 */}
                                    <div className="mb-3 p-3 border rounded">
                                        <p className="font-weight-bold">7. La dangerosité d'un laser provient de sa
                                            :</p>
                                        <div className="pl-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm7-a"
                                                       checked={selectedAnswers.qcm7?.includes('a') || false}
                                                       onChange={() => handleQCMChange('qcm7', 'a')}/>
                                                <label className="form-check-label" htmlFor="qcm7-a">a.
                                                    monochromaticité</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm7-b"
                                                       checked={selectedAnswers.qcm7?.includes('b') || false}
                                                       onChange={() => handleQCMChange('qcm7', 'b')}/>
                                                <label className="form-check-label" htmlFor="qcm7-b">b.
                                                    directivité</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm7-c"
                                                       checked={selectedAnswers.qcm7?.includes('c') || false}
                                                       onChange={() => handleQCMChange('qcm7', 'c')}/>
                                                <label className="form-check-label" htmlFor="qcm7-c">c. densité
                                                    d'énergie</label>
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-outline-primary mt-2"
                                                onClick={() => toggleCorrection('qcm7')}>
                                            <FaCheck/> {showCorrections.qcm7 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.qcm7 && (
                                            <div className="alert alert-info mt-2 p-2">
                                                {correctAnswers.qcm7.formatted}
                                            </div>
                                        )}
                                    </div>

                                    {/* Question 8 */}
                                    <div className="mb-3 p-3 border rounded">
                                        <p className="font-weight-bold">8. Le spectre continu et complet est obtenu pour
                                            les lampes qui :</p>
                                        <div className="pl-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm8-a"
                                                       checked={selectedAnswers.qcm8?.includes('a') || false}
                                                       onChange={() => handleQCMChange('qcm8', 'a')}/>
                                                <label className="form-check-label" htmlFor="qcm8-a">a. ne chauffent
                                                    pas</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm8-b"
                                                       checked={selectedAnswers.qcm8?.includes('b') || false}
                                                       onChange={() => handleQCMChange('qcm8', 'b')}/>
                                                <label className="form-check-label" htmlFor="qcm8-b">b.
                                                    s'échauffent</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm8-c"
                                                       checked={selectedAnswers.qcm8?.includes('c') || false}
                                                       onChange={() => handleQCMChange('qcm8', 'c')}/>
                                                <label className="form-check-label" htmlFor="qcm8-c">c. reproduisent la
                                                    lumière blanche naturelle</label>
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-outline-primary mt-2"
                                                onClick={() => toggleCorrection('qcm8')}>
                                            <FaCheck/> {showCorrections.qcm8 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.qcm8 && (
                                            <div className="alert alert-info mt-2 p-2">
                                                {correctAnswers.qcm8.formatted}
                                            </div>
                                        )}
                                    </div>

                                    {/* Question 9 */}
                                    <div className="mb-3 p-3 border rounded">
                                        <p className="font-weight-bold">9. Une source froide de lumière a un spectre
                                            d'émission :</p>
                                        <div className="pl-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm9-a"
                                                       checked={selectedAnswers.qcm9?.includes('a') || false}
                                                       onChange={() => handleQCMChange('qcm9', 'a')}/>
                                                <label className="form-check-label" htmlFor="qcm9-a">a. continu</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm9-b"
                                                       checked={selectedAnswers.qcm9?.includes('b') || false}
                                                       onChange={() => handleQCMChange('qcm9', 'b')}/>
                                                <label className="form-check-label" htmlFor="qcm9-b">b.
                                                    discontinu</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm9-c"
                                                       checked={selectedAnswers.qcm9?.includes('c') || false}
                                                       onChange={() => handleQCMChange('qcm9', 'c')}/>
                                                <label className="form-check-label" htmlFor="qcm9-c">c. qui ne possède
                                                    pas toutes les couleurs</label>
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-outline-primary mt-2"
                                                onClick={() => toggleCorrection('qcm9')}>
                                            <FaCheck/> {showCorrections.qcm9 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.qcm9 && (
                                            <div className="alert alert-info mt-2 p-2">
                                                {correctAnswers.qcm9.formatted}
                                            </div>
                                        )}
                                    </div>

                                    {/* Question 10 */}
                                    <div className="mb-3 p-3 border rounded">
                                        <p className="font-weight-bold">10. Le luxmètre permet de mesurer :</p>
                                        <div className="pl-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm10-a"
                                                       checked={selectedAnswers.qcm10?.includes('a') || false}
                                                       onChange={() => handleQCMChange('qcm10', 'a')}/>
                                                <label className="form-check-label" htmlFor="qcm10-a">a. l'efficacité
                                                    énergétique</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm10-b"
                                                       checked={selectedAnswers.qcm10?.includes('b') || false}
                                                       onChange={() => handleQCMChange('qcm10', 'b')}/>
                                                <label className="form-check-label" htmlFor="qcm10-b">b. le rendement
                                                    lumineux</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="qcm10-c"
                                                       checked={selectedAnswers.qcm10?.includes('c') || false}
                                                       onChange={() => handleQCMChange('qcm10', 'c')}/>
                                                <label className="form-check-label" htmlFor="qcm10-c">c.
                                                    l'éclairement</label>
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-outline-primary mt-2"
                                                onClick={() => toggleCorrection('qcm10')}>
                                            <FaCheck/> {showCorrections.qcm10 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.qcm10 && (
                                            <div className="alert alert-info mt-2 p-2">
                                                {correctAnswers.qcm10.formatted}
                                            </div>
                                        )}
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>

                {/* PAGE 2 - Exercices */}
                <div className="print-page">
                    <h4 className="section-title">Je m'exerce</h4>
                    <Row>
                        {/* Colonne gauche */}
                        <Col md={6}>
                            {/* Exercice 1 */}
                            <Card className="mb-4 shadow">
                                <Card.Header className="bg-info text-white">
                                    <span role="img" aria-label="exercise">1️⃣</span> Comparer les étiquettes des lampes
                                </Card.Header>
                                <Card.Body>
                                    <p>Sur les lampes que l'on achète aujourd'hui, on trouve ce type d'information :</p>
                                    <div className="text-center mb-3">
                                        <img
                                            src={lampe65w}
                                            alt="Show laser"
                                            className="img-fluid rounded shadow-sm"
                                            style={{maxHeight: '100px', cursor: 'pointer'}}
                                            onClick={() => openModal(lampe65w, 'Show laser')}
                                        />
                                    </div>

                                    <div className="question-block mb-3">
                                        <p><strong>1.</strong> Les lampes à incandescences sont-elles encore en vente ?
                                            Pourquoi ?</p>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo1_1}
                                            onChange={(e) => handleInputChange('exo1_1', e.target.value)}
                                            rows={4}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo1_1')}>
                                            <FaCheck/> {showCorrections.exo1_1 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo1_1 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo1_1.formatted}
                                            </div>
                                        )}
                                    </div>

                                    <div className="question-block mb-3">
                                        <p><strong>2.</strong> Pour faciliter la transition, les constructeurs indiquent
                                            la comparaison avec la lampe à incandescence classique. En déduire la
                                            signification de l'information ci-dessus.</p>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo1_2}
                                            onChange={(e) => handleInputChange('exo1_2', e.target.value)}
                                            rows={4}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo1_2')}>
                                            <FaCheck/> {showCorrections.exo1_2 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo1_2 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo1_2.formatted}
                                            </div>
                                        )}
                                    </div>

                                    <div className="question-block mb-3">
                                        <p><strong>3.</strong> Pourquoi une telle différence de puissance ?</p>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo1_3}
                                            onChange={(e) => handleInputChange('exo1_3', e.target.value)}
                                            rows={4}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo1_3')}>
                                            <FaCheck/> {showCorrections.exo1_3 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo1_3 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo1_3.formatted}
                                            </div>
                                        )}
                                    </div>
                                </Card.Body>

                                {/* Exercice 3 */}
                                <Card.Header className="bg-info text-white">
                                    <span role="img" aria-label="exercise">3️⃣</span> Show laser
                                </Card.Header>
                                <Card.Body>
                                    <p>Le show laser exploite les propriétés du faisceau laser</p>

                                    <div className="text-center mb-3">
                                        <img
                                            src={laserShow}
                                            alt="Show laser"
                                            className="img-fluid rounded shadow-sm"
                                            style={{maxHeight: '200px', cursor: 'pointer'}}
                                            onClick={() => openModal(laserShow, 'Show laser')}
                                        />
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Colonne droite */}
                        <Col md={6}>
                            {/* Exercice 2 */}
                            <Card className="mb-4 shadow">
                                <div className="question-block mb-3">
                                    <p><strong>1.</strong> Traduire par une phrase le schéma.</p>
                                    <textarea
                                        className="form-control mb-2"
                                        value={answers.exo3_1}
                                        onChange={(e) => handleInputChange('exo3_1', e.target.value)}
                                        rows={2}
                                    />
                                    <button className="btn btn-sm btn-outline-success"
                                            onClick={() => toggleCorrection('exo3_1')}>
                                        <FaCheck/> {showCorrections.exo3_1 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.exo3_1 && (
                                        <div className="alert alert-light mt-2 p-2 border">
                                            {correctAnswers.exo3_1.formatted}
                                        </div>
                                    )}
                                </div>

                                <div className="question-block mb-3">
                                    <p><strong>2.</strong> Indiquer les propriétés du faisceau laser qui sont
                                        exploitées dans le show laser.</p>
                                    <textarea
                                        className="form-control mb-2"
                                        value={answers.exo3_2}
                                        onChange={(e) => handleInputChange('exo3_2', e.target.value)}
                                        rows={2}
                                    />
                                    <button className="btn btn-sm btn-outline-success"
                                            onClick={() => toggleCorrection('exo3_2')}>
                                        <FaCheck/> {showCorrections.exo3_2 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.exo3_2 && (
                                        <div className="alert alert-light mt-2 p-2 border">
                                            {correctAnswers.exo3_2.formatted}
                                        </div>
                                    )}
                                </div>
                                <Card.Header className="bg-info text-white">
                                    <span role="img" aria-label="exercise">2️⃣</span> Spectre d'émission
                                </Card.Header>
                                <Card.Body>
                                    <p>Les deux spectres d'émission suivants sont émis par deux sources de lumière
                                        différentes.</p>

                                    <div className="text-center mb-3">
                                        <img
                                            src={spectre3lumiereex}
                                            alt="Spectres d'émission"
                                            className="img-fluid rounded shadow-sm"
                                            style={{maxHeight: '200px', cursor: 'pointer'}}
                                            onClick={() => openModal(spectre3lumiereex, 'Spectres de lampes')}
                                        />
                                    </div>

                                    <div className="question-block mb-3">
                                        <p><strong>1.</strong> Comparer les deux spectres.</p>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo2_1}
                                            onChange={(e) => handleInputChange('exo2_1', e.target.value)}
                                            rows={2}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo2_1')}>
                                            <FaCheck/> {showCorrections.exo2_1 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo2_1 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo2_1.formatted}
                                            </div>
                                        )}
                                    </div>

                                    <div className="question-block mb-3">
                                        <p><strong>2.</strong> Identifier le spectre continu. S'agit-il du spectre
                                            d'émission d'une source chaude ?</p>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo2_2}
                                            onChange={(e) => handleInputChange('exo2_2', e.target.value)}
                                            rows={2}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo2_2')}>
                                            <FaCheck/> {showCorrections.exo2_2 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo2_2 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo2_2.formatted}
                                            </div>
                                        )}
                                    </div>

                                    <div className="question-block mb-3">
                                        <p><strong>3.</strong> Le spectre 2 correspond-il à une source froide de lumière
                                            ? Justifier la réponse.</p>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo2_3}
                                            onChange={(e) => handleInputChange('exo2_3', e.target.value)}
                                            rows={2}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo2_3')}>
                                            <FaCheck/> {showCorrections.exo2_3 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo2_3 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo2_3.formatted}
                                            </div>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                {/* PAGE 3 - J'approfondis */}
                <div className="print-page">
                    <h4 className="section-title">J'approfondis</h4>
                    <Row>
                        {/* Colonne gauche */}
                        <Col md={6}>
                            {/* Exercice 4 */}
                            <Card className="mb-4 shadow">
                                <Card.Header className="bg-warning text-white">
                                    <span role="img" aria-label="exercise">4️⃣</span> Efficacité énergétique
                                </Card.Header>
                                <Card.Body>
                                    <p>Le tableau suivant donne pour chaque type de lampe deux grandeurs
                                        caractéristiques : le flux lumineux et la puissance.</p>


                                    <table
                                        className="table table-bordered mb-3"
                                        style={{
                                            fontSize: '0.85rem',
                                            borderCollapse: 'separate',
                                            borderSpacing: 0,
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                            width: '100%',
                                            marginLeft: '-5%',
                                        }}
                                    >
                                        <thead>
                                        <tr style={{backgroundColor: '#4a90e2', color: '#fff'}}>
                                            <th style={{width: '35%', padding: '10px'}}>Type de lampe</th>
                                            <th style={{width: '22%', padding: '10px'}}>Lampe LED</th>
                                            <th style={{width: '22%', padding: '10px'}}>Lampe fluocompacte</th>
                                            <th style={{width: '21%', padding: '10px'}}>Lampe à incandescence</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr style={{backgroundColor: '#f0f8ff'}}>
                                            <td style={{padding: '8px', fontWeight: 'bold'}}>Flux lumineux (lm)</td>
                                            <td style={{padding: '8px'}}>420</td>
                                            <td style={{padding: '8px'}}>450</td>
                                            <td style={{padding: '8px'}}>400</td>
                                        </tr>
                                        <tr style={{backgroundColor: '#fafafa'}}>
                                            <td style={{padding: '8px', fontWeight: 'bold'}}>Puissance (W)</td>
                                            <td style={{padding: '8px'}}>6</td>
                                            <td style={{padding: '8px'}}>9</td>
                                            <td style={{padding: '8px'}}>40</td>
                                        </tr>
                                        <tr style={{backgroundColor: '#f0f8ff'}}>
                                            <td style={{padding: '8px', fontWeight: 'bold'}}>Rendement lumineux (lm/W)
                                            </td>
                                            <td style={{padding: '8px'}}></td>
                                            <td style={{padding: '8px'}}></td>
                                            <td style={{padding: '8px'}}></td>
                                        </tr>
                                        <tr style={{backgroundColor: '#fafafa'}}>
                                            <td style={{padding: '8px', fontWeight: 'bold'}}>Efficacité énergétique</td>
                                            <td style={{padding: '8px'}}></td>
                                            <td style={{padding: '8px'}}></td>
                                            <td style={{padding: '8px'}}>1</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                    <div className="question-block mb-3">
                                        <p><strong>1.</strong> Calculer pour chaque lampe le rendement lumineux.</p>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo4_1}
                                            onChange={(e) => handleInputChange('exo4_1', e.target.value)}
                                            rows={7}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo4_1')}>
                                            <FaCheck/> {showCorrections.exo4_1 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo4_1 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo4_1.formatted}
                                            </div>
                                        )}
                                    </div>

                                    <div className="question-block mb-3">
                                        <p><strong>2.</strong> En prenant 1 pour l'efficacité énergétique de la lampe à
                                            incandescence, en déduire l'efficacité énergétique des deux autres lampes.
                                        </p>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo4_2}
                                            onChange={(e) => handleInputChange('exo4_2', e.target.value)}
                                            rows={7}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo4_2')}>
                                            <FaCheck/> {showCorrections.exo4_2 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo4_2 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo4_2.formatted}
                                            </div>
                                        )}
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Colonne droite */}
                        <Col md={6}>
                            {/* Exercice 5 */}
                            <Card className="mb-4 shadow">
                                <div className="question-block mb-3">
                                    <p><strong>3.</strong> Peut-on dire que la lampe LED est 7 fois plus efficace
                                        que la lampe fluo-compacte ? Justifier la réponse.</p>
                                    <textarea
                                        className="form-control mb-2"
                                        value={answers.exo4_3}
                                        onChange={(e) => handleInputChange('exo4_3', e.target.value)}
                                        rows={7}
                                    />
                                    <button className="btn btn-sm btn-outline-success"
                                            onClick={() => toggleCorrection('exo4_3')}>
                                        <FaCheck/> {showCorrections.exo4_3 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.exo4_3 && (
                                        <div className="alert alert-light mt-2 p-2 border">
                                            {correctAnswers.exo4_3.formatted}
                                        </div>
                                    )}
                                </div>
                                <Card.Header className="bg-warning text-white">
                                    <span role="img" aria-label="exercise">5️⃣</span> Caractéristiques des spectres
                                </Card.Header>
                                <Card.Body>
                                    <p>Il s'agit d'identifier chaque spectre pour chaque lampe : laser, LED,
                                        fluo-compacte et halogène.</p>
                                    <p>Les spectres de lumière sont différents par leur aspect : continu/discontinu et
                                        par leur couleur : complet/incomplet.</p>

                                    <div className="question-block mb-3">
                                        <p><strong>1.</strong> Donner les caractéristiques du spectre pour une source
                                            chaude et une source froide.</p>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo5_1}
                                            onChange={(e) => handleInputChange('exo5_1', e.target.value)}
                                            rows={7}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo5_1')}>
                                            <FaCheck/> {showCorrections.exo5_1 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo5_1 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo5_1.formatted}
                                            </div>
                                        )}
                                    </div>

                                    <div className="question-block mb-3">
                                        <p><strong>2.</strong> Compléter le tableau en indiquant :</p>
                                        <ul>
                                            <li>la nature de la source : froide ou chaude ;</li>
                                            <li>la lampe correspondant au spectre.</li>
                                        </ul>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo5_2}
                                            onChange={(e) => handleInputChange('exo5_2', e.target.value)}
                                            rows={6}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo5_2')}>
                                            <FaCheck/> {showCorrections.exo5_2 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo5_2 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo5_2.formatted}
                                            </div>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                {/* PAGE 4 - Exercices finaux */}
                <div className="print-page">
                    <Row>
                        {/* Colonne gauche */}
                        <Col md={6}>
                            {/* Exercice 6 */}
                            <Card className="mb-4 shadow">
                                <Card.Header className="bg-danger text-white">
                                    <span role="img" aria-label="exercise">6️⃣</span> Caractéristiques d'une LED
                                </Card.Header>
                                <Card.Body>
                                    <p>Les LED constituent l'éclairage du futur.</p>

                                    <div className="question-block mb-3">
                                        <p><strong>1.</strong> La LED serait une source froide de lumière. Comment
                                            pouvez-vous le vérifier expérimentalement ? Expliquer et réaliser
                                            l'expérience.</p>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo6_1}
                                            onChange={(e) => handleInputChange('exo6_1', e.target.value)}
                                            rows={5}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo6_1')}>
                                            <FaCheck/> {showCorrections.exo6_1 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo6_1 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo6_1.formatted}
                                            </div>
                                        )}

                                        <p><strong>2.</strong> Une publicité sur la LED indique qu'elle fournit un
                                            éclairage directionnel. Avec quel appareil peut-on le mesurer ? Expliquer la
                                            démarche à suivre et réaliser l'expérience.</p>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo6_2}
                                            onChange={(e) => handleInputChange('exo6_2', e.target.value)}
                                            rows={5}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo6_2')}>
                                            <FaCheck/> {showCorrections.exo6_2 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo6_2 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo6_2.formatted}
                                            </div>
                                        )}
                                    </div>
                                </Card.Body>
                                <Card.Header className="bg-danger text-white">
                                    <span role="img" aria-label="exercise">7️⃣</span> Production de lumière
                                </Card.Header>
                                <Card.Body>
                                    <p>Le schéma ci-dessous montre les trois grands phénomènes physiques utilisés pour
                                        l'éclairage : l'incandescence, la luminescence et la fluorescence.</p>
                                    <div className="text-center mb-0">
                                        <img
                                            src={shema3exo}
                                            alt="Show laser"
                                            className="img-fluid rounded shadow-sm"
                                            style={{maxHeight: '200px', cursor: 'pointer'}}
                                            onClick={() => openModal(shema3exo, 'Show laser')}
                                        />
                                    </div>
                                    <div className="question-block mb-1">
                                        <p><strong>1.</strong> Pour chaque phénomène, dire à quoi correspondent les
                                            indications entre parenthèses.</p>
                                        <textarea
                                            className="form-control mb-1"
                                            value={answers.exo7_1}
                                            onChange={(e) => handleInputChange('exo7_1', e.target.value)}
                                            rows={7}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo7_1')}>
                                            <FaCheck/> {showCorrections.exo7_1 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo7_1 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo7_1.formatted}
                                            </div>
                                        )}

                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* Colonne droite */}
                        <Col md={6}>
                            {/* Exercice 7 */}
                            <Card className="mb-4 shadow">
                                <Card.Body>

                                    <div className="question-block mb-3">
                                        <p><strong>2.</strong> Indiquer quel phénomène utilise les lampes suivantes :
                                            lampe à filament ; lampe fluo-compacte ; lampe halogène et lampe LED.</p>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo7_2}
                                            onChange={(e) => handleInputChange('exo7_2', e.target.value)}
                                            rows={4}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo7_2')}>
                                            <FaCheck/> {showCorrections.exo7_2 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo7_2 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo7_2.formatted}
                                            </div>
                                        )}

                                    </div>
                                </Card.Body>
                                {/* Exercice 8 */}
                                <Card.Header className="bg-danger text-white">
                                    <span role="img" aria-label="exercise"
                                          style={{marginTop: '0px'}}>8️⃣</span> Emballage
                                </Card.Header>
                                <Card.Body>
                                    <p>Karim et Alexandra ont acheté une lampe dont l'emballage figure ci-dessous.</p>
                                    <p>Alexandra avait auparavant une lampe à incandescence de 60 W. Karim lui affirme
                                        qu'avec cette nouvelle lampe, elle aura plus de lumière.</p>
                                    <div className="text-center mb-2">
                                        <img
                                            src={lamperexercice}
                                            alt="Show laser"
                                            className="img-fluid rounded shadow-sm"
                                            style={{maxHeight: '200px', cursor: 'pointer'}}
                                            onClick={() => openModal(lamperexercice, 'Show laser')}
                                        />
                                    </div>

                                    <div className="question-block mb-3">
                                        <p><strong>1.</strong> Donner la nature de la lampe achetée.</p>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo8_1}
                                            onChange={(e) => handleInputChange('exo8_1', e.target.value)}
                                            rows={2}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo8_1')}>
                                            <FaCheck/> {showCorrections.exo8_1 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo8_1 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo8_1.formatted}
                                            </div>
                                        )}

                                        <p><strong>2.</strong> Indiquer la puissance puis donner l'équivalence avec une
                                            lampe à incandescence.</p>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo8_2}
                                            onChange={(e) => handleInputChange('exo8_2', e.target.value)}
                                            rows={2}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo8_2')}>
                                            <FaCheck/> {showCorrections.exo8_2 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo8_2 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo8_2.formatted}
                                            </div>
                                        )}

                                        <p><strong>3.</strong> À quelle grandeur physique correspond la valeur 970 lm ?
                                        </p>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo8_3}
                                            onChange={(e) => handleInputChange('exo8_3', e.target.value)}
                                            rows={2}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo8_3')}>
                                            <FaCheck/> {showCorrections.exo8_3 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo8_3 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo8_3.formatted}
                                            </div>
                                        )}

                                        <p><strong>4.</strong> Karim a-t-il raison ? Justifier.</p>
                                        <textarea
                                            className="form-control mb-2"
                                            value={answers.exo8_4}
                                            onChange={(e) => handleInputChange('exo8_4', e.target.value)}
                                            rows={3}
                                        />
                                        <button className="btn btn-sm btn-outline-success"
                                                onClick={() => toggleCorrection('exo8_4')}>
                                            <FaCheck/> {showCorrections.exo8_4 ? 'Masquer' : 'Correction'}
                                        </button>
                                        {showCorrections.exo8_4 && (
                                            <div className="alert alert-light mt-2 p-2 border">
                                                {correctAnswers.exo8_4.formatted}
                                            </div>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <footer className="tp-footer text-center py-3 bg-light mt-4">
                        <p className="mb-0">Exercices sur les signaux lumineux et l'éclairage</p>
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

export default ExerciceSignaux;
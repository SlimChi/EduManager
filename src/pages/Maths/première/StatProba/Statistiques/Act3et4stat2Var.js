import React, {useRef, useState} from 'react';
import {FaPrint, FaCheck, FaIndustry, FaCog} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io';
import '../../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../../components/navigation/BackButton';
import PrintManager from '../../../../../utils/PrintManager';
import 'katex/dist/katex.min.css';
import {BlockMath, InlineMath} from 'react-katex';
import {Card} from "react-bootstrap";
import ModalImage from "../../../../../utils/ModalImage";
import AutoEvaluationGrid from "../../../../../config/AutoEvaluationGrid";
import {Typography} from "@mui/material";
import Automatismes2 from "../../../../../config/Automatismes2";

// Images (à remplacer par les vôtres)
import tortueImage from "../../../../../assets/tortue.png";
import trottinetteImage from "../../../../../assets/trottinette.png";

const Act3et4stat2Var = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    const contentRef = useRef();
    const [showSummary, setShowSummary] = useState(false);

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        activity3_q1: '',
        activity3_q2: '',
        activity3_q3: '',
        activity3_q4: '',
        activity3_q5: '',
        activity4_q1: '',
        activity4_q2: '',
        activity4_q3: '',
        activity4_q4: '',
        activity4_q5: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        activity3_q1: false,
        activity3_q2: false,
        activity3_q3: false,
        activity3_q4: false,
        activity3_q5: false,
        activity4_q1: false,
        activity4_q2: false,
        activity4_q3: false,
        activity4_q4: false,
        activity4_q5: false,
    });

    // Réponses attendues
    const correctAnswers = {
        activity3_q1: {
            formatted: <p>Les points du nuage sont presque alignés, ce qui permet d'envisager un ajustement affine.</p>
        },
        activity3_q2: {
            formatted: <p>y = 0,058x + 3,500</p>
        },
        activity3_q3: {
            formatted: <div>
                <p>a. L'ajustement est pertinent car la droite semble parfaitement passer par les points.</p>
                <p>b. R² = 1</p>
                <p>c. Avec les nouvelles mesures, les points ne sont pas bien alignés. L'ajustement affine n'est pas
                    adapté (R² ≈ 0,53).</p>
            </div>
        },
        activity3_q4: {
            formatted: <p>y = 0,058 × 365 + 3,500 = 24,67 donc la tortue atteindra une taille de 24,7 cm à l'âge
                adulte.</p>
        },
        activity3_q5: {
            formatted: <p>La tortue de Sarah atteindra une taille d'environ 24,7 cm à l'âge adulte.</p>
        },
        activity4_q1: {
            formatted: <p>Les deux variables sont x (le rang de l'année) et y (le nombre de trottinettes électriques
                vendues en
                milliers).</p>
        },
        activity4_q2: {
            formatted: <p>Pour 2026, x = 11</p>
        },
        activity4_q3: {
            formatted: <p>y = 63,8x - 11,6</p>
        },
        activity4_q4: {
            formatted: <div>
                <p>Pour y = 500, on trouve x = 8</p>
                <p>Pour x = 11, on trouve y = 690</p>
            </div>
        },
        activity4_q5: {
            formatted: <p>Le nombre de trottinettes électriques franchira la barre des 500 000 en 2023 (x=8) et il y
                aura 690
                000 trottinettes vendues en 2026.</p>
        }
    };

    // Gestionnaires d'événements
    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));
    };

    const toggleSummary = () => {
        setShowSummary(!showSummary);
    };

    if (className === 'Premiere-stat2var-act3et4') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" ref={contentRef} style={{fontFamily: 'Cambria Math'}}>
            <PrintManager
                contentRef={contentRef}
                activityName="Statistiques_2_variables_Activites_3_4"
                pageCount={2}
                quality="hd"
            />

            {/* PAGE 1 - ACTIVITÉ 3 */}
            <div className="print-page">
                <Automatismes2/>
                <div className="math-chapter-box teal mt-0" style={{padding: '0'}}>
                    <span style={{marginRight: '10px', fontSize: '30px'}}>🐢</span>
                    <h2 className="math-chapter-title-test mt-0">Activité 3 - Évaluer la pertinence d'un ajustement
                        affine</h2>
                </div>

                <div className="activity-header mt-0">
                    <span className="activity-badge">ACTIVITÉ 3</span>
                    <div className="activity-title">
                        <span className="course-title mt-0">
                            <span>🐢</span> La croissance de la tortue de Sarah !
                        </span>
                    </div>
                </div>

                <div className="renovation-contexte2" style={{width: '100%'}}>
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                        <div style={{
                            flex: '1 1 70%',
                            paddingRight: '10px',
                            textAlign: 'justify',
                            textJustify: 'inter-word',
                            fontSize: '14px',
                            lineHeight: '1.4'
                        }}>
                            <p>Sarah a adopté une tortue à sa naissance il y a deux mois et elle aimerait connaître la
                                taille que peut espérer atteindre son nouvel animal de compagnie quand il aura l'âge
                                adulte. Elle sait qu'une tortue peut atteindre une taille comprise entre 20 et 50 cm. La
                                tortue aura atteint l'âge adulte lorsqu'elle aura un an.</p>
                            <p>Sarah a effectué des mesures de la taille de sa tortue et a obtenu les résultats donnés
                                dans le tableau suivant :</p>
                        </div>

                        <div style={{
                            flex: '1 1 30%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <img
                                src={tortueImage}
                                alt="Tortue de Sarah"
                                className="img-fluid rounded shadow-sm"
                                style={{
                                    width: '100%',
                                    maxWidth: '200px',
                                    height: 'auto',
                                    border: '1px solid #ddd',
                                }}
                            />
                        </div>
                    </div>

                    <table className="table table-bordered mt-3"
                           style={{fontSize: '14px', margin: '0 auto', width: '100%'}}>
                        <thead className="table-success">
                        <tr>
                            <th>Âge de la tortue (en jours) xᵢ</th>
                            <th>6</th>
                            <th>12</th>
                            <th>18</th>
                            <th>24</th>
                            <th>30</th>
                            <th>36</th>
                            <th>42</th>
                            <th>48</th>
                            <th>54</th>
                            <th>60</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Taille (en cm) yᵢ</td>
                            <td>3,85</td>
                            <td>4,20</td>
                            <td>4,55</td>
                            <td>4,90</td>
                            <td>5,25</td>
                            <td>5,60</td>
                            <td>5,95</td>
                            <td>6,30</td>
                            <td>6,65</td>
                            <td>7,00</td>
                        </tr>
                        </tbody>
                    </table>

                    <Typography variant="body1" sx={{mt: 3, fontStyle: 'italic', textAlign: 'center'}}>
                        <strong>Objectif :</strong> Déterminer la taille que la tortue de Sarah pourrait atteindre à
                        l’âge adulte
                        si sa croissance se poursuit de la même manière.
                    </Typography>
                </div>

                <div className="row" style={{marginTop: '4px'}}>
                    {/* Colonne de gauche */}
                    <div className="col-md-6">
                        <div className="question-card">
                            <div className="question-content">
                                <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                    <span>1 . Réaliser</span>
                                </h4>
                                <p style={{display: 'inline', textAlign: 'justify'}}>a. À l'aide de la calculatrice,
                                    représentez graphiquement le nuage
                                    de points associé à cette série statistique.</p>
                                <p>b. Expliquez s'il vous semble judicieux de faire un ajustement affine compte-tenu de
                                    la forme du nuage de points observé.</p>

                                <div className="answer-area">
                                    <p style={{
                                        fontSize: '10px',
                                        letterSpacing: '2px'
                                    }}>.............................................................................................<br/><br/>
                                        .............................................................................................
                                    </p>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('activity3_q1')}
                                    >
                                        <FaCheck/> {showCorrections.activity3_q1 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.activity3_q1 && (
                                        <div className="correction-box">
                                            <p><strong>Correction :</strong></p>
                                            {correctAnswers.activity3_q1.formatted}
                                        </div>
                                    )}
                                </div>
                                <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                    <span>2 . Réaliser</span>
                                </h4>
                                <p style={{display: 'inline', textAlign: 'justify'}}> À l'aide de la calculatrice,
                                    tracez la droite d'ajustement affine et déterminez
                                    l'équation réduite de la droite d'ajustement affine de y en x. Arrondissez les
                                    coefficients obtenus au millième.</p>
                                <div className="answer-area">
                                    <p style={{
                                        fontSize: '10px',
                                        letterSpacing: '2px'
                                    }}>.............................................................................................
                                    </p>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('activity3_q2')}
                                    >
                                        <FaCheck/> {showCorrections.activity3_q2 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.activity3_q2 && (
                                        <div className="correction-box">
                                            <p><strong>Correction :</strong></p>
                                            {correctAnswers.activity3_q2.formatted}
                                        </div>
                                    )}
                                </div>
                                <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                    <span>3 . Valider, Communiquer</span>
                                </h4>
                                <p style={{display: 'inline', textAlign: 'justify'}}> Observez la droite d'ajustement
                                    par rapport aux points du nuage. Peut-on dire que
                                    l'ajustement affine est pertinent ? Justifiez.</p>
                                <p style={{
                                    fontSize: '10px',
                                    letterSpacing: '2px'
                                }}>.............................................................................................</p>

                            </div>
                        </div>
                    </div>

                    {/* Colonne de droite */}
                    <div className="col-md-6">
                        <div className="question-card">
                            <div className="question-content">
                                <p>b. À l'aide de la calculatrice, donnez la valeur du coefficient de détermination noté
                                    R².</p>
                                <p style={{
                                    fontSize: '10px',
                                    letterSpacing: '2px'
                                }}>.............................................................................................</p>
                                <p>c. Si les mesures de la taille de la tortue avaient été les suivantes, un ajustement
                                    affine aurait-il été adapté ? Justifiez en déterminant le coefficient de
                                    détermination.</p>

                                <table className="table table-bordered mt-2" style={{fontSize: '12px'}}>
                                    <thead className="table-warning">
                                    <tr>
                                        <th>Âge (jours) xᵢ</th>
                                        <th>6</th>
                                        <th>18</th>
                                        <th>36</th>
                                        <th>48</th>
                                        <th>54</th>
                                        <th>60</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Taille (cm) yᵢ</td>
                                        <td>3,85</td>
                                        <td>4,55</td>
                                        <td>4,6</td>
                                        <td>4,65</td>
                                        <td>4,8</td>
                                        <td>7,00</td>
                                    </tr>
                                    </tbody>
                                </table>

                                <div className="answer-area">
                                    <p style={{
                                        fontSize: '10px',
                                        letterSpacing: '2px'
                                    }}>.............................................................................................<br/><br/>
                                        .............................................................................................
                                    </p>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('activity3_q3')}
                                    >
                                        <FaCheck/> {showCorrections.activity3_q3 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.activity3_q3 && (
                                        <div className="correction-box">
                                            <p><strong>Correction :</strong></p>
                                            {correctAnswers.activity3_q3.formatted}
                                        </div>
                                    )}
                                </div>
                                <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                    <span>4 . Réaliser, Valider, Communiquer</span>
                                </h4>
                                <p style={{display: 'inline', textAlign: 'justify'}}> épondez à l’objectif en utilisant
                                    l'équation de la droite d'ajustement obtenue
                                    à la question 2 pour déterminer la taille de la tortue au bout d'un an, c'est-à-dire
                                    au bout de 365 jours.</p>

                                <div className="answer-area">
                                    <p style={{
                                        fontSize: '10px',
                                        letterSpacing: '2px'
                                    }}>.............................................................................................<br/><br/>
                                        .............................................................................................
                                    </p>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('activity3_q4')}
                                    >
                                        <FaCheck/> {showCorrections.activity3_q4 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.activity3_q4 && (
                                        <div className="correction-box">
                                            <p><strong>Correction :</strong></p>
                                            {correctAnswers.activity3_q4.formatted}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE 2 - ACTIVITÉ 4 */}
            <div className="print-page">
                <div className="activity-header mt-0">
                    <span className="activity-badge">ACTIVITÉ 4</span>
                    <div className="activity-title">
                        <span className="course-title">
                            <span>🛴</span> Vive les trottinettes électriques !
                        </span>
                    </div>
                </div>

                <div className="renovation-contexte2" style={{width: '100%'}}>
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                        <div style={{flex: '1 1 70%', paddingRight: '20px'}}>
                            <p>Le tableau suivant répertorie le nombre de trottinettes électriques vendues en France
                                entre 2016
                                et 2020 :</p>

                            <table className="table table-bordered mt-0"
                                   style={{fontSize: '14px', margin: '0 auto', width: '100%'}}>
                                <thead className="table-info">
                                <tr>
                                    <th>Année</th>
                                    <th>2016</th>
                                    <th>2017</th>
                                    <th>2018</th>
                                    <th>2019</th>
                                    <th>2020</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>Rang xᵢ</th>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <th>Trottinettes vendues (milliers) yᵢ</th>
                                    <td>77</td>
                                    <td>102</td>
                                    <td>134</td>
                                    <td>278</td>
                                    <td>308</td>
                                </tr>
                                </tbody>
                            </table>

                            <p className="mt-3">On sait que la droite d'ajustement affine obtenue à partir des valeurs
                                du
                                tableau ci-dessus passe par les points A(3 ; 179,8) et B(5 ; 307,4).</p>
                        </div>

                        <div style={{
                            flex: '1 1 30%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <img
                                src={trottinetteImage}
                                alt="Trottinette électrique"
                                className="img-fluid rounded shadow-sm"
                                style={{
                                    width: '100%',
                                    maxWidth: '200px',
                                    height: 'auto',
                                    border: '1px solid #ddd',
                                }}
                            />
                        </div>
                    </div>
                    <Typography variant="body1" sx={{mt: 3, fontStyle: 'italic', textAlign: 'center', marginTop: '0'}}>
                        <strong>Objectif :</strong> Déterminer en quelle année la barre des 500 000 trottinettes
                        électriques
                        vendues sera franchie si la tendance continue, et estimer le nombre de trottinettes vendues
                        en 2026.
                    </Typography>
                </div>
                <div className="row" style={{marginTop: '10px'}}>
                    {/* Colonne de gauche */}
                    <div className="col-md-6">
                        <div className="question-card">
                            <div className="question-content">
                                <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                    <span>1 . S'approprier</span>
                                </h4>
                                <p style={{display: 'inline', textAlign: 'justify'}}> Identifiez les deux variables de
                                    la série statistique étudiée.</p>
                                <div className="answer-area">
                                    <p style={{
                                        fontSize: '10px',
                                        letterSpacing: '2px'
                                    }}>.............................................................................................<br/><br/>
                                        .............................................................................................
                                    </p>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('activity4_q1')}
                                    >
                                        <FaCheck/> {showCorrections.activity4_q1 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.activity4_q1 && (
                                        <div className="correction-box">
                                            <p><strong>Correction :</strong></p>
                                            {correctAnswers.activity4_q1.formatted}
                                        </div>
                                    )}
                                </div>
                                <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                    <span>2 . Réaliser</span>
                                </h4>
                                <p style={{display: 'inline', textAlign: 'justify'}}> Donnez la valeur de xᵢ qui
                                    correspond à 2026.</p>
                                <div className="answer-area">
                                    <p style={{
                                        fontSize: '10px',
                                        letterSpacing: '2px'
                                    }}>.............................................................................................</p>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('activity4_q2')}
                                    >
                                        <FaCheck/> {showCorrections.activity4_q2 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.activity4_q2 && (
                                        <div className="correction-box">
                                            <p><strong>Correction :</strong></p>
                                            {correctAnswers.activity4_q2.formatted}
                                        </div>
                                    )}
                                </div>
                                <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                    <span>3 . Réaliser (Algo Pro)</span>
                                </h4>
                                <p style={{display: 'inline', textAlign: 'justify'}}> On dispose d'un programme
                                    permettant de déterminer l'équation d'une droite
                                    d'ajustement à partir des coordonnées de deux points de cette droite. Ouvrez le
                                    fichier « C01_11_algopro1.py » et exécutez-le en lui indiquant les deux coordonnées
                                    des points A et B. Notez l'équation de la droite obtenue en arrondissant les
                                    coefficients au dixième.</p>
                                <div className="answer-area">
                                    <p style={{
                                        fontSize: '10px',
                                        letterSpacing: '2px'
                                    }}>.............................................................................................</p>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('activity4_q3')}
                                    >
                                        <FaCheck/> {showCorrections.activity4_q3 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.activity4_q3 && (
                                        <div className="correction-box">
                                            <p><strong>Correction :</strong></p>
                                            {correctAnswers.activity4_q3.formatted}
                                        </div>
                                    )}
                                </div>
                                <h4 className="vect-title"><span>4 . Réaliser (Algo Pro) - Communiquer</span></h4>
                                <p>Le programme ci-contre est incomplet.</p>
                            </div>
                        </div>
                    </div>

                    {/* Colonne de droite */}
                    <div className="col-md-6">
                        <div className="question-card">
                            <div className="question-content">
                                <p>a. Ouvrez le fichier « C01_11_algopro2.py ». Complétez le programme afin qu'il puisse
                                    déterminer la valeur de xᵢ ou de yᵢ pour n'importe quelle équation de droite
                                    donnée.</p>
                                <p>b. Utilisez le programme pour répondre à l'objectif en arrondissant les valeurs
                                    à l'unité.</p>
                                <div className="code-snippet" style={{
                                    backgroundColor: '#ffffff',
                                    color: '#000000',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    fontFamily: 'Consolas, "Courier New", monospace',
                                    fontSize: '13px',
                                    lineHeight: '1.5',
                                    overflowX: 'auto',
                                    marginBottom: '10px',
                                    border: '1px solid #ccc'
                                }}>
                                    <div><span style={{color: '#0000FF'}}>print</span>(<span style={{color: '#A31515'}}>"Equation de la droite y=ax+b"</span>)
                                    </div>
                                    <div><span style={{color: '#795E26'}}>a</span> = <span
                                        style={{color: '#267F99'}}>float</span>(<span
                                        style={{color: '#A31515'}}>input</span>(<span style={{color: '#A31515'}}>"Donnez la valeur de a : "</span>))
                                    </div>
                                    <div><span style={{color: '#795E26'}}>b</span> = <span
                                        style={{color: '#267F99'}}>float</span>(<span
                                        style={{color: '#A31515'}}>input</span>...............................)
                                    </div>
                                    <div><span style={{color: '#795E26'}}>inconnue</span> = <span
                                        style={{color: '#A31515'}}>input</span>(<span style={{color: '#A31515'}}>"Quelle est l'inconnue dont vous souhaitez déterminer la valeur? "</span>)
                                    </div>
                                    <div><span style={{color: '#0000FF'}}>if</span> <span
                                        style={{color: '#795E26'}}>inconnue</span> == <span
                                        style={{color: '#A31515'}}>'y'</span>:
                                    </div>
                                    <div>&nbsp;&nbsp;<span style={{color: '#795E26'}}>x</span> = <span
                                        style={{color: '#267F99'}}>float</span>(<span
                                        style={{color: '#A31515'}}>input</span>(<span style={{color: '#A31515'}}>"Donnez la valeur de x : "</span>))
                                    </div>
                                    <div>&nbsp;&nbsp;<span style={{color: '#0000FF'}}>print</span>(<span
                                        style={{color: '#A31515'}}>"pour x="</span>, <span
                                        style={{color: '#795E26'}}>x</span>, <span style={{color: '#A31515'}}>"la valeur de y est"</span>, <span
                                        style={{color: '#795E26'}}>a</span>*<span
                                        style={{color: '#795E26'}}>x</span>+<span style={{color: '#795E26'}}>b</span>)
                                    </div>
                                    <div><span style={{color: '#0000FF'}}>elif</span> <span
                                        style={{color: '#795E26'}}>inconnue</span> == <span
                                        style={{color: '#A31515'}}>'x'</span>:
                                    </div>
                                    <div>&nbsp;&nbsp;<span style={{color: '#795E26'}}>y</span> = <span
                                        style={{color: '#267F99'}}></span>........................................<span
                                        style={{color: '#A31515'}}></span>
                                    </div>
                                    <div>&nbsp;&nbsp;<span style={{color: '#0000FF'}}>print</span><span
                                        style={{color: '#A31515'}}>.......................................</span>

                                    </div>
                                </div>


                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.activity4_q4}
                                        onChange={(e) => handleInputChange('activity4_q4', e.target.value)}
                                        rows={3}
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('activity4_q4')}
                                    >
                                        <FaCheck/> {showCorrections.activity4_q4 ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.activity4_q4 && (
                                        <div className="correction-box">
                                            <p><strong>Correction :</strong></p>
                                            {correctAnswers.activity4_q4.formatted}
                                        </div>
                                    )}
                                </div>

                            </div>

                        </div>
                    </div>
                    {/* AutoEvaluationGrid réduit et bien aligné */}
                    <div style={{
                        overflow: 'hidden',
                        transform: 'scale(0.8)',
                        transformOrigin: 'top left',
                        marginLeft: '130px',
                        marginBottom: '-50px'
                    }}>
                        <AutoEvaluationGrid/>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default Act3et4stat2Var;
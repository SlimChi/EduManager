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
import schemaUsinage from "../../../../../assets/shemafraiseuse2.png";
import AutoEvaluationGrid from "../../../../../config/AutoEvaluationGrid";

const Act1Stat2var = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    const contentRef = useRef();
    const [showSummary, setShowSummary] = useState(false);

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        question1: '',
        question2a: '',
        question2b: '',
        question3: '',
        question4: '',
        question5: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        question1: false,
        question2a: false,
        question2b: false,
        question3: false,
        question4: false,
        question5: false,
    });

    // Réponses attendues avec notation mathématique
    const correctAnswers = {
        question1: {
            formatted: <div>
                <p>Les points sont placés aux coordonnées suivantes :</p>
                <ul>
                    <li>Point 1: (3,9; 90)</li>
                    <li>Point 2: (4,5; 106)</li>
                    <li>Point 3: (5,6; 129)</li>
                    <li>Point 4: (6,3; 142)</li>
                    <li>Point 5: (6,7; 157)</li>
                    <li>Point 6: (7,3; 169)</li>
                </ul>
            </div>
        },
        question2a: {
            formatted: <div>
                <BlockMath math="\bar{x} = \frac{3,9 + 4,5 + 5,6 + 6,3 + 6,7 + 7,3}{6} = \frac{34,3}{6} \approx 5,72"/>
                <BlockMath math="\bar{y} = \frac{90 + 106 + 129 + 142 + 157 + 169}{6} = \frac{793}{6} \approx 132,17"/>
                <p>Point moyen G(5,72; 132,17)</p>
            </div>
        },
        question2b: {
            formatted: <p>Le point G est placé approximativement à l'intersection de x = 5,72 et y = 132,17 sur le
                graphique.</p>
        },
        question3: {
            formatted: <p>La droite (AG) passe par les points A(3,9; 90) et G(5,72; 132,17).</p>
        },
        question4: {
            formatted: <div>
                <p>Pour x = 5, on lit sur la droite (AG) : y ≈ 116 g/km</p>
                <BlockMath math="\text{Pente} = \frac{132,17 - 90}{5,72 - 3,9} = \frac{42,17}{1,82} \approx 23,17"/>
                <BlockMath math="y - 90 = 23,17(x - 3,9)"/>
                <BlockMath math="y = 23,17x - 0,36"/>
                <BlockMath math="y(5) = 23,17 \times 5 - 0,36 = 115,85 - 0,36 \approx 115,5 \text{ g/km}"/>
            </div>
        },
        question5: {
            formatted: <div>
                <p>La voiture de Kenny rejette environ 116 g/km de CO₂.</p>
                <p>D'après l'étiquette énergie/CO₂, cette valeur se situe dans la catégorie B (de 101 à 120 g/km).</p>
            </div>
        }
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

    if (className === 'Seconde-stat2var-act1') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" ref={contentRef} style={{fontFamily: 'Cambria Math'}}>
            <PrintManager
                contentRef={contentRef}
                activityName="Statistiques_2_variables_CO2"
                pageCount={2}
                quality="hd"
            />

            {/* PAGE 1 */}
            <div className="print-page">
                <div className="math-chapter-box green mt-0" style={{padding: '0'}}>
                    <span style={{marginRight: '10px', fontSize: '30px'}}>📊</span>
                    <h2 className="math-chapter-title-test mt-0">Statistiques à deux variables</h2>
                </div>
                <div className="activity-header mt-0">
                    <span className="activity-badge">ACTIVITÉ 1</span>
                    <div className="activity-title">
                      <span className="course-title">
                         <span>🌍</span> « Combien de CO₂ rejette la voiture ? »
                      </span>
                    </div>
                </div>
                <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                    <div>
                        <div className="renovation-contexte" style={{maxWidth: '100%'}}>
                            <p style={{
                                textAlign: 'justify',
                                textJustify: 'inter-word',
                                fontSize: '16px',
                                padding: '15px',
                                borderRadius: '10px',
                                color: '#333',
                                lineHeight: '1.6',
                            }}>
                                🌍 <strong style={{color: '#1b5e20'}}>Problème environnemental</strong> : Kenny a acheté
                                une voiture qui consomme en moyenne <strong>5 L d'essence aux 100 km</strong>. Il
                                souhaite connaître l'émission de CO₂ correspondante pour situer sa voiture sur
                                l'étiquette énergie/CO₂.<br/>
                                📊 Pour cela, il a relevé les consommations et les rejets de CO₂ pour différentes
                                voitures et a construit le tableau suivant.
                            </p>

                            <table className="table table-bordered mt-3" style={{fontSize: '14px'}}>
                                <thead className="table-primary">
                                <tr>
                                    <th>Modèle</th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                    <th>6</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Consommation (L/100 km)</td>
                                    <td>3,9</td>
                                    <td>4,5</td>
                                    <td>5,6</td>
                                    <td>6,3</td>
                                    <td>6,7</td>
                                    <td>7,3</td>
                                </tr>
                                <tr>
                                    <td>Rejet CO₂ (g/km)</td>
                                    <td>90</td>
                                    <td>106</td>
                                    <td>129</td>
                                    <td>142</td>
                                    <td>157</td>
                                    <td>169</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="vect-image-text-container" style={{marginLeft: '20px'}}>
                        <div style={{maxWidth: '300px', cursor: 'pointer'}}>
                            <img
                                src={schemaUsinage}
                                alt="Étiquette énergie/CO₂"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(schemaUsinage, 'Étiquette énergie/CO₂')}
                                style={{width: '100%', height: 'auto'}}
                            />
                            <p className="text-center mt-2 small">Étiquette énergie/CO₂ des véhicules neufs</p>
                        </div>
                    </div>

                    <div className="objectif-box" style={{marginTop: '-10px'}}>
                        <p><strong> Objectif :</strong> 🎯 "Déterminer le rejet de CO₂ de la voiture de Kenny et son
                            classement sur l'étiquette énergie/CO₂."</p>
                    </div>
                </div>

                <div className="row" style={{marginTop: '5px'}}>
                    {/* Colonne de gauche */}
                    <div className="col-md-6 mt-0">
                        <div className="question-card mt-0">
                            <div className="question-content">
                                <h4 className="vect-title"><span>1 . S'approprier, Réaliser</span></h4>
                                <p>Dans le repère ci-dessous, placer les points d'abscisse x (consommation en L/100 km)
                                    et d'ordonnée y (rejet de CO₂ en g/km).</p>

                                <div className="answer-area">
                                    <div style={{
                                        border: '1px solid #ccc',
                                        padding: '10px',
                                        marginBottom: '10px',
                                        height: '250px',
                                        position: 'relative'
                                    }}>
                                        {/* Graphique simplifié */}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '20px',
                                            left: '30px',
                                            width: '90%',
                                            height: '80%',
                                            borderLeft: '1px solid #000',
                                            borderBottom: '1px solid #000'
                                        }}>
                                            {/* Axe X */}
                                            <div style={{
                                                position: 'absolute',
                                                bottom: '-20px',
                                                left: '0',
                                                width: '100%',
                                                textAlign: 'center'
                                            }}>Consommation (L/100 km)
                                            </div>
                                            {/* Axe Y */}
                                            <div style={{
                                                position: 'absolute',
                                                top: '0',
                                                left: '-40px',
                                                height: '100%',
                                                writingMode: 'vertical-lr',
                                                textAlign: 'center',
                                                transform: 'rotate(180deg)'
                                            }}>Rejet CO₂ (g/km)
                                            </div>

                                            {/* Points approximatifs */}
                                            <div style={{
                                                position: 'absolute',
                                                left: '5%',
                                                bottom: '15%',
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                backgroundColor: 'red'
                                            }}></div>
                                            <div style={{
                                                position: 'absolute',
                                                left: '15%',
                                                bottom: '25%',
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                backgroundColor: 'red'
                                            }}></div>
                                            <div style={{
                                                position: 'absolute',
                                                left: '30%',
                                                bottom: '40%',
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                backgroundColor: 'red'
                                            }}></div>
                                            <div style={{
                                                position: 'absolute',
                                                left: '40%',
                                                bottom: '50%',
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                backgroundColor: 'red'
                                            }}></div>
                                            <div style={{
                                                position: 'absolute',
                                                left: '45%',
                                                bottom: '60%',
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                backgroundColor: 'red'
                                            }}></div>
                                            <div style={{
                                                position: 'absolute',
                                                left: '55%',
                                                bottom: '70%',
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                backgroundColor: 'red'
                                            }}></div>
                                        </div>
                                    </div>

                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question1')}
                                    >
                                        <FaCheck/> {showCorrections.question1 ? 'Masquer la correction' : 'Vérifier les points'}
                                    </button>
                                    {showCorrections.question1 && (
                                        <div className="correction-box">
                                            {correctAnswers.question1.formatted}
                                        </div>
                                    )}
                                </div>

                                <h4 className="vect-title" style={{marginTop: '15px'}}>
                                    <span>2 . Réaliser, Analyser</span>
                                </h4>
                                <p>a. Déterminer les coordonnées (x̄; ȳ) du point moyen G.</p>
                                <p>b. Placer le point G sur le graphique.</p>

                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question2a}
                                        onChange={(e) => handleInputChange('question2a', e.target.value)}
                                        rows={2}
                                        placeholder="Calculer x̄ et ȳ..."
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question2a')}
                                    >
                                        <FaCheck/> {showCorrections.question2a ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question2a && (
                                        <div className="correction-box">
                                            {correctAnswers.question2a.formatted}
                                        </div>
                                    )}

                                    <div style={{marginTop: '10px'}}>
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question2b')}
                                        >
                                            <FaCheck/> {showCorrections.question2b ? 'Masquer' : 'Voir placement de G'}
                                        </button>
                                        {showCorrections.question2b && (
                                            <div className="correction-box">
                                                {correctAnswers.question2b.formatted}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonne de droite */}
                    <div className="col-md-6">
                        <div className="question-card">
                            <div className="question-content">
                                <h4 className="vect-title">
                                    <span>3 . Réaliser</span>
                                </h4>
                                <p>Les points A(3,9; 90) et G définissent la droite d'ajustement (AG) du nuage de
                                    points. Tracer la droite (AG) sur le graphique.</p>

                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question3}
                                        onChange={(e) => handleInputChange('question3', e.target.value)}
                                        rows={2}
                                        placeholder="Décrire comment tracer la droite..."
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question3')}
                                    >
                                        <FaCheck/> {showCorrections.question3 ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question3 && (
                                        <div className="correction-box">
                                            {correctAnswers.question3.formatted}
                                        </div>
                                    )}
                                </div>

                                <h4 className="vect-title" style={{marginTop: '15px'}}>
                                    <span>4 . Réaliser, Valider</span>
                                </h4>
                                <p>Lire sur le graphique l'ordonnée du point de la droite (AG) d'abscisse x = 5.</p>

                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question4}
                                        onChange={(e) => handleInputChange('question4', e.target.value)}
                                        rows={2}
                                        placeholder="Quelle valeur de y pour x = 5 ?"
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question4')}
                                    >
                                        <FaCheck/> {showCorrections.question4 ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question4 && (
                                        <div className="correction-box">
                                            {correctAnswers.question4.formatted}
                                        </div>
                                    )}
                                </div>

                                <h4 className="vect-title" style={{marginTop: '15px'}}>
                                    <span>5 . Communiquer</span>
                                </h4>
                                <p>En déduire le rejet de CO₂ produit par la voiture de Kenny, puis indiquer son
                                    classement de catégorie d'après l'étiquette énergie/CO₂.</p>

                                <div className="answer-area">
                                    <textarea
                                        className="answer-input"
                                        value={answers.question5}
                                        onChange={(e) => handleInputChange('question5', e.target.value)}
                                        rows={2}
                                        placeholder="Conclusion et classement..."
                                    ></textarea>
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleCorrection('question5')}
                                    >
                                        <FaCheck/> {showCorrections.question5 ? 'Masquer la correction' : 'Afficher la correction'}
                                    </button>
                                    {showCorrections.question5 && (
                                        <div className="correction-box">
                                            {correctAnswers.question5.formatted}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE 2 */}
            <div className="print-page">
                <div className="row mt-0">
                    <div className="col-12">
                        <div className="question-card">
                            <div className="question-content">
                                <div className="alert alert-info" style={{fontSize: '0.9rem'}}>
                                    <strong>Rappel :</strong> Le CO₂ (dioxyde de carbone) est le principal gaz à effet
                                    de serre responsable du changement climatique. L'étiquette énergie/CO₂ permet aux
                                    consommateurs de comparer l'impact environnemental des véhicules.
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <h3>📌 À retenir 🧠</h3>
                                    <button
                                        className="correction-btn"
                                        onClick={toggleSummary}
                                        style={{marginLeft: '10px'}}
                                    >
                                        {showSummary ? 'Masquer' : 'Afficher'} les informations
                                    </button>
                                </div>

                                <div className="vector-summary-container">
                                    {showSummary ? (
                                        <div className="vector-cards-grid">
                                            <div className="vector-card" style={{fontFamily: 'Cambria Math'}}>
                                                <h4>Statistiques à deux variables</h4>
                                                <p>Lorsqu'on étudie la relation entre deux variables quantitatives, on
                                                    peut représenter les données par un <strong>nuage de points</strong>.
                                                </p>

                                                <h5 style={{marginTop: '1rem'}}>Point moyen</h5>
                                                <p>Le point moyen G a pour coordonnées :</p>
                                                <BlockMath
                                                    math="G(\bar{x}, \bar{y}) = \left( \frac{\sum x_i}{n}, \frac{\sum y_i}{n} \right)"/>
                                            </div>

                                            <div className="vector-card" style={{fontFamily: 'Cambria Math'}}>
                                                <h4>Droite d'ajustement</h4>
                                                <p>La droite d'ajustement permet de modéliser la relation entre les deux
                                                    variables et de faire des prévisions.</p>

                                                <h5 style={{marginTop: '1rem'}}>Méthode graphique</h5>
                                                <p>On peut tracer une droite passant par le point moyen et un point
                                                    caractéristique du nuage.</p>
                                                <BlockMath math="y = ax + b"/>
                                            </div>

                                            <div className="vector-card" style={{fontFamily: 'Cambria Math'}}>
                                                <h4>Étiquette énergie/CO₂</h4>
                                                <p>Classification des véhicules selon leurs émissions de CO₂ :</p>
                                                <ul>
                                                    <li><strong>A</strong> : ≤ 100 g/km</li>
                                                    <li><strong>B</strong> : 101-120 g/km</li>
                                                    <li><strong>C</strong> : 121-140 g/km</li>
                                                    <li><strong>D</strong> : 141-160 g/km</li>
                                                    <li><strong>E</strong> : 161-200 g/km</li>
                                                    <li><strong>F</strong> : 201-250 g/km</li>
                                                    <li><strong>G</strong> : ≥ 250 g/km</li>
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="vector-cards-grid" style={{marginTop: '-20px'}}>
                                            <div className="vector-card" style={{
                                                border: '2px dashed #ccc',
                                                minHeight: '250px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#999'
                                            }}>
                                            </div>
                                            <div className="vector-card" style={{
                                                border: '2px dashed #ccc',
                                                minHeight: '250px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#999'
                                            }}>
                                            </div>
                                            <div className="vector-card" style={{
                                                border: '2px dashed #ccc',
                                                minHeight: '250px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#999'
                                            }}>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AutoEvaluationGrid/>
            </div>

            <footer className="tp-footer">
                <p>Activité de statistiques à deux variables - Émissions de CO₂ des véhicules</p>
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

export default Act1Stat2var;
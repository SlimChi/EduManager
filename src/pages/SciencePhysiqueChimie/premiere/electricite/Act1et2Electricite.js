import React, {useRef, useState} from 'react';
import {FaCheck, FaLightbulb, FaBolt, FaIndustry, FaCog} from 'react-icons/fa';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import ModalImage from "../../../../utils/ModalImage";
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";

// Images (à remplacer par les vôtres)
import circuitImage from "../../../../assets/circuit-electrique2.png";
import circuit2 from "../../../../assets/circuit2.png";
import tourEiffelImage from "../../../../assets/tour-eiffel.png";
import ampoule from "../../../../assets/ampoule2.png";
import {IoMdSchool} from "react-icons/io";

const Act1et2Electricite = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const contentRef = useRef();
    const [showSummary, setShowSummary] = useState(false);

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
        question8: '',
        question9: '',
        question10: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false,
        question6: false,
        question7: false,
        question8: false,
        question9: false,
        question10: false,
    });

    // Réponses attendues
    const correctAnswers = {
        question1: '12V-21W et 12V-5W. La tension s\'exprime en volts (V) et la puissance en watts (W).',
        question2: '500 mA correspond à une intensité électrique et elle se mesure avec un ampèremètre.',
        question3: 'Schéma avec voltmètre en parallèle et ampèremètre en série',
        question4: 'Tableau complété avec les valeurs mesurées',
        question5: 'C\'est la lampe avec la puissance la plus élevée qui brille le plus.',
        question6: 'P = U × I, avec P : puissance (W) ; U : tension (V) et I : intensité (A).',
        question7: 'Cerise doit vérifier s\'il s\'agit bien de la bonne lampe car une lampe avec une puissance moins élevée éclaire moins.',
        question8: 'La puissance de chaque lampe, le temps de scintillement et le scintillement (allumage aléatoire).',
        question9: 'Oui car les lampes brillent de façon aléatoire ce qui signifie qu\'elles ne fonctionnent pas toutes en même temps.',
        question10: 'En réduisant la puissance électrique et le temps d\'utilisation.',
    };

    // Gestionnaires d'événements
    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };

    const [activeSteps, setActiveSteps] = useState([]);

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

    const toggleStep = (stepNumber) => {
        setActiveSteps((prev) => prev.includes(stepNumber) ? prev.filter((step) => step !== stepNumber) : [...prev, stepNumber]);
    };

    if (className === 'Seconde-electricite-act1') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" id="electricite-content" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Electricite_Puissance_Energie"
                pageCount={2}
                quality="hd"
            />

            {/* PAGE 1 */}
            <div className="print-page" id="page1-start">
                <section className="tp-section compact">

                    <div className="math-chapter-box blue" style={{padding: '10px', marginTop: '-10px'}}>
                        <h3 className="math-chapter-title-test mb-0">Chapitre 1 - Distinguer énergie et puissance
                            électriques</h3>
                    </div>
                    <div className="activity-header mt-0">
                        <span className="activity-badge">ACTIVITÉ 1</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaBolt/> <span>💡</span> « Déterminer une puissance électrique »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <h5 className="mb-3 text-primary fw-bold">
                                    🚗 "Le mystère des phares qui n'éclairent plus assez !"
                                </h5>

                                <p style={{
                                    textAlign: 'justify',
                                    textJustify: 'inter-word',
                                    fontSize: '16px',
                                    lineHeight: '1.4'
                                }}>
                                    <span style={{fontWeight: 'bold', color: '#1976d2'}}>Léa</span> et{' '}
                                    <span style={{fontWeight: 'bold', color: '#1976d2'}}>Thomas</span>, deux amis
                                    passionnés de mécanique,
                                    découvrent différentes lampes dans un coffret correspondant à leur voiture.

                                    <br/>
                                    Ce sont des lampes de tension <span style={{fontWeight: 'bold'}}>12 volts</span> et
                                    dont la puissance est variable <br/>
                                    (<span style={{fontWeight: 'bold'}}> 21 watts</span> et <span
                                    style={{fontWeight: 'bold'}}>5 watts</span>). Léa a remplacé une lampe de sa voiture
                                    mais elle trouve
                                    qu'elle éclaire moins bien qu'avant. Thomas lui propose alors de vérifier la
                                    puissance inscrite sur le culot.

                                    <br/>
                                    <span style={{fontStyle: 'italic', color: '#2e7d32'}}>
                                        "Une puissance électrique différente peut-elle expliquer le problème de Léa ?"
                                      </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0"
                             style={{maxWidth: '250px', cursor: 'pointer', marginTop: '10px'}}>
                            <img
                                src={ampoule}
                                alt="Circuit électrique avec lampes"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(ampoule, 'Circuit électrique')}
                            />
                        </div>
                    </div>

                    <div className="objectif-box" style={{marginTop: '5px', marginBottom: '5px'}}>
                        <div className="objectif-title"><strong style={{color: 'orangered'}}> Objectif :</strong> 🎯
                        </div>
                        <p>Comprendre comment déterminer la puissance électrique d'un dipôle et vérifier
                            expérimentalement
                            la relation entre tension, intensité et puissance.</p>
                    </div>

                    {/* Section S'approprier */}
                    <div className="question-card mt-0">
                        <div className="question-content">
                            <h4 className="vect-title"
                                style={{display: 'inline', marginRight: '10px'}}>
                                <span>S'approprier</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                1. Relever pour les deux lampes les informations présentes sur le culot. Indiquer
                                les unités utilisées pour la tension et la puissance électriques
                                ..........................................................................................................................................
                                ............................................................................................................................................................................................
                            </p>
                        </div>

                        <div className="question-content">
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>Analyser/Raisonner</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>2. Parfois sur le culot des lampes, on
                                trouve ce type d'informations : 12V-500 mA. À
                                quelle grandeur physique correspond la deuxième valeur et avec quel appareil peut-on
                                la
                                mesurer ?....................................
                                ......................................................................................
                                ...............................................................................................................................</p>
                        </div>

                        <div className="question-content">
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>Réaliser</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>3. Compléter le schéma ci-dessous en
                                indiquant le voltmètre et l'ampèremètre.</p>

                            <div className="flex-shrink-0"
                                 style={{
                                     maxWidth: '40%',
                                     cursor: 'pointer',
                                     marginTop: '20px',
                                     marginBottom: '10px',
                                     marginLeft: '28%',
                                 }}>
                                <img
                                    src={circuitImage}
                                    alt="Schéma de circuit à compléter"
                                    className="img-fluid rounded shadow-sm compact-img"
                                    onClick={() => openModal(circuitImage, 'Schéma de circuit')}
                                />
                            </div>

                            <p className="mt-3"><strong>Réaliser le montage et faire les mesures avec chaque
                                lampe.</strong></p>

                            <p>4. Compléter le tableau suivant en précisant l'unité :</p>

                            <table className="table table-bordered text-center shadow-sm">
                                <thead className="table-light">
                                <tr>
                                    <th></th>
                                    <th>Tension électrique U</th>
                                    <th>Intensité électrique I</th>
                                    <th>U × I</th>
                                    <th>Puissance P relevée sur le culot</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><strong>Lampe 1</strong></td>
                                    <td>{showCorrections.question4 ? "12,07 V" : "............."}</td>
                                    <td>{showCorrections.question4 ? "1,73 A" : "............."}</td>
                                    <td>{showCorrections.question4 ? "20,9" : "............."}</td>
                                    <td>{showCorrections.question4 ? "21 W" : "............."}</td>
                                </tr>
                                <tr>
                                    <td><strong>Lampe 2</strong></td>
                                    <td>{showCorrections.question4 ? "12,06 V" : "............."}</td>
                                    <td>{showCorrections.question4 ? "0,39 A" : "............."}</td>
                                    <td>{showCorrections.question4 ? "4,7" : "............."}</td>
                                    <td>{showCorrections.question4 ? "5 W" : "............."}</td>
                                </tr>
                                </tbody>
                            </table>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question4')}
                            >
                                <FaCheck/> {showCorrections.question4 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>

                            <p className="mt-3">5. En regardant les puissances, indiquer la lampe qui brille le
                                plus ...................................................................................
                                ...................................................................................
                                .............................................................................................................</p>

                        </div>

                        <div className="question-content">
                            <h4 className="vect-title" style={{display: 'inline', marginRight: '10px'}}>
                                <span>Valider/Communiquer</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                6. Comparer les deux dernières colonnes
                                et en déduire la relation entre U, I et P.
                                Indiquer pour chaque lettre la grandeur physique et l'unité
                                ........................................................................................................................
                                .........................................................................................................................
                                ...........................................................</p>
                            <p className="mt-3">7. Que dire à Léa ?
                                ...............................................................................................................
                                ..................................................................
                                ...............................................................................................................
                                ................................................................................................................
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* PAGE 2 */}
            <div className="print-page" id="page2-start">
                <section className="tp-section compact">
                    <div className="math-chapter-box blue" style={{padding: '0'}}>
                        <span style={{marginRight: '10px', fontSize: '30px'}}>⚡</span>
                        <h2 className="math-chapter-title-test">Électricité - Énergie électrique</h2>
                    </div>
                    <div className="activity-header">
                        <span className="activity-badge">ACTIVITÉ 2</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaLightbulb/> <span>🌃</span> « Mesurer une énergie électrique »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <p style={{
                                    textAlign: 'justify',
                                    textJustify: 'inter-word',
                                    fontSize: '15px',
                                    lineHeight: '1.4'
                                }}>
                                    🌟 <strong>À la tombée de la nuit et jusqu'à 1 heure du matin</strong>,
                                    la tour Eiffel s'habille et scintille d'une couverture d'or. Au début de chaque
                                    heure et pendant 5 minutes, 20 000 lampes de faible puissance (6 W) s'allument
                                    de façon aléatoire. Depuis 2008, pour des raisons d'économie d'énergie, le temps
                                    de scintillement est passé de 10 à 5 minutes à chaque début d'heure.
                                    <br/> <strong className="text-primary">
                                    Cette diminution du scintillement permet-elle de faire des économies d'énergie ?
                                </strong>
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0"
                             style={{maxWidth: '250px', cursor: 'pointer'}}>
                            <img
                                src={tourEiffelImage}
                                alt="Tour Eiffel illuminée"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(tourEiffelImage, 'Tour Eiffel illuminée')}
                            />
                        </div>

                        <div className="question-content">
                            <h4 className="vect-title"
                                style={{display: 'inline', marginRight: '10px'}}>
                                <span>S'approprier</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                1. Relever les facteurs qui permettent
                                de faire des économies d'énergie pour illuminer la
                                tour Eiffel.
                                ........................................................................................................................
                                ....................................................................................................</p>
                        </div>

                        <div className="question-content mt-0">
                            <h4 className="vect-title"
                                style={{display: 'inline', marginRight: '10px'}}>
                                <span>Réaliser</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                Le joulemètre est un appareil qui
                                regroupe un ampèremètre (branchement en série) et un
                                voltmètre (branchement en dérivation).</p>

                            <div className="flex-shrink-0"
                                 style={{maxWidth: '100%', cursor: 'pointer', marginTop: '20px', marginBottom: '10px'}}>
                                <img
                                    src={circuit2}
                                    alt="Schéma du montage avec joulemètre"
                                    className="img-fluid rounded shadow-sm compact-img"
                                    onClick={() => openModal(circuit2, 'Montage avec joulemètre')}
                                />
                            </div>

                            <p>2. Réaliser le montage et appeler le professeur pour le fonctionnement du joulemètre.</p>

                            <div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '20px'}}>
                                {/* Colonne de texte */}
                                <div style={{flex: '1', minWidth: '300px'}}>
                                    <p>3. Compléter le tableau (3 premières colonnes) en effectuant trois séries de
                                        mesures.
                                        La mesure du temps <InlineMath math="t"/> se fait en trois étapes : mise à zéro,
                                        démarrage et arrêt.</p>

                                    <p>4. Dans la dernière colonne, calculer le produit <InlineMath
                                        math="P \times t"/> en
                                        arrondissant à l'unité.</p>
                                </div>

                                {/* Colonne du tableau */}
                                <div style={{flex: '1', minWidth: '300px'}}>
                                    <table className="table table-bordered text-center shadow-sm"
                                           style={{fontSize: '14px'}}>
                                        <thead className="table-light">
                                        <tr>
                                            <th>Temps <InlineMath math="t"/> (s)</th>
                                            <th>Énergie <InlineMath math="E"/> (J)</th>
                                            <th>Puissance <InlineMath math="P"/> (W)</th>
                                            <th><InlineMath math="P \times t"/></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>.............</td>
                                            <td>.............</td>
                                            <td>.............</td>
                                            <td>.............</td>
                                        </tr>
                                        <tr>
                                            <td>.............</td>
                                            <td>.............</td>
                                            <td>.............</td>
                                            <td>.............</td>
                                        </tr>
                                        <tr>
                                            <td>.............</td>
                                            <td>.............</td>
                                            <td>.............</td>
                                            <td>.............</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="question-content" style={{marginTop: '-2%'}}>
                            <h4 className="vect-title"
                                style={{display: 'inline', marginRight: '10px'}}>
                                <span>Valider</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>5. Comparer <InlineMath
                                math="E"/>, <InlineMath math="P \times t"/>,
                                ....................................</p>

                            <p>6. Préciser les unités de chaque grandeur
                                physique..................................................................
                                ..........................................................</p>

                            <p>7. Pour la tour Eiffel, calculer l'énergie consommée par les lampes en considérant
                                qu'elles fonctionnent de façon continue pendant 5 minutes.
                                ................................................................................
                                .................................................................................</p>
                            <p>8. Une autre unité utilisée pour quantifier l'énergie est le wattheure (Wh).
                                Convertir l'énergie précédente en Wh sachant que <InlineMath
                                    math="1 \, \text{Wh} = 3 600 \, \text{J}"/>.
                                .....................................................................
                                ...................................................................................</p>
                        </div>

                        <div className="question-content" style={{marginTop: '-2%'}}>
                            <h4 className="vect-title"
                                style={{display: 'inline', marginRight: '10px'}}>
                                <span>Communiquer</span>
                            </h4>
                            <p style={{display: 'inline', textAlign: 'justify'}}>
                                9. Le scintillement des lampes
                                permet-il aussi de faire des économies ?
                                ..................................................
                                .............................................................................................
                                ....................................................................................
                                ....................................</p>
                            <p className="mt-3">10. Au niveau de notre logement, comment peut-on réduire l'énergie
                                consommée ? .....................................................................
                                ...........................................................................................................
                                ..........................................................................................................</p>

                        </div>
                    </div>

                </section>
            </div>

            {modalState.show && (<ModalImage
                imageUrl={modalState.imageUrl}
                altText={modalState.altText}
                onClose={closeModal}
            />)}
        </div>
    </>);
};

export default Act1et2Electricite;
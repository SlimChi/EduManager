import React, {useRef, useState} from 'react';
import {FaCheck, FaBalanceScale, FaTree, FaIndustry} from 'react-icons/fa';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import 'katex/dist/katex.min.css';
import {BlockMath, InlineMath} from 'react-katex';
import ModalImage from "../../../../utils/ModalImage";
import hamacImage from "../../../../assets/hamac.png";
import cordeImage from "../../../../assets/hamac2.jpg";
import dynamometreImage from "../../../../assets/dynamo.png";
import masseImage from "../../../../assets/objetforce.png";
import infotriangle from "../../../../assets/infotriangle.png";
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";

const Act2et3ForceMecanique = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const toggleSummary = () => {
        setShowSummary(!showSummary);
    };
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
        question1: [
            {
                action: "Action du palmier de gauche sur le hamac",
                experience: "dynamomètres",
                representation: "1 cm, 0,5 N"
            },
            {action: "Action du palmier de droite sur le hamac", experience: "", representation: ""},
            {action: "Action de Julien sur le hamac", experience: "masse de 100 g", representation: "1 cm, 1 N"}
        ],
        question5: [
            {
                action: "Action du palmier de gauche sur le hamac",
                force: "F_1",
                droite: "oblique",
                sens: "Vers la gauche",
                valeur: "0,7"
            },
            {
                action: "Action du palmier de droite sur le hamac",
                force: "F_2",
                droite: "oblique",
                sens: "Vers la droite",
                valeur: "0,7"
            },
            {action: "Poids de Julien", force: "P", droite: "verticale", sens: "Vers le bas", valeur: "1"}
        ],
        question2: 'La masse marquée symbolise Julien et le solide jaune le hamac',
        question3: 'P = 1 N',
        question4: '0,7 N',
        question6: 'Deux forces agissent sur le hamac pour compenser le poids de Julien',
        question7: 'F1: horizontale, vers la gauche, 1 N\nF2: horizontale, vers la droite, 1 N',
        question8: 'Non, elles ne sont plus horizontales',
        question9: 'Les deux forces doivent avoir la même droite d\'action, la même valeur mais des sens opposés',
        question10: 'Oui, la corde convient car 240 daN = 2400 N > 848,53 N',
    };

    // Gestionnaires d'événements
    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };
    const [activeSteps, setActiveSteps] = useState([]);

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));

        if (!showCorrections[field]) {
            if (field === 'question1') {
                setAnswers(prev => ({...prev, [field]: correctAnswers[field].map(item => item.action).join('\n')}));
            } else if (field === 'question5') {
                setAnswers(prev => ({
                    ...prev, [field]: correctAnswers[field].map(item =>
                        `${item.action} | ${item.force} | ${item.droite} | ${item.sens} | ${item.valeur}`
                    ).join('\n')
                }));
            } else {
                setAnswers(prev => ({...prev, [field]: correctAnswers[field]}));
            }
        } else {
            setAnswers(prev => ({...prev, [field]: ''}));
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

    if (className === 'Seconde-mecanique-act2et3') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }
    const toggleStep = (stepNumber) => {
        setActiveSteps((prev) => prev.includes(stepNumber) ? prev.filter((step) => step !== stepNumber) : [...prev, stepNumber]);
    };
    return (<>
        <BackButton/>
        <div className="tp-container" id="mecanique-content" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Force_Mecanique_Hamac"
                pageCount={2}
                quality="hd"
            />

            {/* PAGE 1 - Activité 3 */}
            <div className="print-page" id="page1-start">
                <section className="tp-section compact mt-0">
                    <div className="activity-header mt-0">
                        <span className="activity-badge mt-0">ACTIVITÉ 3</span>
                        <div className="activity-title mt-0">
                      <span className="course-title mt-0">
                        <FaTree/> <span>🛏️</span> « Faire l'inventaire des actions mécaniques »
                      </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '400px'}}>
                            <div className="renovation-contexte" style={{borderRadius: '10px'}}>
                                <p style={{
                                    textAlign: 'justify',
                                    textJustify: 'inter-word',
                                    fontSize: '16px',
                                    backgroundColor: '#f0f8ff',
                                    padding: '15px',
                                    borderRadius: '10px',
                                    color: '#333',
                                    lineHeight: '1.6',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                                }}>
                                    🏖️ <strong style={{color: '#0077b6'}}>Julien</strong> profite de ses vacances en se
                                    reposant dans un <strong style={{color: '#009688'}}>hamac</strong>.<br/>
                                    🤔 Il se demande comment le hamac, si fin, peut supporter son poids.<br/>
                                    🔍 Pour cela, il fait l'inventaire des <strong style={{color: '#ff6f00'}}>actions
                                    mécaniques</strong> qui s'exercent sur le hamac
                                    et souhaite les représenter sur un schéma pour mieux comprendre.
                                </p>

                            </div>
                            <div className="objectif-box mt-2" style={{marginBottom: '10px'}}>
                                <div className="objectif-title"><strong style={{color: 'orangered'}}> Objectif
                                    :</strong> 🎯
                                </div>
                                <p>Identifier et caractériser les forces qui s'exercent sur un hamac pour comprendre son
                                    équilibre.</p>
                            </div>
                        </div>
                        <div className="flex-shrink-0"
                             style={{maxWidth: '250px', cursor: 'pointer'}}>
                            <img
                                src={hamacImage}
                                alt="Hamac entre deux palmiers"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(hamacImage, 'Hamac entre deux palmiers')}
                            />
                        </div>

                    </div>


                    <div className="question-card mt-0">
                        <div className="question-content mt-0">
                            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                <h4 className="vect-title" style={{margin: 0}}><span>Analyser/Raisonner</span></h4>
                                <p style={{margin: 0}}>
                                    Faire l'inventaire des actions mécaniques qui s'exercent sur le hamac en remplissant
                                    la
                                    première colonne du tableau (remarque : on néglige le poids du hamac par rapport aux
                                    autres forces).
                                </p>
                            </div>

                            <table className="table table-bordered text-center shadow-sm" style={{marginTop: '15px'}}>
                                <thead className="table-light">
                                <tr>
                                    <th>Inventaire des actions mécaniques</th>
                                    <th>Expérience représentant la situation</th>
                                    <th>Représentation des forces</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style={{fontStyle: 'italic'}}>
                                    <td>{showCorrections.question1 ? "Action du palmier de gauche sur le hamac" : "Action du palmier de gauche sur le hamac"}</td>
                                    <td rowSpan="3" style={{padding: '5px', verticalAlign: 'middle'}}>
                                        <img
                                            src={dynamometreImage}
                                            alt="Masse de 100g"
                                            className="img-fluid"
                                            style={{maxHeight: '200px', cursor: 'pointer'}}
                                            onClick={() => openModal(dynamometreImage, 'Masse de 100g')}
                                        />
                                    </td>
                                    <td rowSpan="3" style={{padding: '5px', verticalAlign: 'middle'}}>
                                        <img
                                            src={masseImage}
                                            alt="Dynamomètre"
                                            className="img-fluid"
                                            style={{maxHeight: '50px', cursor: 'pointer'}}
                                            onClick={() => openModal(masseImage, 'Dynamomètre')}
                                        />
                                    </td>
                                </tr>
                                <tr style={{fontStyle: 'italic'}}>
                                    <td>{showCorrections.question1 ? "Action du palmier de droite sur le hamac" : ".........................."}</td>
                                </tr>
                                <tr style={{fontStyle: 'italic'}}>
                                    <td>{showCorrections.question1 ? "Action de Julien sur le hamac" : ".........................."}</td>
                                </tr>
                                </tbody>
                            </table>

                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question1')}
                            >
                                <FaCheck/> {showCorrections.question1 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>

                            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                <h4 className="vect-title" style={{margin: 0}}><span>Réaliser</span></h4>
                                <p style={{margin: 0}}>
                                    Sur le schéma de l'expérience, que représente la masse marquée ? Le solide jaune de
                                    masse
                                    négligeable ?
                                </p>
                            </div>

                            <div className="answer-area">
                                <textarea
                                    className="answer-input"
                                    value={answers.question2}
                                    onChange={(e) => handleInputChange('question2', e.target.value)}
                                    rows={1}
                                />
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('question2')}
                                >
                                    <FaCheck/> {showCorrections.question2 ? 'Masquer la correction' : 'Afficher la correction'}
                                </button>
                            </div>

                            <div style={{display: 'flex', gap: '20px', marginTop: '15px'}}>
                                <div style={{flex: 1}}>
                                    <p>Déterminer le poids de la masse marquée de 100 g :</p>
                                    <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.question3}
                                            onChange={(e) => handleInputChange('question3', e.target.value)}
                                            rows={1}
                                        />
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question3')}
                                        >
                                            <FaCheck/> {showCorrections.question3 ? 'Masquer' : 'Afficher'} correction
                                        </button>
                                    </div>
                                </div>
                                <div style={{flex: 1}}>
                                    <p>Relever les valeurs sur les dynamomètres :</p>
                                    <div className="answer-area">
                                        <textarea
                                            className="answer-input"
                                            value={answers.question4}
                                            onChange={(e) => handleInputChange('question4', e.target.value)}
                                            rows={1}
                                        />
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question4')}
                                        >
                                            <FaCheck/> {showCorrections.question4 ? 'Masquer' : 'Afficher'} correction
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="question-content">
                            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                <h4 className="vect-title" style={{margin: 0}}><span>Valider</span></h4>
                                <p style={{margin: 0}}>
                                    Donner les caractéristiques des trois forces s'exerçant sur le hamac en complétant
                                    le
                                    tableau puis représenter les trois forces en précisant l'échelle utilisée.
                                </p>
                            </div>


                            <table className="table table-bordered text-center shadow-sm" style={{marginTop: '15px'}}>
                                <thead className="table-light">
                                <tr>
                                    <th>Action</th>
                                    <th>Force</th>
                                    <th>Droite d'action</th>
                                    <th>Sens</th>
                                    <th>Valeur (N)</th>
                                </tr>
                                </thead>
                                <tbody>
                                {correctAnswers.question5.map((item, index) => (
                                    <tr key={index} style={{fontStyle: 'italic'}}>
                                        <td>{showCorrections.question5 ? item.action : ".........................."}</td>
                                        <td>{showCorrections.question5 ?
                                            <InlineMath math={item.force}/> : ".........................."}</td>
                                        <td>{showCorrections.question5 ? item.droite : ".........................."}</td>
                                        <td>{showCorrections.question5 ? item.sens : ".........................."}</td>
                                        <td>{showCorrections.question5 ? item.valeur : ".........................."}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question5')}
                            >
                                <FaCheck/> {showCorrections.question5 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>
                            <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginTop: '15px'}}>
                                <h4 className="vect-title" style={{margin: 0}}><span>Communiquer</span></h4>
                                <p style={{margin: 0}}>
                                    Expliquer pourquoi le hamac peut supporter le poids de Julien :
                                </p>
                            </div>

                            <div className="answer-area">
                                <textarea
                                    className="answer-input"
                                    value={answers.question6}
                                    onChange={(e) => handleInputChange('question6', e.target.value)}
                                    rows={1}
                                />
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('question6')}
                                >
                                    <FaCheck/> {showCorrections.question6 ? 'Masquer la correction' : 'Afficher la correction'}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* PAGE 2 - Activité 4 */}
            <div className="print-page" id="page2-start">
                <section className="tp-section compact">
                    <div className="math-chapter-box blue mt-0" style={{padding: '0'}}>
                        <span style={{marginRight: '10px', fontSize: '30px'}}>⚖️</span>
                        <h2 className="math-chapter-title-test">Mécanique - Conditions d'équilibre</h2>
                    </div>
                    <div className="activity-header mt-0">
                        <span className="activity-badge">ACTIVITÉ 4</span>
                        <div className="activity-title">
                      <span className="course-title">
                        <FaIndustry/> <span>🌳</span> « Vérifier les conditions d'équilibre »
                      </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '20px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte" style={{borderRadius: '10px'}}>
                                <p style={{
                                    textAlign: 'justify',
                                    textJustify: 'inter-word',
                                    fontSize: '16px',

                                    borderRadius: '10px',
                                    color: '#333',
                                    lineHeight: '1.6',

                                }}>
                                    🌞 Lorsque <strong style={{color: '#00796b'}}>Julien</strong> rentre de vacances, il
                                    décide d'accrocher son hamac d'intérieur
                                    entre deux arbres de son jardin. Il enlève la structure métallique qui le supporte
                                    et ajoute une corde de chaque côté pour le fixer aux arbres.
                                    🌳 Son père lui propose une corde qui a pour caractéristiques :
                                    <strong style={{color: '#f57c00'}}>diamètre 2 mm</strong> et <strong
                                    style={{color: '#f57c00'}}>résistance 240 daN</strong>.
                                    💭 <strong style={{color: '#d32f2f'}}>Est-ce suffisant pour supporter jusqu'à 120 kg
                                    ?</strong>
                                </p>

                            </div>
                        </div>
                        <div className="flex-shrink-0"
                             style={{maxWidth: '300px', cursor: 'pointer'}}>
                            <img
                                src={cordeImage}
                                alt="Hamac avec corde"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(cordeImage, 'Hamac avec corde')}
                            />
                        </div>
                    </div>

                    <div className="question-card mt-2">
                        <div className="question-content">
                            <div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                                <h4 className="vect-title" style={{margin: 0}}><span>Réaliser</span></h4>
                                <div>
                                    <p style={{margin: 0}}><strong>Expérience 1 : Équilibre d'un solide soumis à deux
                                        forces</strong></p>
                                    <p style={{margin: 0}}>Donner les caractéristiques des deux forces :</p>
                                </div>
                            </div>

                            {/* Remplacement du textarea par un tableau */}
                            <table className="table table-bordered text-center shadow-sm"
                                   style={{marginTop: '15px', width: '100%'}}>
                                <thead className="table-light">
                                <tr>
                                    <th>Force</th>
                                    <th>Droite d’action</th>
                                    <th>Sens</th>
                                    <th>Valeur (N)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style={{fontStyle: 'italic'}}>
                                    <td><InlineMath math="F_1"/></td>
                                    <td>{showCorrections.question7 ? "horizontale" : ".........................."}</td>
                                    <td>{showCorrections.question7 ? "vers la gauche" : ".........................."}</td>
                                    <td>{showCorrections.question7 ? "1" : ".........................."}</td>
                                </tr>
                                <tr style={{fontStyle: 'italic'}}>
                                    <td><InlineMath math="F_2"/></td>
                                    <td>{showCorrections.question7 ? "horizontale" : ".........................."}</td>
                                    <td>{showCorrections.question7 ? "vers la droite" : ".........................."}</td>
                                    <td>{showCorrections.question7 ? "1" : ".........................."}</td>
                                </tr>
                                </tbody>
                            </table>

                            <button
                                className="correction-btnoptic"
                                onClick={() => toggleCorrection('question7')}
                            >
                                <FaCheck/> {showCorrections.question7 ? 'Masquer la correction' : 'Afficher la correction'}
                            </button>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                gap: '20px',
                                marginTop: '15px'
                            }}>
                                {/* Bloc texte + champ réponse */}
                                <div style={{flex: 1}}>
                                    <p style={{margin: 0}}>
                                        <strong>Expérience 2 : Équilibre d'un solide soumis à trois forces</strong>
                                    </p>
                                    <p>Les deux forces sont-elles toujours horizontales ?</p>
                                    <div className="answer-area">
                                            <textarea
                                                className="answer-input"
                                                value={answers.question8}
                                                onChange={(e) => handleInputChange('question8', e.target.value)}
                                                rows={1}
                                            />
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question8')}
                                        >
                                            <FaCheck/> {showCorrections.question8 ? 'Masquer' : 'Afficher'} correction
                                        </button>
                                    </div>
                                    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                        <h4 className="vect-title" style={{margin: 0}}><span>Valider</span></h4>
                                        <p style={{margin: 0}}>
                                            Donner les conditions pour qu'un solide soumis à deux forces soit en
                                            équilibre :
                                        </p>
                                    </div>

                                    <div className="answer-area">
                                <textarea
                                    className="answer-input"
                                    value={answers.question9}
                                    onChange={(e) => handleInputChange('question9', e.target.value)}
                                    rows={2}
                                />
                                        <button
                                            className="correction-btnoptic"
                                            onClick={() => toggleCorrection('question9')}
                                        >
                                            <FaCheck/> {showCorrections.question9 ? 'Masquer la correction' : 'Afficher la correction'}
                                        </button>
                                    </div>
                                </div>

                                {/* Image à droite */}
                                <div>
                                    <img
                                        src={infotriangle} // remplace par ta variable ou le chemin de ton image
                                        alt="Équilibre"
                                        style={{maxWidth: '150px', height: 'auto', cursor: 'pointer'}}
                                        onClick={() => openModal(infotriangle, 'Équilibre')}
                                    />
                                </div>
                            </div>


                            <p>La force exercée par la corde sur le hamac est égale à 843,53 N. Indiquer si la
                                corde proposée convient :</p>
                            <div className="answer-area">
                                <textarea
                                    className="answer-input"
                                    value={answers.question10}
                                    onChange={(e) => handleInputChange('question10', e.target.value)}
                                    rows={1}
                                />
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('question10')}
                                >
                                    <FaCheck/> {showCorrections.question10 ? 'Masquer la correction' : 'Afficher la correction'}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div style={{padding: '20px', marginTop: '20px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h3>📌 À retenir</h3>
                            <button
                                className="correction-btn"
                                onClick={() => toggleStep(1)}
                                style={{marginLeft: '10px'}}
                            >
                                {activeSteps.includes(1) ? 'Masquer' : 'Afficher'} les informations
                            </button>
                        </div>

                        <div className="vector-summary-container">
                            {activeSteps.includes(1) ? (<div className="vector-cards-grid">
                                <div className="vector-card">
                                    <h4 style={{marginBottom: '0.5rem'}}>⚖️ Conditions d'équilibre</h4>
                                    <ul style={{marginLeft: '1rem', marginBottom: '1rem'}}>
                                        <li><strong>2 forces</strong>: même droite d'action, même valeur, sens opposés
                                        </li>
                                        <li><strong>3 forces</strong>: dynamique des forces fermé (triangle)</li>
                                    </ul>
                                </div>
                                <div className="vector-card">
                                    <h4 style={{marginBottom: '0.5rem'}}>📏 Conversion d'unités</h4>
                                    <p style={{marginBottom: '0.3rem'}}><InlineMath
                                        math="1\,\text{daN} = 10\,\text{N}"/></p>
                                    <p style={{fontSize: '0.95rem', color: '#555'}}>
                                        Pour vérifier si une corde convient, comparer la résistance à la force exercée
                                    </p>
                                </div>
                            </div>) : (<div className="vector-cards-grid" style={{marginTop: '-20px'}}>
                                <div className="vector-card" style={{
                                    border: '2px dashed #ccc', minHeight: '180px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'
                                }}>
                                </div>
                                <div className="vector-card" style={{
                                    border: '2px dashed #ccc', minHeight: '180px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'
                                }}>
                                </div>
                            </div>)}
                        </div>
                    </div>

                    <footer className="tp-footer">
                        <p>S.CHIHATI - Conditions d'équilibre d'un solide</p>
                    </footer>
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

export default Act2et3ForceMecanique;
import React, {useRef, useState} from 'react';
import {FaCheck, FaUserNurse, FaHandHoldingHeart, FaFirstAid, FaUtensils, FaBed} from 'react-icons/fa';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import ModalImage from "../../../../utils/ModalImage";
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";

// Images
import soinsImage from "../../../../assets/soin-assp.png";
import repasImage from "../../../../assets/soin-assp.png";
import hygieneImage from "../../../../assets/soin-assp.png";

const PremierCoursASSP = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const contentRef = useRef();

    // États pour les réponses
    const [selectedAnswers, setSelectedAnswers] = useState({
        q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', q9: '', q10: '', q11: '', q12: ''
    });

    const [showCorrections, setShowCorrections] = useState(false);

    // Questions et réponses spécifiques ASSP
    const qcmData = {
        title: "Les fondamentaux du métier d'ASSP",
        questions: [
            {
                id: 1,
                question: "Que signifie le sigle ASSP ?",
                options: [
                    "Accueil, Services et Soins Personnalisés",
                    "Accompagnement, Soins et Services à la Personne",
                    "Aide et Soutien aux Services Publics",
                    "Assistance Sociale et Sanitaire Professionnelle"
                ],
                correctAnswer: 1,
                explanation: "ASSP = Accompagnement, Soins et Services à la Personne. Ce métier consiste à accompagner les personnes dans les actes de la vie quotidienne."
            },
            {
                id: 2,
                question: "Quelle est la principale mission d'un professionnel ASSP ?",
                options: [
                    "Réaliser des diagnostics médicaux",
                    "Accompagner les personnes dans les actes de la vie quotidienne",
                    "Prescrire des médicaments",
                    "Diriger une équipe médicale"
                ],
                correctAnswer: 1,
                explanation: "L'ASSP accompagne les personnes dans les actes essentiels de la vie quotidienne (toilette, repas, déplacement, habillage)."
            },
            {
                id: 3,
                question: "Quelle attitude est primordiale dans la relation avec la personne aidée en ASSP ?",
                options: [
                    "L'autorité",
                    "L'empathie et la bienveillance",
                    "La distance professionnelle excessive",
                    "La rapidité d'exécution"
                ],
                correctAnswer: 1,
                explanation: "L'empathie permet de comprendre les besoins et ressentis de la personne aidée, essentiel en ASSP."
            },
            {
                id: 4,
                question: "Quel est le geste essentiel pour prévenir les infections en milieu ASSP ?",
                options: [
                    "Se laver les mains rapidement",
                    "Utiliser une solution hydroalcoolique avant et après chaque soin",
                    "Porter des gants en toutes circonstances",
                    "Éternuer dans ses mains"
                ],
                correctAnswer: 1,
                explanation: "L'hygiène des mains est la mesure la plus importante pour prévenir la transmission des infections."
            },
            {
                id: 5,
                question: "Que signifie la notion de 'bientraitance' en ASSP ?",
                options: [
                    "Traiter les personnes avec rapidité",
                    "Traiter les personnes avec bienveillance, respect et dignité",
                    "Donner beaucoup de traitements médicaux",
                    "Être très strict avec les patients"
                ],
                correctAnswer: 1,
                explanation: "La bientraitance implique le respect de la dignité, des droits et du bien-être de la personne."
            },
            {
                id: 6,
                question: "Quelle est la température idéale pour la toilette d'une personne âgée ?",
                options: [
                    "25-30°C",
                    "37-40°C",
                    "45-50°C",
                    "20-25°C"
                ],
                correctAnswer: 1,
                explanation: "37-40°C est la température corporelle normale, confortable et sans danger pour les soins d'hygiène."
            },
            {
                id: 7,
                question: "Que faire face à une personne qui tombe ?",
                options: [
                    "La relever immédiatement",
                    "Appeler à l'aide et évaluer l'état de la personne avant tout déplacement",
                    "Donner à boire tout de suite",
                    "Attendre qu'elle se relève seule"
                ],
                correctAnswer: 1,
                explanation: "Il faut d'abord évaluer l'état de la personne et éviter tout mouvement pouvant aggraver d'éventuelles blessures."
            },
            {
                id: 8,
                question: "Qu'est-ce que le secret professionnel en ASSP ?",
                options: [
                    "Le droit de tout dire à sa famille",
                    "L'obligation de confidentialité absolue sur les informations concernant les personnes aidées",
                    "La possibilité de discuter entre collègues des patients",
                    "Une option facultative"
                ],
                correctAnswer: 1,
                explanation: "Le secret professionnel est une obligation légale et déontologique fondamentale en ASSP."
            },
            {
                id: 9,
                question: "Comment adapter la communication avec une personne malentendante ?",
                options: [
                    "Crier très fort",
                    "Parler distinctement en face de la personne avec un débit modéré",
                    "Chuchoter à l'oreille",
                    "Éviter de communiquer"
                ],
                correctAnswer: 1,
                explanation: "Parler face à la personne permet la lecture labiale et une meilleure compréhension."
            },
            {
                id: 10,
                question: "Quel équipement est essentiel pour prévenir les escarres chez une personne alitée ?",
                options: [
                    "Des draps en soie",
                    "Un matelas à air anti-escarres et des changes réguliers de position",
                    "Un oreiller très mou",
                    "Une couverture épaisse"
                ],
                correctAnswer: 1,
                explanation: "Le matelas anti-escarres et la mobilisation régulière sont essentiels pour prévenir les lésions cutanées."
            },
            {
                id: 11,
                question: "Quelle est la règle d'hygiène alimentaire la plus importante en ASSP ?",
                options: [
                    "Servir uniquement des produits bio",
                    "Respecter la chaîne du froid et l'hygiène des mains lors de la manipulation des aliments",
                    "Nettoyer la cuisine une fois par semaine",
                    "Servir les repas très chauds"
                ],
                correctAnswer: 1,
                explanation: "Le respect de la chaîne du froid et l'hygiène des mains sont cruciaux pour prévenir les toxi-infections alimentaires."
            },
            {
                id: 12,
                question: "Quel est le rôle principal de l'ASSP dans l'aide aux repas ?",
                options: [
                    "Forcer la personne à manger",
                    "Adapter l'alimentation aux besoins et capacités de la personne, tout en favorisant son autonomie",
                    "Choisir à sa place ce qu'elle doit manger",
                    "Servir rapidement pour gagner du temps"
                ],
                correctAnswer: 1,
                explanation: "L'ASSP adapte l'aide aux besoins spécifiques de la personne tout en respectant ses goûts et en encourageant son autonomie."
            }
        ]
    };

    const [modalState, setModalState] = useState({show: false, imageUrl: '', altText: ''});
    const openModal = (imageUrl, altText) => setModalState({show: true, imageUrl, altText});
    const closeModal = () => setModalState((prev) => ({...prev, show: false}));

    const handleAnswerSelect = (questionId, answerIndex) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [`q${questionId}`]: answerIndex
        }));
    };

    const toggleCorrections = () => {
        setShowCorrections(!showCorrections);
    };

    const calculateScore = () => {
        return qcmData.questions.filter(q => selectedAnswers[`q${q.id}`] === q.correctAnswer).length;
    };

    if (className === 'Seconde-ASSP') {
        return <div>Ce cours n'est pas disponible pour cette classe.</div>;
    }

    // Diviser les questions en 3 groupes pour les 3 pages
    const questionGroups = [
        qcmData.questions.slice(0, 6),   // Questions 1-6
        qcmData.questions.slice(6, 12),   // Questions 6-12
        qcmData.questions.slice(8, 12)   // Questions 9-12
    ];

    return (<>
        <BackButton/>
        <div className="tp-container" id="assp-content" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Premier_Cours_ASSP"
                pageCount={3}
                quality="hd"
            />

            {/* PAGE 1 */}
            <div className="print-page">
                <section className="tp-section compact">
                    <div className="math-chapter-box blue"
                         style={{padding: '10px', marginTop: '-10px', backgroundColor: '#e3f2fd'}}>
                        <h3 className="math-chapter-title-test mb-0">Premier Cours - Bac Pro ASSP</h3>
                    </div>

                    <div className="activity-header mt-0">
                        <span className="activity-badge" style={{backgroundColor: '#1976d2'}}>QCM</span>
                        <div className="activity-title">
                            <span className="course-title">
                                <FaUserNurse/> <span>👵</span> « Les fondamentaux du métier ASSP »
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '15px', marginBottom: '15px'}}>
                        <div style={{flex: 1, minWidth: '250px'}}>
                            <div className="renovation-contexte">
                                <h5 className="mb-2 text-primary fw-bold">💡 Testez vos connaissances ASSP !</h5>
                                <p style={{textAlign: 'justify', fontSize: '14px', lineHeight: '1.3', margin: 0}}>
                                    Accompagnement, Soins et Services à la Personne - Découvrez les bases essentielles
                                    de ce métier passionnant au service des autres.
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0" style={{maxWidth: '150px', cursor: 'pointer'}}>
                            <img src={soinsImage} alt="Soins ASSP" className="img-fluid rounded shadow-sm"
                                 onClick={() => openModal(soinsImage, 'Soins en ASSP')} style={{maxHeight: '100px'}}/>
                        </div>
                    </div>

                    <div className="objectif-box" style={{margin: '8px 0', padding: '8px', backgroundColor: '#f3e5f5'}}>
                        <div className="objectif-title"><strong style={{color: '#7b1fa2'}}>Objectif :</strong> 🎯</div>
                        <p style={{margin: 0, fontSize: '13px'}}>Découvrir les principes fondamentaux du métier d'ASSP
                            et les gestes professionnels essentiels.</p>
                    </div>

                    {/* QCM Page 1 - Questions 1-4 */}
                    <div style={{padding: '10px'}}>
                        <h4 className="text-center mb-3" style={{color: '#1976d2', fontSize: '16px'}}>
                            <FaHandHoldingHeart style={{marginRight: '8px'}}/>
                            {qcmData.title}
                        </h4>

                        <div className="row g-2">
                            {questionGroups[0].map((q) => (
                                <div key={q.id} className="col-md-6">
                                    <div className="qcm-item" style={{
                                        marginBottom: '15px',
                                        padding: '12px',
                                        backgroundColor: '#ffffff',
                                        borderRadius: '8px',
                                        border: '1px solid #e0e0e0',
                                        height: '100%'
                                    }}>
                                        <p style={{
                                            fontWeight: '600',
                                            marginBottom: '12px',
                                            color: '#333',
                                            fontSize: '14px'
                                        }}>
                                            <span style={{color: '#1976d2'}}>Q{q.id} : </span>
                                            {q.question}
                                        </p>

                                        <div className="qcm-options">
                                            {q.options.map((option, optIndex) => (
                                                <label key={optIndex} className="qcm-option-label" style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    padding: '8px 10px',
                                                    marginBottom: '6px',
                                                    borderRadius: '6px',
                                                    backgroundColor: selectedAnswers[`q${q.id}`] === optIndex ? '#e3f2fd' : '#fff',
                                                    border: `1px solid ${selectedAnswers[`q${q.id}`] === optIndex ? '#1976d2' : '#ddd'}`,
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s ease',
                                                    fontSize: '13px'
                                                }}>
                                                    <input
                                                        type="radio"
                                                        name={`question-${q.id}`}
                                                        checked={selectedAnswers[`q${q.id}`] === optIndex}
                                                        onChange={() => handleAnswerSelect(q.id, optIndex)}
                                                        style={{marginRight: '8px', transform: 'scale(1.1)'}}
                                                    />
                                                    <span style={{flex: 1}}>{option}</span>
                                                </label>
                                            ))}
                                        </div>

                                        {showCorrections && (
                                            <div className="correction-box" style={{
                                                marginTop: '10px',
                                                padding: '8px',
                                                backgroundColor: selectedAnswers[`q${q.id}`] === q.correctAnswer ? '#e8f5e9' : '#ffebee',
                                                borderLeft: `3px solid ${selectedAnswers[`q${q.id}`] === q.correctAnswer ? '#4caf50' : '#f44336'}`,
                                                borderRadius: '4px',
                                                fontSize: '12px'
                                            }}>
                                                <strong style={{fontSize: '12px'}}>
                                                    {selectedAnswers[`q${q.id}`] === q.correctAnswer ? '✓ Bonne réponse' : '✗ Correction'}
                                                </strong>
                                                <p style={{margin: '5px 0 0 0', fontSize: '12px'}}>{q.explanation}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* PAGE 2 */}
            <div className="print-page">
                <section className="tp-section compact">
                    {/* QCM Page 2 - Questions 5-8 */}
                    <div style={{padding: '10px'}}>
                        <div className="row g-2">
                            {questionGroups[1].map((q) => (
                                <div key={q.id} className="col-md-6">
                                    <div className="qcm-item" style={{
                                        marginBottom: '15px',
                                        padding: '12px',
                                        backgroundColor: '#ffffff',
                                        borderRadius: '8px',
                                        border: '1px solid #e0e0e0',
                                        height: '100%'
                                    }}>
                                        <p style={{
                                            fontWeight: '600',
                                            marginBottom: '12px',
                                            color: '#333',
                                            fontSize: '14px'
                                        }}>
                                            <span style={{color: '#1976d2'}}>Q{q.id} : </span>
                                            {q.question}
                                        </p>

                                        <div className="qcm-options">
                                            {q.options.map((option, optIndex) => (
                                                <label key={optIndex} className="qcm-option-label" style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    padding: '8px 10px',
                                                    marginBottom: '6px',
                                                    borderRadius: '6px',
                                                    backgroundColor: selectedAnswers[`q${q.id}`] === optIndex ? '#e3f2fd' : '#fff',
                                                    border: `1px solid ${selectedAnswers[`q${q.id}`] === optIndex ? '#1976d2' : '#ddd'}`,
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s ease',
                                                    fontSize: '13px'
                                                }}>
                                                    <input
                                                        type="radio"
                                                        name={`question-${q.id}`}
                                                        checked={selectedAnswers[`q${q.id}`] === optIndex}
                                                        onChange={() => handleAnswerSelect(q.id, optIndex)}
                                                        style={{marginRight: '8px', transform: 'scale(1.1)'}}
                                                    />
                                                    <span style={{flex: 1}}>{option}</span>
                                                </label>
                                            ))}
                                        </div>

                                        {showCorrections && (
                                            <div className="correction-box" style={{
                                                marginTop: '10px',
                                                padding: '8px',
                                                backgroundColor: selectedAnswers[`q${q.id}`] === q.correctAnswer ? '#e8f5e9' : '#ffebee',
                                                borderLeft: `3px solid ${selectedAnswers[`q${q.id}`] === q.correctAnswer ? '#4caf50' : '#f44336'}`,
                                                borderRadius: '4px',
                                                fontSize: '12px'
                                            }}>
                                                <strong style={{fontSize: '12px'}}>
                                                    {selectedAnswers[`q${q.id}`] === q.correctAnswer ? '✓ Bonne réponse' : '✗ Correction'}
                                                </strong>
                                                <p style={{margin: '5px 0 0 0', fontSize: '12px'}}>{q.explanation}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {modalState.show && (
                <ModalImage imageUrl={modalState.imageUrl} altText={modalState.altText} onClose={closeModal}/>)}
        </div>

        <style jsx>{`
          .qcm-option-label:hover {
            background-color: #f5f5f5 !important;
            transform: translateY(-1px);
          }

          .correction-btn:hover {
            background-color: #1565c0 !important;
            transform: translateY(-1px);
          }
        `}</style>
    </>);
};

export default PremierCoursASSP;
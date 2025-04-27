import React, {useRef, useState} from 'react';
import {FaPrint, FaCheck, FaDice, FaChartLine, FaHome, FaBullseye} from 'react-icons/fa';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import {IoMdSchool} from 'react-icons/io';
import '../../../../../styles/act1proba.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../../components/navigation/BackButton';
import ModalImage from '../../../../../utils/ModalImage';
import PrintManager from '../../../../../utils/PrintManager';
import Automatismes from '../../../../../config/Automatismes';
import lancerDe from '../../../../../assets/lancerDe.png';
import '../../../../../styles/act1proba-print.css';
import {FcSalesPerformance} from 'react-icons/fc';
import AutoEvaluationGrid from "../../../../../config/AutoEvaluationGrid";

const Act2Proba = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [showConclusion, setShowConclusion] = useState(false);

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        question1a: '',
        question1b: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
        question8: '',
        question9: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        question1a: false,
        question1b: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false,
        question6: false,
        question7: false,
        question8: false,
        question9: false,
    });

    // Réponses attendues
    const correctAnswers = {
        question1a: '2 ; 3 ; 4 ; 5 ; 6 ; 7 ; 8 ; 9 ; 10 ; 11 ; 12.',
        question1b:
            'On divise le nombre de 12 obtenus dans la colonne E par le nombre de lancers obtenus dans la colonne A.',
        question2: 'Le contenu des cellules change, la forme du graphique aussi.',
        question3: 'Vers 0,025.',
        question4: 'Saisir =I2 dans la cellule J2.',
        question5: 'Saisir =J2+I3 dans la cellule J3.',
        question6:
            'Saisir =J2/A2 dans la cellule K2 et recopier dans la cellule K3.',
        question7:
            "Sélectionnez les cellules J3 et K3 et recopiez-les jusqu'à la ligne 1201.",
        question8: 'Vers 0,08.',
        question9:
            "Oui c'est normal. L'estimation de la probabilité d'obtenir 12 avec 1 dé à 12 faces est supérieure à l'estimation de la probabilité d'obtenir 12 avec 2 dés cubiques.",
    };

    const [modalState, setModalState] = useState({
        show: false,
        imageUrl: '',
        altText: '',
    });

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState((prev) => ({...prev, show: false}));
    };

    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));

        if (!answers[field] && !showCorrections[field]) {
            setAnswers((prev) => ({...prev, [field]: correctAnswers[field]}));
        }
    };

    const contentRef = useRef();
    if (className === 'Seconde-pythagore') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>
            <div
                className="tp-container act1-container"
                id="proba-content"
                ref={contentRef}
            >
                <PrintManager
                    contentRef={contentRef}
                    activityName="Proba_Des"
                    pageCount={4}
                    quality="hd"
                />
                {/* Page 1 - En-tête et introduction */}
                <div className="print-page">
                    <header className="tp-header">
                        <IoMdSchool className="header-icon"/>
                        <h1>Probabilités avec dés - Classe 2nde Mathématiques</h1>
                    </header>

                    <div className="math-chapter-box blue">
                        <FaDice className="math-chapter-icon"/>
                        <h2 className="math-chapter-title-test">
                            Le Défi des Champions : Lancer de Dés
                        </h2>
                        <span
                            className="emoji"
                            style={{fontSize: '30px', marginLeft: '15px'}}
                        >
              🎲
            </span>
                    </div>

                    <div className="activity-header">
                        <span className="activity-badge">ACTIVITÉ 2</span>
                        <div className="activity-title">
              <span className="course-title">
                <FaDice/>{' '}
                  <span className="emoji">
                  <FaDice/>
                </span>{' '}
                  Le défi des champions
              </span>
                        </div>
                    </div>

                    <div
                        className="d-flex align-items-start flex-wrap"
                        style={{gap: '20px', width: '100%'}}
                    >
                        <div style={{flex: 1}}>
                            <div className="renovation-contexte">
                                <p style={{fontSize: '16px', color: '#2c3e50'}}>
                                    🎯 <strong>Slimane</strong> et <strong>Samy</strong> participent à un tournoi de jeux
                                    de stratégie !
                                    Leur objectif : atteindre exactement <span
                                    style={{color: '#e74c3c', fontWeight: 'bold'}}>21 points</span> en un seul lancer
                                    pour décrocher le <strong>🏆 bonus spécial</strong>.
                                </p>

                                <p style={{fontSize: '16px', color: '#2c3e50'}}>
                                    🎲 <strong>Slimane</strong> lance <strong>deux dés cubiques</strong> (faces
                                    numérotées de <strong>1 à 6</strong>).
                                    <br/>
                                    🎲 <strong>Samy</strong> utilise un <strong>dé à 12 faces</strong> numérotées
                                    de <strong>1 à 12</strong>.
                                </p>
                            </div>
                            <div className="problem-box" style={{marginTop: '10px'}}>
                                <div className="d-flex align-items-center mb-2">
                                    <FaBullseye size={24} style={{color: '#3498db', marginRight: '10px'}}/>
                                    <h3 className="mb-0">Objectif :</h3>
                                </div>

                                <p style={{fontSize: '16px', color: '#2c3e50'}}>
                                    🎯 Déterminer si <strong>Samy</strong> a plus de chances
                                    que <strong>Slimane</strong> de gagner le <strong>bonus spécial</strong> 🏆.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex-shrink-0"
                            style={{
                                maxWidth: '280px',
                                cursor: 'pointer',
                                marginTop: '10px',
                            }}
                        >
                            <img
                                src={lancerDe}
                                alt="Lancer de Dés"
                                className="img-fluid rounded shadow-sm compact-img"
                                onClick={() => openModal(lancerDe, 'Lancer de Dés')}
                            />
                        </div>
                    </div>

                    {/* Section 1 - Dés cubiques */}
                    <section className="tp-section compact print-section">
                        <h3 className="compact-title">
                            <FaDice/> Lancers de deux dés cubiques
                        </h3>
                        <div className="d-flex align-items-start gap-3">
                            <div className="flex-grow-1 compact-content">
                                <p className="compact-paragraph">
                                    1. Ouvrez le fichier « <strong>C03_41_des.xlsx</strong> ». On
                                    a simulé dans les colonnes <strong>B, C, D, E</strong> le
                                    lancer de deux dés cubiques.
                                </p>

                                <Question
                                    id="question1a"
                                    text="a. Donnez les valeurs possibles pour la somme des résultats des deux dés."
                                    answer={answers.question1a}
                                    showCorrection={showCorrections.question1a}
                                    onChange={handleInputChange}
                                    onToggleCorrection={toggleCorrection}
                                    className="compact-question"
                                />
                                <Question
                                    id="question1b"
                                    text="b. Comment obtient-on les fréquences de 12 dans la colonne F ?"
                                    answer={answers.question1b}
                                    showCorrection={showCorrections.question1b}
                                    onChange={handleInputChange}
                                    onToggleCorrection={toggleCorrection}
                                    textarea
                                    className="compact-question"
                                />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Page 2 - Suite de l'activité */}
                <div className="print-page" id="page2-start">
                    <section className="tp-section compact print-section">
                        <Question
                            id="question3"
                            text="3. Vers quelle valeur semble se stabiliser la fréquence ?"
                            answer={answers.question3}
                            showCorrection={showCorrections.question3}
                            onChange={handleInputChange}
                            onToggleCorrection={toggleCorrection}
                            className="compact-question"
                        />
                        <div className="info-bubble definition compact-info">
                            <div className="info-bubble-title">
                                <BsFillQuestionCircleFill/> Définition
                            </div>
                            <p>
                                Ce résultat est une estimation de la probabilité d'obtenir 12
                                avec 2 dés tétraédriques.
                            </p>
                        </div>
                        <h3 className="compact-title">
                            <FaDice/> Lancers d'un dé octaédrique
                        </h3>
                        <div className="d-flex align-items-start gap-3">
                            <div className="flex-grow-1">
                                <p>
                                    Dans la colonne H, on a simulé le lancer d'un dé à 12 faces.
                                    Dans la colonne I, la sortie de la face 12 se traduit par 1 et
                                    on a 0 dans tous les autres cas.
                                </p>

                                <section className="tp-section compact print-section" style={{padding: '5px 0'}}>
                                    <Question
                                        id="question4"
                                        text="4. Dans la colonne J, on compte le nombre de sorties de la face 8. Pour cela :"
                                        answer={answers.question4}
                                        showCorrection={showCorrections.question4}
                                        onChange={handleInputChange}
                                        onToggleCorrection={toggleCorrection}
                                        style={{marginBottom: '8px'}}
                                    />

                                    <Question
                                        id="question5"
                                        text="5. Dans la colonne K, on calcule la fréquence de sortie de la face 8. Pour cela :"
                                        answer={answers.question5}
                                        showCorrection={showCorrections.question5}
                                        onChange={handleInputChange}
                                        onToggleCorrection={toggleCorrection}
                                        style={{marginBottom: '8px'}}
                                    />
                                </section>
                                <Question
                                    id="question6"
                                    text="6. Que faut-il faire ensuite ?"
                                    answer={answers.question6}
                                    showCorrection={showCorrections.question6}
                                    onChange={handleInputChange}
                                    onToggleCorrection={toggleCorrection}
                                />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Conclusion */}
                <div className="print-page" id="page3-start">
                    <section className="tp-section compact print-section">
                        <Question
                            id="question7"
                            text="7. Comment créer le nuage de points représentant la fréquence de 8 ?"
                            answer={answers.question7}
                            showCorrection={showCorrections.question7}
                            onChange={handleInputChange}
                            onToggleCorrection={toggleCorrection}
                            textarea
                        />
                        <Question
                            id="question8"
                            text="8. Vers quelle valeur semble se stabiliser la fréquence ?"
                            answer={answers.question8}
                            showCorrection={showCorrections.question8}
                            onChange={handleInputChange}
                            onToggleCorrection={toggleCorrection}
                        />
                        <div className="info-bubble definition">
                            <div className="info-bubble-title">
                                <BsFillQuestionCircleFill/> Définition
                            </div>
                            <p>
                                Ce résultat est une estimation de la probabilité d'obtenir 8
                                avec un dé octaédrique.
                            </p>
                        </div>

                        <h3 className="compact-title">
                            <BsFillQuestionCircleFill/> Conclusion
                        </h3>
                        <div className="d-flex align-items-start gap-3">
                            <div className="flex-grow-1">
                                <Question
                                    id="question9"
                                    text="9. L'estimation de la probabilité d'obtenir 12 avec un dé à 12 faces est-elle supérieure à celle avec deux dés cubiques ? Est-ce normal ?"
                                    answer={answers.question9}
                                    showCorrection={showCorrections.question9}
                                    onChange={handleInputChange}
                                    onToggleCorrection={toggleCorrection}
                                    textarea
                                />

                                <div className="info-bubble property">
                                    <div className="info-bubble-title">
                                        <FaChartLine/> Propriété
                                    </div>
                                    <p>
                                        La probabilité théorique d'obtenir 12 avec deux dés
                                        tétraédriques est très faible (seulement possible avec deux
                                        4), alors qu'elle est de 1/8 (0,125) avec un dé octaédrique.
                                        Cette différence explique pourquoi Samy a effectivement plus
                                        de chances de gagner le bonus spécial.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="print-page" id="page4-start">
                        <AutoEvaluationGrid/>
                    </div>
                </div>
                <footer className="tp-footer compact">
                    <p className="compact-text">Mathématiques 2nde - Probabilités</p>
                    <p className="compact-text">TUTO: Estimation de probabilités</p>
                </footer>
            </div>

            {modalState.show && (
                <ModalImage
                    imageUrl={modalState.imageUrl}
                    altText={modalState.altText}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

const Question = ({
                      id,
                      text,
                      answer,
                      showCorrection,
                      onChange,
                      onToggleCorrection,
                      textarea = false,
                      className = '',
                  }) => (
    <div className={`question compact ${className}`} style={{marginBottom: '12px'}}>
        {text && <p className="compact-text" style={{marginBottom: '5px'}}>{text}</p>}
        <div className="answer-container compact" style={{margin: '5px 0'}}>
            {textarea ? (
                <textarea
                    className={`answer-input compact ${showCorrection ? 'correction-active' : ''}`}
                    rows={3}
                    value={answer}
                    onChange={(e) => onChange(id, e.target.value)}
                    style={{marginBottom: '5px'}}
                />
            ) : (
                <input
                    type="text"
                    className={`answer-input compact ${showCorrection ? 'correction-active' : ''}`}
                    value={answer}
                    onChange={(e) => onChange(id, e.target.value)}
                    style={{marginBottom: '5px'}}
                />
            )}
        </div>
        <button
            className="correction-btnoptic compact no-print"
            onClick={() => onToggleCorrection(id)}
            style={{margin: '5px 0'}}
        >
            <FaCheck/> Correction
        </button>
    </div>
);

export default Act2Proba;

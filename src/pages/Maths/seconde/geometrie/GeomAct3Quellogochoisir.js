import React, {useRef, useState} from 'react';
import {
    FaPrint,
    FaCheck,
    FaRuler,
    FaDrawPolygon,
    FaHome,
} from 'react-icons/fa';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import {IoMdSchool} from 'react-icons/io';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import cercleGeoImage from '../../../../assets/cerclegeo.png';
import ModalImage from '../../../../utils/ModalImage';
import cuisine from '../../../../assets/cuisine.png';
import logo from '../../../../assets/logo.jpg';
import PrintManager from '../../../../utils/PrintManager';
import Automatismes from '../../../../config/Automatismes';

const GeomAct3Quellogochoisir = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false,
        question6: false,
    });

    // État pour le modal
    const [modalState, setModalState] = useState({
        show: false,
        imageUrl: '',
        altText: '',
    });

    // Réponses attendues
    const correctAnswers = {
        question1: 'AB est le diamètre du cercle.',
        question2:
            'Les mesures des angles B et C sont égales dans un triangle isocèle.',
        question3: 'Les trois angles mesurent 60° dans un triangle équilatéral.',
        question4: 'Le triangle doit être rectangle et isocèle.',
        question5:
            'Un triangle rectangle est inscrit dans un cercle lorsque ses sommets sont des points du cercle. Le cercle est alors circonscrit au triangle.',
        question6: 'Un triangle rectangle est inscrit dans un demi-cercle.',
    };

    // Gestionnaires d'événements
    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));

        if (!answers[field] && !showCorrections[field]) {
            setAnswers((prev) => ({...prev, [field]: correctAnswers[field]}));
        }
    };

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState((prev) => ({...prev, show: false}));
    };

    const contentRef = useRef();
    if (className === 'Seconde-pythagore') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>
            <div className="tp-container" id="pythagore-content" ref={contentRef}>
                {/* Page 1 */}
                <PrintManager
                    contentRef={contentRef}
                    activityName="Statistiques_Age_Eleves"
                    pageCount={2}
                    quality="hd"
                />
                <div className="print-page">
                    <header className="tp-header">
                        <IoMdSchool className="header-icon"/>
                        <h1>Reconnaître un triangle - Classe 2nde Mathématiques</h1>

                    </header>
                    <div className="math-chapter-box green">
                      <span style={{fontSize: '1.5rem', marginRight: '0.5rem'}}>
                        📐 🔺
                      </span>
                        <h2 className="math-chapter-title">
                            Construire et Analyser des Triangles dans un Cercle
                        </h2>

                        <div className="math-chapter-decoration">
                            <svg width="100" height="80" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 2L2 7L12 12L22 7L12 2Z M12 12L22 7 M12 12L2 7 M12 12V22 M22 7V17L12 22L2 17V7"
                                    stroke="#ff9500"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="#ff5e00"
                                    strokeWidth="1.5"
                                />
                                <path d="M12 8V16 M8 12H16" stroke="#ff9500" strokeWidth="2"/>
                            </svg>
                        </div>
                    </div>
                    {/* Intro */}
                    <div className="tp-intro compact">
                        <p className="d-flex align-items-center flex-wrap mt-4">
                        <span
                            className="badge bg-primary text-white rounded-pill px-4 py-2 shadow-lg me-3"
                            style={{fontSize: '1.0rem', letterSpacing: '1px'}}
                        >
                          ACTIVITÉ 3
                        </span>
                            <span className="course-title">
                          <FaRuler/> Quel logo choisir ?
                        </span>
                        </p>
                        <div className="d-flex align-items-start gap-3 mt-2">
                            <div className="flex-grow-1">
                                <p className="math-text">
                                    Marilou, en stage dans une agence de publicité, réalise un
                                    logo pour un client. Le logo doit être constitué d'un triangle
                                    inscrit dans un cercle de 50 cm de diamètre. Marilou recherche
                                    le type de triangle qui conviendrait le mieux.
                                </p>
                            </div>
                            <div
                                className="flex-shrink-0"
                                style={{maxWidth: '250px', cursor: 'pointer'}}
                            >
                                <img
                                    src={logo}
                                    alt="Logo publicité"
                                    className="img-fluid rounded shadow-sm compact-img"
                                    onClick={() => openModal(logo, 'Logo publicité')}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Visualisation simple */}
                    <section className="tp-section compact">
                        <h3 className="compact-title">
                            <FaRuler/> Visualisation du cercle et du triangle
                        </h3>
                        <div className="d-flex align-items-start gap-3">
                            <div className="flex-grow-1">
                                <p>
                                    a. Ouvrir le fichier « logo » pour afficher le cercle sur la
                                    grille repère.
                                </p>
                                <p>
                                    b. Utiliser l'outil Point sur objet afin de placer précisément
                                    les 3 points A, B et C sur le cercle.
                                </p>
                                <p>c. Utiliser l'outil Polygone pour tracer le triangle ABC.</p>
                            </div>
                            <div
                                className="flex-shrink-0"
                                style={{maxWidth: '300px', cursor: 'pointer'}}
                            >
                                <img
                                    src={cercleGeoImage}
                                    alt="Cercle et triangle"
                                    className="img-fluid rounded shadow-sm compact-img"
                                    onClick={() =>
                                        openModal(cercleGeoImage, 'Cercle et triangle')
                                    }
                                />
                            </div>
                        </div>

                        <h3 className="compact-title">
                            <FaRuler/> Triangle rectangle en C
                        </h3>
                        <div className="d-flex align-items-start gap-3">
                            <div className="flex-grow-1">
                                <p>
                                    a. Utiliser l'outil Angle pour afficher la mesure de l'angle
                                    Ĉ.
                                </p>
                                <p>
                                    b. Déplacer le point B pour obtenir un triangle rectangle en
                                    C.
                                </p>
                                <p>c. Mesurer la longueur du segment [AB].</p>

                                <div className="info-bubble definition">
                                    <div className="info-bubble-title">
                                        <BsFillQuestionCircleFill/> Définition
                                    </div>
                                    <p>
                                        Un triangle rectangle possède un angle droit (90°). Si
                                        l'hypoténuse est le diamètre du cercle, le triangle est
                                        rectangle.
                                    </p>
                                </div>

                                <Question
                                    id="question1"
                                    text="Que représente [AB] pour le cercle ?"
                                    answer={answers.question1}
                                    showCorrection={showCorrections.question1}
                                    onChange={handleInputChange}
                                    onToggleCorrection={toggleCorrection}
                                />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Page 2 */}
                <div className="print-page" id="page2-start">
                    {/* Triangle isocèle */}
                    <section className="tp-section compact">
                        <h3 className="compact-title">
                            <FaRuler/> Triangle isocèle
                        </h3>
                        <div className="d-flex align-items-start gap-3">
                            <div className="flex-grow-1">
                                <p>a. Afficher la longueur des côtés [AB] et [AC].</p>
                                <p>b. Déplacer le point B pour obtenir AB = AC.</p>
                                <p>c. Afficher les angles B̂ et Ĉ.</p>
                            </div>
                        </div>
                        <div className="info-bubble property">
                            <div className="info-bubble-title">
                                <FaRuler/> Propriété
                            </div>
                            <p>
                                Un triangle isocèle a deux côtés égaux et deux angles égaux. Sur
                                un cercle, cela se construit en plaçant deux points à égale
                                distance d’un troisième.
                            </p>
                        </div>

                        <Question
                            id="question2"
                            text="Que pouvez-vous dire des angles B̂ et Ĉ ?"
                            answer={answers.question2}
                            showCorrection={showCorrections.question2}
                            onChange={handleInputChange}
                            onToggleCorrection={toggleCorrection}
                            textarea
                        />
                    </section>

                    {/* Triangle équilatéral */}
                    <section className="tp-section compact">
                        <h3 className="compact-title">
                            <FaRuler/> Triangle équilatéral
                        </h3>
                        <div className="d-flex align-items-start gap-3">
                            <div className="flex-grow-1">
                                <p>a. Placer deux points A et B sur le cercle.</p>
                                <p>b. Utiliser l’outil Polygone régulier avec 3 côtés.</p>
                                <p>c. Déplacer B pour amener C sur le cercle.</p>
                                <p>d. Mesurer les trois angles du triangle.</p>
                            </div>
                        </div>
                        <div className="info-bubble definition">
                            <div className="info-bubble-title">
                                <BsFillQuestionCircleFill/> Définition
                            </div>
                            <p>
                                Un triangle équilatéral a trois côtés égaux et chaque angle
                                mesure 60°.
                            </p>
                        </div>

                        <Question
                            id="question3"
                            text="Que pouvez-vous dire des angles du triangle équilatéral ?"
                            answer={answers.question3}
                            showCorrection={showCorrections.question3}
                            onChange={handleInputChange}
                            onToggleCorrection={toggleCorrection}
                            textarea
                        />
                    </section>

                    {/* Choix du logo */}
                    <section className="tp-section compact">
                        <h3 className="compact-title"> ✅ Choix du logo</h3>
                        <div className="d-flex align-items-start gap-3">
                            <div className="flex-grow-1">
                                <p>
                                    Le client veut un triangle inscrit dans la moitié du cercle,
                                    avec deux côtés égaux.
                                </p>
                            </div>
                        </div>
                        <Question
                            id="question4"
                            text="Caractériser ce type de triangle."
                            answer={answers.question4}
                            showCorrection={showCorrections.question4}
                            onChange={handleInputChange}
                            onToggleCorrection={toggleCorrection}
                            textarea
                        />

                        <Question
                            id="question5"
                            text="Complétez : 'Un triangle rectangle est inscrit dans un cercle lorsque...'"
                            answer={answers.question5}
                            showCorrection={showCorrections.question5}
                            onChange={handleInputChange}
                            onToggleCorrection={toggleCorrection}
                            textarea
                        />

                        <div className="info-bubble warning">
                            <div className="info-bubble-title">
                                <FaDrawPolygon/> Rappel important
                            </div>
                            <p>
                                Un triangle est inscrit dans un cercle si ses sommets sont sur
                                le cercle. Dans un triangle rectangle, l’hypoténuse est le
                                diamètre du cercle.
                            </p>
                        </div>
                    </section>

                    {/* Je retiens */}
                    <section className="tp-section compact">
                        <h3 className="compact-title"> 📝 Je retiens</h3>
                        <Question
                            id="question6"
                            answer={answers.question6}
                            showCorrection={showCorrections.question6}
                            onChange={handleInputChange}
                            onToggleCorrection={toggleCorrection}
                            textarea
                        />
                    </section>

                    <footer className="tp-footer compact">
                        <p className="compact-text">Mathématiques 2nde</p>
                        <p className="compact-text">
                            TUTO: Dessiner une figure avec GeoGebra - liemimin.fr/m340-tuto10
                        </p>
                    </footer>
                </div>

                {/* Modal pour l'image agrandie */}
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

// Composant pour une section de triangle

// Composant pour une question
const Question = ({
                      id,
                      text,
                      answer,
                      showCorrection,
                      onChange,
                      onToggleCorrection,
                      textarea = false,
                  }) => (
    <div className="question compact">
        {text && <p className="compact-text">{text}</p>}
        <div className="answer-container compact">
            {textarea ? (
                <textarea
                    className={`answer-input compact ${showCorrection ? 'correction-active' : ''}`}
                    rows={text ? '2' : '3'}
                    value={answer}
                    onChange={(e) => onChange(id, e.target.value)}
                />
            ) : (
                <input
                    type="text"
                    className={`answer-input compact ${showCorrection ? 'correction-active' : ''}`}
                    value={answer}
                    onChange={(e) => onChange(id, e.target.value)}
                />
            )}
        </div>
        <button
            className="correction-btn compact"
            onClick={() => onToggleCorrection(id)}
        >
            <FaCheck/> Correction
        </button>
    </div>
);

export default GeomAct3Quellogochoisir;
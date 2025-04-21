import React, { useRef, useState } from 'react';
import { FaCheck, FaCoins } from 'react-icons/fa';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { IoMdSchool } from 'react-icons/io';
import '../../../../styles/activites.css';
import { useLocation, useParams } from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import cercleGeoImage from '../../../../assets/cheminee2.png';
import ModalImage from '../../../../utils/ModalImage';
import tahlestriangle from '../../../../assets/tahlestrianle.png';
import thalescheminee from '../../../../assets/chemineecouleur.png';
import PrintManager from '../../../../utils/PrintManager';
import Automatismes from '../../../../config/Automatismes';
import { FcRuler } from 'react-icons/fc';

const GeomAct4Thales = () => {
  const { classId } = useParams();
  const location = useLocation();
  const className = location.state?.className || '';
  const [answers, setAnswers] = useState({
    question1: '',
    question2a: '',
    question2b: '',
    question2c: '',
    question2d: '',
    question3a: '',
    question3b: '',
    question4: '',
    question5: '',
  });

  const [showCorrections, setShowCorrections] = useState({
    question1: false,
    question2a: false,
    question2b: false,
    question2c: false,
    question2d: false,
    question3a: false,
    question3b: false,
    question4: false,
    question5: false,
  });

  // Réponses attendues
  const correctAnswers = {
    question1: "Les droites (AB) et (A'B') sont parallèles.",
    question2a: "OA = 8 cm, OB = 6.4 cm, OA' = 5 cm, OB' = 4 cm",
    question2b: "OA/OA' = 8/5 = 1.6, OB/OB' = 6.4/4 = 1.6",
    question2c: 'Les rapports sont égaux (1.6).',
    question2d:
      'Les rapports sont égaux car les droites sont parallèles (théorème de Thalès).',
    question3a: '',
    question3b: '12/0.80 = AB/2 → AB = (12×2)/0.80 = 30 m',
    question4: 'La hauteur de la cheminée est de 30 mètres.',
    question5:
      'Le théorème de Thalès permet de calculer des longueurs inaccessibles en utilisant des triangles semblables et des rapports de proportionnalité.',
  };

  const [modalState, setModalState] = useState({
    show: false,
    imageUrl: '',
    altText: '',
  });

  const handleInputChange = (field, value) => {
    setAnswers((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleCorrection = (field) => {
    setShowCorrections((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));

    if (!answers[field] && !showCorrections[field]) {
      setAnswers((prev) => ({
        ...prev,
        [field]: correctAnswers[field],
      }));
    }
  };

  const openModal = (imageUrl, altText) => {
    setModalState({ show: true, imageUrl, altText });
  };
  const contentRef = useRef();
  const closeModal = () => {
    setModalState((prev) => ({ ...prev, show: false }));
  };

  if (className === 'Seconde-thales-activity') {
    return <div>Cette activité n'est pas disponible pour cette classe.</div>;
  }

  return (
    <>
      <BackButton />
      <div
        className="tp-container"
        id="thales-activity-content"
        ref={contentRef}
      >
        {/* Page 1 */}
        <div className="print-page">
          <header className="tp-header">
            <IoMdSchool className="header-icon" />
            <h1>
              Utilisation du théorème de Thalès - Classe 2nde Mathématiques
            </h1>
            <PrintManager
              contentRef={contentRef}
              activityName="Statistiques_Age_Eleves"
              pageCount={2}
              quality="hd"
            />
          </header>
          <Automatismes />
          <div className="tp-intro">
            <div className="math-chapter-box green ">
              <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>
                🏭 📏{' '}
              </span>
              <h2 className="math-chapter-title">
                Calculs d'aires et de volumes
              </h2>
            </div>
            <div className="activity-header">
              <span className="activity-badge">ACTIVITÉ 4</span>
              <div className="activity-title">
                <span className="course-title">
                  <FcRuler /> Comment mesurer la hauteur d'une cheminée ?
                </span>
              </div>
            </div>
            <div className="d-flex align-items-start" style={{ gap: '20px' }}>
              <div style={{ flex: 1 }}>
                <p className="math-text">
                  🚧 Une entreprise de travaux publics doit démolir la cheminée
                  d’une ancienne cimenterie 🏭. La cheffe de chantier 👷‍♀️ envoie
                  deux jeunes stagiaires, <strong>Lina</strong> et{' '}
                  <strong>Axel </strong>
                  sur place pour estimer la hauteur de la cheminée avant les
                  travaux.
                </p>
                <div className="problem-box">
                  <h3>Objectif</h3>
                  <p>
                    🔍 Leur objectif : trouver une méthode efficace pour mesurer
                    cette grande structure sans monter dessus !
                  </p>
                </div>
              </div>

              <div
                className="flex-shrink-0"
                style={{
                  maxWidth: '200px',
                  cursor: 'pointer',
                  marginTop: '7rem',
                }}
              >
                <img
                  src={cercleGeoImage}
                  alt="Représentation d'un triangle dans un cercle"
                  className="img-fluid rounded shadow-sm compact-img"
                  onClick={() =>
                    openModal(
                      cercleGeoImage,
                      "Représentation d'un triangle dans un cercle"
                    )
                  }
                />
              </div>
            </div>
          </div>

          <section className="tp-section">
            <h3>
              <FcRuler /> 1. Propriété des triangles semblables
            </h3>
            <p>
              Axel veut utiliser la propriété des triangles représentés sur le
              schéma ci-dessous.
            </p>
            <div
              className="flex-shrink-0"
              style={{ maxWidth: '600px', cursor: 'pointer', margin: '0 auto' }}
            >
              <img
                src={tahlestriangle}
                alt="shema d'un triangle"
                className="img-fluid rounded shadow-sm compact-img"
                onClick={() => openModal(tahlestriangle, "shema d'un triangle")}
              />
            </div>
            <div className="info-bubble">
              <div className="info-bubble-title">
                <BsFillQuestionCircleFill /> Schéma
              </div>
              <p className="info-text">
                Les droites (AB) et (A'B') sont parallèles.
              </p>
            </div>

            <div className="question">
              <div className="question-header">
                <div className="question-number3">A</div>
                <p>Comparaison des directions des droites (AB) et (A'B').</p>
              </div>
              <div className="answer-container">
                <textarea
                  className={`answer-input ${showCorrections.question1 ? 'correction-active' : ''}`}
                  rows="2"
                  value={answers.question1}
                  onChange={(e) =>
                    handleInputChange('question1', e.target.value)
                  }
                />
                <button
                  className="correction-btn"
                  onClick={() => toggleCorrection('question1')}
                >
                  <FaCheck /> Correction
                </button>
              </div>
            </div>

            <div className="question">
              <div className="question-header">
                <div className="question-number3">B</div>
                <p>Mesurer les longueurs :</p>
              </div>
              <div className="answer-container">
                <textarea
                  className={`answer-input ${showCorrections.question2a ? 'correction-active' : ''}`}
                  rows="2"
                  value={answers.question2a}
                  onChange={(e) =>
                    handleInputChange('question2a', e.target.value)
                  }
                  placeholder="OA = ..., OB = ..., OA' = ..., OB' = ..."
                />
                <button
                  className="correction-btn"
                  onClick={() => toggleCorrection('question2a')}
                >
                  <FaCheck /> Correction
                </button>
              </div>
            </div>

            <div className="question">
              <div className="question-header">
                <div className="question-number3">C</div>
                <p>
                  Effectuer les rapports (arrondir le résultat au dixième) :
                </p>
              </div>
              <div className="answer-container">
                <textarea
                  className={`answer-input ${showCorrections.question2b ? 'correction-active' : ''}`}
                  rows="2"
                  value={answers.question2b}
                  onChange={(e) =>
                    handleInputChange('question2b', e.target.value)
                  }
                  placeholder="OA/OA' = ..., OB/OB' = ..."
                />
                <button
                  className="correction-btn"
                  onClick={() => toggleCorrection('question2b')}
                >
                  <FaCheck /> Correction
                </button>
              </div>
            </div>

            <div className="question">
              <div className="question-header">
                <div className="question-number3">D</div>
                <p>Comparer les valeurs de ces rapports :</p>
              </div>
              <div className="answer-container">
                <textarea
                  className={`answer-input ${showCorrections.question2c ? 'correction-active' : ''}`}
                  rows="2"
                  value={answers.question2c}
                  onChange={(e) =>
                    handleInputChange('question2c', e.target.value)
                  }
                />
                <button
                  className="correction-btn"
                  onClick={() => toggleCorrection('question2c')}
                >
                  <FaCheck /> Correction
                </button>
              </div>
            </div>

            <div className="question">
              <div className="question-header">
                <div className="question-number3">E</div>
                <p>Expliquer pourquoi ces rapports sont égaux :</p>
              </div>
              <div className="answer-container">
                <textarea
                  className={`answer-input ${showCorrections.question2d ? 'correction-active' : ''}`}
                  rows="3"
                  value={answers.question2d}
                  onChange={(e) =>
                    handleInputChange('question2d', e.target.value)
                  }
                />
                <button
                  className="correction-btn"
                  onClick={() => toggleCorrection('question2d')}
                >
                  <FaCheck /> Correction
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Page 2 */}
        <div className="print-page">
          <section className="tp-section">
            <h3>
              <FcRuler /> 2. Application de la propriété
            </h3>

            <div className="d-flex align-items-start" style={{ gap: '20px' }}>
              <div className="math-text" style={{ flex: 1 }}>
                <p>
                  Pour déterminer la hauteur de la cheminée 🏭, Axel utilise
                  l'ombre qu'elle produit.
                </p>
                <p>
                  Il plante verticalement un bâton de longueur <br />{' '}
                  <strong> A'B' = 2 m </strong> de telle manière que l'extrémité
                  de l'ombre du bâton coïncide avec celle de l'ombre de la
                  cheminée.
                </p>
                <p>Il mesure :</p>{' '}
                <p>
                  – la distance OA représentant l’ombre de la cheminée :<br />
                  <strong> OA = 12 m </strong>
                </p>
                <p>
                  – la distance OA′ représentant l’ombre du bâton :<br />{' '}
                  <strong> OA′ = 0,80 m </strong> .
                </p>
              </div>

              <div
                className="flex-shrink-0"
                style={{
                  maxWidth: '300px',
                  cursor: 'pointer',
                  marginTop: '5rem',
                  marginBottom: '10px',
                }}
              >
                <img
                  src={thalescheminee}
                  alt="cheminée de thalese"
                  className="img-fluid rounded shadow-sm compact-img"
                  onClick={() =>
                    openModal(thalescheminee, 'cheminée de thalese')
                  }
                />
              </div>
            </div>

            <div className="question">
              <div className="question-header">
                <div className="question-number3">A</div>
                <p>Reporter les valeurs connues dans l'égalité :</p>
                <div className="math-formula">
                  <div className="fraction">
                    <span>OA</span>
                    <span>OA'</span>
                  </div>
                  =
                  <div className="fraction">
                    <span>AB</span>
                    <span>A'B'</span>
                  </div>
                </div>
              </div>

              <div className="answer-container">
                {/* Zone de réponse avec correction intégrée */}
                {showCorrections.question3a ? (
                  <div className="correction-textarea">
                    <div className="math-formula">
                      <div className="fraction">
                        <span>12</span>
                        <span>0.80</span>
                      </div>
                      =
                      <div className="fraction">
                        <span>AB</span>
                        <span>2</span>
                      </div>
                    </div>
                    <p className="explanation">
                      Cette proportion montre la relation de Thalès entre les
                      triangles.
                    </p>
                  </div>
                ) : (
                  <textarea
                    className={`answer-input ${showCorrections.question3a ? 'correction-active' : ''}`}
                    rows="3"
                    value={answers.question3a}
                    onChange={(e) =>
                      handleInputChange('question3a', e.target.value)
                    }
                  />
                )}

                {/* Bouton de correction */}
                <button
                  className="correction-btn"
                  onClick={() => toggleCorrection('question3a')}
                >
                  <FaCheck /> Correction
                </button>
              </div>
            </div>

            <div className="question">
              <div className="question-header">
                <div className="question-number3">B</div>
                <p>
                  En utilisant un produit en croix, calculer la hauteur de la
                  cheminée :
                </p>
              </div>
              <div className="answer-container">
                <textarea
                  className={`answer-input ${showCorrections.question3b ? 'correction-active' : ''}`}
                  rows="3"
                  value={answers.question3b}
                  onChange={(e) =>
                    handleInputChange('question3b', e.target.value)
                  }
                />
                <button
                  className="correction-btn"
                  onClick={() => toggleCorrection('question3b')}
                >
                  <FaCheck /> Correction
                </button>
              </div>
            </div>

            <div className="question">
              <div className="question-header">
                <div className="question-number3">C</div>
                <p>Quelle est la hauteur de la cheminée ?</p>
              </div>
              <div className="answer-container">
                <input
                  type="text"
                  className={`answer-input ${showCorrections.question4 ? 'correction-active' : ''}`}
                  value={answers.question4}
                  onChange={(e) =>
                    handleInputChange('question4', e.target.value)
                  }
                />
                <button
                  className="correction-btn"
                  onClick={() => toggleCorrection('question4')}
                >
                  <FaCheck /> Correction
                </button>
              </div>
            </div>

            <div className="question">
              <div className="question-header">
                <div className="question-number3">D</div>
                <p>
                  Expliquer en quoi le théorème de Thalès est utile dans cette
                  situation :
                </p>
              </div>
              <div className="answer-container">
                <textarea
                  className={`answer-input ${showCorrections.question5 ? 'correction-active' : ''}`}
                  rows="4"
                  value={answers.question5}
                  onChange={(e) =>
                    handleInputChange('question5', e.target.value)
                  }
                />
                <button
                  className="correction-btn"
                  onClick={() => toggleCorrection('question5')}
                >
                  <FaCheck /> Correction
                </button>
              </div>
            </div>
          </section>

          <footer className="tp-footer">
            <p>Cours Mathématiques Seconde - Géométrie - 2025 </p>
            <p>Lycée Pierre-Joseph Laurent</p>
          </footer>
        </div>
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

export default GeomAct4Thales;

import React, {useRef, useState} from 'react';
import {
    FaCheck,
    FaFilm,
    FaRocket,
    FaGlobe,
    FaBus,
    FaIndustry,
    FaCalculator,
    FaRulerCombined,
    FaDrawPolygon
} from 'react-icons/fa';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import ModalImage from "../../../../utils/ModalImage";
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";

// Images (à remplacer par les vôtres)
import trainImage from "../../../../assets/train-mouvement.png";
import fuseeImage from "../../../../assets/fusee-soyouz.png";
import systemeSolaireImage from "../../../../assets/systeme-solaire.png";
import busImage from "../../../../assets/bus-mouvement.png";
import {IoMdSchool} from "react-icons/io";

const Act1ReferentielMeca = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const contentRef = useRef();

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        question1: '', question2: '', question3a: '', question3b: '', question4a: '', question4b: '',
        question5a: '', question5b: '', question5c: '', question6a: '', question6b: '', question6c: '',
        question7a: '', question7b: '', question7c: '', question8a: '', question8b: '', question8c: '',
        question9: '', question10: '', question11: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        question1: false,
        question2: false,
        question3a: false,
        question3b: false,
        question4a: false,
        question4b: false,
        question5a: false,
        question5b: false,
        question5c: false,
        question6a: false,
        question6b: false,
        question6c: false,
        question7a: false,
        question7b: false,
        question7c: false,
        question8a: false,
        question8b: false,
        question8c: false,
        question9: false,
        question10: false,
        question11: false
    });

// Réponses attendues corrigées
    const correctAnswers = {
        question1: 'Le train semble en mouvement.',
        question2: 'Le quai est en mouvement.',
        question3a: 'Les soldats sont au repos par rapport au quai.',
        question3b: 'Les soldats sont en mouvement par rapport au train et au sol.',
        question4a: 'Val Kilmer est au repos par rapport au train.',
        question4b: 'Val Kilmer est en mouvement par rapport au quai.',
        question5a: 'Le mouvement est observé par rapport au sol. Le référentiel choisi est donc le référentiel terrestre.',
        question5b: 'La fusée est en mouvement dans le référentiel terrestre.',
        question5c: 'La Terre est au repos dans le référentiel terrestre.',
        question6a: 'Le mouvement est observé depuis la fusée. On a choisi le référentiel de la fusée.',
        question6b: 'La fusée est au repos dans ce référentiel.',
        question6c: 'La Terre est en mouvement dans le référentiel lié à la fusée.',
        question7a: 'Le référentiel héliocentrique est lié au Soleil.',
        question7b: 'Le Soleil est au repos dans le référentiel héliocentrique.',
        question7c: 'La Terre est en mouvement dans le référentiel héliocentrique.',
        question8a: 'Le référentiel géocentrique est lié à la Terre.',
        question8b: 'Le Soleil est en mouvement dans le référentiel géocentrique.',
        question8c: 'La Terre est au repos dans le référentiel géocentrique.',
        question9: 'Pour étudier l\'état de mouvement ou de repos d\'un système mécanique, il faut préciser le référentiel.',
        question10: 'Un bus roule. Les passagers assis sur leur siège sont immobiles si le référentiel choisi est le bus.',
        question11: 'Dans un bus qui roule, un passager qui se déplace dans l\'allée centrale est en mouvement par rapport à la route et en mouvement par rapport aux passagers assis.'
    };

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));
        if (!answers[field] && !showCorrections[field]) {
            setAnswers((prev) => ({...prev, [field]: correctAnswers[field]}));
        }
    };

    const [modalState, setModalState] = useState({show: false, imageUrl: '', altText: ''});
    const openModal = (imageUrl, altText) => setModalState({show: true, imageUrl, altText});
    const closeModal = () => setModalState((prev) => ({...prev, show: false}));

    if (className === 'Seconde-mecanique-act1') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" id="mecanique-content" ref={contentRef}>
            <PrintManager contentRef={contentRef} activityName="Mecanique_Referentiels" pageCount={2} quality="hd"/>
            <div className="print-page">
                <div className="cover-page" style={{
                    padding: '1.5rem',
                    background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 50%, #bbdefb 50%, white 50%, white 100%)',
                    borderRadius: '8px',
                    fontFamily: 'Roboto, sans-serif'
                }}>
                    {/* En-tête */}
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '2rem',
                        padding: '2rem',
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 6px 12px rgba(30, 136, 229, 0.2)'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '1rem'
                        }}>

                        </div>

                        <h1 style={{
                            color: '#1565c0',
                            fontSize: '2rem',
                            fontWeight: '700',
                            marginBottom: '0.5rem'
                        }}>
                            PHYSIQUE-CHIMIE
                        </h1>

                        <h2 style={{
                            color: '#1e88e5',
                            fontSize: '1.5rem',
                            fontWeight: '500',
                            marginBottom: '1.5rem'
                        }}>
                            Classe de Seconde Professionnelle
                        </h2>

                        <div style={{
                            height: '3px',
                            width: '80px',
                            backgroundColor: '#1e88e5',
                            margin: '0 auto 1.5rem',
                            borderRadius: '3px'
                        }}></div>

                        <p style={{
                            color: '#546e7a',
                            fontSize: '1.1rem',
                            marginBottom: '2rem',
                            lineHeight: '1.6'
                        }}>
                            Explorer le monde à travers l'expérimentation scientifique
                        </p>
                    </div>

                    {/* Cartes du programme */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '20px',
                        marginBottom: '1rem'
                    }}>
                        {/* Carte Sécurité */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderLeft: '4px solid #f44336'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '1rem'
                            }}>
                              <span style={{
                                  backgroundColor: '#ffebee',
                                  borderRadius: '50%',
                                  width: '40px',
                                  height: '40px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  marginRight: '10px',
                                  color: '#f44336'
                              }}>
                                ⚠️
                              </span>
                                <h4 style={{margin: 0, color: '#f44336'}}>Sécurité</h4>
                            </div>
                            <p style={{color: '#546e7a', margin: 0, fontSize: '12px', lineHeight: '1.2'}}>
                                Apprendre à travailler en toute sécurité avec les appareils électriques, produits
                                chimiques et sources lumineuses ou sonores.
                            </p>
                        </div>

                        {/* Carte Électricité */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderLeft: '4px solid #ff9800'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '1rem'
                            }}>
          <span style={{
              backgroundColor: '#fff3e0',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              color: '#ff9800'
          }}>
            ⚡
          </span>
                                <h4 style={{margin: 0, color: '#ff9800'}}>Électricité</h4>
                            </div>
                            <p style={{color: '#546e7a', margin: 0, fontSize: '12px', lineHeight: '1.2'}}>
                                Caractériser et exploiter les signaux électriques, utiliser des capteurs et comprendre
                                les circuits.
                            </p>
                        </div>

                        {/* Carte Mécanique */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderLeft: '4px solid #4caf50'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '1rem'
                            }}>
          <span style={{
              backgroundColor: '#e8f5e9',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              color: '#4caf50'
          }}>
            🚀
          </span>
                                <h4 style={{margin: 0, color: '#4caf50'}}>Mécanique</h4>
                            </div>
                            <p style={{color: '#546e7a', margin: 0, fontSize: '12px', lineHeight: '1.2'}}>
                                Décrire et analyser le mouvement des objets, comprendre les forces et leurs effets.
                            </p>
                        </div>

                        {/* Carte Chimie */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderLeft: '4px solid #9c27b0'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '1rem'
                            }}>
          <span style={{
              backgroundColor: '#f3e5f5',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              color: '#9c27b0'
          }}>
            🧪
          </span>
                                <h4 style={{margin: 0, color: '#9c27b0'}}>Chimie</h4>
                            </div>
                            <p style={{color: '#546e7a', margin: 0, fontSize: '12px', lineHeight: '1.2'}}>
                                Caractériser les solutions, identifier les espèces chimiques et mesurer le pH.
                            </p>
                        </div>

                        {/* Carte Acoustique */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderLeft: '4px solid #2196f3'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '1rem'
                            }}>
          <span style={{
              backgroundColor: '#e3f2fd',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              color: '#2196f3'
          }}>
            🔊
          </span>
                                <h4 style={{margin: 0, color: '#2196f3'}}>Acoustique</h4>
                            </div>
                            <p style={{color: '#546e7a', margin: 0, fontSize: '12px', lineHeight: '1.2'}}>
                                Caractériser les signaux sonores, protéger l'audition et comprendre la transmission du
                                son.
                            </p>
                        </div>

                        {/* Carte Thermique */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderLeft: '4px solid #ff5722'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '1rem'
                            }}>
          <span style={{
              backgroundColor: '#fbe9e7',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              color: '#ff5722'
          }}>
            🔥
          </span>
                                <h4 style={{margin: 0, color: '#ff5722'}}>Thermique</h4>
                            </div>
                            <p style={{color: '#546e7a', margin: 0, fontSize: '12px', lineHeight: '1.2'}}>
                                Caractériser les échanges d'énergie thermique, mesurer les températures et comprendre
                                les changements d'état.
                            </p>
                        </div>

                        {/* Carte Optique */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderLeft: '4px solid #673ab7'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '1rem'
                            }}>
          <span style={{
              backgroundColor: '#ede7f6',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              color: '#673ab7'
          }}>
            💡
          </span>
                                <h4 style={{margin: 0, color: '#673ab7'}}>Optique</h4>
                            </div>
                            <p style={{color: '#546e7a', margin: 0, fontSize: '12px', lineHeight: '1.2'}}>
                                Caractériser les signaux lumineux, comprendre la réflexion, réfraction et la
                                décomposition de la lumière.
                            </p>
                        </div>
                    </div>

                    {/* Compétences travaillées */}
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        marginBottom: '2rem'
                    }}>
                        <h3 style={{
                            color: '#1565c0',
                            textAlign: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            Compétences développées
                        </h3>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '15px'
                        }}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{marginRight: '10px', color: '#1e88e5'}}>🔍</span>
                                <span>S'approprier</span>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{marginRight: '10px', color: '#1e88e5'}}>🧠</span>
                                <span>Analyser & Raisonner</span>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{marginRight: '10px', color: '#1e88e5'}}>🔧</span>
                                <span>Réaliser</span>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{marginRight: '10px', color: '#1e88e5'}}>✅</span>
                                <span>Valider</span>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{marginRight: '10px', color: '#1e88e5'}}>💬</span>
                                <span>Communiquer</span>
                            </div>
                        </div>
                    </div>

                    {/* Objectifs généraux */}
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        padding: '1rem',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h3 style={{
                            color: '#1565c0',
                            textAlign: 'center',
                            marginBottom: '1.2rem'
                        }}>
                            Objectifs de formation
                        </h3>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '10px'
                        }}>
                            <div style={{
                                backgroundColor: '#e3f2fd',
                                padding: '10px 15px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <span style={{marginRight: '5px'}}>🎯</span>
                                Consolider les acquis du collège
                            </div>
                            <div style={{
                                backgroundColor: '#e3f2fd',
                                padding: '10px 15px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <span style={{marginRight: '5px'}}>🔬</span>
                                Pratiquer la démarche scientifique
                            </div>
                            <div style={{
                                backgroundColor: '#e3f2fd',
                                padding: '10px 15px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <span style={{marginRight: '5px'}}>💼</span>
                                Préparer à la vie professionnelle
                            </div>
                            <div style={{
                                backgroundColor: '#e3f2fd',
                                padding: '10px 15px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <span style={{marginRight: '5px'}}>🌐</span>
                                Développer une culture scientifique
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="print-page">
                <div className="cover-page" style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '2rem',
                    background: 'linear-gradient(135deg, #e8f5e9 0%, #ffffff 50%, #4CAF50 50%, white 50%, white 100%)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    fontFamily: 'Cambria Math, serif'
                }}>
                    {/* En-tête */}
                    <div style={{
                        marginBottom: '2rem',
                        padding: '2rem',
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                        maxWidth: '90%'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundColor: '#4CAF50',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '2.5rem',
                                boxShadow: '0 4px 8px rgba(76, 175, 80, 0.3)'
                            }}>
                                🚀
                            </div>
                        </div>

                        <h1 style={{
                            color: '#2c3e50',
                            fontSize: '2.2rem',
                            fontWeight: '700',
                            marginBottom: '0.5rem'
                        }}>
                            CHAPITRE 1 - Mécanique
                        </h1>

                        <h2 style={{
                            color: '#4CAF50',
                            fontSize: '1.5rem',
                            fontWeight: '500',
                            marginBottom: '1.5rem'
                        }}>
                            Comment décrire et analyser le mouvement des objets ?
                        </h2>

                        <div style={{
                            height: '3px',
                            width: '80px',
                            backgroundColor: '#4CAF50',
                            margin: '0 auto 1.5rem',
                            borderRadius: '3px'
                        }}></div>

                        <p style={{
                            color: '#7f8c8d',
                            fontSize: '1.1rem',
                            marginBottom: '2rem',
                            lineHeight: '1.6'
                        }}>
                            Étude du mouvement des corps et des forces qui les influencent<br/>
                            pour comprendre les phénomènes mécaniques quotidiens
                        </p>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '1rem',
                            marginBottom: '2rem'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#f8f9fa',
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem'
                            }}>
                                <FaIndustry style={{marginRight: '0.5rem', color: '#4CAF50'}}/>
                                Physique-Chimie
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#f8f9fa',
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem'
                            }}>
                                <IoMdSchool style={{marginRight: '0.5rem', color: '#4CAF50'}}/>
                                Niveau Seconde
                            </div>
                        </div>
                    </div>

                    {/* Tableau des capacités et connaissances */}
                    <div style={{
                        width: '100%',
                        marginBottom: '2rem',
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                        padding: '1.5rem',
                        textAlign: 'left'
                    }}>
                        <h3 style={{
                            color: '#2c3e50',
                            textAlign: 'center',
                            marginBottom: '1.5rem',
                            fontSize: '1.4rem'
                        }}>
                            Capacités et connaissances - Description du mouvement
                        </h3>

                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: '0.9rem'
                        }}>
                            <thead>
                            <tr style={{backgroundColor: 'rgba(76,175,80,0.2)', color: 'black'}}>
                                <th style={{
                                    padding: '0.75rem',
                                    border: '1px solid #ddd',
                                    textAlign: 'center'
                                }}>Capacités
                                </th>
                                <th style={{
                                    padding: '0.75rem',
                                    border: '1px solid #ddd',
                                    textAlign: 'center'
                                }}>Connaissances
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Délimiter un système et choisir un référentiel adapté.
                                </td>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Savoir qu'un mouvement ne peut être défini que dans un référentiel choisi.
                                </td>
                            </tr>
                            <tr style={{backgroundColor: '#f8f9fa'}}>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Reconnaître un état de repos ou de mouvement d'un objet par rapport à un autre
                                    objet.
                                </td>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Différencier trajectoire rectiligne, circulaire et quelconque pour un point donné
                                    d'un objet.
                                </td>
                            </tr>
                            <tr>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Identifier la nature d'un mouvement à partir d'un enregistrement.
                                </td>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Connaître l'existence de mouvements de natures différentes : mouvement uniforme et
                                    mouvement uniformément varié (accéléré ou ralenti).
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <h3 style={{
                            color: '#2c3e50',
                            textAlign: 'center',
                            margin: '1.5rem 0',
                            fontSize: '1.4rem'
                        }}>
                            Capacités et connaissances - Vitesse et mesures
                        </h3>

                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: '0.9rem'
                        }}>
                            <thead>
                            <tr style={{backgroundColor: 'rgba(76,175,80,0.2)', color: 'black'}}>
                                <th style={{
                                    padding: '0.75rem',
                                    border: '1px solid #ddd',
                                    textAlign: 'center'
                                }}>Capacités
                                </th>
                                <th style={{
                                    padding: '0.75rem',
                                    border: '1px solid #ddd',
                                    textAlign: 'center'
                                }}>Connaissances
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Déterminer expérimentalement une vitesse moyenne dans le cas d'un mouvement
                                    rectiligne.
                                </td>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Connaître la relation entre vitesse moyenne, distance parcourue et durée.
                                </td>
                            </tr>
                            <tr style={{backgroundColor: '#f8f9fa'}}>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Déterminer expérimentalement la fréquence de rotation d'un mobile.
                                </td>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Connaître les notions de fréquence de rotation et de période.
                                </td>
                            </tr>
                            <tr>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Utiliser la relation entre vitesse, diamètre et fréquence de rotation.
                                </td>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Utiliser la relation entre vitesse moyenne, distance parcourue et durée.
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <h3 style={{
                            color: '#2c3e50',
                            textAlign: 'center',
                            margin: '1.5rem 0',
                            fontSize: '1.4rem'
                        }}>
                            Capacités et connaissances - Forces et équilibre
                        </h3>

                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: '0.9rem'
                        }}>
                            <thead>
                            <tr style={{backgroundColor: 'rgba(76,175,80,0.2)', color: 'black'}}>
                                <th style={{
                                    padding: '0.75rem',
                                    border: '1px solid #ddd',
                                    textAlign: 'center'
                                }}>Capacités
                                </th>
                                <th style={{
                                    padding: '0.75rem',
                                    border: '1px solid #ddd',
                                    textAlign: 'center'
                                }}>Connaissances
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Faire l'inventaire des actions mécaniques qui s'exercent sur un solide.
                                </td>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Savoir qu'une action mécanique peut se modéliser par une force.
                                </td>
                            </tr>
                            <tr style={{backgroundColor: '#f8f9fa'}}>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Représenter et caractériser une action mécanique par une force.
                                </td>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Connaître les caractéristiques d'une force (droite d'action, sens et valeur en
                                    newton).
                                </td>
                            </tr>
                            <tr>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Vérifier expérimentalement les conditions d'équilibre d'un solide soumis à deux ou
                                    trois forces.
                                </td>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Connaître les caractéristiques du poids d'un corps (vertical, du haut vers le bas et
                                    valeur en newton).
                                </td>
                            </tr>
                            <tr style={{backgroundColor: '#f8f9fa'}}>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Mesurer la valeur du poids d'un corps.
                                </td>
                                <td style={{padding: '0.75rem', border: '1px solid #ddd', verticalAlign: 'top'}}>
                                    Connaître et utiliser la relation entre le poids et la masse.
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Liens avec les mathématiques */}
                    <div style={{
                        width: '100%',
                        marginBottom: '2rem',
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                        padding: '1.5rem'
                    }}>
                        <h3 style={{
                            color: '#2c3e50',
                            textAlign: 'center',
                            marginBottom: '1.5rem',
                            fontSize: '1.4rem'
                        }}>
                            Liens avec les mathématiques
                        </h3>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '1rem'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#e8f5e9',
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem'
                            }}>
                                <FaCalculator style={{marginRight: '0.5rem', color: '#4CAF50'}}/>
                                Proportionnalité
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#e8f5e9',
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem'
                            }}>
                                <FaRulerCombined style={{marginRight: '0.5rem', color: '#4CAF50'}}/>
                                Utilisation et transformation de formules
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#e8f5e9',
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem'
                            }}>
                                <FaDrawPolygon style={{marginRight: '0.5rem', color: '#4CAF50'}}/>
                                Tracés géométriques et mesures
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* PAGE 1 */}
            <div className="print-page" id="page1-start">
                <section className="tp-section compact">
                    <div className="math-chapter-box blue" style={{padding: '10px', marginTop: '-10px'}}>
                        <h3 className="math-chapter-title-test mb-0">Chapitre 1 - Mécanique: Référentiels et
                            Mouvement</h3>
                    </div>

                    <div className="activity-header mt-0">
                        <span className="activity-badge">ACTIVITÉ 1</span>
                        <div className="activity-title">
                            <span className="course-title"><FaFilm/> <span>🎬</span> « Mouvement et référentiels »</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-start flex-wrap" style={{gap: '15px'}}>
                        <div style={{flex: 1, minWidth: '300px'}}>
                            <div className="renovation-contexte">
                                <h5 className="mb-2 text-primary fw-bold">🚂 "Mouvement ressenti dans un train"</h5>
                                <p style={{
                                    textAlign: 'justify',
                                    fontSize: '14px',
                                    lineHeight: '1.3',
                                    marginBottom: '10px'
                                }}>
                                    Visionner les vingt premières secondes de l'extrait du film <em>Top Secret</em> de
                                    Jim Abrahams
                                    (<a href="https://youtu.be/A_peCIVBTAY" target="_blank"
                                        rel="noopener noreferrer">https://youtu.be/A_peCIVBTAY</a>).
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0" style={{maxWidth: '200px', cursor: 'pointer'}}>
                            <img src={trainImage} alt="Scène de train"
                                 className="img-fluid rounded shadow-sm compact-img"
                                 onClick={() => openModal(trainImage, 'Scène de train')} style={{maxHeight: '120px'}}/>
                        </div>
                    </div>

                    <div className="objectif-box" style={{margin: '10px 0', padding: '8px'}}>
                        <div className="objectif-title"><strong style={{color: 'orangered'}}>Objectif :</strong> 🎯</div>
                        <p style={{margin: 0, fontSize: '13px'}}>Comprendre que la notion de mouvement dépend du
                            référentiel choisi pour observer un système.</p>
                    </div>

                    {/* Section I. Mouvement ressenti dans un train */}
                    <div className="question-card mt-0" style={{padding: '10px'}}>
                        <h4 className="vect-title" style={{color: '#1976d2', marginBottom: '12px'}}>I. Mouvement
                            ressenti dans un train</h4>

                        <div className="row g-2">
                            {/* Colonne 1 */}
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>1)</strong> Est-ce le quai ou le train qui est en
                                        mouvement ?</p>
                                    <div className="answer-space2" style={{height: '30px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question1')}>
                                        <FaCheck/> {showCorrections.question1 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question1 &&
                                        <div className="correction-box small">{correctAnswers.question1}</div>}
                                </div>

                                <div className="question-item compact">
                                    <p className="mb-1"><strong>2)</strong> Après avoir vu la fin de l'extrait,
                                        qu'est-ce qui est en mouvement ?</p>
                                    <div className="answer-space2" style={{height: '30px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question2')}>
                                        <FaCheck/> {showCorrections.question2 ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question2 &&
                                        <div className="correction-box small">{correctAnswers.question2}</div>}
                                </div>

                                <div className="question-item compact">
                                    <p className="mb-1"><strong>3) a)</strong> Par rapport à quoi les soldats sont-ils
                                        au repos ?</p>
                                    <div className="answer-space2" style={{height: '30px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question3a')}>
                                        <FaCheck/> {showCorrections.question3a ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question3a &&
                                        <div className="correction-box small">{correctAnswers.question3a}</div>}
                                </div>
                            </div>

                            {/* Colonne 2 */}
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>3) b)</strong> Par rapport à quoi sont-ils en mouvement
                                        ?</p>
                                    <div className="answer-space2" style={{height: '30px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question3b')}>
                                        <FaCheck/> {showCorrections.question3b ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question3b &&
                                        <div className="correction-box small">{correctAnswers.question3b}</div>}
                                </div>

                                <div className="question-item compact">
                                    <p className="mb-1"><strong>4) a)</strong> Par rapport à quoi Val Kilmer est-il au
                                        repos ?</p>
                                    <div className="answer-space2" style={{height: '30px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question4a')}>
                                        <FaCheck/> {showCorrections.question4a ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question4a &&
                                        <div className="correction-box small">{correctAnswers.question4a}</div>}
                                </div>

                                <div className="question-item compact">
                                    <p className="mb-1"><strong>4) b)</strong> Par rapport à quoi est-il en mouvement ?
                                    </p>
                                    <div className="answer-space2" style={{height: '30px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question4b')}>
                                        <FaCheck/> {showCorrections.question4b ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question4b &&
                                        <div className="correction-box small">{correctAnswers.question4b}</div>}
                                </div>
                            </div>
                        </div>

                        <h4 className="vect-title" style={{color: '#d32f2f', marginBottom: '12px'}}><FaRocket/> II.
                            Mouvement d'une fusée</h4>

                        <div className="d-flex align-items-start flex-wrap" style={{gap: '15px', marginBottom: '12px'}}>
                            <div style={{flex: 1, minWidth: '250px'}}>
                                <p style={{fontSize: '13px', marginBottom: '8px'}}>
                                    Allez sur le lien suivant pour observer le décollage d'une fusée Soyouz :
                                    <a href="https://frama.link/soyouz" target="_blank"
                                       rel="noopener noreferrer"> https://frama.link/soyouz</a>
                                </p>
                            </div>

                        </div>

                        <div className="row g-2">
                            {/* Colonne 1 */}
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>1) a)</strong> Référentiel choisi pour observer la fusée
                                        ?</p>
                                    <div className="answer-space2" style={{height: '30px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question5a')}>
                                        <FaCheck/> {showCorrections.question5a ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question5a &&
                                        <div className="correction-box small">{correctAnswers.question5a}</div>}
                                </div>

                                <div className="question-item compact">
                                    <p className="mb-1"><strong>1) b)</strong> Fusée en mouvement/repos (réf. terrestre)
                                        ?</p>
                                    <div className="answer-space2" style={{height: '30px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question5b')}>
                                        <FaCheck/> {showCorrections.question5b ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question5b &&
                                        <div className="correction-box small">{correctAnswers.question5b}</div>}
                                </div>

                                <div className="question-item compact">
                                    <p className="mb-1"><strong>1) c)</strong> Terre en mouvement/repos (réf. terrestre)
                                        ?</p>
                                    <div className="answer-space2" style={{height: '30px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question5c')}>
                                        <FaCheck/> {showCorrections.question5c ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question5c &&
                                        <div className="correction-box small">{correctAnswers.question5c}</div>}
                                </div>
                            </div>

                            {/* Colonne 2 */}
                            <div className="col-md-6">
                                <div className="question-item compact">
                                    <p className="mb-1"><strong>2) a)</strong> Référentiel caméra embarquée ?</p>
                                    <div className="answer-space2" style={{height: '30px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question6a')}>
                                        <FaCheck/> {showCorrections.question6a ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question6a &&
                                        <div className="correction-box small">{correctAnswers.question6a}</div>}
                                </div>

                                <div className="question-item compact">
                                    <p className="mb-1"><strong>2) b)</strong> Fusée en mouvement/repos (réf. fusée) ?
                                    </p>
                                    <div className="answer-space2" style={{height: '30px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question6b')}>
                                        <FaCheck/> {showCorrections.question6b ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question6b &&
                                        <div className="correction-box small">{correctAnswers.question6b}</div>}
                                </div>

                                <div className="question-item compact">
                                    <p className="mb-1"><strong>2) c)</strong> Terre en mouvement/repos (réf. fusée) ?
                                    </p>
                                    <div className="answer-space2" style={{height: '30px', marginBottom: '8px'}}></div>
                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question6c')}>
                                        <FaCheck/> {showCorrections.question6c ? '✕' : '✓'}
                                    </button>
                                    {showCorrections.question6c &&
                                        <div className="correction-box small">{correctAnswers.question6c}</div>}
                                </div>
                            </div>
                        </div>
                        <h4 className="vect-title" style={{
                            color: '#388e3c',
                            marginBottom: '15px',
                            paddingBottom: '8px',
                            borderBottom: '2px solid #e8f5e9'
                        }}>
                            <FaBus style={{marginRight: '8px'}}/> Exercice 1 : QCM
                        </h4>

                        <div style={{marginBottom: '15px'}}>
                            <p style={{fontSize: '14px', color: '#555', fontStyle: 'italic', margin: 0}}>
                                Pour chaque question, choisissez la ou les bonnes réponses.
                            </p>
                        </div>
                        {/* Question 1.1 */}
                        <div className="question-item compact" style={{
                            padding: '12px',
                            borderRadius: '10px',
                            backgroundColor: '#f8f9fa',
                            marginBottom: '12px',
                            border: '1px solid #e9ecef'
                        }}>
                            <p className="mb-2" style={{fontWeight: '600', color: '#2c3e50', fontSize: '14px'}}>
                                <span style={{color: '#388e3c'}}>1.1</span> Pour étudier l'état de
                                mouvement/repos, il faut préciser :
                            </p>

                            <div style={{marginLeft: '5px', marginBottom: '10px'}}>
                                <label className="modern-radio" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '8px',
                                    fontSize: '13px',
                                    padding: '6px 10px',
                                    borderRadius: '6px',
                                    transition: 'all 0.2s ease',
                                    cursor: 'pointer'
                                }}>
                                    <input type="checkbox" className="radio-input" style={{display: 'none'}}/>
                                    <span className="radio-checkmark" style={{
                                        display: 'inline-block',
                                        width: '18px',
                                        height: '18px',
                                        borderRadius: '50%',
                                        border: '2px solid #388e3c',
                                        marginRight: '10px',
                                        position: 'relative',
                                        transition: 'all 0.2s ease'
                                    }}></span>
                                    l'objet qui sert de référence
                                </label>

                                <label className="modern-radio" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '8px',
                                    fontSize: '13px',
                                    padding: '6px 10px',
                                    borderRadius: '6px',
                                    transition: 'all 0.2s ease',
                                    cursor: 'pointer'
                                }}>
                                    <input type="checkbox" className="radio-input" style={{display: 'none'}}/>
                                    <span className="radio-checkmark" style={{
                                        display: 'inline-block',
                                        width: '18px',
                                        height: '18px',
                                        borderRadius: '50%',
                                        border: '2px solid #388e3c',
                                        marginRight: '10px',
                                        position: 'relative',
                                        transition: 'all 0.2s ease'
                                    }}></span>
                                    la trajectoire
                                </label>

                                <label className="modern-radio" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '8px',
                                    fontSize: '13px',
                                    padding: '6px 10px',
                                    borderRadius: '6px',
                                    transition: 'all 0.2s ease',
                                    cursor: 'pointer'
                                }}>
                                    <input type="checkbox" className="radio-input" style={{display: 'none'}}/>
                                    <span className="radio-checkmark" style={{
                                        display: 'inline-block',
                                        width: '18px',
                                        height: '18px',
                                        borderRadius: '50%',
                                        border: '2px solid #388e3c',
                                        marginRight: '10px',
                                        position: 'relative',
                                        transition: 'all 0.2s ease'
                                    }}></span>
                                    le référentiel
                                </label>
                            </div>

                            <button className="correction-btnoptic btn-sm"
                                    onClick={() => toggleCorrection('question9')}
                                    style={{
                                        padding: '6px 12px',
                                        fontSize: '12px',
                                        backgroundColor: '#388e3c',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}>
                                <FaCheck
                                    style={{marginRight: '5px'}}/> {showCorrections.question9 ? 'Masquer' : 'Vérifier'}
                            </button>

                            {showCorrections.question9 &&
                                <div className="correction-box small" style={{
                                    marginTop: '10px',
                                    padding: '10px',
                                    backgroundColor: '#e8f5e9',
                                    borderRadius: '6px',
                                    borderLeft: '4px solid #4caf50',
                                    fontSize: '13px'
                                }}>
                                    <strong>📝 Correction :</strong> {correctAnswers.question9}
                                </div>}
                        </div>
                    </div>
                </section>
            </div>

            {/* PAGE 2 */}
            <div className="print-page" id="page2-start">
                <section className="tp-section compact">
                    {/* Section Exercice 1 : QCM */}
                    <div className="question-card mt-2"
                         style={{padding: '15px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>

                        <div className="row g-3">
                            {/* Colonne 1 */}
                            <div className="col-md-6">
                                {/* Question 1.2 */}
                                <div className="question-item compact" style={{
                                    padding: '12px',
                                    borderRadius: '10px',
                                    backgroundColor: '#f8f9fa',
                                    marginBottom: '12px',
                                    border: '1px solid #e9ecef'
                                }}>
                                    <p className="mb-2" style={{fontWeight: '600', color: '#2c3e50', fontSize: '14px'}}>
                                        <span style={{color: '#388e3c'}}>1.2</span> Passagers assis immobiles si
                                        référentiel =
                                    </p>

                                    <div style={{marginLeft: '5px', marginBottom: '10px'}}>
                                        <label className="modern-radio" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: '8px',
                                            fontSize: '13px',
                                            padding: '6px 10px',
                                            borderRadius: '6px',
                                            transition: 'all 0.2s ease',
                                            cursor: 'pointer'
                                        }}>
                                            <input type="checkbox" className="radio-input" style={{display: 'none'}}/>
                                            <span className="radio-checkmark" style={{
                                                display: 'inline-block',
                                                width: '18px',
                                                height: '18px',
                                                borderRadius: '50%',
                                                border: '2px solid #388e3c',
                                                marginRight: '10px',
                                                position: 'relative',
                                                transition: 'all 0.2s ease'
                                            }}></span>
                                            la route
                                        </label>

                                        <label className="modern-radio" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: '8px',
                                            fontSize: '13px',
                                            padding: '6px 10px',
                                            borderRadius: '6px',
                                            transition: 'all 0.2s ease',
                                            cursor: 'pointer'
                                        }}>
                                            <input type="checkbox" className="radio-input" style={{display: 'none'}}/>
                                            <span className="radio-checkmark" style={{
                                                display: 'inline-block',
                                                width: '18px',
                                                height: '18px',
                                                borderRadius: '50%',
                                                border: '2px solid #388e3c',
                                                marginRight: '10px',
                                                position: 'relative',
                                                transition: 'all 0.2s ease'
                                            }}></span>
                                            le bus
                                        </label>

                                        <label className="modern-radio" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: '8px',
                                            fontSize: '13px',
                                            padding: '6px 10px',
                                            borderRadius: '6px',
                                            transition: 'all 0.2s ease',
                                            cursor: 'pointer'
                                        }}>
                                            <input type="checkbox" className="radio-input" style={{display: 'none'}}/>
                                            <span className="radio-checkmark" style={{
                                                display: 'inline-block',
                                                width: '18px',
                                                height: '18px',
                                                borderRadius: '50%',
                                                border: '2px solid #388e3c',
                                                marginRight: '10px',
                                                position: 'relative',
                                                transition: 'all 0.2s ease'
                                            }}></span>
                                            passager dans l'allée
                                        </label>
                                    </div>

                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question10')}
                                            style={{
                                                padding: '6px 12px',
                                                fontSize: '12px',
                                                backgroundColor: '#388e3c',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '6px',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease'
                                            }}>
                                        <FaCheck
                                            style={{marginRight: '5px'}}/> {showCorrections.question10 ? 'Masquer' : 'Vérifier'}
                                    </button>

                                    {showCorrections.question10 &&
                                        <div className="correction-box small" style={{
                                            marginTop: '10px',
                                            padding: '10px',
                                            backgroundColor: '#e8f5e9',
                                            borderRadius: '6px',
                                            borderLeft: '4px solid #4caf50',
                                            fontSize: '13px'
                                        }}>
                                            <strong>📝 Correction :</strong> {correctAnswers.question10}
                                        </div>}
                                </div>
                            </div>

                            {/* Colonne 2 */}
                            <div className="col-md-6">
                                {/* Question 1.3 */}
                                <div className="question-item compact" style={{
                                    padding: '12px',
                                    borderRadius: '10px',
                                    backgroundColor: '#f8f9fa',
                                    marginBottom: '12px',
                                    border: '1px solid #e9ecef'
                                }}>
                                    <p className="mb-2" style={{fontWeight: '600', color: '#2c3e50', fontSize: '14px'}}>
                                        <span style={{color: '#388e3c'}}>1.3</span> Passager dans l'allée centrale est :
                                    </p>

                                    <div style={{marginLeft: '5px', marginBottom: '10px'}}>
                                        <label className="modern-radio" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: '8px',
                                            fontSize: '13px',
                                            padding: '6px 10px',
                                            borderRadius: '6px',
                                            transition: 'all 0.2s ease',
                                            cursor: 'pointer'
                                        }}>
                                            <input type="checkbox" className="radio-input" style={{display: 'none'}}/>
                                            <span className="radio-checkmark" style={{
                                                display: 'inline-block',
                                                width: '18px',
                                                height: '18px',
                                                borderRadius: '50%',
                                                border: '2px solid #388e3c',
                                                marginRight: '10px',
                                                position: 'relative',
                                                transition: 'all 0.2s ease'
                                            }}></span>
                                            mouvement par rapport à la route
                                        </label>

                                        <label className="modern-radio" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: '8px',
                                            fontSize: '13px',
                                            padding: '6px 10px',
                                            borderRadius: '6px',
                                            transition: 'all 0.2s ease',
                                            cursor: 'pointer'
                                        }}>
                                            <input type="checkbox" className="radio-input" style={{display: 'none'}}/>
                                            <span className="radio-checkmark" style={{
                                                display: 'inline-block',
                                                width: '18px',
                                                height: '18px',
                                                borderRadius: '50%',
                                                border: '2px solid #388e3c',
                                                marginRight: '10px',
                                                position: 'relative',
                                                transition: 'all 0.2s ease'
                                            }}></span>
                                            repos par rapport au bus
                                        </label>

                                        <label className="modern-radio" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: '8px',
                                            fontSize: '13px',
                                            padding: '6px 10px',
                                            borderRadius: '6px',
                                            transition: 'all 0.2s ease',
                                            cursor: 'pointer'
                                        }}>
                                            <input type="checkbox" className="radio-input" style={{display: 'none'}}/>
                                            <span className="radio-checkmark" style={{
                                                display: 'inline-block',
                                                width: '18px',
                                                height: '18px',
                                                borderRadius: '50%',
                                                border: '2px solid #388e3c',
                                                marginRight: '10px',
                                                position: 'relative',
                                                transition: 'all 0.2s ease'
                                            }}></span>
                                            mouvement par rapport aux passagers assis
                                        </label>
                                    </div>

                                    <button className="correction-btnoptic btn-sm"
                                            onClick={() => toggleCorrection('question11')}
                                            style={{
                                                padding: '6px 12px',
                                                fontSize: '12px',
                                                backgroundColor: '#388e3c',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '6px',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease'
                                            }}>
                                        <FaCheck
                                            style={{marginRight: '5px'}}/> {showCorrections.question11 ? 'Masquer' : 'Vérifier'}
                                    </button>

                                    {showCorrections.question11 &&
                                        <div className="correction-box small" style={{
                                            marginTop: '10px',
                                            padding: '10px',
                                            backgroundColor: '#e8f5e9',
                                            borderRadius: '6px',
                                            borderLeft: '4px solid #4caf50',
                                            fontSize: '13px'
                                        }}>
                                            <strong>📝 Correction :</strong> {correctAnswers.question11}
                                        </div>}
                                </div>

                            </div>
                            {/* AutoEvaluationGrid réduit et bien aligné */}
                            <div style={{
                                width: '100%%',
                                overflow: 'hidden',
                                marginTop: '20px',

                                transformOrigin: 'top left',

                            }}>
                                <AutoEvaluationGrid/>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            {modalState.show && (
                <ModalImage imageUrl={modalState.imageUrl} altText={modalState.altText} onClose={closeModal}/>)}
        </div>
    </>);
};

export default Act1ReferentielMeca;
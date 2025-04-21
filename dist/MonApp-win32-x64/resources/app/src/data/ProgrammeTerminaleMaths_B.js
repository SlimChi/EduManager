import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Container, Badge, Card, Accordion, ListGroup} from 'react-bootstrap';
import {
    FiBook, FiClock, FiList, FiArrowRight,
    FiBarChart2, FiPercent, FiCode, FiTriangle, FiTrendingUp,
    FiAward, FiActivity, FiUsers, FiEdit, FiLayers
} from 'react-icons/fi';
import BackButton from "../components/navigation/BackButton";
import {motion} from 'framer-motion';
import "../styles/programmeBo.css"

const ProgrammeTerminaleMaths_B = () => {
    const {classId} = useParams();
    const navigate = useNavigate();

    // Structure du programme
    const programme = {
        description: {
            title: "Mathématiques - Terminale Professionnelle (Groupement B)",
            content: "Programme approfondi avec une orientation spécifique pour le groupement B.",
            emoji: "🧮",
            color: "#5f27cd"
        },
        preambule: {
            title: "Préambule commun",
            emoji: "📜",
            color: "#1dd1a1",
            sections: [
                {
                    title: "Intentions majeures",
                    emoji: "🎯",
                    icon: <FiAward size={18}/>,
                    content: [
                        "Approfondir les notions mathématiques en lien avec les spécialités professionnelles",
                        "Développer des compétences pour la résolution de problèmes complexes",
                        "Préparer à la poursuite d'études ou à l'insertion professionnelle",
                        "Renforcer les automatismes et la rigueur mathématique",
                        "Utiliser les outils numériques pour modéliser et résoudre des problèmes"
                    ]
                },
                {
                    title: "Compétences travaillées",
                    emoji: "💪",
                    icon: <FiActivity size={18}/>,
                    content: [
                        "Modéliser des situations professionnelles avec des outils mathématiques",
                        "Analyser et interpréter des données statistiques",
                        "Résoudre des problèmes algébriques et géométriques",
                        "Programmer des algorithmes pour automatiser des tâches",
                        "Communiquer des résultats avec précision"
                    ]
                },
                {
                    title: "Lignes directrices",
                    emoji: "🧭",
                    icon: <FiEdit size={18}/>,
                    content: [
                        "Lien fort avec les spécialités professionnelles du groupement B",
                        "Utilisation systématique des outils numériques",
                        "Approche concrète et appliquée des concepts mathématiques",
                        "Travail sur des situations professionnelles réelles",
                        "Renforcement des automatismes de calcul"
                    ]
                }
            ]
        },
        organisation: {
            title: "Organisation du programme",
            emoji: "🗂️",
            color: "#ff6b6b",
            icon: <FiLayers size={18}/>,
            content: [
                "Statistique et probabilités (2 modules)",
                "Algèbre - Analyse (4 modules)",
                "Géométrie (1 module)",
                "Algorithmique et programmation",
                "Compléments : Automatismes, Vocabulaire logique"
            ]
        },
        chapitres: [
            {
                id: "stats",
                title: "Statistique et probabilités",
                emoji: "📊",
                icon: <FiBarChart2 size={18}/>,
                color: "#ff6b6b",
                duration: "25h",
                sequences: 6
            },
            {
                id: "algebre",
                title: "Algèbre – Analyse",
                emoji: "➗",
                icon: <FiPercent size={18}/>,
                color: "#48dbfb",
                duration: "35h",
                sequences: 9
            },
            {
                id: "geometrie",
                title: "Géométrie",
                emoji: "📐",
                icon: <FiTriangle size={18}/>,
                color: "#1dd1a1",
                duration: "20h",
                sequences: 5
            },
            {
                id: "algo",
                title: "Algorithmique",
                emoji: "💻",
                icon: <FiCode size={18}/>,
                color: "#5f27cd",
                duration: "15h",
                sequences: 4
            }
        ],
        domaines: [
            {
                id: "stats",
                title: "Statistique et probabilités",
                emoji: "📊",
                color: "#ff6b6b",
                modules: [
                    {
                        title: "Statistique à deux variables",
                        emoji: "📈",
                        objectifs: [
                            "Approfondir la notion d'ajustement",
                            "Utiliser des ajustements pour interpoler ou extrapoler des valeurs",
                            "Travailler sur des situations professionnelles et économiques"
                        ],
                        capacites: [
                            "Choisir un modèle adapté pour un ajustement",
                            "Utiliser des outils numériques pour réaliser des ajustements",
                            "Interpréter des résultats statistiques",
                            "Effectuer des changements de variables pour des ajustements affines"
                        ],
                        connaissances: [
                            "Ajustement d'un nuage de points",
                            "Coefficient de détermination",
                            "Modèles linéaires et non linéaires",
                            "Changements de variables (logarithmes, exponentielles)"
                        ]
                    },
                    {
                        title: "Probabilités",
                        emoji: "🎲",
                        objectifs: [
                            "Modéliser des situations aléatoires complexes",
                            "Utiliser les arbres de probabilités pondérés",
                            "Travailler sur des problèmes concrets (économie, santé, etc.)"
                        ],
                        capacites: [
                            "Construire des arbres de probabilités pondérés",
                            "Calculer des probabilités conditionnelles",
                            "Utiliser la formule des probabilités totales",
                            "Reconnaître des événements indépendants"
                        ],
                        connaissances: [
                            "Arbres de probabilités pondérés",
                            "Probabilités conditionnelles",
                            "Formule des probabilités totales",
                            "Indépendance de deux événements"
                        ]
                    }
                ]
            },
            {
                id: "algebre",
                title: "Algèbre - Analyse",
                emoji: "➗",
                color: "#48dbfb",
                modules: [
                    {
                        title: "Suites numériques",
                        emoji: "🔢",
                        objectifs: [
                            "Modéliser des phénomènes discrets",
                            "Étudier les suites géométriques",
                            "Résoudre des problèmes concrets avec des suites"
                        ],
                        capacites: [
                            "Calculer des termes de suites géométriques",
                            "Déterminer le sens de variation d'une suite géométrique",
                            "Calculer la somme des n premiers termes",
                            "Représenter graphiquement des suites"
                        ],
                        connaissances: [
                            "Suites géométriques (définition, expression)",
                            "Variation des suites géométriques",
                            "Somme des termes d'une suite géométrique",
                            "Lien avec les fonctions exponentielles"
                        ]
                    },
                    {
                        title: "Fonctions polynômes de degré 3",
                        emoji: "📉",
                        objectifs: [
                            "Étudier des fonctions plus complexes",
                            "Approfondir les techniques de dérivation",
                            "Résoudre des problèmes d'optimisation"
                        ],
                        capacites: [
                            "Dériver des fonctions polynômes de degré 3",
                            "Étudier les variations d'une fonction",
                            "Déterminer des extremums",
                            "Résoudre des équations polynomiales"
                        ],
                        connaissances: [
                            "Fonction cube et ses propriétés",
                            "Dérivée des fonctions polynômes",
                            "Tableaux de variations",
                            "Extremums locaux"
                        ]
                    },
                    {
                        title: "Fonctions exponentielles",
                        emoji: "📈",
                        objectifs: [
                            "Modéliser des phénomènes exponentiels",
                            "Utiliser les propriétés des fonctions exponentielles",
                            "Résoudre des équations exponentielles"
                        ],
                        capacites: [
                            "Représenter graphiquement des fonctions exponentielles",
                            "Utiliser les propriétés opératoires",
                            "Résoudre des équations du type q^x = a",
                            "Faire le lien avec les suites géométriques"
                        ],
                        connaissances: [
                            "Fonctions exponentielles de base q",
                            "Variations des fonctions exponentielles",
                            "Propriétés opératoires",
                            "Lien avec les phénomènes d'évolution"
                        ]
                    },
                    {
                        title: "Logarithme décimal",
                        emoji: "📊",
                        objectifs: [
                            "Introduire la fonction logarithme",
                            "Utiliser les propriétés du logarithme décimal",
                            "Résoudre des problèmes concrets"
                        ],
                        capacites: [
                            "Représenter graphiquement la fonction logarithme",
                            "Utiliser les propriétés opératoires",
                            "Résoudre des équations logarithmiques",
                            "Utiliser le papier semi-logarithmique"
                        ],
                        connaissances: [
                            "Fonction logarithme décimal",
                            "Relation avec la fonction exponentielle",
                            "Propriétés opératoires",
                            "Applications pratiques"
                        ]
                    }
                ]
            },
            {
                id: "geometrie",
                title: "Géométrie",
                emoji: "📐",
                color: "#1dd1a1",
                modules: [
                    {
                        title: "Vecteurs dans l'espace",
                        emoji: "🧭",
                        objectifs: [
                            "Étendre les notions vectorielles à l'espace",
                            "Travailler sur des problèmes concrets de géométrie dans l'espace",
                            "Préparer à des applications professionnelles"
                        ],
                        capacites: [
                            "Déterminer les coordonnées d'un vecteur",
                            "Calculer des normes de vecteurs",
                            "Effectuer des opérations vectorielles",
                            "Reconnaître des vecteurs colinéaires"
                        ],
                        connaissances: [
                            "Coordonnées dans l'espace",
                            "Norme d'un vecteur",
                            "Opérations sur les vecteurs",
                            "Colinéarité"
                        ]
                    }
                ]
            },
            {
                id: "algo",
                title: "Algorithmique",
                emoji: "💻",
                color: "#5f27cd",
                modules: [
                    {
                        title: "Algorithmique et programmation",
                        emoji: "🤖",
                        objectifs: [
                            "Approfondir les compétences en programmation",
                            "Développer des algorithmes plus complexes",
                            "Automatiser des tâches mathématiques"
                        ],
                        capacites: [
                            "Décomposer des problèmes en sous-problèmes",
                            "Utiliser des structures conditionnelles et des boucles",
                            "Manipuler différents types de variables",
                            "Créer et utiliser des fonctions"
                        ],
                        connaissances: [
                            "Structures de contrôle",
                            "Types de variables",
                            "Fonctions en Python",
                            "Manipulation de listes"
                        ]
                    }
                ]
            }
        ],
        complements: [
            {
                id: "automatismes",
                title: "Automatismes",
                emoji: "⚡",
                color: "#ff9ff3",
                icon: <FiActivity size={18}/>,
                content: [
                    "Calcul de probabilités (conditionnelles, totales)",
                    "Manipulation des suites arithmétiques et géométriques",
                    "Dérivation des fonctions polynômes",
                    "Résolution d'équations polynomiales",
                    "Calcul vectoriel dans l'espace",
                    "Programmation d'algorithmes de base"
                ]
            },
            {
                id: "vocabulaire",
                title: "Vocabulaire logique",
                emoji: "🔤",
                color: "#48dbfb",
                icon: <FiBook size={18}/>,
                content: [
                    "Notations ensemblistes (∈, ⊂, ∩, ∪)",
                    "Connecteurs logiques (et, ou, implication)",
                    "Quantificateurs",
                    "Raisonnement par l'absurde",
                    "Utilisation de contre-exemples",
                    "Différents types d'égalités et équations"
                ]
            }
        ],
        programmeComplementaire: {
            title: "Programme complémentaire pour poursuite d'études",
            icon: <FiTrendingUp size={20}/>,
            color: "#ff9ff3",
            modules: [
                {
                    name: "Calcul intégral",
                    content: "Déterminer les primitives des fonctions usuelles par lecture inverse d’un tableau des dérivées. " +
                        "Déterminer, avec ou sans outils numériques, les primitives d’une " +
                        "somme de fonctions, du produit d’une fonction par un réel. " +
                        "Calculer l’intégrale, sur un intervalle " +
                        "d’une fonction ƒ admettant une primitive F, avec ou sans outils numériques. " +
                        "Interpréter l’intégrale d’une fonction définie et positive sur un intervalle comme une aire."
                },
                {
                    name: "Fonctions logarithme népérien et exponentielle ",
                    content: "Étudier les variations et représenter graphiquement la fonction logarithme népérien, " +
                        "sur un intervalle donné. Utiliser les propriétés opératoires de la fonction logarithme népérien " +
                        "pour transformer des écritures numériques ou littérales. Connaissances Fonction logarithme " +
                        "népérien x ↦ ln(x). Définition du nombre e. Propriétés opératoires de la fonction logarithme " +
                        "népérien. Utiliser les propriétés opératoires de la fonction exponentielle pour transformer des écritures numériques ou littérales. " +
                        "Étudier les variations et représenter graphiquement la fonction exponentielle sur ℝ. "
                },
                {
                    name: "Nombres complexes ",
                    content: "Calculer et interpréter géométriquement dans le plan rapporté à" +
                        " un repère orthonormé direct, la partie réelle, la partie imaginaire,le conjugué, " +
                        "le module d’un nombre complexe et un argument d’un nombre complexe non nul. " +
                        "Passer de la forme algébrique à la forme trigonométrique et réciproquement. "
                },
                {
                    name: "Produit scalaire de deux vecteurs du plan rapporté à un repère orthonormé",
                    content: "Utiliser les trois expressions du produit scalaire de " +
                        "deux vecteurs pour déterminer des longueurs et des angles.Reconnaître des vecteurs " +
                        "orthogonaux, à l’aide de leurs coordonnées dans un repère orthonormé. "
                }
            ]
        }
    };

    const handleChapitreClick = (chapitreId) => {
        navigate(`/programmes/math/${classId}/ProgrammeTerminaleMaths_B/sequences/${chapitreId}`);
    };

    // Animation variants
    const cardVariants = {
        hover: {
            y: -5,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
        }
    };

    return (
        <Container className="programme-container py-4">
            <BackButton/>

            {/* En-tête du programme */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <Card className="mb-4 border-0 shadow-sm" style={{backgroundColor: '#f8f9fa'}}>
                    <Card.Body className="d-flex align-items-center">
                        <div className="me-3 display-4" style={{color: programme.description.color}}>
                            {programme.description.emoji}
                        </div>
                        <div>
                            <h2 className="mb-1">{programme.description.title}</h2>
                            <p className="mb-0 text-muted">{programme.description.content}</p>
                        </div>
                    </Card.Body>
                </Card>
            </motion.div>

            {/* Préambule */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.2, duration: 0.5}}
            >
                <Accordion className="mb-4">
                    <Accordion.Item eventKey="0" className="border-0">
                        <Accordion.Header className="p-0">
                            <div className="d-flex align-items-center">
                                <div
                                    className="d-flex align-items-center justify-content-center me-3"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "8px",
                                        backgroundColor: `${programme.preambule.color}20`,
                                        color: programme.preambule.color
                                    }}
                                >
                                    <span style={{fontSize: "20px"}}>{programme.preambule.emoji}</span>
                                </div>
                                <h4 className="mb-0">{programme.preambule.title}</h4>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className="p-0 pt-3">
                            {programme.preambule.sections.map((section, index) => (
                                <Card key={index} className="mb-3 border-0 shadow-sm">
                                    <Card.Body>
                                        <div className="d-flex align-items-center mb-3">
                                            <div
                                                className="d-flex align-items-center justify-content-center me-3"
                                                style={{
                                                    width: "36px",
                                                    height: "36px",
                                                    borderRadius: "8px",
                                                    backgroundColor: `${programme.preambule.color}10`,
                                                    color: programme.preambule.color
                                                }}
                                            >
                                                <span style={{fontSize: "18px"}}>{section.emoji}</span>
                                            </div>
                                            <h5 className="mb-0">{section.title}</h5>
                                        </div>
                                        <ul className="mb-0">
                                            {section.content.map((item, i) => (
                                                <li key={i} className="mb-2 d-flex align-items-start">
                                                    <span className="me-2"
                                                          style={{color: programme.preambule.color}}>•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </motion.div>

            {/* Organisation du programme */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.3, duration: 0.5}}
            >
                <Card className="mb-4 border-0 shadow-sm">
                    <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                            <div
                                className="d-flex align-items-center justify-content-center me-3"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "8px",
                                    backgroundColor: `${programme.organisation.color}20`,
                                    color: programme.organisation.color
                                }}
                            >
                                <span style={{fontSize: "20px"}}>{programme.organisation.emoji}</span>
                            </div>
                            <h4 className="mb-0">{programme.organisation.title}</h4>
                        </div>
                        <ul className="mb-0">
                            {programme.organisation.content.map((item, index) => (
                                <li key={index} className="mb-2 d-flex align-items-start">
                                    <span className="me-2" style={{color: programme.organisation.color}}>•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Card.Body>
                </Card>
            </motion.div>

            {/* Chapitres principaux */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.4, duration: 0.5}}
            >
                <h3 className="mb-4 d-flex align-items-center">
                    <FiBook className="me-2"/>
                    Chapitres du Programme
                </h3>

                <div className="row g-4">
                    {programme.chapitres.map((chapitre) => (
                        <motion.div
                            key={chapitre.id}
                            className="col-md-6 col-lg-3"
                            whileHover="hover"
                            variants={cardVariants}
                        >
                            <Card
                                className="h-100 shadow-sm border-0"
                                style={{
                                    borderRadius: "12px",
                                    borderTop: `4px solid ${chapitre.color}`,
                                    cursor: "pointer"
                                }}
                                onClick={() => handleChapitreClick(chapitre.id)}
                            >
                                <Card.Body className="d-flex flex-column">
                                    <div className="d-flex align-items-center mb-3">
                                        <div
                                            className="d-flex align-items-center justify-content-center me-3"
                                            style={{
                                                width: "48px",
                                                height: "48px",
                                                borderRadius: "10px",
                                                backgroundColor: `${chapitre.color}20`,
                                                color: chapitre.color
                                            }}
                                        >
                                            <span style={{fontSize: "24px"}}>{chapitre.emoji}</span>
                                        </div>
                                        <div>
                                            <h5 className="mb-0 fw-bold">{chapitre.title}</h5>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between mb-3">
                                        <Badge pill bg="light" text="dark" className="d-flex align-items-center">
                                            <FiClock className="me-1"/> {chapitre.duration}
                                        </Badge>
                                        <Badge pill bg="light" text="dark" className="d-flex align-items-center">
                                            <FiList className="me-1"/> {chapitre.sequences} séq.
                                        </Badge>
                                    </div>

                                    <div className="mt-auto text-end">
                                        <small
                                            className="text-primary fw-bold d-flex align-items-center justify-content-end">
                                            Explorer <FiArrowRight className="ms-1"/>
                                        </small>
                                    </div>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Domaines du programme */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.5, duration: 0.5}}
            >
                <h3 className="mt-5 mb-4 d-flex align-items-center">
                    <FiBook className="me-2"/>
                    Domaines du Programme
                </h3>

                <div className="row g-4">
                    {programme.domaines.map((domaine) => (
                        <div key={domaine.id} className="col-md-6 col-lg-3">
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Body className="d-flex flex-column">
                                    <div className="d-flex align-items-center mb-3">
                                        <div
                                            className="d-flex align-items-center justify-content-center me-3"
                                            style={{
                                                width: "48px",
                                                height: "48px",
                                                borderRadius: "10px",
                                                backgroundColor: `${domaine.color}20`,
                                                color: domaine.color
                                            }}
                                        >
                                            <span style={{fontSize: "24px"}}>{domaine.emoji}</span>
                                        </div>
                                        <div>
                                            <h5 className="mb-0 fw-bold">{domaine.title}</h5>
                                        </div>
                                    </div>

                                    <Accordion flush>
                                        {domaine.modules.map((module, i) => (
                                            <Accordion.Item key={`module-${i}`} eventKey={i.toString()}
                                                            className="border-0">
                                                <Accordion.Header className="p-0 bg-transparent">
                                                    <div className="d-flex align-items-center">
                                                        <span className="me-2"
                                                              style={{fontSize: "18px"}}>{module.emoji}</span>
                                                        <small className="fw-bold">{module.title}</small>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body className="p-0 pt-2">
                                                    <div className="mb-3">
                                                        <h6 className="small fw-bold">Objectifs:</h6>
                                                        <ul className="small mb-2">
                                                            {module.objectifs.map((obj, j) => (
                                                                <li key={`obj-${i}-${j}`}>{obj}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="mb-3">
                                                        <h6 className="small fw-bold">Capacités:</h6>
                                                        <ul className="small mb-2">
                                                            {module.capacites.map((cap, j) => (
                                                                <li key={`cap-${i}-${j}`}>{cap}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h6 className="small fw-bold">Connaissances:</h6>
                                                        <ul className="small mb-0">
                                                            {module.connaissances.map((con, j) => (
                                                                <li key={`con-${i}-${j}`}>{con}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Compléments */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.6, duration: 0.5}}
            >
                <h3 className="mt-5 mb-4 d-flex align-items-center">
                    <FiBook className="me-2"/>
                    Compléments
                </h3>

                <div className="row g-4">
                    {programme.complements.map((complement) => (
                        <div key={complement.id} className="col-md-6">
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Body className="d-flex flex-column">
                                    <div className="d-flex align-items-center mb-3">
                                        <div
                                            className="d-flex align-items-center justify-content-center me-3"
                                            style={{
                                                width: "48px",
                                                height: "48px",
                                                borderRadius: "10px",
                                                backgroundColor: `${complement.color}20`,
                                                color: complement.color
                                            }}
                                        >
                                            <span style={{fontSize: "24px"}}>{complement.emoji}</span>
                                        </div>
                                        <div>
                                            <h5 className="mb-0 fw-bold">{complement.title}</h5>
                                        </div>
                                    </div>

                                    <ul className="mb-0">
                                        {complement.content.map((item, i) => (
                                            <li key={`item-${i}`} className="mb-1 small">
                                                {item.startsWith("- ") ? (
                                                    <span className="ms-3 d-block">{item}</span>
                                                ) : (
                                                    item
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Programme complémentaire */}
            {/* Programme complémentaire */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.7, duration: 0.5}}
            >
                <h3 className="mt-5 mb-4 d-flex align-items-center">
                    <FiTrendingUp className="me-2"/>
                    Programme complémentaire pour poursuite d'études
                </h3>

                <Card className="shadow-sm border-0 mb-4">
                    <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                            <div
                                className="d-flex align-items-center justify-content-center me-3"
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "10px",
                                    backgroundColor: `${programme.programmeComplementaire.color}20`,
                                    color: programme.programmeComplementaire.color
                                }}
                            >
                                {programme.programmeComplementaire.icon}
                            </div>
                            <h4 className="mb-0 fw-bold">{programme.programmeComplementaire.title}</h4>
                        </div>

                        <Accordion flush>
                            {programme.programmeComplementaire.modules.map((module, index) => (
                                <Accordion.Item
                                    key={`mod-${index}`}
                                    eventKey={index.toString()}
                                    className="border-0 mb-2"
                                >
                                    <Accordion.Header className="p-0 bg-transparent">
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="d-flex align-items-center justify-content-center me-3"
                                                style={{
                                                    width: "36px",
                                                    height: "36px",
                                                    borderRadius: "8px",
                                                    backgroundColor: `${programme.programmeComplementaire.color}10`,
                                                    color: programme.programmeComplementaire.color
                                                }}
                                            >
                                                <FiBook size={16}/>
                                            </div>
                                            <h6 className="fw-bold mb-0">{module.name}</h6>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body className="p-0 pt-2 ps-4">
                                        <div className="ps-4 border-start"
                                             style={{borderColor: `${programme.programmeComplementaire.color}50`}}>
                                            <p className="mb-0 ">{module.content}</p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Card.Body>
                </Card>
            </motion.div>
        </Container>
    );
};

export default ProgrammeTerminaleMaths_B;
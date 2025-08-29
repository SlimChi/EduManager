import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Container, Badge, Card, Accordion, ListGroup} from 'react-bootstrap';
import {
    FiBook, FiClock, FiList, FiArrowRight, FiBarChart2,
    FiPercent, FiCode, FiDollarSign, FiShapes, FiCheckCircle,
    FiAward, FiActivity, FiUsers, FiEdit, FiLayers, FiTrendingUp,
    FiCpu, FiPieChart, FiTarget, FiGlobe
} from 'react-icons/fi';
import BackButton from "../components/navigation/BackButton";
import {motion} from 'framer-motion';

const ProgrammePremiereMaths = () => {
    const {classId} = useParams();
    const navigate = useNavigate();

    // Structure du programme avec ajout d'icônes et couleurs
    const programme = {
        description: {
            title: "Mathématiques - Première Professionnelle",
            content: "Programme complet pour la formation mathématique en première professionnelle",
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
                        "Consolider le socle commun de connaissances, compétences et culture",
                        "Former à l'activité mathématique et scientifique",
                        "Fournir des outils utiles pour les enseignements généraux et professionnels",
                        "Assurer les bases nécessaires pour la poursuite d'études",
                        "Développer des compétences transversales",
                        "Donner une culture scientifique et civique"
                    ]
                },
                {
                    title: "Compétences travaillées",
                    emoji: "💪",
                    icon: <FiActivity size={18}/>,
                    content: [
                        "S'approprier (rechercher, extraire et organiser l'information)",
                        "Analyser/Raisonner (émettre des conjectures, proposer des méthodes)",
                        "Réaliser (mettre en œuvre des démarches, calculer, expérimenter)",
                        "Valider (interpréter des résultats, argumenter, démontrer)",
                        "Communiquer (rendre compte, expliquer des démarches)"
                    ]
                },
                {
                    title: "Lignes directrices",
                    emoji: "🧭",
                    icon: <FiEdit size={18}/>,
                    content: [
                        "La bivalence (cohérence entre mathématiques et physique-chimie)",
                        "La maîtrise de la langue française",
                        "La co-intervention avec les enseignements professionnels",
                        "La diversité des activités de l'élève",
                        "La trace écrite (synthèse décontextualisée)",
                        "Le travail expérimental ou numérique",
                        "L'évaluation des acquis"
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
                "Algèbre - Analyse (5 modules)",
                "Géométrie (3 modules)",
                "Compléments : Automatismes, Algorithmique et programmation, Vocabulaire ensembliste et logique"
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
                sequences: 4
            },
            {
                id: "algebre",
                title: "Algèbre – Analyse",
                emoji: "➗",
                icon: <FiPercent size={18}/>,
                color: "#48dbfb",
                duration: "40h",
                sequences: 10
            },
            {
                id: "geometrie",
                title: "Géométrie",
                emoji: "📐",
                icon: <FiArrowRight size={18}/>,
                color: "#1dd1a1",
                duration: "20h",
                sequences: 6
            },
            {
                id: "algo",
                title: "Algorithmique",
                emoji: "💻",
                icon: <FiCode size={18}/>,
                color: "#5f27cd",
                duration: "15h",
                sequences: 4
            },
            {
                id: "calculs_financiers",
                title: "Calculs financiers",
                emoji: "💰",
                icon: <FiDollarSign size={18}/>,
                color: "#feca57",
                duration: "12h",
                sequences: 3
            },
            {
                id: "cointervention",
                title: "Co-Intervention",
                emoji: "🧑‍🤝‍🧑",
                icon: <FiUsers size={18}/>,
                color: "#ff9ff3",
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
                            "Déterminer une équation de droite d'ajustement",
                            "Interpoler ou extrapoler des valeurs inconnues",
                            "Évaluer la pertinence d'un ajustement affine"
                        ],
                        capacites: [
                            "Représenter graphiquement un nuage de points",
                            "Réaliser un ajustement affine avec outils numériques",
                            "Déterminer l'équation d'une droite d'ajustement",
                            "Calculer le coefficient de détermination"
                        ],
                        connaissances: [
                            "Nuage de points associé à une série statistique à deux variables",
                            "Ajustement affine par la méthode des moindres carrés",
                            "Coefficient de détermination R²",
                            "Interprétation des résultats"
                        ]
                    },
                    {
                        title: "Probabilités conditionnelles",
                        emoji: "🎲",
                        objectifs: [
                            "Modéliser une expérience aléatoire dans un univers fini",
                            "Calculer des probabilités conditionnelles",
                            "Exploiter des tableaux croisés d'effectifs"
                        ],
                        capacites: [
                            "Calculer des probabilités d'événements",
                            "Compléter et exploiter des tableaux croisés",
                            "Calculer des fréquences conditionnelles",
                            "Déterminer des probabilités conditionnelles"
                        ],
                        connaissances: [
                            "Probabilité d'un événement dans un univers fini",
                            "Événements incompatibles, contraires",
                            "Réunion et intersection d'événements",
                            "Probabilité conditionnelle"
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
                        emoji: "📶",
                        objectifs: [
                            "Modéliser des phénomènes discrets par des suites",
                            "Étudier le comportement de suites",
                            "Résoudre des problèmes avec des suites arithmétiques"
                        ],
                        capacites: [
                            "Générer les termes d'une suite",
                            "Étudier le sens de variation d'une suite",
                            "Reconnaître une suite arithmétique",
                            "Calculer la somme des termes d'une suite arithmétique"
                        ],
                        connaissances: [
                            "Notation indicielle des suites",
                            "Suites arithmétiques (définition, raison)",
                            "Expression du terme de rang n",
                            "Somme des n premiers termes"
                        ]
                    },
                    {
                        title: "Résolution graphique",
                        emoji: "📉",
                        objectifs: [
                            "Résoudre graphiquement des équations et inéquations",
                            "Utiliser les outils numériques pour l'analyse graphique"
                        ],
                        capacites: [
                            "Résoudre ƒ(x) = g(x) graphiquement",
                            "Résoudre ƒ(x) ≥ g(x) graphiquement",
                            "Utiliser des logiciels de géométrie dynamique"
                        ],
                        connaissances: [
                            "Résolution graphique d'équations",
                            "Résolution graphique d'inéquations",
                            "Interprétation des solutions"
                        ]
                    },
                    {
                        title: "Fonctions polynômes du second degré",
                        emoji: "📊",
                        objectifs: [
                            "Découvrir les fonctions polynômes de degré 2",
                            "Étudier le signe d'un polynôme de degré 2",
                            "Factoriser des polynômes du second degré"
                        ],
                        capacites: [
                            "Visualiser le nombre de solutions de ƒ(x) = 0",
                            "Donner l'allure de la représentation graphique",
                            "Tester si un nombre est racine d'un polynôme",
                            "Factoriser un polynôme de degré 2"
                        ],
                        connaissances: [
                            "Fonction polynôme de degré 2",
                            "Racines réelles d'un polynôme",
                            "Forme factorisée",
                            "Signe d'un polynôme de degré 2"
                        ]
                    },
                    {
                        title: "Dérivation",
                        emoji: "📐",
                        objectifs: [
                            "Introduire la notion de nombre dérivé",
                            "Étudier les variations des fonctions dérivables",
                            "Déterminer des extremums"
                        ],
                        capacites: [
                            "Construire une tangente à une courbe",
                            "Déterminer un nombre dérivé",
                            "Calculer des fonctions dérivées",
                            "Étudier les variations d'une fonction"
                        ],
                        connaissances: [
                            "Nombre dérivé, tangente",
                            "Fonction dérivée",
                            "Règles de dérivation",
                            "Lien entre signe de la dérivée et variations"
                        ]
                    },
                    {
                        title: "Fonction inverse",
                        emoji: "↔️",
                        objectifs: [
                            "Étudier la fonction inverse",
                            "Utiliser ses propriétés dans des problèmes"
                        ],
                        capacites: [
                            "Étudier la fonction inverse",
                            "Calculer sa dérivée",
                            "Dresser son tableau de variations",
                            "Tracer sa représentation graphique"
                        ],
                        connaissances: [
                            "Définition de la fonction inverse",
                            "Dérivée de la fonction inverse",
                            "Variations de la fonction inverse",
                            "Représentation graphique"
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
                        title: "Géométrie dans l'espace",
                        emoji: "🔺",
                        objectifs: [
                            "Développer la vision dans l'espace",
                            "Réaliser des sections de solides par un plan"
                        ],
                        capacites: [
                            "Représenter des solides usuels",
                            "Exploiter une représentation d'un solide",
                            "Réaliser la section d'un solide par un plan",
                            "Construire des sections planes"
                        ],
                        connaissances: [
                            "Solides usuels (cube, pyramide, cylindre, etc.)",
                            "Représentation dans l'espace",
                            "Section d'un solide par un plan",
                            "Perspective cavalière"
                        ]
                    },
                    {
                        title: "Vecteurs du plan",
                        emoji: "➗",
                        objectifs: [
                            "Introduire les vecteurs comme outil d'étude",
                            "Utiliser les vecteurs en physique et mathématiques"
                        ],
                        capacites: [
                            "Construire un représentant d'un vecteur",
                            "Reconnaître des vecteurs égaux, colinéaires",
                            "Calculer des sommes de vecteurs",
                            "Déterminer des coordonnées de vecteurs"
                        ],
                        connaissances: [
                            "Éléments caractéristiques d'un vecteur",
                            "Vecteurs égaux, opposés, colinéaires",
                            "Somme de vecteurs, produit par un réel",
                            "Coordonnées dans un repère orthogonal"
                        ]
                    },
                    {
                        title: "Trigonométrie",
                        emoji: "📏",
                        objectifs: [
                            "Découvrir des outils pour modéliser des phénomènes périodiques",
                            "Introduire la mesure en radians",
                            "Étudier les fonctions sinus et cosinus"
                        ],
                        capacites: [
                            "Placer un point sur le cercle trigonométrique",
                            "Effectuer des conversions degrés/radians",
                            "Déterminer cosinus et sinus d'un réel",
                            "Construire les courbes des fonctions trigonométriques"
                        ],
                        connaissances: [
                            "Cercle trigonométrique, radian",
                            "Cosinus et sinus d'un nombre réel",
                            "Valeurs particulières",
                            "Fonctions sinus et cosinus"
                        ]
                    }
                ]
            },
            {
                id: "calculs_financiers",
                title: "Calculs financiers",
                emoji: "💰",
                color: "#feca57",
                modules: [
                    {
                        title: "Calculs commerciaux et financiers",
                        emoji: "💸",
                        objectifs: [
                            "Réinvestir les suites arithmétiques et la dérivation",
                            "Étudier des situations professionnelles avec calculs financiers"
                        ],
                        capacites: [
                            "Calculer des intérêts simples",
                            "Déterminer des taux proportionnels",
                            "Calculer des coûts de production",
                            "Déterminer des coûts marginaux et moyens"
                        ],
                        connaissances: [
                            "Intérêts simples, taux proportionnels",
                            "Capital, taux, durée, valeur acquise",
                            "Coût total, coût marginal, coût moyen",
                            "Optimisation de coûts"
                        ]
                    }
                ]
            },
            {
                id: "cointervention",
                title: "Co-intervention",
                emoji: "🤝",
                color: "#ff9ff3",
                modules: [
                    {
                        title: "Co-intervention pédagogique",
                        emoji: "👨‍🏫🔁📚",
                        objectifs: [
                            "Donner une dimension concrète aux apprentissages",
                            "Permettre une vision globale et transversale des enseignements",
                            "Mettre en œuvre des situations contextualisées en lien avec le référentiel professionnel"
                        ],
                        capacites: [
                            "Acquérir simultanément des compétences professionnelles et des savoirs scientifiques",
                            "Réinvestir des capacités et connaissances en mathématiques dans un nouveau contexte professionnel",
                            "Réutiliser des compétences professionnelles pour aborder des notions scientifiques"
                        ],
                        connaissances: [
                            "Méthodologie d'analyse de situations problématisées",
                            "Croisement entre référentiel professionnel et programmes scientifiques",
                            "Transversalité des savoirs et compétences"
                        ]
                    }
                ]
            }
        ],
        complements: [
            {
                id: "algo",
                title: "Algorithmique",
                emoji: "💻",
                color: "#5f27cd",
                icon: <FiCode size={18}/>,
                content: [
                    "Approfondir les notions de variable, instruction conditionnelle et boucles",
                    "Utiliser des fonctions et la programmation modulaire",
                    "Introduire la notion de liste",
                    "Travailler sur :",
                    "- Analyse et décomposition de problèmes complexes",
                    "- Instructions conditionnelles et boucles avancées",
                    "- Types de variables et structures de données",
                    "- Fonctions avec paramètres et valeurs de retour",
                    "- Génération et manipulation de listes"
                ]
            },
            {
                id: "automatismes",
                title: "Automatismes",
                emoji: "⚡",
                color: "#ff9ff3",
                icon: <FiCheckCircle size={18}/>,
                content: [
                    "Calcul de probabilités dans des situations simples",
                    "Dénombrements avec tableaux et arbres",
                    "Lecture et interprétation de graphiques et diagrammes",
                    "Résolution d'équations et inéquations du premier degré",
                    "Reconnaissance de situations de proportionnalité",
                    "Détermination d'extremums de fonctions",
                    "Calculs d'intérêts simples et valeurs acquises",
                    "Calculs d'aires et volumes de figures usuelles",
                    "Développement et factorisation d'expressions algébriques"
                ]
            },
            {
                id: "vocabulaire",
                title: "Vocabulaire logique",
                emoji: "🔤",
                color: "#48dbfb",
                icon: <FiBook size={18}/>,
                content: [
                    "Notations ensemblistes (∈, ⊂, ∩, ∪, ∁)",
                    "Intervalles de nombres réels",
                    "Connecteurs logiques (et, ou)",
                    "Quantificateurs (quel que soit, il existe)",
                    "Implications et équivalences",
                    "Réciproque d'une implication",
                    "Raisonnement par l'absurde et par disjonction des cas",
                    "Utilisation de contre-exemples"
                ]
            }
        ]
    };

    const handleChapitreClick = (chapitreId) => {
        navigate(`/programmes/math/${classId}/ProgrammePremiereMaths/sequences/${chapitreId}`);
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
                            className="col-md-6 col-lg-4"
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
                        <div key={domaine.id} className="col-md-6 col-lg-4">
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
                        <div key={complement.id} className="col-md-4">
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
        </Container>
    );
};

export default ProgrammePremiereMaths;
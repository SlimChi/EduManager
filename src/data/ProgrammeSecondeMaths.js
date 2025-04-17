import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Badge, Card, Accordion, ListGroup } from 'react-bootstrap';
import {
    FiBook, FiClock, FiList, FiArrowRight, FiBarChart2,
    FiPercent, FiCode, FiDollarSign, FiShapes, FiCheckCircle,
    FiAward, FiActivity, FiUsers, FiEdit, FiLayers
} from 'react-icons/fi';
import BackButton from "../components/navigation/BackButton";
import { motion } from 'framer-motion';

const ProgrammeSecondeMaths = () => {
    const { classId } = useParams();
    const navigate = useNavigate();

    // Structure du programme avec ajout d'icônes et couleurs
    const programme = {
        description: {
            title: "Mathématiques - Seconde Professionnelle",
            content: "Programme complet pour la formation mathématique en seconde professionnelle",
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
                    icon: <FiAward size={18} />,
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
                    icon: <FiActivity size={18} />,
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
                    icon: <FiEdit size={18} />,
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
            icon: <FiLayers size={18} />,
            content: [
                "Statistique et probabilités (2 modules)",
                "Algèbre - Analyse (3 modules)",
                "Géométrie (1 module)",
                "Compléments : Automatismes, Algorithmique et programmation, Vocabulaire ensembliste et logique"
            ]
        },
        chapitres: [
            {
                id: "stats",
                title: "Statistique et probabilités",
                emoji: "📊",
                icon: <FiBarChart2 size={18} />,
                color: "#ff6b6b",
                duration: "20h",
                sequences: 3
            },
            {
                id: "algebre",
                title: "Algèbre – Analyse",
                emoji: "➗",
                icon: <FiPercent size={18} />,
                color: "#48dbfb",
                duration: "30h",
                sequences: 8
            },
            {
                id: "geometrie",
                title: "Géométrie",
                emoji: "📐",
                icon: <FiArrowRight size={18} />,
                color: "#1dd1a1",
                duration: "15h",
                sequences: 4
            },
            {
                id: "algo",
                title: "Algorithmique",
                emoji: "💻",
                icon: <FiCode size={18} />,
                color: "#5f27cd",
                duration: "10h",
                sequences: 3
            },
            {
                id: "Calculs_commerciaux",
                title: "Calculs financiers",
                emoji: "💰",
                icon: <FiDollarSign size={18} />,
                color: "#feca57",
                duration: "10h",
                sequences: 3
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
                        title: "Statistique à une variable",
                        emoji: "📈",
                        objectifs: [
                            "Favoriser la prise d'initiative et la conduite de raisonnements",
                            "Interpréter, analyser ou comparer des séries statistiques"
                        ],
                        capacites: [
                            "Recueillir et organiser des données statistiques",
                            "Représenter des séries statistiques (diagrammes en secteurs, bâtons, etc.)",
                            "Comparer des séries avec indicateurs de position et de dispersion",
                            "Construire et interpréter des diagrammes en boîte"
                        ],
                        connaissances: [
                            "Regroupement par classes",
                            "Indicateurs de position : mode, moyenne, médiane, quartiles",
                            "Indicateurs de dispersion : étendue, écart type, écart interquartile",
                            "Diagrammes en boîte à moustaches"
                        ]
                    },
                    {
                        title: "Probabilités",
                        emoji: "🎲",
                        objectifs: [
                            "Formaliser les notions élémentaires de probabilités",
                            "Faire percevoir la loi des grands nombres expérimentalement"
                        ],
                        capacites: [
                            "Observer la fluctuation des fréquences",
                            "Réaliser des simulations informatiques",
                            "Estimer des probabilités à partir de fréquences",
                            "Calculer des probabilités dans des cas simples"
                        ],
                        connaissances: [
                            "Vocabulaire des probabilités (expérience aléatoire, événement, etc.)",
                            "Fluctuation d'une fréquence sur des échantillons",
                            "Stabilisation des fréquences vers la probabilité",
                            "Dénombrements (tableaux, arbres)"
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
                        title: "Équations du 1er degré",
                        emoji: "🧮",
                        objectifs: [
                            "Traduire un problème par une équation ou inéquation",
                            "Étudier et résoudre ces équations/inéquations"
                        ],
                        capacites: [
                            "Traduire un problème par une équation/inéquation",
                            "Résoudre algébriquement ou graphiquement",
                            "Choisir une méthode de résolution adaptée"
                        ],
                        connaissances: [
                            "Équations du premier degré",
                            "Inéquations du premier degré",
                            "Intervalles de ℝ"
                        ]
                    },
                    {
                        title: "Fonctions",
                        emoji: "📉",
                        objectifs: [
                            "Consolider la notion de fonction",
                            "Exploiter différents registres (algébrique, graphique)",
                            "Étudier des fonctions de référence",
                            "Modéliser des problèmes concrets"
                        ],
                        capacites: [
                            "Utiliser différents modes de représentation",
                            "Déterminer images et antécédents",
                            "Étudier des variations de fonctions",
                            "Résoudre f(x) = c ou f(x) < c",
                            "Travailler avec des fonctions affines et carré"
                        ],
                        connaissances: [
                            "Fonctions linéaires et affines",
                            "Tableaux de variations",
                            "Courbes représentatives",
                            "Fonction carré et ses variations",
                            "Systèmes d'équations"
                        ]
                    },
                ]
            },
            {
                id: "Calculs_commerciaux",
                title: "Calculs financiers",
                emoji: "💰",
                color: "#feca57",
                modules: [
                    {
                        title: "Calculs financiers",
                        emoji: "💸",
                        objectifs: [
                            "Maîtriser les pourcentages dans des contextes professionnels",
                            "Travailler sur des calculs financiers de base"
                        ],
                        capacites: [
                            "Compléter des documents professionnels (factures, devis)",
                            "Calculer des intérêts simples",
                            "Déterminer des taux ou durées de placement"
                        ],
                        connaissances: [
                            "Pourcentages et coefficients multiplicateurs",
                            "Capital, taux, intérêt, valeur acquise"
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
                        title: "Géométrie",
                        emoji: "△",
                        objectifs: [
                            "Résoudre des problèmes géométriques",
                            "Développer la vision dans l'espace",
                            "Réactiver les propriétés de géométrie plane"
                        ],
                        capacites: [
                            "Reconnaître et nommer des solides usuels",
                            "Calculer des longueurs, angles, aires et volumes",
                            "Travailler avec des agrandissements/réductions",
                            "Utiliser les théorèmes de Pythagore et Thalès"
                        ],
                        connaissances: [
                            "Solides usuels (cube, pyramide, cylindre, etc.)",
                            "Figures planes usuelles",
                            "Théorèmes de Pythagore et Thalès",
                            "Formules de périmètre, aire et volume"
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
                icon: <FiCode size={18} />,
                content: [
                    "Consolider les compétences en algorithmique",
                    "Passer progressivement à Python",
                    "Développer la programmation modulaire",
                    "Travailler sur :",
                    "- Analyse et décomposition de problèmes",
                    "- Instructions conditionnelles et boucles",
                    "- Types de variables",
                    "- Fonctions informatiques"
                ]
            },
            {
                id: "automatismes",
                title: "Automatismes",
                emoji: "⚡",
                color: "#ff9ff3",
                icon: <FiCheckCircle size={18} />,
                content: [
                    "Calcul de fréquences et pourcentages",
                    "Calculs avec puissances de 10",
                    "Manipulation de fractions",
                    "Développement et factorisation",
                    "Résolution d'équations simples",
                    "Conversions d'unités",
                    "Configurations de Pythagore et Thalès",
                    "Calculs d'aires et volumes"
                ]
            },
            {
                id: "vocabulaire",
                title: "Vocabulaire logique",
                emoji: "🔤",
                color: "#48dbfb",
                icon: <FiBook size={18} />,
                content: [
                    "Notations ensemblistes (∈, ⊂, ∩, ∪)",
                    "Intervalles de nombres réels",
                    "Connecteurs logiques (et, ou)",
                    "Quantificateurs",
                    "Implications et équivalences",
                    "Raisonnement par l'absurde",
                    "Utilisation de contre-exemples"
                ]
            }
        ]
    };

    const handleChapitreClick = (chapitreId) => {
        navigate(`/programmes/math/${classId}/ProgrammeSecondeMaths/sequences/${chapitreId}`);
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
            <BackButton />

            {/* En-tête du programme */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="mb-4 border-0 shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
                    <Card.Body className="d-flex align-items-center">
                        <div className="me-3 display-4" style={{ color: programme.description.color }}>
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
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
                                    <span style={{ fontSize: "20px" }}>{programme.preambule.emoji}</span>
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
                                                <span style={{ fontSize: "18px" }}>{section.emoji}</span>
                                            </div>
                                            <h5 className="mb-0">{section.title}</h5>
                                        </div>
                                        <ul className="mb-0">
                                            {section.content.map((item, i) => (
                                                <li key={i} className="mb-2 d-flex align-items-start">
                                                    <span className="me-2" style={{ color: programme.preambule.color }}>•</span>
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
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
                                <span style={{ fontSize: "20px" }}>{programme.organisation.emoji}</span>
                            </div>
                            <h4 className="mb-0">{programme.organisation.title}</h4>
                        </div>
                        <p className="mb-3">{programme.organisation.description}</p>
                        <ul className="mb-0">
                            {programme.organisation.content.map((item, index) => (
                                <li key={index} className="mb-2 d-flex align-items-start">
                                    <span className="me-2" style={{ color: programme.organisation.color }}>•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Card.Body>
                </Card>
            </motion.div>

            {/* Chapitres principaux */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <h3 className="mb-4 d-flex align-items-center">
                    <FiBook className="me-2" />
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
                                            <span style={{ fontSize: "24px" }}>{chapitre.emoji}</span>
                                        </div>
                                        <div>
                                            <h5 className="mb-0 fw-bold">{chapitre.title}</h5>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between mb-3">
                                        <Badge pill bg="light" text="dark" className="d-flex align-items-center">
                                            <FiClock className="me-1" /> {chapitre.duration}
                                        </Badge>
                                        <Badge pill bg="light" text="dark" className="d-flex align-items-center">
                                            <FiList className="me-1" /> {chapitre.sequences} séq.
                                        </Badge>
                                    </div>

                                    <div className="mt-auto text-end">
                                        <small className="text-primary fw-bold d-flex align-items-center justify-content-end">
                                            Explorer <FiArrowRight className="ms-1" />
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <h3 className="mt-5 mb-4 d-flex align-items-center">
                    <FiBook className="me-2" />
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
                                            <span style={{ fontSize: "24px" }}>{domaine.emoji}</span>
                                        </div>
                                        <div>
                                            <h5 className="mb-0 fw-bold">{domaine.title}</h5>
                                        </div>
                                    </div>

                                    <Accordion flush>
                                        {domaine.modules.map((module, i) => (
                                            <Accordion.Item key={`module-${i}`} eventKey={i.toString()} className="border-0">
                                                <Accordion.Header className="p-0 bg-transparent">
                                                    <div className="d-flex align-items-center">
                                                        <span className="me-2" style={{ fontSize: "18px" }}>{module.emoji}</span>
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <h3 className="mt-5 mb-4 d-flex align-items-center">
                    <FiBook className="me-2" />
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
                                            <span style={{ fontSize: "24px" }}>{complement.emoji}</span>
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

export default ProgrammeSecondeMaths;
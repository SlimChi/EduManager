import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Badge, Card, Accordion, ListGroup } from 'react-bootstrap';
import {
    FiBook, FiClock, FiList, FiArrowRight, FiZap,
    FiThermometer, FiSettings, FiDroplet, FiRadio,
    FiShield, FiAward, FiActivity, FiUsers, FiEdit, FiLayers
} from 'react-icons/fi';
import BackButton from "../components/navigation/BackButton";
import { motion } from 'framer-motion';

const ProgrammeTerminalePhysique_3 = () => {
    const { classId } = useParams();
    const navigate = useNavigate();

    // Structure du programme avec ajout d'icônes et couleurs
    const programme = {
        description: {
            title: "Physique-Chimie - Terminale Professionnelle (Groupement 3)",
            content: "Programme axé sur l'efficacité énergétique des bâtiments et l'écoresponsabilité, avec un approfondissement particulier du domaine thermique.",
            emoji: "🏗️",
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
                        "Consolider les acquis dans les domaines des mathématiques et de la physique-chimie",
                        "Approfondir la formation aux activités de nature mathématique, physique et chimique",
                        "Fournir des outils utiles aux enseignements généraux et professionnels",
                        "Assurer les bases indispensables à la formation tout au long de la vie",
                        "Développer des compétences transversales pour l'insertion professionnelle",
                        "Former des citoyens éclairés face aux défis énergétiques et environnementaux"
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
                        "La cohérence entre mathématiques et physique-chimie",
                        "La maîtrise de la langue française",
                        "La co-intervention avec les enseignements professionnels",
                        "La diversité des activités de l'élève",
                        "Le travail expérimental et numérique",
                        "L'évaluation des acquis",
                        "L'intégration des enjeux du développement durable"
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
                "Électricité (2 modules)",
                "Thermique (1 module approfondi)",
                "Mécanique (1 module)",
                "Chimie (1 module)",
                "Signaux (3 modules)",
                "Compléments : Développement durable, Mesures et incertitudes, Sécurité"
            ]
        },
        chapitres: [
            {
                id: "electricite",
                title: "Électricité",
                emoji: "⚡",
                icon: <FiZap size={18} />,
                color: "#feca57",
                duration: "20h",
                sequences: 4,
                subtitle: "Production et distribution d'énergie"
            },
            {
                id: "thermique",
                title: "Thermique",
                emoji: "🌡️",
                icon: <FiThermometer size={18} />,
                color: "#ff6b6b",
                duration: "25h",
                sequences: 5,
                subtitle: "Efficacité énergétique et effet de serre"
            },
            {
                id: "mecanique",
                title: "Mécanique",
                emoji: "⚙️",
                icon: <FiSettings size={18} />,
                color: "#48dbfb",
                duration: "15h",
                sequences: 3,
                subtitle: "Mouvement et équilibre"
            },
            {
                id: "chimie",
                title: "Chimie",
                emoji: "🧪",
                icon: <FiDroplet size={18} />,
                color: "#1dd1a1",
                duration: "15h",
                sequences: 3,
                subtitle: "Matériaux et environnement"
            },
            {
                id: "signaux",
                title: "Signaux",
                emoji: "📡",
                icon: <FiRadio size={18} />,
                color: "#5f27cd",
                duration: "20h",
                sequences: 4,
                subtitle: "Transmission d'information"
            }
        ],
        domaines: [
            {
                id: "electricite",
                title: "Électricité",
                emoji: "⚡",
                color: "#feca57",
                modules: [
                    {
                        title: "Transport d'énergie",
                        emoji: "🔌",
                        objectifs: [
                            "Comprendre les principes de distribution d'énergie électrique",
                            "Analyser l'effet Joule et son impact sur les pertes en ligne",
                            "Utiliser des transformateurs dans les réseaux de distribution"
                        ],
                        capacites: [
                            "Représenter un réseau de distribution simplifié",
                            "Justifier le transport sous haute tension",
                            "Mettre en évidence le rôle des transformateurs",
                            "Calculer les pertes par effet Joule"
                        ],
                        connaissances: [
                            "Relation puissance/résistance/tension",
                            "Rôle des transformateurs (abaisseur/élévateur)",
                            "Pertes en ligne et efficacité énergétique"
                        ]
                    },
                    {
                        title: "Stockage électrochimique",
                        emoji: "🔋",
                        objectifs: [
                            "Comprendre les principes de stockage d'énergie",
                            "Comparer différentes technologies d'accumulateurs",
                            "Évaluer l'énergie stockée dans un système"
                        ],
                        capacites: [
                            "Réaliser une pile et mesurer sa tension",
                            "Étudier charge/décharge d'un accumulateur",
                            "Calculer l'énergie stockée",
                            "Comparer des technologies (énergie/masse)"
                        ],
                        connaissances: [
                            "Transformations énergétiques dans les piles",
                            "Réactions d'oxydoréduction aux électrodes",
                            "Capacité des accumulateurs (Ah)"
                        ]
                    }
                ]
            },
            {
                id: "thermique",
                title: "Thermique",
                emoji: "🌡️",
                color: "#ff6b6b",
                modules: [
                    {
                        title: "Rayonnement thermique",
                        emoji: "☀️",
                        objectifs: [
                            "Comprendre les principes du rayonnement thermique",
                            "Expliquer le mécanisme de l'effet de serre",
                            "Analyser l'impact des activités humaines"
                        ],
                        capacites: [
                            "Utiliser une caméra thermique",
                            "Expérimenter l'absorption IR",
                            "Expliquer l'effet de serre",
                            "Analyser des images thermographiques"
                        ],
                        connaissances: [
                            "Caractéristiques du rayonnement thermique",
                            "Gaz à effet de serre (CO2, méthane...)",
                            "Impact des activités humaines sur le climat"
                        ]
                    }
                ]
            },
            {
                id: "mecanique",
                title: "Mécanique",
                emoji: "⚙️",
                color: "#48dbfb",
                modules: [
                    {
                        title: "Cinématique",
                        emoji: "↗️",
                        objectifs: [
                            "Caractériser le mouvement rectiligne",
                            "Analyser les relations vitesse/accélération",
                            "Interpréter des graphiques de mouvement"
                        ],
                        capacites: [
                            "Mesurer vitesses et accélérations",
                            "Identifier des mouvements à partir de graphes",
                            "Calculer des variations de vitesse",
                            "Estimer des ordres de grandeur"
                        ],
                        connaissances: [
                            "Relations vitesse/accélération/durée",
                            "Mouvement rectiligne uniforme/accéléré",
                            "Ordres de grandeur des vitesses"
                        ]
                    }
                ]
            },
            {
                id: "chimie",
                title: "Chimie",
                emoji: "🧪",
                color: "#1dd1a1",
                modules: [
                    {
                        title: "Oxydoréduction",
                        emoji: "⚗️",
                        objectifs: [
                            "Prévoir des réactions d'oxydoréduction",
                            "Protéger les métaux contre la corrosion",
                            "Comprendre les mécanismes de passivation"
                        ],
                        capacites: [
                            "Classer des couples oxydant/réducteur",
                            "Écrire des équations de réaction",
                            "Mettre en œuvre une protection anodique",
                            "Expérimenter la passivation"
                        ],
                        connaissances: [
                            "Réactions d'oxydoréduction",
                            "Phénomène de passivation",
                            "Protection par anode sacrificielle"
                        ]
                    }
                ]
            },
            {
                id: "signaux",
                title: "Signaux",
                emoji: "📡",
                color: "#5f27cd",
                modules: [
                    {
                        title: "Choisir une source lumineuse",
                        emoji: "💡",
                        objectifs: [
                            "Comparer l'efficacité énergétique des sources",
                            "Analyser des spectres d'émission",
                            "Comprendre les propriétés des lasers"
                        ],
                        capacites: [
                            "Exploiter le spectre d’émission fourni d’une lampe. ",
                            "Comparer expérimentalement l’efficacité énergétique de deux sources lumineuses. ",
                            "Mettre en évidence expérimentalement les propriétés du faisceau lumineux produit par un laser. "
                        ],
                        connaissances: [
                            "Savoir qu’une source lumineuse est caractérisée par son spectre d’émission. ",
                            "Connaître les caractéristiques spectrales élémentaires des sources lumineuses suivantes : " +
                            "soleil, lampe à DEL, lampe à incandescence, " +
                            "laser. Connaître la définition de l’efficacité énergétique d’une source lumineuse. ",
                            "Connaître les propriétés particulières de la lumière émise par les lasers. "
                        ]
                    },
                    {
                        title: "Transmettre l’information ",
                        emoji: "📶",
                        objectifs: [
                            "Comprendre les principes de transmission",
                            "Mettre en œuvre des systèmes de transmission",
                            "Utiliser des fibres optiques"
                        ],
                        capacites: [
                            "Mettre en œuvre un système de transmission d’informations par propagation libre ou par propagation guidée. ",
                            "Identifier les éléments principaux de systèmes de transmission d’informations utilisés dans la vie courante. ",

                        ],
                        connaissances: [
                            "Savoir que la transmission d’informations s’appuie sur l’émission et la réception d’une onde. ",
                            "Connaître les principaux types d’ondes utilisées dans les systèmes de transmission d’informations courants : " +
                            "ondes sonores, lumineuses, électromagnétiques. ",
                            "Savoir que le fonctionnement d’une fibre optique repose sur le phénomène de réflexion totale."
                        ]
                    },
                    {
                        title: "Atténuer une onde sonore par transmission ",
                        emoji: "🔇",
                        objectifs: [
                            "Mesurer l'atténuation sonore",
                            "Classer des matériaux isolants",
                            "Calculer des indices d'affaiblissement"
                        ],
                        capacites: [
                            "Montrer expérimentalement que le coefficient d’atténuation du son par une plaque plane dépend de " +
                            "l’épaisseur de la plaque et de la nature des matériaux qui la constituent. ",
                            "Classer expérimentalement deux matériaux en fonction de leur propension à atténuer une onde sonore. ",
                            "Calculer l’indice d’affaiblissement acoustique à partir du coefficient d’atténuation en utilisant une relation fournie "
                        ],
                        connaissances: [
                            "Savoir que le coefficient d’atténuation d’une onde sonore traversant une plaque plane est " +
                            "le rapport de la pression acoustique incidente à la pression acoustique transmise. ",
                            "Savoir que l’indice d’affaiblissement acoustique (en dB) est la différence entre " +
                            "les niveaux d’intensité acoustique de l’onde incidente et de l’onde transmise. "
                        ]
                    }
                ]
            }
        ],
        complements: [
            {
                id: "developpement-durable",
                title: "Développement Durable",
                emoji: "🌱",
                color: "#1dd1a1",
                icon: <FiShield size={18} />,
                content: [
                    "Étude de rendement des systèmes de chauffage",
                    "Analyse d'impact environnemental des matériaux",
                    "Empreinte carbone des activités numériques",
                    "Optimisation de l'éclairage durable",
                    "Étude des gaz à effet de serre",
                    "Solutions pour l'efficacité énergétique"
                ]
            },
            {
                id: "mesures",
                title: "Mesures et incertitudes",
                emoji: "📏",
                color: "#48dbfb",
                icon: <FiActivity size={18} />,
                content: [
                    "Identifier les sources d'erreurs",
                    "Quantifier les incertitudes de mesure",
                    "Présenter des résultats avec chiffres significatifs",
                    "Analyser des séries de mesures",
                    "Comparer avec des valeurs de référence",
                    "Comprendre les enjeux des incertitudes"
                ]
            },
            {
                id: "securite",
                title: "Sécurité",
                emoji: "⚠️",
                color: "#ff6b6b",
                icon: <FiShield size={18} />,
                content: [
                    "Utilisation des équipements de protection",
                    "Identification des pictogrammes de danger",
                    "Tri sélectif des déchets chimiques",
                    "Protection contre les risques électriques",
                    "Dangers des sources lumineuses (laser)",
                    "Protection contre le bruit"
                ]
            }
        ]
    };

    const handleChapitreClick = (chapitreId) => {
        navigate(`/programmes/science/${classId}/ProgrammeTerminalePhysique_3/sequences/${chapitreId}`);
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
                                            <small className="text-muted">{chapitre.subtitle}</small>
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

export default ProgrammeTerminalePhysique_3;
import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Container, Badge, Card, Accordion, ListGroup} from 'react-bootstrap';
import {
    FiBook, FiClock, FiList, FiArrowRight, FiZap,
    FiThermometer, FiSettings, FiDroplet, FiRadio,
    FiShield, FiAward, FiActivity, FiUsers, FiEdit, FiLayers
} from 'react-icons/fi';
import BackButton from "../components/navigation/BackButton";
import {motion} from 'framer-motion';

const ProgrammePremierePhysique = () => {
    const {classId} = useParams();
    const navigate = useNavigate();

    // Structure du programme avec ajout d'icônes et couleurs
    const programme = {
        description: {
            title: "Physique-Chimie - Première Professionnelle",
            content: "Programme axé sur la formation scientifique et technique adaptée aux différentes spécialités professionnelles.",
            emoji: "🔬",
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
            icon: <FiLayers size={18}/>,
            content: [
                "Électricité (2 modules)",
                "Thermique (1 module)",
                "Mécanique (1 module)",
                "Chimie (1 module)",
                "Signaux (1 module)",
                "Compléments : Développement durable, Mesures et incertitudes, Sécurité"
            ]
        },
        chapitres: [
            {
                id: "electricite",
                title: "Électricité",
                emoji: "⚡",
                icon: <FiZap size={18}/>,
                color: "#feca57",
                duration: "15h",
                sequences: 3,
                subtitle: "Production et utilisation d'énergie électrique"
            },
            {
                id: "thermique",
                title: "Thermique",
                emoji: "🌡️",
                icon: <FiThermometer size={18}/>,
                color: "#ff6b6b",
                duration: "12h",
                sequences: 2,
                subtitle: "Transferts thermiques et énergie"
            },
            {
                id: "mecanique",
                title: "Mécanique",
                emoji: "⚙️",
                icon: <FiSettings size={18}/>,
                color: "#48dbfb",
                duration: "10h",
                sequences: 2,
                subtitle: "Mouvement et équilibre"
            },
            {
                id: "chimie",
                title: "Chimie",
                emoji: "🧪",
                icon: <FiDroplet size={18}/>,
                color: "#1dd1a1",
                duration: "12h",
                sequences: 2,
                subtitle: "Solutions et réactions chimiques"
            },
            {
                id: "signaux",
                title: "Signaux",
                emoji: "📡",
                icon: <FiRadio size={18}/>,
                color: "#5f27cd",
                duration: "10h",
                sequences: 2,
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
                        title: "Distinguer énergie et puissance électrique",
                        emoji: "💡",
                        objectifs: [
                            "Comprendre la différence entre énergie et puissance électrique",
                            "Mesurer et calculer puissance et énergie électriques",
                            "Établir la relation entre tension, intensité et puissance"
                        ],
                        capacites: [
                            "Mesurer la puissance électrique reçue par un appareil",
                            "Calculer l'énergie électrique consommée",
                            "Établir expérimentalement P = U × I"
                        ],
                        connaissances: [
                            "Relation E = P × t (énergie = puissance × temps)",
                            "Relation P = U × I (puissance = tension × intensité)",
                            "Unités : joule (J), watt (W), kilowattheure (kWh)"
                        ]
                    },
                    {
                        title: "Transporter l'énergie sous forme électrique",
                        emoji: "🔌",
                        objectifs: [
                            "Comprendre les principes de distribution d'énergie électrique",
                            "Analyser l'effet Joule et son impact sur les pertes en ligne",
                            "Utiliser des transformateurs dans les réseaux de distribution"
                        ],
                        capacites: [
                            "Représenter un réseau de distribution simplifié",
                            "Justifier le transport sous haute tension",
                            "Mettre en évidence le rôle des transformateurs"
                        ],
                        connaissances: [
                            "Relation puissance/résistance/tension",
                            "Rôle des transformateurs (abaisseur/élévateur)",
                            "Pertes en ligne et efficacité énergétique"
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
                        title: "Combustion et énergie thermique",
                        emoji: "🔥",
                        objectifs: [
                            "Comprendre les principes de la combustion",
                            "Analyser les produits et l'énergie des combustions",
                            "Évaluer l'impact environnemental des combustions"
                        ],
                        capacites: [
                            "Réaliser expérimentalement une combustion",
                            "Identifier les produits de combustion",
                            "Calculer l'énergie libérée et les émissions de CO₂"
                        ],
                        connaissances: [
                            "Produits de combustion complète et incomplète",
                            "Énergie libérée par la combustion",
                            "Dioxyde de carbone et effet de serre"
                        ]
                    },
                    {
                        title: "Transferts thermiques",
                        emoji: "↔️",
                        objectifs: [
                            "Distinguer les trois modes de transfert thermique",
                            "Comprendre les principes de l'isolation thermique",
                            "Analyser l'efficacité énergétique des matériaux"
                        ],
                        capacites: [
                            "Mettre en évidence les trois modes de transfert",
                            "Comparer la conductivité thermique de matériaux",
                            "Déterminer la conductance thermique"
                        ],
                        connaissances: [
                            "Conduction, convection, rayonnement",
                            "Matériaux conducteurs et isolants thermiques",
                            "Relation puissance/conductance/température"
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
                            "Calculer des variations de vitesse"
                        ],
                        connaissances: [
                            "Relations vitesse/accélération/durée",
                            "Mouvement rectiligne uniforme/accéléré",
                            "Ordres de grandeur des vitesses"
                        ]
                    },
                    {
                        title: "Pression et forces",
                        emoji: "📏",
                        objectifs: [
                            "Distinguer pression et force pressante",
                            "Comprendre les principes de la pression dans les fluides",
                            "Appliquer la relation fondamentale de la statique des fluides"
                        ],
                        capacites: [
                            "Mesurer la pression en un point d'un fluide",
                            "Convertir des unités de pression",
                            "Vérifier expérimentalement la loi de Boyle-Mariotte"
                        ],
                        connaissances: [
                            "Définitions pression/force pressante/surface",
                            "Unités de pression (Pa, bar, atm)",
                            "Loi de Boyle-Mariotte pour les gaz parfaits"
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
                        title: "Solutions aqueuses",
                        emoji: "💧",
                        objectifs: [
                            "Caractériser quantitativement une solution aqueuse",
                            "Préparer des solutions par dissolution ou dilution",
                            "Déterminer des concentrations"
                        ],
                        capacites: [
                            "Réaliser une solution de concentration donnée",
                            "Calculer des masses molaires et concentrations",
                            "Déterminer une quantité de matière par titrage"
                        ],
                        connaissances: [
                            "Relations n = m/M et C = n/V",
                            "Concentration en masse et en quantité de matière",
                            "Principe du titrage et point d'équivalence"
                        ]
                    },
                    {
                        title: "Réactions d'oxydoréduction",
                        emoji: "⚗️",
                        objectifs: [
                            "Comprendre les principes des réactions redox",
                            "Prévoir des réactions d'oxydoréduction",
                            "Protéger les métaux contre la corrosion"
                        ],
                        capacites: [
                            "Classer des couples oxydant/réducteur",
                            "Écrire des équations de réaction redox",
                            "Mettre en œuvre une protection anodique"
                        ],
                        connaissances: [
                            "Oxydation, réduction et transfert d'électrons",
                            "Classification électrochimique",
                            "Phénomène de passivation et protection"
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
                        title: "Ondes électromagnétiques",
                        emoji: "📶",
                        objectifs: [
                            "Caractériser une onde électromagnétique",
                            "Identifier les domaines spectraux",
                            "Comprendre les applications courantes"
                        ],
                        capacites: [
                            "Identifier le domaine spectral d'un rayonnement",
                            "Utiliser la relation λ = c/f",
                            "Reconnaître sources et détecteurs d'ondes EM"
                        ],
                        connaissances: [
                            "Spectre électromagnétique et domaines",
                            "Relation longueur d'onde/fréquence/vitesse",
                            "Applications : wifi, téléphonie, RFID"
                        ]
                    },
                    {
                        title: "Sources lumineuses",
                        emoji: "💡",
                        objectifs: [
                            "Comparer l'efficacité énergétique des sources",
                            "Analyser des spectres d'émission",
                            "Comprendre les propriétés des différentes sources"
                        ],
                        capacites: [
                            "Exploiter le spectre d'émission d'une lampe",
                            "Comparer l'efficacité énergétique de sources",
                            "Mettre en évidence les propriétés du laser"
                        ],
                        connaissances: [
                            "Caractéristiques spectrales des sources",
                            "Définition de l'efficacité énergétique",
                            "Propriétés particulières de la lumière laser"
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
                icon: <FiShield size={18}/>,
                content: [
                    "Étude de rendement des systèmes énergétiques",
                    "Analyse d'impact environnemental des matériaux",
                    "Empreinte carbone des activités industrielles",
                    "Optimisation de l'efficacité énergétique",
                    "Étude des gaz à effet de serre",
                    "Solutions pour la transition écologique"
                ]
            },
            {
                id: "mesures",
                title: "Mesures et incertitudes",
                emoji: "📏",
                color: "#48dbfb",
                icon: <FiActivity size={18}/>,
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
                icon: <FiShield size={18}/>,
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
        navigate(`/programmes/science/${classId}/ProgrammePremierePhysique/sequences/${chapitreId}`);
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
                                            <small className="text-muted">{chapitre.subtitle}</small>
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

export default ProgrammePremierePhysique;
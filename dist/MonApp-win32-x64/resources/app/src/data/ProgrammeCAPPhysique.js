import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Container, Accordion, Card, ListGroup, Badge } from 'react-bootstrap';
import {
    BiBook,
    BiTime,
    BiListOl,
    BiChevronRight,
    BiShield,       // Remplace BiFlask pour Sécurité
    BiPlug,         // Remplace BiBolt pour Électricité
    BiMove,         // Remplace BiAtom pour Mécanique
    BiTestTube,     // Alternative pour Chimie
    BiVolume,       // Remplace BiVolumeFull pour Acoustique
    BiSun,          // Gardé pour Optique
    BiPlusMedical   // Remplace BiThermometer pour Thermique
} from 'react-icons/bi';
import BackButton from "../components/navigation/BackButton";

const ProgrammeCAPPhysique = () => {
    const { classId } = useParams();
    const navigate = useNavigate();
    const { state } = useLocation();

    // Structure du programme officiel
    const programme = {
        preambule: {
            title: "Préambule commun aux enseignements de physique-chimie et de mathématiques",
            sections: [
                "Intentions majeures",
                "Compétences travaillées",
                "Lignes directrices pour l'enseignement",
                "Bivalence physique-chimie/mathématiques",
                "Approche par compétences",
                "Travail expérimental et numérique"
            ]
        },
        organisation: {
            title: "Organisation du programme",
            description: "Le programme de CAP est organisé autour de 7 thématiques principales correspondant aux compétences professionnelles visées.",
            points: [
                "Sécurité au poste de travail",
                "Électricité et signaux électriques",
                "Mécanique et mouvement",
                "Chimie des solutions",
                "Acoustique et signaux sonores",
                "Thermique et échanges d'énergie",
                "Optique et signaux lumineux"
            ]
        },
        modules: [
            {
                id: "securite",
                title: "Sécurité",
                icon: <BiShield size={24} />,
                subtitle: "Comment travailler en toute sécurité ?",
                duration: "10h",
                sequences: 3,
                competences: [
                    "Identifier les risques dans un environnement professionnel",
                    "Utiliser les équipements de protection individuelle",
                    "Interpréter les pictogrammes de sécurité"
                ]
            },
            {
                id: "electricite",
                title: "Électricité",
                icon: <BiPlug size={24} />,
                subtitle: "Comment caractériser et exploiter un signal électrique ?",
                duration: "20h",
                sequences: 5,
                competences: [
                    "Mesurer des grandeurs électriques",
                    "Lire et interpréter un schéma électrique",
                    "Mettre en œuvre des circuits simples"
                ]
            },
            {
                id: "mecanique",
                title: "Mécanique",
                icon: <BiMove size={24} />,
                subtitle: "Comment décrire le mouvement ?",
                duration: "15h",
                sequences: 4,
                competences: [
                    "Caractériser un mouvement",
                    "Utiliser des outils de mesure mécanique",
                    "Appliquer les principes de base de la statique"
                ]
            },
            {
                id: "chimie",
                title: "Chimie",
                icon: <BiTestTube size={24} />,
                subtitle: "Comment caractériser une solution ?",
                duration: "18h",
                sequences: 5,
                competences: [
                    "Préparer des solutions de concentration donnée",
                    "Mesurer le pH d'une solution",
                    "Identifier des espèces chimiques"
                ]
            },
            {
                id: "acoustique",
                title: "Acoustique",
                icon: <BiVolume size={24} />,
                subtitle: "Comment caractériser et exploiter un signal sonore ?",
                duration: "12h",
                sequences: 3,
                competences: [
                    "Mesurer des grandeurs acoustiques",
                    "Analyser les propriétés d'un signal sonore",
                    "Comprendre les risques auditifs"
                ]
            },
            {
                id: "thermique",
                title: "Thermique",
                icon: <BiPlusMedical size={24} />,
                subtitle: "Comment caractériser les échanges d'énergie sous forme thermique ?",
                duration: "15h",
                sequences: 4,
                competences: [
                    "Mesurer des températures",
                    "Calculer des quantités de chaleur",
                    "Comprendre les transferts thermiques"
                ]
            },
            {
                id: "optique",
                title: "Optique",
                icon: <BiSun size={24} />,
                subtitle: "Comment caractériser un signal lumineux ?",
                duration: "10h",
                sequences: 3,
                competences: [
                    "Mesurer des grandeurs lumineuses",
                    "Comprendre les lois de la réflexion",
                    "Analyser des systèmes optiques simples"
                ]
            }
        ],
        complements: [
            {
                title: "Co-intervention",
                description: "Mise en œuvre avec les enseignements professionnels"
            },
            {
                title: "Travaux pratiques",
                description: "Minimum 50% du temps consacré à l'expérimentation"
            }
        ]
    };

    const handleModuleClick = (moduleId) => {
        navigate(`sequences?module=${moduleId}`);
    };

    return (
        <Container className="programme-container py-4">
            <BackButton />
            <h2>Programme de Physique-Chimie - CAP {classId}</h2>

            {/* Préambule */}
            <Accordion className="mb-4">
                <Accordion.Item eventKey="0" className="preambule-card">
                    <Accordion.Header>
                        <BiBook className="me-2" />
                        {programme.preambule.title}
                    </Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            {programme.preambule.sections.map((section, index) => (
                                <ListGroup.Item key={index} className="d-flex align-items-center">
                                    <BiChevronRight className="me-2 text-primary" />
                                    {section}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Organisation du programme */}
            <Card className="mb-4">
                <Card.Body>
                    <Card.Title className="d-flex align-items-center">
                        <BiBook className="me-2" />
                        {programme.organisation.title}
                    </Card.Title>
                    <Card.Text>{programme.organisation.description}</Card.Text>
                    <ListGroup variant="flush">
                        {programme.organisation.points.map((point, index) => (
                            <ListGroup.Item key={`org-${index}`} className="d-flex align-items-center">
                                <BiChevronRight className="me-2 text-primary" />
                                {point}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>

            {/* Modules principaux */}
            <h3 className="mt-5 mb-3 section-title">
                Modules du programme
            </h3>

            <div className="modules-grid">
                {programme.modules.map((module) => (
                    <Card
                        key={module.id}
                        className="module-card shadow-sm"
                        onClick={() => handleModuleClick(module.id)}
                    >
                        <Card.Body>
                            <div className="d-flex align-items-center mb-3">
                                <div className="module-icon me-3">
                                    {module.icon}
                                </div>
                                <div>
                                    <Card.Title>{module.title}</Card.Title>
                                    <Card.Subtitle className="text-muted">{module.subtitle}</Card.Subtitle>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between mb-2">
                                <span>
                                    <BiTime className="me-1" />
                                    {module.duration}
                                </span>
                                <Badge bg="info" pill>
                                    <BiListOl className="me-1" />
                                    {module.sequences} séq.
                                </Badge>
                            </div>

                            <div className="competences-list">
                                <h6>Compétences :</h6>
                                <ul>
                                    {module.competences.map((comp, i) => (
                                        <li key={`comp-${i}`}>{comp}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="text-end mt-2">
                                <span className="text-primary">
                                    Voir les séquences <BiChevronRight />
                                </span>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>

            {/* Compléments */}
            <h3 className="mt-5 mb-3 section-title">
                Modalités pédagogiques
            </h3>
            <div className="complements-grid">
                {programme.complements.map((complement, index) => (
                    <Card key={`comp-${index}`} className="mb-3">
                        <Card.Body>
                            <Card.Title>{complement.title}</Card.Title>
                            <Card.Text>{complement.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default ProgrammeCAPPhysique;
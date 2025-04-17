import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Container, Accordion, Card, ListGroup, Badge } from 'react-bootstrap';
import { BiBook, BiTime, BiListOl, BiChevronRight, BiCalculator, BiStats, BiShapePolygon, BiCodeAlt } from 'react-icons/bi';
import BackButton from "../components/navigation/BackButton";

const ProgrammeCAPMaths = () => {
    const { classId } = useParams();
    const navigate = useNavigate();
    const { state } = useLocation();

    // Structure du programme officiel
    const programme = {
        preambule: {
            title: "Préambule commun aux enseignements de mathématiques et de physique-chimie",
            sections: [
                "Intentions majeures",
                "Compétences travaillées",
                "Lignes directrices pour l'enseignement",
                "Bivalence mathématiques/physique-chimie",
                "Approche par compétences",
                "Co-intervention avec l'enseignement professionnel"
            ]
        },
        organisation: {
            title: "Organisation du programme",
            description: "Le programme de CAP est organisé autour de 6 domaines principaux avec une place importante aux calculs commerciaux.",
            points: [
                "Statistique et probabilités",
                "Algèbre et analyse",
                "Calculs commerciaux et financiers",
                "Géométrie",
                "Calculs numériques",
                "Algorithmique et programmation"
            ]
        },
        modules: [
            {
                id: "stats",
                title: "Statistique et probabilités",
                icon: <BiStats size={24} />,
                duration: "15h",
                sequences: 4,
                competences: [
                    "Lire et interpréter des données statistiques",
                    "Calculer des fréquences et des probabilités simples",
                    "Représenter des données sous forme graphique"
                ],
                contextes: [
                    "Analyse de données professionnelles",
                    "Interprétation d'études de marché",
                    "Calculs de ratios en entreprise"
                ]
            },
            {
                id: "algebre",
                title: "Algèbre et analyse",
                icon: <BiCalculator size={24} />,
                duration: "20h",
                sequences: 5,
                competences: [
                    "Résoudre des équations du 1er degré",
                    "Utiliser des fonctions linéaires et affines",
                    "Modéliser des situations professionnelles"
                ],
                contextes: [
                    "Calculs de coûts et marges",
                    "Optimisation de production",
                    "Gestion des stocks"
                ]
            },
            {
                id: "commerce",
                title: "Calculs commerciaux et financiers",
                icon: <BiTime size={24} />,
                duration: "25h",
                sequences: 6,
                competences: [
                    "Calculer des pourcentages et coefficients",
                    "Établir des factures et devis",
                    "Déterminer des marges et taxes",
                    "Calculer des intérêts simples"
                ],
                contextes: [
                    "Gestion commerciale",
                    "Calculs de remises",
                    "Opérations bancaires de base"
                ]
            },
            {
                id: "geometrie",
                title: "Géométrie",
                icon: <BiShapePolygon size={24} />,
                duration: "15h",
                sequences: 4,
                competences: [
                    "Utiliser les propriétés géométriques de base",
                    "Calculer des périmètres, aires et volumes",
                    "Lire et interpréter des plans"
                ],
                contextes: [
                    "Dessin technique",
                    "Calculs de surfaces",
                    "Optimisation d'espaces"
                ]
            },
            {
                id: "algo",
                title: "Algorithmique et programmation",
                icon: <BiCodeAlt size={24} />,
                duration: "10h",
                sequences: 3,
                competences: [
                    "Écrire des algorithmes simples",
                    "Automatiser des calculs répétitifs",
                    "Utiliser des logiciels métiers"
                ],
                contextes: [
                    "Automatisation de tâches",
                    "Calculs commerciaux",
                    "Gestion de données"
                ]
            }
        ],
        complements: [
            {
                title: "Automatismes",
                description: "Routines de calcul mental et techniques opératoires quotidiennes"
            },
            {
                title: "Co-intervention",
                description: "Mise en œuvre avec les enseignements professionnels (minimum 30h)"
            }
        ]
    };

    const handleModuleClick = (moduleId) => {
        navigate(`sequences?module=${moduleId}`);
    };

    return (
        <Container className="programme-container py-4">
            <BackButton />
            <h2>Programme de Mathématiques - CAP {classId}</h2>

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

                            {module.contextes && (
                                <div className="contextes-list mt-2">
                                    <h6>Contextes professionnels :</h6>
                                    <ul>
                                        {module.contextes.map((ctx, i) => (
                                            <li key={`ctx-${i}`}>{ctx}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

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
                Éléments transversaux
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

export default ProgrammeCAPMaths;
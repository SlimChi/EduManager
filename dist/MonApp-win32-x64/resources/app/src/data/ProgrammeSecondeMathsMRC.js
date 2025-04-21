import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Container, Accordion, Card, ListGroup, Badge } from 'react-bootstrap';
import { BiBook, BiTime, BiListOl, BiChevronRight, BiCalculator } from 'react-icons/bi';
import BackButton from "../components/navigation/BackButton";

const ProgrammeSecondeMathsMRC = () => {
    const { classId } = useParams();
    const navigate = useNavigate();
    const { state } = useLocation();

    // Structure du programme officiel
    const programme = {
        preambule: {
            title: "Préambule",
            sections: [
                "Intentions majeures",
                "Compétences travaillées",
                "Quelques lignes directrices pour l'enseignement"
            ]
        },
        chapitres: [
            {
                id: "stats",
                title: "Statistique et probabilités",
                duration: "20h",
                sequences: 5
            },
            {
                id: "algebre",
                title: "Algèbre – Analyse",
                duration: "30h",
                sequences: 8
            },
            {
                id: "geometrie",
                title: "Géométrie",
                duration: "15h",
                sequences: 4
            },
            {
                id: "algo",
                title: "Algorithmique et programmation",
                duration: "10h",
                sequences: 3
            }
        ],
        complements: [
            "Automatismes",
            "Vocabulaire ensembliste et logique"
        ],
        calculsCommerciaux: {
            title: "Calculs commerciaux et financiers",
            description: "Uniquement pour les spécialités de baccalauréat professionnel ne comportant pas d'enseignement de physique-chimie",
            objectifs: "Ce module permet de renforcer la maîtrise des pourcentages communément utilisés dans les organisations lors de l'établissement ou de l'utilisation de divers documents (factures, bulletins de paye, documents financiers...).",
            capacites: [
                "Compléter une facture, un bon de commande, réaliser un devis",
                "Déterminer dans des situations professionnelles : prix, coût, marge, taxe, réduction commerciale, taux",
                "Calculer le montant d'un intérêt simple et d'une valeur acquise",
                "Déterminer graphiquement ou par le calcul : taux annuel, durée de placement, montant du capital"
            ],
            connaissances: [
                "Pourcentages et coefficients multiplicateurs",
                "Capital, taux, intérêt, valeur acquise"
            ],
            algorithmes: [
                "Calculer le montant d'un intérêt simple",
                "Calculer le montant net à payer après une remise pour une facture"
            ],
            commentaires: [
                "Le vocabulaire spécifique sera explicité",
                "Les partages proportionnels peuvent être traités s'ils sont utiles à l'enseignement professionnel"
            ]
        }
    };

    const handleChapitreClick = (chapitreId) => {
        navigate(`sequences?chapitre=${chapitreId}`);
    };

    return (
        <Container className="programme-container py-4">
            <BackButton />
            <h2>Programme de Mathématiques - Seconde {classId}</h2>

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

            {/* Chapitres principaux */}
            <h3 className="mt-5 mb-3 section-title">
                <BiBook className="me-2" />
                Chapitres du programme
            </h3>

            <div className="chapitres-grid">
                {programme.chapitres.map((chapitre) => (
                    <Card
                        key={chapitre.id}
                        className="chapitre-card shadow-sm"
                        onClick={() => handleChapitreClick(chapitre.id)}
                    >
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between">
                                <span>{chapitre.title}</span>
                                <Badge bg="info" pill>
                                    <BiListOl className="me-1" />
                                    {chapitre.sequences} séq.
                                </Badge>
                            </Card.Title>
                            <Card.Text className="text-muted">
                                <BiTime className="me-1" />
                                {chapitre.duration}
                            </Card.Text>
                            <div className="text-end">
                                <span className="text-primary">
                                    Voir les séquences <BiChevronRight />
                                </span>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>

            {/* Calculs commerciaux et financiers */}
            <h3 className="mt-5 mb-3 section-title">
                <BiCalculator className="me-2" />
                {programme.calculsCommerciaux.title}
            </h3>
            <Card className="mb-4">
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                        {programme.calculsCommerciaux.description}
                    </Card.Subtitle>

                    <h5 className="mt-3">Objectifs</h5>
                    <p>{programme.calculsCommerciaux.objectifs}</p>

                    <h5>Capacités</h5>
                    <ListGroup variant="flush">
                        {programme.calculsCommerciaux.capacites.map((item, index) => (
                            <ListGroup.Item key={`capacite-${index}`}>
                                <BiChevronRight className="me-2 text-primary" />
                                {item}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    <h5 className="mt-3">Connaissances</h5>
                    <ListGroup variant="flush">
                        {programme.calculsCommerciaux.connaissances.map((item, index) => (
                            <ListGroup.Item key={`connaissance-${index}`}>
                                <BiChevronRight className="me-2 text-primary" />
                                {item}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    <h5 className="mt-3">Algorithmes et activités numériques</h5>
                    <ListGroup variant="flush">
                        {programme.calculsCommerciaux.algorithmes.map((item, index) => (
                            <ListGroup.Item key={`algo-${index}`}>
                                <BiChevronRight className="me-2 text-primary" />
                                {item}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    <h5 className="mt-3">Commentaires</h5>
                    <ListGroup variant="flush">
                        {programme.calculsCommerciaux.commentaires.map((item, index) => (
                            <ListGroup.Item key={`comment-${index}`}>
                                <BiChevronRight className="me-2 text-primary" />
                                {item}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>

            {/* Compléments */}
            <h3 className="mt-5 mb-3 section-title">
                Compléments
            </h3>
            <ListGroup>
                {programme.complements.map((complement, index) => (
                    <ListGroup.Item
                        key={index}
                        className="d-flex justify-content-between align-items-center complement-item"
                    >
                        {complement}
                        <Badge bg="light" text="dark">
                            Activités transversales
                        </Badge>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default ProgrammeSecondeMathsMRC;
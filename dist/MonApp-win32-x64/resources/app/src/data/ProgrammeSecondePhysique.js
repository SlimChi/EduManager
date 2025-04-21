import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Badge, Card } from 'react-bootstrap';
import {
    BiBook,
    BiTime,
    BiListOl,
    BiChevronRight,
    BiShieldAlt as BiSecurity,
    BiPlug as BiElectricity,
    BiMove as BiMechanics,
    BiTestTube as BiChemistry,
    BiVolume as BiAcoustics,
    BiPlusMedical as BiThermal,
    BiSun as BiOptics
} from 'react-icons/bi';
import BackButton from "../components/navigation/BackButton";
import "../styles/programmeBo.css"
const ProgrammeSecondePhysique = () => {
    const { classId } = useParams();
    const navigate = useNavigate();

    // Structure du programme officiel
    const programme = {
        modules: [
            {
                id: "securite",
                title: "Sécurité",
                icon: <BiSecurity size={24} />,
                emoji: "🛡️",
                subtitle: "Travailler en toute sécurité",
                duration: "12h",
                sequences: 4,
                color: "#ff6b6b",
                competences: [
                    "Identifier les risques professionnels",
                    "Utiliser les équipements de protection",
                    "Interpréter les pictogrammes"
                ]
            },
            {
                id: "electricite",
                title: "Électricité",
                icon: <BiElectricity size={24} />,
                emoji: "⚡",
                subtitle: "Signaux électriques",
                duration: "25h",
                sequences: 6,
                color: "#feca57",
                competences: [
                    "Mesurer tension/intensité",
                    "Lire des schémas électriques",
                    "Circuit simples"
                ]
            },
            {
                id: "mecanique",
                title: "Mécanique",
                icon: <BiMechanics size={24} />,
                emoji: "⚙️",
                subtitle: "Description du mouvement",
                duration: "20h",
                sequences: 5,
                color: "#48dbfb",
                competences: [
                    "Types de mouvements",
                    "Outils de mesure mécanique",
                    "Principes de statique"
                ]
            },
            {
                id: "chimie",
                title: "Chimie",
                icon: <BiChemistry size={24} />,
                emoji: "🧪",
                subtitle: "Caractérisation des solutions",
                duration: "22h",
                sequences: 6,
                color: "#1dd1a1",
                competences: [
                    "Préparer des solutions",
                    "Mesurer le pH",
                    "Classification périodique"
                ]
            },
            {
                id: "acoustique",
                title: "Acoustique",
                icon: <BiAcoustics size={24} />,
                emoji: "🎵",
                subtitle: "Signaux sonores",
                duration: "15h",
                sequences: 4,
                color: "#5f27cd",
                competences: [
                    "Grandeurs acoustiques",
                    "Propriétés du son",
                    "Risques auditifs"
                ]
            },
            {
                id: "thermique",
                title: "Thermique",
                icon: <BiThermal size={24} />,
                emoji: "🌡️",
                subtitle: "Échanges d'énergie",
                duration: "18h",
                sequences: 5,
                color: "#ff9ff3",
                competences: [
                    "Mesurer températures",
                    "Calculer quantités de chaleur",
                    "Transferts thermiques"
                ]
            },
            {
                id: "optique",
                title: "Optique",
                icon: <BiOptics size={24} />,
                emoji: "🔦",
                subtitle: "Signaux lumineux",
                duration: "15h",
                sequences: 4,
                color: "#f368e0",
                competences: [
                    "Grandeurs lumineuses",
                    "Lois de la réflexion",
                    "Systèmes optiques"
                ]
            }
        ]
    };

    const handleChapitreClick = (chapitreId) => {
        navigate(`/programmes/science/${classId}/ProgrammeSecondePhysique/sequences/${chapitreId}`);
    };

    return (
        <Container className="programme-container py-4">
            <BackButton />
            <h2 className="mb-4">📚 Programme de Physique-Chimie - Seconde {classId}</h2>

            {/* Modules principaux - Nouveau design */}
            <div className="row g-4">
                {programme.modules.map((module) => (
                    <div key={module.id} className="col-md-6 col-lg-4">
                        <Card
                            className="h-100 shadow-sm border-0 module-card-hover"
                            style={{
                                borderRadius: "15px",
                                borderLeft: `5px solid ${module.color}`,
                                cursor: "pointer"
                            }}
                            onClick={() => handleChapitreClick(module.id)}
                        >
                            <Card.Body className="d-flex flex-column">
                                <div className="d-flex align-items-center mb-3">
                                    <div
                                        className="d-flex align-items-center justify-content-center me-3"
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "12px",
                                            backgroundColor: `${module.color}20`,
                                            color: module.color
                                        }}
                                    >
                                        <span style={{ fontSize: "24px" }}>{module.emoji}</span>
                                    </div>
                                    <div>
                                        <h5 className="mb-0 fw-bold">{module.title}</h5>
                                        <small className="text-muted">{module.subtitle}</small>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <Badge pill bg="light" text="dark" className="d-flex align-items-center">
                                        <BiTime className="me-1" /> {module.duration}
                                    </Badge>
                                    <Badge pill bg="light" text="dark" className="d-flex align-items-center">
                                        <BiListOl className="me-1" /> {module.sequences} séquences
                                    </Badge>
                                </div>

                                <ul className="mt-auto mb-3 ps-3" style={{ listStyleType: "none" }}>
                                    {module.competences.map((comp, i) => (
                                        <li key={`comp-${i}`} className="mb-1">
                                            <small className="d-flex align-items-center">
                                                <span className="me-2" style={{ color: module.color }}>•</span>
                                                {comp}
                                            </small>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto text-end">
                                    <small className="text-primary fw-bold d-flex align-items-center justify-content-end">
                                        Explorer le module <BiChevronRight />
                                    </small>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default ProgrammeSecondePhysique;
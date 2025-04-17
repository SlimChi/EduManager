import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import * as Icons from 'react-icons/bi';
import { motion } from 'framer-motion';
import BackButton from "../components/navigation/BackButton";
import { CLASSES_CONFIG } from '../data/programmes';
import "../styles/ClassesEnCour.css"
const ClassesEnCour = () => {
    const { discipline } = useParams();
    const navigate = useNavigate();

    // Configuration des programmes par discipline et niveau
    const PROGRAMME_COMPONENTS = {
        math: {
            'Seconde': 'ProgrammeSecondeMaths',
            'Terminale': 'ProgrammeTerminaleMaths_B',
            'CAP': 'ProgrammeCAPMaths'
        },
        science: {
            'Seconde': 'ProgrammeSecondePhysique',
            'Terminale': 'ProgrammeTerminalePhysique_3',
            'CAP': 'ProgrammeCAPPhysique'
        }
    };

    // Récupération sécurisée de la configuration
    const classesForDiscipline = CLASSES_CONFIG[discipline] || {};

    // Création des cartes de classe avec emojis
    const classes = Object.entries(classesForDiscipline).map(([id, config]) => ({
        id,
        name: id,
        icon: React.createElement(Icons[config.icon] || Icons.BiQuestionMark, { size: 40 }),
        emoji: config.emoji || "🏫",
        color: config.color || "#5f27cd",
        bgColor: `${config.color}20` || "rgba(95, 39, 205, 0.1)",
        niveau: config.niveau,
        component: config.component
    }));

    const handleClassClick = (classe) => {
        if (classe.component === 'CCF') {
            navigate('/ccf');
            return;
        }

        try {
            const programmeType = PROGRAMME_COMPONENTS[discipline][classe.niveau];
            if (!programmeType) {
                throw new Error('Type de programme non défini');
            }
            navigate(`/programmes/${discipline}/${classe.id}/${programmeType}`, {
                state: { className: classe.name }
            });
        } catch (error) {
            console.error('Erreur de navigation:', error);
            navigate('/programme-non-trouve');
        }
    };

    // Animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        hover: {
            y: -5,
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
        },
        tap: {
            scale: 0.98
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="page-container"
        >
            <Container className="page-content py-5">
                <BackButton />
                <motion.div variants={itemVariants}>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h1 className="page-title mb-1">
                                {discipline === 'math' ? '📊 Mathématiques' : '🔬 Sciences Physique'} - Classes
                            </h1>
                            <p className="text-muted">Sélectionnez une classe pour accéder à son programme</p>
                        </div>

                    </div>
                </motion.div>

                <Row className="g-4 justify-content-center">
                    {classes.map((classe) => (
                        <Col key={classe.id} xs={12} sm={6} lg={4} xl={3}>
                            <motion.div
                                variants={itemVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Card
                                    onClick={() => handleClassClick(classe)}
                                    className="h-100 class-card border-0 shadow-sm"
                                    style={{
                                        cursor: 'pointer',
                                        borderLeft: `5px solid ${classe.color}`,
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <Card.Body className="p-4 d-flex flex-column">
                                        <div className="d-flex align-items-center mb-3">
                                            <div
                                                className="icon-container d-flex align-items-center justify-content-center me-3"
                                                style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    borderRadius: '12px',
                                                    backgroundColor: classe.bgColor,
                                                    color: classe.color
                                                }}
                                            >
                                                <span className="emoji me-2" style={{ fontSize: '24px' }}>{classe.emoji}</span>
                                                {classe.icon}
                                            </div>
                                            <Card.Title
                                                className="fw-bold mb-0"
                                                style={{ color: classe.color }}
                                            >
                                                {classe.name}
                                            </Card.Title>
                                        </div>
                                        <div className="mt-auto text-end">
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                className="fw-bold"
                                                style={{
                                                    color: classe.color,
                                                    display: 'inline-flex',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                Voir le programme
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    className="ms-2"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                                    />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </motion.div>
    );
};

export default ClassesEnCour;
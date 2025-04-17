import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { BiMath, BiAtom } from 'react-icons/bi';
import { motion } from 'framer-motion';
import BackButton from "../components/navigation/BackButton";
import "../styles/DisciplinesPage.css"
const DisciplinesPage = () => {
    const navigate = useNavigate();

    // Données des disciplines avec emojis et couleurs modernes
    const disciplines = [
        {
            id: 'math',
            title: "Mathématiques",
            description: "Algèbre, géométrie, analyse et statistiques",
            icon: <BiMath size={40} />,
            emoji: "🧮",
            color: "#d2385b",
            bgColor: "rgba(95, 39, 205, 0.1)"
        },
        {
            id: 'science',
            title: "Sciences Physique-Chimie",
            description: "Physique, chimie et expérimentations",
            icon: <BiAtom size={40} />,
            emoji: "🔬",
            color: "#569ae1",
            bgColor: "rgba(29, 209, 161, 0.1)"
        }
    ];

    const handleCardClick = (disciplineId) => {
        navigate(`/disciplines/${disciplineId}/classes`);
    };

    // Animation variants
    const cardVariants = {
        hover: {
            y: -5,
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        },
        tap: {
            scale: 0.98
        }
    };

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
                <motion.div variants={itemVariants}>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <BackButton />
                    </div>
                </motion.div>

                <Row className="g-4 justify-content-center">
                    {disciplines.map((discipline) => (
                        <Col key={discipline.id} xs={12} sm={6} lg={5} xl={4}>
                            <motion.div
                                variant={itemVariants}
                                whileHover="hover"
                                whileTap="tap"
                                variants={cardVariants}
                            >
                                <Card
                                    onClick={() => handleCardClick(discipline.id)}
                                    className="h-100 discipline-card border-0 shadow-sm"
                                    style={{
                                        cursor: 'pointer',
                                        borderLeft: `5px solid ${discipline.color}`,
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <Card.Body className="p-4 d-flex flex-column">
                                        <div className="d-flex align-items-center mb-3">
                                            <div
                                                className="icon-container d-flex align-items-center justify-content-center me-3"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '12px',
                                                    backgroundColor: discipline.bgColor,
                                                    color: discipline.color
                                                }}
                                            >
                                                <span className="emoji me-2" style={{ fontSize: '24px' }}>{discipline.emoji}</span>
                                                {discipline.icon}
                                            </div>
                                            <Card.Title className="fw-bold mb-0" style={{ color: discipline.color }}>
                                                {discipline.title}
                                            </Card.Title>
                                        </div>
                                        <Card.Text className="text-muted mb-4">
                                            {discipline.description}
                                        </Card.Text>
                                        <div className="mt-auto text-end">
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                className="fw-bold"
                                                style={{
                                                    color: discipline.color,
                                                    display: 'inline-flex',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                Accéder aux classes
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

export default DisciplinesPage;
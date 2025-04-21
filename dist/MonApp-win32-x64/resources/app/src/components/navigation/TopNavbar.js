import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {motion} from 'framer-motion';
import {FiUser, FiHome, FiBook, FiAward, FiMessageSquare} from 'react-icons/fi';
import {PiFlaskDuotone, PiChalkboardTeacher} from "react-icons/pi";
import {IoRocketSharp} from "react-icons/io5";
import '../../styles/topNavbar.css';
import {LiaLongArrowAltRightSolid} from "react-icons/lia";

const TopNavbar = () => {
    const navItemVariants = {
        hidden: {opacity: 0, y: -20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        hover: {
            scale: 1.05,
            y: -3,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 10
            }
        }
    };

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <Navbar expand="lg" className="top-navbar">
                <Container fluid>
                    <motion.div variants={navItemVariants} whileHover="hover">
                        <Navbar.Brand as={Link} to="/" className="brand-logo d-flex align-items-center">
                            <span className="logo-icon">🚀</span>
                            <span className="brand-text ms-2">
                                EduManger <LiaLongArrowAltRightSolid style={{color: '#38bdf8'}}/> M.CHIHATI<span
                                style={{filter: 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.6))'}}>Science</span>
                            </span>
                        </Navbar.Brand>
                    </motion.div>

                    <Navbar.Toggle
                        aria-controls="navbar-content"
                        className="navbar-toggle"
                        as={motion.button}
                        whileTap={{scale: 0.9}}
                    />

                    <Navbar.Collapse id="navbar-content" className="justify-content-end">
                        <Nav className="align-items-center">
                            <motion.div variants={navItemVariants} whileHover="hover">
                                <Nav.Link as={Link} to="/" className="nav-link-item">
                                    <FiHome className="nav-icon"/>
                                    <span>Accueil</span>
                                </Nav.Link>
                            </motion.div>

                            <motion.div variants={navItemVariants} whileHover="hover">
                                <Nav.Link as={Link} to="/disciplines" className="nav-link-item">
                                    <PiChalkboardTeacher className="nav-icon"/>
                                    <span>Cours</span>
                                </Nav.Link>
                            </motion.div>

                            <motion.div variants={navItemVariants} whileHover="hover">
                                <Nav.Link as={Link} to="/labs" className="nav-link-item">
                                    <PiFlaskDuotone className="nav-icon"/>
                                    <span>Laboratoires</span>
                                </Nav.Link>
                            </motion.div>

                            <motion.div variants={navItemVariants} whileHover="hover">
                                <Nav.Link as={Link} to="/profile" className="nav-link-item">
                                    <FiUser className="nav-icon"/>
                                    <span>Profil</span>
                                </Nav.Link>
                            </motion.div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </motion.div>
    );
};

export default TopNavbar;
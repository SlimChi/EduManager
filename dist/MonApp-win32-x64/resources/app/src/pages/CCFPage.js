import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Form, Container, Row, Col, Modal, Badge } from 'react-bootstrap';
import { BiEdit, BiSave, BiTrash, BiAddToQueue, BiCheck, BiX } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';

const CCF = () => {
    const navigate = useNavigate();

    const [ccfs, setCcfs] = useState(() => {
        const saved = localStorage.getItem('ccfs');
        return saved ? JSON.parse(saved) : [
            { id: 1, title: 'CCF Mathématiques', isEditing: false, lastUpdated: new Date().toISOString() },
            { id: 2, title: 'CCF Physique-Chimie', isEditing: false, lastUpdated: new Date().toISOString() }
        ];
    });

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [ccfToDelete, setCcfToDelete] = useState(null);
    const [newCcfTitle, setNewCcfTitle] = useState('Nouveau CCF');
    const [showAddModal, setShowAddModal] = useState(false);

    useEffect(() => {
        localStorage.setItem('ccfs', JSON.stringify(ccfs));
    }, [ccfs]);

    const handleCCFClick = (ccfId, e) => {
        // Empêche la propagation si on clique sur les boutons à l'intérieur
        if (e && (e.target.tagName === 'BUTTON' || e.target.closest('button'))) {
            return;
        }
        navigate(`/ccf/${ccfId}`);
    };
    // Gestion des CCF
    const addCCF = () => {
        if (newCcfTitle.trim() === '') {
            alert('Le titre ne peut pas être vide');
            return;
        }

        setCcfs([...ccfs, {
            id: Date.now(),
            title: newCcfTitle,
            isEditing: false,
            lastUpdated: new Date().toISOString()
        }]);
        setNewCcfTitle('Nouveau CCF');
        setShowAddModal(false);
    };

    const startEditing = (id) => {
        setCcfs(ccfs.map(ccf =>
            ccf.id === id ? { ...ccf, isEditing: true } : ccf
        ));
    };

    const saveCCF = (id, newTitle) => {
        if (newTitle.trim() === '') {
            alert('Le titre ne peut pas être vide');
            return;
        }

        setCcfs(ccfs.map(ccf =>
            ccf.id === id ? {
                ...ccf,
                title: newTitle,
                isEditing: false,
                lastUpdated: new Date().toISOString()
            } : ccf
        ));
    };

    const cancelEditing = (id) => {
        setCcfs(ccfs.map(ccf =>
            ccf.id === id ? { ...ccf, isEditing: false } : ccf
        ));
    };

    const confirmDelete = (id) => {
        setCcfToDelete(id);
        setShowDeleteModal(true);
    };

    const deleteCCF = () => {
        setCcfs(ccfs.filter(ccf => ccf.id !== ccfToDelete));
        setShowDeleteModal(false);
    };

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        },
        exit: { opacity: 0, x: -100 }
    };

    return (
        <Container className="mt-4 animate__animated animate__fadeIn">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2> CCF</h2>
                <Button
                    variant="success"
                    onClick={() => setShowAddModal(true)}
                    className="d-flex align-items-center"
                >
                    <BiAddToQueue className="me-2" /> Nouveau CCF
                </Button>
            </div>

            {ccfs.length === 0 && (
                <div className="text-center py-5">
                    <h4 className="text-muted">Aucun CCF créé pour le moment</h4>
                    <Button
                        variant="outline-primary"
                        onClick={() => setShowAddModal(true)}
                        className="mt-3"
                    >
                        Créer votre premier CCF
                    </Button>
                </div>
            )}

            <Row className="g-4">
                <AnimatePresence>
                    {ccfs.map(ccf => (
                        <Col key={ccf.id} xs={12} md={6} lg={4}>
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                layout
                                whileHover={{ y: -5 }}
                            >
                                <Card
                                    className="h-100 shadow-sm hover-effect"
                                    onClick={(e) => handleCCFClick(ccf.id, e)}
                                    style={{
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s, box-shadow 0.2s'
                                    }}
                                >
                                    <Card.Body>
                                        {ccf.isEditing ? (
                                            <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    value={ccf.title}
                                                    onChange={(e) => saveCCF(ccf.id, e.target.value)}
                                                    onBlur={() => cancelEditing(ccf.id)}
                                                    onKeyPress={(e) => e.key === 'Enter' && saveCCF(ccf.id, e.target.value)}
                                                    autoFocus
                                                    className="mb-2"
                                                />
                                                <div className="d-flex justify-content-end">
                                                    <Button
                                                        variant="success"
                                                        size="sm"
                                                        onClick={() => cancelEditing(ccf.id)}
                                                        className="me-2"
                                                    >
                                                        <BiCheck /> Valider
                                                    </Button>
                                                    <Button
                                                        variant="outline-secondary"
                                                        size="sm"
                                                        onClick={() => cancelEditing(ccf.id)}
                                                    >
                                                        <BiX /> Annuler
                                                    </Button>
                                                </div>
                                            </Form.Group>
                                        ) : (
                                            <>
                                                <Card.Title className="d-flex justify-content-between">
                                                    <span>{ccf.title}</span>
                                                    <Badge bg="light" text="dark" className="fs-6">
                                                        {new Date(ccf.lastUpdated).toLocaleDateString()}
                                                    </Badge>
                                                </Card.Title>
                                                <div className="d-flex justify-content-end mt-3">
                                                    <Button
                                                        variant="outline-primary"
                                                        size="sm"
                                                        onClick={() => startEditing(ccf.id)}
                                                        className="me-2"
                                                    >
                                                        <BiEdit /> Modifier
                                                    </Button>
                                                    <Button
                                                        variant="outline-danger"
                                                        size="sm"
                                                        onClick={() => confirmDelete(ccf.id)}
                                                    >
                                                        <BiTrash /> Supprimer
                                                    </Button>
                                                </div>
                                            </>
                                        )}
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </AnimatePresence>
            </Row>

            {/* Modal d'ajout */}
            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Créer un nouveau CCF</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Titre du CCF</Form.Label>
                        <Form.Control
                            type="text"
                            value={newCcfTitle}
                            onChange={(e) => setNewCcfTitle(e.target.value)}
                            placeholder="Entrez le titre du CCF"
                            autoFocus
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={addCCF}>
                        Créer
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal de confirmation de suppression */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmer la suppression</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Êtes-vous sûr de vouloir supprimer ce CCF ? Cette action est irréversible.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="danger" onClick={deleteCCF}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default CCF;
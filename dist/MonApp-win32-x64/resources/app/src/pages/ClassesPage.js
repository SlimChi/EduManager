import React from 'react';
import { Button, Card, Container, Row, Col, Table } from 'react-bootstrap';
import BackButton from "../components/navigation/BackButton";

const ClassesPage = () => {
    // Données exemple
    const classes = [
        { id: 1, name: 'Terminale S', students: 30 },
        { id: 2, name: 'Première ES', students: 25 },
        { id: 3, name: 'Seconde', students: 28 },
    ];

    return (
        <Container className="page-content">
            <h1 className="page-title">Gestion des Classes</h1>
            <BackButton />
            <Row className="mb-4">
                <Col>
                    <Button variant="primary" className="me-2">
                        <i className="bi bi-plus-circle"></i> Ajouter une classe
                    </Button>
                </Col>
            </Row>

            <Card>
                <Card.Body>
                    <Table striped bordered hover responsive>
                        <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Nombre d'élèves</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {classes.map((cls) => (
                            <tr key={cls.id}>
                                <td>{cls.name}</td>
                                <td>{cls.students}</td>
                                <td>
                                    <Button variant="info" size="sm" className="me-2">
                                        <i className="bi bi-eye"></i> Voir
                                    </Button>
                                    <Button variant="warning" size="sm" className="me-2">
                                        <i className="bi bi-pencil"></i> Modifier
                                    </Button>
                                    <Button variant="danger" size="sm">
                                        <i className="bi bi-trash"></i> Supprimer
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ClassesPage;
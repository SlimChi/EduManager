import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { BiCalculator } from 'react-icons/bi';
import '../Outils/calculator.css';
// Chargement différé pour de meilleures performances
const NumWorksEmulator = React.lazy(() => import('./NumWorksEmulator'));

const Calculator = () => {
    const location = useLocation();

    return (
        <Container className="mt-4">
            <Row className="mb-4">
                <Col>
                    <h2 className="d-flex align-items-center">
                        <BiCalculator className="me-2" />
                        Calculatrice NumWorks
                    </h2>
                    <p className="text-muted">
                        Émulateur officiel de la calculatrice NumWorks
                    </p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className=" p-3 bg-light rounded">
                        <Suspense fallback={<div>Chargement...</div>}>
                            <NumWorksEmulator />
                            <p
                                className="mt-3 text-center animated-subtext"
                                style={{
                                    fontSize: '20px',
                                    marginLeft: 'auto',
                                    fontWeight: 500,
                                    color: '#569ae1',
                                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                }}
                            >

                                <a href="https://www.numworks.com/simulator/" target="_blank" rel="noopener noreferrer">
                                    Numworks
                                </a>
                            </p>
                        </Suspense>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Calculator;
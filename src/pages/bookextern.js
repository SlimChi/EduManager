// BookExtern.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// Importez vos images depuis src/assets
import delagraveSpe2Nb from '../assets/delagrave-spe_2_nb.png';
import Maths_Tle_C from '../assets/Maths_Tle_C.png';
import Sciences_2nde from '../assets/Sciences_2nde.png';
import mathsCAP2019 from '../assets/mathsCAP2019.png';
import delagrave_Gpe_A_B_1er_livre_prof from '../assets/delagrave_Gpe_A_B_1er_livre_prof.png';
import sciences_Ter_bac_pro_2020 from '../assets/sciences_Ter_bac_pro_2020.png';
import Corrige_Maths_Nvx_Cahiers_2de_BP_ed_2021 from '../assets/Corrige_Maths_Nvx_Cahiers_2de_BP_ed_2021.png';
import Corrige_Maths_1re_Bac_Pro_C_ed_2022 from '../assets/Corrige_Maths_1re_Bac_Pro_C_ed_2022.png';
import Corrige_Maths_1re_Bac_Pro_A_et_B_ed_2022 from '../assets/Corrige_Maths_1re_Bac_Pro_A_et_B_ed_2022.png';
const BookExtern = () => {
    // Liste des livres avec les chemins corrects
    const books = [
        {
            id: 1,
            title: 'Maths 2nd 2019',
            image: delagraveSpe2Nb, // Utilisation de l'image importée
            file: '/LIVRES/delagrave-spe_2_nb.pdf'
        },
        {
            id: 3,
            title: 'Maths Tle Gr C',
            image: Maths_Tle_C,
            file: '/LIVRES/Maths-Tle-C.pdf'
        },
        {
            id: 4,
            title: 'Sciences 2nde',
            image: Sciences_2nde,
            file: '/LIVRES/Sciences_2nde.pdf'
        },
        {
            id: 5,
            title: 'maths CAP 2019',
            image: mathsCAP2019,
            file: '/LIVRES/mathsCAP2019.pdf'
        },
        {
            id: 6,
            title: 'delagrave Gpe A-B 1er livre prof',
            image: delagrave_Gpe_A_B_1er_livre_prof,
            file: '/LIVRES/delagrave_Gpe_A_B_1er_livre_prof.pdf'
        },
        {
            id: 7,
            title: 'sciences Ter bac pro 2020',
            image: sciences_Ter_bac_pro_2020,
            file: '/LIVRES/sciences_Ter_bac_pro_2020.pdf'
        },
        {
            id: 8,
            title: 'Corrige Maths Nvx Cahiers 2de BP ed 2021',
            image: Corrige_Maths_Nvx_Cahiers_2de_BP_ed_2021,
            file: '/LIVRES/Corrige_Maths_Nvx_Cahiers_2de_BP_ed_2021.pdf'
        },
        {
            id: 9,
            title: 'Corrige_Maths_1re_Bac_Pro_C_ed_2022',
            image: Corrige_Maths_1re_Bac_Pro_C_ed_2022,
            file: '/LIVRES/Corrige_Maths_1re_Bac_Pro_C_ed_2022.pdf'
        },
        {
            id: 10,
            title: 'Corrige Maths 1re Bac Pro A_et_B ed 2022',
            image: Corrige_Maths_1re_Bac_Pro_A_et_B_ed_2022, // Utilisation de l'image importée
            file: '/LIVRES/Corrige_Maths_1re_Bac_Pro_A_et_B_ed_2022.pdf'
        }
    ];

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Livres Externes PDF</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {books.map((book) => (
                    <Col key={book.id}>
                        <Card className="h-100">
                            <Card.Img
                                variant="top"
                                src={book.image} // Utilisation directe de l'image importée
                                alt={book.title}
                                style={{ height: '200px', objectFit: 'contain' }}
                            />
                            <Card.Body className="text-center">
                                <Card.Title className="h5">{book.title}</Card.Title>
                            </Card.Body>

                          >
                            <Card.Footer className="text-center bg-white border-0">
                                <a
                                    href={book.file}
                                    className="btn btn-sm"
                                    style={{
                                        backgroundColor: "#4A90E2",
                                        color: "#fff",
                                        fontSize: "0.9rem",
                                        padding: "6px 14px",
                                        borderRadius: "8px",
                                        textDecoration: "none",
                                        transition: "all 0.3s ease-in-out",
                                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                        margin:"auto"
                                    }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onMouseOver={(e) => e.target.style.backgroundColor = "#357ABD"}
                                    onMouseOut={(e) => e.target.style.backgroundColor = "#4A90E2"}
                                >
                                    Voir le PDF
                                </a>
                            </Card.Footer>
                        </Card>

                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BookExtern;
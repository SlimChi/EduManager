// BookExtern.js
import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';

// Import des images
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
    // Liste des livres avec les chemins corrigés pour GitHub Pages
    const books = [
        {
            id: 1,
            title: 'Maths 2nd 2019',
            image: delagraveSpe2Nb,
            file: `${process.env.PUBLIC_URL}/LIVRES/delagrave-spe_2_nb.pdf`
        },
        {
            id: 3,
            title: 'Maths Tle Gr C',
            image: Maths_Tle_C,
            file: `${process.env.PUBLIC_URL}/LIVRES/Maths-Tle-C.pdf`
        },
        {
            id: 4,
            title: 'Sciences 2nde',
            image: Sciences_2nde,
            file: `${process.env.PUBLIC_URL}/LIVRES/Sciences_2nde.pdf`
        },
        {
            id: 5,
            title: 'maths CAP 2019',
            image: mathsCAP2019,
            file: `${process.env.PUBLIC_URL}/LIVRES/mathsCAP2019.pdf`
        },
        {
            id: 6,
            title: 'delagrave Gpe A-B 1er livre prof',
            image: delagrave_Gpe_A_B_1er_livre_prof,
            file: `${process.env.PUBLIC_URL}/LIVRES/delagrave_Gpe_A_B_1er_livre_prof.pdf`
        },
        {
            id: 7,
            title: 'sciences Ter bac pro 2020',
            image: sciences_Ter_bac_pro_2020,
            file: `${process.env.PUBLIC_URL}/LIVRES/sciences_Ter_bac_pro_2020.pdf`
        },
        {
            id: 8,
            title: 'Corrige Maths Nvx Cahiers 2de BP ed 2021',
            image: Corrige_Maths_Nvx_Cahiers_2de_BP_ed_2021,
            file: `${process.env.PUBLIC_URL}/LIVRES/Corrige_Maths_Nvx_Cahiers_2de_BP_ed_2021.pdf`
        },
        {
            id: 9,
            title: 'Corrige Maths 1re Bac Pro C ed 2022',
            image: Corrige_Maths_1re_Bac_Pro_C_ed_2022,
            file: `${process.env.PUBLIC_URL}/LIVRES/Corrige_Maths_1re_Bac_Pro_C_ed_2022.pdf`
        },
        {
            id: 10,
            title: 'Corrige Maths 1re Bac Pro A_et_B ed 2022',
            image: Corrige_Maths_1re_Bac_Pro_A_et_B_ed_2022,
            file: `${process.env.PUBLIC_URL}/LIVRES/Corrige_Maths_1re_Bac_Pro_A_et_B_ed_2022.pdf`
        }
    ];

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Livres Externes PDF</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {books.map((book) => (
                    <Col key={book.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img
                                variant="top"
                                src={book.image}
                                alt={book.title}
                                style={{height: '200px', objectFit: 'contain', padding: '10px'}}
                            />
                            <Card.Body className="text-center d-flex flex-column">
                                <Card.Title className="h5 mb-3">{book.title}</Card.Title>
                                <div className="mt-auto">
                                    <a
                                        href={book.file}
                                        className="btn btn-primary btn-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            minWidth: '120px',
                                            transition: 'all 0.3s ease',
                                        }}
                                        onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
                                        onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                                    >
                                        <i className="fas fa-book-open me-2"></i>
                                        Voir le PDF
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BookExtern;
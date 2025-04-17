import React, { useState } from 'react';
import {
    Container, Card, Button, Form, Table, Alert,
    Badge, ListGroup, Image, Modal
} from 'react-bootstrap';
import {
    BiBook, BiCheckCircle, BiArrowBack, BiClipboard,
    BiMailSend, BiInfoCircle, BiDownload,
} from 'react-icons/bi';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import engraisImg from '../../assets/imageenrais.jpg';

const CCFEngraisLiquide = () => {
    // États pour les données étudiant et réponses
    const [studentInfo, setStudentInfo] = useState({
        nom: '', prenom: '', classe: '', date: ''
    });

    const [answers, setAnswers] = useState({
        q1: '', q2: '', q3: '', q4: '', q7: '', q8: '', q9: '',
        q10: '', q11: '', q12: '', q13: '', q14: '', q15: ''
    });

    const [observations, setObservations] = useState({
        experienceA: { metaux: 'Fe + Cu²⁺', observations: '', couleur: '' },
        experienceB: { metaux: 'Cu + Cu²⁺', observations: '', couleur: '' }
    });

    const [currentPart, setCurrentPart] = useState('presentation');
    const [showProtocolModal, setShowProtocolModal] = useState(false);
    const [showResultsModal, setShowResultsModal] = useState(false);
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

    // Gestion des changements de formulaire
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleAnswerChange = (question, value) => {
        setAnswers(prev => ({ ...prev, [question]: value }));
        updateProgress();
    };

    const handleObservationChange = (exp, field, value) => {
        setObservations(prev => ({
            ...prev,
            [exp]: { ...prev[exp], [field]: value }
        }));
        updateProgress();
    };

    // Calcul de la progression
    const updateProgress = () => {
        const totalFields = Object.keys(answers).length + 6;
        const filledFields =
            Object.values(answers).filter(v => v !== '').length +
            Object.values(observations.experienceA).filter(v => v !== '').length +
            Object.values(observations.experienceB).filter(v => v !== '').length;


    };

    // Génération du PDF
    const generatePDF = async () => {
        setIsGeneratingPDF(true);
        try {
            const pdf = new jsPDF('p', 'mm', 'a4');

            // Définir les marges (0,5 cm = 5 mm)
            const margin = 5;
            const pdfWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
            const pdfHeight = pdf.internal.pageSize.getHeight() - 2 * margin;

            // Style pour le contenu PDF
            const style = document.createElement('style');
            style.innerHTML = `
            @page { margin: 0; }
            body { 
                margin: 0;
                padding: 0;
                font-size: 10pt;
            }
            .pdf-page {
                width: 100%;
                height: 100%;
                padding: ${margin}mm;
                box-sizing: border-box;
            }
        `;
            document.head.appendChild(style);

            const parts = ['presentation', 'analyse', 'experimentation', 'evaluation'];

            for (const [index, part] of parts.entries()) {
                setCurrentPart(part);
                await new Promise(resolve => setTimeout(resolve, 300));

                const element = document.getElementById('ccf-content');
                if (element) {
                    // Appliquer un style spécifique pour le PDF
                    element.classList.add('pdf-mode');

                    const canvas = await html2canvas(element, {
                        scale: 2, // Augmenter la résolution
                        useCORS: true,
                        logging: false,
                        scrollX: 0,
                        scrollY: 0,
                        windowWidth: element.scrollWidth,
                        windowHeight: element.scrollHeight
                    });

                    const imgData = canvas.toDataURL('image/png');
                    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

                    if (index > 0) pdf.addPage();
                    pdf.addImage(imgData, 'PNG', margin, margin, pdfWidth, imgHeight);

                    // En-tête et pied de page
                    pdf.setFontSize(10);
                    pdf.setTextColor(100);
                    pdf.text(`Page ${index + 1}`, margin, pdf.internal.pageSize.getHeight() - margin);
                }
            }

            // En-tête et pied de page globaux
            pdf.setFontSize(10);
            pdf.setTextColor(100);
            pdf.text('CCF TOBM - Corrosion en milieu industriel', pdf.internal.pageSize.getWidth() / 2, margin, { align: 'center' });
            pdf.text(`Élève: ${studentInfo.nom} ${studentInfo.prenom} - Classe: ${studentInfo.classe}`,
                pdf.internal.pageSize.getWidth() / 2,
                pdf.internal.pageSize.getHeight() - margin,
                { align: 'center' });

            pdf.save(`CCF_Engrais_Liquide_${studentInfo.nom}_${studentInfo.prenom}.pdf`);
        } catch (error) {
            console.error("Erreur lors de la génération du PDF:", error);
        } finally {
            setIsGeneratingPDF(false);
            // Retirer le style après génération
            const styleElements = document.querySelectorAll('style[data-js-pdf]');
            styleElements.forEach(el => el.remove());
        }
    };

    // Composants pour chaque partie
    const renderPresentation = () => (

        <Card className="mb-4 border-primary">
            <Button
                variant="primary"
                size="lg"
                onClick={generatePDF}
                disabled={isGeneratingPDF}
            >
                <BiDownload className="me-2" /> Télécharger le CCF complet (PDF)
            </Button>
            <div className="text-center mt-4">

            </div> <br/>
            <Card.Header className="bg-primary text-white d-flex justify-content-between">
                <h2><BiBook /> Activité Expérimentale - Corrosion en milieu industriel</h2>
                <Badge bg="light" text="dark" className="fs-5">TOBM Bac Pro</Badge>
            </Card.Header>
            <Card.Body>
                <div className="d-flex flex-column flex-md-row gap-4 align-items-start">
                    <div className="flex-grow-1">
                        <Form.Group className="mb-3 row">
                            <div className="col-md-3">
                                <Form.Label>Nom :</Form.Label>
                                <Form.Control name="nom" value={studentInfo.nom} onChange={handleInputChange} />
                            </div>
                            <div className="col-md-3">
                                <Form.Label>Prénom :</Form.Label>
                                <Form.Control name="prenom" value={studentInfo.prenom} onChange={handleInputChange} />
                            </div>
                            <div className="col-md-3">
                                <Form.Label>Classe :</Form.Label>
                                <Form.Control name="classe" value={studentInfo.classe} onChange={handleInputChange} />
                            </div>
                            <div className="col-md-3">
                                <Form.Label>Date :</Form.Label>
                                <Form.Control type="date" name="date" value={studentInfo.date} onChange={handleInputChange} />
                            </div>
                        </Form.Group>

                        <h3 className="text-primary mt-3">Problématique</h3>
                        <Alert variant="primary" className="fst-italic">
                            "Les matériaux constitutifs de l'installation prévue par l'architecte dans une usine d'engrais liquide
                            à base de différents métaux sont-ils bien choisis ?"
                        </Alert>

                        <h4 className="mt-4">Contexte Industriel</h4>

                        <p>
                            Vous êtes responsable de maintenance dans une usine produisant un engrais liquide contenant :
                        </p>
                        <ListGroup>
                            <ListGroup.Item>• 135 g/L de Cuivre (sulfate de cuivre)</ListGroup.Item>
                            <ListGroup.Item>• 25 g/L de Zinc (sulfate de zinc)</ListGroup.Item>
                            <ListGroup.Item>• Additifs agronomiques (GREENSTIM®)</ListGroup.Item>
                        </ListGroup>
                    </div>


                </div>

                <div className="mt-4">
                    <h4>Objectifs d'apprentissage</h4>
                    <div className="d-flex flex-wrap gap-2">
                        <Badge bg="info" className="fs-6 p-2"><BiCheckCircle /> Identifier oxydant/réducteur</Badge>
                        <Badge bg="info" className="fs-6 p-2"><BiCheckCircle /> Classer des couples redox</Badge>
                        <Badge bg="info" className="fs-6 p-2"><BiCheckCircle /> Écrire des équations redox</Badge>
                        <Badge bg="info" className="fs-6 p-2"><BiCheckCircle /> Valider un choix technique</Badge>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className="bg-light">
                <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setCurrentPart('analyse')}

                >
                    Commencer l'activité <BiArrowBack className="ms-2" />
                </Button>
            </Card.Footer>
        </Card>
    );

    const renderAnalyse = () => (
        <Card className="mb-4">
            <Card.Header className="bg-success text-white">
                <h2><BiClipboard /> Partie I - Analyse Théorique</h2>
            </Card.Header>
            <Card.Body>
                <h4>Questions d'analyse</h4>

                <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">1. Métal majoritaire dans l'engrais :</Form.Label>
                    <Form.Control
                        value={answers.q1}
                        onChange={(e) => handleAnswerChange('q1', e.target.value)}
                        placeholder="Nom du métal le plus présent"
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">2. Forme chimique du métal :</Form.Label>
                    <div className="d-flex gap-3">
                        <Form.Control
                            value={answers.q2}
                            onChange={(e) => handleAnswerChange('q2', e.target.value)}
                            placeholder="Forme (ions/atome)"
                            style={{ width: '150px' }}
                        />
                        <Form.Control
                            placeholder="Symbole chimique"
                            style={{ width: '100px' }}
                        />
                    </div>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">3. Argumentation technique :</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={answers.q3}
                        onChange={(e) => handleAnswerChange('q3', e.target.value)}
                        placeholder="Qui a raison ? Quel élément pose problème ? Justifiez..."
                    />
                </Form.Group>

                <h4 className="mt-5">4. Protocole Expérimental</h4>
                <Alert variant="warning">
                    <BiInfoCircle /> Matériel disponible :
                    <div className="mt-2 d-flex flex-wrap gap-2">
                        <Badge bg="secondary">Béchers</Badge>
                        <Badge bg="secondary">Sulfate de Cuivre (135g/L)</Badge>
                        <Badge bg="secondary">Tubes à essais</Badge>
                        <Badge bg="secondary">Lame de fer</Badge>
                        <Badge bg="secondary">Lame de cuivre</Badge>
                        <Badge bg="secondary">Soude</Badge>
                    </div>
                </Alert>

                <Form.Group className="mb-3">
                    <Form.Label>Décrivez votre protocole :</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        value={answers.q4}
                        onChange={(e) => handleAnswerChange('q4', e.target.value)}
                        placeholder="Décrivez les étapes expérimentales..."
                    />
                </Form.Group>
            </Card.Body>
            <Card.Footer className="bg-light d-flex justify-content-between">
                <Button variant="outline-secondary" onClick={() => setCurrentPart('presentation')}>
                    <BiArrowBack /> Retour
                </Button>
                <Button variant="success" onClick={() => setShowProtocolModal(true)}>
                    Valider le protocole <BiCheckCircle />
                </Button>
            </Card.Footer>
        </Card>
    );

    const renderExperiment = () => (
        <Card className="mb-4">
            <Card.Header className="bg-danger text-white">
                <h2><BiClipboard /> Partie II - Expérimentation</h2>
            </Card.Header>
            <Card.Body>
                <h4>Tableau d'observations</h4>

                <Table striped bordered hover responsive className="mt-3">
                    <thead className="table-dark">
                    <tr>
                        <th>Expérience</th>
                        <th>A : Fe + Cu²⁺</th>
                        <th>B : Cu + Cu²⁺</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Observations visuelles</td>
                        <td>
                            <Form.Control
                                value={observations.experienceA.observations}
                                onChange={(e) => handleObservationChange('experienceA', 'observations', e.target.value)}
                                placeholder="Décrivez ce que vous observez"
                            />
                        </td>
                        <td>
                            <Form.Control
                                value={observations.experienceB.observations}
                                onChange={(e) => handleObservationChange('experienceB', 'observations', e.target.value)}
                                placeholder="Décrivez ce que vous observez"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Couleur du précipité</td>
                        <td>
                            <Form.Select
                                value={observations.experienceA.couleur}
                                onChange={(e) => handleObservationChange('experienceA', 'couleur', e.target.value)}
                            >
                                <option value="">Sélectionnez</option>
                                <option value="bleu">Bleu (Cu²⁺)</option>
                                <option value="vert">Vert (Fe²⁺)</option>
                                <option value="rouille">Rouille (Fe³⁺)</option>
                            </Form.Select>
                        </td>
                        <td>
                            <Form.Select
                                value={observations.experienceB.couleur}
                                onChange={(e) => handleObservationChange('experienceB', 'couleur', e.target.value)}
                            >
                                <option value="">Sélectionnez</option>
                                <option value="bleu">Bleu (Cu²⁺)</option>
                                <option value="vert">Vert (Fe²⁺)</option>
                                <option value="rouille">Rouille (Fe³⁺)</option>
                            </Form.Select>
                        </td>
                    </tr>
                    </tbody>
                </Table>

                <div className="mt-5">
                    <h4>Analyse des résultats</h4>

                    <div className="row mt-3">
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>7. Couples oxydant/réducteur :</Form.Label>
                                <Form.Control
                                    value={answers.q7}
                                    onChange={(e) => handleAnswerChange('q7', e.target.value)}
                                    placeholder=""
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>8. Oxydant le plus fort :</Form.Label>
                                <Form.Control
                                    value={answers.q8}
                                    onChange={(e) => handleAnswerChange('q8', e.target.value)}
                                    placeholder=""
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>9. Demi-équation oxydation :</Form.Label>
                                <Form.Control
                                    value={answers.q9}
                                    onChange={(e) => handleAnswerChange('q9', e.target.value)}
                                    placeholder=""
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>10. Demi-équation réduction :</Form.Label>
                                <Form.Control
                                    value={answers.q10}
                                    onChange={(e) => handleAnswerChange('q10', e.target.value)}
                                    placeholder=""
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <Form.Group className="mb-3">
                        <Form.Label>12. Équation bilan :</Form.Label>
                        <Form.Control
                            value={answers.q12}
                            onChange={(e) => handleAnswerChange('q12', e.target.value)}
                            placeholder=""
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>13. Conclusion technique :</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={answers.q13}
                            onChange={(e) => handleAnswerChange('q13', e.target.value)}
                            placeholder="Qui a raison ? Quel élément pose problème ? Justifiez..."
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>15. Courrier à l'architecte :</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            value={answers.q15}
                            onChange={(e) => handleAnswerChange('q15', e.target.value)}
                            placeholder="Rédigez votre courrier professionnel..."
                        />
                    </Form.Group>
                </div>
            </Card.Body>
            <Card.Footer className="bg-light d-flex justify-content-between">
                <Button variant="outline-secondary" onClick={() => setCurrentPart('analyse')}>
                    <BiArrowBack /> Retour à l'analyse
                </Button>
                <Button variant="danger" onClick={() => setShowResultsModal(true)}>
                    Valider les résultats <BiCheckCircle />
                </Button>
            </Card.Footer>
        </Card>
    );

    const renderEvaluation = () => (
        <Card className="mb-4 border-success">
            <Card.Header className="bg-success text-white">
                <h2><BiBook /> Grille d'évaluation</h2>
            </Card.Header>
            <Card.Body>
                <h4>Compétences évaluées</h4>
                <Table striped bordered className="mt-3">
                    <thead>
                    <tr>
                        <th>Compétence</th>
                        <th>Questions</th>
                        <th>Acquisition</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>S'approprier</td>
                        <td>1, 2, 6, 7</td>
                        <td>
                            <Form.Select>
                                <option></option>
                                <option>Partiellement acquis</option>
                                <option>Acquis</option>
                            </Form.Select>
                        </td>
                    </tr>
                    <tr>
                        <td>Analyser/Raisonner</td>
                        <td>3, 4</td>
                        <td>
                            <Form.Select>
                                <option></option>
                                <option>Partiellement acquis</option>
                                <option>Acquis</option>
                            </Form.Select>
                        </td>
                    </tr>
                    <tr>
                        <td>Réaliser</td>
                        <td>5</td>
                        <td>
                            <Form.Select>
                                <option></option>
                                <option>Partiellement acquis</option>
                                <option>Acquis</option>
                            </Form.Select>
                        </td>
                    </tr>
                    <tr>
                        <td>Valider</td>
                        <td>8-12, 14</td>
                        <td>
                            <Form.Select>
                                <option></option>
                                <option>Partiellement acquis</option>
                                <option>Acquis</option>
                            </Form.Select>
                        </td>
                    </tr>
                    <tr>
                        <td>Communiquer</td>
                        <td>13, 15, Appels</td>
                        <td>
                            <Form.Select>
                                <option></option>
                                <option>Partiellement acquis</option>
                                <option>Acquis</option>
                            </Form.Select>
                        </td>
                    </tr>
                    </tbody>
                </Table>

                <div className="mt-4">
                    <h4>Note globale /20</h4>
                    <Form.Control
                        type="number"
                        min="0"
                        max="20"
                        style={{ width: '100px' }}
                        className="mb-3"
                    />
                </div>


            </Card.Body>
        </Card>
    );

    return (
        <Container
            className="my-4"
            id="ccf-content"
            style={{
                width: '210mm', // Format A4
                minHeight: '297mm',
                margin: '0 auto',
                padding: '10mm',
                boxSizing: 'border-box',
                backgroundColor: 'white',
                boxShadow: '0 0 5px rgba(0,0,0,0.1)'
            }}
        >


            {currentPart === 'presentation' && renderPresentation()}
            {currentPart === 'analyse' && renderAnalyse()}
            {currentPart === 'experimentation' && renderExperiment()}
            {currentPart === 'evaluation' && renderEvaluation()}

            {/* Modals */}
            <Modal show={showProtocolModal} onHide={() => setShowProtocolModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Validation du protocole</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Alert variant="success">
                        <BiCheckCircle /> Votre protocole a été validé par le professeur.
                    </Alert>
                    <p>Vous pouvez maintenant passer à la phase expérimentale.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {
                        setShowProtocolModal(false);
                        setCurrentPart('experimentation');
                    }}>
                        Commencer l'expérimentation
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showResultsModal} onHide={() => setShowResultsModal(false)} size="lg">
                <Modal.Header closeButton className="bg-success text-white">
                    <Modal.Title>Validation des résultats</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Alert variant="success">
                        <BiCheckCircle /> Vos résultats expérimentaux ont été validés.
                    </Alert>
                    <p>Vous pouvez maintenant :</p>
                    <ul>
                        <li>Compléter votre analyse</li>
                        <li>Rédiger votre conclusion</li>
                        <li>Passer à l'évaluation finale</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={() => setShowResultsModal(false)}>
                        Continuer à travailler
                    </Button>
                    <Button variant="success" onClick={() => {
                        setShowResultsModal(false);
                        setCurrentPart('evaluation');
                    }}>
                        Passer à l'évaluation
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default CCFEngraisLiquide;
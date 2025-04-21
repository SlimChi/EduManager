import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Badge, Spinner } from 'react-bootstrap';
import { BiArrowBack } from 'react-icons/bi';
import { FaFileAlt, FaFlask, FaIndustry } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import '../../styles/CCF.css';
import PrintManager from "../../utils/PrintManager";


const CCF2ToBM = () => {
    const { ccfId } = useParams();
    const navigate = useNavigate();
    const [ccfDetails, setCcfDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const [answers, setAnswers] = useState({
        q1: '', q2: '', q3: '', q4a: '', q4b: '', q5: '',
        q6a: '', q6b: '', q6c: '', q7: '', q8: '', q9: '',
        q10: '', q11: '', q12: '', q13: '', q14: '', q15: ''
    });

    const [experimentObservations, setExperimentObservations] = useState({
        expA: { metals: '', observations: '', color: '' },
        expB: { metals: '', observations: '', color: '' }
    });

    useEffect(() => {
        // Simulation de chargement des données
        const timer = setTimeout(() => {
            setCcfDetails({
                id: ccfId,
                title: `CCF ${ccfId}`,
                description: `Détails du CCF ${ccfId}`,
                date: new Date().toISOString()
            });
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [ccfId]);

    const handleAnswerChange = (field, value) => {
        setAnswers(prev => ({ ...prev, [field]: value }));
    };

    const handleObservationChange = (exp, field, value) => {
        setExperimentObservations(prev => ({
            ...prev,
            [exp]: { ...prev[exp], [field]: value }
        }));
    };


    if (loading) {
        return (
            <Container className="mt-4 text-center">
                <Spinner animation="border" variant="primary" />
                <p>Chargement du CCF...</p>
            </Container>
        );
    }

    return (
        <Container className="mt-4">
            <Button
                variant="outline-primary"
                onClick={() => navigate(-1)}
                className="mb-4"
            >
                <BiArrowBack /> Retour
            </Button>

            <Card className="shadow">
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-center">
                        <span>{ccfDetails.title}</span>
                        <Badge bg="info">
                            {new Date(ccfDetails.date).toLocaleDateString()}
                        </Badge>
                    </Card.Title>

                    <div className="ccf-container" id="ccf-content">
                        {/* Page 1 */}
                        <div className="print-page">
                            <header className="ccf-header">
                                <IoMdSchool className="header-icon" />
                                <h1>CCF - Usine d'engrais liquide et corrosion</h1>
                               <PrintManager/>
                            </header>

                            <div className="ccf-intro">
                                <div className="theme-box">
                                    <FaIndustry className="theme-icon" />
                                    <h2>Thématique : Usine d'engrais liquide, comment éviter la corrosion ?</h2>
                                </div>

                                <section className="ccf-section">
                                    <h3><FaFlask /> Mise en situation / Problématique</h3>
                                    <p>
                                        Les matériaux constitutifs de l'installation prévue par l'architecte dans une usine d'engrais liquide à base de différents métaux sont-ils bien choisis ?
                                    </p>
                                </section>

                                <section className="ccf-section">
                                    <h3>Objectifs de l'activité</h3>
                                    <ul className="objectives-list">
                                        <li>Identifier dans une réaction donnée un oxydant et un réducteur</li>
                                        <li>Classer expérimentalement des couples redox</li>
                                        <li>Prévoir si une réaction est possible à partir d'une classification électrochimique</li>
                                        <li>Ecrire et équilibrer les demi-équations, écrire le bilan de la réaction d'oxydoréduction</li>
                                    </ul>
                                </section>

                                <section className="ccf-section">
                                    <h3>Compétences visées</h3>
                                    <p>
                                        Les compétences visées sont celles de la grille nationale d'évaluation en mathématiques et sciences physiques :
                                        s'approprier, analyser, réaliser, valider, communiquer.
                                    </p>
                                </section>
                            </div>
                        </div>

                        {/* Page 2 */}
                        <div id="page2-start" className="print-page">
                            <section className="ccf-section">
                                <h3>PARTIE I - Analyse</h3>
                                <div className="situation-box">
                                    <p>
                                        Vous êtes responsable de la maintenance dans une entreprise qui produit de l'engrais chimique liquide dont la composition est donnée ci-dessous.
                                        Une nouvelle ligne de mise en bouteille doit être créée pour répondre à l'augmentation de la demande d'engrais.
                                        L'architecte prévoit des canalisations en fer pour cette ligne d'embouteillage, avec des pompes en cuivre.
                                        Vous n'êtes pas d'accord avec lui et pensez que cela va engendrer un coût de maintenance trop important.
                                    </p>

                                    <div className="composition-box">
                                        <h4>COMPOSITION ENGRAIS</h4>
                                        <ul>
                                            <li>135 g/l de cuivre métal sous forme de sulfate de cuivre neutralisé à la chaux</li>
                                            <li>14 g/l de bore sous forme de pentaborate de sodium</li>
                                            <li>8 g/l de manganèse sous forme de sulfate de manganèse</li>
                                            <li>25 g/l de zinc sous forme de sulfate de zinc</li>
                                            <li>95 g/l de GREENSTIM® (stimulateur de croissance)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="question">
                                    <p>1. Donner le nom du métal le plus présent dans l'engrais fabriqué.</p>
                                    <textarea
                                        value={answers.q1}
                                        onChange={(e) => handleAnswerChange('q1', e.target.value)}
                                        rows="2"
                                    ></textarea>
                                </div>

                                <div className="question">
                                    <p>2. Préciser sous quelle forme se trouve ce métal dans l'engrais (ions ou atome). Préciser le symbole chimique.</p>
                                    <textarea
                                        value={answers.q2}
                                        onChange={(e) => handleAnswerChange('q2', e.target.value)}
                                        rows="2"
                                    ></textarea>
                                </div>

                                <div className="question">
                                    <p>3. A l'aide du document en Annexe 1, indiquer selon vous qui a raison et quel élément de l'installation poserait problème.</p>
                                    <textarea
                                        value={answers.q3}
                                        onChange={(e) => handleAnswerChange('q3', e.target.value)}
                                        rows="4"
                                    ></textarea>
                                </div>

                                <div className="question">
                                    <p>4. Proposer un protocole expérimental (une ou plusieurs expériences) permettant de vérifier l'effet du métal majoritaire présent dans l'engrais sur les deux éléments de la nouvelle installation.</p>
                                    <p>Matériel à disposition :</p>
                                    <ul className="material-list">
                                        <li>Clou en fer</li>
                                        <li>Papier de verre</li>
                                        <li>Béchers</li>
                                        <li>Sulfate de Cuivre (135g/L)</li>
                                        <li>Sulfate de zinc (25g/L)</li>
                                        <li>Tubes à essais</li>
                                        <li>Pipettes plastiques</li>
                                        <li>Soude</li>
                                        <li>Portoir à tubes</li>
                                        <li>Lame de fer</li>
                                        <li>Tournure de cuivre</li>
                                        <li>Lame de zinc</li>
                                        <li>Lame de cuivre</li>
                                        <li>Limaille de fer</li>
                                    </ul>
                                    <p>a. Entourer le matériel nécessaire à l'expérience proposée.</p>
                                    <textarea
                                        value={answers.q4a}
                                        onChange={(e) => handleAnswerChange('q4a', e.target.value)}
                                        rows="3"
                                    ></textarea>
                                    <p>b. Faire un schéma du montage et fournir un protocole.</p>
                                    <textarea
                                        value={answers.q4b}
                                        onChange={(e) => handleAnswerChange('q4b', e.target.value)}
                                        rows="4"
                                    ></textarea>
                                </div>
                            </section>
                        </div>

                        {/* Page 3 */}
                        <div className="print-page">
                            <section className="ccf-section">
                                <h3>PARTIE II - Expérimentation</h3>

                                <div className="question">
                                    <p>5. Réaliser l'expérience validée par le professeur ou fournie</p>
                                    <textarea
                                        value={answers.q5}
                                        onChange={(e) => handleAnswerChange('q5', e.target.value)}
                                        rows="2"
                                    ></textarea>
                                </div>

                                <div className="question">
                                    <p>6. Noter dans le tableau suivant vos observations</p>
                                    <table className="experiment-table">
                                        <thead>
                                        <tr>
                                            <th>Expérience</th>
                                            <th>A : Lame de Fer / Solution de sulfate de cuivre</th>
                                            <th>B : Lame de cuivre / Solution de sulfate de cuivre</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Métaux en présence</td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={experimentObservations.expA.metals}
                                                    onChange={(e) => handleObservationChange('expA', 'metals', e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={experimentObservations.expB.metals}
                                                    onChange={(e) => handleObservationChange('expB', 'metals', e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Observations</td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={experimentObservations.expA.observations}
                                                    onChange={(e) => handleObservationChange('expA', 'observations', e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={experimentObservations.expB.observations}
                                                    onChange={(e) => handleObservationChange('expB', 'observations', e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Couleur du précipité ions mis en évidence</td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={experimentObservations.expA.color}
                                                    onChange={(e) => handleObservationChange('expA', 'color', e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={experimentObservations.expB.color}
                                                    onChange={(e) => handleObservationChange('expB', 'color', e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="question">
                                    <p>7. A l'aide de l'annexe 1, préciser les couples oxydant/réducteur présents dans l'expérience A.</p>
                                    <textarea
                                        value={answers.q7}
                                        onChange={(e) => handleAnswerChange('q7', e.target.value)}
                                        rows="2"
                                    ></textarea>
                                </div>

                                <div className="question">
                                    <p>8. Donner l'oxydant le plus fort parmi ces deux métaux.</p>
                                    <textarea
                                        value={answers.q8}
                                        onChange={(e) => handleAnswerChange('q8', e.target.value)}
                                        rows="1"
                                    ></textarea>
                                </div>

                                <div className="question">
                                    <p>9. Ecrire la demi-équation subie par l'oxydant le plus fort.</p>
                                    <textarea
                                        value={answers.q9}
                                        onChange={(e) => handleAnswerChange('q9', e.target.value)}
                                        rows="1"
                                    ></textarea>
                                </div>

                                <div className="question">
                                    <p>10. Ecrire la demi-équation subie par le réducteur le plus fort.</p>
                                    <textarea
                                        value={answers.q10}
                                        onChange={(e) => handleAnswerChange('q10', e.target.value)}
                                        rows="1"
                                    ></textarea>
                                </div>
                            </section>
                        </div>

                        {/* Page 4 */}
                        <div className="print-page">
                            <section className="ccf-section">
                                <div className="question">
                                    <p>11. Indiquer si ce métal a été oxydé ou réduit. Justifier votre réponse.</p>
                                    <textarea
                                        value={answers.q11}
                                        onChange={(e) => handleAnswerChange('q11', e.target.value)}
                                        rows="3"
                                    ></textarea>
                                </div>

                                <div className="question">
                                    <p>12. Donner l'équation bilan de la réaction.</p>
                                    <textarea
                                        value={answers.q12}
                                        onChange={(e) => handleAnswerChange('q12', e.target.value)}
                                        rows="1"
                                        placeholder="……… + ……… --- ……… + ………"
                                    ></textarea>
                                </div>

                                <div className="question">
                                    <p>13. Répondre à la question initiale : qui a raison et quel élément de l'installation (pompe ou tuyau) pose problème ? Justifier votre réponse.</p>
                                    <textarea
                                        value={answers.q13}
                                        onChange={(e) => handleAnswerChange('q13', e.target.value)}
                                        rows="4"
                                    ></textarea>
                                </div>

                                <div className="question">
                                    <p>14. Préciser si ces résultats valident votre réponse à la question 2 et si cela était prévisible.</p>
                                    <textarea
                                        value={answers.q14}
                                        onChange={(e) => handleAnswerChange('q14', e.target.value)}
                                        rows="4"
                                    ></textarea>
                                </div>

                                <div className="question">
                                    <p>15. Préparer un courrier à l'architecte lui expliquant vos craintes et votre démarche pour les vérifier.</p>
                                    <textarea
                                        value={answers.q15}
                                        onChange={(e) => handleAnswerChange('q15', e.target.value)}
                                        rows="6"
                                    ></textarea>
                                </div>
                            </section>

                            <section className="ccf-section annexe">
                                <h3>DOCUMENT ANNEXE 1</h3>
                                <h4>Classification électrochimique</h4>
                                <table className="annexe-table">
                                    <thead>
                                    <tr>
                                        <th colSpan="2">Pouvoir oxydant croissant</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr><td>Au<sup>3+</sup></td><td>Au</td></tr>
                                    <tr><td>Ag<sup>+</sup></td><td>Ag</td></tr>
                                    <tr><td>Cu<sup>2+</sup></td><td>Cu</td></tr>
                                    <tr><td>H<sup>+</sup></td><td>H<sub>2</sub></td></tr>
                                    <tr><td>Sn<sup>2+</sup></td><td>Sn</td></tr>
                                    <tr><td>Ni<sup>2+</sup></td><td>Ni</td></tr>
                                    <tr><td>Fe<sup>2+</sup></td><td>Fe</td></tr>
                                    <tr><td>Cr<sup>3+</sup></td><td>Cr</td></tr>
                                    <tr><td>Zn<sup>2+</sup></td><td>Zn</td></tr>
                                    <tr><td>Al<sup>3+</sup></td><td>Al</td></tr>
                                    <tr><td>Mg<sup>2+</sup></td><td>Mg</td></tr>
                                    </tbody>
                                </table>

                                <h3>DOCUMENT ANNEXE 2</h3>
                                <table className="annexe-table">
                                    <thead>
                                    <tr>
                                        <th>Réactif</th>
                                        <th>Solution d'hydroxyde de sodium (soude)</th>
                                        <th>Solution de nitrate d'argent</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Couleur du précipité</td>
                                        <td>bleu / vert / rouille</td>
                                        <td>blanc qui noircit à la lumière</td>
                                    </tr>
                                    <tr>
                                        <td>Ion(s) identifié(s)</td>
                                        <td>Cu<sup>2+</sup> / Fe<sup>2+</sup> / Fe<sup>3+</sup></td>
                                        <td>Cl<sup>-</sup></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </section>

                            <footer className="ccf-footer">
                                <p>CCF conçu pour une impression au format A4 - Sciences Physiques</p>
                            </footer>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h5>Contenu spécifique à CCF2ToBM</h5>
                        <p>Ceci est la page détaillée pour le CCF {ccfId}</p>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CCF2ToBM;
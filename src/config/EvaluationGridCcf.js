import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './print.css';

const EvaluationGridCcf = () => {
    return (
        <div className="container my-2">
            <div className="card border-0 shadow-lg" style={{borderRadius: "15px", overflow: "hidden"}}>
                <div className="card-header text-white text-center py-4"
                     style={{
                         background: "linear-gradient(155deg, #A7C7E7 0%, #F3F4F6 100%)",
                         borderBottom: "none"
                     }}>
                    <h3 className="mb-0 fw-bold">FICHE INDIVIDUELLE D'ÉVALUATION</h3>
                    <div className="mt-2" style={{opacity: 1}}>
                        <i className="fas fa-graduation-cap me-2">
                            <span style={{color: "black"}}>Évaluation des compétences professionnelles</span>
                        </i>
                    </div>
                </div>
                <div className="card-body px-4 py-4">
                    <div className="row mb-4 g-3">
                        <div className="col-md-6">
                            <div className="p-3 bg-light rounded-3">
                                <strong>Session :</strong>
                                <span className="ms-2">2024-2025</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-3 bg-light rounded-3 text-end">
                                <strong>Établissement :</strong>
                                <span className="ms-2">Lycée Professionnel PIERRE-JOSEPH LAURENT</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-3 bg-light rounded-3">
                                <strong>Spécialité :</strong>
                                <span className="ms-2">Seconde MRC</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-3 bg-light rounded-3 text-end">
                                <strong>Date de l'épreuve :</strong>
                                <span className="ms-2">............................................</span>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="p-3 bg-light rounded-3">
                                <strong>Nom et prénom du candidat :</strong>
                                <span
                                    className="ms-2">.............................................................</span>
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead>
                            <tr style={{
                                background: "linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)",
                                color: "#2c3e50"
                            }}>
                                <th className="py-3 ps-4 rounded-start" style={{minWidth: "120px"}}>Compétences</th>
                                <th className="py-3" style={{minWidth: "200px"}}>Capacités</th>
                                <th className="py-3" style={{minWidth: "150px"}}>Questions</th>
                                <th className="py-3 pe-4 rounded-end text-center" style={{minWidth: "120px"}}>Points
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="border-bottom border-light">
                                <td className="ps-4 text-info fw-bold">
                                    <i className="fas fa-search me-2"></i>
                                    S'approprier
                                </td>
                                <td className="py-3">Rechercher, extraire et organiser l'information. Traduire des
                                    informations, des codages.
                                </td>
                                <td>
                                    <div className="bg-light rounded p-2">
                                        Exercice 1: Q1, Q2, Q3, Q4, Q5, Q7<br/>
                                        Exercice 3: Q1 (tableau)
                                    </div>
                                </td>
                                <td className="pe-4 text-center">
                                    <div className="bg-light rounded p-2 text-center" style={{minWidth: "80px"}}>
                                        ________
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-bottom border-light">
                                <td className="ps-4 text-primary fw-bold">
                                    <i className="fas fa-brain me-2"></i>
                                    Analyser / Raisonner
                                </td>
                                <td className="py-3">Émettre des conjectures, formuler des hypothèses. Proposer, choisir
                                    une méthode de résolution ou un protocole expérimental.
                                </td>
                                <td>
                                    <div className="bg-light rounded p-2">
                                        Exercice 1: Q8, Q9, Q10<br/>
                                        Exercice 2: Q1<br/>
                                        Exercice 3: Q3
                                    </div>
                                </td>
                                <td className="pe-4 text-center">
                                    <div className="bg-light rounded p-2 text-center" style={{minWidth: "80px"}}>
                                        ________
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-bottom border-light">
                                <td className="ps-4 text-success fw-bold">
                                    <i className="fas fa-tasks me-2"></i>
                                    Réaliser
                                </td>
                                <td className="py-3">Mettre en œuvre une méthode de résolution, des algorithmes ou un
                                    protocole expérimental en respectant les règles de sécurité.
                                </td>
                                <td>
                                    <div className="bg-light rounded p-2">
                                        Exercice 3: Q2 (calcul), Q4 (tracé)
                                    </div>
                                </td>
                                <td className="pe-4 text-center">
                                    <div className="bg-light rounded p-2 text-center" style={{minWidth: "80px"}}>
                                        ________
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-bottom border-light">
                                <td className="ps-4 text-warning fw-bold">
                                    <i className="fas fa-check-circle me-2"></i>
                                    Valider
                                </td>
                                <td className="py-3">Exploiter et interpréter des résultats ou des observations de façon
                                    critique et argumentée.
                                </td>
                                <td>
                                    <div className="bg-light rounded p-2">
                                        Exercice 2: Q2<br/>
                                        Exercice 3: Q5
                                    </div>
                                </td>
                                <td className="pe-4 text-center">
                                    <div className="bg-light rounded p-2 text-center" style={{minWidth: "80px"}}>
                                        ________
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-bottom border-light">
                                <td className="ps-4 text-danger fw-bold">
                                    <i className="fas fa-comments me-2"></i>
                                    Communiquer
                                </td>
                                <td className="py-3">Rendre compte d'un résultat, à l'oral ou à l'écrit en utilisant des
                                    outils et un langage approprié.
                                </td>
                                <td>
                                    <div className="bg-light rounded p-2">
                                        Exercice 1: Q6<br/>
                                        Exercice 3: Q4 (construction)
                                    </div>
                                </td>
                                <td className="pe-4 text-center">
                                    <div className="bg-light rounded p-2 text-center" style={{minWidth: "80px"}}>
                                        ________
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="row mt-4 g-3">
                        <div className="col-md-6">
                            <div className="p-3 bg-light rounded-3">
                                <strong>Total des points :</strong>
                                <span className="ms-2">____ / 10</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EvaluationGridCcf;
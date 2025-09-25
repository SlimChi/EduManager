import React, {useRef, useState} from 'react';
import {FaCalculator, FaFileInvoice, FaPercent, FaMoneyBillWave, FaCheck, FaChartLine} from 'react-icons/fa';
import '../../../../styles/activites.css';
import {useLocation, useParams} from "react-router-dom";
import BackButton from "../../../../components/navigation/BackButton";
import PrintManager from "../../../../utils/PrintManager";
import Automatismes2 from "../../../../config/Automatismes2";
import ModalImage from "../../../../utils/ModalImage";
import AutoEvaluationGrid2 from "../../../../config/AutoEvaluationGrid2";
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";

const ActCoInterventionCalculCommerciaux = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';

    const [answers, setAnswers] = useState({
        // Exercice 1
        ex1_art1_reduction: '', ex1_art1_prix_reduit: '', ex1_art1_prix_final: '',
        ex1_art2_reduction: '', ex1_art2_prix_reduit: '', ex1_art2_prix_final: '',
        ex1_art3_reduction: '', ex1_art3_prix_reduit: '', ex1_art3_prix_final: '',
        ex1_art4_reduction: '', ex1_art4_prix_reduit: '', ex1_art4_prix_final: '',
        ex1_coefficient: '',
        ex1_client_reponse: '',

        // Exercice 2
        ex2_stylo_total: '', ex2_stylo_tva: '', ex2_stylo_ttc: '',
        ex2_cahier_total: '', ex2_cahier_tva: '', ex2_cahier_ttc: '',
        ex2_colle_total: '', ex2_colle_tva: '', ex2_colle_ttc: '',
        ex2_total_ht: '', ex2_total_tva: '', ex2_total_ttc: '',
        ex2_coefficient_tva: '',

        // Exercice 3
        ex3_chemise_prix_vente: '', ex3_chemise_remise: '', ex3_chemise_final: '',
        ex3_pantalon_prix_vente: '', ex3_pantalon_remise: '', ex3_pantalon_final: '',
        ex3_ceinture_prix_vente: '', ex3_ceinture_remise: '', ex3_ceinture_final: '',
        ex3_negociation: '',
        ex3_explication_marge: '',

        // Exercice 4
        ex4_placement1: '', ex4_placement2: '', ex4_placement3: '', ex4_placement4: '',
        ex4_explication: ''
    });

    const [showCorrections, setShowCorrections] = useState({});

    // Réponses attendues
    const correctAnswers = {
        // Exercice 1
        ex1_art1_reduction: "30,00 €",
        ex1_art1_prix_reduit: "120,00 €",
        ex1_art1_prix_final: "132,00 €",
        ex1_art2_reduction: "37,50 €",
        ex1_art2_prix_reduit: "212,50 €",
        ex1_art2_prix_final: "223,13 €",
        ex1_art3_reduction: "10,00 €",
        ex1_art3_prix_reduit: "90,00 €",
        ex1_art3_prix_final: "108,00 €",
        ex1_art4_reduction: "75,00 €",
        ex1_art4_prix_reduit: "225,00 €",
        ex1_art4_prix_final: "258,75 €",
        ex1_coefficient: "Coefficient réduction = 1 - (taux/100). Ex: 20% → 0,80",
        ex1_client_reponse: "La taxe s'applique sur le prix après réduction, ce qui explique que le prix final soit supérieur au prix réduit affiché.",

        // Exercice 2
        ex2_stylo_total: "15,00 €", ex2_stylo_tva: "3,00 €", ex2_stylo_ttc: "18,00 €",
        ex2_cahier_total: "15,00 €", ex2_cahier_tva: "3,00 €", ex2_cahier_ttc: "18,00 €",
        ex2_colle_total: "16,00 €", ex2_colle_tva: "3,20 €", ex2_colle_ttc: "19,20 €",
        ex2_total_ht: "46,00 €", ex2_total_tva: "9,20 €", ex2_total_ttc: "55,20 €",
        ex2_coefficient_tva: "Coefficient TVA 20% = 1,20",

        // Exercice 3
        ex3_chemise_prix_vente: "28,00 €", ex3_chemise_remise: "2,80 €", ex3_chemise_final: "25,20 €",
        ex3_pantalon_prix_vente: "45,00 €", ex3_pantalon_remise: "2,25 €", ex3_pantalon_final: "42,75 €",
        ex3_ceinture_prix_vente: "19,50 €", ex3_ceinture_remise: "3,90 €", ex3_ceinture_final: "15,60 €",
        ex3_negociation: "Je peux proposer une remise limitée tout en expliquant que nos prix incluent des coûts fixes et une marge raisonnable.",
        ex3_explication_marge: "La marge couvre nos frais d'exploitation et nous permet d'offrir un service de qualité.",

        // Exercice 4
        ex4_placement1: "183,33 €",
        ex4_placement2: "320,83 €",
        ex4_placement3: "343,75 €",
        ex4_placement4: "201,67 €",
        ex4_explication: "L'intérêt simple se calcule uniquement sur le capital initial, tandis que l'intérêt composé s'applique sur le capital + les intérêts accumulés."
    };

    const [modalState, setModalState] = useState({
        show: false,
        imageUrl: '',
        altText: ''
    });

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState(prev => ({...prev, show: false}));
    };

    const handleInputChange = (field, value) => {
        setAnswers(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const contentRef = useRef();

    const toggleCorrection = (field) => {
        setShowCorrections(prev => ({
            ...prev,
            [field]: !prev[field]
        }));

        if (!answers[field] && !showCorrections[field]) {
            setAnswers(prev => ({
                ...prev,
                [field]: correctAnswers[field]
            }));
        }
    };

    const CorrectionButton = ({field}) => (
        <button
            onClick={() => toggleCorrection(field)}
            style={{
                padding: '3px 8px',
                fontSize: '12px',
                backgroundColor: showCorrections[field] ? '#e74c3c' : '#2ecc71',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
                marginTop: '5px'
            }}
        >
            <FaCheck style={{marginRight: '3px', fontSize: '13px'}}/>
            {showCorrections[field] ? '✕ Cacher' : '✓ Vérifier'}
        </button>
    );

    if (className === 'ClasseNonDisponible') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (
        <>
            <BackButton/>
            <div className="tp-container" id="cointer-calculs-content" ref={contentRef}>
                <PrintManager
                    contentRef={contentRef}
                    activityName="CoInter_Calculs_Commerciaux"
                    pageCount={4}
                    quality="hd"
                />

                {/* PAGE 1 - Exercice 1 */}
                <div className="print-page">

                    <div style={{marginTop: '-10px'}}>
                        <Automatismes2/>
                    </div>

                    <div className="activity-header mt-0">
                        <div className="activity-title">
                            <span className="course-title">
                                <FaCalculator/> « Calculs Commerciaux - Prix, Taxes et Pourcentages »
                            </span>
                        </div>
                    </div>

                    {/* EXERCICE 1 */}
                    <div className="question-card mt-3 mb-0" style={{
                        backgroundColor: '#ffffff',
                        border: '2px solid #e67e22',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div className="question-content">
                            <h4 className="vect-title" style={{color: '#e67e22'}}>
                                <FaPercent/> <span>Exercice 1 : Calculs de Prix et Pourcentages</span>
                            </h4>

                            <div style={{
                                backgroundColor: '#fffaf0',
                                padding: '10px',
                                borderRadius: '6px',
                                marginBottom: '15px',
                                fontSize: '13px',
                                lineHeight: '1.4'
                            }}>
                                <strong>Contexte :</strong> Vous travaillez comme employé polyvalent dans un magasin de
                                prêt-à-porter. Pendant les soldes, votre responsable vous demande de calculer les
                                nouveaux prix des articles après réduction et d'y ajouter la TVA.
                                <br/><strong>Objectif :</strong> Savoir calculer un prix après réduction ou avec une
                                augmentation (taxe ou marge).
                            </div>

                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                fontSize: '12px',
                                marginBottom: '15px'
                            }}>
                                <thead>
                                <tr style={{backgroundColor: '#f8f9fa'}}>
                                    <th style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                        fontWeight: 'bold'
                                    }}>Article
                                    </th>
                                    <th style={{border: '1px solid #ddd', padding: '8px', fontWeight: 'bold'}}>Prix
                                        initial (€)
                                    </th>
                                    <th style={{border: '1px solid #ddd', padding: '8px', fontWeight: 'bold'}}>Taux de
                                        réduction (%)
                                    </th>
                                    <th style={{border: '1px solid #ddd', padding: '8px', fontWeight: 'bold'}}>Montant
                                        réduction (€)
                                    </th>
                                    <th style={{border: '1px solid #ddd', padding: '8px', fontWeight: 'bold'}}>Prix
                                        après réduction (€)
                                    </th>
                                    <th style={{border: '1px solid #ddd', padding: '8px', fontWeight: 'bold'}}>Taxe
                                        (%)
                                    </th>
                                    <th style={{border: '1px solid #ddd', padding: '8px', fontWeight: 'bold'}}>Prix
                                        final avec taxe (€)
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {[
                                    {article: 1, prix: 150, reduction: 20, taxe: 10},
                                    {article: 2, prix: 250, reduction: 15, taxe: 5},
                                    {article: 3, prix: 100, reduction: 10, taxe: 20},
                                    {article: 4, prix: 300, reduction: 25, taxe: 15}
                                ].map((item) => (
                                    <tr key={item.article}>
                                        <td style={{
                                            border: '1px solid #ddd',
                                            padding: '6px',
                                            textAlign: 'center',
                                            fontWeight: 'bold'
                                        }}>{item.article}</td>
                                        <td style={{
                                            border: '1px solid #ddd',
                                            padding: '6px',
                                            textAlign: 'center'
                                        }}>{item.prix}</td>
                                        <td style={{
                                            border: '1px solid #ddd',
                                            padding: '6px',
                                            textAlign: 'center'
                                        }}>{item.reduction}</td>
                                        <td style={{border: '1px solid #ddd', padding: '6px'}}>
                                            <input type="text" style={{
                                                width: '100%',
                                                border: 'none',
                                                textAlign: 'center',
                                                fontSize: '10px'
                                            }}
                                                   onChange={(e) => handleInputChange(`ex1_art${item.article}_reduction`, e.target.value)}/>
                                            {showCorrections[`ex1_art${item.article}_reduction`] &&
                                                <div style={{
                                                    color: '#27ae60',
                                                    fontWeight: 'bold',
                                                    fontSize: '9px'
                                                }}>{correctAnswers[`ex1_art${item.article}_reduction`]}</div>}
                                        </td>
                                        <td style={{border: '1px solid #ddd', padding: '6px'}}>
                                            <input type="text" style={{
                                                width: '100%',
                                                border: 'none',
                                                textAlign: 'center',
                                                fontSize: '10px'
                                            }}
                                                   onChange={(e) => handleInputChange(`ex1_art${item.article}_prix_reduit`, e.target.value)}/>
                                            {showCorrections[`ex1_art${item.article}_prix_reduit`] &&
                                                <div style={{
                                                    color: '#27ae60',
                                                    fontWeight: 'bold',
                                                    fontSize: '9px'
                                                }}>{correctAnswers[`ex1_art${item.article}_prix_reduit`]}</div>}
                                        </td>
                                        <td style={{
                                            border: '1px solid #ddd',
                                            padding: '6px',
                                            textAlign: 'center'
                                        }}>{item.taxe}</td>
                                        <td style={{border: '1px solid #ddd', padding: '6px'}}>
                                            <input type="text" style={{
                                                width: '100%',
                                                border: 'none',
                                                textAlign: 'center',
                                                fontSize: '10px'
                                            }}
                                                   onChange={(e) => handleInputChange(`ex1_art${item.article}_prix_final`, e.target.value)}/>
                                            {showCorrections[`ex1_art${item.article}_prix_final`] &&
                                                <div style={{
                                                    color: '#27ae60',
                                                    fontWeight: 'bold',
                                                    fontSize: '9px'
                                                }}>{correctAnswers[`ex1_art${item.article}_prix_final`]}</div>}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>

                            {/* Questions Exercice 1 */}
                            <div style={{marginBottom: '15px'}}>
                                <p style={{fontSize: '13px', fontWeight: 'bold', marginBottom: '5px'}}>1. Calculez le
                                    coefficient multiplicateur correspondant à la réduction pour chaque article.</p>
                                <div style={{
                                    border: '1px dashed #ccc',
                                    padding: '8px',
                                    minHeight: '40px',
                                    borderRadius: '4px'
                                }}>
                                    <input type="text" style={{width: '100%', border: 'none', fontSize: '10px'}}
                                           onChange={(e) => handleInputChange('ex1_coefficient', e.target.value)}/>
                                    {showCorrections.ex1_coefficient && <div style={{
                                        color: '#27ae60',
                                        fontWeight: 'bold',
                                        fontSize: '10px'
                                    }}>{correctAnswers.ex1_coefficient}</div>}
                                </div>
                                <CorrectionButton field="ex1_coefficient"/>
                            </div>

                            <div>
                                <p style={{fontSize: '13px', fontWeight: 'bold', marginBottom: '5px'}}>2. Comment
                                    pouvez-vous répondre à un client qui se demande pourquoi le prix affiché est plus
                                    élevé après réduction, une fois la taxe ajoutée ?</p>
                                <div style={{
                                    border: '1px dashed #ccc',
                                    padding: '8px',
                                    minHeight: '60px',
                                    borderRadius: '4px'
                                }}>
                                    <textarea
                                        style={{width: '100%', border: 'none', fontSize: '10px', minHeight: '50px'}}
                                        onChange={(e) => handleInputChange('ex1_client_reponse', e.target.value)}/>
                                    {showCorrections.ex1_client_reponse && <div style={{
                                        color: '#27ae60',
                                        fontWeight: 'bold',
                                        fontSize: '10px'
                                    }}>{correctAnswers.ex1_client_reponse}</div>}
                                </div>
                                <CorrectionButton field="ex1_client_reponse"/>
                            </div>
                        </div>
                    </div>


                    {/* PAGE 2 - Exercice 2 */}

                    <div className="question-card mt-3 mb-0" style={{
                        backgroundColor: '#ffffff',
                        border: '2px solid #3498db',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div className="question-content">
                            <h4 className="vect-title" style={{color: '#3498db'}}>
                                <FaFileInvoice/> <span>Exercice 2 : Compléter une Facture Professionnelle</span>
                            </h4>

                            <div style={{
                                backgroundColor: '#f0f8ff',
                                padding: '10px',
                                borderRadius: '6px',
                                marginBottom: '15px',
                                fontSize: '13px',
                                lineHeight: '1.4'
                            }}>
                                <strong>Objectif :</strong> Remplir une facture avec les informations manquantes et
                                calculer les totaux.
                            </div>

                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                fontSize: '12px',
                                marginBottom: '15px'
                            }}>
                                <thead>
                                <tr style={{backgroundColor: '#e3f2fd'}}>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Produit</th>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Quantité</th>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Prix unitaire (€)</th>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Total HT (€)</th>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>TVA (%)</th>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Montant TVA (€)</th>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Total TTC (€)</th>
                                </tr>
                                </thead>
                                <tbody>
                                {[
                                    {produit: 'Stylo', qte: 10, prix: 1.50},
                                    {produit: 'Cahier', qte: 5, prix: 3.00},
                                    {produit: 'Colle', qte: 8, prix: 2.00}
                                ].map((item, index) => (
                                    <tr key={item.produit}>
                                        <td style={{border: '1px solid #ddd', padding: '6px'}}>{item.produit}</td>
                                        <td style={{
                                            border: '1px solid #ddd',
                                            padding: '6px',
                                            textAlign: 'center'
                                        }}>{item.qte}</td>
                                        <td style={{
                                            border: '1px solid #ddd',
                                            padding: '6px',
                                            textAlign: 'center'
                                        }}>{item.prix.toFixed(2)}</td>
                                        <td style={{border: '1px solid #ddd', padding: '6px'}}>
                                            <input type="text" style={{
                                                width: '100%',
                                                border: 'none',
                                                textAlign: 'center',
                                                fontSize: '10px'
                                            }}
                                                   onChange={(e) => handleInputChange(`ex2_${item.produit.toLowerCase()}_total`, e.target.value)}/>
                                        </td>
                                        <td style={{
                                            border: '1px solid #ddd',
                                            padding: '6px',
                                            textAlign: 'center'
                                        }}>20
                                        </td>
                                        <td style={{border: '1px solid #ddd', padding: '6px'}}>
                                            <input type="text" style={{
                                                width: '100%',
                                                border: 'none',
                                                textAlign: 'center',
                                                fontSize: '10px'
                                            }}
                                                   onChange={(e) => handleInputChange(`ex2_${item.produit.toLowerCase()}_tva`, e.target.value)}/>
                                        </td>
                                        <td style={{border: '1px solid #ddd', padding: '6px'}}>
                                            <input type="text" style={{
                                                width: '100%',
                                                border: 'none',
                                                textAlign: 'center',
                                                fontSize: '10px'
                                            }}
                                                   onChange={(e) => handleInputChange(`ex2_${item.produit.toLowerCase()}_ttc`, e.target.value)}/>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                                <tfoot>
                                <tr style={{backgroundColor: '#f8f9fa', fontWeight: 'bold'}}>
                                    <td style={{border: '1px solid #ddd', padding: '6px'}} colSpan="3">TOTAL</td>
                                    <td style={{border: '1px solid #ddd', padding: '6px'}}>
                                        <input type="text" style={{
                                            width: '100%',
                                            border: 'none',
                                            textAlign: 'center',
                                            fontSize: '10px'
                                        }}
                                               onChange={(e) => handleInputChange('ex2_total_ht', e.target.value)}/>
                                    </td>
                                    <td style={{border: '1px solid #ddd', padding: '6px'}}></td>
                                    <td style={{border: '1px solid #ddd', padding: '6px'}}>
                                        <input type="text" style={{
                                            width: '100%',
                                            border: 'none',
                                            textAlign: 'center',
                                            fontSize: '10px'
                                        }}
                                               onChange={(e) => handleInputChange('ex2_total_tva', e.target.value)}/>
                                    </td>
                                    <td style={{border: '1px solid #ddd', padding: '6px'}}>
                                        <input type="text" style={{
                                            width: '100%',
                                            border: 'none',
                                            textAlign: 'center',
                                            fontSize: '10px'
                                        }}
                                               onChange={(e) => handleInputChange('ex2_total_ttc', e.target.value)}/>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>

                            <div>
                                <p style={{fontSize: '13px', fontWeight: 'bold', marginBottom: '5px'}}>Calculez le
                                    coefficient multiplicateur de la TVA :</p>
                                <div style={{
                                    border: '1px dashed #ccc',
                                    padding: '8px',
                                    minHeight: '25px',
                                    borderRadius: '4px'
                                }}>
                                    <input type="text" style={{width: '100%', border: 'none', fontSize: '10px'}}
                                           onChange={(e) => handleInputChange('ex2_coefficient_tva', e.target.value)}/>
                                    {showCorrections.ex2_coefficient_tva && <div style={{
                                        color: '#27ae60',
                                        fontWeight: 'bold',
                                        fontSize: '10px'
                                    }}>{correctAnswers.ex2_coefficient_tva}</div>}
                                </div>
                                <CorrectionButton field="ex2_coefficient_tva"/>
                            </div>
                        </div>
                    </div>

                </div>

                {/* PAGE 4 - Exercice 4 */}
                <div className="print-page">
                    {/* PAGE 3 - Exercice 3 */}
                    <div className="question-card mt-3 mb-0" style={{
                        backgroundColor: '#ffffff',
                        border: '2px solid #9b59b6',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div className="question-content">
                            <h4 className="vect-title" style={{color: '#9b59b6'}}>
                                <FaMoneyBillWave/> <span>Exercice 3 : Rédiger un Devis</span>
                            </h4>

                            <div style={{
                                backgroundColor: '#f8f0ff',
                                padding: '10px',
                                borderRadius: '6px',
                                marginBottom: '15px',
                                fontSize: '13px',
                                lineHeight: '1.4'
                            }}>
                                <strong>Objectif :</strong> Réaliser un devis en calculant un prix total incluant une
                                marge et une remise commerciale.
                            </div>

                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                fontSize: '12px',
                                marginBottom: '15px'
                            }}>
                                <thead>
                                <tr style={{backgroundColor: '#f3e5f5'}}>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Produit</th>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Prix d'achat (€)</th>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Marge (%)</th>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Prix de vente (€)</th>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Taux de remise (%)</th>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Remise (€)</th>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Prix final (€)</th>
                                </tr>
                                </thead>
                                <tbody>
                                {[
                                    {produit: 'Chemise', prix: 20, marge: 40, remise: 10},
                                    {produit: 'Pantalon', prix: 30, marge: 50, remise: 5},
                                    {produit: 'Ceinture', prix: 15, marge: 30, remise: 20}
                                ].map((item) => (
                                    <tr key={item.produit}>
                                        <td style={{
                                            border: '1px solid #ddd',
                                            padding: '6px',
                                            fontWeight: 'bold'
                                        }}>{item.produit}</td>
                                        <td style={{
                                            border: '1px solid #ddd',
                                            padding: '6px',
                                            textAlign: 'center'
                                        }}>{item.prix}</td>
                                        <td style={{
                                            border: '1px solid #ddd',
                                            padding: '6px',
                                            textAlign: 'center'
                                        }}>{item.marge}</td>
                                        <td style={{border: '1px solid #ddd', padding: '6px'}}>
                                            <input type="text" style={{
                                                width: '100%',
                                                border: 'none',
                                                textAlign: 'center',
                                                fontSize: '10px'
                                            }}
                                                   onChange={(e) => handleInputChange(`ex3_${item.produit.toLowerCase()}_prix_vente`, e.target.value)}/>
                                        </td>
                                        <td style={{
                                            border: '1px solid #ddd',
                                            padding: '6px',
                                            textAlign: 'center'
                                        }}>{item.remise}</td>
                                        <td style={{border: '1px solid #ddd', padding: '6px'}}>
                                            <input type="text" style={{
                                                width: '100%',
                                                border: 'none',
                                                textAlign: 'center',
                                                fontSize: '10px'
                                            }}
                                                   onChange={(e) => handleInputChange(`ex3_${item.produit.toLowerCase()}_remise`, e.target.value)}/>
                                        </td>
                                        <td style={{border: '1px solid #ddd', padding: '6px'}}>
                                            <input type="text" style={{
                                                width: '100%',
                                                border: 'none',
                                                textAlign: 'center',
                                                fontSize: '10px'
                                            }}
                                                   onChange={(e) => handleInputChange(`ex3_${item.produit.toLowerCase()}_final`, e.target.value)}/>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>

                            {/* Questions Exercice 3 */}
                            <div style={{marginBottom: '15px'}}>
                                <p style={{fontSize: '13px', fontWeight: 'bold', marginBottom: '5px'}}>3. Si un client
                                    veut négocier une remise sur un devis, comment pouvez-vous lui répondre tout en
                                    préservant la rentabilité de l'entreprise ?</p>
                                <div style={{
                                    border: '1px dashed #ccc',
                                    padding: '8px',
                                    minHeight: '60px',
                                    borderRadius: '4px'
                                }}>
                                    <textarea
                                        style={{width: '100%', border: 'none', fontSize: '10px', minHeight: '50px'}}
                                        onChange={(e) => handleInputChange('ex3_negociation', e.target.value)}/>
                                    {showCorrections.ex3_negociation && <div style={{
                                        color: '#27ae60',
                                        fontWeight: 'bold',
                                        fontSize: '10px'
                                    }}>{correctAnswers.ex3_negociation}</div>}
                                </div>
                                <CorrectionButton field="ex3_negociation"/>
                            </div>

                            <div>
                                <p style={{fontSize: '13px', fontWeight: 'bold', marginBottom: '5px'}}>4. Quelle
                                    information donneriez-vous à un client sur le calcul de la marge pour qu'il
                                    comprenne le prix final proposé ?</p>
                                <div style={{
                                    border: '1px dashed #ccc',
                                    padding: '8px',
                                    minHeight: '60px',
                                    borderRadius: '4px'
                                }}>
                                    <textarea
                                        style={{width: '100%', border: 'none', fontSize: '10px', minHeight: '50px'}}
                                        onChange={(e) => handleInputChange('ex3_explication_marge', e.target.value)}/>
                                    {showCorrections.ex3_explication_marge && <div style={{
                                        color: '#27ae60',
                                        fontWeight: 'bold',
                                        fontSize: '10px'
                                    }}>{correctAnswers.ex3_explication_marge}</div>}
                                </div>
                                <CorrectionButton field="ex3_explication_marge"/>
                            </div>
                        </div>
                    </div>
                    {/* EXERCICE 4 */}
                    <div className="question-card mt-3 mb-0" style={{
                        backgroundColor: '#ffffff',
                        border: '2px solid #27ae60',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div className="question-content">
                            <h4 className="vect-title" style={{color: '#27ae60'}}>
                                <FaChartLine/> <span>Exercice 4 : Calcul d'Intérêt Simple sur 11 Mois</span>
                            </h4>

                            <div style={{
                                backgroundColor: '#f0fff4',
                                padding: '10px',
                                borderRadius: '6px',
                                marginBottom: '15px',
                                fontSize: '13px',
                                lineHeight: '1.4'
                            }}>
                                <strong>Contexte :</strong> Vous êtes chargé d'évaluer le rendement d'un placement
                                financier en fonction du capital investi, du taux d'intérêt et de la durée.
                                <br/><strong>Objectif :</strong> Apprendre à utiliser la formule de calcul des intérêts
                                simples.
                            </div>

                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                fontSize: '12px',
                                marginBottom: '15px'
                            }}>
                                <thead>
                                <tr style={{backgroundColor: '#e8f5e8'}}>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Capital investi (€)</th>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Taux annuel (%)</th>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Durée</th>
                                    <th style={{border: '1px solid #ddd', padding: '6px'}}>Intérêt (€)</th>
                                </tr>
                                </thead>
                                <tbody>
                                {[
                                    {capital: 5000, taux: 4},
                                    {capital: 10000, taux: 3.5},
                                    {capital: 7500, taux: 5},
                                    {capital: 8000, taux: 2.75}
                                ].map((item, index) => (
                                    <tr key={index}>
                                        <td style={{
                                            border: '1px solid #ddd',
                                            padding: '6px',
                                            textAlign: 'center'
                                        }}>{item.capital.toLocaleString()}</td>
                                        <td style={{
                                            border: '1px solid #ddd',
                                            padding: '6px',
                                            textAlign: 'center'
                                        }}>{item.taux}</td>
                                        <td style={{border: '1px solid #ddd', padding: '6px', textAlign: 'center'}}>11
                                            mois
                                        </td>
                                        <td style={{border: '1px solid #ddd', padding: '6px'}}>
                                            <input type="text" style={{
                                                width: '100%',
                                                border: 'none',
                                                textAlign: 'center',
                                                fontSize: '10px'
                                            }}
                                                   onChange={(e) => handleInputChange(`ex4_placement${index + 1}`, e.target.value)}/>
                                            {showCorrections[`ex4_placement${index + 1}`] &&
                                                <div style={{
                                                    color: '#27ae60',
                                                    fontWeight: 'bold',
                                                    fontSize: '9px'
                                                }}>{correctAnswers[`ex4_placement${index + 1}`]}</div>}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>

                            <div>
                                <p style={{fontSize: '13px', fontWeight: 'bold', marginBottom: '5px'}}>Comment
                                    expliqueriez-vous à un client la différence entre un intérêt simple et un intérêt
                                    composé ?</p>
                                <div style={{
                                    border: '1px dashed #ccc',
                                    padding: '8px',
                                    minHeight: '80px',
                                    borderRadius: '4px'
                                }}>
                                    <textarea
                                        style={{width: '100%', border: 'none', fontSize: '12px', minHeight: '70px'}}
                                        onChange={(e) => handleInputChange('ex4_explication', e.target.value)}/>
                                    {showCorrections.ex4_explication && <div style={{
                                        color: '#27ae60',
                                        fontWeight: 'bold',
                                        fontSize: '12px'
                                    }}>{correctAnswers.ex4_explication}</div>}
                                </div>
                                <CorrectionButton field="ex4_explication"/>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: '10px'}}><AutoEvaluationGrid/></div>

                </div>

                {modalState.show && (
                    <ModalImage
                        imageUrl={modalState.imageUrl}
                        altText={modalState.altText}
                        onClose={closeModal}
                    />
                )}
            </div>
        </>
    );
};

export default ActCoInterventionCalculCommerciaux;
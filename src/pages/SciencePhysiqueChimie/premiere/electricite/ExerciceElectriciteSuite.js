import React, {useRef, useState} from 'react';
import {FaCheck, FaBolt, FaLightbulb} from 'react-icons/fa';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import ModalImage from "../../../../utils/ModalImage";
import AutoEvaluationGrid from "../../../../config/AutoEvaluationGrid";

const ExerciceElectriciteSuite = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const contentRef = useRef();

    // États pour les réponses et corrections
    const [answers, setAnswers] = useState({
        qcm1: '',
        qcm2: '',
        qcm3: '',
        qcm4: '',
        qcm5: '',
        qcm6: '',
        qcm7: '',
        qcm8: '',
        qcm9: '',
        qcm10: '',
        ex1_1: '',
        ex1_2: '',
        ex1_3: '',
        ex2_1_serie: '',
        ex2_2_parallele: '',
        ex2_3_intensite: '',
        ex3_1_duree: '',
        ex3_2_cout: '',
        ex4_1_wh: '',
        ex4_2_kwh: '',
        ex4_3_cout: '',
        ex5_1_kw_unite: '',
        ex5_1_kw_grandeur: '',
        ex5_1_v_unite: '',
        ex5_1_v_grandeur: '',
        ex5_2_intensite: '',
        ex5_3_wh: '',
        ex5_4_kwh: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        qcm1: false,
        qcm2: false,
        qcm3: false,
        qcm4: false,
        qcm5: false,
        qcm6: false,
        qcm7: false,
        qcm8: false,
        qcm9: false,
        qcm10: false,
        ex1_1: false,
        ex1_2: false,
        ex1_3: false,
        ex2_1_serie: false,
        ex2_2_parallele: false,
        ex2_3_intensite: false,
        ex3_1_duree: false,
        ex3_2_cout: false,
        ex4_1_wh: false,
        ex4_2_kwh: false,
        ex4_3_cout: false,
        ex5_1_kw: false,
        ex5_2_intensite: false,
        ex5_3_wh: false,
        ex5_4_kwh: false
    });

    // Gestionnaires d'événements
    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));
    };

    const [modalState, setModalState] = useState({
        show: false, imageUrl: '', altText: '',
    });

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState((prev) => ({...prev, show: false}));
    };

    if (className === 'Seconde-electricite-exercices') {
        return <div>Ces exercices ne sont pas disponibles pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div className="tp-container" id="electricite-content" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Exercices_Electricite_Suite"
                pageCount={2}
                quality="hd"
            />

            {/* PAGE 1 */}
            <div className="print-page" id="page1-start">

                {/* Section QCM */}
                <div className="activity-header mt-0">
                    <span className="activity-badge">QCM</span>
                    <div className="activity-title">
                            <span className="course-title">
                                <FaBolt/> Je teste mes acquis
                            </span>
                    </div>
                </div>

                <div className="qcm-container" style={{marginBottom: '20px'}}>
                    <div className="qcm-grid"
                         style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                        {[...Array(10)].map((_, index) => (
                            <div key={index} className="qcm-item" style={{
                                padding: '12px',
                                backgroundColor: '#ffffff',
                                borderRadius: '8px',
                                border: '1px solid #e0e0e0'
                            }}>
                                <p style={{fontWeight: '600', marginBottom: '10px', fontSize: '14px'}}>
                                    <strong>{index + 1}.</strong>
                                    {index === 0 && " La relation entre la résistance R, la tension U et l'intensité I est :"}
                                    {index === 1 && " L'unité de la résistance électrique est :"}
                                    {index === 2 && " La loi des mailles (loi de Kirchhoff) stipule que :"}
                                    {index === 3 && " L'intensité se mesure en :"}
                                    {index === 4 && " Un circuit parcouru par un courant de 2 A sous une tension de 12 V consomme une puissance de :"}
                                    {index === 5 && " L'appareil utilisé pour mesurer la tension est :"}
                                    {index === 6 && " La capacité d'une batterie est exprimée en :"}
                                    {index === 7 && " La fréquence du courant domestique en Europe est :"}
                                    {index === 8 && " La différence de potentiel entre phase et neutre en France est :"}
                                    {index === 9 && " Pour mesurer la tension dans un circuit, on branche le voltmètre :"}
                                </p>

                                <div className="qcm-options" style={{marginBottom: '10px'}}>
                                    {index === 0 && (
                                        <>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm1" value="A"
                                                       onChange={(e) => handleInputChange('qcm1', e.target.value)}/>
                                                R = U × I
                                            </label>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm1" value="B"
                                                       onChange={(e) => handleInputChange('qcm1', e.target.value)}/>
                                                U = R × I
                                            </label>
                                            <label className="qcm-option" style={{display: 'block'}}>
                                                <input type="radio" name="qcm1" value="C"
                                                       onChange={(e) => handleInputChange('qcm1', e.target.value)}/>
                                                I = U × R
                                            </label>
                                        </>
                                    )}
                                    {index === 1 && (
                                        <>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm2" value="A"
                                                       onChange={(e) => handleInputChange('qcm2', e.target.value)}/>
                                                l'ampère
                                            </label>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm2" value="B"
                                                       onChange={(e) => handleInputChange('qcm2', e.target.value)}/>
                                                l'ohm
                                            </label>
                                            <label className="qcm-option" style={{display: 'block'}}>
                                                <input type="radio" name="qcm2" value="C"
                                                       onChange={(e) => handleInputChange('qcm2', e.target.value)}/>
                                                le volt
                                            </label>
                                        </>
                                    )}
                                    {index === 2 && (
                                        <>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm3" value="A"
                                                       onChange={(e) => handleInputChange('qcm3', e.target.value)}/>
                                                La somme des tensions dans une maille est nulle
                                            </label>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm3" value="B"
                                                       onChange={(e) => handleInputChange('qcm3', e.target.value)}/>
                                                La somme des intensités dans un nœud est nulle
                                            </label>
                                            <label className="qcm-option" style={{display: 'block'}}>
                                                <input type="radio" name="qcm3" value="C"
                                                       onChange={(e) => handleInputChange('qcm3', e.target.value)}/>
                                                La puissance est constante dans un circuit
                                            </label>
                                        </>
                                    )}
                                    {index === 3 && (
                                        <>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm4" value="A"
                                                       onChange={(e) => handleInputChange('qcm4', e.target.value)}/>
                                                volts
                                            </label>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm4" value="B"
                                                       onChange={(e) => handleInputChange('qcm4', e.target.value)}/>
                                                ohms
                                            </label>
                                            <label className="qcm-option" style={{display: 'block'}}>
                                                <input type="radio" name="qcm4" value="C"
                                                       onChange={(e) => handleInputChange('qcm4', e.target.value)}/>
                                                ampères
                                            </label>
                                        </>
                                    )}
                                    {index === 4 && (
                                        <>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm5" value="A"
                                                       onChange={(e) => handleInputChange('qcm5', e.target.value)}/>
                                                6 W
                                            </label>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm5" value="B"
                                                       onChange={(e) => handleInputChange('qcm5', e.target.value)}/>
                                                24 W
                                            </label>
                                            <label className="qcm-option" style={{display: 'block'}}>
                                                <input type="radio" name="qcm5" value="C"
                                                       onChange={(e) => handleInputChange('qcm5', e.target.value)}/>
                                                14 W
                                            </label>
                                        </>
                                    )}
                                    {index === 5 && (
                                        <>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm6" value="A"
                                                       onChange={(e) => handleInputChange('qcm6', e.target.value)}/>
                                                un ampèremètre
                                            </label>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm6" value="B"
                                                       onChange={(e) => handleInputChange('qcm6', e.target.value)}/>
                                                un voltmètre
                                            </label>
                                            <label className="qcm-option" style={{display: 'block'}}>
                                                <input type="radio" name="qcm6" value="C"
                                                       onChange={(e) => handleInputChange('qcm6', e.target.value)}/>
                                                un ohmmètre
                                            </label>
                                        </>
                                    )}
                                    {index === 6 && (
                                        <>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm7" value="A"
                                                       onChange={(e) => handleInputChange('qcm7', e.target.value)}/>
                                                Ah (ampère-heure)
                                            </label>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm7" value="B"
                                                       onChange={(e) => handleInputChange('qcm7', e.target.value)}/>
                                                W (watt)
                                            </label>
                                            <label className="qcm-option" style={{display: 'block'}}>
                                                <input type="radio" name="qcm7" value="C"
                                                       onChange={(e) => handleInputChange('qcm7', e.target.value)}/>
                                                V (volt)
                                            </label>
                                        </>
                                    )}
                                    {index === 7 && (
                                        <>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm8" value="A"
                                                       onChange={(e) => handleInputChange('qcm8', e.target.value)}/>
                                                50 Hz
                                            </label>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm8" value="B"
                                                       onChange={(e) => handleInputChange('qcm8', e.target.value)}/>
                                                60 Hz
                                            </label>
                                            <label className="qcm-option" style={{display: 'block'}}>
                                                <input type="radio" name="qcm8" value="C"
                                                       onChange={(e) => handleInputChange('qcm8', e.target.value)}/>
                                                220 Hz
                                            </label>
                                        </>
                                    )}
                                    {index === 8 && (
                                        <>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm9" value="A"
                                                       onChange={(e) => handleInputChange('qcm9', e.target.value)}/>
                                                110 V
                                            </label>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm9" value="B"
                                                       onChange={(e) => handleInputChange('qcm9', e.target.value)}/>
                                                220 V
                                            </label>
                                            <label className="qcm-option" style={{display: 'block'}}>
                                                <input type="radio" name="qcm9" value="C"
                                                       onChange={(e) => handleInputChange('qcm9', e.target.value)}/>
                                                380 V
                                            </label>
                                        </>
                                    )}
                                    {index === 9 && (
                                        <>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm10" value="A"
                                                       onChange={(e) => handleInputChange('qcm10', e.target.value)}/>
                                                en série
                                            </label>
                                            <label className="qcm-option"
                                                   style={{display: 'block', marginBottom: '5px'}}>
                                                <input type="radio" name="qcm10" value="B"
                                                       onChange={(e) => handleInputChange('qcm10', e.target.value)}/>
                                                en parallèle
                                            </label>
                                            <label className="qcm-option" style={{display: 'block'}}>
                                                <input type="radio" name="qcm10" value="C"
                                                       onChange={(e) => handleInputChange('qcm10', e.target.value)}/>
                                                en court-circuit
                                            </label>
                                        </>
                                    )}
                                </div>

                                <button className="correction-btnoptic"
                                        onClick={() => toggleCorrection(`qcm${index + 1}`)} style={{
                                    padding: '5px 10px',
                                    fontSize: '12px',
                                    backgroundColor: '#1976d2',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}>
                                    <FaCheck/> {showCorrections[`qcm${index + 1}`] ? 'Masquer' : 'Correction'}
                                </button>

                                {showCorrections[`qcm${index + 1}`] && (
                                    <div className="correction-text" style={{
                                        marginTop: '10px',
                                        padding: '8px',
                                        backgroundColor: '#e8f5e9',
                                        borderLeft: '3px solid #4caf50',
                                        borderRadius: '4px',
                                        fontSize: '12px'
                                    }}>
                                        {index === 0 && "Correction: U = R × I (Loi d'Ohm)"}
                                        {index === 1 && "Correction: l'ohm"}
                                        {index === 2 && "Correction: La somme des tensions dans une maille est nulle"}
                                        {index === 3 && "Correction: ampères"}
                                        {index === 4 && "Correction: P = U × I = 12 × 2 = 24 W"}
                                        {index === 5 && "Correction: un voltmètre"}
                                        {index === 6 && "Correction: Ah (ampère-heure)"}
                                        {index === 7 && "Correction: 50 Hz"}
                                        {index === 8 && "Correction: 220 V"}
                                        {index === 9 && "Correction: en parallèle"}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* PAGE 2 */}
            <div className="print-page" id="page2-start">
                {/* Section Exercices */}
                <div className="activity-header">
                    <span className="activity-badge">EXERCICES</span>
                    <div className="activity-title">
                            <span className="course-title">
                                <FaLightbulb/> Je m'exerce
                            </span>
                    </div>
                </div>

                <div className="exercices-grid"
                     style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px'}}>
                    {/* Colonne gauche */}
                    <div className="exercice-column">
                        {/* Exercice 1 */}
                        <div className="exercice-card" style={{
                            padding: '15px',
                            backgroundColor: '#ffffff',
                            borderRadius: '8px',
                            border: '1px solid #e0e0e0',
                            marginBottom: '20px'
                        }}>
                            <h4 className="exercice-title" style={{color: '#1976d2', marginBottom: '10px'}}>1.
                                Loi d'Ohm</h4>
                            <p className="exercice-text" style={{fontSize: '14px', marginBottom: '15px'}}>
                                Un circuit simple comporte une lampe alimentée par une tension de 24 V. L'intensité
                                du courant mesurée est de 3 A.
                            </p>

                            <div className="question" style={{marginBottom: '15px'}}>
                                <p style={{fontSize: '14px', marginBottom: '5px'}}>1. Calculer la résistance de la
                                    lampe.</p>
                                .....................................................................................
                                <button className="correction-btnoptic" onClick={() => toggleCorrection('ex1_1')}
                                        style={{
                                            padding: '5px 10px',
                                            fontSize: '12px',
                                            backgroundColor: '#1976d2',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}>
                                    <FaCheck/> {showCorrections.ex1_1 ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.ex1_1 && (
                                    <div className="correction-text" style={{
                                        marginTop: '10px',
                                        padding: '8px',
                                        backgroundColor: '#e8f5e9',
                                        borderLeft: '3px solid #4caf50',
                                        borderRadius: '4px',
                                        fontSize: '12px'
                                    }}>
                                        R = U/I = 24/3 = 8 Ω
                                    </div>
                                )}
                            </div>

                            <div className="question" style={{marginBottom: '15px'}}>
                                <p style={{fontSize: '14px', marginBottom: '5px'}}>2. Déterminer la puissance
                                    consommée par la lampe.</p>
                                .....................................................................................
                                <button className="correction-btnoptic" onClick={() => toggleCorrection('ex1_2')}
                                        style={{
                                            padding: '5px 10px',
                                            fontSize: '12px',
                                            backgroundColor: '#1976d2',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}>
                                    <FaCheck/> {showCorrections.ex1_2 ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.ex1_2 && (
                                    <div className="correction-text" style={{
                                        marginTop: '10px',
                                        padding: '8px',
                                        backgroundColor: '#e8f5e9',
                                        borderLeft: '3px solid #4caf50',
                                        borderRadius: '4px',
                                        fontSize: '12px'
                                    }}>
                                        P = U × I = 24 × 3 = 72 W
                                    </div>
                                )}
                            </div>

                            <div className="question">
                                <p style={{fontSize: '14px', marginBottom: '5px'}}>3. Convertir cette puissance en
                                    kW.</p>
                                .....................................................................................
                                <button className="correction-btnoptic" onClick={() => toggleCorrection('ex1_3')}
                                        style={{
                                            padding: '5px 10px',
                                            fontSize: '12px',
                                            backgroundColor: '#1976d2',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}>
                                    <FaCheck/> {showCorrections.ex1_3 ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.ex1_3 && (
                                    <div className="correction-text" style={{
                                        marginTop: '10px',
                                        padding: '8px',
                                        backgroundColor: '#e8f5e9',
                                        borderLeft: '3px solid #4caf50',
                                        borderRadius: '4px',
                                        fontSize: '12px'
                                    }}>
                                        72 W = 0,072 kW
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Exercice 2 */}
                        <div className="exercice-card" style={{
                            padding: '15px',
                            backgroundColor: '#ffffff',
                            borderRadius: '8px',
                            border: '1px solid #e0e0e0',
                            marginBottom: '20px'
                        }}>
                            <h4 className="exercice-title" style={{color: '#1976d2', marginBottom: '10px'}}>2.
                                Résistances en série et en parallèle</h4>
                            <p className="exercice-text" style={{fontSize: '14px', marginBottom: '15px'}}>
                                On considère deux résistances : R₁ = 10 Ω et R₂ = 20 Ω.
                            </p>

                            <div className="question" style={{marginBottom: '15px'}}>
                                <p style={{fontSize: '14px', marginBottom: '5px'}}>1. Calculer la résistance
                                    équivalente si elles sont en série.</p>
                                .....................................................................................
                                <button className="correction-btnoptic"
                                        onClick={() => toggleCorrection('ex2_1_serie')}
                                        style={{
                                            padding: '5px 10px',
                                            fontSize: '12px',
                                            backgroundColor: '#1976d2',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}>
                                    <FaCheck/> {showCorrections.ex2_1_serie ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.ex2_1_serie && (
                                    <div className="correction-text" style={{
                                        marginTop: '10px',
                                        padding: '8px',
                                        backgroundColor: '#e8f5e9',
                                        borderLeft: '3px solid #4caf50',
                                        borderRadius: '4px',
                                        fontSize: '12px'
                                    }}>
                                        R_équivalente = R₁ + R₂ = 10 + 20 = 30 Ω
                                    </div>
                                )}
                            </div>

                            <div className="question" style={{marginBottom: '15px'}}>
                                <p style={{fontSize: '14px', marginBottom: '5px'}}>2. Calculer la résistance
                                    équivalente si elles sont en parallèle.</p>
                                .....................................................................................
                                <button className="correction-btnoptic"
                                        onClick={() => toggleCorrection('ex2_2_parallele')}
                                        style={{
                                            padding: '5px 10px',
                                            fontSize: '12px',
                                            backgroundColor: '#1976d2',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}>
                                    <FaCheck/> {showCorrections.ex2_2_parallele ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.ex2_2_parallele && (
                                    <div className="correction-text" style={{
                                        marginTop: '10px',
                                        padding: '8px',
                                        backgroundColor: '#e8f5e9',
                                        borderLeft: '3px solid #4caf50',
                                        borderRadius: '4px',
                                        fontSize: '12px'
                                    }}>
                                        1/R_équivalente = 1/R₁ + 1/R₂ = 1/10 + 1/20 = 3/20 ⇒ R_équivalente = 20/3 ≈
                                        6,67 Ω
                                    </div>
                                )}
                            </div>

                            <div className="question">
                                <p style={{fontSize: '14px', marginBottom: '5px'}}>3. Déterminer l'intensité totale
                                    si le circuit est alimenté par une tension de 12 V dans le cas série.</p>
                                .....................................................................................
                                <button className="correction-btnoptic"
                                        onClick={() => toggleCorrection('ex2_3_intensite')}
                                        style={{
                                            padding: '5px 10px',
                                            fontSize: '12px',
                                            backgroundColor: '#1976d2',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}>
                                    <FaCheck/> {showCorrections.ex2_3_intensite ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.ex2_3_intensite && (
                                    <div className="correction-text" style={{
                                        marginTop: '10px',
                                        padding: '8px',
                                        backgroundColor: '#e8f5e9',
                                        borderLeft: '3px solid #4caf50',
                                        borderRadius: '4px',
                                        fontSize: '12px'
                                    }}>
                                        I = U/R = 12/30 = 0,4 A
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Exercice 3 */}
                        <div className="exercice-card" style={{
                            padding: '15px',
                            backgroundColor: '#ffffff',
                            borderRadius: '8px',
                            border: '1px solid #e0e0e0',
                            marginBottom: '20px'
                        }}>
                            <h4 className="exercice-title" style={{color: '#1976d2', marginBottom: '10px'}}>3.
                                Compteur électrique</h4>
                            <p className="exercice-text" style={{fontSize: '14px', marginBottom: '15px'}}>
                                Un appareil de 500 W est branché sur une installation. Le compteur affiche une
                                énergie consommée de 1 kWh.
                            </p>

                            <div className="question" style={{marginBottom: '15px'}}>
                                <p style={{fontSize: '14px', marginBottom: '5px'}}>1. Calculer la durée de
                                    fonctionnement de l'appareil.</p>
                                .....................................................................................
                                <button className="correction-btnoptic"
                                        onClick={() => toggleCorrection('ex3_1_duree')}
                                        style={{
                                            padding: '5px 10px',
                                            fontSize: '12px',
                                            backgroundColor: '#1976d2',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}>
                                    <FaCheck/> {showCorrections.ex3_1_duree ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.ex3_1_duree && (
                                    <div className="correction-text" style={{
                                        marginTop: '10px',
                                        padding: '8px',
                                        backgroundColor: '#e8f5e9',
                                        borderLeft: '3px solid #4caf50',
                                        borderRadius: '4px',
                                        fontSize: '12px'
                                    }}>
                                        E = P × t ⇒ t = E/P = 1 kWh / 0,5 kW = 2 heures
                                    </div>
                                )}
                            </div>

                            <div className="question">
                                <p style={{fontSize: '14px', marginBottom: '5px'}}>2. Si le prix du kWh est de 0,18
                                    €, calculer le coût.</p>
                                .....................................................................................
                                <button className="correction-btnoptic"
                                        onClick={() => toggleCorrection('ex3_2_cout')}
                                        style={{
                                            padding: '5px 10px',
                                            fontSize: '12px',
                                            backgroundColor: '#1976d2',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}>
                                    <FaCheck/> {showCorrections.ex3_2_cout ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.ex3_2_cout && (
                                    <div className="correction-text" style={{
                                        marginTop: '10px',
                                        padding: '8px',
                                        backgroundColor: '#e8f5e9',
                                        borderLeft: '3px solid #4caf50',
                                        borderRadius: '4px',
                                        fontSize: '12px'
                                    }}>
                                        Coût = 1 × 0,18 = 0,18 €
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Colonne droite */}
                    <div className="exercice-column">
                        {/* Exercice 4 */}
                        <div className="exercice-card" style={{
                            padding: '15px',
                            backgroundColor: '#ffffff',
                            borderRadius: '8px',
                            border: '1px solid #e0e0e0',
                            marginBottom: '20px',
                            width: '100%'
                        }}>
                            <h4 className="exercice-title" style={{color: '#1976d2', marginBottom: '10px'}}>4.
                                Énergie et puissance</h4>
                            <p className="exercice-text" style={{fontSize: '14px', marginBottom: '15px'}}>
                                Un four micro-ondes de puissance 800 W est utilisé 15 minutes par jour.
                            </p>

                            <div className="question" style={{marginBottom: '15px'}}>
                                <p style={{fontSize: '14px', marginBottom: '5px'}}>1. Calculer l'énergie consommée
                                    en Wh par jour.</p>
                                .....................................................................................
                                <button className="correction-btnoptic" onClick={() => toggleCorrection('ex4_1_wh')}
                                        style={{
                                            padding: '5px 10px',
                                            fontSize: '12px',
                                            backgroundColor: '#1976d2',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}>
                                    <FaCheck/> {showCorrections.ex4_1_wh ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.ex4_1_wh && (
                                    <div className="correction-text" style={{
                                        marginTop: '10px',
                                        padding: '8px',
                                        backgroundColor: '#e8f5e9',
                                        borderLeft: '3px solid #4caf50',
                                        borderRadius: '4px',
                                        fontSize: '12px'
                                    }}>
                                        t = 15 min = 0,25 h; E = P × t = 800 × 0,25 = 200 Wh
                                    </div>
                                )}
                            </div>

                            <div className="question" style={{marginBottom: '15px'}}>
                                <p style={{fontSize: '14px', marginBottom: '5px'}}>2. En déduire la consommation
                                    annuelle en kWh.</p>
                                .....................................................................................
                                <button className="correction-btnoptic"
                                        onClick={() => toggleCorrection('ex4_2_kwh')}
                                        style={{
                                            padding: '5px 10px',
                                            fontSize: '12px',
                                            backgroundColor: '#1976d2',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}>
                                    <FaCheck/> {showCorrections.ex4_2_kwh ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.ex4_2_kwh && (
                                    <div className="correction-text" style={{
                                        marginTop: '10px',
                                        padding: '8px',
                                        backgroundColor: '#e8f5e9',
                                        borderLeft: '3px solid #4caf50',
                                        borderRadius: '4px',
                                        fontSize: '12px'
                                    }}>
                                        E_journalier = 200 Wh = 0,2 kWh; E_annuel = 0,2 × 365 = 73 kWh
                                    </div>
                                )}
                            </div>

                            <div className="question">
                                <p style={{fontSize: '14px', marginBottom: '5px'}}>3. Calculer le coût annuel (1 kWh
                                    = 0,18 €).</p>
                                .....................................................................................
                                <button className="correction-btnoptic"
                                        onClick={() => toggleCorrection('ex4_3_cout')}
                                        style={{
                                            padding: '5px 10px',
                                            fontSize: '12px',
                                            backgroundColor: '#1976d2',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}>
                                    <FaCheck/> {showCorrections.ex4_3_cout ? 'Masquer' : 'Correction'}
                                </button>
                                {showCorrections.ex4_3_cout && (
                                    <div className="correction-text" style={{
                                        marginTop: '10px',
                                        padding: '8px',
                                        backgroundColor: '#e8f5e9',
                                        borderLeft: '3px solid #4caf50',
                                        borderRadius: '4px',
                                        fontSize: '12px'
                                    }}>
                                        Coût annuel = 73 × 0,18 = 13,14 €
                                    </div>
                                )}

                                <h4 className="exercice-title" style={{color: '#1976d2', marginBottom: '10px'}}>5.
                                    Véhicule
                                    électrique</h4>
                                <p className="exercice-text" style={{fontSize: '14px', marginBottom: '15px'}}>
                                    La batterie d'une petite voiture électrique a les caractéristiques suivantes :
                                </p>
                                <ul style={{fontSize: '14px', marginBottom: '15px', paddingLeft: '20px'}}>
                                    <li>Tension : 48 V , Capacité : 40 Ah , Moteur : 5 kW</li>
                                </ul>

                                <div className="question" style={{marginBottom: '15px'}}>
                                    <p style={{fontSize: '14px', marginBottom: '5px'}}>1. Compléter le tableau :</p>
                                    <table
                                        style={{width: '100%', borderCollapse: 'collapse', marginBottom: '10px'}}>
                                        <thead>
                                        <tr style={{backgroundColor: '#f5f5f5'}}>
                                            <th style={{
                                                border: '1px solid #ddd',
                                                padding: '4px',
                                                fontSize: '14px'
                                            }}>Indication
                                                notice
                                            </th>
                                            <th style={{
                                                border: '1px solid #ddd', padding: '4px',
                                                fontSize: '14px'
                                            }}>Unité en toutes
                                                lettres
                                            </th>
                                            <th style={{
                                                border: '1px solid #ddd', padding: '4px',
                                                fontSize: '14px'
                                            }}>Grandeur
                                                électrique
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td style={{border: '1px solid #ddd', padding: '8px'}}>5 kW</td>
                                            <td style={{border: '1px solid #ddd', padding: '8px'}}>
                                                <input type="text" value={answers.ex5_1_kw_unite}
                                                       onChange={(e) => handleInputChange('ex5_1_kw_unite', e.target.value)}
                                                       style={{width: '100%', border: 'none', outline: 'none'}}/>
                                            </td>
                                            <td style={{border: '1px solid #ddd', padding: '8px'}}>
                                                <input type="text" value={answers.ex5_1_kw_grandeur}
                                                       onChange={(e) => handleInputChange('ex5_1_kw_grandeur', e.target.value)}
                                                       style={{width: '100%', border: 'none', outline: 'none'}}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{border: '1px solid #ddd', padding: '8px'}}>48 V</td>
                                            <td style={{border: '1px solid #ddd', padding: '8px'}}>
                                                <input type="text" value={answers.ex5_1_v_unite}
                                                       onChange={(e) => handleInputChange('ex5_1_v_unite', e.target.value)}
                                                       style={{width: '100%', border: 'none', outline: 'none'}}/>
                                            </td>
                                            <td style={{border: '1px solid #ddd', padding: '8px'}}>
                                                <input type="text" value={answers.ex5_1_v_grandeur}
                                                       onChange={(e) => handleInputChange('ex5_1_v_grandeur', e.target.value)}
                                                       style={{width: '100%', border: 'none', outline: 'none'}}/>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <button className="correction-btnoptic"
                                            onClick={() => toggleCorrection('ex5_1_kw')}
                                            style={{
                                                padding: '5px 10px',
                                                fontSize: '12px',
                                                backgroundColor: '#1976d2',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}>
                                        <FaCheck/> {showCorrections.ex5_1_kw ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.ex5_1_kw && (
                                        <div className="correction-text" style={{
                                            marginTop: '10px',
                                            padding: '8px',
                                            backgroundColor: '#e8f5e9',
                                            borderLeft: '3px solid #4caf50',
                                            borderRadius: '4px',
                                            fontSize: '12px'
                                        }}>
                                            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                                                <thead>
                                                <tr style={{backgroundColor: '#f5f5f5'}}>
                                                    <th style={{
                                                        border: '1px solid #ddd',
                                                        padding: '8px'
                                                    }}>Indication notice
                                                    </th>
                                                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Unité en
                                                        toutes
                                                        lettres
                                                    </th>
                                                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Grandeur
                                                        électrique
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td style={{border: '1px solid #ddd', padding: '8px'}}>5 kW</td>
                                                    <td style={{
                                                        border: '1px solid #ddd',
                                                        padding: '8px'
                                                    }}>kilowatt
                                                    </td>
                                                    <td style={{
                                                        border: '1px solid #ddd',
                                                        padding: '8px'
                                                    }}>Puissance
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{border: '1px solid #ddd', padding: '8px'}}>48 V</td>
                                                    <td style={{border: '1px solid #ddd', padding: '8px'}}>volt</td>
                                                    <td style={{
                                                        border: '1px solid #ddd',
                                                        padding: '8px'
                                                    }}>Tension
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>

                                <div className="question" style={{marginBottom: '15px'}}>
                                    <p style={{fontSize: '14px', marginBottom: '5px'}}>2. Calculer l'intensité
                                        maximale absorbée
                                        par le moteur à pleine puissance.</p>
                                    .....................................................................................
                                    <button className="correction-btnoptic"
                                            onClick={() => toggleCorrection('ex5_2_intensite')}
                                            style={{
                                                padding: '5px 10px',
                                                fontSize: '12px',
                                                backgroundColor: '#1976d2',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}>
                                        <FaCheck/> {showCorrections.ex5_2_intensite ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.ex5_2_intensite && (
                                        <div className="correction-text" style={{
                                            marginTop: '10px',
                                            padding: '8px',
                                            backgroundColor: '#e8f5e9',
                                            borderLeft: '3px solid #4caf50',
                                            borderRadius: '4px',
                                            fontSize: '12px'
                                        }}>
                                            P = U × I ⇒ I = P/U = 5000/48 ≈ 104,17 A
                                        </div>
                                    )}
                                </div>

                                <div className="question">
                                    <p style={{fontSize: '14px', marginBottom: '5px'}}>3. Déterminer l'énergie
                                        totale stockée
                                        dans la batterie en Wh et en kWh.</p>
                                    .....................................................................................
                                    <button className="correction-btnoptic"
                                            onClick={() => toggleCorrection('ex5_3_wh')}
                                            style={{
                                                padding: '5px 10px',
                                                fontSize: '12px',
                                                backgroundColor: '#1976d2',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}>
                                        <FaCheck/> {showCorrections.ex5_3_wh ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showCorrections.ex5_3_wh && (
                                        <div className="correction-text" style={{
                                            marginTop: '10px',
                                            padding: '8px',
                                            backgroundColor: '#e8f5e9',
                                            borderLeft: '3px solid #4caf50',
                                            borderRadius: '4px',
                                            fontSize: '12px'
                                        }}>
                                            E = U × capacité = 48 × 40 = 1920 Wh = 1,92 kWh
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* AutoEvaluationGrid réduit et bien aligné */}
                        <div style={{
                            width: '150%',
                            overflow: 'hidden',
                            marginTop: '20px',
                            transform: 'scale(0.66)',
                            transformOrigin: 'top left',
                            marginBottom: '-31%',

                        }}>
                            <AutoEvaluationGrid/>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </>);
};

export default ExerciceElectriciteSuite;
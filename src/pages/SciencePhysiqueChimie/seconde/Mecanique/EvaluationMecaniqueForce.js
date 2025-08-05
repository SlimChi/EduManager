import React, {useRef, useState} from 'react';
import {FaBalanceScale, FaCheck, FaExclamationTriangle} from 'react-icons/fa';
import '../../../../styles/activites.css';
import {useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';
import ModalImage from '../../../../utils/ModalImage';
import AutoEvaluationGrid from '../../../../config/AutoEvaluationGrid';
import solMurForce from '../../../../assets/solMurForce.png';
import objetForceEva from '../../../../assets/objetForceEva.png';
import {BlockMath, InlineMath} from 'react-katex';
import EvaluationGridCcf from "../../../../config/EvaluationGridCcf";

const EvaluationMecaniqueForce = () => {
    const {classId} = useParams();
    const contentRef = useRef();
    const [modalState, setModalState] = useState({show: false, imageUrl: '', altText: ''});
    const [answers, setAnswers] = useState({
        ex1q1: [],
        ex1q2: '',
        ex1q3: [],
        ex1q4: [],
        ex1q5: [],
        ex1q6: [],
        ex1q7: [],
        ex1q8: [],
        ex1q9: [],
        ex1q10: [],
        ex2q1: '',
        ex2q2: '',
        ex3q2: '',
        ex3q5: ''
    });
    const [showCorrections, setShowCorrections] = useState({
        ex1q1: false,
        ex1q2: false,
        ex1q3: false,
        ex1q4: false,
        ex1q5: false,
        ex1q6: false,
        ex1q7: false,
        ex1q8: false,
        ex1q9: false,
        ex1q10: false,
        ex2q1: false,
        ex2q2: false,
        ex3q2: false,
        ex3q5: false
    });

    // Définition des corrections
    const corrections = {
        ex1q1: "Une force possède 3 caractéristiques : direction, sens et intensité.",
        ex1q2: "Les caractéristiques d'une force sont :\n- Direction (droite d'action)\n- Sens (orientation de la force)\n- Intensité (valeur en newtons)",
        ex1q3: "L'unité de la force est le newton (N) ou le décanewton (daN).",
        ex1q4: "Avec une échelle de 1cm pour 200N, une force de 1000N sera représentée par une flèche de 5cm (car 1000/200=5).",
        ex1q5: "Le poids peut être mesuré avec un dynamomètre ou calculé avec la formule P = m·g.",
        ex1q6: "La droite d'action du poids est toujours verticale et dirigée vers le bas.",
        ex1q7: "Avec m=500g=0,5kg et g=10N/kg, le poids P = 0,5×10 = 5N.",
        ex1q8: "Pour qu'un solide soumis à 2 forces soit en équilibre, les forces doivent avoir :\n- Sens opposés\n- Même valeur\n- Même droite d'action",
        ex1q9: "Trois droites qui se coupent en un point sont dites concourantes.",
        ex1q10: "Pour être en équilibre, le dynamique des forces doit être fermé.",
        ex2q1: "Situation 3 est en équilibre (les forces sont opposées, de même intensité, et colinéaires).",
        ex2q2: "Justification :\nLes forces F1 et F2 ont :\n- Même droite d'action\n- Sens opposés\n- Valeurs égales",
        ex3q2: "Calcul de la masse : P = m·g ⇒ m = P/g = 800/10 = 80 kg",
        ex3q5: "La valeur de F2 est d'environ 824 N (calculée par la méthode du dynamique des forces)."
    };

    // Réponses attendues pour validation
    const expectedAnswers = {
        ex1q1: ['3'],
        ex1q2: "direction\nsens\nintensité",
        ex1q3: ['N', 'daN'],
        ex1q4: ['5cm'],
        ex1q5: ['dynamometre', 'P=mg'],
        ex1q6: ['verticale', 'vers le bas'],
        ex1q7: ['5N'],
        ex1q8: ['sens opposes', 'meme valeur'],
        ex1q9: ['concourantes'],
        ex1q10: ['ferme'],
        ex2q1: "Situation 3",
        ex2q2: "même droite d'action\nsens opposés\nvaleurs égales",
        ex3q2: "80",
        ex3q5: "824"
    };

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState(prev => ({...prev, show: false}));
    };

    const handleInputChange = (field, value) => {
        setAnswers(prev => ({
            ...prev, [field]: value
        }));
    };

    const handleCheckboxChange = (field, value, isChecked) => {
        setAnswers(prev => {
            const currentValues = prev[field] || [];
            if (isChecked) {
                return {...prev, [field]: [...currentValues, value]};
            } else {
                return {...prev, [field]: currentValues.filter(item => item !== value)};
            }
        });
    };

    const toggleCorrection = (field) => {
        setShowCorrections(prev => ({...prev, [field]: !prev[field]}));
    };

    // Fonction pour vérifier si une réponse est correcte
    const isAnswerCorrect = (field) => {
        if (Array.isArray(expectedAnswers[field])) {
            return JSON.stringify(answers[field].sort()) === JSON.stringify(expectedAnswers[field].sort());
        }
        return answers[field].toString().toLowerCase() === expectedAnswers[field].toString().toLowerCase();
    };

    return (<>
        <BackButton/>
        <div className="evaluation-container" id="evaluation-mecanique-force-content" ref={contentRef}>
            <PrintManager
                contentRef={contentRef}
                activityName="Evaluation_Mecanique_Forces"
                pageCount={2}
                quality="high"
            />

            <div className="print-page">
                <header className="evaluation-header">
                    <div className="header-badge">
                        <FaBalanceScale size={24}/>
                        <span>ÉVALUATION - Mécanique des forces</span>
                    </div>
                    <div className="student-info">
                        <div className="info-item">
                            <span className="label">Nom :</span>
                            <span className="value underline"></span>
                        </div>
                        <div className="info-item">
                            <span className="label">Prénom :</span>
                            <span className="value underline"></span>
                        </div>
                        <div className="info-item">
                            <span className="label">Classe :</span>
                            <span className="value">{classId} ASSP G2</span>
                        </div>
                    </div>
                </header>

                <div className="exercise-section mt-0">
                    <h2 className="exercise-title mt-0">Exercice 1 : Fondamentaux</h2>

                    {/* Question 1 */}
                    <div className="modern-question">
                        <p className="question-text">1. Une action mécanique, aussi appelée force, possède :</p>
                        <div className="modern-checkbox-group"
                             style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                            {['2 caractéristiques', '3 caractéristiques', '4 caractéristiques'].map((option, index) => (
                                <label key={index} className="checkbox-option"
                                       style={{flex: 1, textAlign: "center"}}>
                                    <input
                                        type="checkbox"
                                        checked={answers.ex1q1.includes((index + 2).toString())}
                                        onChange={(e) => handleCheckboxChange('ex1q1', (index + 2).toString(), e.target.checked)}
                                    />
                                    <span className="checkmark"></span>
                                    {option}
                                </label>))}
                        </div>

                        <button className="modern-correction-btn" onClick={() => toggleCorrection('ex1q1')}>
                            <FaCheck/> {showCorrections.ex1q1 ? 'Masquer' : 'Afficher'} correction
                        </button>
                        {showCorrections.ex1q1 && (<div className="correction-box">
                            <p className="correction-text">{corrections.ex1q1}</p>
                            <p className={isAnswerCorrect('ex1q1') ? 'correct-answer' : 'incorrect-answer'}>
                                {isAnswerCorrect('ex1q1') ? '✓ Votre réponse est correcte' : '✗ Votre réponse est incorrecte'}
                            </p>
                        </div>)}
                        {/* Question 2 */}
                        <p className="question-text">2. Citer les caractéristiques d'une force :</p>
                        <textarea
                            className="modern-answer-input"
                            rows="2"
                            value={answers.ex1q2}
                            onChange={(e) => handleInputChange('ex1q2', e.target.value)}
                        />
                        <button className="modern-correction-btn" onClick={() => toggleCorrection('ex1q2')}>
                            <FaCheck/> {showCorrections.ex1q2 ? 'Masquer' : 'Afficher'} correction
                        </button>
                        {showCorrections.ex1q2 && (<div className="correction-box">
                            <pre className="correction-text">{corrections.ex1q2}</pre>
                            <p className={isAnswerCorrect('ex1q2') ? 'correct-answer' : 'incorrect-answer'}>
                                {isAnswerCorrect('ex1q2') ? '✓ Votre réponse est correcte' : '✗ Votre réponse est incorrecte'}
                            </p>
                        </div>)}
                        {/* Question 3 */}
                        <p className="question-text">3. La valeur d'une force peut s'exprimer en :</p>
                        <div className="modern-checkbox-group"
                             style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                            {['cm', 'N', 'kg', 'daN'].map((unit, index) => (
                                <label key={index} className="checkbox-option">
                                    <input
                                        type="checkbox"
                                        checked={answers.ex1q3.includes(unit)}
                                        onChange={(e) => handleCheckboxChange('ex1q3', unit, e.target.checked)}
                                    />
                                    <span className="checkmark"></span>
                                    {unit}
                                </label>))}
                        </div>
                        <button className="modern-correction-btn" onClick={() => toggleCorrection('ex1q3')}>
                            <FaCheck/> {showCorrections.ex1q3 ? 'Masquer' : 'Afficher'} correction
                        </button>
                        {showCorrections.ex1q3 && (<div className="correction-box">
                            <p className="correction-text">{corrections.ex1q3}</p>
                            <p className={isAnswerCorrect('ex1q3') ? 'correct-answer' : 'incorrect-answer'}>
                                {isAnswerCorrect('ex1q3') ? '✓ Votre réponse est correcte' : '✗ Votre réponse est incorrecte'}
                            </p>
                        </div>)}
                        {/* Question 4 */}
                        <p className="question-text">4. Avec une échelle de 1cm pour 200N, une force de 1000N sera
                            représentée par une flèche de :</p>
                        <div className="modern-checkbox-group"
                             style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                            {['2cm', '5cm', '10cm'].map((length, index) => (
                                <label key={index} className="checkbox-option">
                                    <input
                                        type="checkbox"
                                        checked={answers.ex1q4.includes(length)}
                                        onChange={(e) => handleCheckboxChange('ex1q4', length, e.target.checked)}
                                    />
                                    <span className="checkmark"></span>
                                    {length}
                                </label>))}
                        </div>
                        <button className="modern-correction-btn" onClick={() => toggleCorrection('ex1q4')}>
                            <FaCheck/> {showCorrections.ex1q4 ? 'Masquer' : 'Afficher'} correction
                        </button>
                        {showCorrections.ex1q4 && (<div className="correction-box">
                            <p className="correction-text">{corrections.ex1q4}</p>
                            <p className={isAnswerCorrect('ex1q4') ? 'correct-answer' : 'incorrect-answer'}>
                                {isAnswerCorrect('ex1q4') ? '✓ Votre réponse est correcte' : '✗ Votre réponse est incorrecte'}
                            </p>
                        </div>)}
                        {/* Question 5 */}
                        <p className="question-text">5. La valeur du poids s'obtient avec :</p>
                        <div className="modern-checkbox-group"
                             style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                            {[{id: 'dynamometre', label: 'un dynamomètre'}, {
                                id: 'balance',
                                label: 'une balance'
                            }, {id: 'P=mg', label: ' P = m.g'}, {
                                id: 'm=Pg',
                                label: ' m = P.g'
                            }].map((option, index) => (<label key={index} className="checkbox-option">
                                <input
                                    type="checkbox"
                                    checked={answers.ex1q5.includes(option.id)}
                                    onChange={(e) => handleCheckboxChange('ex1q5', option.id, e.target.checked)}
                                />
                                <span className="checkmark"></span>
                                {option.label}
                            </label>))}
                        </div>
                        <button className="modern-correction-btn" onClick={() => toggleCorrection('ex1q5')}>
                            <FaCheck/> {showCorrections.ex1q5 ? 'Masquer' : 'Afficher'} correction
                        </button>
                        {showCorrections.ex1q5 && (<div className="correction-box">
                            <p className="correction-text">{corrections.ex1q5}</p>
                            <p className={isAnswerCorrect('ex1q5') ? 'correct-answer' : 'incorrect-answer'}>
                                {isAnswerCorrect('ex1q5') ? '✓ Votre réponse est correcte' : '✗ Votre réponse est incorrecte'}
                            </p>
                        </div>)}
                        {/* Question 6 */}
                        <p className="question-text">6. Le poids est une force dont la droite d'action est :</p>
                        <div className="modern-checkbox-group"
                             style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                            {['verticale', 'horizontale', 'vers le bas'].map((option, index) => (
                                <label key={index} className="checkbox-option">
                                    <input
                                        type="checkbox"
                                        checked={answers.ex1q6.includes(option)}
                                        onChange={(e) => handleCheckboxChange('ex1q6', option, e.target.checked)}
                                    />
                                    <span className="checkmark"></span>
                                    {option}
                                </label>))}
                        </div>
                        <button className="modern-correction-btn" onClick={() => toggleCorrection('ex1q6')}>
                            <FaCheck/> {showCorrections.ex1q6 ? 'Masquer' : 'Afficher'} correction
                        </button>
                        {showCorrections.ex1q6 && (<div className="correction-box">
                            <p className="correction-text">{corrections.ex1q6}</p>
                            <p className={isAnswerCorrect('ex1q6') ? 'correct-answer' : 'incorrect-answer'}>
                                {isAnswerCorrect('ex1q6') ? '✓ Votre réponse est correcte' : '✗ Votre réponse est incorrecte'}
                            </p>
                        </div>)}
                        {/* Question 7 */}
                        <p className="question-text">7. Avec m=500 g et g=10 N/kg, le poids P est égal à :</p>
                        <div className="modern-checkbox-group"
                             style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                            {['5000 N', '5 daN', '5 N', '50 N'].map((option, index) => (
                                <label key={index} className="checkbox-option">
                                    <input
                                        type="checkbox"
                                        checked={answers.ex1q7.includes(option)}
                                        onChange={(e) => handleCheckboxChange('ex1q7', option, e.target.checked)}
                                    />
                                    <span className="checkmark"></span>
                                    {option}
                                </label>))}
                        </div>
                        <button className="modern-correction-btn" onClick={() => toggleCorrection('ex1q7')}>
                            <FaCheck/> {showCorrections.ex1q7 ? 'Masquer' : 'Afficher'} correction
                        </button>
                        {showCorrections.ex1q7 && (<div className="correction-box">
                            <p className="correction-text">{corrections.ex1q7}</p>
                            <p className={isAnswerCorrect('ex1q7') ? 'correct-answer' : 'incorrect-answer'}>
                                {isAnswerCorrect('ex1q7') ? '✓ Votre réponse est correcte' : '✗ Votre réponse est incorrecte'}
                            </p>
                        </div>)}
                        {/* Question 8 */}
                        <p className="question-text">8. Un solide soumis à 2 forces est en équilibre si les deux
                            forces sont :</p>
                        <div className="modern-checkbox-group"
                             style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                            {['sens opposes', 'meme valeur', 'droites differentes'].map((option, index) => (
                                <label key={index} className="checkbox-option">
                                    <input
                                        type="checkbox"
                                        checked={answers.ex1q8.includes(option)}
                                        onChange={(e) => handleCheckboxChange('ex1q8', option, e.target.checked)}
                                    />
                                    <span className="checkmark"></span>
                                    {option.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                </label>))}
                        </div>
                        <button className="modern-correction-btn" onClick={() => toggleCorrection('ex1q8')}>
                            <FaCheck/> {showCorrections.ex1q8 ? 'Masquer' : 'Afficher'} correction
                        </button>
                        {showCorrections.ex1q8 && (<div className="correction-box">
                            <p className="correction-text">{corrections.ex1q8}</p>
                            <p className={isAnswerCorrect('ex1q8') ? 'correct-answer' : 'incorrect-answer'}>
                                {isAnswerCorrect('ex1q8') ? '✓ Votre réponse est correcte' : '✗ Votre réponse est incorrecte'}
                            </p>
                        </div>)}


                        {/* Question 9 */}

                        <p className="question-text">9. Trois droites concourantes :</p>
                        <div className="modern-checkbox-group"
                             style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                            {['coplanaires', 'paralleles', 'concourantes'].map((option, index) => (
                                <label key={index} className="checkbox-option">
                                    <input
                                        type="checkbox"
                                        checked={answers.ex1q9.includes(option)}
                                        onChange={(e) => handleCheckboxChange('ex1q9', option, e.target.checked)}
                                    />
                                    <span className="checkmark"></span>
                                    {option.charAt(0).toUpperCase() + option.slice(1)}
                                </label>))}
                        </div>
                        <button className="modern-correction-btn" onClick={() => toggleCorrection('ex1q9')}>
                            <FaCheck/> {showCorrections.ex1q9 ? 'Masquer' : 'Afficher'} correction
                        </button>
                        {showCorrections.ex1q9 && (<div className="correction-box">
                            <p className="correction-text">{corrections.ex1q9}</p>
                            <p className={isAnswerCorrect('ex1q9') ? 'correct-answer' : 'incorrect-answer'}>
                                {isAnswerCorrect('ex1q9') ? '✓ Votre réponse est correcte' : '✗ Votre réponse est incorrecte'}
                            </p>
                        </div>)}


                        {/* Question 10 */}

                        <p className="question-text">10. Dynamique des forces :</p>
                        <div className="modern-checkbox-group"
                             style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                            {['ferme', 'ouvert', 'semi-ouvert'].map((option, index) => (
                                <label key={index} className="checkbox-option">
                                    <input
                                        type="checkbox"
                                        checked={answers.ex1q10.includes(option)}
                                        onChange={(e) => handleCheckboxChange('ex1q10', option, e.target.checked)}
                                    />
                                    <span className="checkmark"></span>
                                    {option.charAt(0).toUpperCase() + option.slice(1)}
                                </label>))}
                        </div>
                        <button className="modern-correction-btn" onClick={() => toggleCorrection('ex1q10')}>
                            <FaCheck/> {showCorrections.ex1q10 ? 'Masquer' : 'Afficher'} correction
                        </button>
                        {showCorrections.ex1q10 && (<div className="correction-box">
                            <p className="correction-text">{corrections.ex1q10}</p>
                            <p className={isAnswerCorrect('ex1q10') ? 'correct-answer' : 'incorrect-answer'}>
                                {isAnswerCorrect('ex1q10') ? '✓ Votre réponse est correcte' : '✗ Votre réponse est incorrecte'}
                            </p>
                        </div>)}
                    </div>
                </div>
            </div>

            <div className="print-page">
                <div className="exercise-section">
                    <h2 className="exercise-title">Exercice 2 : Équilibre d'un solide</h2>
                    {/* Question 1 */}

                    <p className="question-text">1. Dire dans quelle situation le solide est en équilibre.</p>
                    <div className="scheme-container justify-content-center d-flex">
                        <img
                            src={objetForceEva}
                            alt="Situations d'équilibre"
                            className="img-fluid rounded shadow-sm compact-img mb-3 d-flex justify-content-center"
                            onClick={() => openModal(objetForceEva, 'Situations d\'équilibre')}
                            style={{width: 'auto', maxWidth: '80%', height: 'auto'}}
                        />
                    </div>
                    <textarea
                        className="modern-answer-input"
                        rows="1"
                        value={answers.ex2q1}
                        onChange={(e) => handleInputChange('ex2q1', e.target.value)}
                    />
                    <button className="modern-correction-btn" onClick={() => toggleCorrection('ex2q1')}>
                        <FaCheck/> {showCorrections.ex2q1 ? 'Masquer' : 'Afficher'} correction
                    </button>
                    {showCorrections.ex2q1 && (<div className="correction-box">
                        <p className="correction-text">{corrections.ex2q1}</p>
                        <p className={isAnswerCorrect('ex2q1') ? 'correct-answer' : 'incorrect-answer'}>
                            {isAnswerCorrect('ex2q1') ? '✓ Votre réponse est correcte' : '✗ Votre réponse est incorrecte'}
                        </p>
                    </div>)}
                    {/* Question 2 */}
                    <p className="question-text">2. JUSTIFIER la réponse</p>
                    <textarea
                        className="modern-answer-input"
                        rows="2"
                        value={answers.ex2q2}
                        onChange={(e) => handleInputChange('ex2q2', e.target.value)}
                    />
                    <button className="modern-correction-btn" onClick={() => toggleCorrection('ex2q2')}>
                        <FaCheck/> {showCorrections.ex2q2 ? 'Masquer' : 'Afficher'} correction
                    </button>
                    {showCorrections.ex2q2 && (<div className="correction-box">
                        <pre className="correction-text">{corrections.ex2q2}</pre>
                        <p className={isAnswerCorrect('ex2q2') ? 'correct-answer' : 'incorrect-answer'}>
                            {isAnswerCorrect('ex2q2') ? '✓ Votre réponse est correcte' : '✗ Votre réponse est incorrecte'}
                        </p>
                    </div>)}

                    <h2 className="exercise-title mt-0">Exercice 3 : L'échelle en équilibre</h2>
                    <p className="exercise-description">Léo monte sur une échelle. L'échelle est en équilibre et est
                        soumise à 3 forces. On néglige le poids de l'échelle. <br/>
                        1. Compléter le tableau des caractéristiques des forces (sauf
                        la dernière case de la dernière colonne)</p>
                    <div className="exercise-content">
                        <div className="table-container">
                            <table className="modern-table">
                                <thead>
                                <tr>
                                    <th>Action mécanique</th>
                                    <th>Force</th>
                                    <th>Orientation de la droite d'action</th>
                                    <th>Sens</th>
                                    <th>Valeur (en N)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Action du mur sur l'échelle</td>
                                    <td><BlockMath
                                        math="\overrightarrow{\text{F1}}  "/>
                                    </td>
                                    <td><input type="text" className="table-input"/></td>
                                    <td><input type="text" className="table-input"/></td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>Poids de Léo sur l'échelle</td>
                                    <td><BlockMath
                                        math="\overrightarrow{\text{P}}"/></td>
                                    <td><input type="text" className="table-input"/></td>
                                    <td><input type="text" className="table-input"/></td>
                                    <td>800</td>
                                </tr>
                                <tr>
                                    <td>Action du sol sur l'échelle</td>
                                    <td><BlockMath
                                        math="\overrightarrow{\text{F2}}"/></td>
                                    <td><input type="text" className="table-input"/></td>
                                    <td><input type="text" className="table-input"/></td>
                                    <td><input type="text" className="table-input"/></td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="scheme-container justify-content-center d-flex">
                                <img
                                    src={solMurForce}
                                    alt="Échelle en équilibre"
                                    className="img-fluid rounded shadow-sm compact-img"
                                    onClick={() => openModal(solMurForce, 'Échelle en équilibre')}
                                    style={{maxWidth: '250px',}}
                                />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="print-page">
                {/* Question 2 */}
                <div className="modern-question">
                    <p className="question-text">2. À l'aide de la formule P = m.g, calculer la masse de
                        Léo. On
                        prendra g = 10 N/kg</p>
                    <div className="answer-input-group">
                        <input
                            type="text"
                            value={answers.ex3q2}
                            onChange={(e) => handleInputChange('ex3q2', e.target.value)}
                            className="answer-input"
                        />
                    </div>
                    <button className="modern-correction-btn" onClick={() => toggleCorrection('ex3q2')}>
                        <FaCheck/> {showCorrections.ex3q2 ? 'Masquer' : 'Afficher'} correction
                    </button>
                    {showCorrections.ex3q2 && (<div className="correction-box">
                        <p className="correction-text">{corrections.ex3q2}</p>
                        <p className={isAnswerCorrect('ex3q2') ? 'correct-answer' : 'incorrect-answer'}>
                            {isAnswerCorrect('ex3q2') ? '✓ Votre réponse est correcte' : '✗ Votre réponse est incorrecte'}
                        </p>
                    </div>)}
                    {/* Question 3 */}
                    <p className="question-text">3. Vérifier que les 3 droites sont concourantes. (Tracer
                        sur le
                        schéma)</p>
                    <div className="drawing-area">

                    </div>
                    <button className="modern-correction-btn" onClick={() => toggleCorrection('ex3q3')}>
                        <FaCheck/> {showCorrections.ex3q3 ? 'Masquer' : 'Afficher'} correction
                    </button>
                    {showCorrections.ex3q3 && (<div className="correction-box">
                        <p className="correction-text">Les 3 droites d'action doivent se couper en un
                            même
                            point pour que le système soit en équilibre.</p>
                    </div>)}
                    {/* Question 4 */}
                    <p className="question-text">4. Dans l'encadré à droite du schéma, tracer la dynamique
                        des
                        forces en prenant 1 cm pour 200 N</p>
                    <div className="drawing-area">

                    </div>
                    <button className="modern-correction-btn" onClick={() => toggleCorrection('ex3q4')}>
                        <FaCheck/> {showCorrections.ex3q4 ? 'Masquer' : 'Afficher'} correction
                    </button>
                    {showCorrections.ex3q4 && (<div className="correction-box">
                        <p className="correction-text">Le dynamique doit être un triangle fermé avec
                            :\n- F1
                            = 1cm (200N)\n- P = 4cm (800N)\n- F2 = 4.12cm (824N)</p>
                    </div>)}
                    {/* Question 5 */}
                    <p className="question-text">
                        5. En déduire la valeur de la force <InlineMath math="\overrightarrow{\text{F2}}"/> et compléter
                        la dernière case du tableau
                    </p>

                    <div className="answer-input-group">
                        <input
                            type="text"
                            value={answers.ex3q5}
                            onChange={(e) => handleInputChange('ex3q5', e.target.value)}
                            className="answer-inputEval "
                        />
                        <span className="unit">N</span>
                    </div>
                    <button className="modern-correction-btn" onClick={() => toggleCorrection('ex3q5')}>
                        <FaCheck/> {showCorrections.ex3q5 ? 'Masquer' : 'Afficher'} correction
                    </button>
                    {showCorrections.ex3q5 && (<div className="correction-box">
                        <p className="correction-text">{corrections.ex3q5}</p>
                        <p className={isAnswerCorrect('ex3q5') ? 'correct-answer' : 'incorrect-answer'}>
                            {isAnswerCorrect('ex3q5') ? '✓ Votre réponse est correcte' : '✗ Votre réponse est incorrecte'}
                        </p>
                    </div>)}
                </div>

            </div>
            <div className="print-page">
                <EvaluationGridCcf/>
            </div>
        </div>

        {modalState.show && (<ModalImage
            imageUrl={modalState.imageUrl}
            altText={modalState.altText}
            onClose={closeModal}
        />)}
    </>);
};

export default EvaluationMecaniqueForce;
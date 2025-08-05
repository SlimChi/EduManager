import React, {useRef, useState} from 'react';
import {FaCheck, FaChartPie, FaPercentage, FaDice, FaTable, FaCalculator} from 'react-icons/fa';
import BackButton from '../../../../../components/navigation/BackButton';
import PrintManager from '../../../../../utils/PrintManager';
import '../../../../../styles/act1proba.css';
import '../../../../../styles/act1proba-print.css';
import ModalImage from '../../../../../utils/ModalImage';
import AutoEvaluationGrid from "../../../../../config/AutoEvaluationGrid";
import Automatismes from "../../../../../config/Automatismes";

const BilanExercicesProba = () => {
    const [showAnswers, setShowAnswers] = useState({
        method1: false,
        method2: false,
        ex1a: false,
        ex1b: false,
        ex1c: false,
        ex2a: false,
        ex2b: false,
        ex2c: false,
        ex3: false,
        ex4: false
    });

    const [answers, setAnswers] = useState({
        ex1a: '',
        ex1b: '',
        ex1c: '',
        ex2a: '',
        ex2b: '',
        ex2c: '',
        ex3a: '',
        ex3b: '',
        ex3c: '',
        ex3d: '',
        ex3e: '',
        ex3f: '',
        ex4a1: '',
        ex4a2: '',
        ex4a3: '',
        ex4a4: '',
        ex4b1: '',
        ex4b2: '',
        ex4b3: '',
        ex4b4: '',
        ex4c1: '',
        ex4c2: '',
        ex4c3: '',
        ex4c4: '',
        ex4d1: '',
        ex4d2: '',
        ex4d3: '',
        ex4d4: '',
    });

    const correctAnswers = {
        ex1a: 'Int(6 × Ran# + 1)',
        ex1b: 'Int(6 × Ran# + 1) + Int(6 × Ran# + 1)',
        ex1c: '16%',
        ex2a: '7',
        ex2b: '0,17',
        ex2c: '170',
        ex3a: '0,7 = 70%',
        ex3b: '0,15 = 15%',
        ex3c: '0,003 = 0,3%',
        ex3d: '0,25 = 25%',
        ex3e: '0,5 = 50%',
        ex3f: '0,18 = 18%',
        ex4a1: '21',
        ex4a2: '21,3',
        ex4a3: '21,27',
        ex4a4: '21,274',
        ex4b1: '10',
        ex4b2: '9,8',
        ex4b3: '9,76',
        ex4b4: '9,756',
        ex4c1: '35',
        ex4c2: '34,5',
        ex4c3: '34,52',
        ex4c4: '34,518',
        ex4d1: '0',
        ex4d2: '0,5',
        ex4d3: '0,48',
        ex4d4: '0,476'
    };

    const [modalState, setModalState] = useState({
        show: false,
        imageUrl: '',
        altText: '',
    });

    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState((prev) => ({...prev, show: false}));
    };

    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };

    const toggleAnswer = (field) => {
        setShowAnswers((prev) => ({...prev, [field]: !prev[field]}));
    };

    const contentRef = useRef();

    return (
        <>
            <BackButton/>

            <div
                className="tp-container act1-container mt-0"
                id="proba-content"
                ref={contentRef}
            >
                <PrintManager
                    contentRef={contentRef}
                    activityName="Bilan_Probabilites"
                    pageCount={2}
                    quality="hd"
                />
                {/* Page 1 - Bilan théorique */}
                <div className="print-page">
                    <div className="math-chapter-box blue mt-0">
                        <FaChartPie className="math-chapter-icon"/>
                        <h2 className="math-chapter-title-test">
                            📊 Bilan - Fréquences et probabilités
                        </h2>
                    </div>
                    <div className="theory-box info-bubble">
                        <p>🎲 <strong>Une expérience est aléatoire</strong> si ses résultats ou événements sont liés au
                            hasard.</p>
                        <p>📊 <strong>Un échantillon</strong> est l'ensemble des résultats de l'expérience aléatoire. Il
                            est caractérisé par sa taille <strong>n</strong> (nombre de résultats).</p>
                        <p>📈 Lors d'une expérience aléatoire, la <strong>fréquence d'apparition</strong> d'un résultat A
                            est :</p>  <span>f(A) = </span>
                        <div className="fraction justify-content-center">
                            <span className="numerator"
                                  style={{fontSize: '1.2em'}}>nombre d'apparitions du résultat A</span>
                            <span className="denominator" style={{fontSize: '1.2em'}}>taille de l'échantillon</span>
                        </div>

                        <p>🔍 Lorsque la taille de l'échantillon est très grande, la fréquence se rapproche de la
                            probabilité de l'événement. La <strong> probabilité</strong> d'un événement A est : <span>p(A) = </span>
                            <div className="fraction">
                                <span className="numerator" style={{fontSize: '1.2em'}}>nombre de cas favorables</span>
                                <span className="denominator" style={{fontSize: '1.2em'}}>nombre de cas possibles</span>
                            </div>
                        </p>
                    </div>

                    {/* Méthode 1 */}
                    <section className="method-section info-bubble property ">
                        <h3 className="method-title mt-0">
                            <FaCheck/> 📋 Construire un tableau de répartition de fréquences
                        </h3>
                        <div className="method-content">
                            <p>
                                🪙 On lance 16 fois une pièce de monnaie et on note le résultat de chaque lancer :<br/>
                                « P » si la pièce tombe côté pile et « F » si la pièce tombe côté face.<br/>
                                Voici les résultats obtenus :
                                <strong> P ; P ; F ; P ; F ; P ; F ; F ; P ; P ; F ; F ; P ; F ; P ; F</strong>.<br/>
                                🧮 Calculer la fréquence d'apparition de pile et celle de face.
                            </p>
                            <div className="d-flex flex-wrap align-items-start" style={{gap: '20px'}}>
                                {/* Partie Démarche */}
                                <div className="method-steps flex-grow-1" style={{minWidth: '300px'}}>
                                    <div className="math-card method-card p-2">
                                        <h4>📝 Démarche</h4>
                                        <ul>
                                            <li>Définir les résultats de l'expérience.</li>
                                            <li>Déterminer la taille n de l'échantillon.</li>
                                            <li>Noter le nombre d'apparitions de chaque résultat.</li>
                                            <li>Calculer la fréquence de chaque résultat.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Partie Solution (vide par défaut) */}
                                <div className="flex-grow-1" style={{minWidth: '300px'}}>
                                    <div className="math-card p-2" style={{minHeight: '100%'}}>
                                        {showAnswers.method1 ? (
                                            <>
                                                <h4>✅ Solution</h4>
                                                <ul>
                                                    <li>Deux résultats possibles : PILE ; FACE.</li>
                                                    <li>Nombre de résultats : n = 16.</li>
                                                    <li>Nombre d'apparitions de pile : 9.</li>
                                                    <li>Nombre d'apparitions de face : 7.</li>
                                                    <li>f(PILE) = 9/16 = 0,5625 soit 56,25%.</li>
                                                    <li>f(FACE) = 7/16 = 0,4375 soit 43,75%.</li>
                                                </ul>
                                            </>
                                        ) : (
                                            <div style={{
                                                height: '180px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#999'
                                            }}>
                                                <p></p>

                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Bouton de bascule */}
                                <div className="w-100 no-print">
                                    <button
                                        className="correction-btnoptic"
                                        onClick={() => toggleAnswer('method1')}
                                        style={{marginTop: '10px'}}
                                    >
                                        <FaCheck/> {showAnswers.method1 ? 'Masquer la solution' : 'Afficher la solution'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <h3 className="method-title mt-4">
                            <FaCheck/> 🎲 Calculer la probabilité d'un événement
                        </h3>
                        <div className="method-content">
                            <p>🎲 On lance un dé à six faces. Quelle est la probabilité d'obtenir le chiffre 5 ?</p>

                            <div className="d-flex flex-wrap align-items-stretch"
                                 style={{gap: '20px', marginBottom: '20px'}}>
                                {/* Partie Démarche */}
                                <div className="flex-grow-1" style={{minWidth: '300px', flexBasis: '0'}}>
                                    <div className="math-card method-card p-2">
                                        <h4>📝 Démarche</h4>
                                        <ul>
                                            <li>Chercher le nombre de cas possibles.</li>
                                            <li>Déterminer le nombre de cas favorables parmi ces cas possibles.</li>
                                            <li>Calculer la valeur de la probabilité p :</li>
                                        </ul>
                                        <span>p = </span>
                                        <div className="fraction mb-3">
                                            <span className="numerator" style={{fontSize: '1.2em'}}>Nombre de cas favorables</span>
                                            <span className="denominator" style={{fontSize: '1.2em'}}>Nombre de cas possibles</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Partie Solution/Vide */}
                                <div className="flex-grow-1" style={{minWidth: '300px', flexBasis: '0'}}>
                                    <div className="math-card p-2" style={{height: '100%'}}>
                                        {showAnswers.method2 ? (
                                            <div className="solution-content">
                                                <h4>✅ Solution</h4>
                                                <ul>
                                                    <li>Le résultat du lancer de dé peut être : 1 ; 2 ; 3 ; 4 ; 5 ou
                                                        6.
                                                    </li>
                                                    <li>Nombre de cas possibles = 6.</li>
                                                    <li>Un seul cas favorable : le résultat 5.</li>
                                                    <li>La probabilité d'avoir le chiffre 5 est :</li>
                                                </ul>
                                                <div className="math-formula">
                                                    <span>p(5) = 1/6 ≈ 0,1667 soit 16,67%</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="empty-placeholder" style={{height: '100%'}}></div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Bouton de bascule */}
                            <div className="no-print" style={{textAlign: 'center'}}>
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleAnswer('method2')}
                                >
                                    <FaCheck/> {showAnswers.method2 ? 'Masquer la solution' : 'Afficher la solution'}
                                </button>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Page 2 - Exercices */}
                <div className="print-page">
                    <div className="math-chapter-box blue">
                        <FaChartPie className="math-chapter-icon"/>
                        <h2 className="math-chapter-title-test">
                            📚 Exercices & Problèmes
                        </h2>
                    </div>

                    <section className="exercises-section">
                        {/* Exercice 1 */}
                        <div className="exercise-box info-bubble">
                            <h4 className="exercise-title">
                                <FaDice/> 1. Réaliser une simulation
                            </h4>

                            <div className="d-flex flex-wrap justify-content-between"
                                 style={{gap: '15px'}}>
                                {/* Question 1a */}
                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">a. Instruction pour simuler un lancer de dé :</p>
                                    <div className="compact-qcm-options">
                                        <label
                                            className={`qcm-option ${answers.ex1a === correctAnswers.ex1a ? 'correct-answer' : ''}`}>
                                            <input
                                                type="radio"
                                                name="ex1a"
                                                value="Int(6 × Ran# + 1)"
                                                onChange={(e) => handleInputChange('ex1a', e.target.value)}
                                                checked={answers.ex1a === "Int(6 × Ran# + 1)"}
                                            /> Int(6 × Ran# + 1)
                                        </label>
                                        <label className="qcm-option">
                                            <input
                                                type="radio"
                                                name="ex1a"
                                                value="(6 × Ran# + 1)"
                                                onChange={(e) => handleInputChange('ex1a', e.target.value)}
                                                checked={answers.ex1a === "(6 × Ran# + 1)"}
                                            /> (6 × Ran# + 1)
                                        </label>
                                        <label className="qcm-option">
                                            <input
                                                type="radio"
                                                name="ex1a"
                                                value="Int(6 × Ran#)"
                                                onChange={(e) => handleInputChange('ex1a', e.target.value)}
                                                checked={answers.ex1a === "Int(6 × Ran#)"}
                                            /> Int(6 × Ran#)
                                        </label>
                                    </div>
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex1a')}
                                    >
                                        <FaCheck/> {showAnswers.ex1a ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex1a && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex1a}
                                        </div>
                                    )}
                                </div>

                                {/* Question 1b */}
                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">b. Instruction pour simuler deux dés :</p>
                                    <div className="compact-qcm-options">
                                        <label className="qcm-option">
                                            <input
                                                type="radio"
                                                name="ex1b"
                                                value="2 × Int(6 × Ran# + 1)"
                                                onChange={(e) => handleInputChange('ex1b', e.target.value)}
                                                checked={answers.ex1b === "2 × Int(6 × Ran# + 1)"}
                                            /> 2 × Int(6 × Ran# + 1)
                                        </label>
                                        <label
                                            className={`qcm-option ${answers.ex1b === correctAnswers.ex1b ? 'correct-answer' : ''}`}>
                                            <input
                                                type="radio"
                                                name="ex1b"
                                                value="Int(6 × Ran# + 1) + Int(6 × Ran# + 1)"
                                                onChange={(e) => handleInputChange('ex1b', e.target.value)}
                                                checked={answers.ex1b === "Int(6 × Ran# + 1) + Int(6 × Ran# + 1)"}
                                            /> Int(6 × Ran# + 1) + Int(6 × Ran# + 1)
                                        </label>
                                        <label className="qcm-option">
                                            <input
                                                type="radio"
                                                name="ex1b"
                                                value="Int(12 × Ran#)"
                                                onChange={(e) => handleInputChange('ex1b', e.target.value)}
                                                checked={answers.ex1b === "Int(12 × Ran#)"}
                                            /> Int(12 × Ran#)
                                        </label>
                                    </div>
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex1b')}
                                    >
                                        <FaCheck/> {showAnswers.ex1b ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex1b && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex1b}
                                        </div>
                                    )}
                                </div>

                                {/* Question 1c */}
                                <div className="question-card" style={{flex: '1', minWidth: '250px'}}>
                                    <p className="question-text">c. Fréquence d'apparition du nombre 7 (50 simulations)
                                        :</p>
                                    <div className="compact-qcm-options">
                                        <label className="qcm-option">
                                            <input
                                                type="radio"
                                                name="ex1c"
                                                value="7%"
                                                onChange={(e) => handleInputChange('ex1c', e.target.value)}
                                            /> 7%
                                        </label>
                                        <label className="qcm-option">
                                            <input
                                                type="radio"
                                                name="ex1c"
                                                value="10%"
                                                onChange={(e) => handleInputChange('ex1c', e.target.value)}
                                            /> 10%
                                        </label>
                                        <label
                                            className={`qcm-option ${answers.ex1c === correctAnswers.ex1c ? 'correct-answer' : ''}`}>
                                            <input
                                                type="radio"
                                                name="ex1c"
                                                value="16%"
                                                onChange={(e) => handleInputChange('ex1c', e.target.value)}
                                            /> 16%
                                        </label>
                                    </div>
                                    <button
                                        className="correction-btnoptic no-print"
                                        onClick={() => toggleAnswer('ex1c')}
                                    >
                                        <FaCheck/> {showAnswers.ex1c ? 'Masquer' : 'Correction'}
                                    </button>
                                    {showAnswers.ex1c && (
                                        <div className="correction-box">
                                            <strong>Correction :</strong> {correctAnswers.ex1c}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <h4 className="exercise-title mt-0">
                                <FaTable/> 2. Calculer une probabilité
                            </h4>
                            <p>Le tableau ci-dessous indique les sommes des chiffres obtenus par le lancer simultané de
                                deux dés.</p>

                            <div className="d-flex" style={{gap: '20px', margin: ' 0'}}>
                                {/* Tableau des combinaisons */}
                                <div className="table-responsive " style={{flex: '0 0 auto'}}>
                                    <table className="table table-bordered modern-table">
                                        <thead>
                                        <tr>
                                            <th>Dé n°1 \ Dé n°2</th>
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                            <th>4</th>
                                            <th>5</th>
                                            <th>6</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Questions QCM - Version compacte */}
                                <div className="d-flex flex-column" style={{flex: '1', gap: '10px', minWidth: '300px'}}>
                                    {/* Question 2a */}
                                    <div className="question-card compact">
                                        <p className="question-text">a. Somme la plus probable :</p>
                                        <div className="horizontal-qcm-options">
                                            <label
                                                className={`qcm-option ${answers.ex2a === '7' ? 'correct-answer' : ''}`}>
                                                <input type="radio" name="ex2a" value="7"
                                                       onChange={(e) => handleInputChange('ex2a', e.target.value)}/>
                                                <span>7</span>
                                            </label>
                                            <label className="qcm-option">
                                                <input type="radio" name="ex2a" value="6"
                                                       onChange={(e) => handleInputChange('ex2a', e.target.value)}/>
                                                <span>6</span>
                                            </label>
                                            <label className="qcm-option">
                                                <input type="radio" name="ex2a" value="2"
                                                       onChange={(e) => handleInputChange('ex2a', e.target.value)}/>
                                                <span>2</span>
                                            </label>
                                        </div>
                                        <div className="correction-container">
                                            <button className="correction-btnoptic no-print compact"
                                                    onClick={() => toggleAnswer('ex2a')}>
                                                <FaCheck/> {showAnswers.ex2a ? 'Masquer' : 'Correction'}
                                            </button>
                                            {showAnswers.ex2a && (
                                                <div className="correction-box compact">
                                                    <strong>Correction :</strong> {correctAnswers.ex2a}
                                                </div>
                                            )}
                                        </div>

                                        <p className="question-text">b. Probabilité somme = 7 :</p>
                                        <div className="horizontal-qcm-options">
                                            <label className="qcm-option">
                                                <input type="radio" name="ex2b" value="0,7"
                                                       onChange={(e) => handleInputChange('ex2b', e.target.value)}/>
                                                <span>0,7</span>
                                            </label>
                                            <label className="qcm-option">
                                                <input type="radio" name="ex2b" value="0,10"
                                                       onChange={(e) => handleInputChange('ex2b', e.target.value)}/>
                                                <span>0,10</span>
                                            </label>
                                            <label
                                                className={`qcm-option ${answers.ex2b === '0,17' ? 'correct-answer' : ''}`}>
                                                <input type="radio" name="ex2b" value="0,17"
                                                       onChange={(e) => handleInputChange('ex2b', e.target.value)}/>
                                                <span>0,17</span>
                                            </label>
                                        </div>
                                        <div className="correction-container">
                                            <button className="correction-btnoptic no-print compact"
                                                    onClick={() => toggleAnswer('ex2b')}>
                                                <FaCheck/> {showAnswers.ex2b ? 'Masquer' : 'Correction'}
                                            </button>
                                            {showAnswers.ex2b && (
                                                <div className="correction-box compact">
                                                    <strong>Correction :</strong> {correctAnswers.ex2b}
                                                </div>
                                            )}
                                        </div>

                                        <p className="question-text">c. Théorie pour 1000 lancers :</p>
                                        <div className="horizontal-qcm-options">
                                            <label className="qcm-option">
                                                <input type="radio" name="ex2c" value="7"
                                                       onChange={(e) => handleInputChange('ex2c', e.target.value)}/>
                                                <span>7</span>
                                            </label>
                                            <label className="qcm-option">
                                                <input type="radio" name="ex2c" value="100"
                                                       onChange={(e) => handleInputChange('ex2c', e.target.value)}/>
                                                <span>100</span>
                                            </label>
                                            <label
                                                className={`qcm-option ${answers.ex2c === '170' ? 'correct-answer' : ''}`}>
                                                <input type="radio" name="ex2c" value="170"
                                                       onChange={(e) => handleInputChange('ex2c', e.target.value)}/>
                                                <span>170</span>
                                            </label>
                                        </div>
                                        <div className="correction-container">
                                            <button className="correction-btnoptic no-print compact"
                                                    onClick={() => toggleAnswer('ex2c')}>
                                                <FaCheck/> {showAnswers.ex2c ? 'Masquer' : 'Correction'}
                                            </button>
                                            {showAnswers.ex2c && (
                                                <div className="correction-box compact">
                                                    <strong>Correction :</strong> {correctAnswers.ex2c}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <AutoEvaluationGrid/>
                </div>

                <footer className="tp-footer">
                    <p>Mathématiques 2nde - Chapitre 4: Fréquence d'échantillons – Probabilités</p>
                </footer>
            </div>

            {modalState.show && (
                <ModalImage
                    imageUrl={modalState.imageUrl}
                    altText={modalState.altText}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export default BilanExercicesProba;
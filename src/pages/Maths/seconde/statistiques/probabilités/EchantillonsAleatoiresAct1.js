import React, {useRef, useState} from 'react';
import {
    FaPrint, FaCheck, FaCoins, FaChartLine, FaDice, FaQuestionCircle,
} from 'react-icons/fa';
import '../../../../../styles/act1proba.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../../components/navigation/BackButton';
import PrintManager from '../../../../../utils/PrintManager';
import AutoResizeTextarea from '../../../../../config/AutoResizeTextarea';
import pileouface from '../../../../../assets/pileouface.jpg';
import lancerDe from "../../../../../assets/lancerDe.png";
import CoinFlip from "./CoinFlip";

const EchantillonsAleatoiresAct1 = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [showConclusion, setShowConclusion] = useState(false);

    // États pour les réponses
    const [answers, setAnswers] = useState({
        question1a: '', question1b: '', question1c: '', question2a: '', question2b: '', question3a: '', question3b: '',
    });

    const [showCorrections, setShowCorrections] = useState({
        question1a: false,
        question1b: false,
        question1c: false,
        question2a: false,
        question2b: false,
        question3a: false,
        question3b: false,
    });

    // Réponses attendues
    const correctAnswers = {
        question1a: 'PILE (0): 4\nFACE (1): 6',
        question1b: '10 | 20 | 50 | 100\n4 | 12 | 26 | 50\n6 | 8 | 24 | 50',
        question1c: '100 lancers d\'après cette simulation.',
        question2a: '0: 7\n1: 3\n2: 6\n3: 5\n4: 9\n5: 2\n6: 4\n7: 2\n8: 6\n9: 6',
        question2b: 'Non.',
        question2c: '2 billes .',
        question3b: '',
    };

    const handleInputChange = (field, value) => {
        setAnswers((prev) => ({...prev, [field]: value}));
    };

    const toggleCorrection = (field) => {
        setShowCorrections((prev) => ({...prev, [field]: !prev[field]}));

        if (!answers[field] && !showCorrections[field]) {
            setAnswers((prev) => ({...prev, [field]: correctAnswers[field]}));
        }
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
    const contentRef = useRef();
    if (className === 'Seconde-pythagore') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }
    const initialTableValues = {
        pile: ['', '', '', ''], face: ['', '', '', ''],
    };

    const correctedValues = {
        pile: ['4', '12', '26', '50'], face: ['6', '8', '24', '50'],
    };
    const initialTable2a = Array(10).fill('');
    const correctionTable2a = ['7', '3', '6', '5', '9', '2', '4', '2', '6', '6'];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [table2a, setTable2a] = useState(initialTable2a);
    const handleShowCorrection2a = () => {
        if (!showCorrections.question2a) {
            setTable2a(correctionTable2a);
        }
        toggleCorrection('question2a');
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tableData, setTableData] = useState(initialTableValues);

    const handleShowCorrection1b = () => {
        if (!showCorrections.question1b) {
            setTableData(correctedValues);
        }
        toggleCorrection('question1b');
    };
    return (<>
        <BackButton/>
        <CoinFlip/>
        <div className="tp-container" id="proba-content" ref={contentRef} style={{fontFamily: 'atin Modern Math'}}>
            <PrintManager
                contentRef={contentRef}
                activityName="Echantillons_Aleatoires"
                pageCount={1}
                quality="hd"
            />
            <div className="print-page">
                <header className="tp-header">
                    <FaDice className="header-icon"/>
                    <h1>
                        🎲 Expérimenter la prise d'échantillons aléatoires 📊
                        <br/>
                        <span className="h1-sub">Classe 2nde Mathématiques</span>
                    </h1>
                </header>

                <div className="math-chapter-box green">
                    <FaQuestionCircle className="math-chapter-icon"/>
                    <h2 className="math-chapter-title-test">
                        Simulations avec la calculatrice
                    </h2>
                </div>

                <div className="activity-header">
                    <span className="activity-badge">ACTIVITÉ 1</span>
                    <div className="activity-title">
                            <span className="course-title">
                                <FaDice/> Qui choisir entre PILE ou FACE ?
                            </span>
                    </div>
                </div>
                <div
                    className="d-flex align-items-start flex-wrap"
                    style={{gap: '10px', width: '100%'}}
                >
                    <div style={{flex: 1}}>
                        <div className="renovation-contexte3">
                            <p>
                                🎲 Pour décider qui paiera le prochain café,
                                <span style={{color: '#1e88e5', fontWeight: 'bold'}}> Thomas </span> et
                                <span style={{color: '#43a047', fontWeight: 'bold'}}> Léa </span> jouent à
                                <span style={{fontWeight: 'bold', color: '#1357d3'}}> PILE ou FACE </span>
                                avec une pièce de monnaie.
                            </p>

                            <p>
                                🤔 Léa se demande si les chances d'obtenir <strong
                                style={{color: '#0b15da'}}>PILE</strong>
                                ou <strong style={{color: '#1422bb'}}>FACE</strong> sont vraiment <span
                                style={{fontWeight: 'bold'}}>équitables</span>.
                            </p>

                            <p>
                                🔬 Pour vérifier, elle va simuler plusieurs tirages sur sa calculatrice.
                                Le nombre <strong style={{color: '#42a5f5'}}>0</strong> représente
                                <strong style={{color: '#2d3efb'}}> PILE</strong>, et le nombre
                                <strong style={{color: '#2d3efb'}}> 1</strong> représente <strong
                                style={{color: '#2d3efb'}}>FACE</strong>.
                            </p>

                            <p className="problem-box print-optimized" style={{
                                backgroundColor: '#fff3cd',
                                borderLeft: '5px solid #ffeb3b',
                                padding: '10px',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                printColorAdjust: 'exact',
                                WebkitPrintColorAdjust: 'exact'
                            }}>
                                ❓ <span className="print-bold-optimized" style={{
                                fontWeight: '900',
                                letterSpacing: '0.5px'
                            }}>
                                Combien de lancers sont nécessaires pour obtenir autant de "PILE" que de "FACE" ?
                            </span>
                            </p>
                        </div>


                    </div>
                    <div
                        className="flex-shrink-0"
                        style={{
                            maxWidth: '175px', cursor: 'pointer', marginTop: '5px',
                        }}
                    >
                        <img
                            src={pileouface}
                            alt="Lancer de pièce"
                            className="img-fluid rounded shadow-sm compact-img"
                            onClick={() => openModal(pileouface, 'Lancer de pièce')}
                        />
                    </div>
                </div>
                <section className="tp-section compact">
                    <h3 className="compact-title">
                        <FaDice/> Simulation des lancers
                    </h3>

                    <div className="d-flex flex-nowrap">
                        {/* Colonne gauche - Simulation et question 1b */}
                        <div className="flex-grow-1 pe-2" style={{minWidth: '250px'}}>
                            <div className="question compact">
                                <p className="compact-text">
                                    1a . Simuler 10 lancers de pièce et noter les nombres de PILE et de FACE obtenus.
                                </p>
                                <div className="result-simulation"
                                     style={{fontFamily: 'monospace', whiteSpace: 'pre-wrap'}}>
                                    <div>
                                        <strong>PILE (0):</strong>{' '}
                                        {showCorrections.question1a ? '4' : '......'}
                                    </div>
                                    <div>
                                        <strong>FACE (1):</strong>{' '}
                                        {showCorrections.question1a ? '6' : '......'}
                                    </div>
                                </div>
                                <button
                                    className="correction-btnoptic"
                                    onClick={() => toggleCorrection('question1a')}
                                >
                                    <FaCheck/> Correction
                                </button>
                            </div>

                            <div className="question compact mt-2">
                                <p className="compact-text">
                                    1b . Refaire la simulation avec 20, 50 puis 100 lancers de pièce. Noter les
                                    résultats
                                    obtenus dans un tableau.
                                </p>

                                <button className="correction-btnoptic" onClick={handleShowCorrection1b}>
                                    <FaCheck/> Correction
                                </button>

                                <div className="mt-2">
                                    <h6 className="mb-1">📝 Résultat à compléter :</h6>
                                    <table className="table table-bordered text-center" style={{maxWidth: '450px'}}>
                                        <thead className="table-primary">
                                        <tr>
                                            <th>Nombre de lancers</th>
                                            <th>10</th>
                                            <th>20</th>
                                            <th>50</th>
                                            <th>100</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th className="table-light">PILE</th>
                                            {tableData.pile.map((val, i) => (
                                                <td key={`pile-${i}`}>{val || '...'}</td>))}
                                        </tr>
                                        <tr>
                                            <th className="table-light">FACE</th>
                                            {tableData.face.map((val, i) => (
                                                <td key={`face-${i}`}>{val || '...'}</td>))}
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Colonne droite - Tableau des méthodes */}
                        <div className="info-bubble definition ms-2"
                             style={{minWidth: '350px', maxWidth: '350px', maxHeight: '420px'}}>
                            <div className="info-bubble-title">
                                <FaQuestionCircle/> Méthode
                            </div>
                            <div className="container py-1">
                                <h6 className="mb-1" style={{fontSize: '1rem'}}>🎲 Obtenir un nombre aléatoire 0 ou
                                    1</h6>
                                <table className="table table-bordered text-center align-middle"
                                       style={{fontSize: '0.9rem'}}>
                                    <thead className="table-info">
                                    <tr>
                                        <th style={{width: '30%'}}>Casio</th>
                                        <th style={{width: '30%'}}>NumWorks</th>
                                        <th style={{width: '30%'}}>Texas</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <kbd>MENU</kbd> <kbd>RUN</kbd> <kbd>EXE</kbd><br/>
                                            <code>Int(2 × Ran#)</code> <kbd>EXE</kbd><br/>
                                            <strong>Instructions :</strong><br/>
                                            <kbd>OPTN</kbd> <em>NUM Int</em><br/>
                                            <kbd>OPTN</kbd> <em>Prob Ran#</em>
                                        </td>
                                        <td>
                                            <strong>Calculs</strong> <kbd>OK</kbd><br/>
                                            <code>Randint(0,1)</code><br/>
                                            <strong>Instructions :</strong><br/>
                                            Boîte à outils → Probabilités → Aléatoire
                                        </td>
                                        <td>
                                            <code>RANDINT(0,1)</code> <kbd>ENTRER</kbd><br/>
                                            ou <code>INT(2 × RAND)</code> <kbd>ENTRER</kbd><br/>
                                            <strong>Instructions :</strong><br/>
                                            <kbd>math</kbd> <em>PRB RANDINT</em><br/>
                                            <kbd>math</kbd> <em>NUM INT</em><br/>
                                            <kbd>math</kbd> <em>PRB RAND</em>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="question compact">
                        <p className="compact-text">
                            1c . À partir de combien de lancers peut-on dire qu'il y a autant de chances d'obtenir
                            "PILE"
                            que "FACE" ?
                        </p>
                        <input
                            type="text"
                            className={`answer-input ${showCorrections.question1c ? 'correction-active' : ''}`}
                            value={answers.question1c}
                            onChange={(e) => handleInputChange('question1c', e.target.value)}
                        />
                        <button
                            className="correction-btnoptic"
                            onClick={() => toggleCorrection('question1c')}
                        >
                            <FaCheck/> Correction
                        </button>
                    </div>
                </section>
            </div>
            <div className="print-page">
                <div className="activity-header" style={{marginTop: '30px'}}>
                    <span className="activity-badge">ACTIVITÉ 2</span>
                    <div className="activity-title">
                            <span className="course-title">
                                <FaDice/> Répartition des billes dans des boîtes
                            </span>
                    </div>
                </div>

                <div className="renovation-contexte4">
                    <p>
                        🏫 Le professeur de physique organise une <span
                        style={{color: '#f57c00', fontWeight: 'bold'}}>expérience avec des billes</span>.
                        Il veut étudier comment se répartissent <strong>50 billes</strong> dans
                        <span style={{color: '#6a1b9a', fontWeight: 'bold'}}> 10 boîtes</span>.
                    </p>

                    <p>
                        📦 En théorie, chaque boîte devrait contenir
                        <span style={{color: '#2e7d32', fontWeight: 'bold'}}> 5 billes</span>.
                    </p>

                    <p>
                        🎲 Les billes sont placées de manière <strong>aléatoire</strong> dans les boîtes.
                    </p>


                    <p className="problem-box print-optimized" style={{
                        backgroundColor: '#fff3cd',
                        borderLeft: '5px solid #ffeb3b',
                        padding: '10px',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        printColorAdjust: 'exact',
                        WebkitPrintColorAdjust: 'exact'
                    }}>
                        <span className="print-bold-optimized" style={{
                            fontWeight: '900',
                            letterSpacing: '0.5px'
                        }}>❓
                                Comment simuler la répartition des billes dans les boîtes en utilisant la calculatrice ?
                        </span>

                    </p>
                </div>


                <section className="tp-section compact">
                    <div className="question compact">
                        <p className="compact-text">
                            2a. Avec la calculatrice, générer 50 nombres aléatoires compris entre 0 et 9.
                            Les 10 boîtes sont représentées par les chiffres de 0 à 9.
                            Compter combien de fois apparaît chaque chiffre.
                        </p>

                        <button className="correction-btnoptic" onClick={handleShowCorrection2a}>
                            <FaCheck/> Correction
                        </button>

                        <div className="d-flex flex-wrap mt-3 align-items-start justify-content-between">
                            <div style={{flex: '1 1 auto', minWidth: '250px'}}>
                                <h6 className="mb-2">📊 Répartition des billes (chiffres 0 à 9)</h6>
                                <table className="table table-bordered text-center" style={{maxWidth: '100%'}}>
                                    <thead className="table-primary">
                                    <tr>
                                        {[...Array(10)].map((_, i) => (<th key={`head-${i}`}>{i}</th>))}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        {table2a.map((val, i) => (<td key={`cell-${i}`}>{val || '...'}</td>))}
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Info Bubble aligned to the right */}
                            <div className="info-bubble example ms-3" style={{
                                minWidth: '150px',
                                maxWidth: '200px',
                                padding: '10px',
                                backgroundColor: '#e3f2fd',
                                border: '1px solid #90caf9',
                                borderRadius: '8px',
                                fontSize: '0.85rem'
                            }}>
                                <div className="info-bubble-title mb-1" style={{fontWeight: 'bold', color: '#1976d2'}}>
                                    <FaQuestionCircle className="me-1"/> Exemple
                                </div>
                                <p className="mb-1">Ran#</p>
                                <div className="random-numbers" style={{fontFamily: 'monospace', lineHeight: '1.2'}}>
                                    0.4482429882<br/>
                                    0.3488529404<br/>
                                    0.6916688486<br/>
                                    0.1143085932<br/>
                                    0.9034278973
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="question compact">
                        <p className="compact-text">
                            2b . D'après cette simulation, toutes les boîtes contiennent-elles 5 billes comme prévu ?
                        </p>
                        <input
                            type="text"
                            className={`answer-input ${showCorrections.question2b ? 'correction-active' : ''}`}
                            value={answers.question2b}
                            onChange={(e) => handleInputChange('question2b', e.target.value)}
                        />
                        <button
                            className="correction-btnoptic"
                            onClick={() => toggleCorrection('question2b')}
                        >
                            <FaCheck/> Correction
                        </button>
                    </div>

                    <div className="question compact">
                        <p className="compact-text">
                            3a . Quel est le nombre minimum de billes contenues dans une boîte ?
                        </p>
                        <input
                            type="text"
                            className={`answer-input ${showCorrections.question2c ? 'correction-active' : ''}`}
                            value={answers.question2c}
                            onChange={(e) => handleInputChange('question2c', e.target.value)}
                        />
                        <button
                            className="correction-btnoptic"
                            onClick={() => toggleCorrection('question2c')}
                        >
                            <FaCheck/> Correction
                        </button>
                    </div>
                </section>

                <div className="info-bubble conclusion">
                    <div className="info-bubble-title">
                        <FaQuestionCircle/> Conclusion
                    </div>
                    <p>........................................................................................
                        ........................................................................................</p>
                </div>
            </div>
            <footer className="tp-footer compact">
                <p className="compact-text">Mathématiques 2nde - Probabilités</p>
                <p className="compact-text">TUTO: Échantillons aléatoires</p>
            </footer>

        </div>
    </>);
};

export default EchantillonsAleatoiresAct1;
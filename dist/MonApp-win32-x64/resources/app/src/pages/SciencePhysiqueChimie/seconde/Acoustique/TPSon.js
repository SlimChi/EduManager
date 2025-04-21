import React, { useState } from 'react';
import {FaVolumeUp, FaMicrophone, FaHeadphones, FaPrint, FaCheck, FaHome} from 'react-icons/fa';
import { BsFillQuestionCircleFill, BsSpeedometer2 } from 'react-icons/bs';
import { IoMdSchool } from 'react-icons/io';
import '../../../../styles/activites.css';
import BackButton from "../../../../components/navigation/BackButton";
import tpson from "../../../../assets/tpson.png";
import {GiMusicalNotes, GiSoundWaves} from "react-icons/gi";
import {MdGraphicEq} from "react-icons/md";
import {WiStars} from "react-icons/wi";
import {TbWaveSawTool} from "react-icons/tb";
import PrintManager from "../../../../utils/PrintManager";


const TPSon = () => {
    const [measurements, setMeasurements] = useState({
        f4500: { without: 95, with: 50 },
        f1000: { without: 90, with: 55 }
    });

    const [answers, setAnswers] = useState({
        interpretationA: '',
        interpretationB: '',
        validation: '',
        conclusion: ''
    });

    const [showCorrections, setShowCorrections] = useState({
        interpretationA: false,
        interpretationB: false,
        validation: false,
        conclusion: false
    });

    const correctAnswers = {
        interpretationA: "Les bouchons en mousse sont efficaces car ils réduisent significativement le niveau sonore (atténuation d'environ 30-40 dB selon les fréquences).",
        interpretationB: "Oui, la fréquence influence l'efficacité. Généralement, les bouchons atténuent mieux les hautes fréquences que les basses fréquences.",
        validation: "Les valeurs du fabricant sont plausibles et correspondent à nos mesures expérimentales.",
        conclusion: "Écouter de la musique à volume maximum sans protection présente un risque auditif important, surtout au-delà de 2 heures d'exposition à plus de 90 dB."
    };
    const [modalState, setModalState] = useState({
        show: false,
        imageUrl: '',
        altText: ''
    });
    const handleInputChange = (freq, type, value) => {
        setMeasurements(prev => ({
            ...prev,
            [freq]: {
                ...prev[freq],
                [type]: parseInt(value) || 0
            }
        }));
    };

    const handleAnswerChange = (field, value) => {
        setAnswers(prev => ({
            ...prev,
            [field]: value
        }));
    };

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

    const calculateAttenuation = (freq) => {
        return measurements[freq].without - measurements[freq].with;
    };

    const openModal = (imageUrl, altText) => {
        setModalState({ show: true, imageUrl, altText });
    };
    return (
        <>
            <BackButton />
        <div className="tp-container" id="tp-content">
            {/* Page 1 */}
            <div className="print-page">
                <header className="tp-header">
                   <GiMusicalNotes style={{ marginRight: '1rem', color: '#B8FF12FF', fontSize: '3rem' }}/>
                    <h1>Travaux pratiques - Risques auditifs</h1>
                    <PrintManager/>
                </header>

                <div className="tp-intro">
                    <div className="math-chapter-box ">
                        <h2 className="math-chapter-title "><MdGraphicEq style={{ marginRight: '0.5rem', color: '#ff5e00' }}/>
                            Est-ce risqué de mettre le volume de son smartphone au maximum ?  <FaVolumeUp className="warning-icon" /></h2>
                        <div className="math-chapter-decoration">
                            <svg width="100" height="80" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z M12 12L22 7 M12 12L2 7 M12 12V22 M22 7V17L12 22L2 17V7"
                                      stroke="#ff9500" strokeWidth="2"/>
                                <circle cx="12" cy="12" r="10" stroke="#ff5e00" strokeWidth="1.5"/>
                                <path d="M12 8V16 M8 12H16" stroke="#ff9500" strokeWidth="2"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex-shrink-0" style={{ maxWidth: '400px', cursor: 'pointer', margin: '0 auto', marginTop: '20px' }}>
                        <img
                            src={tpson}
                            alt="II. Une sphère en bois"
                            className="img-fluid rounded shadow-sm compact-img"
                            onClick={() => openModal(tpson, "II. Une sphère en bois")}

                        />
                    </div>
                    <p className="math-text">
                        <TbWaveSawTool className="warning-icon" /> Les sons peuvent présenter un risque dès <strong>85 dB</strong>. Au-delà de <strong>90 dB</strong>,
                        la durée limite d'écoute est de <strong>2 heures par jour</strong>. Vous allez déterminer les risques
                        si vous écoutez des sons au maximum sur votre smartphone et l'efficacité des bouchons antibruit.
                    </p>
                    <p className="math-text">
                        Vous allez utiliser deux smartphones, l'un qui génère le son (haut-parleur) et l'autre qui mesure
                        le niveau d'intensité acoustique L (microphone).
                    </p>
                </div>

                <section className="tp-section">
                    <h3><FaHeadphones /> Matériel nécessaire</h3>
                    <ul className="material-list">
                        <li>2 smartphones</li>
                        <li>Des écouteurs</li>
                        <li>1 bouchon antibruit</li>
                        <li>1 tuyau de plastique souple de 25 mm de long et de 10 mm de diamètre</li>
                    </ul>
                </section>

                <section className="tp-section compact">
                    <h3><BsSpeedometer2 /> Protocole expérimental</h3>
                    <div className="protocol-step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h4>Smartphone n°1 : génération du son</h4>
                            <div className="d-flex align-items-start gap-3">
                                <div className="flex-grow-1">

                                <p>Téléchargez une application qui génère des sons.</p>
                                <p>Branchez les écouteurs et insérez-en un dans le tuyau simulant le conduit auditif.</p>
                                <p>
                                    Démarrez l'application et générez un son de fréquence <strong>4500 Hz</strong> à intensité maximale.
                                </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Page 2 */}
            <div className="print-page">
                <section className="tp-section compact" style={{ marginTop: 0 }}>
                    <div className="protocol-step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h4>Smartphone n°2 : mesure du niveau d'intensité acoustique</h4>
                            <div className="d-flex align-items-start gap-3">
                                <div className="flex-grow-1">
                                <p>Téléchargez une application sonomètre.</p>
                                <p>Démarrez-la et approchez le tuyau en plastique du microphone du smartphone n°2.</p>
                                <p>Relevez la valeur du niveau d'intensité acoustique L₁.</p>
                                <p>Insérez un bouchon en mousse dans le tuyau en plastique et relevez la nouvelle valeur L₂.</p>
                                <p>Reproduisez l'expérience avec une fréquence de <strong>1000 Hz</strong> .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tp-section measurements">
                    <h3><FaMicrophone /> Tableau de mesures</h3>
                    <table className="measurement-table printable-table">
                        <thead>
                        <tr>
                            <th>Fréquence (Hz)</th>
                            <th>L₁ (sans bouchon) (dB)</th>
                            <th>L₂ (avec bouchon) (dB)</th>
                            <th>Atténuation (dB)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>4500</td>
                            <td>
                                <input
                                    type="number"
                                    value={measurements.f4500.without}
                                    onChange={(e) => handleInputChange('f4500', 'without', e.target.value)}
                                    className="measure-input"
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={measurements.f4500.with}
                                    onChange={(e) => handleInputChange('f4500', 'with', e.target.value)}
                                    className="measure-input"
                                />
                            </td>
                            <td className="result-cell">{calculateAttenuation('f4500')}</td>
                        </tr>
                        <tr>
                            <td>1000</td>
                            <td>
                                <input
                                    type="number"
                                    value={measurements.f1000.without}
                                    onChange={(e) => handleInputChange('f1000', 'without', e.target.value)}
                                    className="measure-input"
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={measurements.f1000.with}
                                    onChange={(e) => handleInputChange('f1000', 'with', e.target.value)}
                                    className="measure-input"
                                />
                            </td>
                            <td className="result-cell">{calculateAttenuation('f1000')}</td>
                        </tr>
                        </tbody>
                    </table>
                </section>

                <section className="tp-section interpretation">
                    <div className="step-number">3</div>
                    <h3> Interprétation</h3>
                    <div className="question">
                        <p><strong>a)</strong> Les bouchons en mousse vous paraissent-ils efficaces ? Justifiez votre réponse.</p>
                        <div className="answer-container">
                            <textarea
                                className={`answer-input ${showCorrections.interpretationA ? 'correction-active' : ''}`}
                                rows="3"
                                value={answers.interpretationA}
                                onChange={(e) => handleAnswerChange('interpretationA', e.target.value)}
                            />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('interpretationA')}
                            >
                                <FaCheck /> Correction
                            </button>
                        </div>
                    </div>

                    <div className="question">
                        <p><strong>b)</strong> La fréquence a-t-elle une influence sur l'efficacité des bouchons ?</p>
                        <div className="answer-container">
                            <textarea
                                className={`answer-input ${showCorrections.interpretationB ? 'correction-active' : ''}`}
                                rows="3"
                                value={answers.interpretationB}
                                onChange={(e) => handleAnswerChange('interpretationB', e.target.value)}
                            />
                            <button
                                className="correction-btn"
                                onClick={() => toggleCorrection('interpretationB')}
                            >
                                <FaCheck /> Correction
                            </button>
                        </div>
                    </div>
                </section>

                <section className="tp-section validation">
                    <div className="step-number" style={{ position: 'relative' }}>4</div>
                    <h3>Validation</h3>
                    <p>Le tableau ci-dessous figure sur la boîte des bouchons antibruit. Êtes-vous en accord avec ces valeurs ?</p>
                    <table className="reference-table printable-table">
                        <thead>
                        <tr>
                            <th>Fréquence (Hz)</th>
                            <th>1000</th>
                            <th>4500</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Atténuation (dB)</td>
                            <td>35</td>
                            <td>45</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="answer-container">
                        <textarea
                            className={`answer-input ${showCorrections.validation ? 'correction-active' : ''}`}
                            rows="3"
                            value={answers.validation}
                            onChange={(e) => handleAnswerChange('validation', e.target.value)}
                        />
                        <button
                            className="correction-btn"
                            onClick={() => toggleCorrection('validation')}
                        >
                            <FaCheck /> Correction
                        </button>
                    </div>
                </section>

                <section className="tp-section compact">
                    <div className="step-number">5</div>
                    <h3>Conclusion</h3>
                    <div className="d-flex align-items-start gap-3">
                        <div className="flex-grow-1">
                    <p>
                        À l'aide des résultats obtenus, déduisez si vous courez un risque auditif à écouter le son émis sans bouchons à intensité maximale.
                        Justifiez votre réponse.
                    </p>
                        </div>
                    </div>
                    <div className="answer-container">
                        <textarea
                            className={`answer-input ${showCorrections.conclusion ? 'correction-active' : ''}`}
                            rows="4"
                            value={answers.conclusion}
                            onChange={(e) => handleAnswerChange('conclusion', e.target.value)}
                        />
                        <button
                            className="correction-btn"
                            onClick={() => toggleCorrection('conclusion')}
                        >
                            <FaCheck /> Correction
                        </button>
                    </div>
                </section>

                <footer className="tp-footer">
                    <p>TP conçu pour une impression au format A4 - Sciences Physiques</p>
                </footer>
            </div>
        </div>
        </>
    );
};

export default TPSon;
import React, {useRef, useState} from 'react';
import {
    FaLightbulb,
    FaSun,
    FaRegLightbulb,
    FaExclamationTriangle,
    FaChartLine,
    FaInfoCircle,
    FaBook,
    FaPrint
} from 'react-icons/fa';
import '../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../components/navigation/BackButton';
import ModalImage from '../../../utils/ModalImage';
import PrintManager from '../../../utils/PrintManager';
import AutoEvaluationGrid from '../../../config/AutoEvaluationGrid';
import spectreSignaux from '../../../assets/spectreSignaux.png';

const BilanSignaux = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const [modalState, setModalState] = useState({
        show: false, imageUrl: '', altText: '',
    });
    const contentRef = useRef();
    const openModal = (imageUrl, altText) => {
        setModalState({show: true, imageUrl, altText});
    };

    const closeModal = () => {
        setModalState((prev) => ({...prev, show: false}));
    };

    if (className === 'Terminale-science-signaux') {
        return <div>Cette activité n'est pas disponible pour cette classe.</div>;
    }

    return (<>
        <BackButton/>
        <div
            className="tp-container"
            id="bilan-signaux-content"
            ref={contentRef}
        >
            <PrintManager
                contentRef={contentRef}
                activityName="Bilan_Signaux_Lumineux"
                pageCount={3}
                quality="high"
            />

            {/* Page 1 - En-tête et introduction */}
            <div className="print-page">
                <header className="tp-header mt-0 text-center">
                    <h1>
                        💡 Bilan - <FaLightbulb/> Caractérisation des sources lumineuses
                    </h1>
                </header>
                <h3 className="section-title">
                    <FaSun style={{color: '#ff9800'}}/> 1. Spectre lumineux
                </h3>
                <div className="science-card-header mt-0" style={{backgroundColor: '#e1bee7'}}>
                    <h3>Définition</h3>
                </div>
                <div className="science-card-content">
                    <div className="sources-grid">
                        <div className="source-card p-1">
                            <p>
                                <strong>Spectre d'une lumière</strong> : Image obtenue en décomposant
                                cette lumière avec un prisme ou un spectroscope.
                            </p>
                        </div>
                        <div className="source-card p-1">
                            <p>
                                <strong>Spectre d'émission</strong> : Spectre de la lumière directement
                                émise par une source.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="science-card-header" style={{backgroundColor: '#bbdefb'}}>
                    <h3>Types de sources</h3>
                </div>
                <div className="science-card-content">
                    <div className="sources-grid p-0">
                        <div className="source-card hot-source p-1">
                            <h4><FaSun style={{color: '#ff5722'}}/> Sources "chaudes"</h4>
                            <ul>
                                <li>Produisent lumière + chaleur</li>
                                <li>Exemples : Lampe à incandescence, Soleil</li>
                                <li>Spectre <strong>continu</strong></li>
                            </ul>
                        </div>
                        <div className="source-card cold-source p-1">
                            <h4><FaRegLightbulb style={{color: '#2196f3'}}/> Sources "froides"</h4>
                            <ul>
                                <li>Produisent essentiellement de la lumière</li>
                                <li>Exemples : LED, lampe fluocompacte, laser</li>
                                <li>Spectre <strong>discontinu</strong> (raies)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="spectre-comparison text-center mb-2">
                        <img
                            src={spectreSignaux}
                            alt="Evaluation des forces"
                            className="img-fluid rounded shadow-sm compact-img"
                            onClick={() => openModal(spectreSignaux, 'Evaluation des forces')}
                        />
                    </div>
                </div>

                <h3 className="section-title">
                    <FaChartLine style={{color: '#4caf50'}}/> 🔋 2. Efficacité énergétique
                </h3>

                <div className="sources-grid">
                    <div className="source-card p-3" style={{backgroundColor: '#e8f5e9'}}>
                        <h3>💡 Types de lampes</h3>
                        <ul className="lamps-list">
                            <li><strong>LED</strong> – Haute efficacité, longue durée</li>
                            <li><strong>Fluorescentes compactes</strong> – Économiques</li>
                            <li><strong>Incandescentes classiques</strong> – Interdites depuis 2012</li>
                            <li><strong>Incandescences halogènes</strong> – Meilleur rendement que classiques
                            </li>
                        </ul>
                    </div>

                    <div className="source-card p-3" style={{backgroundColor: '#fff8e1'}}>
                        <h3>⚡ Efficacité énergétique</h3>
                        <p><strong>Définition</strong> : Sans unité, définie par rapport à la lampe à
                            incandescence classique.</p>
                        <p><strong>Rendement lumineux</strong> : En lumen/watt (lm/W) – Plus élevé = meilleure
                            efficacité.</p>
                        <p><strong>Étiquette énergie</strong> : Classe A (meilleure) à G (moins bonne).</p>
                    </div>
                </div>

                <h3 className="section-title" style={{marginTop: '30px'}}>
                    <FaExclamationTriangle style={{color: '#f44336'}}/> 🔴 3. Laser
                </h3>

                <div className="sources-grid">
                    <div className="source-card p-3" style={{backgroundColor: '#ffebee'}}>
                        <h3>🔬 Caractéristiques du laser</h3>
                        <ul>
                            <li><strong>Monochromatique</strong> – Longueur d’onde unique</li>
                            <li><strong>Unidirectionnelle</strong> – Très directive → grande densité d’énergie
                            </li>
                            <li><strong>Dangereux</strong> pour l’œil à cause de la haute densité d’énergie</li>
                        </ul>
                    </div>
                </div>

            </div>

            <footer className="tp-footer">
                <p>Bilan - Physique-Chimie Terminale</p>
                <p>Lycée Pierre-Joseph Laurent</p>
            </footer>
        </div>

        {modalState.show && (
            <ModalImage
                imageUrl={modalState.imageUrl}
                altText={modalState.altText}
                onClose={closeModal}
            />
        )}
    </>);
};

export default BilanSignaux;
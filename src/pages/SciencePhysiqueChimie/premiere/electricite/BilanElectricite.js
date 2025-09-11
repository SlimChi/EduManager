import React, {useRef} from 'react';
import {FaBolt, FaCalculator, FaIndustry} from 'react-icons/fa';
import '../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../components/navigation/BackButton';
import PrintManager from '../../../../utils/PrintManager';

// Images (à remplacer par les images appropriées)
import plaqueSignaletique from "../../../../assets/plaqueSignaletique.png";
import joulemettre from "../../../../assets/joulemettre.png";
import compteurElectrique from "../../../../assets/compteurElectrique.png";

const BilanElectricite = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const contentRef = useRef();

    return (
        <>
            <BackButton/>
            <div className="tp-container" id="electricite-content" ref={contentRef}>
                <PrintManager contentRef={contentRef} activityName="Bilan_Electricite_Puissance_Energie" pageCount={1}
                              quality="hd"/>

                {/* PAGE 1 - BILAN COMPLET */}
                <div className="print-page">
                    <section className="tp-section compact">
                        {/* En-tête */}
                        <div className="math-chapter-box green" style={{
                            padding: '8px',
                            margin: '-8px -12px 12px -12px',
                            borderRadius: '0',
                            background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
                            color: 'white'
                        }}>
                            <h3 className="math-chapter-title-test mb-0" style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: '18px',
                                margin: '0'
                            }}>
                                <FaBolt style={{marginRight: '6px'}}/>
                                Bilan - Puissance et Énergie Électrique
                            </h3>
                        </div>

                        {/* 1. La puissance électrique */}
                        <div className="bilan-section" style={{padding: '10px', marginBottom: '12px'}}>
                            <h4 className="bilan-title" style={{marginBottom: '8px'}}>
                                <span className="bilan-number">1</span>
                                La puissance électrique
                            </h4>

                            <div className="bilan-content">
                                <div className="bilan-definition" style={{padding: '10px', marginBottom: '8px'}}>
                                    <ul className="bilan-list" style={{margin: '6px 0', paddingLeft: '16px'}}>
                                        <li style={{marginBottom: '4px'}}>La puissance électrique est donnée par le
                                            constructeur pour chaque appareil électrique.
                                        </li>
                                        <li style={{
                                            marginBottom: '0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            gap: '8px'
                                        }}>
                                            La plaque signalétique indique
                                            une <strong>puissance</strong> qui se calcule à partir de la relation :
                                            <div className="math-formula-block" style={{
                                                padding: '8px 12px',
                                                textAlign: 'center',
                                                fontSize: '16px',
                                                fontFamily: 'Times New Roman, serif',
                                                background: '#f8f9fa',
                                                borderRadius: '6px',
                                                display: 'inline-block',
                                                margin: '0'
                                            }}>
                                                P = U × I
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bilan-remark" style={{padding: '8px', margin: '8px 0'}}>
                                    <p style={{margin: '0'}}>
                                        avec - <span className="math-var">P</span> : puissance en watts (W) ;<br/>
                                        - <span className="math-var">U</span> : tension en volts (V) ;<br/>
                                        - <span className="math-var">I</span> : intensité en ampères (A).
                                    </p>
                                </div>

                                <div className="bilan-example" style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    padding: '10px',
                                    gap: '12px'
                                }}>
                                    <div style={{flex: 1}}>
                                        <h5 className="example-title" style={{marginBottom: '6px'}}>
                                            <FaIndustry className="example-icon"/>
                                            Exemple de plaque signalétique
                                        </h5>

                                        <div className="example-table-container">
                                            <table className="bilan-table" style={{fontSize: '12px', width: '100%'}}>
                                                <thead>
                                                <tr>
                                                    <th colSpan="2" style={{
                                                        textAlign: 'center',
                                                        background: '#e8f5e9'
                                                    }}>Caractéristiques techniques
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td style={{fontWeight: 'bold'}}>Puissance</td>
                                                    <td>240 W</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontWeight: 'bold'}}>Tension</td>
                                                    <td>230 V ~</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontWeight: 'bold'}}>Fréquence</td>
                                                    <td>50 Hz</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontWeight: 'bold'}}>N° de série</td>
                                                    <td>08/04/119338</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Image alignée à droite */}
                                    <div style={{maxWidth: '200px', textAlign: 'center'}}>
                                        <img
                                            src={plaqueSignaletique}
                                            alt="Plaque signalétique"
                                            style={{width: '100%', height: 'auto', maxHeight: '120px'}}
                                        />
                                        <p style={{fontSize: '10px', color: '#666', margin: '4px 0 0 0'}}>Plaque
                                            signalétique</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. L'énergie électrique */}
                        <div className="bilan-section" style={{padding: '10px', marginBottom: '12px'}}>
                            <h4 className="bilan-title" style={{marginBottom: '8px'}}>
                                <span className="bilan-number">2</span>
                                L'énergie électrique
                            </h4>

                            <div className="bilan-content">
                                <div className="bilan-definition" style={{padding: '10px', marginBottom: '8px'}}>
                                    <h5 className="example-title" style={{marginBottom: '6px'}}>
                                        <FaCalculator className="example-icon"/>
                                        Appareils de mesure
                                    </h5>
                                    <ul className="bilan-list" style={{margin: '6px 0', paddingLeft: '16px'}}>
                                        <li style={{marginBottom: '4px'}}>L'énergie électrique se mesure avec
                                            un <strong>joulemètre</strong> ou un <strong>compteur électrique</strong>.
                                        </li>
                                        <li style={{marginBottom: '0'}}>Ponctuellement, un particulier peut utiliser
                                            un <strong>consomètre</strong> pour contrôler la consommation électrique
                                            d'un appareil donné.
                                        </li>
                                    </ul>
                                </div>

                                <div className="bilan-example" style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '10px',
                                    gap: '12px',
                                    marginBottom: '12px'
                                }}>
                                    <div style={{flex: 1, textAlign: 'center'}}>
                                        <img
                                            src={joulemettre}
                                            alt="Joulemètre"
                                            style={{width: '20%', height: 'auto', maxHeight: '80px'}}
                                        />
                                        <p style={{fontSize: '10px', color: '#666', margin: '4px 0 0 0'}}>Joulemètre</p>
                                    </div>
                                    <div style={{flex: 1, textAlign: 'center'}}>
                                        <img
                                            src={compteurElectrique}
                                            alt="Compteur électrique"
                                            style={{width: '20%', height: 'auto', maxHeight: '80px'}}
                                        />
                                        <p style={{fontSize: '10px', color: '#666', margin: '4px 0 0 0'}}>Compteur
                                            électrique</p>
                                    </div>
                                </div>

                                <div className="bilan-definition" style={{padding: '10px', marginBottom: '8px'}}>
                                    <h5 className="example-title" style={{marginBottom: '6px'}}>
                                        <FaCalculator className="example-icon"/>
                                        Calcul de l'énergie consommée
                                    </h5>
                                    <p style={{margin: '0 0 8px 0'}}>
                                        L'énergie électrique consommée dépend de la <strong>puissance de l'appareil
                                        concerné</strong> ainsi que du <strong>temps d'utilisation</strong>.
                                    </p>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        margin: '10px 0',
                                        flexWrap: 'wrap'
                                    }}>
                                        <p style={{margin: '0', whiteSpace: 'nowrap'}}>Elle se calcule à l'aide de la
                                            formule :</p>
                                        <div className="math-formula-block" style={{
                                            padding: '12px',
                                            textAlign: 'center',
                                            fontSize: '18px',
                                            fontFamily: 'Times New Roman, serif',
                                            background: '#f8f9fa',
                                            borderRadius: '6px',
                                            flex: '1',
                                            minWidth: '120px'
                                        }}>
                                            E = P × t
                                        </div>
                                    </div>

                                    <p style={{margin: '8px 0'}}>Il existe deux unités possibles pour l'énergie qui
                                        dépendent de l'unité utilisée pour le temps.</p>

                                    <table className="bilan-table"
                                           style={{fontSize: '12px', width: '100%', margin: '8px 0'}}>
                                        <thead>
                                        <tr>
                                            <th>E</th>
                                            <th>P</th>
                                            <th>t</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>joule (J)</td>
                                            <td>watt (W)</td>
                                            <td>seconde (s)</td>
                                        </tr>
                                        <tr>
                                            <td>wattheure (Wh)</td>
                                            <td>watt (W)</td>
                                            <td>heure (h)</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* 3. Conversions */}
                        <div className="bilan-section" style={{padding: '10px', marginBottom: '12px'}}>
                            <h4 className="bilan-title" style={{marginBottom: '8px'}}>
                                <span className="bilan-number">3</span>
                                Conversions
                            </h4>

                            <div className="bilan-content">
                                <div className="bilan-definition" style={{padding: '10px'}}>
                                    <ul className="bilan-list" style={{margin: '6px 0', paddingLeft: '16px'}}>
                                        <li style={{
                                            marginBottom: '4px',
                                            display: 'inline-block',
                                            width: '48%',
                                            marginRight: '2%'
                                        }}>1 h = 3 600 s
                                        </li>
                                        <li style={{marginBottom: '4px', display: 'inline-block', width: '48%'}}>1 Wh =
                                            3 600 J
                                        </li>
                                        <li style={{
                                            marginBottom: '4px',
                                            display: 'inline-block',
                                            width: '48%',
                                            marginRight: '2%'
                                        }}>1 kWh = 1 000 Wh
                                        </li>
                                        <li style={{marginBottom: '0', display: 'inline-block', width: '48%'}}>1 kJ = 1
                                            000 J
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Style intégré pour une meilleure présentation */}
                        <style jsx>{`
                          .bilan-section {
                            background: white;
                            border-radius: 6px;
                            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
                          }

                          .bilan-title {
                            display: flex;
                            align-items: center;
                            color: #2e7d32;
                            padding-bottom: 6px;
                            border-bottom: 1px solid #e8f5e9;
                            font-size: 16px;
                          }

                          .bilan-number {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            width: 24px;
                            height: 24px;
                            background: #2e7d32;
                            color: white;
                            border-radius: 50%;
                            margin-right: 8px;
                            font-weight: bold;
                            font-size: 14px;
                          }

                          .bilan-definition {
                            background: #ffffff;
                            border-radius: 4px;
                            border-left: 3px solid #4caf50;
                          }

                          .bilan-remark {
                            background: #f1f8e9;
                            border-radius: 4px;
                            border-left: 3px solid #689f38;
                          }

                          .bilan-example {
                            background: #ffffff;
                            border-radius: 4px;
                          }

                          .example-title {
                            display: flex;
                            align-items: center;
                            color: #388e3c;
                            font-size: 14px;
                          }

                          .example-icon {
                            margin-right: 6px;
                            font-size: 14px;
                          }

                          .bilan-table {
                            width: 100%;
                            border-collapse: collapse;
                            background: white;
                            font-size: 12px;
                          }

                          .bilan-table th, .bilan-table td {
                            border: 1px solid #ddd;
                            padding: 6px 8px;
                            text-align: left;
                          }

                          .bilan-table th {
                            background: #e8f5e9;
                            font-weight: bold;
                          }

                          .math-var {
                            font-style: italic;
                            font-weight: bold;
                            color: #2e7d32;
                            font-size: 14px;
                          }

                          .math-formula-block {
                            font-family: 'Times New Roman', serif;
                            font-style: italic;
                            background: #f8f9fa;
                            border-radius: 4px;
                            border: 1px solid #e0e0e0;
                          }

                          .bilan-list {
                            margin: 6px 0;
                            padding-left: 16px;
                          }

                          .bilan-list li {
                            margin-bottom: 4px;
                          }
                        `}</style>
                    </section>
                </div>
            </div>
        </>
    );
};

export default BilanElectricite;
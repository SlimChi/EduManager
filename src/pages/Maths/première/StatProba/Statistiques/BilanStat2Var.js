import React, {useRef} from 'react';
import {FaChartLine, FaCalculator, FaTable} from 'react-icons/fa';
import '../../../../../styles/activites.css';
import {useLocation, useParams} from 'react-router-dom';
import BackButton from '../../../../../components/navigation/BackButton';
import PrintManager from '../../../../../utils/PrintManager';
import adhstat from "../../../../../assets/adhestat.png";
import bilanstat from "../../../../../assets/bilanstat.png"

const BilanStat2Var = () => {
    const {classId} = useParams();
    const location = useLocation();
    const className = location.state?.className || '';
    const contentRef = useRef();

    return (
        <>
            <BackButton/>
            <div className="tp-container" id="statistiques-content" ref={contentRef}>
                <PrintManager contentRef={contentRef} activityName="Bilan_Statistiques_2_Variables" pageCount={1}
                              quality="hd"/>

                {/* PAGE 1 - BILAN COMPLET */}
                <div className="print-page">
                    <section className="tp-section compact">
                        {/* En-tête */}
                        <div className="math-chapter-box blue" style={{
                            padding: '8px',
                            margin: '-8px -12px 12px -12px',
                            borderRadius: '0',
                            background: 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
                            color: 'white'
                        }}>
                            <h3 className="math-chapter-title-test mb-0" style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: '18px',
                                margin: '0'
                            }}>
                                <FaChartLine style={{marginRight: '6px'}}/>
                                Bilan - Statistiques à Deux Variables
                            </h3>
                        </div>

                        {/* 1. Série statistique à deux variables */}
                        <div className="bilan-section" style={{padding: '10px', marginBottom: '12px'}}>
                            <h4 className="bilan-title" style={{marginBottom: '8px'}}>
                                <span className="bilan-number">1</span>
                                Série statistique à deux variables et nuage de points
                            </h4>

                            <div className="bilan-content">
                                <div className="bilan-definition" style={{padding: '10px', marginBottom: '8px'}}>
                                    <p style={{margin: '0 0 6px 0'}}>Une <strong>...........................................
                                        .......</strong> est une série statistique pour laquelle on
                                        étudie deux
                                        caractères simultanément pour une même population.</p>
                                    <p style={{margin: '0'}}>Ces deux caractères sont notés le plus souvent <span
                                        className="math-var">x</span> et <span className="math-var">y</span> et on a
                                        alors des couples de valeurs notés <span className="math-var">(x; y)</span>.</p>
                                </div>

                                <p className="bilan-remark" style={{padding: '8px', margin: '8px 0'}}>On peut
                                    représenter graphiquement la série statistique par un <strong>..................................
                                    </strong>.</p>

                                <div className="bilan-example" style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    padding: '10px',
                                    gap: '12px'
                                }}>
                                    <div style={{flex: 1}}>
                                        <h5 className="example-title" style={{marginBottom: '6px'}}>
                                            <FaTable className="example-icon"/>
                                            Exemple
                                        </h5>
                                        <p style={{margin: '0 0 8px 0'}}>
                                            On étudie l'évolution du nombre d'adhérents d'un club de judo au cours des
                                            années, de 2016 à 2020.
                                        </p>

                                        <div className="example-table-container">
                                            <table className="bilan-table" style={{fontSize: '12px'}}>
                                                <thead>
                                                <tr>
                                                    <th>Année <span className="math-var">x_i</span></th>
                                                    <th>2019</th>
                                                    <th>2020</th>
                                                    <th>2021</th>
                                                    <th>2022</th>
                                                    <th>2023</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>Nombre d'adhérents <span className="math-var">y_i</span></td>
                                                    <td>62</td>
                                                    <td>75</td>
                                                    <td>82</td>
                                                    <td>94</td>
                                                    <td>100</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Image alignée à droite */}
                                    <div style={{maxWidth: '280px'}}>
                                        <img
                                            src={adhstat}
                                            alt="Diagramme des dépenses"
                                            style={{width: '100%', height: 'auto'}}
                                        />
                                    </div>
                                </div>
                            </div>

                            <h4 className="bilan-title" style={{marginBottom: '8px'}}>
                                <span className="bilan-number">2</span>
                                Ajustement affine
                            </h4>

                            <div className="bilan-content">
                                <div className="bilan-definition" style={{padding: '10px', marginBottom: '8px'}}>
                                    <ul className="bilan-list" style={{margin: '6px 0', paddingLeft: '16px'}}>
                                        <li style={{marginBottom: '4px'}}>Lorsque les points du nuage sont presque
                                            alignés, on peut ajuster le nuage par une droite,
                                            la <strong>..........................................</strong>.
                                        </li>
                                        <li style={{marginBottom: '4px'}}>Les fonctions affines étant représentées
                                            graphiquement par des droites, on parle
                                            d'<strong>.........................................</strong>.
                                        </li>
                                        <li style={{marginBottom: '4px'}}>L'équation de la droite d'ajustement de <span
                                            className="math-var">y</span> en <span className="math-var">x</span> est de
                                            la forme <span
                                                className="math-formula">........................</span> avec <span
                                                className="math-var">a</span>, <span className="math-var">b</span> ∈ ℝ.
                                        </li>
                                        <li style={{marginBottom: '0'}}>Par le calcul ou graphiquement, on
                                            peut <strong>interpoler</strong> ou <strong>extrapoler</strong> des valeurs
                                            inconnues selon que la détermination se fait au sein ou en dehors des
                                            valeurs observées.
                                        </li>
                                    </ul>
                                </div>

                                <div className="bilan-example" style={{padding: '10px'}}>
                                    <h5 className="example-title" style={{marginBottom: '6px'}}>
                                        <FaCalculator className="example-icon"/>
                                        Exemple
                                    </h5>

                                    <p style={{margin: '0 0 8px 0'}}>
                                        À partir du nuage de points de l'exemple précédent, on peut tracer la droite
                                        d'ajustement et obtenir son équation à l'aide de la calculatrice ou d'un
                                        tableur.
                                    </p>

                                    {/* Bloc équation + image côte à côte */}
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        marginBottom: '8px',
                                        gap: '12px'
                                    }}>
                                        <div className="math-result" style={{flex: 1}}>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                margin: '4px 0'
                                            }}>
                                                <p style={{margin: 0}}>On obtient l'équation :</p>
                                                <div className="math-formula-block"
                                                     style={{padding: '4px 8px', fontSize: '16px'}}>
                                                    y = 9,5x - 19117

                                                </div>
                                            </div>


                                            <div className="calculation-item"
                                                 style={{padding: '10px', marginBottom: '8px'}}>
                                                <p className="calculation-type"
                                                   style={{margin: '0 0 4px 0'}}>Extrapolation</p>
                                                <p style={{margin: '0 0 6px 0'}}>
                                                    On utilise cette équation pour calculer la valeur de <span
                                                    className="math-var">y</span> lorsque <span
                                                    className="math-var">x</span> = 2022 pour extrapoler le nombre
                                                    d'adhérents possible en 2022 si l'évolution reste identique.
                                                </p>
                                                <div className="math-formula-block"
                                                     style={{padding: '8px', fontSize: '16px', margin: '4px 0'}}>y = 9,5
                                                    × ........ - 19117 = ......
                                                </div>
                                                <p className="calculation-conclusion" style={{margin: '4px 0 0 0'}}>Il y
                                                    aura donc ...... adhérents en 2022.</p>
                                            </div>
                                        </div>

                                        <div style={{maxWidth: '300px'}}>
                                            <img
                                                src={bilanstat}
                                                alt="Diagramme des dépenses"
                                                style={{width: '100%', height: 'auto'}}
                                            />
                                        </div>
                                    </div>

                                    <div className="calculation-example">
                                    </div>

                                    <div className="bilan-note" style={{padding: '8px', marginTop: '8px'}}>
                                        <p style={{margin: '0'}}>
                                            La méthode, utilisée par les outils numériques tels que la calculatrice ou
                                            les tableurs pour réaliser l'ajustement affine, est appelée <strong>méthode
                                            des moindres carrés</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h4 className="bilan-title" style={{marginBottom: '5px'}}>
                                <span className="bilan-number">3</span>
                                Pertinence d'un ajustement affine
                            </h4>

                            <div style={{display: 'flex', gap: '12px', marginBottom: '-30px'}}>
                                {/* Colonne de gauche */}
                                <div style={{flex: 1}}>
                                    <div className="bilan-definition" style={{padding: '10px', marginBottom: '5px'}}>
                                        <ul className="bilan-list" style={{margin: '6px 0', paddingLeft: '16px'}}>
                                            <li style={{marginBottom: '2px'}}>Le <strong>coefficient de
                                                détermination</strong> <span className="math-var">R²</span> permet de
                                                juger de la pertinence de l'ajustement.
                                            </li>
                                            <li style={{marginBottom: '2px'}}>Ce coefficient peut s'obtenir à l'aide de
                                                la calculatrice ou d'un logiciel de type tableur.
                                            </li>
                                            <li style={{marginBottom: '0'}}><span className="math-var">R²</span> est
                                                compris entre 0 et 1. Plus il est proche de la valeur 1, plus on peut
                                                considérer que l'ajustement affine est pertinent.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Colonne de droite */}
                                <div style={{flex: 1}}>
                                    <div className="bilan-example" style={{padding: '10px'}}>
                                        <h5 className="example-title" style={{marginBottom: '6px'}}>
                                            <FaCalculator className="example-icon"/>
                                            Exemple
                                        </h5>

                                        <div className="math-result">
                                            <p style={{margin: '0 0 4px 0'}}>Pour l'ajustement affine réalisé
                                                précédemment, on obtient :</p>
                                            <div className="math-formula-block"
                                                 style={{padding: '8px', fontSize: '16px', margin: '4px 0'}}>R² = 0,9861
                                            </div>
                                            <p className="calculation-conclusion"
                                               style={{margin: '4px 0 0 0'}}>L'ajustement est donc pertinent.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Style intégré pour une meilleure présentation */}
                        <style jsx>{`
                          .bilan-section {
                            background: white;
                            border-radius: 6px;
                            box-shadow: 0 1px 4px rgb(255, 255, 255);
                          }

                          .bilan-title {
                            display: flex;
                            align-items: center;
                            color: #1565c0;
                            padding-bottom: 6px;
                            border-bottom: 1px solid #e3f2fd;
                            font-size: 16px;
                          }

                          .bilan-number {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            width: 24px;
                            height: 24px;
                            background: #1565c0;
                            color: white;
                            border-radius: 50%;
                            margin-right: 8px;
                            font-weight: bold;
                            font-size: 14px;
                          }

                          .bilan-definition {
                            background: #ffffff;
                            border-radius: 4px;
                            border-left: 3px solid #1976d2;
                          }

                          .bilan-remark {
                            background: #fff8e1;
                            border-radius: 4px;
                            border-left: 3px solid #ffa000;
                          }

                          .bilan-example {
                            background: #ffffff;
                            border-radius: 4px;
                          }

                          .example-title {
                            display: flex;
                            align-items: center;
                            color: #d32f2f;
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
                            text-align: center;
                          }

                          .bilan-table th {
                            background: #e3f2fd;
                            font-weight: bold;
                          }

                          .math-var {
                            font-style: italic;
                            font-weight: bold;
                            color: #1565c0;
                            font-size: 14px;
                          }

                          .math-formula {
                            font-family: 'Times New Roman', serif;
                            font-style: italic;
                            background: #ffffff;
                            padding: 1px 4px;
                            border-radius: 3px;
                            font-size: 14px;
                          }

                          .math-formula-block {
                            font-family: 'Times New Roman', serif;
                            font-style: italic;
                            text-align: center;
                            background: #f8f9fa;
                            border-radius: 4px;
                            border: 1px solid #ffffff;
                          }

                          .calculation-item {
                            background: white;
                            border-radius: 4px;
                            border-left: 3px solid #4caf50;
                          }

                          .calculation-type {
                            font-weight: bold;
                            color: #2e7d32;
                            font-size: 14px;
                          }

                          .calculation-conclusion {
                            font-weight: 500;
                            color: #388e3c;
                            font-size: 14px;
                          }

                          .bilan-note {
                            background: #e8f5e8;
                            border-radius: 4px;
                            border-left: 3px solid #4caf50;
                          }
                        `}</style>
                    </section>
                </div>
            </div>
        </>
    );
};

export default BilanStat2Var;